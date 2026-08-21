import type { Metadata } from "next";
import { GUIDE_PAGES } from "@/content/pages";

export function guideMetadata(slug: string): Metadata {
  const page = GUIDE_PAGES[slug];
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}/` },
  };
}
