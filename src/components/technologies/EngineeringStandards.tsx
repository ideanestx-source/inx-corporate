"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const standards = [
  {
    index: "01",
    title: "Scalability as a Design Constraint",
    body: "Scalability requirements are defined during discovery and imposed as architectural constraints from the first design decision. Systems are not built for current load and scaled reactively - they are designed for anticipated growth with horizontal scaling paths that do not require architectural surgery to activate.",
  },
  {
    index: "02",
    title: "Maintainability as a Delivery Requirement",
    body: "Code is written to be read by engineers who were not present during its creation. Abstraction layers are introduced where they reduce genuine complexity - not where they create the appearance of architectural sophistication. Documentation of non-obvious decisions is treated as a delivery output, not an afterthought.",
  },
  {
    index: "03",
    title: "Deployment Discipline",
    body: "Every production deployment follows a defined promotion path: development, staging, production - with automated verification at each stage. Hotfixes that bypass staging are treated as an engineering failure. Rollback capability is a requirement established at architecture stage, not a contingency considered after an incident.",
  },
  {
    index: "04",
    title: "Performance Measurement",
    body: "Performance targets are defined as acceptance criteria before engineering begins and measured against a defined load profile before delivery is accepted. P50, P95, and P99 latency are tracked in production. A performance regression is treated with the same severity as a functional defect - because it frequently is one.",
  },
  {
    index: "05",
    title: "Technical Ownership Transfer",
    body: "The codebase is owned by the client at handover - not by INX. Architecture decisions are made to be legible to engineers who will maintain the system without reference to us. Proprietary complexity that creates dependency on INX's continued involvement is not a business model we operate.",
  },
];

export default function EngineeringStandards() {
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
              Engineering Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Standards Applied Across Every Codebase.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are not aspirational principles. They are engineering
              constraints enforced at the architecture review, code review, and
              delivery acceptance stages of every INX engagement.
            </p>
          </div>
        </motion.div>

        {/* Standards list */}
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
