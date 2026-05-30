const technicalDomains = [
  { domain: "Systems Architecture", detail: "Distributed systems, event-driven design, data modelling, integration architecture" },
  { domain: "Cloud Infrastructure", detail: "AWS, GCP, Azure — container orchestration, IaC, observability pipelines" },
  { domain: "API Engineering", detail: "REST, GraphQL, gRPC — gateway design, versioning, rate limiting, contract testing" },
  { domain: "Database Engineering", detail: "Relational, document, and time-series stores; migration strategy; query optimisation" },
  { domain: "AI & ML Systems", detail: "LLM integration, RAG pipelines, model serving, AI-native product architecture" },
  { domain: "Security Engineering", detail: "Threat modelling, authentication, compliance-aligned system design (SOC 2, HIPAA, PCI)" },
];

const engineeringStandards = [
  { label: "Discovery-First", description: "Architecture is defined before any development work begins. Discovery is a structured, billable engagement." },
  { label: "Senior-Only Delivery", description: "All production systems are architected and delivered by senior engineers. No junior-only workstreams." },
  { label: "Peer-Reviewed Code", description: "Every line of production code is reviewed by a second engineer before merge. Non-negotiable." },
  { label: "Test Coverage Required", description: "Automated test coverage is a delivery requirement. No production deployment without documented coverage." },
  { label: "Full IP Transfer", description: "All intellectual property produced under an INX engagement transfers in full to the client upon settlement." },
  { label: "Documented Architecture", description: "Every system is documented to a standard that enables future engineers to reason about it without the original team." },
];

export default function CompanyEeat() {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.18em] uppercase mb-4">
            Credentials & Standards
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-snug max-w-2xl">
            Engineering expertise and operating standards
          </h2>
        </div>

        {/* Technical domains */}
        <div className="mb-16">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-8">
            Technical Domains
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {technicalDomains.map((item) => (
              <div
                key={item.domain}
                className="bg-[#05070e] px-7 py-6"
              >
                <p className="text-sm font-semibold text-white/80 mb-2">{item.domain}</p>
                <p className="text-[12px] text-white/35 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering standards */}
        <div className="mb-16">
          <p className="text-[11px] font-mono text-white/22 uppercase tracking-widest mb-8">
            Delivery Standards
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineeringStandards.map((item) => (
              <div
                key={item.label}
                className="border border-white/[0.08] rounded-[3px] px-6 py-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60 shrink-0" />
                  <p className="text-[13px] font-semibold text-white/75">{item.label}</p>
                </div>
                <p className="text-[12px] text-white/35 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal entity declaration */}
        <div className="border border-white/[0.07] rounded-[3px] bg-white/[0.02] px-8 py-6">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">
            Legal Entity
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-[11px] text-white/28 mb-1">Registered Name</p>
              <p className="text-sm font-medium text-white/65">IDEANEST X PRIVATE LIMITED</p>
            </div>
            <div>
              <p className="text-[11px] text-white/28 mb-1">Operating Name</p>
              <p className="text-sm font-medium text-white/65">INX</p>
            </div>
            <div>
              <p className="text-[11px] text-white/28 mb-1">Jurisdiction</p>
              <p className="text-sm font-medium text-white/65">India · Global delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
