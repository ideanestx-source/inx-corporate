"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  WebDiagram,
  SaasDiagram,
  AIDiagram,
  StaffDiagram,
  MobileDiagram,
  CloudDiagram,
  UIUXDiagram,
} from "@/components/visuals/ServiceDiagram";

import type { ComponentType } from "react";

const DiagramComponents: ComponentType[] = [
  WebDiagram,
  SaasDiagram,
  AIDiagram,
  StaffDiagram,
  MobileDiagram,
  CloudDiagram,
  UIUXDiagram,
];

const services = [
  {
    index: "01",
    title: "Enterprise Web Development",
    category: "Web Platform",
    description:
      "Mission-critical web platforms built for the scale, security, and integration complexity of global enterprise operations. Performance, reliability, and maintainability are treated as requirements, not goals.",
  },
  {
    index: "02",
    title: "SaaS Engineering",
    category: "Product Engineering",
    description:
      "Full-cycle SaaS product development: multi-tenant architecture, enterprise billing infrastructure, compliance frameworks, and scalable onboarding. Built to acquire and retain enterprise customers.",
  },
  {
    index: "03",
    title: "AI Systems",
    category: "Artificial Intelligence",
    description:
      "Production-grade AI integration and custom model pipelines designed for enterprise compliance constraints, inference performance, and operational reliability. LLMs, RAG systems, and intelligent automation at scale.",
  },
  {
    index: "04",
    title: "Staff Augmentation",
    category: "Embedded Delivery",
    description:
      "Senior engineers embedded within your internal teams, operating with full institutional context and delivery accountability from the outset. No ramp-up delay - delivery from day one.",
  },
  {
    index: "05",
    title: "Mobile Applications",
    category: "Mobile Engineering",
    description:
      "Native and cross-platform mobile engineering for iOS and Android, built to the same architectural standards applied across all INX engagements. Performance and maintainability are not optional.",
  },
  {
    index: "06",
    title: "Cloud & Infrastructure",
    category: "Platform Engineering",
    description:
      "Cloud architecture and platform engineering for enterprises operating at high availability. Infrastructure designed for AWS, GCP, and Azure - with observability, resilience, and cost efficiency built in.",
  },
  {
    index: "07",
    title: "UI/UX Systems",
    category: "Design Engineering",
    description:
      "Design systems and interface engineering for internal tools, client portals, and consumer-facing products. Built for accessibility, long-term consistency, and the complexity of enterprise user environments.",
  },
];

export default function CoreServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]" id="services">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Core Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Seven Service Lines. One Standard.
            </h2>
          </div>
          <div className="lg:col-span-6 flex lg:items-end">
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Every INX service line is staffed and delivered to the same
              technical and operational standard - regardless of scope or
              engagement type.
            </p>
          </div>
        </motion.div>

        {/* Service list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {services.map((service, i) => {
            const DiagramComponent = DiagramComponents[i];
            return (
              <motion.div
                key={service.index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href="/contact"
                  className={`group flex items-start gap-6 lg:gap-10 px-7 py-6 bg-[#05070e] hover:bg-[#0d1222] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500/40 ${
                    i < services.length - 1 ? "border-b border-white/[0.09]" : ""
                  }`}
                >
                  {/* Index */}
                  <span className="text-[11px] font-mono text-white/20 tracking-wider pt-0.5 w-6 shrink-0">
                    {service.index}
                  </span>

                  {/* Title + category */}
                  <div className="w-60 shrink-0">
                    <h3 className="text-[15px] font-semibold text-white leading-snug group-hover:text-white transition-colors duration-150">
                      {service.title}
                    </h3>
                    <span className="inline-block mt-1.5 text-[10px] text-white/28 font-medium tracking-[0.14em] uppercase">
                      {service.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm text-white/65 leading-relaxed hidden sm:block">
                    {service.description}
                  </p>

                  {/* Diagram - visible on lg+ only */}
                  <div className="hidden lg:block shrink-0 w-32 h-20 border border-white/[0.07] rounded-[3px] overflow-hidden bg-[#060a12]">
                    <DiagramComponent />
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/22 group-hover:text-white/55 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5 shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: description visible below title */}
        <div className="sm:hidden mt-4 space-y-4">
          {services.map((service) => (
            <p key={service.index} className="text-sm text-white/65 leading-relaxed px-1">
              <span className="font-medium text-white/75">{service.title}: </span>
              {service.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
