import { SITE_URL } from "@/lib/site";

/** Genera /sitemap.xml — non linkata nel menu di navigazione */
export default function sitemap() {
  const lastModified = new Date();

  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/risorse", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contatti", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/termini-e-condizioni", priority: 0.4, changeFrequency: "yearly" },
    { path: "/gdpr-sicurezza-dati", priority: 0.4, changeFrequency: "yearly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
