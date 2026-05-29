"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TechDecisionMap from "@/components/visuals/TechDecisionMap";

const positions = [
  {
    label: "On Technology Selection",
    statement: "We are not technology-agnostic.",
    body: "INX has considered opinions on technology, and we apply them. Where a client has established infrastructure that is operationally sound, we work within it. Where it is not, we document our assessment in writing before proposing any change. An engineering organisation without technical positions is a labour supplier, not a partner.",
  },
  {
    label: "On Client Dependency",
    statement: "We do not build systems that require INX to operate.",
    body: "Every decision made during an engagement is evaluated against a single question: can the client's own engineering team - or any competent successor team - maintain this system without reference to INX? If the answer is no, a delivery requirement has not been met. Technical dependency is not a revenue model we accept.",
  },
  {
    label: "On Operational Outcomes",
    statement: "Technology is a means. Outcomes are the measure.",
    body: "The engineering community tends to evaluate technology choices as ends in themselves - as signals of technical sophistication or organisational modernity. INX evaluates them against the operational results they produce in production: latency reduced, throughput increased, onboarding time halved, audit findings eliminated. A system that works is preferable to a system that is architecturally interesting.",
  },
];

export default function TechnologyPhilosophy() {
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
          className="mb-8"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Technology Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-2xl">
            An engineering organisation's technology choices reveal its values.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-12 border border-white/[0.07] rounded-[3px] overflow-hidden"
        >
          <TechDecisionMap />
        </motion.div>

        {/* Three positions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.09 }}
              className="bg-[#05070e] px-8 py-9"
            >
              <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-5">
                {pos.label}
              </p>
              <p className="text-[17px] font-semibold text-white leading-snug mb-5">
                {pos.statement}
              </p>
              <div className="w-8 h-px bg-white/[0.10] mb-5" />
              <p className="text-sm text-white/65 leading-relaxed">{pos.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
