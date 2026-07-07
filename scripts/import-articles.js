#!/usr/bin/env node
/**
 * Importa articoli Markdown (Outrank) in pagine HTML statiche.
 *
 * Input:  content/articles-md/*.md
 * Output: public/blog/{slug}.html  → servito su /blog/{slug}.html
 *         public/blog/index.html   → indice articoli
 *
 * Nota: il sito principale è Next.js; le pagine blog sono HTML statico in /public
 * così Vercel le serve senza passare dal router React.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content", "articles-md");
const OUTPUT_DIR = path.join(ROOT, "public", "blog");
const TEMPLATES_DIR = path.join(ROOT, "templates");
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aestima.it";

marked.use({
  gfm: true,
  breaks: false,
});

marked.use({
  renderer: {
    image({ href, title, text }) {
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
      return `<img src="${href}" alt="${escapeAttr(text || "")}"${titleAttr} loading="lazy" class="article-img" />`;
    },
    link({ href, title, text }) {
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
      const external = href.startsWith("http");
      const target = external ? ' target="_blank"' : "";
      const rel = external ? ' rel="noopener noreferrer"' : "";
      return `<a href="${href}"${titleAttr}${target}${rel}>${text}</a>`;
    },
  },
});

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function readPartial(name) {
  return fs.readFileSync(path.join(TEMPLATES_DIR, "partials", name), "utf8");
}

function renderHeader({ blogActive = false } = {}) {
  const activeAttr = blogActive
    ? ' class="is-active" aria-current="page"'
    : "";
  return readPartial("header.html").replace("{{BLOG_NAV_ACTIVE}}", activeAttr);
}

function extractFirstH1(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function stripLeadingH1(markdown) {
  return markdown.replace(/^#\s+.+\n+/, "");
}

function extractDescription(markdown, fallbackTitle) {
  for (const line of markdown.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^[#>\-|!\[<]/.test(trimmed)) continue;
    return trimmed.length > 165 ? `${trimmed.slice(0, 162)}…` : trimmed;
  }
  return `Approfondimento: ${fallbackTitle}.`;
}

function formatDateIT(date) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function extractFirstMarkdownImage(markdown) {
  const match = markdown.match(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/);
  if (!match) return null;
  return { alt: match[1].trim(), url: match[2].trim() };
}

function resolveFeaturedImage(frontmatter, content, title) {
  const fromFrontmatter =
    frontmatter.featured_image ||
    frontmatter.image ||
    frontmatter.image_url ||
    frontmatter.cover_image ||
    frontmatter.og_image ||
    "";

  if (fromFrontmatter) {
    return {
      url: String(fromFrontmatter).trim(),
      alt: frontmatter.featured_image_alt || title || "",
    };
  }

  const firstImage = extractFirstMarkdownImage(content);
  if (firstImage?.url) return firstImage;

  return null;
}

function stripFeaturedImageFromBody(markdown, imageUrl) {
  if (!imageUrl) return markdown;
  const escaped = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return markdown
    .replace(new RegExp(`!\\[[^\\]]*\\]\\(${escaped}\\)\\s*\\n?`, "i"), "")
    .trim();
}

function buildFeaturedImageHtml(featured) {
  if (!featured?.url) return "";
  return `<figure class="featured-image">
  <img src="${escapeAttr(featured.url)}" alt="${escapeAttr(featured.alt || "")}" class="featured-image__img" loading="eager" decoding="async" />
</figure>`;
}

function buildOgImageMeta(featured) {
  if (!featured?.url) return "";
  return `<meta property="og:image" content="${escapeAttr(featured.url)}" />
    <meta name="twitter:card" content="summary_large_image" />`;
}

function applyTemplate(template, vars) {
  return Object.entries(vars).reduce(
    (html, [key, value]) => html.split(`{{${key}}}`).join(value ?? ""),
    template
  );
}

function loadTemplate(name) {
  return fs.readFileSync(path.join(TEMPLATES_DIR, name), "utf8");
}

function processMarkdownFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(source);
  const filename = path.basename(filePath, path.extname(filePath));

  const firstH1 = extractFirstH1(content);
  const title =
    frontmatter.title || firstH1 || filename.replace(/-/g, " ").trim();

  let slug = frontmatter.slug || slugify(filename);
  if (!frontmatter.slug && frontmatter.title) {
    slug = slugify(frontmatter.title);
  }

  const metaDescription =
    frontmatter.meta_description ||
    frontmatter.description ||
    extractDescription(content, title);

  const keyword = frontmatter.keyword || frontmatter.keywords || "";
  const category = frontmatter.category || "Articolo";
  const parsedDate = frontmatter.date ? new Date(frontmatter.date) : null;
  const date =
    parsedDate && !Number.isNaN(parsedDate.getTime())
      ? parsedDate
      : fs.statSync(filePath).mtime;

  let markdownBody = content;
  if (firstH1 && frontmatter.keep_h1 !== true) {
    markdownBody = stripLeadingH1(markdownBody);
  }

  const featured = resolveFeaturedImage(frontmatter, markdownBody, title);
  if (featured?.url) {
    const firstInBody = extractFirstMarkdownImage(markdownBody);
    if (firstInBody?.url === featured.url) {
      markdownBody = stripFeaturedImageFromBody(markdownBody, featured.url);
    }
  }

  const contentHtml = marked.parse(markdownBody);

  return {
    title,
    slug,
    metaDescription,
    keyword,
    category,
    date,
    contentHtml,
    featuredImage: featured?.url || "",
    featuredImageAlt: featured?.alt || title,
    sourceFile: filename,
  };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeArticlePage(article, template, header, footer) {
  const keywordMeta = article.keyword
    ? `<meta name="keywords" content="${escapeAttr(article.keyword)}" />`
    : "";

  const html = applyTemplate(template, {
    TITLE: escapeHtml(article.title),
    META_DESCRIPTION: escapeAttr(article.metaDescription),
    KEYWORD_META: keywordMeta,
    OG_IMAGE_META: buildOgImageMeta(
      article.featuredImage
        ? { url: article.featuredImage, alt: article.featuredImageAlt }
        : null
    ),
    CANONICAL_URL: `${SITE_URL}/blog/${article.slug}.html`,
    HEADER: header,
    FOOTER: footer,
    DATE_LABEL: formatDateIT(article.date),
    FEATURED_IMAGE: buildFeaturedImageHtml(
      article.featuredImage
        ? { url: article.featuredImage, alt: article.featuredImageAlt }
        : null
    ),
    CONTENT: article.contentHtml,
  });

  const outPath = path.join(OUTPUT_DIR, `${article.slug}.html`);
  fs.writeFileSync(outPath, html, "utf8");
  return outPath;
}

function writeIndexPage(articles, template, header, footer) {
  const listHtml = articles
    .map((article) => {
      const thumb = article.featuredImage
        ? `<img class="article-list__thumb" src="${escapeAttr(article.featuredImage)}" alt="${escapeAttr(article.featuredImageAlt || article.title)}" loading="lazy" />`
        : "";
      return `<li>
        <a href="/blog/${article.slug}.html" class="article-list__link">
          ${thumb}
          <div class="article-list__body">
            <span class="article-list__title">${escapeHtml(article.title)}</span>
            <span class="article-list__date">${formatDateIT(article.date)}</span>
          </div>
        </a>
      </li>`;
    })
    .join("\n");

  const html = applyTemplate(template, {
    CANONICAL_URL: `${SITE_URL}/blog/`,
    HEADER: header,
    FOOTER: footer,
    ARTICLE_LIST: listHtml || "<li><p>Nessun articolo pubblicato.</p></li>",
  });

  fs.writeFileSync(path.join(OUTPUT_DIR, "index.html"), html, "utf8");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cleanupStaleArticles(activeSlugs) {
  if (!fs.existsSync(OUTPUT_DIR)) return;

  for (const entry of fs.readdirSync(OUTPUT_DIR)) {
    if (!entry.endsWith(".html") || entry === "index.html") continue;
    const slug = entry.replace(/\.html$/, "");
    if (!activeSlugs.has(slug)) {
      fs.unlinkSync(path.join(OUTPUT_DIR, entry));
      console.log(`  rimosso stale: ${entry}`);
    }
  }
}

function main() {
  ensureDir(CONTENT_DIR);
  ensureDir(OUTPUT_DIR);

  const mdFiles = fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (name) =>
        name.endsWith(".md") &&
        !/^readme\.md$/i.test(name) &&
        !name.startsWith("_")
    )
    .map((name) => path.join(CONTENT_DIR, name));

  if (mdFiles.length === 0) {
    console.log("Nessun file .md in content/articles-md/");
    writeIndexPage([], loadTemplate("blog-index-template.html"), renderHeader({ blogActive: true }), readPartial("footer.html"));
    return;
  }

  const articleTemplate = loadTemplate("article-template.html");
  const indexTemplate = loadTemplate("blog-index-template.html");
  const footer = readPartial("footer.html");
  const indexHeader = renderHeader({ blogActive: true });
  const articleHeader = renderHeader({ blogActive: false });

  const articles = [];
  const slugSet = new Set();

  for (const filePath of mdFiles) {
    const article = processMarkdownFile(filePath);

    if (slugSet.has(article.slug)) {
      console.warn(`Slug duplicato ignorato: ${article.slug} (${filePath})`);
      continue;
    }
    slugSet.add(article.slug);

    const outPath = writeArticlePage(
      article,
      articleTemplate,
      articleHeader,
      footer
    );
    articles.push(article);
    console.log(`✓ ${article.slug}.html ← ${path.basename(filePath)}`);
    console.log(`  → ${path.relative(ROOT, outPath)}`);
  }

  articles.sort((a, b) => b.date - a.date);

  writeIndexPage(articles, indexTemplate, indexHeader, footer);
  cleanupStaleArticles(slugSet);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "articles-manifest.json"),
    JSON.stringify(
      articles.map(
        ({
          title,
          slug,
          metaDescription,
          category,
          date,
          sourceFile,
          featuredImage,
          featuredImageAlt,
        }) => ({
          title,
          slug,
          metaDescription,
          category,
          date: date.toISOString(),
          sourceFile,
          featuredImage: featuredImage || "",
          featuredImageAlt: featuredImageAlt || title,
          url: `/blog/${slug}.html`,
        })
      ),
      null,
      2
    ),
    "utf8"
  );

  console.log(`\nIndice: public/blog/index.html (${articles.length} articoli)`);
}

main();
