import Link from "next/link";

const outcomes = [
  {
    metric: "3 wks → 4 days",
    label: "Location onboarding",
    context: "F&B Platform · 40+ locations unified",
  },
  {
    metric: "1.8s → 240ms",
    label: "P95 API latency",
    context: "Compliance SaaS · architecture remediation",
  },
  {
    metric: "78% → 94%",
    label: "SLA compliance",
    context: "Logistics platform · 90 days post-cutover",
  },
  {
    metric: "8 min → 45s",
    label: "Document processing",
    context: "AI pipeline · 2,000+ documents per week",
  },
];

export default function OutcomeStrip() {
  return (
    <div className="border-t border-b border-white/[0.06] bg-white/[0.015] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <p className="text-[10px] font-mono text-white/22 uppercase tracking-widest shrink-0">
            Delivery outcomes
          </p>
          <span className="hidden sm:block h-px flex-1 bg-white/[0.06]" />
          <Link
            href="/case-studies"
            className="text-[11px] text-white/28 hover:text-white/50 transition-colors shrink-0"
          >
            Full case studies →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {outcomes.map((o) => (
            <div key={o.metric} className="bg-[#05070e] px-5 py-5">
              <p className="text-lg font-semibold text-white/85 tracking-tight mb-0.5">
                {o.metric}
              </p>
              <p className="text-[12px] text-white/55 mb-1">{o.label}</p>
              <p className="text-[11px] text-white/22 leading-snug">{o.context}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
