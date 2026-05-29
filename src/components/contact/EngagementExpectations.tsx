"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EvaluationTimeline from "@/components/visuals/EvaluationTimeline";

const expectations = [
  {
    index: "I",
    title: "Initial Response",
    body: "All inquiries submitted via the form or directly by email receive a response from INX leadership within two business days. The initial response will either confirm interest in a discovery conversation or state directly that the engagement is not a fit - with a brief explanation.",
  },
  {
    index: "II",
    title: "Engagement Evaluation",
    body: "INX evaluates each inquiry against three criteria: technical fit, timeline feasibility, and organizational alignment. Not every inquiry proceeds to a discovery engagement. If we are not the right firm for your requirements, we will tell you so and, where possible, indicate who might be.",
  },
  {
    index: "III",
    title: "Partnership Philosophy",
    body: "INX is building long-term client relationships, not maximizing short-term revenue. This means we will decline engagements that are not well-suited to our model, recommend alternative engagement structures where appropriate, and approach every discovery conversation as a mutual evaluation.",
  },
];

export default function EngagementExpectations() {
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
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              What to Expect
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              How INX Evaluates and Responds to Inquiries
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-4">
            <div className="border border-white/[0.07] rounded-[3px] overflow-hidden">
              <EvaluationTimeline />
            </div>
            <p className="text-sm text-white/32 leading-relaxed">
              We operate with transparency at every stage of the pre-engagement
              process. No drawn-out evaluations, no ambiguous responses.
            </p>
          </div>
        </motion.div>

        {/* Three expectations - stacked list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {expectations.map((exp, i) => (
            <motion.div
              key={exp.index}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 bg-[#05070e] px-8 py-9 ${
                i < expectations.length - 1 ? "border-b border-white/[0.09]" : ""
              }`}
            >
              {/* Index + title */}
              <div className="lg:col-span-4 flex lg:flex-col gap-4 lg:gap-3">
                <span className="text-[11px] font-mono text-white/20 tracking-[0.2em] shrink-0 pt-0.5">
                  {exp.index}
                </span>
                <h3 className="text-[15px] font-semibold text-white leading-snug">
                  {exp.title}
                </h3>
              </div>

              {/* Body */}
              <div className="lg:col-span-8">
                <p className="text-sm text-white/65 leading-relaxed">
                  {exp.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
