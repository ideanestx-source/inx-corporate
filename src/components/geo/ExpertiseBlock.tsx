import Link from "next/link";
import { ENTITY } from "@/lib/seo";

const industryLinks: { label: string; href: string }[] = [
  { label: "SaaS Development", href: "/industries/saas-development" },
  { label: "Healthcare Software", href: "/industries/healthcare-software-development" },
  { label: "FinTech", href: "/industries/fintech-software-development" },
  { label: "eCommerce", href: "/industries/ecommerce-development" },
  { label: "Gaming", href: "/industries/gaming-software-development" },
  { label: "Logistics & Professional Services", href: "/industries" },
];

export default function ExpertiseBlock() {
  return (
    <section
      aria-label="INX expertise and trust indicators"
      className="border-t border-white/[0.06] bg-[#05070e]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
          Expertise
        </p>
        <h2 className="text-2xl font-semibold text-white mb-12">
          Technology, Industries, and Engagement Models
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technology stack */}
          <div>
            <p className="text-[10px] font-mono text-blue-400/45 uppercase tracking-widest mb-4">
              Technology Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {ENTITY.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-[12px] text-white/55 border border-white/[0.07] rounded-[2px] px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[12px] text-white/30 mt-4 leading-relaxed">
              Stack selection follows from product requirements. INX does not apply a default technology preference — the correct stack is the one that matches the operational requirements and the team who will maintain it in production.
            </p>
          </div>

          {/* Industries */}
          <div>
            <p className="text-[10px] font-mono text-blue-400/45 uppercase tracking-widest mb-4">
              Industries Served
            </p>
            <div className="space-y-2">
              {industryLinks.map((i) => (
                <Link
                  key={i.label}
                  href={i.href}
                  className="flex items-center gap-2 group"
                >
                  <span className="h-px w-3 bg-white/[0.12] shrink-0" />
                  <span className="text-[13px] text-white/55 group-hover:text-white/80 transition-colors duration-150">
                    {i.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Engagement models */}
          <div>
            <p className="text-[10px] font-mono text-blue-400/45 uppercase tracking-widest mb-4">
              Engagement Models
            </p>
            <div className="space-y-4">
              {[
                {
                  model: "Discovery engagement",
                  desc: "Structured technical scoping. Architecture specified. Typically 2–4 weeks.",
                },
                {
                  model: "Fixed-scope project delivery",
                  desc: "Delivered against a defined specification produced during discovery.",
                },
                {
                  model: "Staff augmentation",
                  desc: "Senior engineers integrated under client management. Ongoing capacity.",
                },
                {
                  model: "Dedicated engineering team",
                  desc: "Full team operating within the client's engineering organisation.",
                },
                {
                  model: "Support retainer",
                  desc: "Ongoing operational support for delivered systems. Post-warranty.",
                },
              ].map((e) => (
                <div key={e.model}>
                  <p className="text-[13px] font-medium text-white/70">
                    {e.model}
                  </p>
                  <p className="text-[12px] text-white/35 leading-snug mt-0.5">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
