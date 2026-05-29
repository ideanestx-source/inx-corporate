"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[4px] border border-white/[0.11] bg-[#090d1a] px-8 py-16 sm:px-14"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-1/3 w-[480px] h-[180px] rounded-full bg-blue-600/[0.048] blur-[85px] pointer-events-none" />

          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/[0.05] via-blue-400/[0.32] to-white/[0.04]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left - editorial statement */}
            <div className="lg:col-span-7">
              <p className="text-[11px] font-medium text-white/25 tracking-[0.16em] uppercase mb-4">
                A Note on How We Work
              </p>
              <h2 className="text-3xl sm:text-[40px] font-semibold text-white leading-tight mb-4">
                We are selective about the engagements we take on. Deliberately.
              </h2>
              <p className="text-white/38 text-sm leading-relaxed max-w-lg">
                INX maintains a limited number of active engagements at any one time.
                This is intentional - it is how we preserve the quality and senior
                attention that our clients require. If we are fully engaged, we will
                tell you. If we are not the right fit, we will tell you that too.
              </p>
            </div>

            {/* Right - direct channels */}
            <div className="lg:col-span-5 space-y-4">
              <Link
                href="#inquiry-form"
                className="flex items-center justify-between gap-4 rounded-[3px] bg-blue-500 text-white px-6 py-4 text-sm font-semibold hover:bg-blue-400 transition-colors duration-150 shadow-[0_0_24px_rgba(59,130,246,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Submit an Inquiry</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-between gap-4 rounded-[3px] border border-white/[0.13] text-white px-6 py-4 text-sm font-medium hover:border-white/25 hover:bg-white/[0.03] transition-all duration-150"
              >
                <span>Review Our Services</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/40" />
              </Link>

              <div className="border-t border-white/[0.09] pt-4 space-y-1.5">
                <p className="text-[10px] text-white/22 uppercase tracking-[0.14em] font-medium">
                  Direct Line
                </p>
                <a
                  href="mailto:reach_us@ideanestx.com"
                  className="block text-sm text-white/45 hover:text-white/70 transition-colors"
                >
                  reach_us@ideanestx.com
                </a>
                <p className="text-xs text-white/35">
                  Read by INX leadership - not a support queue
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
