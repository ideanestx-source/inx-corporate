"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    index: "01",
    title: "Scalability Across Load Profiles",
    body: "Every industry has a distinct load profile - a hospitality group adding 10 locations per year, a logistics operator whose daily dispatch volume doubles seasonally, a SaaS platform whose enterprise accounts drive 80% of API traffic. Scalability requirements are defined against that specific profile during discovery, not derived from generic assumptions about growth. Architecture decisions that are appropriate for one load profile can be actively harmful for another.",
  },
  {
    index: "02",
    title: "Maintainability Across Teams",
    body: "INX delivers systems to teams that are different from the teams that will maintain them - in some cases by design, in others because organisations change. Code is written for the engineer who inherits it without context. Abstraction decisions are documented. Non-obvious architectural choices are recorded with their rationale. A system that requires the original authors to explain its operation to every successor team has not been fully delivered.",
  },
  {
    index: "03",
    title: "Integration Discipline",
    body: "Enterprise systems do not operate in isolation. Every integration point - third-party APIs, payment processors, legacy systems, external data providers - is a reliability dependency that requires explicit failure handling. Webhook integrations that fail silently, payment APIs that do not implement idempotency, and external services that degrade without notification are not edge cases: they are the operational environment. Integration architecture is designed against failure conditions, not success paths.",
  },
  {
    index: "04",
    title: "Deployment Reliability",
    body: "Production deployments carry operational risk proportional to the size of the change and the absence of automated verification. INX operates a defined deployment discipline across all engagements: automated build and test verification, staged promotion through defined environments, rollback capability established before go-live. An organisation that cannot roll back a production deployment reliably has not completed its delivery infrastructure.",
  },
  {
    index: "05",
    title: "Long-Term Ownership",
    body: "The purpose of an INX engagement is to produce a system the client owns and operates. Technical decisions are not made to create ongoing reliance on INX's involvement. Architecture is documented in terms that an independent engineering team can reason about. Operational runbooks are delivered alongside the codebase. Long-term engagement relationships are built through repeated well-scoped work - not through systems that are intentionally difficult to operate without the original delivery team.",
  },
];

export default function CrossIndustryPrinciples() {
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
              Cross-Industry Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Engineering Principles That Hold Across Every Vertical.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              The industry changes. The operational context changes. These
              principles are applied consistently - not as aspirational values,
              but as engineering constraints enforced at each stage of delivery.
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="space-y-px">
          {principles.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="border border-white/[0.09] rounded-[3px] px-8 py-7 bg-[#05070e]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-mono text-white/20 tracking-[0.2em]">
                      {p.index}
                    </span>
                    <span className="h-px w-3 bg-white/[0.10]" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    {p.title}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-white/65 leading-relaxed">
                    {p.body}
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
