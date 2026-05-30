import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why INX",
  description:
    "Why organizations choose INX: senior-only delivery, discovery-first process, architecture before code, full IP ownership, and engineering accountability at every phase.",
  alternates: {
    canonical: `${BASE_URL}/why-inx`,
  },
  openGraph: {
    title: "Why INX | INX",
    description:
      "Why organizations choose INX: senior-only delivery, discovery-first process, architecture before code, full IP ownership, and engineering accountability at every phase.",
    url: `${BASE_URL}/why-inx`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why INX | INX",
    description:
      "Why organizations choose INX: senior-only delivery, discovery-first process, architecture before code, full IP ownership, and engineering accountability at every phase.",
  },
};

const differentiators = [
  {
    index: "01",
    title: "Discovery before architecture. Architecture before code.",
    body: "Most engineering failures are not engineering failures — they are specification failures. Systems built against the wrong model require expensive correction regardless of code quality. INX begins every engagement with a structured discovery phase that produces the specification engineering is then built against. This sequence is not negotiable, and it is what separates predictable delivery from expensive iteration.",
  },
  {
    index: "02",
    title: "Senior engineers on every project. No exceptions.",
    body: "INX does not operate junior-led workstreams on client systems. Every production system is architected and delivered by senior engineers who own their decisions and understand the consequences of architectural choices. This is not a marketing claim — it is a structural constraint on how INX assembles teams. Senior delivery costs more and produces better outcomes. The alternative is cheaper at first and expensive in production.",
  },
  {
    index: "03",
    title: "Accountability for production outcomes, not specification compliance.",
    body: "The standard measure of engineering success — did it pass acceptance? — is the wrong measure. Systems that pass acceptance and fail in production represent an engineering failure. INX engineers are accountable for how the system behaves after deployment, under real load, with real users. That accountability changes the decisions made during architecture and engineering.",
  },
  {
    index: "04",
    title: "Full intellectual property transfer. No conditions.",
    body: "Every line of code, every architectural decision, every document produced under an INX engagement transfers in full to the client upon settlement. INX retains no rights to any work product. This is the standard every client should expect from an engineering partner — and the standard many do not enforce.",
  },
  {
    index: "05",
    title: "A process that protects the client, not the delivery team.",
    body: "Engineering processes often exist to protect the agency — to create scope ambiguity that justifies change requests, or milestone definitions that allow work to be declared complete before it is correct. INX's process — specification lock, peer review, test coverage requirements, and post-deployment warranty — is designed to protect the client's outcome. Each control exists because its absence has produced failures.",
  },
];

const comparisons = [
  {
    category: "vs. Traditional Software Agencies",
    points: [
      "Agencies execute tasks. INX owns outcomes.",
      "Agencies often use junior engineers on client work. INX uses senior engineers exclusively.",
      "Agencies produce code. INX produces operating systems with observability, documentation, and runbooks.",
      "Agency scope typically expands. INX scope is locked in a specification before engineering begins.",
    ],
  },
  {
    category: "vs. Large Consultancies",
    points: [
      "Consultancies scale process. INX scales expertise.",
      "Consultancy delivery is often managed by non-engineers. INX is managed by engineers.",
      "Consultancies introduce methodology overhead. INX introduces engineering rigour.",
      "Consultancy pricing reflects brand premium. INX pricing reflects delivery scope.",
    ],
  },
  {
    category: "vs. Staff Augmentation Firms",
    points: [
      "Augmentation firms optimise for headcount placement. INX optimises for delivery outcomes.",
      "Augmentation firms supply engineers without vetting delivery quality. INX maintains engineering standards across all placements.",
      "Augmentation is appropriate when the constraint is capacity. INX offers augmentation, project delivery, and dedicated teams — matched to the actual constraint.",
    ],
  },
  {
    category: "vs. Freelance and Independent Contractors",
    points: [
      "Freelancers provide individual contribution. INX provides team-level delivery with management and quality controls.",
      "Freelance engagements have no structured delivery process. INX engagements are process-governed.",
      "Freelance IP ownership is often ambiguous. INX transfers all IP unconditionally.",
    ],
  },
];

