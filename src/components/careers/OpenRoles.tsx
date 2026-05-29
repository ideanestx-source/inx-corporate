"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Role = {
  index: string;
  department: string;
  title: string;
  expectations: string;
  collaboration: string;
  profile: string;
  workingStyle: string;
};

const roles: Role[] = [
  {
    index: "01",
    department: "Engineering",
    title: "Frontend Engineer",
    expectations:
      "You build production-quality frontend systems using Next.js, React, and TypeScript in strict mode. You have formed opinions about rendering architecture, component design, and performance profiling - and you can justify them under technical review. You do not treat TypeScript errors as warnings. You write code that the engineer who inherits the codebase in six months can understand without asking you for context.",
    collaboration:
      "Direct involvement in architecture decisions for frontend systems. You participate in technical specification review before development begins. You review pull requests with the same rigour you expect applied to your own code. You communicate blockers when they are identified - not at the end of a cycle. You are expected to raise quality concerns directly, including on work that is functionally complete but below the standard the system requires.",
    profile:
      "Three or more years of production React experience. Deep understanding of Next.js rendering models, including SSR, SSG, and React Server Components. TypeScript proficiency at strict mode - you treat the type system as a design tool, not a compliance requirement. You have made architectural decisions that proved incorrect and can describe what you learned without deflection. You have delivered systems that other engineers have maintained, and you understand what makes that go well.",
    workingStyle:
      "You work best with clear technical specifications and defined acceptance criteria. You are more comfortable raising a quality concern directly than shipping work you know is below standard and hoping it passes review.",
  },
  {
    index: "02",
    department: "Engineering",
    title: "Full Stack Engineer",
    expectations:
      "You are equally comfortable reasoning about database schemas, API design, service boundaries, and frontend architecture. You do not default to the same technology stack regardless of the problem. You understand the operational difference between delivering a system and operating one, and you have done both. You take responsibility for the performance and reliability of what you build - not just its functional correctness.",
    collaboration:
      "Full ownership of end-to-end features from specification through production deployment. You participate in architecture reviews across backend and frontend decisions. You are expected to make architectural recommendations, document the reasoning behind them, and stand behind them under technical scrutiny. On relevant engagements, you work directly with clients during technical specification phases. You flag scope and technical risk early - not when delivery is already in motion.",
    profile:
      "Production experience across the stack: PostgreSQL schema design, Node.js or Python service development, React or Next.js frontend. Experience with event-driven architectures or read/write path separation under load. Operational familiarity with deployment environments and monitoring. You have shipped systems that other people maintain and can articulate - specifically - what decisions made that experience good or difficult for the maintaining team.",
    workingStyle:
      "You have a preference for understanding the architecture correctly before writing code rather than refactoring toward correctness after shipping. You document decisions made under uncertainty, not just decisions made with confidence. You are direct in technical disagreements and not defensive when your reasoning is challenged with evidence.",
  },
  {
    index: "03",
    department: "Design & Engineering",
    title: "UI/UX Systems Designer",
    expectations:
      "You design interfaces for operational software - not consumer products optimised for engagement, not marketing pages. You understand data density, cognitive workflow, and the operational difference between making something look polished and making it usable under load. You produce specifications that frontend engineers can implement without interpretation. You understand component-based design systems well enough to reason about their constraints before you push against them.",
    collaboration:
      "You are involved from the operational requirements stage - not after engineering decisions have constrained the design space. You work alongside engineers to produce interface designs that reflect the data model accurately, not designs that require the data model to adapt to your visual decisions. You produce specifications with states, error conditions, empty states, and edge cases documented. A mockup that shows only the happy path is an incomplete specification.",
    profile:
      "Production experience designing interfaces for B2B or operational software - workflow tools, dashboards, administrative interfaces. Proficiency in Figma with the ability to produce developer-ready specifications, not just visual explorations. Understanding of how the interfaces you design are implemented at the component level. You have received critical feedback on design work from engineers and have found that feedback useful rather than adversarial.",
    workingStyle:
      "You are more interested in whether an interface works correctly under operational conditions than whether it renders impressively in a static screenshot. You raise usability concerns even when the client has not flagged them.",
  },
  {
    index: "04",
    department: "Product & Engineering",
    title: "Product Engineer",
    expectations:
      "You operate at the boundary between engineering and product decisions. You can write production code and you can assess whether a feature is worth building at all. You have a bias toward operational simplicity - the right answer is frequently deferring or removing something rather than adding it. You understand that a decision not to build a feature is as much a technical and operational judgment as a decision to build it.",
    collaboration:
      "You work with clients and the engineering team to translate business requirements into written technical specifications. You participate in discovery phases directly. You are responsible for ensuring that what is built reflects the operational requirement - not a technically elegant approximation of it that solves a slightly different problem. You write acceptance criteria that can be verified through a deterministic test, not criteria that require interpretation at the point of review.",
    profile:
      "Engineering background with product delivery experience, or product background with demonstrated technical depth sufficient to write and review production code. Experience facilitating discovery conversations with technically non-specialist clients. Clear, precise written communication - you can explain a technical constraint to a non-technical decision-maker without oversimplifying it. You are comfortable telling a client that what they have asked for will not solve the problem they have described.",
    workingStyle:
      "You ask whether something needs to be built before asking how it should be built. You are more interested in the operational outcome than in the delivery velocity that produced it.",
  },
  {
    index: "05",
    department: "Growth & Partnerships",
    title: "Business Development Executive",
    expectations:
      "You develop client relationships with organisations that have defined technical problems and the operational maturity to engage with a structured discovery process. You qualify, you do not pitch. You understand INX's delivery model well enough to explain discovery, specification, and phased development to a technical or executive audience accurately - without overpromising timelines, misrepresenting scope, or describing capabilities that do not exist.",
    collaboration:
      "You work closely with the technical team to qualify inbound and outbound opportunities. You do not commit technical resources or delivery timelines without engineering input. You manage the commercial relationship from initial contact through to the start of a discovery engagement. You do not compete with the technical team for ownership of an engagement once it has begun - your role transfers to relationship management at that point.",
    profile:
      "Experience developing commercial relationships for technology services or consulting engagements sold to technical or executive buyers. Ability to discuss software architecture with sufficient depth to qualify a lead accurately - you can distinguish between a scope that is realistic for INX and one that is not. Demonstrated track record of building relationships over time rather than closing transactions at volume. You are comfortable declining an opportunity that is not the right fit for INX.",
    workingStyle:
      "You represent INX accurately even when accuracy reduces the probability of a close. A correctly qualified engagement that succeeds is worth more to INX's long-term position than an incorrectly qualified one that fails.",
  },
];

