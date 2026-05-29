"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const positions = [
  {
    index: "I",
    statement: "Choose the tool that satisfies the operational constraint.",
    body: "INX does not select technologies because they are popular, because they were used in a previous engagement, or because they are well-regarded in the broader engineering community. Selection is made against a defined requirement: throughput, latency, isolation, auditability, or long-term maintainability. If that requirement cannot be stated clearly, the selection decision is premature.",
  },
  {
    index: "II",
    statement: "Every additional dependency is a liability that must earn its place.",
    body: "Each technology added to a system increases the surface area for failure, the cognitive overhead for new engineers, and the operational burden for the team that maintains the system in production. INX adds complexity when the alternative creates more problems than the complexity it introduces solves. The default position is subtraction, not addition.",
  },
  {
    index: "III",
    statement: "Design for the engineer who inherits the system.",
    body: "The best-written system is one that requires the least explanation. This is applied as an architecture constraint at design review: if a decision requires extended documentation to justify its existence, the architecture is a candidate for simplification. Clever systems have short lifespans. Legible systems outlast their authors.",
  },
];

export default function ArchitectureThinking() {
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
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Architecture Thinking
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Technology decisions are engineering decisions.{" "}
              <span className="text-white/32">Not procurement decisions.</span>
            </h2>
          </div>
        </motion.div>

        {/* Positions */}
        <div className="space-y-0 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.09 }}
              className={`px-8 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 ${
                i < positions.length - 1 ? "border-b border-white/[0.09]" : ""
              }`}
            >
              {/* Index */}
              <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                <span className="text-[28px] font-semibold text-white/[0.07] font-mono leading-none select-none">
                  {pos.index}
                </span>
              </div>

              {/* Statement + body */}
              <div className="lg:col-span-11">
                <p className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-5 max-w-3xl">
                  {pos.statement}
                </p>
                <p className="text-sm text-white/65 leading-relaxed max-w-3xl">
                  {pos.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
