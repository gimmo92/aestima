import { SITE_URL } from "@/lib/site";

/** Genera /sitemap.xml — non linkata nel menu di navigazione */
export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/risorse`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
