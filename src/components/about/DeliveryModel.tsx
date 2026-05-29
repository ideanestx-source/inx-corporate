"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    index: "I",
    title: "Senior-Only Delivery",
    body: "Every INX engagement is staffed exclusively with senior engineers. No juniors learning at your expense, no handoffs that dilute institutional knowledge. The engineer on the proposal is the engineer on the project.",
  },
  {
    index: "II",
    title: "Embedded Partnership",
    body: "We operate as an integrated extension of your team - with the context, access, and accountability that requires. We attend your standups, adopt your workflows, and hold ourselves to the same delivery standards you hold your own engineers.",
  },
  {
    index: "III",
    title: "Timezone-Aware Operations",
    body: "Our delivery model is designed for global organizations. Structured communication rhythms, asynchronous documentation standards, and deliberate overlap windows ensure continuity regardless of geography.",
  },
];

export default function DeliveryModel() {
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
          <div className="lg:col-span-8">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Global Delivery Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              A Delivery Model Built for Enterprise Demands
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:items-end">
            <p className="text-sm text-white/35 leading-relaxed">
              We do not adapt an off-the-shelf methodology to enterprise
              requirements. Our entire operating model was designed around them
              from the outset.
            </p>
          </div>
        </motion.div>

        {/* Three pillar cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bg-[#05070e] px-8 py-10 ${
                i < pillars.length - 1 ? "lg:border-r border-white/[0.09] border-b lg:border-b-0" : ""
              }`}
            >
              {/* Roman numeral */}
              <p className="text-[11px] font-mono text-white/20 tracking-[0.2em] mb-6">
                {pillar.index}
              </p>
              <h3 className="text-[15px] font-semibold text-white mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