const faqs = [
  {
    question: "What makes INX different from other software development companies?",
    answer:
      "INX operates with three structural differences: discovery-first engagement (no architecture without operational understanding), senior-only delivery (no junior-led workstreams), and accountability for production outcomes rather than specification compliance. These are not policies — they are embedded in how engagements are structured commercially and operationally.",
  },
  {
    question: "How does INX handle scope changes during a project?",
    answer:
      "Scope changes are handled through a documented amendment process against the Technical Specification. No scope change proceeds without explicit client approval and a documented impact assessment covering timeline and cost. This protects the client from unauthorised scope expansion and protects the delivery team from undocumented requirement drift.",
  },
  {
    question: "What happens if the delivered system does not meet requirements?",
    answer:
      "All project-based engagements include a post-deployment warranty period during which INX remediates defects against the agreed specification at no additional charge. The Technical Specification defines acceptance criteria — any defect against those criteria is remediated within the warranty period.",
  },
  {
    question: "Does INX work with early-stage startups?",
    answer:
      "INX works with growth-stage technology companies and established enterprises. Early-stage startups without defined product requirements or operational context are not well-served by INX's process — which requires a level of definitional clarity that early-stage product exploration does not yet have. INX is the right partner for organisations ready to build, not organisations still discovering what to build.",
  },
  {
    question: "How quickly can an INX engagement mobilise?",
    answer:
      "Discovery engagements can begin within one week of initial alignment and NDA execution. Project-based and dedicated team engagements require a two to four week mobilisation period for team assembly, environment setup, and context transfer. Staff augmentation can mobilise within two to three weeks.",
  },
  {
    question: "Does INX provide post-delivery support?",
    answer:
      "All project-based engagements include a post-deployment warranty period. Structured ongoing support retainers are available and are typically scoped during the delivery phase. INX recommends against handoffs to unrelated third parties for systems it has architected and built — continuity of engineering knowledge is a delivery asset.",
  },
  {
    question: "How does INX integrate with an existing internal engineering team?",
    answer:
      "INX operates as a genuine extension of the client's engineering organisation — participating in ceremonies, adopting client toolchains, and maintaining the same accountability standards as internal engineers. The integration model is defined during discovery and documented in the engagement specification. INX does not impose its own tooling on client teams.",
  },
];

const siblingPages = [
  { label: "Our Process", href: "/our-process", description: "The five-phase delivery methodology." },
  { label: "Engagement Models", href: "/engagement-models", description: "Discovery, project, augmentation, and dedicated team models." },
  { label: "Our Expertise", href: "/expertise", description: "Technical domains and technology stack." },
];

export default function WhyINXPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Why INX", item: `${BASE_URL}/why-inx` },
        ])}
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="pt-32 pb-20 mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-5">
          Why INX
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white leading-[1.06] tracking-tight max-w-4xl mb-8">
          The case for INX as your engineering partner
        </h1>
        <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-3xl mb-6">
          INX exists because the gap between engineering ambition and engineering delivery is
          structural — not circumstantial. Most of the failure modes in software projects are
          predictable, preventable, and the result of known shortcomings in how delivery
          partners are selected and managed.
        </p>
        <p className="text-[13px] text-white/30 leading-relaxed max-w-2xl">
          IDEANEST X PRIVATE LIMITED was founded to close that gap — with a delivery model
          designed around what actually produces reliable production systems, not what is
          easiest to sell.
        </p>
      </div>

      {/* ── The Gap ──────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-4">
                The Problem
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-snug">
                Why ambitious technology projects fail
              </h2>
              <div className="space-y-4">
                {[
                  "Systems are built before requirements are understood, producing architectures that serve the developer's model of the problem — not the operational reality.",
                  "Junior engineers make architectural decisions under time pressure that compound into structural debt over months and years.",
                  "Delivery accountability ends at the handover — leaving the client with code that works in demonstration conditions and fails in production.",
                  "Scope is not formally controlled, producing cost overruns that are invisible until well into delivery.",
                  "IP ownership is ambiguous, leaving organisations dependent on the original development team for ongoing changes.",
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-mono text-[11px] text-white/18 tracking-widest mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13px] text-white/45 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-4">
                The INX Response
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-snug">
                A delivery model designed around failure prevention
              </h2>
              <div className="space-y-4">
                {[
                  "Discovery-first engagement — no architecture without operational understanding. The specification governs all subsequent decisions.",
                  "Senior-only engineering — no junior-led workstreams. Every architectural decision is made by an engineer who owns its consequences.",
                  "Production accountability — post-deployment warranty and observability engineering included as standard.",
                  "Specification lock — scope changes require formal amendment. No undocumented requirement drift.",
                  "Full IP transfer — unconditional. No dependency on INX for future changes.",
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50 shrink-0 mt-[5px]" />
                    <p className="text-[13px] text-white/55 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Differentiators ──────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            What Differentiates INX
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            Five structural commitments
          </h2>
          <div className="space-y-0">
            {differentiators.map((d, i) => (
              <div
                key={d.index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 ${
                  i < differentiators.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <div className="lg:col-span-1">
                  <span className="font-mono text-[11px] text-white/18 tracking-widest">
                    {d.index}
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="text-[15px] font-semibold text-white/80 mb-3 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-[13px] text-white/42 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Comparisons ──────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Competitive Context
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            How INX differs from the alternatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comparisons.map((c) => (
              <div
                key={c.category}
                className="border border-white/[0.08] rounded-[3px] p-7"
              >
                <p className="text-[12px] font-semibold text-white/55 mb-5">{c.category}</p>
                <ul className="space-y-3">
                  {c.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[6px] h-1 w-1 rounded-full bg-white/18 shrink-0" />
                      <p className="text-[12px] text-white/40 leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQs ─────────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-14 max-w-xl">
            Questions about choosing INX
          </h2>
          <div className="max-w-3xl space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`py-6 ${i < faqs.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <p className="text-[14px] font-semibold text-white/75 mb-3">{faq.question}</p>
                <p className="text-[13px] text-white/42 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Related pages ────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] py-16 bg-white/[0.012]">
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
            A member of the INX leadership team responds within two business days.
            No pre-sales process. A direct conversation about your requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
            >
              Start a conversation
            </Link>
            <Link
              href="/about"
              className="text-sm text-white/38 hover:text-white/60 transition-colors"
            >
              About INX →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
