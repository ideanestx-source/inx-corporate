"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    index: "01",
    title: "Ownership Expectations",
    body: "At INX, owning a piece of work means owning its outcomes - including the ones that did not go as intended. We do not operate a blame culture, but we do operate an accountability culture. When something you built fails in production, the expected response is: here is what happened, here is why, here is what I am doing about it. Not: here is how the circumstances made this outcome inevitable.",
  },
  {
    index: "02",
    title: "Engineering Discipline",
    body: "Process exists to serve delivery quality - not to signal effort, demonstrate thoroughness, or create a paper trail. INX runs code review because it produces better code, not because a process chart requires it. Specifications are written before development begins because they produce better systems, not because they are a compliance requirement. When a process stops producing the outcome it was designed for, we change the process.",
  },
  {
    index: "03",
    title: "Communication Standards",
    body: "INX communicates in writing, precisely, and in advance of problems rather than in response to them. Blockers are raised when they are identified. Scope uncertainty is surfaced before it becomes a delay. Technical concerns are expressed as technical concerns - not as political manoeuvring or relationship management. The standard for communication is: did the person who needed this information receive it clearly and in time to act on it.",
  },
  {
    index: "04",
    title: "Long-Term Thinking",
    body: "The decisions made in the first two weeks of an engagement shape the system for the years that follow. INX optimises for those years - not for the impressiveness of the first delivery or the comfort of avoiding a difficult conversation about scope. We expect the same time horizon from the people who work here. A decision that saves time this week but costs significantly more next year is not a good decision, even when the person making it will not be around to see the cost.",
  },
];

export default function WorkingPhilosophy() {
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
              Working Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              How INX Operates Internally.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are not cultural aspirations. They are the operational
              norms that govern how work is done at INX - stated plainly so
              that anyone considering joining can assess whether they are
              compatible before the conversation goes further.
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
