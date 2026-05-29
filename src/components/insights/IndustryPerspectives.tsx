"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SystemsArchArt,
  EngineeringPracticeArt,
  AISystemsArt,
  InternalSystemsArt,
  PerformanceArt,
} from "@/components/visuals/EditorialArt";
import type { ComponentType } from "react";

type Perspective = {
  index: string;
  category: string;
  readingTime: string;
  date: string;
  title: string;
  summary: string;
  observations: string[];
  implications: string[];
};

const perspectives: Perspective[] = [
  {
    index: "01",
    category: "Food & Beverage Operations",
    readingTime: "9 min read",
    date: "May 2026",
    title: "Why Restaurant Technology Stacks Become Operational Bottlenecks",
    summary:
      "Restaurant groups typically acquire technology incrementally - a POS system chosen for the first location, an online ordering integration added when delivery became operationally necessary, a kitchen display system retrofitted to an existing workflow, and a reporting layer built on top of all three after the fact. The result is not a technology stack. It is a collection of systems that were each individually appropriate for the operational context they entered and collectively inadequate for the operational context they now serve.",
    observations: [
      "POS systems are selected for front-of-house workflows and rarely expose data in formats appropriate for kitchen or inventory integrations without custom middleware built specifically to bridge the gap.",
      "Online ordering platforms introduce a parallel order management flow that kitchen display systems were not designed to reconcile in real time, creating operational gaps that widen at peak volume.",
      "Franchise reporting requirements - revenue by location, void rates, staff hours - surface fragmentation that was invisible at single-location scale and becomes a daily manual effort at multi-location scale.",
    ],
    implications: [
      "The integration layer between POS, KDS, and ordering platforms is where operational data coherence is either established or permanently lost. Treating it as a secondary engineering concern is the primary structural source of reporting fragmentation in multi-location restaurant groups.",
      "Franchise expansion accelerates fragmentation. Each location added to a disconnected system multiplies the manual reconciliation overhead at the rate of the number of unique reporting surfaces involved, not linearly.",
    ],
  },
  {
    index: "02",
    category: "Logistics & Supply Chain",
    readingTime: "8 min read",
    date: "April 2026",
    title: "The Hidden Complexity Behind Modern Logistics Platforms",
    summary:
      "Route optimization is the visible surface of logistics technology. The complexity that determines whether a logistics platform performs under real operational conditions lives elsewhere: in the synchronization between fleet telemetry and warehouse systems, in the event handling architecture that processes exceptions without queue saturation, and in the operational reliability model that governs how the platform behaves when a GPS feed drops, a delivery fails, or a driver deviates from the assigned route.",
    observations: [
      "Fleet visibility systems that process telemetry at high update frequency often introduce latency in dispatcher interfaces, creating a gap between the system's view of the fleet and the dispatcher's effective operational picture at the moment decisions need to be made.",
      "Warehouse synchronization with last-mile logistics requires event ordering guarantees that are frequently absent in platforms assembled as aggregations of separate tools with no shared event backbone.",
      "Exception handling - the failed delivery, the route deviation, the vehicle with connectivity issues - is where the majority of dispatcher cognitive load concentrates, and where most logistics platforms provide the least structured operational support.",
    ],
    implications: [
      "Real-time event infrastructure is not a logistics feature. It is the operational foundation on which route accuracy, fleet visibility, and warehouse synchronization all depend. Systems built without it compensate with polling intervals that undermine the operational utility of the platform at precisely the moments it matters most.",
      "The offline case must be designed for explicitly. A logistics platform that assumes continuous connectivity will fail in the operational environments where reliability is most consequential.",
    ],
  },
  {
    index: "03",
    category: "Internal Operations",
    readingTime: "7 min read",
    date: "March 2026",
    title: "Why Internal Business Tools Often Fail Adoption",
    summary:
      "Internal tooling failure is typically diagnosed as a change management problem - users resisting adoption of a system that would improve their workflows if they would only use it. In most cases, the diagnosis inverts the actual causality. Adoption fails because the tool does not reflect how the workflow actually operates. It reflects how the workflow was described during requirements gathering: a systematized, idealized version of a process that, in practice, operates through exceptions, informal shortcuts, and context-specific judgment calls that were never surfaced during specification.",
    observations: [
      "Internal tools built against documented workflows frequently require users to complete digital steps that add administrative overhead without reducing operational effort, making the tool a net cost to the people it was designed to assist.",
      "Adoption rates for internal systems drop significantly when the system cannot be operated partially - users required to complete an entire workflow in the tool before returning to their primary work will develop routes around it.",
      "The gap between what users report as their workflow during requirements gathering and what they actually do is an engineering input, not a change management variable to be addressed post-deployment.",
    ],
    implications: [
      "Workflow observation - watching operators work rather than interviewing them about how they work - consistently produces more accurate requirements than process documentation review. The informal steps and exception handling that occur between documented stages are often where the highest-frequency operational decisions are made.",
      "Internal tools require the same UX investment as customer-facing products. The assumption that internal users will tolerate friction that customers would not has a measurable cost in adoption rates and the accumulation of operational workarounds that compound in complexity over time.",
    ],
  },
  {
    index: "04",
    category: "SaaS Engineering",
    readingTime: "6 min read",
    date: "February 2026",
    title: "SaaS Platforms Grow Faster Than Their Architecture",
    summary:
      "The architectural decisions made at SaaS platform launch are not wrong for the scale they serve at launch. They are wrong for the scale the platform reaches twelve months later. The shared database that was appropriate for three tenants becomes a performance and isolation liability at three hundred. The synchronous request path acceptable for current load becomes a reliability constraint when traffic grows. The deployment model practical for a two-person team introduces delivery risk when multiple engineers are working across the same codebase simultaneously.",
    observations: [
      "Multi-tenancy isolation models chosen at launch - schema-per-tenant, row-level security, shared schema - each have crossover points where their operational profile inverts from cost-effective to problematic, and those crossover points arrive earlier than the teams that chose them typically anticipate.",
      "Deployment velocity decreases predictably as test surface area grows without corresponding investment in test infrastructure that scales at the same rate as the product it is intended to validate.",
      "Technical debt in SaaS platforms accumulates fastest at the data model layer, where early design decisions constrain every feature that follows without the constraint being immediately visible in delivery velocity.",
    ],
    implications: [
      "Architecture review should be a scheduled activity, not a reactive one triggered by production incidents. The point at which architectural changes become necessary is almost always visible in load and complexity metrics well before it becomes urgent.",
      "Deployment infrastructure investment has a return that is measurable in release cadence and incident frequency. Treating it as operational overhead rather than an engineering output means paying the cost in deployment risk at precisely the point where absorbing that risk is most expensive.",
    ],
  },
  {
    index: "05",
    category: "AI Systems",
    readingTime: "10 min read",
    date: "January 2026",
    title: "AI Systems Require Process Discipline Before Automation",
    summary:
      "The operational pattern of AI system failure in enterprise contexts is consistent: automation is introduced before the process it automates is understood with sufficient precision to specify what correct automated behaviour looks like. The result is a system that performs to a specification that did not capture the operational reality of the workflow - which means it performs correctly in narrow technical terms while producing outputs that require increasing levels of human correction over time.",
    observations: [
      "AI system accuracy is only meaningful relative to a defined acceptance threshold established before deployment. Without that threshold, accuracy degradation is not detectable until it reaches the level of user-visible operational disruption.",
      "Data quality issues invisible at the manual workflow stage become structurally amplified in automated pipelines - errors that a human reviewer would flag are processed at volume before they surface as an identifiable pattern.",
      "Governance requirements - auditability, explainability, rollback - are significantly easier to design for before model selection and training than after, and significantly more expensive to retrofit than to build from the outset.",
    ],
    implications: [
      "The engineering work that precedes AI system implementation - process mapping, data quality assessment, threshold definition, governance specification - is not preparatory work. It is the primary determinant of whether the system is implementable with acceptable operational risk.",
      "Human-in-the-loop design is an architectural decision, not an afterthought. The boundary between what the system decides and what a human reviews must be defined in the specification, not in the incident response document that follows the first operational failure.",
    ],
  },
  {
    index: "06",
    category: "Professional Services",
    readingTime: "7 min read",
    date: "December 2025",
    title: "The Cost of Fragmented Systems in Professional Services Firms",
    summary:
      "Professional services firms accumulate operational tooling in response to immediate needs: a CRM for pipeline tracking, a project management tool for delivery, a time tracking system, a billing platform with limited integration capability, and email as the connective tissue between all four. The fragmentation is not apparent in daily operations, where practitioners have developed workflows that route around the gaps. It becomes visible when leadership requires a unified operational picture - when pipeline and delivery status need reconciling, or when revenue reporting requires combining data from three systems that do not agree.",
    observations: [
      "Reporting in fragmented professional services environments almost always involves manual reconciliation between systems, typically performed by someone with the institutional knowledge to know which system's version of a metric to trust in a given context.",
      "Communication overhead scales with team size in fragmented environments because the absence of shared operational context requires more status communication to achieve the same coordination outcome.",
      "Billable time capture is consistently underreported in firms where the capture mechanism requires context switching between the tool in active use and a separate time tracking interface.",
    ],
    implications: [
      "System consolidation without workflow redesign replicates fragmentation in a different form. The integration question is not only technical - it is about which operational model the consolidated system will reflect, and whether that model is derived from how work actually happens or from how it is documented.",
      "The cost of fragmentation is most visible in the roles that exist to manage it - analysts who produce reports that could be generated automatically, coordinators who communicate information that could be surfaced by the system, managers who reconcile data that should never have diverged.",
    ],
  },
];

