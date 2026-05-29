"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CloudArchitecture from "@/components/visuals/CloudArchitecture";

const infrastructure = [
  {
    index: "01",
    name: "CI/CD Pipelines",
    body: "Every INX-delivered codebase ships with a configured CI/CD pipeline as a standard delivery output. Build verification, automated test execution, and deployment orchestration are operational from the first production deployment - not added once the system is in production.",
  },
  {
    index: "02",
    name: "Version Control Standards",
    body: "Branch protection rules, required peer review, and semantic commit conventions are configured during project setup. Production is always a tagged, reviewed, and verified state - not the result of a direct commit or an unreviewed merge.",
  },
  {
    index: "03",
    name: "Deployment Workflows",
    body: "Promotion from development to staging to production follows a documented workflow with automated verification at each stage. Blue-green or canary deployment strategies are applied where zero-downtime deployment is a stated requirement.",
  },
  {
    index: "04",
    name: "QA Philosophy",
    body: "Testing is applied proportionate to the risk profile of each component. Unit tests for deterministic functions. Integration tests at service and database boundaries. End-to-end tests for critical user journeys. Test coverage is not a metric optimised in isolation - test confidence is.",
  },
  {
    index: "05",
    name: "Monitoring & Observability",
    body: "Structured logging, latency percentile tracking, and error alerting are production requirements, not optional additions. Systems are delivered with dashboards configured and alert thresholds defined. Incident visibility is established before the first production traffic, not after the first production incident.",
  },
];

export default function DeliveryInfrastructure() {
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
              Delivery Infrastructure
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              The Infrastructure Around the Code.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              CI/CD, version control discipline, deployment strategy, testing
              philosophy, and production observability - defined before
              engineering begins on every engagement.
            </p>
          </div>
        </motion.div>

        {/* Cloud Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mb-12 relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/[0.15] to-transparent" />
          <div className="relative rounded-[4px] border border-white/[0.07] bg-[#070a14] overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.025] via-transparent to-indigo-600/[0.025] pointer-events-none" />
            <CloudArchitecture />
          </div>
        </motion.div>

        {/* Five-column strip */}
        <div className="grid grid-cols-1 sm:grid-cols-5 border border-white/[0.09] rounded-[3px] overflow-hidden">
          {infrastructure.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, delay: 0.08 + i * 0.08 }}
              className={`bg-[#05070e] px-6 py-9 ${
                i < infrastructure.length - 1
                  ? "sm:border-r border-white/[0.09] border-b sm:border-b-0"
                  : ""
              }`}
            >
              <p className="text-[10px] font-mono text-white/20 tracking-[0.22em] mb-5">
                {item.index}
              </p>
              <div className="mb-4">
                <div className="w-4 h-px bg-white/[0.14] mb-3" />
                <h3 className="text-[13px] font-semibold text-white leading-snug">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-white/35 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
