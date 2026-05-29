"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type CaseStudy = {
  index: string;
  category: string;
  title: string;
  challenge: string;
  approach: string;
  architecture: string;
  technologies: string[];
  outcome: string;
};

const caseStudies: CaseStudy[] = [
  {
    index: "01",
    category: "Enterprise Web & Mobile Platform",
    title: "Platform Consolidation for a Multi-Location F&B Group",
    challenge:
      "A regional food and beverage group operating 40+ locations ran three separate point-of-sale systems, a disconnected online ordering solution, and no unified view of inventory, staffing, or revenue across sites. Operational decisions depended on day-old spreadsheet data. As the group expanded, the lack of system coherence had become a direct constraint on growth - each new location required weeks of manual configuration and produced inconsistent data.",
    approach:
      "INX designed a unified platform around a central event-driven data layer, connecting POS integrations, kitchen display systems, inventory management, and a customer-facing ordering interface. The architecture was built around a multi-tenant model with location-level isolation, allowing each site to operate independently while feeding into a centralised operations dashboard. New location onboarding was designed as a configuration workflow, not an engineering task.",
    architecture:
      "Event-driven backend with an append-only ledger for transaction integrity. Multi-tenant PostgreSQL schema with row-level security enforcing location isolation. Real-time inventory synchronisation via WebSocket connections to kitchen display systems. A React-based management dashboard with location switching and consolidated reporting. Stripe Connect for marketplace payment flows between the group entity and individual locations.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Stripe Connect",
      "WebSocket",
      "React",
    ],
    outcome:
      "New location onboarding reduced from 3 weeks to 4 days. Single operational view across all locations established for the first time. Inventory reporting overhead reduced by approximately 60% through automated reconciliation. Platform has since supported 8 additional location openings without engineering intervention.",
  },
  {
    index: "02",
    category: "SaaS Engineering",
    title: "Performance and Architecture Remediation for a Compliance SaaS Platform",
    challenge:
      "A B2B SaaS company providing compliance workflow tools to mid-market financial services firms had outgrown its original monolithic application. API response times under concurrent load regularly exceeded 1.8 seconds at the 95th percentile. Multi-tenancy was enforced by application-layer convention rather than database constraint, creating latent data isolation risk. Frontend technical debt had accumulated to the point where new feature delivery required 6-week release cycles - unacceptable for a compliance product operating in a rapidly shifting regulatory environment.",
    approach:
      "INX conducted a structured architecture review before proposing any changes. We identified three high-impact intervention points that could be addressed without a full rewrite: read/write path separation for high-traffic reporting queries, enforcement of tenant isolation at the database layer, and replacement of the legacy frontend rendering layer with a component-based architecture. The monolith remained operational throughout. Changes were shipped incrementally against a defined specification.",
    architecture:
      "CQRS pattern applied to the reporting subsystem, separating read models from the transactional data store. Read replicas with query-optimised projections for dashboard and export workloads. Tenant isolation enforced via PostgreSQL row-level security policies - eliminating convention-based isolation. React component library built alongside the legacy interface and progressively replaced page-by-page. Redis caching layer introduced for session state and frequently-accessed reference data.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "CQRS",
      "Row-Level Security",
    ],
    outcome:
      "P95 API response time reduced from 1.8 seconds to 240 milliseconds. Release cycle reduced from a 6-week to a 2-week cadence following frontend restructure. Tenant data isolation enforced by database architecture - no longer dependent on application-layer discipline. Platform passed subsequent security audit without data isolation findings.",
  },
  {
    index: "03",
    category: "AI Systems Engineering",
    title: "Document Intelligence Pipeline for a Professional Services Firm",
    challenge:
      "A mid-sized professional services firm processed over 2,000 structured documents per week through a largely manual review workflow. Senior staff spent a significant portion of their time on document classification and initial data extraction tasks that did not require expert judgment - creating a throughput bottleneck that could not be resolved by headcount alone. The firm operated under regulatory requirements that mandated full auditability of all document processing decisions.",
    approach:
      "INX designed a document intelligence pipeline that separated the document processing work into three distinct stages: automated classification with confidence scoring, structured data extraction, and a human-in-the-loop review interface that surfaces only items below a confidence threshold or flagged for senior review. The system was designed to be fully auditable, with every automated decision logged with its model input, output, and confidence score. The human review interface was built to match the cognitive workflow of senior reviewers - not to replicate the visual design of the source documents.",
    architecture:
      "Document ingestion service with format normalisation for PDF, Word, and structured data inputs. Classification model with deterministic confidence thresholds routing documents to automated or human queues. LLM-based extraction layer using structured output schemas with validation against a field registry. PostgreSQL-backed human review queue with assignment, escalation, and approval workflows. Immutable audit log with cryptographic chaining for regulatory compliance. Inference service deployed as a stateless containerised workload, scaling independently of the application tier.",
    technologies: [
      "Python",
      "OpenAI API",
      "Next.js",
      "PostgreSQL",
      "Structured Output",
      "Docker",
      "Audit Logging",
    ],
    outcome:
      "Average document classification time reduced from 8 minutes (manual) to under 45 seconds. Senior reviewer daily throughput increased from approximately 40 to 110 documents per day by eliminating low-judgment classification work. Full audit trail maintained for every document processing decision. Regulatory audit conducted six months post-deployment - no compliance findings related to the automated pipeline.",
  },
  {
    index: "04",
    category: "Enterprise Platform Engineering",
    title: "Dispatch and Tracking Platform for a Last-Mile Logistics Operator",
    challenge:
      "A regional logistics operator coordinating 200+ delivery drivers across multiple urban zones was running daily operations on a combination of WhatsApp group messages, manual spreadsheets, and a legacy dispatch system with no real-time driver location visibility. Route assignment was reactive and manual, leading to significant inefficiency in vehicle utilisation and a customer SLA compliance rate of 78% - well below contractual thresholds with key accounts. The legacy system vendor had ceased active development and the operator faced a transition deadline.",
    approach:
      "INX designed and delivered a dispatch and tracking platform in three parallel workstreams: a mobile application for drivers, an operations command centre for dispatch teams, and a customer-facing delivery tracking interface. The platform was built to run alongside the legacy system during a parallel operation phase before full cutover, eliminating the risk of a hard migration. Route optimisation logic was implemented as a constraint-based engine that considered delivery time windows, vehicle capacity, and zone density - not a black-box external service.",
    architecture:
      "React Native driver application with offline-tolerant local state, syncing to the backend via WebSocket when connectivity is available. Real-time driver location broadcast via a geolocation service, aggregated in the dispatch dashboard with sub-5-second update latency. Constraint-based route optimisation engine implemented in Node.js, running as a background job triggered by new delivery assignments. Customer-facing tracking page with estimated arrival windows derived from real-time driver position and historical delivery patterns. SMS notification service for customer updates at dispatch, en-route, and delivery events.",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "WebSocket",
      "SMS Notifications",
      "Route Optimisation",
    ],
    outcome:
      "Vehicle utilisation improved by 23% in the first 60 days of full operation. Customer SLA compliance rate improved from 78% to 94% within 90 days of cutover. Dispatch coordination time reduced by approximately 40%, allowing the same dispatch team to manage a 30% increase in daily volume. Legacy system decommissioned on schedule.",
  },
];

