"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    index: "01",
    name: "Systems Designed to Scale",
    body: "INX does not engineer for the current workload. Every system we deliver is designed with growth as a constraint from the first architectural decision - not retrofitted when scaling becomes urgent. Multi-tenancy, event-driven data flows, and horizontal service boundaries are applied at the outset, not bolted on after the fact.",
  },
  {
    index: "02",
    name: "Maintainability as a Delivery Requirement",
    body: "A system that cannot be maintained by the client's own team or a successor engineering team has not been fully delivered. INX treats code clarity, documentation of non-obvious decisions, and handover readiness as first-class engineering outputs - not afterthoughts. We do not leave proprietary complexity that creates dependency.",
  },
  {
    index: "03",
    name: "Performance Measured, Not Assumed",
    body: "Performance characteristics are defined before engineering begins and verified before delivery is accepted. We instrument systems to produce observable outputs - latency percentiles, throughput under load, error rates - and treat these as acceptance criteria alongside functional requirements. Post-delivery performance degradation is a known risk we mitigate through architecture, not luck.",
  },
  {
    index: "04",
    name: "Technical Ownership Transferred",
    body: "The conclusion of an INX engagement leaves the client in full operational control. Architecture decisions are documented. Runbooks are written. The codebase is structured for comprehension, not for complexity. We do not retain operational leverage over systems we build. A successful engagement means the client can operate, extend, and hand off the system without reference to INX.",
  },
];

export default function EngineeringPrinciples() {
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
          className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              How We Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Engineering Principles That Govern Every Engagement
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These principles are not aspirational values. They are
              engineering constraints applied at the architecture, delivery, and
              handover stage of every INX engagement.
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {principles.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-[#05070e] px-8 py-9"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
                  {p.index}
                </span>
                <span className="h-px flex-1 max-w-[20px] bg-white/[0.10]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-4 leading-snug">
                {p.name}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
