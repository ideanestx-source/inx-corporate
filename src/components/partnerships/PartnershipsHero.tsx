"use client";

import { motion } from "framer-motion";
import NetworkGraph from "@/components/visuals/NetworkGraph";

export default function PartnershipsHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[290px] rounded-full bg-blue-600/[0.034] blur-[130px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.029) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 68% 48% at 50% 0%, black 20%, transparent 100%)",
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
              Partnerships
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white mb-8"
            >
              Collaboration Built on{" "}
              <span className="text-white/30">Engineering Alignment.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-base text-white/68 leading-relaxed mb-8"
            >
              INX does not operate a partner programme. Collaboration is
              structured around specific technical or delivery alignment -
              evaluated against engineering depth and operational compatibility,
              not lead volume or ecosystem presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 border-t border-white/[0.09] pt-6"
            >
              {[
                {
                  label: "Partnership Basis",
                  value: "Engineering alignment",
                },
                {
                  label: "Collaboration Model",
                  value: "Scoped, not open-ended",
                },
                {
                  label: "Engagement Length",
                  value: "Defined deliverables always",
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

          {/* Right - NetworkGraph visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="relative border border-white/[0.07] rounded-[4px] overflow-hidden bg-white/[0.01] p-6">
              <NetworkGraph />
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
