"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    index: "01",
    name: "Systems Thinking",
    body: "The ability to reason about how components interact - not just whether individual components function correctly. Engineers who think in systems anticipate the failure modes that appear at boundaries, not just the ones that appear within a single service or module.",
    note: "Applied to: architecture decisions, code review, specification review",
  },
  {
    index: "02",
    name: "Technical Accountability",
    body: "Owning the outcomes of technical decisions, not just the decisions themselves. This includes documenting reasoning, acknowledging when a decision was wrong, and proposing a correction without requiring the correction to be someone else's idea.",
    note: "Applied to: delivery commitments, architecture choices, production incidents",
  },
  {
    index: "03",
    name: "Documentation Discipline",
    body: "Writing down non-obvious decisions as a matter of course - not as an afterthought and not only when the decision is obviously significant. The decisions that seem obvious at the time are frequently the ones that are most costly when they are not recorded.",
    note: "Applied to: code comments, architecture documents, operational runbooks",
  },
  {
    index: "04",
    name: "Maintainability Mindset",
    body: "Writing code for the engineer who will read it without context, not for the author who already has it. Choosing the simpler implementation when the complex one does not provide a proportionate benefit. Resisting the accumulation of complexity that is justified individually but unjustifiable in aggregate.",
    note: "Applied to: code review, abstraction decisions, refactoring scope",
  },
  {
    index: "05",
    name: "Product Ownership",
    body: "Understanding why a feature exists, not just what it is supposed to do. Raising concerns about requirements that will not solve the stated problem. The ability to distinguish between a well-specified requirement and one that will require interpretation at implementation time - and to surface the difference before development begins.",
    note: "Applied to: specification review, client conversations, acceptance criteria",
  },
  {
    index: "06",
    name: "Operational Awareness",
    body: "Understanding that a system is not done when it is delivered - it is done when it has been operating in production without unexpected behaviour. Interest in how the systems you build perform under real load, how they fail, and whether the failure modes are observable and recoverable.",
    note: "Applied to: monitoring design, deployment planning, post-launch review",
  },
];

export default function WhatINXValues() {
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
              What INX Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Six Qualities. Each Observable in Practice.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are not values listed to appear credible. They are
              qualities INX evaluates for in the hiring process and relies on
              in the working environment - because the work requires them.
            </p>
          </div>
        </motion.div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {values.map((v, i) => (
            <motion.div
              key={v.index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
              className="bg-[#05070e] px-8 py-9 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
                  {v.index}
                </span>
                <span className="h-px w-3 bg-white/[0.10]" />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-4 leading-snug">
                {v.name}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed flex-1">
                {v.body}
              </p>
              <div className="mt-6 pt-5 border-t border-white/[0.05]">
                <p className="text-[10px] text-white/22 font-medium tracking-[0.12em] uppercase">
                  {v.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