const categoryArtMap: Record<string, ComponentType> = {
  "Food & Beverage Operations": PerformanceArt,
  "Logistics & Supply Chain": SystemsArchArt,
  "Internal Operations": InternalSystemsArt,
  "SaaS Engineering": EngineeringPracticeArt,
  "AI Systems": AISystemsArt,
  "Professional Services": PerformanceArt,
};

function getArtComponent(category: string): ComponentType {
  return categoryArtMap[category] ?? SystemsArchArt;
}

function PerspectiveEntry({
  perspective,
  inView,
  delay,
}: {
  perspective: Perspective;
  inView: boolean;
  delay: number;
}) {
  const ArtComponent = getArtComponent(perspective.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay }}
      className="border-b border-white/[0.09] last:border-b-0 px-8 lg:px-10 py-9"
    >
      {/* Metadata row */}
      <div className="flex items-center gap-3 mb-7 flex-wrap">
        <span className="text-[11px] font-mono text-white/20 tracking-[0.22em]">
          {perspective.index}
        </span>
        <span className="h-px w-3 bg-white/[0.12]" />
        <span className="text-[10px] font-medium text-white/32 tracking-[0.14em] uppercase">
          {perspective.category}
        </span>
        <span className="text-white/[0.12] text-[10px]">·</span>
        <span className="text-[10px] text-white/25 font-medium">
          {perspective.readingTime}
        </span>
        <span className="flex-1" />
        <span className="text-[10px] text-white/22 font-mono tracking-wide">
          {perspective.date}
        </span>
      </div>

      {/* Art + Title + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 mb-8">
        <div className="lg:col-span-2 hidden lg:block">
          <div className="h-[90px] border border-white/[0.07] rounded-[3px] overflow-hidden bg-[#060a12]">
            <ArtComponent />
          </div>
        </div>
        <div className="lg:col-span-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
            {perspective.title}
          </h3>
        </div>
        <div className="lg:col-span-6">
          <p className="text-sm text-white/65 leading-relaxed">
            {perspective.summary}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-7" />

      {/* Key Observations + Engineering Implications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10">
        <div>
          <p className="text-[10px] font-medium text-white/25 tracking-[0.14em] uppercase mb-4">
            Key Observations
          </p>
          <div className="space-y-3.5">
            {perspective.observations.map((obs, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-[6px] h-1 w-1 rounded-full bg-white/18 shrink-0" />
                <p className="text-sm text-white/50 leading-relaxed">{obs}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-medium text-white/25 tracking-[0.14em] uppercase mb-4">
            Engineering Implications
          </p>
          <div className="space-y-4">
            {perspective.implications.map((impl, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-[6px] h-1 w-1 rounded-full bg-blue-400/28 shrink-0" />
                <p className="text-sm text-white/50 leading-relaxed">{impl}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustryPerspectives() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.03 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Industry Perspectives
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Six Industries. Six Structural Problems. Each Examined From First Principles.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <div>
              <p className="text-sm text-white/32 leading-relaxed mb-4">
                These are not INX engagements or portfolio entries. They are
                structural analyses of technology patterns observed across
                industry sectors - written to identify root causes and
                engineering implications, not to position any particular
                implementation.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-white/[0.12]" />
                <p className="text-[10px] text-white/20 font-mono tracking-[0.12em] uppercase">
                  Industry observation - not a case study
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Perspective list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {perspectives.map((p, i) => (
            <PerspectiveEntry
              key={p.index}
              perspective={p}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
