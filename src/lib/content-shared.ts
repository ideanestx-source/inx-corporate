// Shared primitives for the content-driven data layer (case studies, products,
// games, labs, services). Keeping these in one place means every new content
// type composes the same media/SEO/CTA/publish-state shapes instead of each
// domain file reinventing them.

/**
 * A single image or video asset. `src: null` is a deliberate, explicit state —
 * it means the asset has not been supplied yet, not that something is broken.
 * Rendering code should check for `null` and fall back to a placeholder
 * visual rather than showing a broken image.
 */
export type MediaAsset = {
  src: string | null;
  alt: string;
  caption?: string;
};

/** Per-page SEO fields, consumed by each route's `generateMetadata()`. */
export type SeoFields = {
  title: string;
  description: string;
  ogImage?: string;
};

/** A single call-to-action — internal route or external destination. */
export type CTA = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Publish-state gate for content entries.
 *
 * `draft: true` means the data record exists as a scaffold (so the shape is
 * ready) but must not be rendered anywhere public: not in listings, not in
 * the sitemap, not in structured data, not in navigation, not in
 * related-content links. Routes must filter on `!draft` before calling
 * `generateStaticParams`, and listing pages must filter before rendering.
 *
 * `needsContent` is an internal-only marker (never read by rendering code)
 * for tracking which draft entries are scaffolds still waiting on real,
 * verified information versus entries that are simply unpublished for other
 * reasons.
 */
export type PublishState = {
  draft: boolean;
  needsContent?: boolean;
};
