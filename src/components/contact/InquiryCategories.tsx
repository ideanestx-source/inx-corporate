"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    index: "01",
    title: "Product Engineering",
    description:
      "Web platforms, SaaS products, AI systems, and mobile applications. Submit this type of inquiry if you are building or rebuilding a foundational technology product and require a senior engineering partner.",
    indicators: ["New platform builds", "System rewrites", "AI integration"],
  },
  {
    index: "02",
    title: "Staff Augmentation",
    description:
      "Senior engineers placed directly within your existing team on a monthly basis. Submit this type of inquiry if you have existing delivery capacity that requires specific technical augmentation.",
    indicators: ["Capability gaps", "Specialist requirements", "Surge capacity"],
  },
  {
    index: "03",
    title: "Partnership Discussions",
    description:
      "Strategic relationships with technology consultancies, venture-backed companies, or enterprise organizations exploring an extended delivery relationship with INX.",
    indicators: [
      "Referral partnerships",
      "White-label delivery",
      "Long-term alignment",
    ],
  },
  {
    index: "04",
    title: "Enterprise Consulting",
    description:
      "Technical advisory, architecture review, and engineering audits. Submit this type of inquiry if you require senior-level technical judgment without a full delivery engagement.",
    indicators: [
      "Architecture reviews",
      "Engineering audits",
      "CTO advisory",
    ],
  },
];

export default function InquiryCategories() {
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
          className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Inquiry Categories
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Identify the Right Engagement Type
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              Use the categories below to identify which engagement type is
              most relevant to your requirements before submitting your inquiry.
            </p>
          </div>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {categories.map((cat, i) => {
            const isRight = i % 2 === 1;
            const isBottom = i >= 2;
            return (
              <motion.div
                key={cat.index}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-[#05070e] p-8 lg:p-10 hover:bg-[#0d1222] transition-colors duration-200 ${
                  !isRight ? "lg:border-r border-white/[0.09]" : ""
                } ${!isBottom ? "border-b border-white/[0.09]" : ""}`}
              >
                {/* Index + title */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] shrink-0">
                    {cat.index}
                  </span>
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    {cat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/65 leading-relaxed mb-6 pl-8">
                  {cat.description}
                </p>

                {/* Indicators */}
                <div className="pl-8 flex flex-wrap gap-2">
                  {cat.indicators.map((ind) => (
                    <span
                      key={ind}
                      className="inline-block rounded-[2px] border border-white/[0.11] bg-white/[0.03] px-3 py-1 text-[11px] text-white/32 font-medium tracking-wide"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
