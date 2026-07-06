/**
 * Webhook Outrank → salva ogni articolo come file Markdown nel repo.
 *
 * App Router Route Handler (runtime Node, NON Edge).
 * URL in produzione: https://aestima.it/api/outrank
 *
 * Flusso:
 *  1. Outrank chiama questo endpoint (POST) a ogni pubblicazione.
 *  2. Validiamo il Bearer token contro OUTRANK_SECRET.
 *  3. Per ogni articolo generiamo un .md con frontmatter (stesso formato dei
 *     contenuti esistenti in content/articles-md/) e lo committiamo su GitHub
 *     via Contents API. Il filesystem di Vercel è read-only in produzione:
 *     si scrive SOLO via GitHub API.
 *  4. Al redeploy, lo script `prebuild` (scripts/import-articles.js) rigenera
 *     public/blog/<slug>.html + articles-manifest.json, e /risorse li elenca.
 *
 * Env var (già configurate su Vercel — qui vengono solo lette):
 *   GITHUB_TOKEN   → PAT con permesso "contents: write" sul repo
 *   GITHUB_REPO    → "gimmo92/aestima"
 *   GITHUB_BRANCH  → "main"
 *   OUTRANK_SECRET → segreto condiviso con Outrank (Bearer token)
 *
 * Nessuna dipendenza esterna: fetch nativo (Node 18+) e Buffer.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTENT_DIR = "content/articles-md";
const GITHUB_API = "https://api.github.com";

export async function POST(request) {
  // 1) Auth: Authorization: Bearer <token> === OUTRANK_SECRET
  const authHeader = request.headers.get("authorization") || "";
  const bearer = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : "";
  const secret = process.env.OUTRANK_SECRET || "";
  if (!secret || bearer !== secret) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Body: parsing difensivo.
    let payload;
    try {
      payload = await request.json();
    } catch {
      payload = {};
    }
    payload = payload || {};

    // LOG DIAGNOSTICO — al primo test controlla i nomi reali dei campi nei log Vercel.
    console.log("[outrank] payload:", JSON.stringify(payload));

    // Estrazione difensiva della lista articoli (nomi campo non certi).
    const articles = Array.isArray(payload?.data?.articles)
      ? payload.data.articles
      : Array.isArray(payload?.articles)
      ? payload.articles
      : Array.isArray(payload?.data)
      ? payload.data
      : [];

    if (articles.length === 0) {
      return Response.json({
        published: [],
        note: "Nessun articolo trovato nel payload.",
      });
    }

    const published = [];

    for (const a of articles) {
      const title = a?.title || a?.name || a?.headline || "Senza titolo";
      const rawSlug = a?.slug || a?.title || a?.name || "";
      const slug = slugify(rawSlug);
      if (!slug) continue;

      const description =
        a?.meta_description ||
        a?.metaDescription ||
        a?.description ||
        a?.excerpt ||
        "";

      const keyword = a?.keyword || a?.keywords || a?.tags || "";
      const category = a?.category || a?.type || "";

      const image =
        a?.image_url ||
        a?.imageUrl ||
        a?.image ||
        a?.cover_image ||
        a?.coverImage ||
        "";

      const date =
        a?.created_at ||
        a?.createdAt ||
        a?.published_at ||
        a?.publishedAt ||
        a?.date ||
        new Date().toISOString();

      // Corpo: preferiamo il markdown. In assenza usiamo l'HTML grezzo
      // (marked lo lascia passare come HTML inline).
      const body =
        a?.content_markdown ||
        a?.contentMarkdown ||
        a?.markdown ||
        a?.content_html ||
        a?.contentHtml ||
        a?.html ||
        a?.content ||
        "";

      const md = buildMarkdown({
        title,
        slug,
        description,
        keyword: Array.isArray(keyword) ? keyword.join(", ") : keyword,
        category: Array.isArray(category) ? category[0] : category,
        image,
        date,
        body,
      });

      await commitFile(
        `${CONTENT_DIR}/${slug}.md`,
        md,
        `Outrank: publish ${slug}`
      );
      published.push(slug);
    }

    return Response.json({ published });
  } catch (err) {
    // Catch globale: logga lo stack e lo ritorna nel body per debug.
    console.error("[outrank] error stack:", err?.stack || err);
    return Response.json(
      {
        error: err?.message || "Internal Error",
        stack: err?.stack || String(err),
      },
      { status: 500 }
    );
  }
}

/* ------------------------------------------------------------------ */
/* Costruzione del file Markdown con frontmatter                       */
/* ------------------------------------------------------------------ */

