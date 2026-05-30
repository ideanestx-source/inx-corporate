import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  BASE_URL,
  SITE_NAME,
  ORG_NAME,
  ENTITY,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engineering Expertise",
  description:
    "INX engineering expertise across systems architecture, cloud infrastructure, AI systems, SaaS platforms, and enterprise software — applied across 7 industry verticals.",
  alternates: {
    canonical: `${BASE_URL}/expertise`,
  },
  openGraph: {
    title: "Engineering Expertise | INX",
    description:
      "INX engineering expertise across systems architecture, cloud infrastructure, AI systems, SaaS platforms, and enterprise software — applied across 7 industry verticals.",
    url: `${BASE_URL}/expertise`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Expertise | INX",
    description:
      "INX engineering expertise across systems architecture, cloud infrastructure, AI systems, SaaS platforms, and enterprise software — applied across 7 industry verticals.",
  },
};

const technicalDomains = [
  {
    index: "01",
    domain: "Systems Architecture",
    definition:
      "The discipline of designing software systems at the level of components, boundaries, data flows, and operational constraints. INX treats architecture as a first-class deliverable — produced before engineering begins and treated as the binding specification for all subsequent work.",
    competencies: [
      "Distributed systems design",
      "Event-driven architecture",
      "API-first system design",
      "Data modelling and schema design",
      "Integration architecture",
      "Scalability and capacity planning",
    ],
  },
  {
    index: "02",
    domain: "Cloud Infrastructure Engineering",
    definition:
      "The engineering of cloud-native infrastructure that supports production workloads — covering compute, networking, storage, observability, and security. INX designs infrastructure as code from day one, eliminating configuration drift and enabling reproducible environments.",
    competencies: [
      "AWS, Google Cloud Platform, Azure",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Container orchestration (Kubernetes, ECS)",
      "Observability pipelines (metrics, traces, logs)",
      "Network security and access control",
      "Cost optimisation engineering",
    ],
  },
  {
    index: "03",
    domain: "SaaS Platform Engineering",
    definition:
      "The construction of multi-tenant software products designed for commercial operation at scale. SaaS platforms require specific architectural decisions around tenant isolation, billing infrastructure, API versioning, and operational telemetry that differ meaningfully from single-tenant enterprise software.",
    competencies: [
      "Multi-tenant data architecture",
      "Subscription and usage-based billing systems",
      "API-first product design",
      "Feature flag and rollout infrastructure",
      "Self-serve onboarding systems",
      "SaaS operational metrics and instrumentation",
    ],
  },
  {
    index: "04",
    domain: "AI Systems Engineering",
    definition:
      "The integration of AI and machine learning capabilities into production software systems — covering model serving, retrieval-augmented generation, vector search, and AI-augmented workflow design. INX engineers AI as a production-grade system component, not a research prototype.",
    competencies: [
      "LLM integration and prompt engineering",
      "Retrieval-augmented generation (RAG) pipelines",
      "Vector database design (Pinecone, pgvector, Weaviate)",
      "Model serving and inference infrastructure",
      "AI-augmented workflow automation",
      "Evaluation and observability for AI systems",
    ],
  },
  {
    index: "05",
    domain: "Mobile Application Engineering",
    definition:
      "The engineering of native and cross-platform mobile applications — from architecture through App Store deployment. INX applies the same production standards to mobile as to backend systems: typed codebases, CI/CD pipelines, and documented release processes.",
    competencies: [
      "React Native (iOS and Android)",
      "Native iOS (Swift, SwiftUI)",
      "Native Android (Kotlin, Jetpack Compose)",
      "Mobile CI/CD and deployment pipelines",
      "Offline-first architecture",
      "Mobile performance and battery optimisation",
    ],
  },
  {
    index: "06",
    domain: "DevOps and Delivery Systems",
    definition:
      "The engineering of the systems that deliver software to production reliably and repeatedly. INX treats CI/CD, deployment infrastructure, and observability as engineering concerns equal in importance to application code — because systems that cannot be deployed safely cannot be operated at scale.",
    competencies: [
      "CI/CD pipeline design (GitHub Actions, CircleCI, GitLab)",
      "Automated testing infrastructure",
      "Zero-downtime deployment strategies",
      "Database migration tooling",
      "Incident response runbooks",
      "SLA and SLO measurement infrastructure",
    ],
  },
];

