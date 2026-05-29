"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const positions = [
  {
    label: "On Selectivity",
    statement: "INX would rather be understaffed than incorrectly staffed.",
    body: "A hiring decision that introduces the wrong person into a small team is more costly than an open role. We do not fill positions under pressure. We do not lower the bar when the search takes longer than expected. The team that exists is responsible for the work that exists - adding someone who requires significant management overhead does not improve that situation.",
  },
  {
    label: "On Evaluation",
    statement: "We evaluate how you think, not only what you know.",
    body: "Technical knowledge can be acquired. Reasoning processes are more durable. INX is more interested in how a candidate approaches a problem they have not seen before than in their familiarity with technologies we happen to use. The hiring process involves a practical component that asks you to reason through a real problem - not to demonstrate preparation for an anticipated question.",
  },
  {
    label: "On Long-Term Fit",
    statement: "We are not looking for someone to fill a role. We are looking for someone who wants to do this work.",
    body: "The distinction matters. Someone filling a role is optimising for employment. Someone who wants to do the work is optimising for the quality of the output. INX is structured for the latter. If the work described on this page is not genuinely interesting to you - the operational problems, the system architecture, the discipline around documentation and deployment - then the fit is probably not right, regardless of the technical match.",
  },
];

export default function HiringPhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Hiring Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-2xl">
            Three positions on how INX approaches hiring.
          </h2>
        </motion.div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.09 }}
              className={`bg-[#05070e] px-8 py-9 ${
                i < positions.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-white/[0.09]"
                  : ""
              }`}
            >
              <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-5">
                {pos.label}
              </p>
              <p className="text-[16px] font-semibold text-white leading-snug mb-5">
                {pos.statement}
              </p>
              <div className="w-6 h-px bg-white/[0.08] mb-5" />
              <p className="text-sm text-white/65 leading-relaxed">{pos.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
