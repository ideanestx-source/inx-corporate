import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema, howToSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How INX delivers software engineering engagements: a five-phase methodology covering discovery, architecture, engineering, deployment, and optimisation.",
  alternates: {
    canonical: `${BASE_URL}/our-process`,
  },
  openGraph: {
    title: "Our Process | INX",
    description:
      "How INX delivers software engineering engagements: a five-phase methodology covering discovery, architecture, engineering, deployment, and optimisation.",
    url: `${BASE_URL}/our-process`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | INX",
    description:
      "How INX delivers software engineering engagements: a five-phase methodology covering discovery, architecture, engineering, deployment, and optimisation.",
  },
};

const phases = [
  {
    index: "01",
    name: "Discovery",
    tagline: "Understanding before designing",
    summary:
      "Discovery is a structured, billable engagement — typically two to four weeks — that produces the architectural and commercial foundation every subsequent phase builds on. No engineering work begins until this phase is complete.",
    what: [
      "Stakeholder interviews to understand business and operational requirements",
      "Technical audit of existing systems where applicable",
      "Architecture requirements documentation",
      "Risk identification and mitigation planning",
      "Integration requirements mapping",
      "Milestone and timeline sequencing",
    ],
    produces:
      "A Technical Specification document — the contractual reference for all subsequent engineering work. Scope, architecture, milestones, and acceptance criteria are defined here.",
    principle:
      "Systems built without understanding the operational context they serve have a structural disadvantage no amount of engineering competence can overcome. Discovery exists to close that gap before the architecture is fixed.",
  },
  {
    index: "02",
    name: "Architecture",
    tagline: "Designing the system before building it",
    summary:
      "Architecture is treated as a formal engineering deliverable — not an implicit set of decisions made during coding. The architecture phase produces a complete technical design against which engineering is then executed.",
    what: [
      "Data model design and schema definition",
      "API contract specification (REST, GraphQL, or gRPC)",
      "System boundary and service decomposition design",
      "Third-party integration architecture",
      "Scalability and performance constraint modelling",
      "Security architecture and access control design",
    ],
    produces:
      "An Architecture Design Document extending the Technical Specification — providing engineers with unambiguous direction on data structures, component boundaries, and integration contracts.",
    principle:
      "Architecture decisions are the most expensive to reverse. Making them explicitly, on paper, before production code is written eliminates the class of technical debt that accumulates when design happens implicitly during development.",
  },
  {
    index: "03",
    name: "Engineering",
    tagline: "Senior-only delivery against a defined specification",
    summary:
      "Engineering proceeds against the Technical Specification and Architecture Design Document. Progress is transparent, code quality is non-negotiable, and every feature is delivered with tests, documentation, and code review.",
    what: [
      "Feature development by senior engineers against the agreed specification",
      "Mandatory peer code review for every pull request",
      "Automated test coverage as a delivery requirement",
      "Continuous integration against a shared trunk",
      "Weekly progress reporting against milestones",
      "Architecture deviation flags — any spec change is documented and approved",
    ],
    produces:
      "A production-ready codebase with documented test coverage, passing CI, and code reviewed against the specification. Deployment-ready artifacts produced at each milestone.",
    principle:
      "Engineering is not where design decisions should be made. When engineering proceeds against a clear specification, delivery is predictable and quality is measurable — not a matter of individual judgement.",
  },
  {
    index: "04",
    name: "Deployment",
    tagline: "Handing over operating systems, not code repositories",
    summary:
      "Production deployment is treated as a complete engineering task — not a handoff. INX deploys with full observability tooling, runbooks, and documented operational procedures.",
    what: [
      "Deployment pipeline engineering (CI/CD to production)",
      "Observability setup: metrics, distributed tracing, structured logging",
      "Alerting and on-call runbook documentation",
      "Database migration and data validation in production",
      "Security review and vulnerability scanning",
      "Post-deployment smoke testing and validation",
    ],
    produces:
      "A production system with documented operational procedures, configured alerting, and a handover package sufficient for any competent engineering team to operate.",
    principle:
      "Software that cannot be reliably deployed, monitored, and recovered from failure is not production-ready regardless of its code quality. Deployment engineering is treated with the same seriousness as feature engineering.",
  },
  {
    index: "05",
    name: "Optimisation",
    tagline: "Measuring production behaviour against operational requirements",
    summary:
      "After deployment, INX continues to monitor and optimise the system under real production load. The warranty period provides structured post-delivery support before transition to ongoing support or handover.",
    what: [
      "Production performance measurement against specification targets",
      "Query and API endpoint optimisation under load",
      "Bottleneck identification and resolution",
      "Dependency and security patching",
      "User feedback integration and product iteration",
      "Transition planning to ongoing support or internal team handover",
    ],
    produces:
      "A validated production system performing within specified parameters, with documented performance baselines and a clear operational handover.",
    principle:
      "Production behaviour is the only reliable measure of engineering quality. Systems that perform well in staging but fail under real load are a systemic failure of the delivery process — not an acceptable outcome.",
  },
];

