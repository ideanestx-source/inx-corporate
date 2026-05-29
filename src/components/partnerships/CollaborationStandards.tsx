"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const standards = [
  {
    index: "01",
    title: "Communication Discipline",
    body: "Communication expectations are agreed at the start of every partnership engagement and are not renegotiated informally through the course of delivery. Reporting cadence is defined. Progress is measured against milestones, not narrated loosely. Blockers are surfaced immediately rather than absorbed as schedule slippage. Scope changes require written documentation with technical impact assessments before any related work proceeds. INX does not manage uncertainty through silence or through verbal agreements that are not confirmed in writing.",
  },
  {
    index: "02",
    title: "Technical Accountability",
    body: "INX owns the technical decisions it makes. When an architectural decision proves incorrect under production conditions, the impact is documented, a corrective path is assessed, and the situation is communicated clearly to the partner - without repositioning the decision as the partner's or end client's responsibility. Technical accountability is not a posture adopted for commercial reasons. It is the mechanism by which trust between engineering organisations is built over time and the basis on which long-term collaboration is possible.",
  },
  {
    index: "03",
    title: "Documentation Expectations",
    body: "Architecture decisions, non-obvious implementation choices, and operational runbooks are delivery outputs in every partnership engagement - not project-close additions that are completed under time pressure. A partnership where documentation is systematically deferred is accumulating technical debt on behalf of both parties. INX treats the documentation of non-obvious decisions with the same priority as the code that implements them, because the code without the documentation is not fully delivered.",
  },
  {
    index: "04",
    title: "Deployment Standards",
    body: "Production deployments in partnership engagements follow INX's standard deployment discipline: defined promotion paths from development through staging to production, automated verification at each stage, rollback capability established before go-live, and monitoring configured before the first production traffic. Partner engagements that require deviation from these standards require explicit written justification and sign-off from both parties before INX accepts the deviation. Deployment discipline is not negotiated down for convenience.",
  },
  {
    index: "05",
    title: "Escalation Handling",
    body: "When a technical decision produces an unexpected outcome in production, the escalation process is immediate and transparent: the issue is documented, the operational impact is assessed, the affected parties are informed, and a resolution path is proposed - before the situation is managed by relationship rather than process. INX does not identify significant issues and manage them privately to protect the appearance of the engagement. Transparency in escalation is a partnership operating standard, not a practice reserved for when the relationship is stable enough to sustain it.",
  },
];

export default function CollaborationStandards() {
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
          className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Collaboration Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Standards That Apply in Every Partnership Engagement.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These standards are not negotiated per-engagement. They are the
              operational baseline for any collaboration with INX - the
              conditions under which engineering partnerships function correctly.
            </p>
          </div>
        </motion.div>

        {/* Standards */}
        <div className="space-y-px">
          {standards.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="border border-white/[0.09] rounded-[3px] px-8 py-7 bg-[#05070e]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-mono text-white/20 tracking-[0.2em]">
                      {s.index}
                    </span>
                    <span className="h-px w-3 bg-white/[0.10]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-white/65 leading-relaxed">
                    {s.body}
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
