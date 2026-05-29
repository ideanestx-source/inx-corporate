"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PublicationFlow from "@/components/visuals/PublicationFlow";

const positions = [
  {
    index: "01",
    title: "Selective Publication",
    body: "INX does not publish on a schedule. Publication follows from having something specific to say about a specific engineering or operational question - derived from delivery experience, not derived from the editorial calendar of whatever the industry is currently discussing. The absence of a recent piece is not silence; it is the absence of something worth saying.",
  },
  {
    index: "02",
    title: "Operational Clarity Over Trend Commentary",
    body: "There is no shortage of commentary on technology trends. INX does not contribute to it. What we publish is grounded in operational conditions - the specific failure modes encountered in production, the architectural decisions that proved sound or incorrect under real load, the delivery disciplines that produced predictable outcomes versus the ones that did not. Trends are observed; operations are experienced.",
  },
  {
    index: "03",
    title: "Systems Thinking Over Growth Narratives",
    body: "The dominant language of the technology industry is growth: growth hacking, scaling startups, hypergrowth infrastructure. INX writes in the language of systems: operational reliability, maintainability across team changes, delivery predictability under constraint. These are the concerns of organisations building systems they intend to operate for years, not organisations building systems they intend to demo for investors.",
  },
];

export default function WritingPhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-4">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Writing Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Why INX Publishes the Way It Does.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-end gap-5">
            <div className="border border-white/[0.07] rounded-[3px] overflow-hidden">
              <PublicationFlow />
            </div>
            <p className="text-base text-white/65 leading-relaxed">
              Publishing is not a marketing function at INX. It is an extension
              of the engineering organisation - a record of positions formed
              through delivery work and stated precisely enough to be disagreed
              with. If a piece cannot be argued against, it has not said
              anything.
            </p>
          </div>
        </motion.div>

        {/* Three positions - horizontal strip */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.09 }}
              className={`bg-[#05070e] px-8 py-9 ${
                i < positions.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-white/[0.09]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
                  {pos.index}
                </span>
                <span className="h-px w-3 bg-white/[0.10]" />
                <span className="text-[10px] font-medium text-white/25 tracking-[0.14em] uppercase">
                  {pos.title}
                </span>
              </div>
              <div className="w-6 h-px bg-white/[0.08] mb-5" />
              <p className="text-sm text-white/65 leading-relaxed">{pos.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
