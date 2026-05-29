"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const operationalDetails = [
  {
    label: "Registered Entity",
    value: "IDEANEST X PRIVATE LIMITED",
    note: "Incorporated in India (CIN registered)",
  },
  {
    label: "Delivery Coverage",
    value: "Global",
    note: "Engineering teams operating across time zones",
  },
  {
    label: "Client Time Zones",
    value: "UTC−8 to UTC+5:30",
    note: "Primary client operating range",
  },
  {
    label: "Communication Model",
    value: "Async-first",
    note: "Structured overlap for real-time sessions",
  },
];

export default function OfficePresence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left - editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Operational Presence
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
              Globally Distributed. Operationally Structured.
            </h2>
            <p className="text-sm text-white/65 leading-relaxed mb-4">
              INX operates as a distributed engineering organization. Our
              leadership is headquartered in India, with engineering teams
              operating across time zones to support global client engagements.
            </p>
            <p className="text-sm text-white/32 leading-relaxed">
              All client engagements are managed through a dedicated engagement
              lead who serves as the primary point of contact. Communication
              protocols are defined during discovery and documented in the
              engagement specification.
            </p>
          </motion.div>

          {/* Right - operational data */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.52, delay: 0.12 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-white/[0.09] rounded-[3px] overflow-hidden">
              {operationalDetails.map((item, i) => {
                const isRight = i % 2 === 1;
                const isBottom = i >= 2;
                return (
                  <div
                    key={item.label}
                    className={`bg-[#05070e] px-7 py-7 ${
                      !isRight ? "sm:border-r border-white/[0.09]" : ""
                    } ${!isBottom ? "border-b border-white/[0.09]" : ""}`}
                  >
                    <p className="text-[10px] font-medium text-white/25 tracking-[0.14em] uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="text-[15px] font-semibold text-white/80 mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs text-white/28 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <p className="mt-5 text-xs text-white/35 leading-relaxed">
              INX does not maintain physical client offices. All project
              coordination is conducted remotely through structured communication
              protocols agreed upon during engagement onboarding.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
