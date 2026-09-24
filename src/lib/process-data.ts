// The INX five-phase delivery process, in its condensed form. The full,
// long-form version lives on /our-process; this is the summary shared by the
// homepage and the per-service pages so it is written once. Phase names match
// /our-process ("Optimisation" — the site's dominant British spelling).

export type ProcessPhase = {
  index: string;
  name: string;
  body: string;
};

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    index: "01",
    name: "Discovery",
    body: "Structured technical and commercial discovery — scope, architecture requirements, and risk identified before engineering begins.",
  },
  {
    index: "02",
    name: "Architecture",
    body: "A full technical specification is produced before production code is written.",
  },
  {
    index: "03",
    name: "Engineering",
    body: "Senior-only delivery against the defined technical specification.",
  },
  {
    index: "04",
    name: "Deployment",
    body: "Production deployment with full observability — monitoring, alerting, and runbook documentation.",
  },
  {
    index: "05",
    name: "Optimisation",
    body: "Post-deployment performance measurement and bottleneck resolution under real production load.",
  },
];
