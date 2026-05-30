"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="contact"
      className="py-24 border-t border-white/[0.08] bg-[#05070e]"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[6px] border border-white/[0.10] bg-[#080c18] px-8 py-20 sm:px-16 text-center"
        >
          {/* Multi-layer background treatment */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-blue-600/[0.07] blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full bg-indigo-600/[0.05] blur-[80px]" />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
              }}
            />
          </div>

          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          {/* Corner accents */}
          <div className="absolute top-4 left-5 w-5 h-px bg-blue-500/30" />
          <div className="absolute top-4 left-5 w-px h-5 bg-blue-500/30" />
          <div className="absolute top-4 right-5 w-5 h-px bg-blue-500/30" />
          <div className="absolute top-4 right-5 w-px h-5 bg-blue-500/30" />
          <div className="absolute bottom-4 left-5 w-5 h-px bg-blue-500/30" />
          <div className="absolute bottom-4 left-5 w-px h-5 bg-blue-500/30" />
          <div className="absolute bottom-4 right-5 w-5 h-px bg-blue-500/30" />
          <div className="absolute bottom-4 right-5 w-px h-5 bg-blue-500/30" />

          <div className="relative">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.18em] uppercase mb-5">
              Start a Conversation
            </p>
            <h2 className="text-4xl sm:text-[52px] font-semibold text-white max-w-2xl mx-auto leading-tight mb-5">
              Ready to Build Your Next Enterprise Platform?
            </h2>
            <p className="text-white/62 text-base max-w-lg mx-auto mb-10 leading-relaxed">
              INX works with enterprises to architect and deliver digital
              transformation at scale. Let&apos;s discuss your goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500 text-white px-7 py-3 text-sm font-semibold hover:bg-blue-400 transition-all duration-200 shadow-[0_0_32px_rgba(59,130,246,0.35)]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-[3px] border border-white/[0.14] text-white/88 px-7 py-3 text-sm font-medium hover:border-white/28 hover:bg-white/[0.05] hover:text-white transition-all duration-200"
              >
                View Services
                <ArrowRight className="h-4 w-4 text-white/50" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
