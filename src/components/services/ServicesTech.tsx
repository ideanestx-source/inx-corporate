"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    category: "Frontend Framework",
    note: "App Router, RSC, Edge Runtime",
  },
  {
    name: "React",
    category: "UI Engineering",
    note: "Server Components, concurrent rendering",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    note: "API services, real-time systems",
  },
  {
    name: "AI Infrastructure",
    category: "Artificial Intelligence",
    note: "LLMs, RAG, vector databases, fine-tuning",
  },
  {
    name: "Cloud Platforms",
    category: "DevOps & Infrastructure",
    note: "AWS · GCP · Azure · Kubernetes",
  },
  {
    name: "Mobile Frameworks",
    category: "Cross-Platform Mobile",
    note: "React Native, Swift, Kotlin",
  },
];

export default function ServicesTech() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

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
              Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              The Stack Behind the Delivery
            </h2>
          </div>
          <div className="lg:col-span-6 flex lg:items-end">
            <p className="text-sm text-white/35 leading-relaxed max-w-sm">
              INX selects technology for each engagement based on technical
              requirements - not familiarity or convenience. These are the
              foundations we most frequently deploy.
            </p>
          </div>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {technologies.map((tech, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const totalRows = Math.ceil(technologies.length / 3);
            const isLastCol = col === 2;
            const isLastRow = row === totalRows - 1;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.42, delay: i * 0.07 }}
                className={`group bg-[#05070e] px-7 py-8 hover:bg-[#0d1222] transition-colors duration-200 ${
                  !isLastCol ? "lg:border-r border-white/[0.09]" : ""
                } ${i % 2 === 0 ? "sm:border-r border-white/[0.09] lg:border-r-0" : ""} ${
                  !isLastRow ? "border-b border-white/[0.09]" : ""
                }`}
              >
                <p className="text-[10px] text-white/22 font-mono tracking-[0.18em] uppercase mb-2.5">
                  {tech.category}
                </p>
                <p className="text-[15px] font-semibold text-white/72 group-hover:text-white transition-colors duration-200 mb-1.5">
                  {tech.name}
                </p>
                <p className="text-[11px] text-white/28 leading-relaxed">
                  {tech.note}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="mt-6 text-xs text-white/20 text-center"
        >
          Stack selection is always driven by technical requirements - not vendor preference or cost of retraining.
        </motion.p>
      </div>
    </section>
  );
}
