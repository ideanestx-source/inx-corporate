import type { MetadataRoute } from "next";
import { articles } from "@/lib/insights";
import { industryPages } from "@/lib/industries-data";
import { getPublishedServices } from "@/lib/services-data";
import { getPublishedCaseStudies } from "@/lib/case-studies-data";
import { getPublishedProducts } from "@/lib/products-data";
import { getPublishedGames } from "@/lib/games-data";
import { getPublishedLabProjects } from "@/lib/labs-data";
import { BASE_URL } from "@/lib/seo";

// Article dates are stored as "Month YYYY" — convert to the first of that month.
function parseArticleDate(dateStr: string): Date {
  return new Date(`${dateStr} 1`);
}

type Entry = MetadataRoute.Sitemap[number];

// Only routes with a real, verifiable modification date carry `lastModified`
// (insight articles). Everything else omits it rather than stamping every URL
// with the build time, which crawlers learn to ignore.
function entry(path: string, priority: number, lastModified?: Date): Entry {
  return {
    url: path === "" ? BASE_URL : `${BASE_URL}${path}`,
    priority,
    ...(lastModified ? { lastModified } : {}),
  };
}

// Every collection is generated from the same published-only accessors the
// routes use for generateStaticParams, so a draft record (or an empty
// collection such as Products/Games/Labs today) can never produce a URL.
// Legal pages are noindex and therefore deliberately absent.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    entry("", 1.0),
    entry("/services", 0.9),
    ...getPublishedServices().map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry("/case-studies", 0.9),
    ...getPublishedCaseStudies().map((c) => entry(`/case-studies/${c.slug}`, 0.8)),
    entry("/products", 0.8),
    ...getPublishedProducts().map((p) => entry(`/products/${p.slug}`, 0.7)),
    entry("/games", 0.8),
    ...getPublishedGames().map((g) => entry(`/games/${g.slug}`, 0.7)),
    entry("/labs", 0.8),
    ...getPublishedLabProjects().map((l) => entry(`/labs/${l.slug}`, 0.7)),
    entry("/store", 0.8),
    entry("/insights", 0.8),
    ...articles.map((a) => entry(`/insights/${a.slug}`, 0.7, parseArticleDate(a.date))),
    entry("/about", 0.9),
    entry("/industries", 0.9),
    ...industryPages.map((p) => entry(`/industries/${p.slug}`, 0.8)),
    entry("/technologies", 0.9),
    entry("/partnerships", 0.9),
    entry("/careers", 0.9),
    entry("/contact", 0.9),
    entry("/expertise", 0.85),
    entry("/our-process", 0.85),
    entry("/engagement-models", 0.85),
    entry("/why-inx", 0.85),
  ];

  // Guard against duplicates if a slug ever collides.
  const seen = new Set<string>();
  return entries.filter((e) => (seen.has(e.url) ? false : (seen.add(e.url), true)));
}
