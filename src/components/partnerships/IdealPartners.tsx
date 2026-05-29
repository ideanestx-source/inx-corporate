"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const characteristics = [
  {
    index: "01",
    name: "SaaS Companies at Scale",
    body: "Organisations building multi-tenant SaaS products where the architectural decisions made today compound over years - and where the cost of getting those decisions wrong is measured in migration complexity, not just refactoring effort. Companies at this stage typically have a technical team that can participate meaningfully in architecture decisions and operate the system after handover without ongoing INX dependency.",
    note: "Relevant models: Product Collaboration, Long-Term Product Engineering",
  },
  {
    index: "02",
    name: "Operationally Complex Businesses",
    body: "Organisations whose software requirements are shaped by operational realities that are not obvious from the outside: logistics operations with connectivity constraints, hospitality groups with multi-location data models, professional services firms with regulatory auditability requirements. These businesses benefit most from an engineering partner that treats operational context as an input to technical decisions, not a background consideration.",
    note: "Relevant models: Delivery Partnerships, Technology Partnerships",
  },
  {
    index: "03",
    name: "Engineering-Led Organisations",
    body: "Organisations where the internal team has sufficient technical depth to review delivery output critically, participate in architecture decisions with genuine understanding, and operate systems independently after handover. INX does not perform well as a partner to organisations that expect to receive technical output without the capacity to evaluate it - not because we are unwilling, but because the collaboration model that produces the best results requires a technically capable counterpart.",
    note: "Relevant models: Product Collaboration, White-Label Engineering",
  },
  {
    index: "04",
    name: "Long-Term Product Organisations",
    body: "Organisations building systems they intend to operate for years - where the time horizon is long enough that architecture decisions about maintainability, scalability, and documentation discipline produce measurable returns. The collaboration model that INX operates requires both parties to think beyond the current engagement. Organisations optimising exclusively for short-term delivery speed are better served by a different model than the one INX provides.",
    note: "Relevant models: Long-Term Product Engineering, Delivery Partnerships",
  },
];

export default function IdealPartners() {
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
              Ideal Partnership Characteristics
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              The Organisations INX Collaborates Best With.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              This is not a description of who INX will work with exclusively.
              It is an honest account of the collaboration conditions that
              produce the best outcomes for the organisations involved.
            </p>
          </div>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {characteristics.map((c, i) => (
            <motion.div
              key={c.index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="bg-[#05070e] px-8 py-9 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
                  {c.index}
                </span>
                <span className="h-px w-3 bg-white/[0.10]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-4 leading-snug">
                {c.name}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed flex-1">
                {c.body}
              </p>
              <div className="mt-6 pt-5 border-t border-white/[0.05]">
                <p className="text-[10px] text-white/22 font-medium tracking-[0.12em] uppercase">
                  {c.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
