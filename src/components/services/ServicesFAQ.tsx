"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What types of organizations does INX work with?",
    a: "INX works primarily with established enterprises, growth-stage technology companies, and organizations undertaking significant digital transformation. We operate across financial services, logistics, healthcare technology, and enterprise SaaS - typically with organizations that treat engineering quality as a business-critical requirement.",
  },
  {
    q: "How does INX structure its pricing?",
    a: "Engagements are priced based on scope, team composition, and delivery model. Project-based work is quoted against a defined technical specification produced during discovery. Ongoing engagements operate on a monthly retainer. We do not publish rate cards - pricing begins with a scoping conversation.",
  },
  {
    q: "How quickly can an engagement begin?",
    a: "For well-defined project engagements, we can mobilize within two to three weeks of agreement. Dedicated team deployments require a four to six week onboarding period to ensure appropriate team assembly, context transfer, and process alignment. Discovery engagements can begin within one week.",
  },
  {
    q: "What does the discovery process involve?",
    a: "Discovery is a structured, billable engagement - typically two to four weeks - covering technical audit where applicable, architecture requirements, stakeholder interviews, risk assessment, and the production of a detailed technical specification. The output is a document that governs all subsequent engineering work.",
  },
  {
    q: "Does INX provide post-delivery support and maintenance?",
    a: "All project-based engagements include a post-deployment warranty period. Structured ongoing support retainers are available and are typically scoped during the delivery phase. We do not recommend handoffs to unrelated third parties for systems we have architected and built.",
  },
  {
    q: "How does INX integrate with existing internal engineering teams?",
    a: "We operate as a genuine extension of your engineering organization - participating in your ceremonies, adopting your toolchain, and maintaining the same accountability standards as internal engineers. The exact integration model is defined during discovery and documented in the engagement specification.",
  },
  {
    q: "How is intellectual property and confidentiality handled?",
    a: "All intellectual property produced under an INX engagement transfers in full to the client upon settlement. Confidentiality is governed by a Master Services Agreement signed prior to any discovery work. INX does not retain or reuse client-specific architectural decisions or code across engagements.",
  },
  {
    q: "What quality assurance standards does INX apply?",
    a: "All production code is peer-reviewed, test-covered, and documented to an internal quality standard before deployment. Automated test coverage is treated as a delivery requirement, not an optional supplement. We maintain dedicated QA processes within each engagement, and post-deployment observability is part of the standard deployment package.",
  },
];

export default function ServicesFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Frequently Asked
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Questions We Answer Before Work Begins
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are the questions INX is most frequently asked during
              initial conversations. Direct answers - no qualification required.
            </p>
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-white/[0.09] rounded-[3px] overflow-hidden"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={i < faqs.length - 1 ? "border-b border-white/[0.09]" : ""}
            >
              {/* Question row */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 px-7 py-5 text-left bg-[#05070e] hover:bg-[#0d1222] transition-colors duration-200 group"
              >
                <span
                  className={`text-[14px] font-medium leading-snug transition-colors duration-200 ${
                    open === i ? "text-white" : "text-white/65 group-hover:text-white/85"
                  }`}
                >
                  {faq.q}
                </span>
                <span className="shrink-0 mt-0.5">
                  <Plus
                    className={`h-4 w-4 text-white/25 transition-all duration-200 ${
                      open === i ? "rotate-45 text-white/50" : "group-hover:text-white/40"
                    }`}
                  />
                </span>
              </button>

              {/* Answer - CSS height transition */}
              <div
                className={`overflow-hidden transition-all duration-250 ease-in-out ${
                  open === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-7 pb-6 pt-1 text-sm text-white/65 leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
