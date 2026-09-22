import type { ComponentType } from "react";
import { getPublishedServices } from "@/lib/services-data";
import ServiceCard from "./ServiceCard";
import {
  WebDiagram,
  MobileDiagram,
  SaasDiagram,
  AIDiagram,
  GameDiagram,
  UIUXDiagram,
  CloudDiagram,
  StaffDiagram,
  RecruitmentDiagram,
  TrainingDiagram,
} from "@/components/visuals/ServiceDiagram";

// System Integrations reuses CloudDiagram deliberately — it genuinely
// represents infrastructure/integration work. Game Development, Recruitment,
// and Training use purpose-built visuals (see ServiceDiagram.tsx) rather
// than being forced into the architecture-diagram metaphor.
const DIAGRAM_MAP: Record<string, ComponentType> = {
  "web-development": WebDiagram,
  "mobile-app-development": MobileDiagram,
  "saas-custom-software": SaasDiagram,
  "ai-automation": AIDiagram,
  "game-development": GameDiagram,
  "ui-ux-product-design": UIUXDiagram,
  "system-integrations": CloudDiagram,
  "dedicated-development-teams": StaffDiagram,
  "recruitment-talent-solutions": RecruitmentDiagram,
  "training-technical-enablement": TrainingDiagram,
};

// Editorial rhythm rather than a uniform 10-card grid: a large lead tile,
// a trio, a second large tile (Game Development — a genuine differentiator),
// a second trio, then a closing pair of the two people/process-oriented
// services. Purely presentational grouping — every category from
// services-data.ts still renders, nothing is added, removed, or renamed.
const FIRST_TRIO = ["mobile-app-development", "saas-custom-software", "ai-automation"];
const SECOND_TRIO = ["ui-ux-product-design", "system-integrations", "dedicated-development-teams"];
const CLOSING_PAIR = ["recruitment-talent-solutions", "training-technical-enablement"];

export default function ServiceGrid() {
  const services = getPublishedServices();
  const bySlug = new Map(services.map((s) => [s.slug, s]));

  const firstLarge = bySlug.get("web-development");
  const secondLarge = bySlug.get("game-development");
  const firstTrio = FIRST_TRIO.map((slug) => bySlug.get(slug)).filter((s) => s !== undefined);
  const secondTrio = SECOND_TRIO.map((slug) => bySlug.get(slug)).filter((s) => s !== undefined);
  const closingPair = CLOSING_PAIR.map((slug) => bySlug.get(slug)).filter((s) => s !== undefined);

  return (
    <section id="service-discovery" className="py-10 bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-5">
        {firstLarge && (
          <ServiceCard
            service={firstLarge}
            Diagram={DIAGRAM_MAP[firstLarge.slug]}
            variant="large"
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {firstTrio.map((s, i) => (
            <ServiceCard key={s.slug} service={s} Diagram={DIAGRAM_MAP[s.slug]} delay={i * 0.06} />
          ))}
        </div>

        {secondLarge && (
          <ServiceCard
            service={secondLarge}
            Diagram={DIAGRAM_MAP[secondLarge.slug]}
            variant="large"
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondTrio.map((s, i) => (
            <ServiceCard key={s.slug} service={s} Diagram={DIAGRAM_MAP[s.slug]} delay={i * 0.06} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {closingPair.map((s, i) => (
            <ServiceCard key={s.slug} service={s} Diagram={DIAGRAM_MAP[s.slug]} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
