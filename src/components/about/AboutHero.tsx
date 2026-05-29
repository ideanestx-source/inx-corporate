"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow - kept intentionally faint */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/[0.07] blur-[140px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6"
        >
          About INX
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.07 }}
          className="text-5xl sm:text-6xl lg:text-[68px] font-semibold leading-[1.05] tracking-tight text-white max-w-3xl mb-7"
        >
          Built to Engineer{" "}
          <span className="text-white/32">What&apos;s Next</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-base sm:text-lg text-white/68 leading-relaxed max-w-2xl"
        >
          INX was established on a straightforward premise: enterprise
          organizations deserve engineering partners that operate at their level -
          technically rigorous, commercially grounded, and built for the long
          term. We are not a consultancy that scales process. We are an
          engineering firm that delivers precision.
        </motion.p>

        {/* Thin rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          style={{ originX: 0 }}
          className="mt-14 h-px bg-gradient-to-r from-blue-500/20 via-white/[0.07] to-transparent"
        />
      </div>
    </section>
  );
}
