"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AIWorkflow from "@/components/visuals/AIWorkflow";

const CAPABILITIES = [
  {
    category: "LLM Integration",
    title: "LLM Integration",
    description:
      "Connect language models to business workflows with structured prompt engineering, context management, and output validation.",
  },
  {
    category: "Workflow Automation",
    title: "Workflow Automation",
    description:
      "Replace manual processes with intelligent automation pipelines that trigger, route, and process data with production reliability.",
  },
  {
    category: "AI Observability",
    title: "AI Observability",
    description:
      "Monitor inference performance, latency, accuracy drift, and cost across AI systems with structured observability tooling.",
  },
];

export default function AIWorkflowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section className="py-24 border-t border-white/[0.07] bg-[#05070e]">
      <div ref={ref} className="max-w-7xl px-6 lg:px-8 mx-auto">

        {/* Top: 2-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left heading */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.18em] uppercase mb-4">
              AI Systems &amp; Automation
            </p>
            <h2 className="text-3xl sm:text-[40px] font-semibold text-white leading-tight max-w-lg">
              Intelligent Systems. Production-Ready.
            </h2>
          </motion.div>

          {/* Right body */}
          <motion.div
            className="lg:col-span-5 lg:col-start-8 flex lg:items-end"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p className="text-sm text-white/45 leading-relaxed">
              INX implements AI workflow systems, LLM integrations, automation pipelines,
              and intelligence layers that operate reliably under real production load -
              not prototype conditions.
            </p>
          </motion.div>
        </div>

        {/* Middle: Pipeline visual */}
        <motion.div
          className="mt-12 relative"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.18) 50%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.18) 50%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="rounded-[4px] border border-white/[0.07] bg-[#080c18] p-8 overflow-hidden relative">
            {/* Inner ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(37,99,235,0.03) 0%, transparent 50%, rgba(79,70,229,0.03) 100%)",
              }}
              aria-hidden="true"
            />
            <AIWorkflow />
          </div>
        </motion.div>

        {/* Bottom: 3-column capability grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.category}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="p-5 rounded-[4px] border border-white/[0.06] bg-[#080c18] hover:border-white/[0.1] transition-colors"
            >
              <p className="text-[10px] font-mono text-blue-400/45 tracking-[0.14em] uppercase mb-3">
                {cap.category}
              </p>
              <h3 className="text-sm font-semibold text-white/80 mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/services"
            className="text-sm text-white/35 hover:text-white/70 transition-colors inline-flex items-center gap-1.5 group"
          >
            Explore AI capabilities
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