const technologyStack = [
  {
    layer: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    layer: "Backend",
    technologies: ["Node.js", "Python", "Go", "FastAPI", "tRPC", "GraphQL"],
  },
  {
    layer: "Database",
    technologies: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Pinecone", "pgvector"],
  },
  {
    layer: "Cloud",
    technologies: ["AWS", "Google Cloud Platform", "Azure", "Vercel", "Cloudflare"],
  },
  {
    layer: "Infrastructure",
    technologies: ["Terraform", "Docker", "Kubernetes", "GitHub Actions", "Datadog"],
  },
  {
    layer: "AI & ML",
    technologies: ["OpenAI API", "Anthropic API", "LangChain", "LlamaIndex", "Hugging Face"],
  },
];

const industries = [
  {
    name: "SaaS",
    description:
      "Multi-tenant platform architecture, subscription billing infrastructure, API-first design, and scalability engineering for commercial SaaS products.",
    link: "/industries/saas-development",
  },
  {
    name: "Healthcare Technology",
    description:
      "HIPAA-compliant system design, EHR integration, clinical workflow software, and patient data architecture under regulatory constraints.",
    link: "/industries/healthcare-software-development",
  },
  {
    name: "Financial Services and FinTech",
    description:
      "Transaction processing systems, regulatory compliance engineering, audit logging, and financial data architecture under correctness requirements.",
    link: "/industries/fintech-software-development",
  },
  {
    name: "Logistics and Supply Chain",
    description:
      "Order management systems, real-time tracking infrastructure, third-party logistics integrations, and operational dashboards.",
    link: null,
  },
  {
    name: "eCommerce and Retail",
    description:
      "Commerce platform engineering, inventory and fulfilment systems, payment processing, and high-traffic product catalogue architecture.",
    link: "/industries/ecommerce-development",
  },
  {
    name: "Gaming",
    description:
      "Game backend infrastructure, real-time multiplayer systems, leaderboard and progression services, and live operations engineering.",
    link: "/industries/gaming-software-development",
  },
  {
    name: "Professional Services",
    description:
      "Internal tooling, client-facing portals, document management systems, and workflow automation for service-led businesses.",
    link: null,
  },
];

const siblingPages = [
  { label: "Our Process", href: "/our-process", description: "How INX delivers: the five-phase methodology." },
  { label: "Engagement Models", href: "/engagement-models", description: "Discovery, project, augmentation, and dedicated team models." },
  { label: "Why INX", href: "/why-inx", description: "The positioning and differentiators of INX as an engineering partner." },
];

function expertisePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/expertise#service`,
    name: ORG_NAME,
    alternateName: "INX",
    url: `${BASE_URL}/expertise`,
    description: ENTITY.description,
    areaServed: "Worldwide",
    knowsAbout: [
      ...ENTITY.services,
      ...ENTITY.technologies,
      ...technicalDomains.map((d) => d.domain),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "INX Technical Expertise",
      itemListElement: ENTITY.services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s,
          provider: { "@type": "Organization", name: ORG_NAME },
        },
      })),
    },
  };
}

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={expertisePageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Expertise", item: `${BASE_URL}/expertise` },
        ])}
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="pt-32 pb-20 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-5">
          Engineering Expertise
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-8">
          What INX Knows and How It Is Applied
        </h1>
        <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-3xl mb-6">
          INX (IDEANEST X PRIVATE LIMITED) is a custom software development company with deep
          engineering competency across six technical domains. Every engagement applies that
          expertise through a structured discovery and delivery process — producing systems
          designed to perform in production, not just in demonstration conditions.
        </p>
        <p className="text-[13px] text-white/30 leading-relaxed max-w-2xl">
          Entity: INX — also known as IDEANEST X PRIVATE LIMITED or IdeanestX — is a
          software engineering firm headquartered in India, operating globally across SaaS,
          healthcare, fintech, logistics, eCommerce, gaming, and professional services verticals.
        </p>
      </div>

      {/* ── Technical Domains ────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
          Technical Domains
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
          Six areas of deep engineering competency
        </h2>
        <div className="space-y-0">
          {technicalDomains.map((domain, i) => (
            <div
              key={domain.index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 ${
                i < technicalDomains.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="lg:col-span-1 flex items-start">
                <span className="font-mono text-[11px] text-white/18 tracking-widest mt-1">
                  {domain.index}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-lg font-semibold text-white mb-4">{domain.domain}</h3>
                <p className="text-[13px] text-white/42 leading-relaxed">{domain.definition}</p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-4">
                  Competencies
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {domain.competencies.map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-blue-500/45 shrink-0" />
                      <span className="text-[12px] text-white/50">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Technology Stack ─────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Technology Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            Selected for operational fit, not trend
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {technologyStack.map((layer) => (
              <div key={layer.layer} className="bg-[#05070e] px-7 py-7">
                <p className="text-[10px] font-mono text-white/28 uppercase tracking-widest mb-4">
                  {layer.layer}
                </p>
                <div className="flex flex-wrap gap-2">
                  {layer.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-white/55 border border-white/[0.09] rounded-[2px] px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-white/25 leading-relaxed max-w-xl">
            Full technology stack documentation and selection rationale is available at{" "}
            <Link href="/technologies" className="text-white/40 hover:text-white/60 underline underline-offset-2">
              /technologies
            </Link>
            .
          </p>
        </div>
      </div>

      {/* ── Industries Served ────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Industries Served
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 max-w-xl">
            Seven verticals. Operational context drives every architecture decision.
          </h2>
          <p className="text-[13px] text-white/38 leading-relaxed max-w-2xl mb-14">
            INX does not apply generic engineering patterns to industry-specific problems.
            Domain context — the regulatory requirements, exception categories, and operational
            realities of each vertical — is treated as an architectural input.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="border border-white/[0.08] rounded-[3px] p-6"
              >
                <p className="text-[13px] font-semibold text-white/80 mb-3">{ind.name}</p>
                <p className="text-[12px] text-white/38 leading-relaxed mb-4">{ind.description}</p>
                {ind.link && (
                  <Link
                    href={ind.link}
                    className="text-[11px] text-blue-400/50 hover:text-blue-400/80 transition-colors"
                  >
                    Industry page →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Engineering Standards ────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Delivery Standards
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            How expertise is applied in practice
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {[
              {
                standard: "Discovery before architecture",
                body: "No architecture is produced until operational context is understood. Discovery is a structured, billable engagement that precedes all design decisions.",
              },
              {
                standard: "Architecture before engineering",
                body: "A full technical specification — data models, API contracts, system boundaries — is produced and agreed before production code is written.",
              },
              {
                standard: "Senior-only delivery",
                body: "All production systems are architected and delivered by senior engineers. INX does not operate junior-led workstreams on client systems.",
              },
              {
                standard: "Peer-reviewed code",
                body: "Every line of production code is reviewed by a second engineer before merge. Code review is a delivery requirement, not an optional practice.",
              },
              {
                standard: "Automated test coverage",
                body: "Test coverage is a delivery requirement. No production deployment occurs without documented test coverage against the specification.",
              },
              {
                standard: "Full IP transfer",
                body: "All intellectual property produced under an INX engagement transfers in full to the client upon settlement.",
              },
            ].map((item) => (
              <div key={item.standard} className="flex gap-5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500/50 shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-white/70 mb-1.5">{item.standard}</p>
                  <p className="text-[12px] text-white/35 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Related pages ────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-8">
            Related
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siblingPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block border border-white/[0.08] rounded-[3px] p-6 hover:border-white/[0.18] transition-colors"
              >
                <p className="text-[13px] font-semibold text-white/70 mb-2 group-hover:text-white/90">
                  {p.label}
                </p>
                <p className="text-[12px] text-white/32">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Discuss your engineering requirements
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-xl mx-auto">
            A member of the INX leadership team responds within two business days. Discovery
            engagements can begin within one week of initial alignment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
