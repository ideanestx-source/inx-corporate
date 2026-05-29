"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    index: "01",
    name: "AI Workflow Architecture",
    body: "Structured output enforcement, confidence-threshold routing, human-in-the-loop queue design, audit trail integrity, and the operational boundaries between automated inference and human decision-making in regulated environments.",
    questions: [
      "When does automation introduce more risk than it removes?",
      "How should confidence thresholds be calibrated for regulatory auditability?",
    ],
  },
  {
    index: "02",
    name: "SaaS Infrastructure Patterns",
    body: "Multi-tenancy isolation models, read/write path separation at scale, tenant-aware performance profiling, billing system architecture, and the infrastructure requirements of compliance-sensitive B2B products.",
    questions: [
      "At what tenant scale does schema-per-tenant become operationally justified?",
      "How is CQRS applied without introducing operational overhead that outweighs the benefit?",
    ],
  },
  {
    index: "03",
    name: "Deployment Systems",
    body: "CI/CD pipeline design, promotion workflow discipline, zero-downtime deployment patterns, rollback capability as an architectural requirement, and the relationship between deployment confidence and release frequency.",
    questions: [
      "What is the minimum viable deployment infrastructure for a production system?",
      "How is rollback capability designed for stateful systems where data migration is involved?",
    ],
  },
  {
    index: "04",
    name: "Operational Tooling",
    body: "Internal tools that survive the teams that build them, workflow alignment as an engineering input, the difference between tools built for the current process and tools that reflect how the process actually operates, and the maintenance lifecycle of internal systems.",
    questions: [
      "At what point does an internal tool require the same engineering discipline as a customer-facing product?",
      "How is operational context preserved when the team that built the tool has changed?",
    ],
  },
  {
    index: "05",
    name: "Engineering Process",
    body: "Discovery-first delivery, specification-led development, acceptance criteria as engineering contracts, the relationship between process discipline and delivery predictability, and what structured engagement models produce versus informal ones.",
    questions: [
      "What does a discovery phase actually need to produce to be useful?",
      "How are acceptance criteria written to be verifiable rather than subjective?",
    ],
  },
  {
    index: "06",
    name: "Scalable Frontend Systems",
    body: "Server-side rendering trade-offs at product scale, component architecture for large design systems, rendering performance profiling, TypeScript discipline in growing codebases, and the build systems that surround frontend delivery.",
    questions: [
      "When does client-side rendering become the wrong default?",
      "How is frontend technical debt identified before it affects delivery velocity?",
    ],
  },
];

export default function ResearchAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.06 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Research Areas
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Six Engineering Domains Under Ongoing Investigation.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are the domains where INX maintains active working knowledge
              - applied across current engagements and documented through
              ongoing editorial work.
            </p>
          </div>
        </motion.div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {areas.map((area, i) => (
            <motion.div
              key={area.index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
              className="bg-[#05070e] px-8 py-9"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
                  {area.index}
                </span>
                <span className="h-px w-3 bg-white/[0.10]" />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-4 leading-snug">
                {area.name}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-6">
                {area.body}
              </p>
              <div className="border-t border-white/[0.05] pt-5 space-y-2.5">
                {area.questions.map((q) => (
                  <div key={q} className="flex items-start gap-2.5">
                    <span className="mt-[5px] h-1 w-1 rounded-full bg-white/18 shrink-0" />
                    <p className="text-xs text-white/25 leading-relaxed italic">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
