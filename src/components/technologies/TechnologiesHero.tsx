"use client";

import { motion } from "framer-motion";
import DeploymentPipeline from "@/components/visuals/DeploymentPipeline";

export default function TechnologiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full bg-blue-600/[0.038] blur-[140px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.030) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - label + headline + copy + tags */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6"
            >
              Technology
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white mb-8"
            >
              Technology Selected{" "}
              <span className="text-white/30">for Operational Fit.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-base text-white/68 leading-relaxed mb-8"
            >
              INX applies technology against defined operational requirements.
              Framework and runtime selection follows the problem - not the
              calendar year, not the hiring market, not what was used in the
              previous engagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 border-t border-white/[0.09] pt-6"
            >
              {[
                {
                  label: "Selection Basis",
                  value: "Operational fit",
                },
                {
                  label: "Complexity Threshold",
                  value: "Justified by the problem",
                },
                {
                  label: "Ownership Model",
                  value: "Client-transferable at handover",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <p className="text-[10px] text-white/28 uppercase tracking-[0.12em] font-medium">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-white/45 font-medium text-right">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - DeploymentPipeline visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="relative rounded-[5px] border border-white/[0.07] overflow-hidden" style={{ boxShadow: "0 0 40px rgba(59,130,246,0.04)" }}>
              <DeploymentPipeline />
            </div>
          </motion.div>
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
