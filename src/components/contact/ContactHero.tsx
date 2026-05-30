"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] rounded-full bg-blue-600/[0.042] blur-[145px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.032) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - headline */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-6"
            >
              Contact
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="text-5xl sm:text-6xl lg:text-[66px] font-semibold leading-[1.04] tracking-tight text-white mb-6"
            >
              Begin a{" "}
              <span className="text-white/32">Conversation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base text-white/68 leading-relaxed max-w-lg"
            >
              INX engagements begin with a structured discovery conversation.
              Fill in the inquiry form below and a member of our leadership team
              will respond directly within two business days.
            </motion.p>
          </div>

          {/* Right - contact details panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <div className="rounded-[3px] border border-white/[0.11] bg-[#090d1a] p-7 space-y-6">
              {/* Primary email */}
              <div>
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
                  General Inquiries
                </p>
                <a
                  href="mailto:info@ideanestx.com"
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  info@ideanestx.com
                </a>
                <p className="text-xs text-white/30 mt-1">
                  Monitored directly by INX leadership
                </p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Secondary / reach us */}
              <div>
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
                  Project Engagements
                </p>
                <a
                  href="mailto:reach_us@ideanestx.com"
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  reach_us@ideanestx.com
                </a>
                <p className="text-xs text-white/30 mt-1">
                  For new project and partnership discussions
                </p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Phone */}
              <div>
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
                  Direct Line
                </p>
                <a
                  href="tel:+919940332502"
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  +91 99403 32502
                </a>
                <p className="text-xs text-white/30 mt-1">
                  Available during India Standard Time business hours
                </p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Response commitment */}
              <div>
                <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
                  Response Time
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  All inquiries receive a response within{" "}
                  <span className="text-white/75 font-medium">
                    two business days.
                  </span>{" "}
                  Complex technical assessments may require additional time.
                </p>
              </div>
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
