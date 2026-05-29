"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSubsection = {
  heading: string;
  paragraphs: string[];
};

export type LegalSection = {
  index: string;
  category: string;
  heading: string;
  paragraphs?: string[];
  subsections?: LegalSubsection[];
};

export type LegalPageData = {
  pageLabel: string;
  title: string;
  lastUpdated: string;
  description: string;
  sections: LegalSection[];
};

function SectionBlock({
  section,
  sectionIndex,
}: {
  section: LegalSection;
  sectionIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: sectionIndex * 0.04 }}
      className="border-t border-white/[0.08] py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
    >
      {/* Left: index + category */}
      <div className="lg:col-span-3">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[11px] font-mono text-blue-400/40 tracking-[0.22em]">
            {section.index}
          </span>
          <span className="h-px w-3 bg-white/[0.12]" />
        </div>
        <p className="text-[10px] font-medium text-white/38 tracking-[0.16em] uppercase leading-relaxed">
          {section.category}
        </p>
      </div>

      {/* Right: heading + content */}
      <div className="lg:col-span-9">
        <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-6">
          {section.heading}
        </h2>

        {/* Direct paragraphs */}
        {section.paragraphs && (
          <div className="space-y-4">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-white/65 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Subsections */}
        {section.subsections && (
          <div className="space-y-8">
            {section.subsections.map((sub, si) => (
              <div key={si}>
                <h3 className="text-[13px] font-semibold text-white/78 mb-3 leading-snug">
                  {sub.heading}
                </h3>
                <div className="space-y-3">
                  {sub.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-sm text-white/62 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] rounded-full bg-blue-600/[0.04] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-5"
              >
                {data.pageLabel}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.07 }}
                className="text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-[1.06] tracking-tight text-white"
              >
                {data.title}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-sm text-white/62 leading-relaxed mb-7">
                {data.description}
              </p>
              <div className="flex items-baseline justify-between border-t border-white/[0.08] pt-5">
                <p className="text-[10px] text-white/32 uppercase tracking-[0.14em] font-medium">
                  Last Updated
                </p>
                <p className="text-[11px] text-white/50 font-mono">
                  {data.lastUpdated}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            style={{ originX: 0 }}
            className="mt-12 h-px bg-gradient-to-r from-blue-500/20 via-white/[0.06] to-transparent"
          />
        </div>
      </section>

      {/* Sections */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {data.sections.map((section, i) => (
            <SectionBlock key={section.index} section={section} sectionIndex={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
