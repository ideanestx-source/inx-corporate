"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareersCta() {
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
              Apply
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
              If the Work Described Here Is What You Want to Do, the Process Is Straightforward.
            </h2>
            <p className="text-sm text-white/65 leading-relaxed max-w-xl">
              Introduce yourself by email with a specific account of the work
              you have done that is most relevant to the role you are applying
              for. Not a resume summary - a direct explanation of what you
              built, what decisions you made, and what you would do differently.
              That is how the conversation will proceed, so starting with it
              saves time for both parties.
            </p>

            <p className="mt-6 text-xs text-white/25 leading-relaxed max-w-sm">
              INX does not use a formal application system. Contact is through
              email. Response time varies depending on current hiring activity.
              If a role is not currently open, send the email anyway - the right
              fit is worth a longer timeline.
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
                "Introduce yourself with specific work examples",
                "Explain decisions made, not tasks completed",
                "No cover letter required - direct email preferred",
                "Role match assessed through a practical conversation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-[5px] h-1 w-1 rounded-full bg-white/20 shrink-0" />
                  <p className="text-sm text-white/65 leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@ideanestx.com"
                className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-5 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
              >
                info@ideanestx.com
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white/40 hover:text-white/65 transition-colors duration-200"
              >
                About INX
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
