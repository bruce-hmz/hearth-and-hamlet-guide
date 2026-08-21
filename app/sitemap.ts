import type { MetadataRoute } from "next";
import { GUIDE_ORDER } from "@/content/pages";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    ...GUIDE_ORDER.map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: now,
      priority: 0.8,
    })),
    ...["about", "privacy", "terms"].map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: now,
      priority: 0.2,
    })),
  ];
}
