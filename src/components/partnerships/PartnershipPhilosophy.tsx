"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContextAccumulation from "@/components/visuals/ContextAccumulation";

const positions = [
  {
    label: "On Long-Term Relationships",
    heading: "Engineering partnerships produce value through context accumulation, not transaction volume.",
    body: "The engineering context that makes a collaboration productive - understanding the data model, the history of architectural decisions, the operational constraints specific to the business - takes time to develop and cannot be transferred through documentation alone. INX structures partnerships to build that context deliberately and protect it through rigorous handover discipline, so the value does not disappear when the engagement concludes.",
  },
  {
    label: "On Selective Collaboration",
    heading: "A partnership programme optimised for volume is a different product from engineering collaboration.",
    body: "INX works with a small number of partners at any time. Selection is based on technical and operational alignment - whether INX's delivery standards are compatible with the partner's working model, whether the engineering contribution INX makes is genuine and specific rather than supplementary and replaceable, and whether the collaboration produces better outcomes for the end client than either party would produce independently.",
  },
  {
    label: "On Technical Depth",
    heading: "Scale in a partnership network is a business development metric. Engineering depth is an operational one.",
    body: "A wide partner network with shallow technical integration produces referral relationships and co-marketing. INX is not structured for that model. The partnerships that produce durable value are the ones where INX's technical involvement is specific enough to matter - where the integration or delivery contribution changes the outcome in a way that can be measured, not just described.",
  },
];

export default function PartnershipPhilosophy() {
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
              Partnership Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Why INX Approaches Collaboration the Way It Does.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end gap-5">
            <div className="border border-white/[0.07] rounded-[3px] overflow-hidden">
              <ContextAccumulation />
            </div>
            <p className="text-sm text-white/32 leading-relaxed">
              These are not guiding principles - they are the operational
              reasons behind specific decisions about which partnerships INX
              pursues and how they are structured.
            </p>
          </div>
        </motion.div>

        {/* Three positions */}
        <div className="space-y-0 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.08 + i * 0.09 }}
              className={`px-8 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 bg-[#05070e] ${
                i < positions.length - 1 ? "border-b border-white/[0.09]" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-5">
                  {pos.label}
                </p>
                <p className="text-[17px] font-semibold text-white leading-snug">
                  {pos.heading}
                </p>
              </div>
              <div className="lg:col-span-7 flex items-center">
                <p className="text-sm text-white/65 leading-relaxed">
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
