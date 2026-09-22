import type { CTA, MediaAsset, SeoFields, PublishState } from "./content-shared";
import { filterPublished } from "./content-shared";

/**
 * No INX product has been verified from existing repository/site content as
 * of this phase — ProductShowcase.tsx on the homepage markets SaaS/platform
 * engineering *capability*, not a named INX product. Per the Phase 2
 * instruction not to invent product names, `products` is intentionally
 * empty. This file exists to establish the architecture; entries are added
 * only once a real, verified product is supplied.
 */

export type ProductStatus = "live" | "beta" | "in-development" | "sunset";

export type Product = PublishState & {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  features: string[];
  media: MediaAsset[];
  technologies: string[];
  cta: CTA;
  externalUrl: string | null;
  seo: SeoFields;
};

export const products: Product[] = [];

export function getProduct(slug: string): Product | undefined {
  return filterPublished(products).find((p) => p.slug === slug);
}

export function getPublishedProducts(): Product[] {
  return filterPublished(products);
}
