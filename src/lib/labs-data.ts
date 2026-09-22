import type { CTA, MediaAsset, SeoFields, PublishState } from "./content-shared";
import { filterPublished } from "./content-shared";

/**
 * No INX Labs project is evidenced anywhere in the existing repository or
 * site content. Per the Phase 2 instruction not to invent Labs projects,
 * `labProjects` is intentionally empty. This file exists to establish the
 * architecture; entries are added only once a real, verified experiment or
 * prototype is supplied.
 */

export type LabStatus = "active" | "experimental" | "archived" | "concept";

export type LabProject = PublishState & {
  slug: string;
  title: string;
  category: string;
  status: LabStatus;
  description: string;
  experimentDetails: string;
  technologies: string[];
  media: MediaAsset[];
  relatedProductSlugs: string[];
  cta: CTA;
  seo: SeoFields;
};

export const labProjects: LabProject[] = [];

export function getLabProject(slug: string): LabProject | undefined {
  return filterPublished(labProjects).find((l) => l.slug === slug);
}

export function getPublishedLabProjects(): LabProject[] {
  return filterPublished(labProjects);
}
