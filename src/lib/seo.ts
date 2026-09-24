export const BASE_URL = "https://ideanestx.com";
export const SITE_NAME = "INX";
export const ORG_NAME = "IDEANEST X PRIVATE LIMITED";

// Entity definitions — consistent strings used across schema and visible content
export const ENTITY = {
  description:
    "INX (IDEANEST X PRIVATE LIMITED) is a custom software development company headquartered in India. INX engineers SaaS platforms, enterprise web applications, AI systems, mobile applications, and cloud infrastructure for global organisations — delivering production-grade systems from architecture through to live operation.",
  services: [
    "Custom Software Development",
    "SaaS Platform Development",
    "Product Engineering",
    "Staff Augmentation",
    "Web Application Development",
    "Mobile Application Development",
    "AI Systems Integration",
    "Cloud Infrastructure Engineering",
    "DevOps and CI/CD",
    "MVP Development",
  ],
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "INX Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "End-to-end engineering of bespoke software systems — from architecture specification through to production delivery and operational support.",
            url: `${BASE_URL}/services`,
            provider: { "@type": "Organization", name: ORG_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Platform Development",
            description:
              "Engineering of multi-tenant SaaS products with subscription billing infrastructure, API-first architecture, and scalability designed for commercial growth.",
            url: `${BASE_URL}/industries/saas-development`,
            provider: { "@type": "Organization", name: ORG_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Engineering",
            description:
              "A delivery discipline that connects technical execution to product outcomes. Engineers accountable for production behaviour, not just specification compliance.",
            url: `${BASE_URL}/services`,
            provider: { "@type": "Organization", name: ORG_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Staff Augmentation",
            description:
              "Senior external engineers integrated into client teams under client management — adding execution capacity without transferring delivery responsibility.",
            url: `${BASE_URL}/services`,
            provider: { "@type": "Organization", name: ORG_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description:
              "Enterprise-grade web applications built with React, Next.js, and modern backend stacks — from internal tooling to customer-facing products.",
            url: `${BASE_URL}/services`,
            provider: { "@type": "Organization", name: ORG_NAME },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Systems Integration",
            description:
              "Engineering AI capabilities into existing products — LLM integration, vector search, inference pipelines, and AI-augmented workflow automation.",
            url: `${BASE_URL}/services`,
            provider: { "@type": "Organization", name: ORG_NAME },
          },
        },
      ],
    },
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
 * from the real, current service catalog (services-data.ts) rather than
 * the legacy ENTITY.services list, which still contains the retired
 * standalone "Cloud Infrastructure Engineering" / "DevOps and CI/CD"
 * entries. ENTITY.services is left untouched here — reconciling it
 * sitewide (organizationSchema, /expertise, etc.) is deferred to the
 * dedicated SEO phase.
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
