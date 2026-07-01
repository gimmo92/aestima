import fs from "fs";
import path from "path";

const MANIFEST_PATH = path.join(
  process.cwd(),
  "public",
  "blog",
  "articles-manifest.json"
);

/** Articoli generati da `npm run import-articles` */
export function getPublishedArticles() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(MANIFEST_PATH, "utf8");
    const articles = JSON.parse(raw);
    if (!Array.isArray(articles)) return [];

    return articles
      .map((article) => ({
        title: article.title,
        slug: article.slug,
        excerpt: article.metaDescription,
        url: article.url,
        date: article.date,
        category: article.category || "Articolo",
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch {
    return [];
  }
}

export function formatArticleDate(isoDate) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}
