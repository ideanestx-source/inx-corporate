import type { CTA, MediaAsset, SeoFields, PublishState } from "./content-shared";
import { filterPublished } from "./content-shared";

/**
 * CLIENT CONFIDENTIALITY — READ BEFORE EDITING THIS FILE
 *
 * The public INX website must never identify clients. Do not add client
 * names, company names, logos, domains, identifiable testimonials, or any
 * other client-identifying information to any entry in this file — draft
 * or published. Use a neutral `clientDescriptor` instead (e.g. "B2B Export
 * Business", "Food & Beverage Platform"). Where information is genuinely
 * unavailable or unverified, use `null`, `[]`, or another empty structure —
 * never invented placeholder content.
 *
 * The four entries below are migrated, not rewritten, from the previously
 * published anonymized case studies in
 * src/components/case-studies/FeaturedCaseStudies.tsx. Prose fields
 * (challenge/solution) are preserved verbatim. The old free-text
 * "architecture" paragraph has been restructured into discrete `features`
 * bullets, and the old `outcome` paragraph split into discrete `outcomes`
 * strings — both are the same underlying sentences, not new claims. No
 * `timeline` or `testimonial` data exists in the original content, so both
 * are `null` rather than fabricated.
 */

export type CaseStudyTimelinePhase = {
  label: string;
  description: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type CaseStudy = PublishState & {
  slug: string;
  title: string;
  clientDescriptor: string;
  industry: string;
  projectType: string;
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  features: string[];
  technologies: string[];
  timeline: CaseStudyTimelinePhase[] | null;
  outcomes: string[];
  heroMedia: MediaAsset;
  thumbnailMedia: MediaAsset;
  gallery: MediaAsset[];
  testimonial: CaseStudyTestimonial | null;
  relatedServiceSlugs: string[];
  relatedIndustrySlugs: string[];
  featured: boolean;
  cta: CTA;
  seo: SeoFields;
};

const START_PROJECT_CTA: CTA = { label: "Start a Project", href: "/contact" };

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-location-platform-consolidation",
    title: "Platform Consolidation for a Multi-Location F&B Group",
    clientDescriptor: "Multi-Location Food & Beverage Group",
    industry: "Food & Beverage / Hospitality",
    projectType: "Enterprise Web & Mobile Platform",
    summary:
      "A unified operations platform replacing three disconnected point-of-sale systems and spreadsheet-based reporting across 40+ locations, built around a multi-tenant, event-driven architecture.",
    challenge:
      "A regional food and beverage group operating 40+ locations ran three separate point-of-sale systems, a disconnected online ordering solution, and no unified view of inventory, staffing, or revenue across sites. Operational decisions depended on day-old spreadsheet data. As the group expanded, the lack of system coherence had become a direct constraint on growth - each new location required weeks of manual configuration and produced inconsistent data.",
    solution:
      "INX designed a unified platform around a central event-driven data layer, connecting POS integrations, kitchen display systems, inventory management, and a customer-facing ordering interface. The architecture was built around a multi-tenant model with location-level isolation, allowing each site to operate independently while feeding into a centralised operations dashboard. New location onboarding was designed as a configuration workflow, not an engineering task.",
    capabilities: [
      "Multi-tenant platform architecture",
      "Event-driven data architecture",
      "Real-time operational dashboards",
      "Marketplace payment infrastructure",
    ],
    features: [
      "Event-driven backend with an append-only ledger for transaction integrity",
      "Multi-tenant PostgreSQL schema with row-level security enforcing location isolation",
      "Real-time inventory synchronisation via WebSocket connections to kitchen display systems",
      "React-based management dashboard with location switching and consolidated reporting",
      "Stripe Connect for marketplace payment flows between the group entity and individual locations",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe Connect", "WebSocket", "React"],
    timeline: null,
    outcomes: [
      "New location onboarding reduced from 3 weeks to 4 days.",
      "Single operational view across all locations established for the first time.",
      "Inventory reporting overhead reduced by approximately 60% through automated reconciliation.",
      "Platform has since supported 8 additional location openings without engineering intervention.",
    ],
    heroMedia: { src: null, alt: "Multi-location F&B operations platform" },
    thumbnailMedia: { src: null, alt: "Multi-location F&B operations platform — thumbnail" },
    gallery: [],
    testimonial: null,
    relatedServiceSlugs: ["web-development", "saas-custom-software", "system-integrations"],
    relatedIndustrySlugs: [],
    featured: true,
    cta: START_PROJECT_CTA,
    draft: false,
    needsContent: false,
    seo: {
      title: "Platform Consolidation for a Multi-Location F&B Group",
      description:
        "How INX unified three disconnected POS systems and manual reporting into a single multi-tenant operations platform across 40+ food and beverage locations.",
    },
  },
  {
    slug: "compliance-saas-performance-remediation",
    title: "Performance and Architecture Remediation for a Compliance SaaS Platform",
    clientDescriptor: "B2B Compliance SaaS Company",
    industry: "Financial Services / SaaS",
    projectType: "SaaS Engineering",
    summary:
      "Architecture and performance remediation for a compliance workflow SaaS product serving mid-market financial services firms — addressing latency, tenant isolation, and release velocity without a full rewrite.",
    challenge:
      "A B2B SaaS company providing compliance workflow tools to mid-market financial services firms had outgrown its original monolithic application. API response times under concurrent load regularly exceeded 1.8 seconds at the 95th percentile. Multi-tenancy was enforced by application-layer convention rather than database constraint, creating latent data isolation risk. Frontend technical debt had accumulated to the point where new feature delivery required 6-week release cycles - unacceptable for a compliance product operating in a rapidly shifting regulatory environment.",
    solution:
      "INX conducted a structured architecture review before proposing any changes. We identified three high-impact intervention points that could be addressed without a full rewrite: read/write path separation for high-traffic reporting queries, enforcement of tenant isolation at the database layer, and replacement of the legacy frontend rendering layer with a component-based architecture. The monolith remained operational throughout. Changes were shipped incrementally against a defined specification.",
    capabilities: [
      "Architecture review and remediation",
      "Database-enforced multi-tenancy",
      "Read/write path separation",
      "Incremental frontend modernisation",
    ],
    features: [
      "CQRS pattern applied to the reporting subsystem, separating read models from the transactional data store",
      "Read replicas with query-optimised projections for dashboard and export workloads",
      "Tenant isolation enforced via PostgreSQL row-level security policies",
      "React component library built alongside the legacy interface and progressively replaced page-by-page",
      "Redis caching layer for session state and frequently-accessed reference data",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "CQRS", "Row-Level Security"],
    timeline: null,
    outcomes: [
      "P95 API response time reduced from 1.8 seconds to 240 milliseconds.",
      "Release cycle reduced from a 6-week to a 2-week cadence following frontend restructure.",
      "Tenant data isolation enforced by database architecture — no longer dependent on application-layer discipline.",
      "Platform passed subsequent security audit without data isolation findings.",
    ],
    heroMedia: { src: null, alt: "Compliance SaaS platform architecture remediation" },
    thumbnailMedia: { src: null, alt: "Compliance SaaS platform architecture remediation — thumbnail" },
    gallery: [],
    testimonial: null,
    relatedServiceSlugs: ["saas-custom-software", "system-integrations", "web-development"],
    relatedIndustrySlugs: ["saas-development", "fintech-software-development"],
    featured: true,
    cta: START_PROJECT_CTA,
    draft: false,
    needsContent: false,
    seo: {
      title: "Performance Remediation for a Compliance SaaS Platform",
      description:
        "How INX reduced P95 API latency from 1.8s to 240ms and cut release cycles from 6 weeks to 2 for a compliance workflow SaaS platform — without a full rewrite.",
    },
  },
  {
    slug: "document-intelligence-pipeline",
    title: "Document Intelligence Pipeline for a Professional Services Firm",
    clientDescriptor: "Professional Services Firm",
    industry: "Professional Services",
    projectType: "AI Systems Engineering",
    summary:
      "An auditable document intelligence pipeline automating classification and initial data extraction for a professional services firm processing 2,000+ documents weekly under regulatory auditability requirements.",
    challenge:
      "A mid-sized professional services firm processed over 2,000 structured documents per week through a largely manual review workflow. Senior staff spent a significant portion of their time on document classification and initial data extraction tasks that did not require expert judgment - creating a throughput bottleneck that could not be resolved by headcount alone. The firm operated under regulatory requirements that mandated full auditability of all document processing decisions.",
    solution:
      "INX designed a document intelligence pipeline that separated the document processing work into three distinct stages: automated classification with confidence scoring, structured data extraction, and a human-in-the-loop review interface that surfaces only items below a confidence threshold or flagged for senior review. The system was designed to be fully auditable, with every automated decision logged with its model input, output, and confidence score. The human review interface was built to match the cognitive workflow of senior reviewers - not to replicate the visual design of the source documents.",
    capabilities: [
      "Automated document classification",
      "Human-in-the-loop review workflows",
      "Regulatory audit logging",
      "Confidence-threshold routing",
    ],
    features: [
      "Document ingestion service with format normalisation for PDF, Word, and structured data inputs",
      "Classification model with deterministic confidence thresholds routing documents to automated or human queues",
      "LLM-based extraction layer using structured output schemas validated against a field registry",
      "PostgreSQL-backed human review queue with assignment, escalation, and approval workflows",
      "Immutable audit log with cryptographic chaining for regulatory compliance",
      "Inference service deployed as a stateless containerised workload, scaling independently of the application tier",
    ],
    technologies: ["Python", "OpenAI API", "Next.js", "PostgreSQL", "Structured Output", "Docker", "Audit Logging"],
    timeline: null,
    outcomes: [
      "Average document classification time reduced from 8 minutes (manual) to under 45 seconds.",
      "Senior reviewer daily throughput increased from approximately 40 to 110 documents per day.",
      "Full audit trail maintained for every document processing decision.",
      "Regulatory audit conducted six months post-deployment — no compliance findings related to the automated pipeline.",
    ],
    heroMedia: { src: null, alt: "Document intelligence pipeline for a professional services firm" },
    thumbnailMedia: { src: null, alt: "Document intelligence pipeline — thumbnail" },
    gallery: [],
    testimonial: null,
    relatedServiceSlugs: ["ai-automation", "system-integrations"],
    relatedIndustrySlugs: [],
    featured: true,
    cta: START_PROJECT_CTA,
    draft: false,
    needsContent: false,
    seo: {
      title: "Document Intelligence Pipeline for a Professional Services Firm",
      description:
        "How INX built an auditable document classification and extraction pipeline that cut processing time from 8 minutes to under 45 seconds per document.",
    },
  },
  {
    slug: "dispatch-tracking-platform",
    title: "Dispatch and Tracking Platform for a Last-Mile Logistics Operator",
    clientDescriptor: "Last-Mile Logistics Operator",
    industry: "Logistics & Supply Chain",
    projectType: "Enterprise Platform Engineering",
    summary:
      "A dispatch, driver, and customer-tracking platform replacing manual coordination for 200+ delivery drivers, deployed alongside the legacy system during a parallel-operation cutover.",
    challenge:
      "A regional logistics operator coordinating 200+ delivery drivers across multiple urban zones was running daily operations on a combination of WhatsApp group messages, manual spreadsheets, and a legacy dispatch system with no real-time driver location visibility. Route assignment was reactive and manual, leading to significant inefficiency in vehicle utilisation and a customer SLA compliance rate of 78% - well below contractual thresholds with key accounts. The legacy system vendor had ceased active development and the operator faced a transition deadline.",
    solution:
      "INX designed and delivered a dispatch and tracking platform in three parallel workstreams: a mobile application for drivers, an operations command centre for dispatch teams, and a customer-facing delivery tracking interface. The platform was built to run alongside the legacy system during a parallel operation phase before full cutover, eliminating the risk of a hard migration. Route optimisation logic was implemented as a constraint-based engine that considered delivery time windows, vehicle capacity, and zone density - not a black-box external service.",
    capabilities: [
      "Real-time driver tracking",
      "Constraint-based route optimisation",
      "Parallel-operation migration",
      "Customer-facing delivery tracking",
    ],
    features: [
      "React Native driver application with offline-tolerant local state, syncing to the backend via WebSocket when connectivity is available",
      "Real-time driver location broadcast aggregated in the dispatch dashboard with sub-5-second update latency",
      "Constraint-based route optimisation engine running as a background job triggered by new delivery assignments",
      "Customer-facing tracking page with estimated arrival windows derived from real-time driver position and historical delivery patterns",
      "SMS notification service for customer updates at dispatch, en-route, and delivery events",
    ],
    technologies: ["React Native", "Next.js", "Node.js", "PostgreSQL", "WebSocket", "SMS Notifications", "Route Optimisation"],
    timeline: null,
    outcomes: [
      "Vehicle utilisation improved by 23% in the first 60 days of full operation.",
      "Customer SLA compliance rate improved from 78% to 94% within 90 days of cutover.",
      "Dispatch coordination time reduced by approximately 40%, allowing the same dispatch team to manage a 30% increase in daily volume.",
      "Legacy system decommissioned on schedule.",
    ],
    heroMedia: { src: null, alt: "Dispatch and tracking platform for a last-mile logistics operator" },
    thumbnailMedia: { src: null, alt: "Dispatch and tracking platform — thumbnail" },
    gallery: [],
    testimonial: null,
    relatedServiceSlugs: ["mobile-app-development", "web-development", "system-integrations"],
    relatedIndustrySlugs: [],
    featured: true,
    cta: START_PROJECT_CTA,
    draft: false,
    needsContent: false,
    seo: {
      title: "Dispatch and Tracking Platform for a Last-Mile Logistics Operator",
      description:
        "How INX replaced manual dispatch coordination with a real-time tracking platform, improving SLA compliance from 78% to 94% for a last-mile logistics operator.",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return filterPublished(caseStudies).find((c) => c.slug === slug);
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return filterPublished(caseStudies);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return filterPublished(caseStudies).filter((c) => c.featured);
}
