import { getPublishedServices } from "./services-data";

export const BASE_URL = "https://ideanestx.com";
export const SITE_NAME = "INX";
export const ORG_NAME = "IDEANEST X PRIVATE LIMITED";

// Shared social image. A page that declares its own `openGraph` block replaces
// the one Next.js derives from app/opengraph-image.tsx, so pages reference the
// same generated image explicitly (see app/opengraph-image.tsx).
export const DEFAULT_OG_IMAGE = {
  url: `${BASE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "INX | Build Systems That Perform",
};

// Entity definitions — consistent strings used across schema and visible content
export const ENTITY = {
  description:
    "INX (IDEANEST X PRIVATE LIMITED) is a technology and product engineering company headquartered in India. INX builds software, digital products, AI and automation systems, and games for global organizations — taking ideas from concept to a working product.",
  // Derived from services-data.ts so structured data can never drift from the
  // real, current service categories.
  services: getPublishedServices().map((s) => s.title),
  industries: [
    "SaaS",
    "Healthcare Technology",
    "Financial Services and FinTech",
    "Logistics and Supply Chain",
    "eCommerce and Retail",
    "Gaming",
    "Professional Services",
  ],
  engagementModels: [
    "Discovery engagement",
    "Fixed-scope project delivery",
    "Staff augmentation",
    "Dedicated engineering team",
    "Ongoing support retainer",
  ],
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Go",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Google Cloud Platform",
    "Terraform",
    "Docker",
    "Kubernetes",
  ],
} as const;

export function parseArticleDateISO(dateStr: string): string {
  return new Date(`${dateStr} 1`).toISOString();
}

// The one catalog of INX services in structured data, derived from
// services-data.ts. Entries are plain Service descriptions — no prices, ratings
// or availability are asserted, because none are published.
export function serviceCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "INX Services",
    itemListElement: getPublishedServices().map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${BASE_URL}/services/${service.slug}`,
      provider: { "@type": "Organization", name: ORG_NAME },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: [SITE_NAME, "IdeanestX", "IDEANEST X"],
    url: BASE_URL,
    description: ENTITY.description,
    foundingLocation: { "@type": "Country", name: "India" },
    areaServed: "Worldwide",
    knowsAbout: ENTITY.services,
    hasOfferCatalog: serviceCatalog(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-99403-32502",
      contactType: "customer service",
      email: "info@ideanestx.com",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    email: "info@ideanestx.com",
  };
}

/**
 * Narrowly scoped to the /services listing page: builds structured data
 * from the real, current service catalog (services-data.ts). ENTITY.services
 * and organizationSchema() derive from the same source, so no structured
 * data lists a service category that is not current.
 */
export function serviceCatalogSchema(
  items: Array<{ name: string; description: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "INX Service Lines",
    itemListElement: items.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: s.url,
        provider: { "@type": "Organization", name: ORG_NAME },
      },
    })),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
    areaServed: "Worldwide",
  };
}

/**
 * Structured data for a product detail page. Deliberately CreativeWork
 * rather than Product/SoftwareApplication: those types carry an implicit
 * expectation of offers/pricing or an aggregateRating, and INX products
 * currently have neither. Using them without that data would misrepresent
 * what's actually known — CreativeWork makes no such claim. Revisit if a
 * published product ever has real pricing/rating data to report.
 */
export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    about: opts.category,
    creator: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
  };
}

/**
 * Structured data for a Labs project page. Deliberately the conservative
 * CreativeWork: nothing in LabProject supports a research-specific type,
 * and this never emits researchOrganization/citation/patent-style claims or
 * any quantitative result. Only name, description, url, and category
 * (about) are populated.
 */
export function labProjectSchema(opts: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    about: opts.category,
    creator: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
  };
}

/**
 * Structured data for a game detail page. Unlike products, schema.org's
 * VideoGame type is used directly rather than falling back to
 * CreativeWork — genre and platform are real, structured fields the data
 * model actually has, and VideoGame doesn't carry the same implicit
 * pricing/rating expectation that Product/SoftwareApplication do. No
 * aggregateRating, offers, or playMode is ever populated — only fields
 * the data genuinely supports.
 */
export function gameSchema(opts: {
  name: string;
  description: string;
  url: string;
  genre: string;
  platform: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    genre: opts.genre,
    gamePlatform: opts.platform,
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
  };
}

/**
 * Structured data for a case-study detail page. Callers must only pass
 * anonymous descriptors (clientDescriptor, industry, projectType) — never
 * a client/company name. Schema.org has no dedicated "CaseStudy" type;
 * CreativeWork is the closest accurate fit for a documented engagement.
 */
export function caseStudySchema(opts: {
  title: string;
  description: string;
  url: string;
  industry: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.title,
    description: opts.description,
    url: opts.url,
    about: opts.industry,
    creator: {
      "@type": "Organization",
      name: ORG_NAME,
      url: BASE_URL,
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact INX",
    url: `${BASE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: ORG_NAME,
      email: "info@ideanestx.com",
      telephone: "+91-99403-32502",
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; item: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  author?: { name: string; role: string; organization: string; organizationUrl: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    author: opts.author
      ? {
          "@type": "Person",
          name: opts.author.name,
          jobTitle: opts.author.role,
          worksFor: {
            "@type": "Organization",
            name: opts.author.organization,
            url: opts.author.organizationUrl,
          },
        }
      : {
          "@type": "Organization",
          name: ORG_NAME,
          url: BASE_URL,
        },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    url: opts.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url,
    },
  };
}
