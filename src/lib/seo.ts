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

export function servicePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: ORG_NAME,
    alternateName: SITE_NAME,
    url: BASE_URL,
    description: ENTITY.description,
    areaServed: "Worldwide",
    knowsAbout: ENTITY.services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "INX Engineering Services",
      itemListElement: ENTITY.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
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
