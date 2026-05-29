"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const arguments_ = [
  {
    label: "On Systems Failure",
    heading: "Systems fail when they are designed against assumptions, not operations.",
    body: "The most common cause of enterprise system failure is not poor engineering - it is engineering that was competent in isolation and misaligned in context. A system designed without understanding how purchase orders are actually approved, how inventory is actually counted, or how exceptions are actually handled will be technically correct and operationally useless. The gap between documented process and actual workflow is where production systems fail.",
  },
  {
    label: "On Engineering Decisions",
    heading: "Engineering decisions that ignore business workflows create technical debt with no clean resolution.",
    body: "When a data model does not reflect the entities the business actually operates with, every feature built on top of it requires a workaround. Those workarounds accumulate. After two years, the system is not maintainable by the team that built it, let alone a successor team. The correct response is not refactoring - it is designing the data model correctly in the first place, which requires understanding the business before writing the schema.",
  },
  {
    label: "On Industry Context",
    heading: "Industry context is not background knowledge. It is an engineering input.",
    body: "Knowing that a logistics operator's drivers work in areas with intermittent connectivity changes the mobile architecture. Knowing that a compliance SaaS product must produce a complete audit trail under regulatory examination changes the logging infrastructure. Knowing that a hospitality group onboards a new location every quarter changes the multi-tenant design. These are not soft observations - they are hard constraints that determine which architectures are viable and which will fail under operational conditions.",
  },
];

export default function OperationalUnderstanding() {
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
              Operational Understanding
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Why Industry Context Is an Engineering Requirement.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              Industry familiarity is not a credential INX uses to win work. It
              is the input that determines which architectural decisions are
              viable and which will fail when the system meets operational
              reality.
            </p>
          </div>
        </motion.div>

        {/* Three arguments */}
        <div className="space-y-0 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {arguments_.map((arg, i) => (
            <motion.div
              key={arg.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.08 + i * 0.09 }}
              className={`px-8 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 bg-[#05070e] ${
                i < arguments_.length - 1 ? "border-b border-white/[0.09]" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-5">
                  {arg.label}
                </p>
                <p className="text-[17px] font-semibold text-white leading-snug">
                  {arg.heading}
                </p>
              </div>
              <div className="lg:col-span-7 flex items-center">
                <p className="text-sm text-white/65 leading-relaxed">
                  {arg.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
