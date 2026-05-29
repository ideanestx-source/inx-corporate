"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    label: "Mission",
    heading: "Engineering outcomes that compound.",
    body: "To architect and deliver digital systems that give enterprises a measurable competitive advantage - built with engineering precision, operated at scale, and maintained with full accountability.",
  },
  {
    label: "Vision",
    heading: "Defining AI-native enterprise engineering.",
    body: "To become the engineering firm that sets the standard for what AI-native enterprise technology looks like - globally trusted, technically uncompromising, and measured exclusively by client outcomes.",
  },
];

export default function MissionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.09] rounded-[3px] overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`bg-[#05070e] px-10 py-12 lg:py-14 ${
                i === 0 ? "lg:border-r border-white/[0.09]" : ""
              }`}
            >
              <p className="text-[10px] font-medium text-white/28 tracking-[0.18em] uppercase mb-5">
                {pillar.label}
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-5 max-w-xs">
                {pillar.heading}
              </h2>
              <p className="text-sm text-white/65 leading-relaxed max-w-sm">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
