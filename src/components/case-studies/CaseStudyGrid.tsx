import { getPublishedCaseStudies } from "@/lib/case-studies-data";
import CaseStudyCard from "./CaseStudyCard";

// One large featured story followed by supporting stories, not four
// identical cards. The "lead" is simply the first published entry —
// display order only, not a claim about importance.
export default function CaseStudyGrid() {
  const caseStudies = getPublishedCaseStudies();
  const [lead, ...rest] = caseStudies;

  return (
    <section className="py-10 bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-5">
        <h2 className="sr-only">Case studies</h2>
        {lead && <CaseStudyCard caseStudy={lead} variant="large" />}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((c, i) => (
              <CaseStudyCard key={c.slug} caseStudy={c} delay={i * 0.07} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
