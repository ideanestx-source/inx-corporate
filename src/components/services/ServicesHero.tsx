"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>

      {/* Dot grid - fades toward bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.032) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: label + headline */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6"
            >
              Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white"
            >
              Full-Spectrum Engineering{" "}
              <span className="text-white/32">for Enterprise Scale</span>
            </motion.h1>
          </div>

          {/* Right: supporting copy + data points */}
          <div className="lg:col-span-5 flex flex-col justify-end pb-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-base text-white/68 leading-relaxed mb-8"
            >
              INX delivers across the full engineering surface - from web
              platforms and AI systems to cloud infrastructure and embedded
              team delivery. Each service is built on the same foundation:
              senior engineers, defined process, and accountability for
              outcomes.
            </motion.p>

            {/* Inline data strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6 border-t border-white/[0.09] pt-6"
            >
              {[
                { value: "7", label: "Service Lines" },
                { value: "5", label: "Engagement Types" },
                { value: "Senior", label: "Engineers Only" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-base font-semibold text-white">{item.value}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.12em] mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          style={{ originX: 0 }}
          className="mt-14 h-px bg-gradient-to-r from-white/[0.10] via-white/[0.05] to-transparent"
        />
      </div>
    </section>
  );
}