function buildMarkdown({
  title,
  slug,
  description,
  keyword,
  category,
  image,
  date,
  body,
}) {
  const lines = ["---"];
  lines.push(`title: ${yamlString(title)}`);
  lines.push(`slug: ${slug}`);
  if (description) lines.push(`meta_description: ${yamlString(description)}`);
  if (keyword) lines.push(`keyword: ${yamlString(keyword)}`);
  if (category) lines.push(`category: ${yamlString(category)}`);
  if (image) lines.push(`image: ${yamlString(image)}`);
  lines.push(`date: ${yamlString(date)}`);
  lines.push("---");
  // keep_h1 non impostato → lo script rimuove l'H1 iniziale (evita titolo doppio).
  return `${lines.join("\n")}\n\n${String(body).trim()}\n`;
}

// Scalare YAML sicuro: JSON.stringify produce una stringa double-quoted valida in YAML.
function yamlString(value) {
  return JSON.stringify(String(value));
}

/* ------------------------------------------------------------------ */
/* GitHub Contents API                                                 */
/* ------------------------------------------------------------------ */

function githubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token) throw new Error("GITHUB_TOKEN mancante");
  if (!repo) throw new Error("GITHUB_REPO mancante (formato user/repo)");
  return { token, repo, branch };
}

function githubHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "aestima-outrank-webhook",
    "Content-Type": "application/json",
  };
}

// GET del file per recuperare lo "sha".
// 404 = caso VALIDO e atteso (il file non esiste ancora) → ritorna null.
// Solo gli altri status di errore vengono rilanciati.
async function githubGetFile(path) {
  const { token, repo, branch } = githubConfig();
  const url = `${GITHUB_API}/repos/${repo}/contents/${encodePath(
    path
  )}?ref=${encodeURIComponent(branch)}`;

  console.log(`[outrank] GET ${path} (branch ${branch})`);
  const resp = await fetch(url, { headers: githubHeaders(token) });
  console.log(`[outrank] GET ${path} → status ${resp.status}`);

  if (resp.status === 404) {
    console.log(`[outrank] GET ${path} → 404: file nuovo, si procede alla creazione`);
    return null;
  }
  if (!resp.ok) {
    const errBody = await resp.text();
    console.error(`[outrank] GET ${path} FALLITA ${resp.status}: ${errBody}`);
    throw new Error(`GitHub GET ${path}: ${resp.status} ${errBody}`);
  }
  return resp.json();
}

// PUT del file: crea (senza sha) o aggiorna (con sha) su GitHub.
async function commitFile(path, contentString, message) {
  const { token, repo, branch } = githubConfig();

  const existing = await githubGetFile(path);
  const sha = existing?.sha; // undefined se il file non esisteva (404)
  console.log(
    `[outrank] sha per ${path}: ${sha ? `${sha} (update)` : "nessuno (create)"}`
  );

  const body = {
    message,
    content: Buffer.from(contentString, "utf8").toString("base64"),
    branch,
  };
  // Includi lo sha SOLO in update, altrimenti omettilo (create).
  if (sha) body.sha = sha;

  const url = `${GITHUB_API}/repos/${repo}/contents/${encodePath(path)}`;
  console.log(`[outrank] PUT ${path} (${sha ? "update" : "create"})`);
  const resp = await fetch(url, {
    method: "PUT",
    headers: githubHeaders(token),
    body: JSON.stringify(body),
  });
  console.log(`[outrank] PUT ${path} → status ${resp.status}`);

  if (!resp.ok) {
    const errBody = await resp.text();
    console.error(`[outrank] PUT ${path} FALLITA ${resp.status}: ${errBody}`);
    throw new Error(`GitHub PUT ${path}: ${resp.status} ${errBody}`);
  }
  return resp.json();
}

/* ------------------------------------------------------------------ */
/* Utility                                                             */
/* ------------------------------------------------------------------ */

function slugify(input) {
  return String(input || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function encodePath(path) {
  return path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}