function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-[2px] border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/35 font-medium tracking-wide">
      {label}
    </span>
  );
}

function CaseStudyEntry({
  study,
  inView,
  delay,
}: {
  study: CaseStudy;
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
            {study.index}
          </span>
          <span className="h-px w-4 bg-white/[0.12]" />
          <span className="text-[10px] font-medium text-white/32 tracking-[0.14em] uppercase">
            {study.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-8 max-w-3xl">
          {study.title}
        </h3>

        {/* Challenge + Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-7">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              The Challenge
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Engineering Approach
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {study.approach}
            </p>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-7 border-t border-white/[0.05] pt-6">
          <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
            System Architecture
          </p>
          <p className="text-sm text-white/35 leading-relaxed max-w-4xl">
            {study.architecture}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <p className="text-[10px] font-medium text-white/20 tracking-[0.16em] uppercase mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Outcome strip */}
      <div className="mx-8 lg:mx-10 mb-10 rounded-[3px] border border-white/[0.09] bg-[#0d1222] px-6 py-5">
        <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
          Delivery Outcome
        </p>
        <p className="text-sm text-white/55 leading-relaxed">{study.outcome}</p>
      </div>
    </motion.div>
  );
}

export default function FeaturedCaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="case-studies"
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
              Selected Engagements
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Four Engagements. Documented in Full.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              Each entry documents the operational context, engineering
              decisions, and measured outcomes of a completed INX engagement.
              No marketing language has been used to describe the results.
            </p>
          </div>
        </motion.div>

        {/* Case studies list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {caseStudies.map((study, i) => (
            <CaseStudyEntry
              key={study.index}
              study={study}
              inView={inView}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
