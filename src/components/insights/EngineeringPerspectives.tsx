"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const perspectives = [
  {
    label: "Systems Thinking",
    statement: "A system is not the sum of its components. It is the sum of its interactions.",
    body: "Most engineering failures do not originate in poorly written code - they originate in poorly understood boundaries between components. The API contract that was assumed rather than specified. The race condition that was understood by one team and unknown to the other. Systems thinking treats the interaction surface as the primary engineering concern, not a secondary concern that is addressed after the components are built.",
  },
  {
    label: "Maintainability",
    statement: "The code that is easiest to delete is the code that was never added.",
    body: "Maintainability is often discussed in terms of what is added: documentation, comments, tests, abstractions. The more consequential maintainability decisions are subtractive: the dependency that was evaluated and rejected, the abstraction layer that was deferred until the pattern was clear, the feature that was not built until the operational requirement was understood. A codebase that is difficult to maintain is almost always a codebase with too much in it.",
  },
  {
    label: "Delivery Discipline",
    statement: "The delivery process is part of the product. It is not separate from it.",
    body: "An organisation's ability to deploy reliably, roll back safely, and respond to production incidents without disruption is as much a product characteristic as the features the product contains. The team that treats delivery infrastructure as an operational afterthought ships less frequently, deploys with more risk, and recovers from incidents more slowly - at scale, these are competitive disadvantages as significant as any feature gap.",
  },
  {
    label: "Technical Debt",
    statement: "Technical debt that cannot be located cannot be managed.",
    body: "The most dangerous technical debt is the kind that exists implicitly - in team knowledge, in undocumented assumptions, in conventions that were obvious when the system was built and are opaque to anyone who was not present. Making technical debt visible, named, and tracked is not an acknowledgement of failure. It is the precondition for managing it intentionally rather than discovering it through production incidents.",
  },
  {
    label: "Infrastructure Maturity",
    statement: "Observability is not a feature. It is the mechanism by which everything else is managed.",
    body: "An engineering team operating a production system without structured logging, distributed tracing, and defined alerting thresholds is not operating a production system - they are operating a black box that occasionally produces user-visible failures. Infrastructure maturity is not measured by the technologies used. It is measured by the quality and completeness of the operational visibility the team has into its own systems at any given moment.",
  },
];

export default function EngineeringPerspectives() {
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
              Engineering Perspectives
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Positions on How Engineering Actually Works.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are not best practices or principles. They are specific
              positions on specific engineering questions, argued from the
              direction of operational experience rather than theoretical
              preference.
            </p>
          </div>
        </motion.div>

        {/* Perspectives */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {perspectives.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className={`px-8 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 bg-[#05070e] ${
                i < perspectives.length - 1 ? "border-b border-white/[0.09]" : ""
              }`}
            >
              {/* Left: label + statement */}
              <div className="lg:col-span-5">
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-4">
                  {p.label}
                </p>
                <p className="text-[15px] font-semibold text-white leading-snug">
                  {p.statement}
                </p>
              </div>

              {/* Right: body */}
              <div className="lg:col-span-7 flex items-center">
                <p className="text-sm text-white/65 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
