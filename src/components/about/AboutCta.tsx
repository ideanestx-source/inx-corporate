"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[4px] border border-white/[0.11] bg-[#090d1a] px-8 py-20 sm:px-16 text-center"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[200px] rounded-full bg-blue-600/[0.06] blur-[90px] pointer-events-none" />

          {/* Accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="relative">
            <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-5">
              Work With INX
            </p>
            <h2 className="text-4xl sm:text-[50px] font-semibold text-white max-w-xl mx-auto leading-tight mb-5">
              Let&apos;s Build Something That Lasts.
            </h2>
            <p className="text-white/62 text-base max-w-md mx-auto mb-10 leading-relaxed">
              Partner with INX to architect, build, and scale your enterprise
              technology platform. Engagements begin with a focused discovery
              conversation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500 text-white px-7 py-3 text-sm font-semibold hover:bg-blue-400 transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-[3px] border border-white/[0.14] text-white/88 px-7 py-3 text-sm font-medium hover:border-white/28 hover:bg-white/[0.05] hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
