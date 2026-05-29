"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PartnershipsCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border border-white/[0.11] rounded-[3px] px-10 py-14 lg:px-16 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] font-medium text-white/28 tracking-[0.16em] uppercase mb-5">
              Begin the Conversation
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
              If the Collaboration Model Is Clear, the Conversation Can Be Specific.
            </h2>
            <p className="text-sm text-white/65 leading-relaxed max-w-xl">
              INX does not begin partnership conversations with proposals. If
              one of the five models on this page describes a collaboration
              that is technically and operationally relevant to your
              organisation, the starting point is a structured technical
              conversation about alignment - not a commercial discussion about
              terms.
            </p>

            <p className="mt-6 text-xs text-white/25 leading-relaxed max-w-sm">
              Partnership conversations that do not progress to a Technical
              Review and Alignment Assessment within a reasonable timeframe
              are concluded. INX does not maintain speculative partnership
              relationships indefinitely.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-5 flex flex-col justify-center gap-4"
          >
            <div className="space-y-3 mb-6">
              {[
                "Technical alignment assessed before commercial terms",
                "Partnership model selected from five defined structures",
                "First engagement scoped and specified in writing",
                "Long-term fit evaluated through delivery quality",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[5px] h-1 w-1 rounded-full bg-white/20 shrink-0" />
                  <p className="text-sm text-white/65 leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-white/[0.18] bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.09] hover:border-white/30"
              >
                Start the Conversation
                <ArrowRight className="h-3.5 w-3.5 text-white/55" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white/40 hover:text-white/65 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
