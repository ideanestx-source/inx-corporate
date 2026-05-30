import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  BASE_URL,
  SITE_NAME,
  ORG_NAME,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engagement Models",
  description:
    "How to work with INX: discovery engagements, fixed-scope project delivery, staff augmentation, and dedicated engineering teams. Commercial structures for every stage.",
  alternates: {
    canonical: `${BASE_URL}/engagement-models`,
  },
  openGraph: {
    title: "Engagement Models | INX",
    description:
      "How to work with INX: discovery engagements, fixed-scope project delivery, staff augmentation, and dedicated engineering teams. Commercial structures for every stage.",
    url: `${BASE_URL}/engagement-models`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engagement Models | INX",
    description:
      "How to work with INX: discovery engagements, fixed-scope project delivery, staff augmentation, and dedicated engineering teams. Commercial structures for every stage.",
  },
};

const models = [
  {
    index: "01",
    name: "Discovery Engagement",
    slug: "discovery",
    tagline: "Understand before you build",
    duration: "2 – 4 weeks",
    commercial: "Billable at a fixed rate. Scoped and agreed before it begins.",
    bestFor: "Any organisation that needs to define scope, de-risk architecture, or evaluate technical options before committing to a development budget.",
    description:
      "A discovery engagement is a structured technical and commercial investigation. It precedes all development work and is always billable — because the output is a professional deliverable, not a sales activity.",
    included: [
      "Stakeholder interviews and requirements elicitation",
      "Technical audit of existing systems (where applicable)",
      "Architecture requirements and constraints documentation",
      "Risk identification and mitigation recommendations",
      "Integration and third-party dependency mapping",
      "Milestone plan and timeline estimate",
      "Technical Specification document (binding output)",
    ],
    output:
      "A Technical Specification that defines scope, architecture approach, milestones, and acceptance criteria. This document governs all subsequent engineering work.",
    notFor: "Organisations seeking a free scoping process. Discovery is a professional service engagement, not a pre-sales activity.",
  },
  {
    index: "02",
    name: "Project-Based Delivery",
    slug: "project",
    tagline: "Defined scope. Defined outcome.",
    duration: "Milestone-based — typically 3 to 12 months",
    commercial: "Fixed price against the Technical Specification, or time-and-materials with agreed monthly caps.",
    bestFor: "Organisations with a defined initiative — a new platform, a system migration, a product launch — and a clear outcome to deliver against.",
    description:
      "Project-based delivery is the standard INX engagement for defined initiatives. The Technical Specification (produced during discovery or provided by the client) governs scope. Milestones are agreed. Delivery is documented.",
    included: [
      "Architecture design (if not pre-existing)",
      "Senior-only engineering delivery",
      "Mandatory peer code review on all production code",
      "Automated test coverage as a delivery requirement",
      "Weekly milestone progress reporting",
      "Production deployment with full observability setup",
      "Post-deployment warranty period",
      "Full IP transfer on settlement",
    ],
    output:
      "A production-deployed system meeting the agreed specification, with documented test coverage, operational runbooks, and a full IP transfer.",
    notFor: "Exploratory work where requirements are undefined. Project delivery requires a specification to proceed against.",
  },
  {
    index: "03",
    name: "Staff Augmentation",
    slug: "augmentation",
    tagline: "Senior engineers. Your team. Your management.",
    duration: "Monthly — typically 3 months minimum",
    commercial: "Monthly retainer per engineer. Priced at seniority level.",
    bestFor: "Organisations with strong engineering management and direction, where the constraint is execution capacity — not technical leadership or process clarity.",
    description:
      "Staff augmentation places senior INX engineers within an existing client team — integrated into tools, ceremonies, and processes, under client engineering management. The engagement adds capacity, not direction.",
    included: [
      "Senior engineer(s) integrated into client team",
      "Participation in client ceremonies (standups, reviews, retrospectives)",
      "Client toolchain adoption (Jira, Linear, GitHub, Slack, etc.)",
      "INX code review standards maintained",
      "Weekly progress alignment with INX engagement lead",
      "Replacement guarantee if fit is not met within 30 days",
    ],
    output:
      "Execution capacity additions at senior level, without the overhead of recruitment, employment, or management structure.",
    notFor:
      "Situations where the constraint is management capability, technical direction, or process clarity. Augmentation adds engineers — it does not add leadership.",
  },
  {
    index: "04",
    name: "Dedicated Engineering Team",
    slug: "dedicated-team",
    tagline: "A full engineering function. Delivered as a service.",
    duration: "Ongoing — typically 6 months minimum",
    commercial: "Monthly retainer covering the full team. Includes engineering management.",
    bestFor:
      "Organisations that need a complete engineering capability — including technical leadership, delivery management, and execution — without building an internal function.",
    description:
      "A dedicated team engagement provides a fully assembled senior engineering team operating as an embedded delivery partner. The team is responsible for technical direction, architecture, and delivery outcomes — under agreed governance with the client.",
    included: [
      "Senior engineering team (3 – 8 engineers)",
      "INX-provided technical leadership",
      "Architecture ownership and documentation",
      "Sprint-based delivery with client visibility",
      "Hiring and team composition decisions made by INX",
      "Delivery reporting at executive and operational levels",
      "Full IP transfer — all code and architecture produced for the client",
    ],
    output:
      "A fully operating engineering function accountable for technical outcomes — not just task completion.",
    notFor:
      "Organisations that already have strong technical leadership and only need execution capacity. Dedicated teams include leadership; augmentation does not.",
  },
];

