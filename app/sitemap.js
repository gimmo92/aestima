import { getPublishedArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";
import { SECTORS } from "@/lib/sectors";

const EXCLUDED_ARTICLE_SLUGS = new Set(["sample-article-title-for-testing"]);

/** Genera /sitemap.xml — non linkata nel menu di navigazione */
export default function sitemap() {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/settori", priority: 0.8, changeFrequency: "monthly" },
    { path: "/risorse", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contatti", priority: 0.8, changeFrequency: "monthly" },
    { path: "/demo", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/termini-e-condizioni", priority: 0.4, changeFrequency: "yearly" },
    { path: "/gdpr-sicurezza-dati", priority: 0.4, changeFrequency: "yearly" },
  ];

  const sectorPages = SECTORS.map((sector) => ({
    path: `/settori/${sector.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const articlePages = getPublishedArticles()
    .filter((article) => !EXCLUDED_ARTICLE_SLUGS.has(article.slug))
    .map((article) => ({
      path: article.url,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(article.date),
    }));

  return [...pages, ...sectorPages, ...articlePages].map(
    ({ path, priority, changeFrequency, lastModified }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: lastModified ?? new Date(),
      changeFrequency,
      priority,
    })
  );
}
