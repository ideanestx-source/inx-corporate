"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    index: "01",
    title: "Technical Ownership",
    body: "INX treats each engagement as a transfer of capability, not a creation of dependency. Architecture decisions are made transparently and documented in terms the client team can reason about independently. We do not introduce abstractions that require ongoing INX involvement to maintain or extend. The system should be fully owned by the client at handover.",
  },
  {
    index: "02",
    title: "Defined Communication Standards",
    body: "Communication cadence is agreed before engineering begins. Progress is reported against defined milestones, not loosely narrated. Blockers are surfaced immediately, not absorbed as delays. Scope changes are proposed in writing with engineering impact assessments before any work proceeds. We do not manage uncertainty through silence.",
  },
  {
    index: "03",
    title: "Delivery Against Specification",
    body: "INX does not deliver systems that approximate the agreed specification. Acceptance criteria are defined during discovery and verified against the delivered system. Where deviations are unavoidable due to external constraints, they are documented and approved before deployment. A delivered system is one that meets its stated requirements, not one that has been shipped.",
  },
  {
    index: "04",
    title: "Engagement Boundaries",
    body: "INX operates as a technical delivery partner, not a retained technology department. Engagements have defined scope, a discovery phase that produces a written specification, and a handover phase that produces operational documentation. We do not accept open-ended retainers without defined deliverables. Long-term relationships are built through repeated well-scoped engagements.",
  },
];

export default function EngagementPhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Engagement Philosophy
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              The operational model behind every INX engagement - how we
              communicate, how we own technical decisions, and how we define the
              boundary between our work and the client&apos;s.
            </p>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-px">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="border border-white/[0.09] rounded-[3px] px-8 py-7 bg-[#05070e]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
                {/* Left: index + title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-mono text-white/20 tracking-[0.2em]">
                      {pillar.index}
                    </span>
                    <span className="h-px w-3 bg-white/[0.10]" />
                  </div>
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {/* Right: body */}
                <div className="lg:col-span-8">
                  <p className="text-sm text-white/65 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
