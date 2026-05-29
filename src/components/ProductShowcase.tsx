"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DashboardMockup from "@/components/visuals/DashboardMockup";
import MobileScreen from "@/components/visuals/MobileScreen";

const CAPABILITIES = [
  "Multi-tenant SaaS architecture",
  "Real-time analytics pipelines",
  "Enterprise API systems",
  "Production deployment infrastructure",
];

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-28 border-t border-white/[0.07] bg-[#060912] overflow-hidden relative">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: "rgba(37,99,235,0.03)",
          filter: "blur(160px)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            {/* Label */}
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.18em] uppercase mb-4">
              SaaS &amp; Platform Engineering
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
              Real Software. Built to Operate.
            </h2>

            {/* Body */}
            <p className="text-sm text-white/55 leading-relaxed max-w-md mb-8">
              INX engineers complete product systems - from multi-tenant SaaS platforms
              and analytics infrastructure to enterprise web applications and API layers.
              Every system is built for production from day one.
            </p>

            {/* Capabilities */}
            <ul className="space-y-3 mb-8">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <div className="h-1 w-1 rounded-full bg-blue-400/50 shrink-0 mt-1.5" />
                  <p className="text-sm text-white/65">{cap}</p>
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <Link
              href="/services"
              className="text-sm text-white/40 hover:text-white/75 transition-colors inline-flex items-center gap-1.5 mt-8 group"
            >
              View Services
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Main dashboard */}
            <div className="relative">
              {/* Glow behind dashboard */}
              <div
                className="absolute -inset-px rounded-[8px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 60%)",
                  filter: "blur(1px)",
                }}
                aria-hidden="true"
              />
              <DashboardMockup />
            </div>

            {/* Mobile accent overlay */}
            <div className="absolute -right-6 -bottom-8 w-28 hidden xl:block">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "rgba(37,99,235,0.12)",
                  filter: "blur(20px)",
                  transform: "scale(0.8)",
                }}
                aria-hidden="true"
              />
              <MobileScreen />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
