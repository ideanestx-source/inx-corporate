"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Layers, Brain, Users, Smartphone, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Enterprise Software & Web Platforms",
    description:
      "Scalable web applications and enterprise platforms engineered for complex operations, high traffic, and global digital ecosystems.",
    accent: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Layers,
    title: "SaaS Engineering",
    description:
      "End-to-end SaaS product development with multi-tenant architecture, enterprise billing, compliance frameworks, and production-grade reliability.",
    accent: "from-indigo-500/20 to-purple-500/10",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform and native mobile applications built for performance and scale. iOS, Android, and React Native delivered to production standards.",
    accent: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Brain,
    title: "AI Systems & Automation",
    description:
      "Production AI integration, LLM pipelines, intelligent automation, internal tooling, BI systems, and data-driven decision infrastructure.",
    accent: "from-violet-500/20 to-pink-500/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Users,
    title: "Staff Augmentation & Dedicated Teams",
    description:
      "Senior engineers and dedicated offshore engineering teams embedded within your operations - augmenting capacity without sacrificing quality.",
    accent: "from-sky-500/20 to-blue-500/10",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud-native architecture, DevOps automation, deployment pipelines, security hardening, and infrastructure consulting across AWS, GCP, and Azure.",
    accent: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section id="services" className="py-28 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-blue-400/70 tracking-[0.18em] uppercase mb-4">
            What We Build
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-md leading-tight">
              Full-Spectrum Product Engineering
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white/80 transition-colors shrink-0 group"
            >
              All Services
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] rounded-[4px] overflow-hidden border border-white/[0.07]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href="/services"
                  className="group relative flex flex-col bg-[#080c18] p-8 lg:p-9 hover:bg-[#0e1524] transition-colors duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 h-full"
                >
                  {/* Hover gradient accent */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <div
                      className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-[18px] w-[18px] ${service.iconColor}`} />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/62 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-1.5 text-xs text-white/28 group-hover:text-white/68 transition-colors duration-300">
                      Learn more
                      <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
