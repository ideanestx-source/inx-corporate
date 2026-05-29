"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Industry = {
  index: string;
  sector: string;
  title: string;
  challenges: string;
  complexity: string;
  engineering: string;
  requirements: string[];
  positioning: string;
};

const industries: Industry[] = [
  {
    index: "01",
    sector: "Software as a Service",
    title: "SaaS Platforms",
    challenges:
      "Multi-tenancy at scale requires isolation enforced at the database layer - not by application-layer convention that can be violated by a single erroneous query. Billing complexity compounds across subscription tiers, proration events, failed payment workflows, and dunning cycles that must be handled reliably under concurrent load. Feature release cadences measured in weeks become competitive liabilities in compliance-sensitive markets where regulatory requirements shift faster than monolithic software delivery cycles.",
    complexity:
      "The architectural decisions made at product inception in a SaaS platform typically persist for years. Shared-schema multi-tenancy with row-level security is a fundamentally different architecture than schema-per-tenant isolation - and the migration cost between them, once tenants exist in production, is significant and operationally risky. Read-heavy reporting workloads against the same database serving transactional writes is a performance failure mode that appears late, degrades gradually, and is frequently attributed to causes other than the architecture producing it.",
    engineering:
      "CQRS pattern applied to high-volume reporting paths, separating read models from transactional data. Tenant isolation enforced via PostgreSQL row-level security policies, eliminating the latent risk of convention-based isolation. API versioning discipline to avoid breaking tenant integrations across product upgrade cycles. Feature flag infrastructure for staged rollouts without per-tenant deployment complexity. Performance acceptance criteria defined by tenant tier - not as an average across the population, which obscures failure at the margins.",
    requirements: [
      "Multi-Tenancy",
      "Row-Level Security",
      "CQRS",
      "API Versioning",
      "Billing Integration",
      "Feature Flags",
    ],
    positioning:
      "INX addresses the structural failure modes of SaaS platforms at the architecture stage - before they accumulate as production debt that becomes expensive to resolve without operational disruption.",
  },
  {
    index: "02",
    sector: "Last-Mile & Fleet Operations",
    title: "Logistics & Operations",
    challenges:
      "Coordinating 200+ drivers across distributed zones on manual dispatch processes creates a throughput ceiling that becomes a customer SLA liability before it surfaces as an internal operations problem. Real-time driver position visibility, delivery time window compliance, and customer notification workflows are not differentiating features for logistics operators - they are the baseline requirement for maintaining enterprise account relationships. Legacy dispatch systems with no active development represent both an operational constraint and a transition risk that accumulates value the longer a migration is deferred.",
    complexity:
      "Route assignment as a reactive, manual process is a vehicle utilisation problem that compounds across every operational day. The efficiency lost to unoptimised routing is invisible in day-to-day operations and visible only in aggregate financial performance. A driver mobile application that degrades under poor connectivity - which is the operating condition for last-mile logistics, not an edge case - is not a mobile application: it is a partially functional tool with unpredictable failure modes at the moments of highest operational importance.",
    engineering:
      "WebSocket-based real-time geolocation broadcast with sub-5-second update latency to dispatch command dashboards. Offline-tolerant React Native driver applications with local state persistence and server synchronisation on reconnection - no data loss under connectivity interruption. Constraint-based route optimisation engines accounting for vehicle capacity, delivery time windows, and zone density, implemented without dependency on black-box external APIs with uncontrolled cost and reliability profiles. Parallel operation phases with legacy systems before full cutover to eliminate hard-migration risk. SMS notification pipelines triggered at dispatch, en-route, and delivery completion events.",
    requirements: [
      "Real-Time Tracking",
      "Offline Mobile",
      "Route Optimisation",
      "Legacy Integration",
      "SLA Monitoring",
      "SMS Notifications",
    ],
    positioning:
      "INX replaces manual dispatch coordination and legacy visibility gaps with engineered real-time systems that reflect how logistics operations actually function - including degraded connectivity and legacy cutover constraints.",
  },
  {
    index: "03",
    sector: "Multi-Channel Retail",
    title: "Retail & Commerce",
    challenges:
      "Inventory state diverging between physical and digital channels is a customer-facing failure that compounds with time and location count. Each hour of latency between a physical stock event and a digital catalogue update is a window for overselling, customer disappointment, and service overhead. High-throughput transaction processing during peak periods - promotional events, seasonal load - requires tested throughput assumptions validated against realistic concurrency, not optimistic ones derived from average traffic.",
    complexity:
      "A retail operation managing inventory through disconnected POS and e-commerce systems is operating on compounding inaccuracy. The cost of that inaccuracy - lost sales, customer service overhead, excess safety stock - is rarely attributed to the system architecture producing it. Payment processing reliability at scale is not an assumption: idempotency, retry logic, and failure state management must be engineered explicitly, because the alternative is duplicate charges and failed transactions at the moments of highest business importance and highest customer visibility.",
    engineering:
      "Event-driven inventory update propagation across physical and digital channels with reconciliation logic for conflict resolution at concurrent write boundaries. Read replica architecture for catalogue serving under peak concurrent load, with the transactional database isolated from read traffic to protect write throughput. Idempotent payment processing with explicit failure state management for duplicate-charge elimination across network and timeout failure modes. Multi-jurisdiction compliance layering for international operations. Webhook reliability infrastructure - retry logic, dead-letter queues, and delivery confirmation - for third-party fulfilment partner integrations that fail silently under degraded upstream conditions.",
    requirements: [
      "Inventory Sync",
      "Idempotent Payments",
      "Peak Load Architecture",
      "Multi-Location",
      "Fulfilment Integration",
      "Returns Workflow",
    ],
    positioning:
      "INX engineers the inventory, payment, and fulfilment infrastructure that retail operations require to operate at scale without the compounding inaccuracy produced by disconnected systems.",
  },
  {
    index: "04",
    sector: "Food & Beverage Operations",
    title: "Hospitality & Restaurants",
    challenges:
      "A hospitality group operating across 40 locations with separate POS systems, a disconnected online ordering platform, and no unified inventory view makes operational decisions based on data that is always a day old. Revenue management, staffing, and procurement are decided against disaggregated, inaccurate information. Each new location requires weeks of manual configuration and produces data in a format that does not integrate with the existing operational reporting structure - a problem that worsens linearly with each addition.",
    complexity:
      "The integration surface between kitchen display systems, POS platforms, online ordering interfaces, and inventory management creates a coordination problem that cannot be resolved by adding operations staff. Real-time synchronisation between the ordering layer and the kitchen layer is a latency requirement measured in seconds - not an enhancement to be introduced after the platform is stable. Multi-tenant architecture with location-level isolation requires that each site can operate independently during network disruption while feeding into a centralised reporting dashboard when connectivity is available.",
    engineering:
      "Multi-tenant PostgreSQL schema with row-level security enforcing location-level isolation, allowing each site to operate independently while contributing to a centralised operational view. WebSocket connections to kitchen display systems for real-time order broadcast with sub-second latency. Stripe Connect for marketplace payment flows between the group entity and individual locations. Location onboarding designed as a configuration workflow - not an engineering task - so new sites are operational in days rather than weeks of manual setup. Event-driven inventory reconciliation eliminating manual stocktake processes and producing live cross-location inventory positions for procurement decisions.",
    requirements: [
      "POS Integration",
      "Multi-Tenant",
      "Kitchen Display",
      "Stripe Connect",
      "Location Onboarding",
      "Inventory Reconciliation",
    ],
    positioning:
      "INX unifies the operational data layer across multi-location hospitality groups - replacing disconnected systems and manual reporting with a coherent platform that scales with each new location without engineering intervention.",
  },
  {
    index: "05",
    sector: "Legal, Finance & Advisory",
    title: "Professional Services",
    challenges:
      "Document-intensive professional services firms process high volumes of structured documents through manual classification and initial data extraction workflows. Senior staff performing tasks that do not require expert judgment creates a throughput ceiling that cannot be resolved by headcount: the work is not expert work, but it is consuming expert capacity. Regulatory requirements for full auditability of document processing decisions cannot be satisfied by manual workflows at the volume and velocity that client delivery demands.",
    complexity:
      "The bottleneck in a professional services document workflow is rarely the expert review step - it is the classification, routing, and initial extraction steps that precede it. Automating those steps without introducing regulatory liability requires a system architecture that is transparent, confidence-scored, and human-supervised at defined thresholds. The human-in-the-loop review interface is not a minor supporting component - it is the primary operational surface for senior reviewers and must match their cognitive workflow, not replicate the visual design of the source documents it is replacing.",
    engineering:
      "Document intelligence pipeline with format normalisation for PDF, Word, and structured data inputs. Classification model with deterministic confidence thresholds routing documents to automated processing or human review queues based on score, not arbitrary routing rules. LLM-based extraction with structured output schema validation against a field registry, eliminating free-form parsing ambiguity. PostgreSQL-backed human review queue with assignment, escalation, and approval workflows designed against the actual review process - not a generic task management model. Immutable audit log with cryptographic chaining for regulatory compliance, covering every automated and human decision from ingestion through final disposition.",
    requirements: [
      "Document Intelligence",
      "Confidence Routing",
      "Human Review Queue",
      "Audit Logging",
      "Cryptographic Integrity",
      "Structured Extraction",
    ],
    positioning:
      "INX designs document intelligence systems that eliminate low-judgment throughput bottlenecks while maintaining full regulatory auditability - shifting senior reviewer capacity toward the work that actually requires expert judgment.",
  },
  {
    index: "06",
    sector: "Internal Automation & AI Tooling",
    title: "AI-Driven Internal Systems",
    challenges:
      "AI-powered internal tooling built without defined output schemas, confidence thresholds, or audit infrastructure produces outputs used in operational decisions without any mechanism to verify their reliability, detect their degradation over time, or reproduce their reasoning under compliance examination. The operational risk of this architecture is not hypothetical - it is deferred, and it surfaces at the point of a consequential decision failure or a regulatory audit where the AI system's behaviour cannot be explained or evidenced.",
    complexity:
      "Most AI-driven internal systems encounter the same architectural failure point: the boundary between model output and operational decision. Where that boundary is not engineered with schema validation, confidence scoring, and immutable logging, the system is not a business tool - it is an uncontrolled variable in the business process with no governance layer. The human review interface is not a fallback for AI failure; it is the governance structure that gives the system operational trustworthiness and the regulatory legitimacy required for use in auditable business processes.",
    engineering:
      "Structured output enforcement at the inference layer using validated JSON schemas - eliminating ambiguous free-form outputs that require downstream parsing with unpredictable failure modes. Confidence-threshold routing between automated processing and human review queues, with every routing decision logged with its model input, output, and score for audit reconstruction. Stateless containerised inference workloads that scale independently of application logic and can be updated, rolled back, or replaced without application-layer changes. Model performance monitoring to detect output drift before it affects production decisions - not after a failure surfaces the degradation. Full audit trail from document or data ingestion through every processing stage to final disposition.",
    requirements: [
      "Structured Output",
      "Confidence Thresholds",
      "Human Review",
      "Audit Trail",
      "Model Monitoring",
      "Stateless Inference",
    ],
    positioning:
      "INX engineers AI systems that are auditable, governance-compliant, and built around explicit boundaries between automated processing and human oversight - not black-box pipelines that cannot be examined or corrected.",
  },
];

function RequirementTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-[2px] border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/35 font-medium tracking-wide">
      {label}
    </span>
  );
}

function IndustryEntry({
  industry,
  inView,
  delay,
}: {
  industry: Industry;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="border-b border-white/[0.09] last:border-b-0"
    >
      <div className="px-8 lg:px-10 pt-10 pb-0">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[11px] font-mono text-white/20 tracking-[0.22em]">
            {industry.index}
          </span>
          <span className="h-px w-4 bg-white/[0.12]" />
          <span className="text-[10px] font-medium text-white/32 tracking-[0.14em] uppercase">
            {industry.sector}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-8 max-w-3xl">
          {industry.title}
        </h3>

        {/* Challenges + Complexity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-7">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Operational Challenges
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {industry.challenges}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Systems Complexity
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {industry.complexity}
            </p>
          </div>
        </div>

        {/* Engineering Considerations */}
        <div className="mb-7 border-t border-white/[0.05] pt-6">
          <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
            Engineering Considerations
          </p>
          <p className="text-sm text-white/35 leading-relaxed max-w-4xl">
            {industry.engineering}
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <p className="text-[10px] font-medium text-white/20 tracking-[0.16em] uppercase mb-3">
            Key Systems Requirements
          </p>
          <div className="flex flex-wrap gap-2">
            {industry.requirements.map((req) => (
              <RequirementTag key={req} label={req} />
            ))}
          </div>
        </div>
      </div>

      {/* Positioning strip */}
      <div className="mx-8 lg:mx-10 mb-10 rounded-[3px] border border-white/[0.09] bg-[#0d1222] px-6 py-5">
        <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
          What INX Addresses
        </p>
        <p className="text-sm text-white/55 leading-relaxed">
          {industry.positioning}
        </p>
      </div>
    </motion.div>
  );
}

export default function IndustryVerticals() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.03 });

  return (
    <section
      id="verticals"
      className="py-24 border-t border-white/[0.09] bg-[#05070e]"
    >
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
              Industry Verticals
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Six Verticals. Documented by Operational Reality.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              Each section documents the operational challenges, systems
              complexity, and engineering considerations specific to that
              industry - without generic consultancy framing.
            </p>
          </div>
        </motion.div>

        {/* Industry list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {industries.map((industry, i) => (
            <IndustryEntry
              key={industry.index}
              industry={industry}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
