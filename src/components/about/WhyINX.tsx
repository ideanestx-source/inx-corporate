"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import INXModelMatrix from "@/components/visuals/INXModelMatrix";

export default function WhyINX() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - Label + anchor heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-5">
              Why INX Exists
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              A firm built for the gap no one else closes.
            </h2>
          </motion.div>

          {/* Right - Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-6">
              Enterprise organizations consistently face the same challenge:
              ambitious digital strategy that outpaces the ability to execute it
              with precision. Traditional consultancies scale process, not
              expertise. Agencies lack systems depth. Staff augmentation firms
              optimize for headcount, not outcomes.
            </p>
            <p className="text-base text-white/38 leading-relaxed mb-6">
              INX was built to be different. Every engagement is owned by
              engineers who think at system level. Delivery is measured against
              enterprise standards. And the relationship we build with a client
              is treated as a long-term asset - not a closed project.
            </p>
            <p className="text-base text-white/38 leading-relaxed">
              We exist because the best technology organizations in the world
              deserve engineering partners who are held to the same standard.
            </p>
          </motion.div>
        </div>

        {/* Capability matrix */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 border border-white/[0.07] rounded-[3px] overflow-hidden"
        >
          <INXModelMatrix />
        </motion.div>

        {/* Thin separator line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-20 h-px bg-white/[0.06]"
        />
      </div>
    </section>
  );
}
