"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    index: "01",
    name: "Discovery",
    body: "An initial structured conversation to understand the operational context, the technical requirements, and the specific collaboration model being proposed. No commercial terms are discussed at this stage. The output is a shared understanding of whether the partnership basis is technically sound and operationally realistic.",
  },
  {
    index: "02",
    name: "Technical Review",
    body: "An assessment of the existing technical context - current systems, prior architecture decisions, integration dependencies, and the specific engineering contribution INX would make. This review produces a written assessment. A verbal alignment conversation is not a sufficient output for this stage.",
  },
  {
    index: "03",
    name: "Alignment Assessment",
    body: "Evaluation of the operational and delivery alignment between INX's standards and the partner's working model. Communication expectations, deployment discipline, technical accountability, and documentation requirements are assessed explicitly - not assumed to be compatible because both parties are technically capable.",
  },
  {
    index: "04",
    name: "Phased Engagement",
    body: "Where alignment is confirmed, the first engagement is scoped, specified in writing, and delivered as a discrete project with defined acceptance criteria. Long-term partnership viability is assessed based on the quality and operational outcomes of the first engagement - not on the basis of a commercial relationship established in advance of any delivery.",
  },
  {
    index: "05",
    name: "Long-Term Fit",
    body: "Subsequent engagements are evaluated on their own technical and operational terms. The partnership relationship is maintained through consistently well-executed individual engagements - not through contract structures that make disengagement costly regardless of delivery quality. Continuity is earned, not guaranteed.",
  },
];

export default function PartnershipEvaluation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

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
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Partnership Evaluation Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              How INX Assesses a Potential Partnership.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-sm text-white/35 leading-relaxed">
              Partnership evaluation follows the same discipline as client
              engagement evaluation. The process is structured, the output of
              each stage is specific, and the commercial relationship follows the
              technical alignment - not the reverse.
            </p>
          </div>
        </motion.div>

        {/* Five-column strip */}
        <div className="grid grid-cols-1 sm:grid-cols-5 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.index}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: 0.08 + i * 0.08 }}
              className={`bg-[#05070e] px-6 py-9 ${
                i < phases.length - 1
                  ? "sm:border-r border-white/[0.09] border-b sm:border-b-0"
                  : ""
              }`}
            >
              <p className="text-[10px] font-mono text-white/20 tracking-[0.22em] mb-5">
                {phase.index}
              </p>
              <div className="mb-4">
                <div className="w-4 h-px bg-white/[0.14] mb-3" />
                <h3 className="text-[13px] font-semibold text-white leading-snug">
                  {phase.name}
                </h3>
              </div>
              <p className="text-xs text-white/35 leading-relaxed">
                {phase.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 text-xs text-white/35 text-right"
        >
          The first commercial arrangement follows the Technical Review and Alignment Assessment - not the initial discovery conversation.
        </motion.p>
      </div>
    </section>
  );
}
