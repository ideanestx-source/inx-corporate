"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CultureProfile from "@/components/visuals/CultureProfile";

const aspects = [
  {
    index: "01",
    name: "Small, Focused Teams",
    body: "INX does not scale to size. Engagements are staffed with the number of engineers the problem requires - which is almost always fewer than a large team would allocate. Small teams produce better communication, clearer ownership, and fewer coordination failures. The cost is that every person on the team carries more.",
  },
  {
    index: "02",
    name: "Low-Noise Communication",
    body: "INX does not operate a culture of constant availability. Meetings are used for decisions that require real-time discussion. Updates are written. Questions are asked once they are precise enough to receive a useful answer. The expectation is not responsiveness at all hours - it is that communication, when it happens, is clear and carries information.",
  },
  {
    index: "03",
    name: "Responsibility Over Process",
    body: "Process at INX exists in service of outcomes - not as a system of accountability theatre. Code review exists because it produces better code. Specifications are written because they produce better systems. Where a process no longer produces the outcome it was designed for, the process changes. Where responsibility is clear, extensive process is usually redundant.",
  },
  {
    index: "04",
    name: "Operational Trust",
    body: "People at INX are trusted to manage their own work - to make decisions within their area without seeking permission, to raise concerns directly rather than escalating through intermediaries, and to identify their own limitations and ask for support when they need it. Trust at this level requires the people it is extended to to be operating in good faith. We assume that until there is evidence otherwise.",
  },
  {
    index: "05",
    name: "Technical Depth Over Title",
    body: "INX does not have an elaborate hierarchy. Technical decisions are made by the people with the most relevant expertise, not by the people with the most senior title. Disagreements about technical direction are resolved by reasoning about the problem - not by reference to organisational authority. The person with the best argument wins the argument, regardless of their role.",
  },
];

export default function EngineeringCulture() {
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
              Engineering Culture
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              How the Working Environment Is Actually Structured.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-4">
            <div className="border border-white/[0.07] rounded-[3px] overflow-hidden">
              <CultureProfile />
            </div>
            <p className="text-sm text-white/32 leading-relaxed">
              Not aspirational statements about what INX is trying to become.
              An account of how INX operates today - including the aspects that
              make it a poor fit for people who work well differently.
            </p>
          </div>
        </motion.div>

        {/* 2-col grid, last item full-width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {aspects.map((a, i) => (
            <motion.div
              key={a.index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className={`bg-[#05070e] px-8 py-9 ${
                i === aspects.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
                  {a.index}
                </span>
                <span className="h-px w-3 bg-white/[0.10]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-4 leading-snug">
                {a.name}
              </h3>
              <p
                className={`text-sm text-white/38 leading-relaxed ${
                  i === aspects.length - 1 ? "max-w-3xl" : ""
                }`}
              >
                {a.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
