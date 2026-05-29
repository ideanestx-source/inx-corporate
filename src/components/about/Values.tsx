"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    index: "01",
    title: "Engineering Precision",
    body: "We hold our work to the highest technical standard because the systems we build underpin critical business operations. Nothing ships until it is correct.",
  },
  {
    index: "02",
    title: "Enterprise Accountability",
    body: "We operate with the discipline and cadence that enterprise clients require - not approximations of it. We own outcomes, not just deliverables.",
  },
  {
    index: "03",
    title: "Intelligence by Design",
    body: "Every system we build is architected to be AI-capable from day one. We do not retrofit intelligence into systems that were never designed to support it.",
  },
  {
    index: "04",
    title: "Long-Term Partnership",
    body: "We invest in our client relationships with the same seriousness we invest in our code. The relationship outlasts the project - that is the standard we hold ourselves to.",
  },
  {
    index: "05",
    title: "Technical Integrity",
    body: "We do not take shortcuts that compound into architectural debt. When the correct path is harder, we take it. Engineering integrity is non-negotiable.",
  },
  {
    index: "06",
    title: "Outcome-Driven Delivery",
    body: "Our measure of success is what our clients achieve, not what we bill. Every engagement is evaluated against the business outcomes it was designed to produce.",
  },
];

export default function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            What We Stand For
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-md leading-tight">
            Six Principles That Govern Every Engagement
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {values.map((value, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const isLastInRow = col === 2;
            const isLastRow = row === Math.floor((values.length - 1) / 3);

            return (
              <motion.div
                key={value.index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`group bg-[#05070e] p-8 hover:bg-[#0d1222] transition-colors duration-250 ${
                  !isLastInRow ? "lg:border-r border-white/[0.09]" : ""
                } ${
                  i % 2 === 0 ? "sm:border-r sm:last:border-r-0 border-white/[0.09] lg:border-r-0" : ""
                } ${!isLastRow ? "border-b border-white/[0.09]" : ""}`}
              >
                <span className="block text-[11px] font-mono text-white/20 mb-5 tracking-wider">
                  {value.index}
                </span>
                <h3 className="text-[15px] font-semibold text-white mb-3 leading-snug">
                  {value.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {value.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
