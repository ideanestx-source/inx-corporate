import Link from "next/link";
import { ENTITY, ORG_NAME, BASE_URL } from "@/lib/seo";

const serviceLinks: { label: string; href: string }[] = [
  { label: "Custom Software Development", href: "/services" },
  { label: "SaaS Platform Development", href: "/industries/saas-development" },
  { label: "Product Engineering", href: "/services" },
  { label: "Staff Augmentation", href: "/services" },
  { label: "Web Application Development", href: "/services" },
  { label: "AI Systems Integration", href: "/services" },
];

const industryLinks: { label: string; href: string }[] = [
  { label: "SaaS", href: "/industries/saas-development" },
  { label: "Healthcare", href: "/industries/healthcare-software-development" },
  { label: "FinTech", href: "/industries/fintech-software-development" },
  { label: "eCommerce", href: "/industries/ecommerce-development" },
  { label: "Gaming", href: "/industries/gaming-software-development" },
  { label: "All Industries", href: "/industries" },
];

const pillars = [
  {
    label: "Who we are",
    content:
      "A senior engineering organisation headquartered in India. INX is the trading name of IDEANEST X PRIVATE LIMITED. Engagements are staffed with senior engineers — INX does not operate delivery through junior teams.",
  },
  {
    label: "What we do",
    content:
      "Custom software development, SaaS platform engineering, product engineering, staff augmentation, AI systems integration, mobile application development, and cloud infrastructure engineering.",
  },
  {
    label: "Who we serve",
    content:
      "Enterprises, growth-stage technology companies, and digital transformation programmes. Primary sectors: SaaS, healthcare technology, financial services, logistics, eCommerce, and gaming. Clients are located globally.",
  },
  {
    label: "How we deliver",
    content:
      "Discovery before development — architecture is specified before code is written. Engineers are accountable for production outcomes, not just specification compliance. All production code is peer-reviewed, test-covered, and documented.",
  },
];

export default function EntitySummary({ heading }: { heading?: string }) {
  return (
    <section
      aria-label="About INX"
      className="border-t border-white/[0.06] bg-[#05070e]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        {/* Header */}
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-3">
          About INX
        </p>
        <h2 className="text-2xl font-semibold text-white mb-5">
          {heading ?? "Who We Are and What We Do"}
        </h2>

        {/* Entity definition — quotable by AI engines */}
        <p className="text-[15px] text-white/65 leading-relaxed max-w-3xl mb-12">
          {ENTITY.description}
        </p>

        {/* 4-pillar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="border border-white/[0.07] rounded-[3px] bg-[#080c18] px-6 py-5"
            >
              <p className="text-[10px] font-mono text-blue-400/55 uppercase tracking-widest mb-2">
                {p.label}
              </p>
              <p className="text-[13px] text-white/65 leading-relaxed">
                {p.content}
              </p>
            </div>
          ))}
        </div>

        {/* Service links */}
        <div className="mb-10">
          <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-4">
            Services
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="inline-block text-[12px] text-white/50 border border-white/[0.09] rounded-[2px] px-3 py-1.5 hover:text-white/80 hover:border-white/[0.18] transition-colors duration-150"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Industry links */}
        <div>
          <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest mb-4">
            Industries
          </p>
          <div className="flex flex-wrap gap-2">
            {industryLinks.map((i) => (
              <Link
                key={i.label}
                href={i.href}
                className="inline-block text-[12px] text-white/50 border border-white/[0.09] rounded-[2px] px-3 py-1.5 hover:text-white/80 hover:border-white/[0.18] transition-colors duration-150"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
