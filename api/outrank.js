/**
 * Webhook Outrank → pubblicazione articoli come pagine HTML statiche.
 *
 * Vercel Serverless Function (runtime Node, NON Edge).
 * URL in produzione: https://aestima.it/api/outrank
 *
 * Flusso:
 *  1. Outrank chiama questo endpoint (POST) a ogni pubblicazione.
 *  2. Validiamo il Bearer token contro OUTRANK_SECRET.
 *  3. Per ogni articolo generiamo la pagina HTML e la committiamo su GitHub
 *     (Contents API). Vercel farà il redeploy da solo.
 *  4. Aggiorniamo posts.json (indice usato dalla pagina lista del blog).
 *
 * Env var (già configurate su Vercel — qui vengono solo lette):
 *   GITHUB_TOKEN   → PAT con permesso "contents: write" sul repo
 *   GITHUB_REPO    → "user/repo"
 *   GITHUB_BRANCH  → branch di destinazione (default "main")
 *   OUTRANK_SECRET → segreto condiviso con Outrank (Bearer token)
 *
 * Nessuna dipendenza esterna: usa fetch nativo (Node 18+) e Buffer.
 */

const SITE_URL = "https://aestima.it";

/**
 * Cartella di destinazione dei file nel repo.
 * NB: è un progetto Next.js → i file statici serviti su /blog/... devono stare
 * in public/blog/. Se un giorno il sito diventasse puro-statico, cambia in "blog".
 */
const BLOG_DIR = "public/blog";
const POSTS_JSON_PATH = `${BLOG_DIR}/posts.json`;

const GITHUB_API = "https://api.github.com";

module.exports = async function handler(req, res) {
  // 1) Solo POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // 2) Auth: Authorization: Bearer <token> === OUTRANK_SECRET
  const authHeader = req.headers["authorization"] || "";
  const bearer = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : "";
  const secret = process.env.OUTRANK_SECRET || "";
  if (!secret || bearer !== secret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Body: Vercel di solito lo parsa già; fallback difensivo se è stringa.
    let payload = req.body;
    if (typeof payload === "string") {
      try {
        payload = JSON.parse(payload);
      } catch {
        payload = {};
      }
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
      return res
        .status(200)
        .json({ published: [], note: "Nessun articolo trovato nel payload." });
    }

    const published = [];
    const newEntries = [];

    for (const a of articles) {
      // Campi con più fallback possibili (i nomi Outrank non sono certi).
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

      // Corpo: preferiamo l'HTML. In assenza usiamo il markdown grezzo
      // (non convertito, per non introdurre dipendenze).
      const bodyHtml =
        a?.content_html ||
        a?.contentHtml ||
        a?.html ||
        a?.content_markdown ||
        a?.contentMarkdown ||
        a?.content ||
        "";

      const html = renderPost({ title, description, image, slug, date, bodyHtml });

      await commitFile(
        `${BLOG_DIR}/${slug}.html`,
        html,
        `Publish blog post: ${slug}`
      );

      published.push(slug);
      newEntries.push({
        title,
        slug,
        url: `/blog/${slug}.html`,
        description,
        date,
        image,
      });
    }

    // Aggiorna posts.json: nuovi in testa, dedup per slug, ordinati per data desc.
    if (newEntries.length > 0) {
      await updatePostsJson(newEntries);
    }

    return res.status(200).json({ published });
  } catch (err) {
    console.error("[outrank] error:", err);
    return res.status(500).json({ error: err?.message || "Internal Error" });
  }
};

/* ------------------------------------------------------------------ */
/* Template pagina articolo                                            */
/* ------------------------------------------------------------------ */

function renderPost({ title, description, image, slug, date, bodyHtml }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const canonical = `${SITE_URL}/blog/${slug}.html`;
  const ogImage = image ? escapeAttr(image) : "";

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDesc}" />
  <link rel="canonical" href="${canonical}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:url" content="${canonical}" />
${ogImage ? `  <meta property="og:image" content="${ogImage}" />\n` : ""}
  <!-- INCOLLA QUI CSS/header/footer del sito -->
</head>
<body>
  <!-- INCOLLA QUI header del sito (opzionale) -->
  <main class="post">
    <article>
${bodyHtml}
    </article>
  </main>
  <!-- INCOLLA QUI footer del sito (opzionale) -->
</body>
</html>`;
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
    // GitHub richiede uno User-Agent, altrimenti risponde 403.
    "User-Agent": "aestima-outrank-webhook",
    "Content-Type": "application/json",
  };
}

// GET del file: ritorna { sha, content } se esiste, null se 404.
async function githubGetFile(path) {
  const { token, repo, branch } = githubConfig();
  const url = `${GITHUB_API}/repos/${repo}/contents/${encodePath(
    path
  )}?ref=${encodeURIComponent(branch)}`;
  const resp = await fetch(url, { headers: githubHeaders(token) });
  if (resp.status === 404) return null;
  if (!resp.ok) {
    throw new Error(`GitHub GET ${path}: ${resp.status} ${await resp.text()}`);
  }
  return resp.json();
}

// PUT del file: crea o aggiorna (passando lo sha se il file esiste già).
async function commitFile(path, contentString, message) {
  const { token, repo, branch } = githubConfig();
  const existing = await githubGetFile(path);

  const body = {
    message,
    content: Buffer.from(contentString, "utf8").toString("base64"),
    branch,
  };
  if (existing?.sha) body.sha = existing.sha; // update anziché create

  const url = `${GITHUB_API}/repos/${repo}/contents/${encodePath(path)}`;
  const resp = await fetch(url, {
    method: "PUT",
    headers: githubHeaders(token),
    body: JSON.stringify(body),
  });
  if (!resp.ok) {
    throw new Error(`GitHub PUT ${path}: ${resp.status} ${await resp.text()}`);
  }
  return resp.json();
}

async function updatePostsJson(newEntries) {
  const existing = await githubGetFile(POSTS_JSON_PATH);

  let posts = [];
  if (existing?.content) {
    try {
      posts = JSON.parse(
        Buffer.from(existing.content, "base64").toString("utf8")
      );
      if (!Array.isArray(posts)) posts = [];
    } catch {
      posts = [];
    }
  }

  // Nuovi in testa; dedup per slug (il nuovo vince); ordina per data desc.
  const bySlug = new Map();
  for (const e of newEntries) bySlug.set(e.slug, e);
  const merged = [...newEntries];
  for (const p of posts) {
    if (p && p.slug && !bySlug.has(p.slug)) merged.push(p);
  }
  merged.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  await commitFile(
    POSTS_JSON_PATH,
    JSON.stringify(merged, null, 2),
    "Update blog/posts.json"
  );
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
  // Codifica ogni segmento ma mantiene le "/".
  return path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
