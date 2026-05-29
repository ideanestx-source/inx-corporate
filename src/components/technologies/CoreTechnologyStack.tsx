"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Technology = {
  name: string;
  note: string;
};

type Category = {
  index: string;
  name: string;
  philosophy: string;
  technologies: Technology[];
};

const categories: Category[] = [
  {
    index: "01",
    name: "Frontend Engineering",
    philosophy:
      "Rendering framework and state management decisions are made against performance and maintainability requirements. No framework is introduced without a defined justification over the alternatives.",
    technologies: [
      {
        name: "Next.js",
        note: "Application framework providing SSR, SSG, and edge rendering. Selected for deployment flexibility and the absence of proprietary infrastructure lock-in.",
      },
      {
        name: "React",
        note: "Component model for complex UI state management. Applied where rendering complexity justifies the abstraction - not by default.",
      },
      {
        name: "TypeScript",
        note: "Enforced in strict mode across all frontend codebases. Type coverage at module boundaries eliminates a class of production runtime failures.",
      },
      {
        name: "Tailwind CSS",
        note: "Utility-first styling for component surfaces that scale. Eliminates stylesheet management overhead without sacrificing design precision.",
      },
      {
        name: "Framer Motion",
        note: "Scoped to interaction-layer transitions with explicit constraints against performance-impacting visual effects.",
      },
    ],
  },
  {
    index: "02",
    name: "Backend Engineering",
    philosophy:
      "Service boundaries, runtime selection, and data model design are determined by the operational profile of each workload - not by convention or prior-engagement familiarity.",
    technologies: [
      {
        name: "Node.js",
        note: "Preferred runtime for I/O-bound, high-concurrency service layers. Not applied to CPU-intensive computation paths.",
      },
      {
        name: "Python",
        note: "Primary language for document processing, AI inference pipelines, and data transformation workloads.",
      },
      {
        name: "PostgreSQL",
        note: "Relational database selected for transactional integrity, row-level security enforcement, and predictable behaviour under production load.",
      },
      {
        name: "Redis",
        note: "Applied to session state, cache layers, and lightweight queue management. Not operated as a primary data store.",
      },
    ],
  },
  {
    index: "03",
    name: "Cloud Infrastructure",
    philosophy:
      "Infrastructure decisions are made against workload requirements and compliance constraints, not vendor preference. Multi-cloud capability is maintained to avoid operational dependency on any single provider.",
    technologies: [
      {
        name: "AWS",
        note: "Primary provider for enterprise deployments requiring compliance-ready infrastructure, regional data isolation, and managed service depth.",
      },
      {
        name: "Vercel",
        note: "Selected for Next.js application hosting where edge delivery and deployment simplicity align with the workload profile.",
      },
      {
        name: "Docker",
        note: "Containerisation standard for all application services. Guarantees environment parity between development, staging, and production.",
      },
      {
        name: "Terraform",
        note: "Infrastructure as code for reproducible, auditable provisioning. All production infrastructure is version-controlled and peer-reviewed before deployment.",
      },
    ],
  },
  {
    index: "04",
    name: "AI Systems",
    philosophy:
      "AI components are integrated as bounded, auditable services with defined input schemas, output validation, and confidence thresholds - not embedded as opaque logic within application code.",
    technologies: [
      {
        name: "OpenAI API",
        note: "Applied to structured extraction, document classification, and reasoning tasks with validated JSON output schemas enforced at the inference layer.",
      },
      {
        name: "Structured Output",
        note: "Schema-enforced model responses eliminate parsing ambiguity and enable downstream field validation against a defined registry.",
      },
      {
        name: "LLM Orchestration",
        note: "Multi-step reasoning pipelines designed with deterministic fallback paths and confidence-threshold routing to human review queues.",
      },
      {
        name: "Audit Infrastructure",
        note: "Every automated AI decision logged with model input, output, and confidence score. Required for regulatory compliance in auditability-constrained environments.",
      },
    ],
  },
  {
    index: "05",
    name: "Mobile Engineering",
    philosophy:
      "Mobile applications are built to operate reliably under variable connectivity, with local state management that synchronises without user intervention or data loss on reconnection.",
    technologies: [
      {
        name: "React Native",
        note: "Cross-platform framework for enterprise mobile applications requiring native platform APIs and offline-tolerant state management.",
      },
      {
        name: "Expo",
        note: "Managed build tooling and deployment lifecycle management. Applied where delivery timeline and platform coverage requirements are aligned.",
      },
      {
        name: "Offline-First State",
        note: "Local persistence with conflict-resolution sync patterns. Applications remain fully operational under degraded or absent connectivity.",
      },
      {
        name: "WebSocket",
        note: "Real-time data synchronisation for operational applications where sub-5-second update latency is a defined acceptance criterion.",
      },
    ],
  },
  {
    index: "06",
    name: "DevOps & Deployment",
    philosophy:
      "Delivery infrastructure is an engineering concern addressed at project initiation - not a post-launch addition. CI/CD, monitoring, and deployment discipline are operational before the first production deployment.",
    technologies: [
      {
        name: "GitHub Actions",
        note: "CI/CD automation for build verification, automated test execution, and deployment pipeline orchestration across environments.",
      },
      {
        name: "Docker Compose",
        note: "Local environment standardisation. Eliminates the class of defects caused by development-to-production environment configuration drift.",
      },
      {
        name: "Structured Logging",
        note: "Queryable log format with distributed request tracing across service boundaries. Debugging production incidents without structured logs is archaeology.",
      },
      {
        name: "Monitoring & Alerting",
        note: "Performance baselines and alert thresholds defined before go-live. Production visibility is a delivery requirement, not a retrofit applied after the first incident.",
      },
    ],
  },
];

function CategorySection({
  category,
  inView,
  delay,
}: {
  category: Category;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay }}
      className="border-b border-white/[0.09] last:border-b-0"
    >
      {/* Category header */}
      <div className="px-8 lg:px-10 pt-9 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono text-white/18 tracking-[0.22em]">
              {category.index}
            </span>
            <span className="h-px w-3 bg-white/[0.10]" />
          </div>
          <h3 className="text-base font-semibold text-white mb-3">
            {category.name}
          </h3>
          <p className="text-xs text-white/30 leading-relaxed">
            {category.philosophy}
          </p>
        </div>

        {/* Technologies */}
        <div className="lg:col-span-8">
          <div className="space-y-0 border border-white/[0.09] rounded-[3px] overflow-hidden">
            {category.technologies.map((tech, ti) => (
              <div
                key={tech.name}
                className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 px-6 py-4 ${
                  ti < category.technologies.length - 1
                    ? "border-b border-white/[0.05]"
                    : ""
                }`}
              >
                <p className="text-[13px] font-medium text-white/70 sm:min-w-[160px] shrink-0">
                  {tech.name}
                </p>
                <p className="text-xs text-white/32 leading-relaxed">
                  {tech.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoreTechnologyStack() {
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
              Technology Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Six Domains. Documented by Operational Role.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              Each technology listed here is applied in production across INX
              engagements. Inclusion indicates operational use - not aspirational
              capability.
            </p>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {categories.map((cat, i) => (
            <CategorySection
              key={cat.index}
              category={cat}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
