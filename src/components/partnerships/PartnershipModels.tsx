"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type PartnershipModel = {
  index: string;
  category: string;
  title: string;
  structure: string;
  model: string;
  ownership: string;
  principle: string;
};

const models: PartnershipModel[] = [
  {
    index: "01",
    category: "Platform & Infrastructure",
    title: "Technology Partnerships",
    structure:
      "INX works with technology vendors, cloud providers, and platform companies where there is a defined technical integration requirement - not a co-marketing arrangement. The partnership produces a specific engineering output: an integration, a reference implementation, or a documented deployment pattern that is of direct operational value to clients of both organisations. The basis for evaluation is whether the technology improves the quality or delivery speed of the systems INX builds.",
    model:
      "INX's role in a technology partnership is engineering, not business development. We do not operate referral arrangements, co-marketing relationships, or logo exchanges under the label of partnership. Where a technology vendor's platform is integrated into a client engagement, that integration is evaluated for its technical merit, documented to INX's standard, and delivered with the same quality commitment as any other component of the system.",
    ownership:
      "Integrations produced within a technology partnership are delivered with full documentation and operational ownership transferred to the end client. INX does not retain any leverage over the technology decisions that result. Client teams are not dependent on INX's continued involvement to operate, extend, or replace integrated systems.",
    principle:
      "A technology partnership that does not produce a specific engineering output of value to end clients is a commercial relationship, not a technical one. INX does not pursue the latter.",
  },
  {
    index: "02",
    category: "Joint Product Development",
    title: "Product Collaboration",
    structure:
      "Product collaboration with INX is a structured engineering engagement, not an informal arrangement. The product's technical requirements are defined in a discovery phase that produces a written specification. Architecture decisions are documented before development begins. Delivery is conducted in defined phases against that specification. The collaborating organisation owns the product; INX is the engineering delivery partner responsible for the technical output.",
    model:
      "Product collaboration operates on the same five-phase model as a standard INX engagement: discovery, architecture, engineering, deployment, and optimisation. The collaborating organisation's team participates at each stage with defined review and approval responsibilities. Joint architecture decisions are documented with the rationale for each. Divergences from the agreed specification are proposed in writing with technical impact assessments before any related engineering work proceeds.",
    ownership:
      "The product is wholly owned by the collaborating organisation from inception. INX does not retain intellectual property in the systems it delivers under a product collaboration arrangement. The codebase, architecture documentation, operational runbooks, and deployment infrastructure are owned by and fully operable by the collaborating organisation's team upon handover.",
    principle:
      "Product collaboration is not a shortcut to delivery capacity. It is a structured engineering engagement that requires the same discipline as a direct client relationship - from both parties.",
  },
  {
    index: "03",
    category: "Engineering Delivery",
    title: "Delivery Partnerships",
    structure:
      "Delivery partnerships position INX as the engineering delivery function for consulting firms, product companies, and technology advisors that hold client relationships but require delivery capacity they do not maintain internally. INX operates transparently in this arrangement: the end client is aware of INX's involvement, the engineering standards are identical to those applied in direct engagements, and the quality commitment is not modified by the presence of an intermediary layer.",
    model:
      "INX does not accept delivery partnerships that require compromise on engineering standards, delivery timelines that are not technically realistic, or communication restrictions that prevent INX from surfacing technical blockers to the people responsible for the engagement. The collaborating partner manages the commercial relationship; INX manages the technical delivery. These are distinct responsibilities with distinct accountability, and they are treated as such - not blended in a way that obscures who is responsible for what.",
    ownership:
      "All code, architecture documentation, and operational runbooks produced in a delivery partnership are owned by the end client - regardless of the commercial structure between INX and the delivery partner. INX's delivery standards apply in full. Delivery partnerships do not modify the ownership model of the technical output.",
    principle:
      "An intermediary layer adds coordination overhead. It is justified only when the partner's client relationship, domain expertise, or commercial position creates genuine value for the end client that INX could not provide directly.",
  },
  {
    index: "04",
    category: "Branded Delivery",
    title: "White-Label Engineering",
    structure:
      "White-label engineering engagements deliver INX's technical work under the collaborating partner's brand and within their client relationship. The end client interacts with the partner's brand. The engineering standards, architecture discipline, and delivery quality are INX's. This arrangement requires a pre-engagement alignment process more thorough than a standard engagement, because the quality commitment is made under a brand that is not INX's.",
    model:
      "White-label engagements require that the partner's delivery processes are compatible with INX's engineering standards before a commercial arrangement is confirmed. Discovery is conducted jointly. Specification sign-off involves both INX and the partner before development begins. Communication to the end client is managed by the partner; all technical decisions are INX's to make, document, and stand behind. INX will not deliver white-label work where the partner's operating model requires INX to compromise on quality or transparency to the end client.",
    ownership:
      "End clients retain full ownership of all delivered systems under white-label arrangements. Partners do not acquire ownership of INX's delivery methodology, internal tooling, or development processes. The commercial terms of the end client relationship are between the partner and their client; INX's obligation is to the engineering quality of what is built and delivered.",
    principle:
      "White-label is a commercial arrangement. It is not a quality arrangement. The standard of engineering delivered is the same regardless of whose name appears on the engagement.",
  },
  {
    index: "05",
    category: "Sustained Engineering",
    title: "Long-Term Product Engineering",
    structure:
      "Long-term product engineering partnerships establish INX as the sustained engineering team for a product - delivered through a series of well-scoped engagements against a defined product roadmap rather than an open retainer. Each engagement has its own discovery phase, specification, and delivery acceptance. The continuity is in the engineering context and the institutional knowledge that accumulates across engagements; not in a contract structure that obligates work without defined deliverables.",
    model:
      "Long-term partnerships develop engineering context that has direct delivery value: the history of architectural decisions and their rationale, the performance characteristics of the system under real load, the data model as it has evolved against business requirements. INX documents this context continuously and treats it as a transferable asset - not as a proprietary dependency that obligates the client's continued engagement. A long-term partnership that produces dependency rather than a product has failed a core requirement.",
    ownership:
      "The client owns the system, its architecture, its engineering history, and the context accumulated across engagements. INX maintains no proprietary knowledge of the system that would make the client's continued engagement necessary for operational continuity. A long-term relationship built on transferred ownership is a durable one; a long-term relationship built on accumulated dependency is a liability on both sides.",
    principle:
      "Continuity of engagement should be earned through consistent delivery quality - not guaranteed by a contract structure that makes disengagement costly.",
  },
];

