"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const leaders = [
  {
    initials: "SV",
    name: "P Sai Vignesh",
    title: "Founder & Director",
    bio: "A systems architect and technology leader, Sai Vignesh founded INX with a clear mandate: to build the engineering firm he would have wanted to work with. His focus is long-term technical architecture, building organizations that sustain quality at scale, and client partnerships grounded in engineering accountability.",
    focus: ["Systems Architecture", "Technical Strategy", "Client Partnerships"],
  },
  {
    initials: "MF",
    name: "Mohamed Farid",
    title: "Co-Founder & Director",
    bio: "An engineering executive with deep expertise in delivery operations and technical leadership, Farid co-founded INX to establish a new standard for how enterprise technology projects are executed. His work centers on building the teams, processes, and culture that allow INX to operate at the highest level, consistently.",
    focus: ["Delivery Excellence", "Engineering Culture", "Operations"],
  },
];

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-[#05070e]" id="about">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-md leading-tight">
            Founded and Led by Engineers
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              className="rounded-[3px] border border-white/[0.11] bg-[#090d1a] p-8 lg:p-10"
            >
              {/* Avatar + name row */}
              <div className="flex items-start gap-5 mb-7">
                <div className="shrink-0 h-12 w-12 rounded-[3px] border border-white/[0.12] bg-white/[0.05] flex items-center justify-center">
                  <span className="text-[13px] font-semibold text-white/70 tracking-wide font-mono">
                    {leader.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-[11px] text-white/35 font-medium tracking-[0.12em] uppercase mt-1">
                    {leader.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-white/65 leading-relaxed mb-7">
                {leader.bio}
              </p>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2">
                {leader.focus.map((area) => (
                  <span
                    key={area}
                    className="inline-block rounded-[2px] border border-white/[0.09] bg-white/[0.04] px-3 py-1 text-[11px] text-white/38 font-medium tracking-wide"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
