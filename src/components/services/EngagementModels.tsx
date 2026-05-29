"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Package, UserPlus, Layers } from "lucide-react";

const models = [
  {
    icon: Users,
    index: "01",
    title: "Dedicated Teams",
    description:
      "A full senior engineering team - typically three to eight engineers - operating under your direction, embedded into your organization's tools, ceremonies, and delivery cadence.",
    bestFor: "Sustained product development · Platform teams · CTO augmentation",
  },
  {
    icon: Package,
    index: "02",
    title: "Project-Based Delivery",
    description:
      "Fixed-scope engagements with defined outcomes, structured milestones, and full technical ownership from architecture through production deployment. Scope is agreed. Delivery is documented.",
    bestFor: "Defined initiatives · New platform builds · System migrations",
  },
  {
    icon: UserPlus,
    index: "03",
    title: "Staff Augmentation",
    description:
      "Individual senior engineers placed within your existing team on a monthly engagement basis. Specific domain expertise on demand - without agency overhead or junior-risk.",
    bestFor: "Capability gaps · Specialist requirements · Surge capacity",
  },
  {
    icon: Layers,
    index: "04",
    title: "Long-Term Product Engineering",
    description:
      "A strategic ongoing engineering relationship in which INX serves as the primary technical delivery partner for your product or platform. We operate with full accountability for technical direction.",
    bestFor: "Foundational platform development · Ongoing product engineering",
  },
];

export default function EngagementModels() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
            Engagement Models
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-md leading-tight">
              Four Ways to Engage INX
            </h2>
            <p className="text-sm text-white/32 max-w-xs leading-relaxed">
              Every model is scoped during an initial discovery call. Pricing is
              defined before work begins.
            </p>
          </div>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.index}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.52, delay: i * 0.1 }}
                className="group rounded-[3px] border border-white/[0.09] bg-[#05070e] p-8 hover:bg-[#0d0d0d] hover:border-white/[0.12] transition-all duration-250"
              >
                {/* Icon + index row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-white/[0.13] bg-white/[0.04] group-hover:border-white/[0.18] group-hover:bg-white/[0.06] transition-all duration-250">
                    <Icon className="h-4 w-4 text-white/50" />
                  </div>
                  <span className="text-[11px] font-mono text-white/18 tracking-wider">
                    {model.index}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-semibold text-white mb-3 leading-snug">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/65 leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Best for */}
                <div className="border-t border-white/[0.09] pt-4">
                  <p className="text-[10px] text-white/25 font-medium tracking-[0.12em] uppercase mb-1.5">
                    Best for
                  </p>
                  <p className="text-xs text-white/38 leading-relaxed">
                    {model.bestFor}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
