"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[4px] border border-white/[0.11] bg-[#090d1a] px-8 py-20 sm:px-16"
        >
          {/* Ambient glow - offset left rather than centred */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[200px] rounded-full bg-blue-600/[0.05] blur-[90px] pointer-events-none" />

          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/[0.06] via-blue-400/[0.35] to-white/[0.04]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: headline + copy */}
            <div className="lg:col-span-7">
              <p className="text-[11px] font-medium text-white/25 tracking-[0.16em] uppercase mb-5">
                Start an Engagement
              </p>
              <h2 className="text-4xl sm:text-[48px] font-semibold text-white leading-tight mb-5">
                Every Long-Term Partnership Begins with One Conversation.
              </h2>
              <p className="text-white/38 text-base leading-relaxed max-w-lg">
                INX engagements begin with a structured discovery call - no
                obligation, no pitch deck. We diagnose your requirements and
                determine whether an engagement is the right fit for both
                parties.
              </p>
            </div>

            {/* Right: actions + contact detail */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 rounded-[3px] bg-blue-500 text-white px-6 py-4 text-sm font-semibold hover:bg-blue-400 transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Request a Discovery Call</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-between gap-4 rounded-[3px] border border-white/[0.14] text-white px-6 py-4 text-sm font-medium hover:border-white/28 hover:bg-white/[0.03] transition-all duration-200"
              >
                <span>Learn About INX</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/40" />
              </Link>

              <div className="pt-2 border-t border-white/[0.09]">
                <p className="text-xs text-white/25 mb-1">Direct contact</p>
                <a
                  href="mailto:reach_us@ideanestx.com"
                  className="text-sm text-white/45 hover:text-white/70 transition-colors"
                >
                  reach_us@ideanestx.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
