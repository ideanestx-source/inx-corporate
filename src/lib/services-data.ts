import type { CTA, SeoFields, PublishState } from "./content-shared";
import { filterPublished } from "./content-shared";

/**
 * The 10 approved INX service categories. Cloud/DevOps is intentionally NOT
 * a standalone entry here — its capabilities are folded into "System
 * Integrations" (infrastructure, deployment, third-party/platform
 * integration) as supporting technical capability, per the approved
 * positioning.
 *
 * Content below is migrated from already-published copy on /expertise,
 * /technologies, ExpertiseBlock.tsx, CoreTechnologyStack.tsx, and the
 * gaming industry landing page — not newly authored marketing claims.
 * Services with `needsContent: true` are categories that are structurally
 * complete but have thin or partially-inferred source material (either a
 * brand-new category with no prior site content, or technologies inferred
 * from the company-wide stack rather than a category-specific source) —
 * flagged for a future content pass, not hidden from the public site.
 */

export type Service = PublishState & {
  slug: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  technologies: string[];
  relatedIndustrySlugs: string[];
  featured: boolean;
  seo: SeoFields;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web Platform Engineering",
    summary:
      "Mission-critical web platforms built for the scale, security, and integration complexity of global enterprise operations. Performance, reliability, and maintainability are treated as requirements, not goals.",
    capabilities: [
      "Distributed systems design",
      "Event-driven architecture",
      "API-first system design",
      "Data modelling and schema design",
      "Integration architecture",
      "Scalability and capacity planning",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    relatedIndustrySlugs: ["saas-development", "ecommerce-development", "fintech-software-development"],
    featured: true,
    draft: false,
    needsContent: false,
    seo: {
      title: "Web Development",
      description:
        "Enterprise-grade web platform engineering from INX — architecture-first, built for the scale, security, and integration complexity of production systems.",
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile Engineering",
    summary:
      "Native and cross-platform mobile engineering for iOS and Android, built to the same architectural standards applied across all INX engagements. Performance and maintainability are not optional.",
    capabilities: [
      "React Native (iOS and Android)",
      "Native iOS (Swift, SwiftUI)",
      "Native Android (Kotlin, Jetpack Compose)",
      "Mobile CI/CD and deployment pipelines",
      "Offline-first architecture",
      "Mobile performance and battery optimisation",
    ],
    technologies: ["React Native", "Expo", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "WebSocket"],
    relatedIndustrySlugs: ["ecommerce-development", "healthcare-software-development", "fintech-software-development"],
    featured: true,
    draft: false,
    needsContent: false,
    seo: {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile app development from INX — iOS and Android engineering built to production standards, including offline-first architecture.",
    },
  },
  {
    slug: "saas-custom-software",
    title: "SaaS & Custom Software",
    category: "Product Engineering",
    summary:
      "Full-cycle SaaS product development: multi-tenant architecture, enterprise billing infrastructure, compliance frameworks, and scalable onboarding — alongside bespoke custom software engineered from architecture through to production delivery.",
    capabilities: [
      "Multi-tenant data architecture",
      "Subscription and usage-based billing systems",
      "API-first product design",
      "Feature flag and rollout infrastructure",
      "Self-serve onboarding systems",
      "SaaS operational metrics and instrumentation",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "TypeScript", "Stripe"],
    relatedIndustrySlugs: ["saas-development", "fintech-software-development"],
    featured: true,
    draft: false,
    needsContent: false,
    seo: {
      title: "SaaS & Custom Software Development",
      description:
        "SaaS platform and custom software engineering from INX — multi-tenant architecture, billing infrastructure, and compliance-ready systems built for commercial scale.",
    },
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    category: "Artificial Intelligence",
    summary:
      "Production-grade AI integration and custom model pipelines designed for enterprise compliance constraints, inference performance, and operational reliability. LLMs, RAG systems, and intelligent automation at scale.",
    capabilities: [
      "LLM integration and prompt engineering",
      "Retrieval-augmented generation (RAG) pipelines",
      "Vector database design",
      "Model serving and inference infrastructure",
      "AI-augmented workflow automation",
      "Evaluation and observability for AI systems",
    ],
    technologies: ["Python", "OpenAI API", "Anthropic API", "LangChain", "LlamaIndex", "Hugging Face", "Pinecone", "pgvector"],
    relatedIndustrySlugs: ["fintech-software-development", "healthcare-software-development", "saas-development"],
    featured: true,
    draft: false,
    needsContent: false,
    seo: {
      title: "AI & Automation Engineering",
      description:
        "Production AI systems and automation from INX — LLM integration, RAG pipelines, and intelligent workflow automation engineered for enterprise reliability constraints.",
    },
  },
  {
    slug: "game-development",
    title: "Game Development",
    category: "Game Backend Engineering",
    summary:
      "Engineering the backend infrastructure that games run on. INX focuses on game backend engineering — multiplayer infrastructure, game economy systems, live operations, and analytics — not game clients or game engines.",
    capabilities: [
      "Multiplayer game server architecture",
      "Real-time matchmaking and session management",
      "Game backend API development",
      "Virtual economy and in-game item systems",
      "Anti-cheat server-side validation",
      "Cross-platform account and progression systems",
      "Leaderboard and competitive ranking infrastructure",
      "Live operations tooling and content management",
      "Player analytics and behaviour tracking",
      "In-app purchase and subscription infrastructure",
    ],
    // Generic backend technologies INX uses company-wide, applicable to the
    // real-time/persistence needs described on the gaming industry page.
    // No game-specific stack (engines, specialised game infra) is evidenced
    // in existing content — hence needsContent: true below.
    technologies: ["Node.js", "PostgreSQL", "Redis", "WebSocket"],
    relatedIndustrySlugs: ["gaming-software-development"],
    featured: true,
    draft: false,
    needsContent: true,
    seo: {
      title: "Game Development",
      description:
        "Game backend engineering from INX — multiplayer infrastructure, game economy systems, and live operations tooling for studios and game companies.",
    },
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    category: "Design Engineering",
    summary:
      "Design systems and interface engineering for internal tools, client portals, and consumer-facing products. Built for accessibility, long-term consistency, and the complexity of enterprise user environments.",
    // No dedicated UI/UX capability list exists in prior published content;
    // these are drawn from the adjacent, already-published Frontend
    // Engineering philosophy on /technologies rather than a UI/UX-specific
    // source — hence needsContent: true.
    capabilities: [
      "Design systems and component libraries",
      "Accessibility-first interface engineering",
      "Design-to-production handoff",
      "Interaction and motion design",
    ],
    technologies: ["Tailwind CSS", "Framer Motion", "TypeScript"],
    relatedIndustrySlugs: ["saas-development", "ecommerce-development"],
    featured: true,
    draft: false,
    needsContent: true,
    seo: {
      title: "UI/UX & Product Design",
      description:
        "Interface engineering and design systems from INX — accessibility-first product design built for the complexity of enterprise user environments.",
    },
  },
  {
    slug: "system-integrations",
    title: "System Integrations",
    category: "Platform & Integration Engineering",
    summary:
      "Connecting internal systems, third-party platforms, and cloud infrastructure into a coherent operational architecture. Infrastructure decisions are made against workload requirements and compliance constraints, not vendor preference.",
    capabilities: [
      "Infrastructure as code and reproducible environments",
      "Container orchestration and deployment infrastructure",
      "Third-party API and platform integration",
      "Observability pipelines (metrics, traces, logs)",
      "Network security and access control",
      "Cost optimisation engineering",
    ],
    technologies: ["AWS", "Google Cloud Platform", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    relatedIndustrySlugs: ["saas-development", "fintech-software-development"],
    featured: false,
    draft: false,
    needsContent: true,
    seo: {
      title: "System Integrations",
      description:
        "System and infrastructure integration engineering from INX — connecting internal systems, third-party platforms, and cloud infrastructure into one coherent architecture.",
    },
  },
  {
    slug: "dedicated-development-teams",
    title: "Dedicated Development Teams",
    category: "Embedded Delivery",
    summary:
      "Senior engineers — individually or as a full dedicated team — embedded within your organisation under your engineering management, operating with full institutional context and delivery accountability from day one.",
    capabilities: [
      "Staff augmentation: senior engineers integrated under client management",
      "Dedicated engineering team: full team operating within the client's engineering organisation",
      "No ramp-up delay — delivery from day one",
    ],
    technologies: [],
    relatedIndustrySlugs: [],
    featured: false,
    draft: false,
    needsContent: false,
    seo: {
      title: "Dedicated Development Teams",
      description:
        "Staff augmentation and dedicated engineering teams from INX — senior engineers embedded within your organisation under your management, from day one.",
    },
  },
  {
    slug: "recruitment-talent-solutions",
    title: "Recruitment & Talent Solutions",
    category: "Talent Engineering",
    // No prior published content describes this as a client-facing service
    // (the existing careers content describes INX's own internal hiring
    // bar, not a service offered to clients). Kept deliberately short and
    // structural rather than a claims-based pitch. needsContent: true.
    summary:
      "Technical hiring support for organisations building or scaling an engineering function — candidate technical evaluation and team-scaling advisory, informed by the same hiring standards INX applies to its own engineering hires.",
    capabilities: [
      "Technical hiring support for engineering roles",
      "Candidate technical evaluation",
      "Team-scaling advisory",
    ],
    technologies: [],
    relatedIndustrySlugs: [],
    featured: false,
    draft: false,
    needsContent: true,
    seo: {
      title: "Recruitment & Talent Solutions",
      description:
        "Technical recruitment and talent solutions from INX — candidate technical evaluation and engineering team-scaling advisory.",
    },
  },
  {
    slug: "training-technical-enablement",
    title: "Training & Technical Enablement",
    category: "Technical Enablement",
    // No prior published content describes this as a client-facing service.
    // Kept deliberately short and structural. needsContent: true.
    summary:
      "Technical enablement for engineering teams — structured knowledge transfer and capability building, applied with the same discipline INX brings to production delivery.",
    capabilities: [
      "Engineering team technical enablement",
      "Structured knowledge transfer",
    ],
    technologies: [],
    relatedIndustrySlugs: [],
    featured: false,
    draft: false,
    needsContent: true,
    seo: {
      title: "Training & Technical Enablement",
      description:
        "Technical enablement and structured knowledge transfer for engineering teams, from INX.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return filterPublished(services).find((s) => s.slug === slug);
}

export function getPublishedServices(): Service[] {
  return filterPublished(services);
}

export function getFeaturedServices(): Service[] {
  return filterPublished(services).filter((s) => s.featured);
}

/** Every CTA on service pages is the site-wide primary conversion action. */
export const SERVICE_CTA: CTA = { label: "Start a Project", href: "/contact" };
