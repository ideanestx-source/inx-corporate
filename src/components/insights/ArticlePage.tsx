"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { Article, Block, ArticleSection } from "@/lib/insights";
import type { Author } from "@/lib/authors";

export type RelatedResource = {
  label: string;
  href: string;
  description: string;
  type: "service" | "industry" | "page";
};

// ─── Block renderer ──────────────────────────────────────────────────────────

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "p") {
    return (
      <p className="text-[15px] text-white/70 leading-[1.8] mb-5">
        {block.text}
      </p>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="text-lg font-semibold text-white/90 mt-8 mb-4">
        {block.text}
      </h3>
    );
  }

  if (block.type === "callout") {
    return (
      <div className="rounded-[3px] border border-blue-500/18 bg-blue-500/[0.05] px-6 py-5 mb-5">
        {block.label && (
          <p className="text-[10px] font-mono text-blue-400/55 uppercase tracking-widest mb-2">
            {block.label}
          </p>
        )}
        <p className="text-sm text-white/65 leading-relaxed">{block.text}</p>
      </div>
    );
  }

  if (block.type === "pullquote") {
    return (
      <blockquote className="border-l-2 border-white/15 pl-6 my-8">
        <p className="text-xl text-white/80 leading-snug italic font-medium">
          {block.text}
        </p>
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-2 mb-5">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-white/20" />
            <span className="text-[15px] text-white/65 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

// ─── Section renderer ─────────────────────────────────────────────────────────

function SectionBlock({
  section,
  sectionIndex,
}: {
  section: ArticleSection;
  sectionIndex: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={section.id}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: sectionIndex * 0.04 }}
      className="scroll-mt-28"
    >
      {/* Section index + title */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-[11px] text-white/15 tracking-widest select-none">
          {String(sectionIndex + 1).padStart(2, "0")}
        </span>
        <h2 className="text-2xl font-semibold text-white leading-snug">
          {section.title}
        </h2>
      </div>

      {/* Blocks */}
      <div>
        {section.blocks.map((block, bi) => (
          <BlockRenderer key={bi} block={block} />
        ))}
      </div>
    </motion.section>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────

function TableOfContents({
  sections,
  activeId,
}: {
  sections: ArticleSection[];
  activeId: string;
}) {
  return (
    <nav className="hidden lg:block">
      <p className="text-[10px] uppercase tracking-widest text-white/22 mb-4 font-medium">
        Contents
      </p>
      <ol className="space-y-1">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={
                  "block text-[12px] leading-relaxed py-[3px] transition-colors duration-150 " +
                  (isActive
                    ? "text-white/80 font-medium"
                    : "text-white/25 hover:text-white/55")
                }
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ─── Related card ─────────────────────────────────────────────────────────────

function RelatedCard({ article }: { article: Article }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group block">
      <div className="border border-white/[0.09] rounded-[3px] bg-[#080c18] p-6 h-full transition-colors duration-200 group-hover:border-white/[0.18] group-hover:bg-[#0c1120]">
        <p className="text-[10px] font-medium text-blue-400/55 tracking-[0.14em] uppercase mb-3">
          {article.category}
        </p>
        <p className="text-sm font-semibold text-white leading-snug mb-4">
          {article.title}
        </p>
        <p className="text-[11px] font-mono text-white/22 tracking-wide">
          {article.readingTime} · {article.date}
        </p>
      </div>
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ArticlePage({
  article,
  allArticles,
  author,
  relatedResources = [],
}: {
  article: Article;
  allArticles: Article[];
  author: Author;
  relatedResources?: RelatedResource[];
}) {
  const [activeId, setActiveId] = useState<string>(
    article.sections[0]?.id ?? ""
  );

  // IntersectionObserver for ToC scroll-spy
  useEffect(() => {
    const headings = article.sections.map((s) =>
      document.getElementById(s.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article.sections]);

  // Related articles
  const relatedArticles = article.related
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter((a): a is Article => a !== undefined);

  // Hero animation ref
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="pt-24 pb-32">
      {/* ── Article Hero ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pt-12 pb-14 border-b border-white/[0.06]"
        >
          {/* Eyebrow */}
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-5">
            {article.category}
          </p>

          {/* Metadata row */}
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="font-mono text-[11px] text-white/20 tracking-[0.22em]">
              {article.index}
            </span>
            <span className="h-px w-3 bg-white/[0.12]" />
            <span className="text-[11px] font-mono text-white/28">
              {article.readingTime}
            </span>
            <span className="text-white/[0.12] text-[10px]">·</span>
            <span className="text-[11px] font-mono text-white/28">
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.06] text-white tracking-tight max-w-4xl mb-10">
            {article.title}
          </h1>

          {/* Executive summary */}
          <div className="border-l-2 border-blue-500/30 pl-6 max-w-3xl">
            <p className="text-base text-white/68 leading-relaxed">
              {article.executiveSummary}
            </p>
          </div>

          {/* Author byline */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04]">
              <span className="font-mono text-[11px] font-medium text-white/45">
                {author.initials}
              </span>
            </div>
            <div>
              <p className="text-[13px] font-medium text-white/65">{author.name}</p>
              <p className="text-[11px] text-white/28">{author.role} · {author.organization}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Two-column body ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* ToC — sticky left column */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents
              sections={article.sections}
              activeId={activeId}
            />
          </div>

          {/* Article body — right column */}
          <div className="lg:col-span-8 lg:col-start-4">
            <div className="space-y-0">
              {article.sections.map((section, i) => (
                <div key={section.id}>
                  <SectionBlock section={section} sectionIndex={i} />
                  {i < article.sections.length - 1 && (
                    <div className="h-px bg-white/[0.06] my-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Insights ─────────────────────────────────────────── */}
      {relatedArticles.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 pt-14 border-t border-white/[0.06]">
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
            Continue Reading
          </p>
          <h2 className="text-2xl font-semibold text-white mb-10">
            Related Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((related) => (
              <RelatedCard key={related.slug} article={related} />
            ))}
          </div>
        </div>
      )}

      {/* ── Related Services & Industries ─────────────────────────────── */}
      {relatedResources.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 pt-14 border-t border-white/[0.06]">
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
            INX Services
          </p>
          <h2 className="text-2xl font-semibold text-white mb-10">
            Relevant Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedResources.map((res) => (
              <Link
                key={res.href}
                href={res.href}
                className="group block border border-white/[0.09] rounded-[3px] bg-[#080c18] p-6 transition-colors duration-200 hover:border-white/[0.18] hover:bg-[#0c1120]"
              >
                <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-2">
                  {res.type === "industry" ? "Industry" : "Service"}
                </p>
                <p className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-white/90">
                  {res.label}
                </p>
                <p className="text-[12px] text-white/40 leading-relaxed">
                  {res.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
