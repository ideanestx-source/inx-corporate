"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    index: "01",
    name: "Discovery",
    body: "Structured operational and technical discovery: existing systems, current workflows, integration dependencies, data models, failure modes, and regulatory constraints - documented before any architecture is proposed.",
  },
  {
    index: "02",
    name: "Operational Mapping",
    body: "The actual workflow - not the documented version - is mapped against the proposed system. Exceptions, manual overrides, and informal processes are identified. Architecture decisions are made against operational reality.",
  },
  {
    index: "03",
    name: "Engineering Alignment",
    body: "Full technical specification produced before production code is written. Data models, API contracts, integration architecture, and scalability constraints are documented and reviewed against the operational map.",
  },
  {
    index: "04",
    name: "Phased Implementation",
    body: "Delivery in defined phases against the specification. Where parallel operation with legacy systems is required, it is planned at this stage - not improvised during cutover. Progress is transparent and reported against milestones.",
  },
  {
    index: "05",
    name: "Post-Launch Optimisation",
    body: "Performance measurement under real production load, bottleneck identification, and iterative resolution. Optimisation is conducted against the original acceptance criteria, not against perceived impressions of performance.",
  },
];

export default function IndustryDeliveryModel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

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
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Industry Delivery Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Industry Context Shapes Every Phase of Delivery.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-sm text-white/35 leading-relaxed">
              The five-phase delivery model adapts to the operational context of
              each industry - the sequence does not change, but what each phase
              produces is determined by the industry's specific constraints.
            </p>
          </div>
        </motion.div>

        {/* Five-column phase strip */}
        <div className="grid grid-cols-1 sm:grid-cols-5 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.index}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: 0.08 + i * 0.08 }}
              className={`bg-[#05070e] px-6 py-9 ${
                i < phases.length - 1
                  ? "sm:border-r border-white/[0.09] border-b sm:border-b-0"
                  : ""
              }`}
            >
              <p className="text-[10px] font-mono text-white/20 tracking-[0.22em] mb-5">
                {phase.index}
              </p>
              <div className="mb-4">
                <div className="w-4 h-px bg-white/[0.14] mb-3" />
                <h3 className="text-[13px] font-semibold text-white leading-snug">
                  {phase.name}
                </h3>
              </div>
              <p className="text-xs text-white/35 leading-relaxed">
                {phase.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 text-xs text-white/35 text-right"
        >
          Discovery is a separate billable engagement. All subsequent phases are governed by a written technical specification produced during Discovery.
        </motion.p>
      </div>
    </section>
  );
}