function ModelEntry({
  model,
  inView,
  delay,
}: {
  model: PartnershipModel;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="border-b border-white/[0.09] last:border-b-0"
    >
      <div className="px-8 lg:px-10 pt-10 pb-0">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[11px] font-mono text-white/20 tracking-[0.22em]">
            {model.index}
          </span>
          <span className="h-px w-4 bg-white/[0.12]" />
          <span className="text-[10px] font-medium text-white/32 tracking-[0.14em] uppercase">
            {model.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-8 max-w-3xl">
          {model.title}
        </h3>

        {/* Structure + Model grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-7">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Engagement Structure
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {model.structure}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Collaboration Model
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {model.model}
            </p>
          </div>
        </div>

        {/* Ownership boundaries */}
        <div className="mb-7 border-t border-white/[0.05] pt-6">
          <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
            Ownership Boundaries
          </p>
          <p className="text-sm text-white/35 leading-relaxed max-w-4xl">
            {model.ownership}
          </p>
        </div>
      </div>

      {/* Operating principle strip */}
      <div className="mx-8 lg:mx-10 mb-10 rounded-[3px] border border-white/[0.09] bg-[#0d1222] px-6 py-5">
        <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
          Operating Principle
        </p>
        <p className="text-sm text-white/55 leading-relaxed">{model.principle}</p>
      </div>
    </motion.div>
  );
}

export default function PartnershipModels() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.03 });

  return (
    <section className="py-24 border-t border-white/[0.09] bg-[#05070e]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
              Partnership Models
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Collaboration Structures. Each Defined Precisely.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              These are not flexible arrangements that can be redefined to fit
              any situation. Each has a specific structure, a defined
              collaboration model, and clear ownership boundaries.
            </p>
          </div>
        </motion.div>

        {/* Models list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {models.map((model, i) => (
            <ModelEntry
              key={model.index}
              model={model}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
