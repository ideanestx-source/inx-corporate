"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  SystemsArchArt,
  EngineeringPracticeArt,
  AISystemsArt,
  InternalSystemsArt,
  PerformanceArt,
} from "@/components/visuals/EditorialArt";

import type { ComponentType } from "react";

type Editorial = {
  index: string;
  category: string;
  readingTime: string;
  date: string;
  title: string;
  summary: string;
  slug: string;
};

const editorials: Editorial[] = [
  {
    index: "01",
    category: "Systems Architecture",
    readingTime: "8 min read",
    date: "March 2025",
    title: "Why Operational Context Matters in Software Architecture",
    slug: "why-operational-context-matters",
    summary:
      "Technical systems built without understanding the operational context they will serve have a structural disadvantage that no amount of competent engineering can fully overcome. The data model reflects what the developer assumed about the business, not what the business actually requires. The integration points are designed around the happy path, not the exception handling that occupies a significant portion of operations staff time. By the time these misalignments surface in production, the cost of correction is no longer architectural - it is the accumulated cost of workarounds, manual interventions, and technical debt compounding against a codebase built on the wrong assumptions.",
  },
  {
    index: "02",
    category: "Engineering Practice",
    readingTime: "6 min read",
    date: "February 2025",
    title: "Engineering Discipline at Scale",
    slug: "engineering-discipline-at-scale",
    summary:
      "The most expensive form of technical debt is not the kind that accumulates through deliberate shortcuts - it is the kind that accumulates when the engineers who built a system have left and taken their context with them. Code written to be understood by its authors, in the conventions of the team that built it, for the assumptions of the moment it was delivered, does not age gracefully. What remains is a system that functions but cannot be modified with confidence, extended without risk, or handed over without months of knowledge transfer that is incomplete by definition.",
  },
  {
    index: "03",
    category: "Delivery Systems",
    readingTime: "9 min read",
    date: "January 2025",
    title: "Deployment Systems, Not Release Events",
    slug: "deployment-systems-not-release-events",
    summary:
      "The current wave of AI tooling adoption in enterprise contexts shares a structural pattern with previous waves of enterprise technology adoption: the technology is applied before the operational workflow that will integrate it is understood. The result is systems that perform impressively in controlled demonstration conditions, degrade unpredictably under production load, cannot be audited when something goes wrong, and cannot be corrected without understanding model behaviour that was never designed to be observable or reproducible under examination.",
  },
  {
    index: "04",
    category: "Internal Systems",
    readingTime: "7 min read",
    date: "December 2024",
    title: "Why Internal Tools Fail Adoption",
    slug: "why-internal-tools-fail-adoption",
    summary:
      "Internal tooling is built to solve an immediate operational problem. It solves it. Then the team grows, the operational context shifts, and the tool that was designed for five people in one workflow is being operated by fifty people across four workflows - without the architectural changes those conditions require. The failure is not in the original implementation, which was appropriate for its context. The failure is in the assumption that internal tools are exempt from the engineering discipline applied to customer-facing products - and the compounding cost of that assumption at operational scale.",
  },
  {
    index: "05",
    category: "Engineering Practice",
    readingTime: "7 min read",
    date: "November 2024",
    title: "Technical Debt Compounds Faster Than Growth",
    slug: "technical-debt-compounds-faster-than-growth",
    summary:
      "The engineering community discusses maintainability as a technical virtue: clean abstractions, named identifiers, appropriate separation of concerns. These matter at the implementation level. But the conditions that determine whether a system remains maintainable over a five-year horizon are mostly not technical - they are business decisions made early. Timeline pressure that removes architecture review. Team size that prevents meaningful code review. Handover assumptions that treat documentation as optional. These are not engineering failures. They are business decisions with engineering consequences that the business often does not see until the original team is gone.",
  },
];

const categoryArtMap: Record<string, ComponentType> = {
  "Systems Architecture": SystemsArchArt,
  "Engineering Practice": EngineeringPracticeArt,
  "AI Systems": AISystemsArt,
  "Internal Systems": InternalSystemsArt,
  "Delivery Systems": PerformanceArt,
};

function getArtComponent(category: string): ComponentType {
  return categoryArtMap[category] ?? PerformanceArt;
}

function EditorialEntry({
  editorial,
  inView,
  delay,
}: {
  editorial: Editorial;
  inView: boolean;
  delay: number;
}) {
  const ArtComponent = getArtComponent(editorial.category);

  return (
    <Link href={`/insights/${editorial.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.52, delay }}
        className="border-b border-white/[0.09] last:border-b-0 px-8 lg:px-10 py-9 group hover:bg-white/[0.015] transition-colors duration-200"
      >
        {/* Metadata row */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-[11px] font-mono text-white/20 tracking-[0.22em]">
            {editorial.index}
          </span>
          <span className="h-px w-3 bg-white/[0.12]" />
          <span className="text-[10px] font-medium text-white/32 tracking-[0.14em] uppercase">
            {editorial.category}
          </span>
          <span className="text-white/[0.12] text-[10px]">·</span>
          <span className="text-[10px] text-white/25 font-medium">
            {editorial.readingTime}
          </span>
          <span className="flex-1" />
          <span className="text-[10px] text-white/22 font-mono tracking-wide">
            {editorial.date}
          </span>
        </div>

        {/* Art panel + Title + Summary grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
          {/* Art panel */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="h-[90px] border border-white/[0.07] rounded-[3px] overflow-hidden bg-[#060a12]">
              <ArtComponent />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
              {editorial.title}
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-white/65 leading-relaxed">
              {editorial.summary}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function FeaturedEditorials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.04 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Featured Editorials
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Positions. Each Argued From Experience.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are not trend analyses or market surveys. Each piece argues
              a specific position on an engineering or operational question that
              INX has encountered in delivery across multiple client contexts.
            </p>
          </div>
        </motion.div>

        {/* Editorial list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {editorials.map((e, i) => (
            <EditorialEntry
              key={e.index}
              editorial={e}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
