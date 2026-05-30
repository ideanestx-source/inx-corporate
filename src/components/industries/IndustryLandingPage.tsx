"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { IndustryPage } from "@/lib/industries-data";
import type { Article } from "@/lib/insights";

const ctaHeadlines: Record<string, string> = {
  "saas-development": "Planning a SaaS platform or product modernisation initiative?",
  "healthcare-software-development": "Ready to discuss healthcare software requirements?",
  "fintech-software-development": "Need engineering support for a fintech or financial services platform?",
  "ecommerce-development": "Ready to scope an eCommerce platform or retail systems engagement?",
  "gaming-software-development": "Planning a game backend or live operations platform?",
};

// ─── Section ────────────────────────────────────────────────────────────────

function ContentSection({
  heading,
  paragraphs,
  index,
}: {
  heading: string;
  paragraphs: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-mono text-[11px] text-white/15 tracking-widest select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="text-2xl font-semibold text-white leading-snug">
          {heading}
        </h2>
      </div>
      <div className="space-y-4 ml-10">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] text-white/68 leading-[1.8]">
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

// ─── FAQ item ────────────────────────────────────────────────────────────────

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="border-b border-white/[0.07]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-6 flex items-start justify-between gap-6 group"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-white/85 leading-snug group-hover:text-white transition-colors duration-150">
          {question}
        </span>
        <span
          className={
            "mt-[2px] shrink-0 text-white/30 text-lg leading-none transition-transform duration-200 " +
            (open ? "rotate-45" : "rotate-0")
          }
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-[14px] text-white/55 leading-relaxed pb-6 pr-8">
          {answer}
        </p>
      )}
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function IndustryLandingPage({
  page,
  relatedArticles = [],
}: {
  page: IndustryPage;
  relatedArticles?: Article[];
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="pt-24 pb-32">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pt-12 pb-14 border-b border-white/[0.06]"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6">
            {page.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.06] text-white tracking-tight max-w-3xl mb-8">
            {page.heroHeadline}
          </h1>
          <div className="border-l-2 border-blue-500/30 pl-6 max-w-2xl">
            <p className="text-base text-white/68 leading-relaxed">
              {page.heroSubtext}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Content sections ────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="max-w-3xl space-y-14">
          {page.sections.map((section, i) => (
            <div key={i}>
              <ContentSection
                heading={section.heading}
                paragraphs={section.paragraphs}
                index={i}
              />
              {i < page.sections.length - 1 && (
                <div className="h-px bg-white/[0.06] mt-14" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Capabilities ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-14 border-t border-white/[0.06]">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
          Capabilities
        </p>
        <h2 className="text-2xl font-semibold text-white mb-10">
          What We Build
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {page.capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex gap-3 items-start border border-white/[0.07] rounded-[3px] bg-[#080c18] px-5 py-4"
            >
              <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-blue-500/50" />
              <span className="text-[13px] text-white/65 leading-snug">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-14 border-t border-white/[0.06]">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-2xl font-semibold text-white mb-10">
          Common Questions
        </h2>
        <div className="max-w-3xl">
          {page.faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="border border-white/[0.09] rounded-[4px] bg-[#080c18] px-8 py-12 sm:px-12">
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Start a Conversation
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 max-w-xl leading-snug">
            {ctaHeadlines[page.slug] ?? `Ready to discuss a ${page.title.toLowerCase()} engagement?`}
          </h2>
          <p className="text-[15px] text-white/50 mb-8 max-w-lg leading-relaxed">
            Submit a business inquiry and a member of our leadership team will
            respond within two business days.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-colors duration-150 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[3px] border border-white/[0.12] px-6 py-3 text-sm font-medium text-white/70 hover:border-white/[0.22] hover:text-white/90 transition-all duration-150"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* ── Related Insights ────────────────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-14 border-t border-white/[0.06]">
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
            Related Insights
          </p>
          <h2 className="text-2xl font-semibold text-white mb-10">
            Engineering Perspectives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block border border-white/[0.09] rounded-[3px] bg-[#080c18] p-6 transition-colors duration-200 hover:border-white/[0.18] hover:bg-[#0c1120]"
              >
                <p className="text-[10px] font-medium text-blue-400/55 tracking-[0.14em] uppercase mb-3">
                  {article.category}
                </p>
                <p className="text-sm font-semibold text-white leading-snug mb-3 group-hover:text-white/90">
                  {article.title}
                </p>
                <p className="text-[11px] font-mono text-white/22 tracking-wide">
                  {article.readingTime} · {article.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Internal links ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-14 pt-14 border-t border-white/[0.06]">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
          Explore Further
        </p>
        <h2 className="text-2xl font-semibold text-white mb-10">
          Related Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Services", href: "/services", desc: "Our engineering service lines" },
            { label: "Case Studies", href: "/case-studies", desc: "Selected delivery engagements" },
            { label: "All Insights", href: "/insights", desc: "Engineering perspectives from delivery" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group block border border-white/[0.09] rounded-[3px] bg-[#080c18] p-6 transition-colors duration-200 hover:border-white/[0.18] hover:bg-[#0c1120]"
            >
              <p className="text-sm font-semibold text-white mb-2 group-hover:text-white/90">
                {link.label}
              </p>
              <p className="text-[12px] text-white/40 leading-relaxed">
                {link.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
