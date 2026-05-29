"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    index: "01",
    name: "Discovery",
    body: "Structured technical and commercial discovery: scope definition, architecture requirements, risk identification, and milestone sequencing - documented before engineering begins.",
  },
  {
    index: "02",
    name: "Architecture",
    body: "Full technical specification produced before production code is written: data models, API contracts, system boundaries, scalability constraints, and integration specifications.",
  },
  {
    index: "03",
    name: "Engineering",
    body: "Senior-only delivery against a defined technical specification. Progress is transparent, code quality is non-negotiable, and delivery timelines are treated with seriousness.",
  },
  {
    index: "04",
    name: "Deployment",
    body: "Production deployment with full observability: monitoring, alerting, logging, and runbook documentation. We hand over operating systems - not code repositories.",
  },
  {
    index: "05",
    name: "Optimization",
    body: "Post-deployment performance measurement, bottleneck resolution, and ongoing compliance with operational specifications under real production load.",
  },
];

export default function DeliveryApproach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

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
              Delivery Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              A Structured Process. No Exceptions.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-sm text-white/35 leading-relaxed">
              Every INX engagement follows the same five-phase delivery
              model - adapted to context, never abandoned for convenience.
            </p>
          </div>
        </motion.div>

        {/* Phase cards - 5-column on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-5 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.index}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: i * 0.09 }}
              className={`bg-[#05070e] px-6 py-9 ${
                i < phases.length - 1
                  ? "sm:border-r border-white/[0.09] border-b sm:border-b-0"
                  : ""
              }`}
            >
              {/* Phase index */}
              <p className="text-[10px] font-mono text-white/20 tracking-[0.22em] mb-5">
                {phase.index}
              </p>

              {/* Phase name with thin accent line above */}
              <div className="mb-4">
                <div className="w-4 h-px bg-white/[0.14] mb-3" />
                <h3 className="text-[14px] font-semibold text-white leading-snug">
                  {phase.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-white/38 leading-relaxed">
                {phase.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="mt-6 text-xs text-white/35 text-right"
        >
          Discovery is a separate billable engagement. All subsequent phases are governed by a defined technical specification.
        </motion.p>
      </div>
    </section>
  );
}
