"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const technologies = [
  { name: "Next.js", category: "Frontend", color: "group-hover:text-white" },
  { name: "React", category: "Frontend", color: "group-hover:text-blue-300" },
  { name: "Node.js", category: "Backend", color: "group-hover:text-green-300" },
  { name: "AI Systems", category: "Artificial Intelligence", color: "group-hover:text-violet-300" },
  { name: "Cloud Infrastructure", category: "DevOps & Platform", color: "group-hover:text-sky-300" },
  { name: "Mobile Apps", category: "Cross-Platform", color: "group-hover:text-orange-300" },
];

export default function TechnologiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="technologies" className="py-28 border-t border-white/[0.08] bg-[#070a16]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"
        >
          <div>
            <p className="text-[11px] font-medium text-blue-400/70 tracking-[0.18em] uppercase mb-4">
              Technology Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-md leading-tight">
              Built With the Technologies That Scale
            </h2>
          </div>
          <p className="text-sm text-white/45 max-w-xs leading-relaxed shrink-0">
            Our stack is chosen for each engagement, not constrained by convention.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/[0.07] rounded-[4px] overflow-hidden border border-white/[0.07]">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href="/technologies"
                className={`group flex flex-col bg-[#070a16] px-7 py-8 hover:bg-[#0d1322] transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50`}
              >
                <p className="text-[10px] text-white/30 font-mono tracking-[0.18em] uppercase mb-3">
                  {tech.category}
                </p>
                <p className={`text-[16px] font-semibold text-white/65 transition-colors duration-200 ${tech.color}`}>
                  {tech.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