const qualityControls = [
  { control: "Specification lock", detail: "No feature is built without a specification entry. Scope changes require documented amendment." },
  { control: "Peer code review", detail: "Every production merge requires a second-engineer review. No exceptions." },
  { control: "Test coverage gate", detail: "Automated test coverage is checked at each milestone. Untested code is not shipped." },
  { control: "Architecture deviation protocol", detail: "Any departure from the architecture specification is flagged, documented, and approved before proceeding." },
  { control: "Weekly milestone reporting", detail: "Progress against milestones is reported transparently, including blocked items and timeline risks." },
  { control: "Post-deployment warranty", detail: "A structured warranty period follows all project-based engagements." },
];

const processSchema = howToSchema({
  name: "INX Five-Phase Software Engineering Delivery Process",
  description:
    "The structured delivery methodology INX applies to every software engineering engagement — from discovery through to production optimisation.",
  url: `${BASE_URL}/our-process`,
  steps: phases.map((p) => ({
    name: p.name,
    text: p.summary,
  })),
});

const siblingPages = [
  { label: "Engagement Models", href: "/engagement-models", description: "How engagements are structured commercially." },
  { label: "Our Expertise", href: "/expertise", description: "Technical domains and technology stack." },
  { label: "Why INX", href: "/why-inx", description: "How INX differs from alternatives." },
];

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={processSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Our Process", item: `${BASE_URL}/our-process` },
        ])}
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="pt-32 pb-20 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-5">
          Delivery Methodology
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-8">
          How INX Delivers
        </h1>
        <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-3xl mb-6">
          Every INX engagement follows the same five-phase delivery model: Discovery, Architecture,
          Engineering, Deployment, and Optimisation. The model is adapted to context — never abandoned
          for convenience.
        </p>
        <p className="text-[13px] text-white/30 leading-relaxed max-w-2xl">
          The process exists because engineering quality is not a property of individual engineers —
          it is a property of the system in which they work. A clear process produces predictable
          outcomes. The absence of process produces unpredictable ones.
        </p>
      </div>

      {/* ── Five Phases ──────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        {phases.map((phase, i) => (
          <div
            key={phase.index}
            className={`py-20 border-b border-white/[0.06] ${
              i % 2 === 1 ? "bg-white/[0.012]" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left: phase header */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[11px] text-white/18 tracking-widest">
                      {phase.index}
                    </span>
                    <span className="h-px w-4 bg-white/[0.1]" />
                    <span className="text-[11px] font-mono text-white/25 tracking-widest uppercase">
                      Phase
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                    {phase.name}
                  </h2>
                  <p className="text-[13px] text-blue-400/50 mb-6">{phase.tagline}</p>
                  <p className="text-[13px] text-white/42 leading-relaxed">{phase.summary}</p>
                </div>

                {/* Right: what happens + output + principle */}
                <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                  <div>
                    <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-4">
                      What Happens
                    </p>
                    <ul className="space-y-2.5">
                      {phase.what.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[7px] h-1 w-1 rounded-full bg-white/20 shrink-0" />
                          <span className="text-[13px] text-white/55 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-white/[0.07] rounded-[3px] bg-white/[0.02] p-5">
                    <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-2">
                      Deliverable
                    </p>
                    <p className="text-[13px] text-white/55 leading-relaxed">{phase.produces}</p>
                  </div>

                  <div className="border-l-2 border-blue-500/20 pl-5">
                    <p className="text-[12px] text-white/35 italic leading-relaxed">
                      {phase.principle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Quality Controls ─────────────────────────────────────────── */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Quality Controls
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            Embedded at every phase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityControls.map((qc) => (
              <div
                key={qc.control}
                className="border border-white/[0.08] rounded-[3px] p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/55 shrink-0" />
                  <p className="text-[13px] font-semibold text-white/70">{qc.control}</p>
                </div>
                <p className="text-[12px] text-white/35 leading-relaxed">{qc.detail}</p>
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
            Begin with a discovery conversation
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-xl mx-auto">
            Discovery engagements can begin within one week of initial alignment.
            Submit an inquiry and our leadership team will respond within two business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
            >
              Start a conversation
            </Link>
            <Link
              href="/engagement-models"
              className="text-sm text-white/38 hover:text-white/60 transition-colors"
            >
              See engagement models →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