const commercialFaqs = [
  {
    question: "Does INX charge for discovery?",
    answer:
      "Yes. Discovery is a professional service engagement — not a pre-sales activity. It produces a Technical Specification document that is a binding contractual deliverable. INX does not conduct free scoping work for development engagements.",
  },
  {
    question: "How is project-based work priced?",
    answer:
      "Project-based engagements are priced against a Technical Specification produced during discovery. Pricing reflects the scope, team composition, and timeline agreed in the specification. INX does not publish rate cards — pricing is always engagement-specific.",
  },
  {
    question: "What is the minimum commitment for staff augmentation?",
    answer:
      "Staff augmentation engagements operate on monthly retainers with a three-month minimum. This minimum reflects the onboarding and context transfer investment required for an augmented engineer to operate effectively within a client team.",
  },
  {
    question: "Can INX begin work immediately?",
    answer:
      "Discovery engagements can begin within one week of initial alignment and NDA execution. Project-based and dedicated team engagements require a two to four week mobilisation period following agreement to allow for team assembly, context transfer, and environment setup.",
  },
  {
    question: "Who owns the intellectual property?",
    answer:
      "All intellectual property produced under an INX engagement transfers in full to the client upon settlement. INX retains no rights to client-specific code, architecture, or system design.",
  },
];

function itemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "INX Engagement Models",
    description:
      "The four commercial engagement structures through which organizations work with INX.",
    numberOfItems: models.length,
    itemListElement: models.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: m.name,
        description: m.description,
        provider: {
          "@type": "Organization",
          name: ORG_NAME,
          url: BASE_URL,
        },
      },
    })),
  };
}

const siblingPages = [
  { label: "Our Process", href: "/our-process", description: "The five-phase delivery methodology." },
  { label: "Our Expertise", href: "/expertise", description: "Technical domains and technology stack." },
  { label: "Why INX", href: "/why-inx", description: "How INX differs from alternatives." },
];

export default function EngagementModelsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={itemListSchema()} />
      <JsonLd data={faqSchema(commercialFaqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Engagement Models", item: `${BASE_URL}/engagement-models` },
        ])}
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="pt-32 pb-20 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-5">
          How to Work With INX
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-8">
          Engagement Models
        </h1>
        <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-3xl mb-6">
          INX operates four commercial engagement structures. Each is designed for a specific
          set of circumstances — defined scope versus exploratory work, full team delivery versus
          capacity augmentation. The right model depends on what the organisation actually needs.
        </p>
        <p className="text-[13px] text-white/30 leading-relaxed max-w-2xl">
          All engagements begin with an initial conversation with the INX leadership team.
          Discovery engagements can begin within one week of alignment.
        </p>
      </div>

      {/* ── Model Cards ──────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        {models.map((model, i) => (
          <div
            key={model.index}
            id={model.slug}
            className={`py-20 border-b border-white/[0.06] ${
              i % 2 === 1 ? "bg-white/[0.012]" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Header */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-[11px] text-white/18 tracking-widest">
                    {model.index}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-4 mb-2">
                    {model.name}
                  </h2>
                  <p className="text-[13px] text-blue-400/50 mb-5">{model.tagline}</p>
                  <p className="text-[13px] text-white/42 leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-1">
                        Duration
                      </p>
                      <p className="text-[13px] text-white/55">{model.duration}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-1">
                        Commercial
                      </p>
                      <p className="text-[13px] text-white/55">{model.commercial}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-1">
                        Best For
                      </p>
                      <p className="text-[13px] text-white/55">{model.bestFor}</p>
                    </div>
                  </div>
                </div>

                {/* Detail */}
                <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                  <div>
                    <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-4">
                      What Is Included
                    </p>
                    <ul className="space-y-2.5">
                      {model.included.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[7px] h-1 w-1 rounded-full bg-white/20 shrink-0" />
                          <span className="text-[13px] text-white/55 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-white/[0.07] rounded-[3px] bg-white/[0.02] p-5">
                    <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-2">
                      Output
                    </p>
                    <p className="text-[13px] text-white/55 leading-relaxed">{model.output}</p>
                  </div>

                  <div className="border-l-2 border-white/[0.08] pl-5">
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1.5">
                      Not For
                    </p>
                    <p className="text-[12px] text-white/30 leading-relaxed">{model.notFor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Commercial FAQs ──────────────────────────────────────────── */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Commercial Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            Pricing and structure
          </h2>
          <div className="max-w-3xl space-y-0">
            {commercialFaqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`py-6 ${i < commercialFaqs.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <p className="text-[14px] font-semibold text-white/75 mb-3">{faq.question}</p>
                <p className="text-[13px] text-white/42 leading-relaxed">{faq.answer}</p>
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
            Start with a conversation
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-xl mx-auto">
            Submit a business inquiry and the INX leadership team will respond within
            two business days. We will identify the right engagement model together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
            >
              Submit an inquiry
            </Link>
            <Link
              href="/our-process"
              className="text-sm text-white/38 hover:text-white/60 transition-colors"
            >
              See how we deliver →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