function RoleEntry({
  role,
  inView,
  delay,
}: {
  role: Role;
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
            {role.index}
          </span>
          <span className="h-px w-4 bg-white/[0.12]" />
          <span className="text-[10px] font-medium text-white/32 tracking-[0.14em] uppercase">
            {role.department}
          </span>
        </div>

        {/* Role title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-8 max-w-3xl">
          {role.title}
        </h3>

        {/* Expectations + Collaboration grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-7">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Expectations
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {role.expectations}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
              Collaboration Model
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              {role.collaboration}
            </p>
          </div>
        </div>

        {/* Ideal candidate */}
        <div className="mb-7 border-t border-white/[0.05] pt-6">
          <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-3">
            Ideal Candidate Profile
          </p>
          <p className="text-sm text-white/35 leading-relaxed max-w-4xl">
            {role.profile}
          </p>
        </div>
      </div>

      {/* Working style strip */}
      <div className="mx-8 lg:mx-10 rounded-[3px] border border-white/[0.09] bg-[#0d1222] px-6 py-5">
        <p className="text-[10px] font-medium text-white/25 tracking-[0.16em] uppercase mb-2">
          Working Style
        </p>
        <p className="text-sm text-white/55 leading-relaxed">
          {role.workingStyle}
        </p>
      </div>

      {/* Apply action */}
      <div className="mx-8 lg:mx-10 mb-10 mt-5 flex items-center justify-between">
        <a
          href={`mailto:info@ideanestx.com?subject=Application%20%E2%80%94%20${encodeURIComponent(role.title)}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400/75 hover:text-blue-300 transition-colors duration-150 group"
        >
          Apply for this role
          <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </a>
        <span className="text-[10px] text-white/22 font-mono tracking-wider">
          info@ideanestx.com
        </span>
      </div>
    </motion.div>
  );
}

export default function OpenRoles() {
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
              Open Roles
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Five Roles. Each Described Without Inflation.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <p className="text-sm text-white/32 leading-relaxed">
              Role descriptions state what is actually expected - not what
              sounds appealing in a job listing. If a role is a match, the
              description will read that way. If it is not, the description
              will also make that clear.
            </p>
          </div>
        </motion.div>

        {/* Roles list */}
        <div className="border border-white/[0.09] rounded-[3px] overflow-hidden">
          {roles.map((role, i) => (
            <RoleEntry
              key={role.index}
              role={role}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
