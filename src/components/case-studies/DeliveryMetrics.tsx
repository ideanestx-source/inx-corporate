"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: "4",
    unit: "engagements",
    label: "Documented in Full",
    note: "Case studies covering enterprise web, SaaS, AI systems, and logistics",
  },
  {
    value: "< 90",
    unit: "days",
    label: "Average Initial Delivery",
    note: "Measured from engagement start to first production deployment",
  },
  {
    value: "0",
    unit: "findings",
    label: "Security Audits Passed",
    note: "Post-deployment security audits across all documented engagements",
  },
  {
    value: "100%",
    unit: "",
    label: "On-Schedule Cutover",
    note: "Legacy system decommissioning completed on committed timelines",
  },
];

export default function DeliveryMetrics() {
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
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Across Documented Engagements
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-2xl">
            Delivery Outcomes. Stated Without Adjustment.
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="px-7 py-8 border-b border-white/[0.09] lg:border-b-0 lg:border-r last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r sm:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(3)]:border-r sm:[&:nth-child(3)]:border-t sm:border-b-0 sm:[&:nth-child(1)]:border-r sm:[&:nth-child(2)]:border-b-0 sm:[&:nth-child(4)]:border-b-0"
            >
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-4xl font-semibold text-white tracking-tight leading-none">
                  {m.value}
                </span>
                {m.unit && (
                  <span className="text-sm text-white/30 font-medium">
                    {m.unit}
                  </span>
                )}
              </div>
              <p className="text-[10px] font-medium text-white/40 tracking-[0.14em] uppercase mb-3">
                {m.label}
              </p>
              <p className="text-xs text-white/25 leading-relaxed">{m.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-[11px] text-white/18 leading-relaxed max-w-2xl"
        >
          All metrics derived from the four documented engagements on this page.
          No aggregate figures have been constructed from undisclosed engagements.
          Client names remain withheld under standard confidentiality agreements.
        </motion.p>
      </div>
    </section>
  );
}
