export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; label?: string; text: string }
  | { type: "pullquote"; text: string }
  | { type: "list"; items: string[] };

export type ArticleSection = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  index: string;
  category: string;
  readingTime: string;
  date: string;
  title: string;
  summary: string;
  executiveSummary: string;
  sections: ArticleSection[];
  related: string[];
};

export const articles: Article[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 1
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "why-operational-context-matters",
    index: "01",
    category: "Systems Architecture",
    readingTime: "8 min read",
    date: "March 2025",
    title: "Why Operational Context Matters in Software Architecture",
    summary:
      "Technical systems built without understanding the operational context they will serve have a structural disadvantage that no amount of competent engineering can fully overcome. The data model reflects what the developer assumed about the business, not what the business actually requires.",
    executiveSummary:
      "Technical systems built without understanding the operational context they will serve have a structural disadvantage that no amount of competent engineering can fully overcome. The data model reflects what the developer assumed about the business, not what the business actually requires. The integration points are designed around the happy path, not the exception handling that occupies a significant portion of operations staff time. By the time these misalignments surface in production, the cost of correction is no longer architectural - it is the accumulated cost of workarounds, manual interventions, and technical debt compounding against a codebase built on the wrong assumptions.",
    sections: [
      {
        id: "the-specification-problem",
        title: "The Specification Problem",
        blocks: [
          {
            type: "p",
            text: "Software specifications describe intended behaviour. They do not describe the operational environment in which that behaviour must function. This distinction is not a documentation problem - it is an epistemological one. The people who write specifications understand the business process in terms of its formal logic: the inputs, the transformations, the expected outputs. What they typically do not articulate - because it exists as tacit knowledge - is the texture of actual operations: which exceptions are common, which edge cases occupy the most staff time, how the formal process relates to the informal work that surrounds it.",
          },
          {
            type: "callout",
            label: "Core Problem",
            text: "Specifications document the logic of a process as understood by its designers. They rarely document the operational reality experienced by the people who run it. These are different things, and the gap between them is where systems fail.",
          },
          {
            type: "p",
            text: "This creates a systematic gap between what engineering delivers and what operations requires. The engineer who builds the system builds it to the specification. They build it well. The code is clean, the architecture is sound, the tests pass. But the specification was an abstraction of the actual work, and the system inherits all of the abstraction's silences. It handles the cases the specification described. It has no mechanism for the cases the specification assumed away.",
          },
        ],
      },
      {
        id: "how-documentation-misleads",
        title: "How Documentation Misleads",
        blocks: [
          {
            type: "p",
            text: "Process documentation compounds the problem rather than resolving it. Documentation tends to be written by subject matter experts who have internalised the exception-handling logic so thoroughly that they no longer perceive it as exceptional. The documented process is the formal path. The actual work is a negotiation between the formal path and the accumulated institutional knowledge of the people running it.",
          },
          {
            type: "pullquote",
            text: "The documented process describes what should happen. The operational reality describes what does happen. Systems built from documentation alone handle the former and are blind to the latter.",
          },
          {
            type: "p",
            text: "When developers read this documentation and build systems against it, they produce technically correct implementations of the wrong model. The system handles every case the documentation mentions. It is entirely unprepared for the cases the documentation omits because they were obvious to the person who wrote it. These omitted cases are, empirically, where operational failures concentrate.",
          },
        ],
      },
      {
        id: "assumptions-encoded-in-architecture",
        title: "Assumptions Encoded in Architecture",
        blocks: [
          {
            type: "p",
            text: "Every architectural decision encodes an assumption about the operational context. The choice of a relational data model assumes that data has predictable shape and consistent relationships. The choice of a synchronous request-response pattern assumes that all parties are available and that latency is acceptable. The choice to validate at ingestion assumes that correcting invalid data at the boundary is preferable to handling it downstream.",
          },
          {
            type: "list",
            items: [
              "Data model shape: what variations in real-world data were never anticipated by the schema",
              "Integration patterns: whether real operational load matches the assumed concurrency model",
              "Validation placement: where in the actual workflow exceptions genuinely originate",
              "State management: whether the system's model of state corresponds to operational reality",
              "Error handling: whether the failure modes that occur in practice were anticipated during design",
            ],
          },
          {
            type: "callout",
            label: "Architecture Principle",
            text: "Architectural decisions are not just technical choices - they are hypotheses about the operational environment. An architecture that has not been validated against actual operational behaviour is a collection of unverified assumptions.",
          },
        ],
      },
      {
        id: "where-gaps-become-visible",
        title: "Where the Gap Becomes Visible",
        blocks: [
          {
            type: "p",
            text: "The gap between architectural assumptions and operational reality becomes visible in predictable places. Support queues accumulate around edge cases the system doesn't handle. Operations staff develop manual workarounds for the cases the system rejects. Data quality erodes as real-world inputs fail validation rules designed for idealised inputs. Integration failures cluster around the conditions that were not included in acceptance testing because they were not in the specification.",
          },
          {
            type: "p",
            text: "These are not symptoms of poor engineering. They are symptoms of engineering conducted without sufficient operational context. The engineers built what they were asked to build, and they built it correctly. The problem is upstream: the requirements that reached engineering were already an incomplete model of the work the system was meant to support.",
          },
          {
            type: "callout",
            label: "Observable Pattern",
            text: "When operations staff spend significant time on workarounds, the system has a context gap, not a bug. Bugs are deviations from specification. Workarounds compensate for correct implementations of insufficient specifications.",
          },
        ],
      },
      {
        id: "discovery-as-engineering",
        title: "Discovery as Engineering Work",
        blocks: [
          {
            type: "pullquote",
            text: "Closing the context gap is not a pre-project activity that precedes real work. It is engineering work, and it deserves the same rigour, resourcing, and structural support as any other phase of delivery.",
          },
          {
            type: "p",
            text: "The practical response to the context gap is operational discovery conducted with engineering rigour. This means embedding engineers in the operational environment before the architecture is fixed - not to gather requirements in the traditional sense, but to observe what the formal process misses. Which exceptions occur frequently enough that staff have named them. Which workarounds are so embedded in daily practice that they are no longer perceived as workarounds. Which data conditions the system will encounter that no specification mentions because they are simply the texture of the domain.",
          },
          {
            type: "list",
            items: [
              "Observe operational work directly - read the existing workarounds and manual interventions as architectural requirements",
              "Interview staff about exceptions, not about the formal process - they know the formal process; you need the informal one",
              "Examine existing data in production systems before defining a schema - let the actual distribution of data shape the model",
              "Map integration failure modes by reviewing incident logs from predecessor systems",
              "Prototype data handling against real samples before committing to validation logic",
            ],
          },
        ],
      },
      {
        id: "designing-for-operational-reality",
        title: "Designing for Operational Reality",
        blocks: [
          {
            type: "p",
            text: "An architecture that accounts for operational context looks different from one that does not. It has more explicit exception handling paths - not because the engineers anticipated every failure, but because the discovery process surfaced the exception categories that occur in practice. It has more flexible data handling at ingestion boundaries, because real-world data does not conform to idealised schemas. It has operational observability built into the design, because the team understands that production conditions will differ from test conditions.",
          },
          {
            type: "p",
            text: "The costs of this approach are real: discovery takes time, it requires access to operational environments, and it delays the start of implementation work. These costs need to be weighed against the cost of discovering context gaps after deployment - which is not just the cost of the fix, but the cost of the workarounds that accumulate while the gap persists, and the cost of rebuilding trust with the operational teams who experienced the failure.",
          },
          {
            type: "callout",
            label: "Final Position",
            text: "The investment in operational context before architecture is not overhead. It is the activity that determines whether the architecture will be adequate to the environment it must serve. Systems built without that investment work in demonstration conditions. They fail in the messy, exception-dense reality of actual operations.",
          },
        ],
      },
    ],
    related: [
      "engineering-discipline-at-scale",
      "technical-debt-compounds-faster-than-growth",
      "deployment-systems-not-release-events",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 2
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "technical-debt-compounds-faster-than-growth",
    index: "02",
    category: "Engineering Practice",
    readingTime: "7 min read",
    date: "November 2024",
    title: "Technical Debt Compounds Faster Than Growth",
    summary:
      "Technical debt in growing systems doesn't accumulate linearly - it compounds against the complexity of the system itself, meaning every new feature added to a debt-laden codebase costs more than the feature before it.",
    executiveSummary:
      "Technical debt in growing systems doesn't accumulate linearly - it compounds against the complexity of the system itself, meaning every new feature added to a debt-laden codebase costs more than the feature before it. The team perceives this as slowing velocity. The business perceives it as an execution problem. Both diagnoses miss the actual cause: an unmanaged debt load whose carrying cost now dominates the delivery capacity of the team.",
    sections: [
      {
        id: "the-compounding-mechanism",
        title: "The Compounding Mechanism",
        blocks: [
          {
            type: "p",
            text: "Technical debt does not accumulate in isolation. It accumulates inside a system that is simultaneously growing in size and complexity. This is the source of its compounding character. Each instance of debt - the function that should be refactored, the abstraction that was never created, the test coverage that was deferred - is a small friction cost. In a simple system, that friction is manageable. In a large, interconnected system, the same debt interacts with every adjacent component that touches it.",
          },
          {
            type: "pullquote",
            text: "Technical debt is not a fixed carrying cost. It is a multiplier on the cost of every change made to the system in its vicinity. As the system grows, so does the multiplier.",
          },
          {
            type: "p",
            text: "The compounding works as follows. A poorly abstracted module must be understood in full by any engineer modifying adjacent functionality. As more functionality is added around it, more engineers spend more time understanding it. Each one risks introducing errors because they are reasoning about a complex, opaque component rather than a clean interface. The debt does not increase in isolation - it increases as a function of system size and team contact with the affected area.",
          },
        ],
      },
      {
        id: "where-debt-originates",
        title: "Where Debt Originates",
        blocks: [
          {
            type: "p",
            text: "Most technical debt does not originate from negligence. It originates from decisions that were correct at the time they were made, given the information available. A data schema designed for ten thousand records is not wrong - it becomes wrong when the system reaches ten million. An abstraction built for three use cases is appropriate - it becomes debt when the seventh use case arrives and the abstraction cannot accommodate it without surgery.",
          },
          {
            type: "list",
            items: [
              "Premature optimisation that hardcodes assumptions now violated by growth",
              "Deferred abstractions - code that should have been generalised but was left specific",
              "Accumulated workarounds for constraints that no longer exist but whose effects persist",
              "Dependency upgrades deferred until the gap becomes a security or compatibility problem",
              "Test coverage gaps that make refactoring risky enough that it is never done",
            ],
          },
          {
            type: "callout",
            label: "Important Distinction",
            text: "The origin of debt matters less than its location. Debt that sits in heavily-trafficked areas of the codebase compounds fast. Debt in rarely-touched code may never compound at all. Triage should be positional, not chronological.",
          },
        ],
      },
      {
        id: "why-debt-becomes-invisible",
        title: "Why Debt Becomes Invisible",
        blocks: [
          {
            type: "p",
            text: "Debt becomes invisible through familiarity. The engineers who have worked with a system longest are the least likely to perceive its debt clearly, because they have adapted their working patterns to accommodate it. They know which functions are dangerous to touch. They know which tests are unreliable and should be ignored when they fail. They know which parts of the codebase require extra review time. This knowledge is valuable, but it also masks the debt load from view.",
          },
          {
            type: "p",
            text: "New engineers joining the team experience debt starkly - the ramp-up time that exceeds what the codebase size would predict is almost always a debt signal. But new engineers are also the least empowered to advocate for debt reduction. They are expected to learn the system as it is, not to question whether it should be different.",
          },
          {
            type: "callout",
            label: "Measurement Proxy",
            text: "New engineer time-to-productivity is one of the most reliable proxies for aggregate debt load. When it takes significantly longer than expected for competent engineers to contribute independently, the codebase is carrying more debt than the team perceives.",
          },
        ],
      },
      {
        id: "the-velocity-tax",
        title: "The Velocity Tax",
        blocks: [
          {
            type: "pullquote",
            text: "Every feature delivered into a high-debt codebase carries a velocity tax that accumulates in the next sprint, not the current one. The cost is real but it is always someone else's problem.",
          },
          {
            type: "p",
            text: "The most operationally damaging aspect of compounding debt is its temporal displacement. The cost of the shortcut taken today does not appear today - it appears as reduced velocity in future sprints, as elevated defect rates in future releases, as extended review cycles when the next engineer needs to modify the affected code. This displacement makes debt invisible in planning cycles that only look one sprint ahead.",
          },
          {
            type: "p",
            text: "The velocity tax manifests in concrete ways: code review cycles lengthen as reviewers spend more time reasoning about complex, poorly-abstracted code. Defect rates increase as engineers make changes without full understanding of the affected system. Incident rates rise as the accumulated edge cases that the debt creates surface under production conditions. Each of these is measurable. Most teams do not measure them in a way that connects them to their root cause.",
          },
        ],
      },
      {
        id: "making-debt-visible",
        title: "Making Debt Visible",
        blocks: [
          {
            type: "p",
            text: "Debt management starts with debt visibility. This requires converting the tacit knowledge that experienced engineers carry - the list of areas they avoid, the components they treat carefully - into explicit, structured records. The goal is not comprehensive documentation of every imperfection. It is a prioritised map of debt by impact: which debt is costing the most in actual delivery effort, and where that cost is growing fastest.",
          },
          {
            type: "list",
            items: [
              "Track code review time by module - sustained high review time indicates high debt density",
              "Map defect origin to source modules over rolling quarters - high-defect modules are debt candidates",
              "Record engineer avoidance patterns - areas that teams work around rather than through",
              "Measure time-to-change for representative tasks in debt-heavy versus clean areas",
              "Identify dependencies that block refactoring - the order of debt reduction often depends on upstream constraints",
            ],
          },
        ],
      },
      {
        id: "debt-reduction-as-planned-work",
        title: "Debt Reduction as Planned Engineering Work",
        blocks: [
          {
            type: "p",
            text: "Debt reduction that happens opportunistically - engineers refactoring when they find time - produces inconsistent results. It tends to address the debt that individual engineers find interesting rather than the debt whose reduction would most improve delivery capacity. It is not prioritised against the work that returns the greatest velocity improvement. And it competes against feature delivery in a competition it will consistently lose, because the short-term cost of refactoring is visible while the long-term cost of not refactoring is deferred.",
          },
          {
            type: "pullquote",
            text: "Debt reduction that is not scheduled is not planned - it is wished for. Organisations that wish for debt reduction get feature delivery and increasing friction. Organisations that plan for it get both.",
          },
          {
            type: "callout",
            label: "Structural Requirement",
            text: "Debt reduction requires a protected allocation in the delivery schedule - a proportion of engineering capacity dedicated to reduction work each sprint, prioritised by impact rather than preference. Without structural protection, feature demand will always displace it.",
          },
        ],
      },
    ],
    related: [
      "engineering-discipline-at-scale",
      "why-operational-context-matters",
      "why-internal-tools-fail-adoption",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 3
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "why-internal-tools-fail-adoption",
    index: "03",
    category: "Internal Systems",
    readingTime: "7 min read",
    date: "December 2024",
    title: "Why Internal Tools Fail Adoption",
    summary:
      "Internal tool adoption failure is diagnosed as a change management problem but is actually an engineering problem - the tool doesn't match how work actually happens.",
    executiveSummary:
      "Internal tool adoption failure is almost always diagnosed as a change management problem: users are resistant to change, training was insufficient, leadership didn't drive adoption. These diagnoses are usually wrong. The actual cause is an engineering problem: the tool was designed against a formal model of work that does not match how work actually happens. Users who appear resistant are often simply rational - the tool makes their work harder, not easier, under the conditions they actually encounter.",
    sections: [
      {
        id: "the-standard-misdiagnosis",
        title: "The Standard Misdiagnosis",
        blocks: [
          {
            type: "p",
            text: "When an internal tool fails to achieve adoption, the post-mortem almost always identifies human factors: users were not trained adequately, change management was insufficient, senior leadership did not drive adoption, the transition timeline was too short. These diagnoses have the appeal of being actionable - more training, better communication, executive sponsorship - and the disadvantage of usually being wrong.",
          },
          {
            type: "pullquote",
            text: "Users are rational. When they avoid a tool that was built for them, the tool is not meeting them where they are. That is an engineering failure, not a people problem.",
          },
          {
            type: "p",
            text: "The change management diagnosis persists because it is the interpretation that requires the least challenge to the engineering decision. Acknowledging that the tool was built wrong requires acknowledging that the requirements gathering was wrong, that the acceptance testing did not reflect real operational conditions, and that significant engineering investment produced something that does not match its intended use. These are uncomfortable conclusions. Attributing failure to user resistance is less expensive - institutionally, if not operationally.",
          },
        ],
      },
      {
        id: "what-requirements-miss",
        title: "What Requirements Gathering Misses",
        blocks: [
          {
            type: "p",
            text: "Internal tool requirements are typically gathered through interviews with subject matter experts and workflow documentation review. Both inputs are structurally biased toward the formal process. Subject matter experts describe work as it is supposed to happen. Documentation captures the designed workflow. Neither reliably surfaces the gap between formal process and actual practice - the accommodations, the workarounds, the informal coordination patterns that make the formal process function.",
          },
          {
            type: "list",
            items: [
              "Exception frequency: what proportion of actual cases deviate from the standard workflow",
              "Workaround patterns: what informal practices compensate for gaps in existing tools",
              "Coordination dependencies: what informal communication is required to complete a formal process",
              "Data quality conditions: what range of input quality the tool will actually encounter",
              "Interruption patterns: how often users must context-switch mid-task and what state that requires",
            ],
          },
          {
            type: "callout",
            label: "Requirements Gap",
            text: "The requirements document for an internal tool describes the process as management understands it. The actual usage conditions are known only to the people who do the work - and they are rarely asked the right questions.",
          },
        ],
      },
      {
        id: "how-tools-become-obstacles",
        title: "How Tools Become Obstacles",
        blocks: [
          {
            type: "p",
            text: "A tool becomes an obstacle when its model of work conflicts with actual work in ways the user cannot resolve within the tool itself. The form that requires fields the user does not yet have. The workflow that cannot be paused and resumed without data loss. The validation that rejects input the user knows is correct. The status model that has no representation for the intermediate states that occur in practice. Each of these forces the user to route around the tool - to hold information outside it, to sequence their work differently to satisfy the tool's requirements, to maintain parallel records that the tool cannot accommodate.",
          },
          {
            type: "p",
            text: "These are not minor inconveniences. They are friction costs that accumulate across every interaction with the tool, every day it is in operation. Users do not articulate them as design flaws - they experience them as the tool being difficult. The diagnosis that follows is typically that users need more training, when what they actually need is a tool that models their work accurately.",
          },
        ],
      },
      {
        id: "the-exception-handling-gap",
        title: "The Exception Handling Gap",
        blocks: [
          {
            type: "pullquote",
            text: "In most operational workflows, exceptions are not edge cases - they are a significant proportion of daily volume. Tools designed only for the standard path fail on a substantial fraction of actual work.",
          },
          {
            type: "p",
            text: "The exception handling gap is the most consistently underestimated problem in internal tool design. It arises from a systematic bias in how work is presented to tool designers. The formal process describes the standard case. The people describing it know the standard case well and describe it in detail. The exceptions are known implicitly - they are handled through institutional knowledge - and are therefore not prominent in the requirements conversation.",
          },
          {
            type: "p",
            text: "The result is a tool that handles the standard case well and cannot accommodate a significant proportion of actual volume. Users who encounter exceptions are forced to choose between forcing their exception into the tool's model - which produces incorrect records - or routing around the tool entirely, which undermines adoption and data integrity simultaneously.",
          },
          {
            type: "callout",
            label: "Design Requirement",
            text: "Designing for exceptions is not a stretch goal - it is a core requirement. Any internal tool that cannot handle the cases that occur regularly will fail adoption in the operational areas where those cases concentrate.",
          },
        ],
      },
      {
        id: "designing-against-real-workflows",
        title: "Designing Against Real Workflows",
        blocks: [
          {
            type: "p",
            text: "Designing internal tools that achieve adoption requires shifting the design input from documented processes to observed practices. This means spending structured time with the people who will use the tool, watching them work in their actual environment, not describing their work in an interview context. It means examining the artefacts of their current practice - the spreadsheets they maintain in parallel to existing systems, the notes they keep about cases the current system cannot handle, the patterns in how they sequence their work to manage its constraints.",
          },
          {
            type: "list",
            items: [
              "Shadow users in their actual work environment before writing a line of requirements",
              "Catalogue all parallel artefacts - spreadsheets, notes, emails - as signals of tool gaps",
              "Map exception frequencies quantitatively, not qualitatively, before designing exception paths",
              "Prototype against real data samples, not constructed test data",
              "Run acceptance testing with actual users on actual cases before considering requirements met",
            ],
          },
        ],
      },
      {
        id: "what-successful-tools-have-in-common",
        title: "What Successful Internal Tools Have in Common",
        blocks: [
          {
            type: "p",
            text: "Internal tools that achieve sustained adoption share characteristics that are not primarily technical. They can be operated partially - a user can start a record, leave it in an intermediate state, and return to it without data loss. They accommodate the real range of input quality - valid data that fails idealised validation rules can be entered, flagged, and resolved without blocking progress. They surface the information users actually need in the context of the task at hand, rather than requiring navigation to separate views for information that is operationally adjacent.",
          },
          {
            type: "p",
            text: "These characteristics emerge from design that was informed by operational reality. They are not features that can be retrofitted easily to a tool designed against a formal process model. The foundation determines what is achievable. A data model that does not accommodate intermediate states cannot be extended to support them without significant restructuring. An interface designed around the standard case cannot be reorganised to surface exception handling without a redesign of the information architecture.",
          },
          {
            type: "callout",
            label: "Key Finding",
            text: "Successful internal tools are built by teams that treated operational discovery as a prerequisite to design - not as a phase that can be compressed or skipped in favour of a faster delivery timeline. The time invested in discovery is recovered in adoption. The time saved by skipping it is spent on retraining, workarounds, and eventual replacement.",
          },
        ],
      },
    ],
    related: [
      "why-operational-context-matters",
      "technical-debt-compounds-faster-than-growth",
      "engineering-discipline-at-scale",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 4
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "engineering-discipline-at-scale",
    index: "04",
    category: "Engineering Practice",
    readingTime: "6 min read",
    date: "February 2025",
    title: "Engineering Discipline at Scale",
    summary:
      "Engineering discipline - code review rigour, specification before development, ownership of outcomes - doesn't survive team growth without deliberate structural support.",
    executiveSummary:
      "Engineering discipline - code review rigour, specification before development, ownership of outcomes - does not survive team growth without deliberate structural support. The practices that a five-person team maintains through proximity and shared context become invisible at fifteen people and absent at fifty. The question is not whether to maintain discipline through growth, but whether to do it deliberately or to watch it erode and spend the next eighteen months recovering the velocity that the erosion costs.",
    sections: [
      {
        id: "what-discipline-means",
        title: "What Discipline Means in Practice",
        blocks: [
          {
            type: "p",
            text: "Engineering discipline is not a cultural value or an attitude toward craft. It is a set of practices that, when applied consistently, produce systems that can be modified with confidence, extended without risk, and handed over without months of knowledge transfer. The practices are concrete: changes are reviewed before they merge; the review is substantive, not ceremonial. Systems are specified before they are built; the specification is complete enough to surface design questions before implementation makes them expensive. Engineers own the outcomes of their work, not just the output.",
          },
          {
            type: "callout",
            label: "Working Definition",
            text: "Discipline is the consistent application of practices that protect future delivery capacity. It is most visible in what teams refuse to do under pressure - skip the review, merge without specification, ship without a rollback plan.",
          },
          {
            type: "p",
            text: "The reason discipline matters is not philosophical. It is operational. Systems built with consistent review practices accumulate fewer defects. Systems built to specifications surface design flaws before they are encoded in implementation. Systems owned by engineers who are accountable for their outcomes are operated with the care that accountability produces. These are measurable differences in operational outcomes, not aspirational ones.",
          },
        ],
      },
      {
        id: "how-teams-lose-discipline",
        title: "How Teams Lose Discipline",
        blocks: [
          {
            type: "p",
            text: "Teams lose discipline through growth that outpaces process. At small scale, discipline is maintained through visibility - everyone sees every change, code review is a natural conversation between people who share context, ownership is obvious because everyone works on everything. As the team grows, this natural enforcement disappears. Changes happen in areas where reviewers lack context. Ownership becomes ambiguous as multiple engineers have touched every component. The review process becomes a queue to be processed rather than a conversation to be had.",
          },
          {
            type: "pullquote",
            text: "Small teams maintain discipline through proximity. Large teams maintain discipline through structure. The transition between the two is where discipline is most commonly lost - and where the most technical debt is created.",
          },
          {
            type: "list",
            items: [
              "Code review quality degrades as reviewer-to-PR ratio increases beyond what allows substantive engagement",
              "Specification practices weaken as timelines tighten and the assumption grows that engineers can figure it out",
              "Ownership blurs as components accumulate multiple contributors without a designated owner",
              "Standards diverge as sub-teams develop local conventions without cross-team alignment",
              "Debt accumulates faster than it is identified because no one has a complete picture of the system",
            ],
          },
        ],
      },
      {
        id: "code-review-as-engineering-work",
        title: "Code Review as Engineering Work",
        blocks: [
          {
            type: "p",
            text: "Code review at scale requires structural support that does not exist naturally. It requires reviewers who have sufficient context in the affected area to provide substantive review - not just syntactic correctness, but whether the approach is appropriate, whether the change introduces coupling that should be avoided, whether the solution is addressing the right problem. At small scale, this context exists naturally through shared work. At scale, it must be maintained deliberately through ownership structures and area expertise.",
          },
          {
            type: "p",
            text: "The failure mode is ceremonial review: changes are reviewed, but the review is a checklist rather than an examination. Obvious problems are caught. Structural problems - the wrong abstraction, the accumulating coupling, the function that should not exist - are not, because the reviewer lacks context and lacks time. Ceremonial review creates a false confidence that is worse than acknowledged absence of review, because it provides the organisational cover for shipping problematic changes.",
          },
          {
            type: "callout",
            label: "Structural Fix",
            text: "Code review quality is a function of reviewer load and reviewer context. Improving quality requires managing both - limiting PR volume per reviewer and ensuring reviewers have area context, not just technical competence.",
          },
        ],
      },
      {
        id: "specification-before-development",
        title: "Specification Before Development",
        blocks: [
          {
            type: "p",
            text: "The practice of specifying systems before building them is consistently undervalued because its benefits are invisible. When specification is done well, the questions it surfaces - the design ambiguities, the interface conflicts, the scale assumptions that need testing - are resolved before implementation. Engineers never see the problems that the specification prevented, only the time they spent on an activity that seemed to produce nothing but a document. When specification is skipped, the same questions surface during implementation, where resolving them costs five to ten times as much.",
          },
          {
            type: "pullquote",
            text: "The return on specification is mostly invisible - it is the cost of changes that were never needed because the design was resolved before the code was written. This invisibility is why specification practices are the first to be cut when timelines compress.",
          },
        ],
      },
      {
        id: "ownership-and-accountability",
        title: "Ownership and Accountability",
        blocks: [
          {
            type: "p",
            text: "Engineering ownership means that a specific person or team is responsible for the behaviour of a system component in production - responsible for its reliability, for responding to its incidents, for understanding its performance characteristics, for making the decision to refactor it when its current form is no longer adequate. Ownership without accountability for outcomes produces components that are owned on paper and neglected in practice. Accountability without ownership produces engineers who are responsible for systems they do not have authority to change.",
          },
          {
            type: "list",
            items: [
              "Every component in production has a named owner or owning team",
              "Owners are responsible for incident response, not just development",
              "Ownership decisions require owner input - architectural changes cannot be imposed without the owner's involvement",
              "Ownership rotation is deliberate and includes knowledge transfer, not just code transfer",
              "Ownership load is tracked - engineers owning too many critical components are a concentration risk",
            ],
          },
        ],
      },
      {
        id: "maintaining-standards-through-growth",
        title: "Maintaining Standards Through Growth",
        blocks: [
          {
            type: "p",
            text: "Standards maintenance through team growth requires making standards explicit before growth makes them invisible. This means documenting the practices the team currently follows - not as an aspirational document but as a record of actual practice - before the team is large enough that practice has diverged. Standards that exist only in the heads of the founding engineers do not survive the addition of engineers who were not there when the practices were established.",
          },
          {
            type: "p",
            text: "The mechanism for maintaining standards is not documentation alone. Documentation describes what should happen. The mechanism that determines what does happen is structural: code review gates that cannot be bypassed, specification templates that must be completed before tickets enter implementation, ownership registries that are maintained as a first-class engineering artefact. These structures are not bureaucratic overhead - they are the replacement for the natural enforcement that proximity and shared context provided at small scale.",
          },
          {
            type: "callout",
            label: "Scaling Principle",
            text: "The practices that keep engineering effective at scale are the same practices that kept it effective at small scale - made explicit, structurally enforced, and staffed. The teams that maintain discipline through growth are the ones that made this transition deliberately rather than discovering it was necessary after the erosion became visible in their delivery metrics.",
          },
        ],
      },
    ],
    related: [
      "technical-debt-compounds-faster-than-growth",
      "deployment-systems-not-release-events",
      "why-operational-context-matters",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ARTICLE 5
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "deployment-systems-not-release-events",
    index: "05",
    category: "Delivery Systems",
    readingTime: "9 min read",
    date: "January 2025",
    title: "Deployment Systems, Not Release Events",
    summary:
      "Most engineering teams treat deployment as an event - something that happens - rather than a system - something that runs. The operational consequences of that distinction are significant.",
    executiveSummary:
      "Most engineering teams treat deployment as an event - something that happens at a defined time, initiated by a specific person, requiring manual coordination and attention - rather than a system - something that runs according to defined rules, produces consistent outcomes, and requires intervention only when those outcomes deviate from expectations. The operational consequences of this distinction accumulate over time: deployment frequency decreases as event coordination cost grows, deployment confidence decreases as the gap between test and production environments widens, and recovery from failures becomes expensive because recovery paths were never designed.",
    sections: [
      {
        id: "the-release-event-mentality",
        title: "The Release Event Mentality",
        blocks: [
          {
            type: "p",
            text: "The release event mentality is identifiable by its symptoms. Deployments are scheduled for low-traffic windows because the team is not confident they can recover quickly from failures. Deployments require a named person responsible for watching the system after the change goes out. Multiple people are on a call or monitoring queue during deployments. Failed deployments are treated as incidents requiring post-mortems rather than expected outcomes requiring automated recovery.",
          },
          {
            type: "p",
            text: "These symptoms are not the product of bad engineering. They are the rational response to deploying into an environment where deployment is high-risk because it has not been engineered to be otherwise. The team has adapted to the risk by adding human oversight at every stage. The cost of that oversight - in engineering time, in deployment frequency, in the cognitive load of release coordination - is real but diffuse, and therefore rarely attributed to its actual source.",
          },
          {
            type: "callout",
            label: "Symptom Pattern",
            text: "Teams that schedule deployments for Friday nights, maintain deploy checklists, and hold post-mortems for rollbacks are not being careful - they are paying the operational tax of a deployment process that was never engineered as a system.",
          },
        ],
      },
      {
        id: "what-a-deployment-system-requires",
        title: "What a Deployment System Actually Requires",
        blocks: [
          {
            type: "p",
            text: "A deployment system is an engineered pipeline that transforms a code change into a running production service with defined, measurable properties: the pipeline produces the same result for equivalent inputs; failures are detected automatically and recovery is initiated without manual intervention; the state of the pipeline at any point is observable; the pipeline can be stopped, rolled back, or rerun without requiring human coordination.",
          },
          {
            type: "pullquote",
            text: "A deployment system is not defined by whether it uses CI/CD tooling. It is defined by whether deployment outcomes are determined by the pipeline or by the people watching it.",
          },
          {
            type: "list",
            items: [
              "Automated validation at every stage - no stage gates that require human judgement to proceed",
              "Defined failure modes with automated recovery paths for each",
              "Observable pipeline state that surfaces the information needed to diagnose failures, not just their occurrence",
              "Rollback that is faster and more reliable than roll-forward under incident conditions",
              "Production parity in pre-production environments - the environments that validate changes must represent production conditions",
            ],
          },
        ],
      },
      {
        id: "pipeline-design-principles",
        title: "Pipeline Design Principles",
        blocks: [
          {
            type: "p",
            text: "Pipeline design follows from the properties the system must provide. Each stage must have a defined pass/fail criterion that is machine-evaluable - not human-judgement-dependent. The ordering of stages must reflect the cost of discovering failures: cheap validations run early, expensive validations run after cheaper ones have passed. The pipeline must be idempotent: running it twice on the same input produces the same result, and a failed run can be restarted from any stage without side effects.",
          },
          {
            type: "p",
            text: "Stage granularity matters. A single test stage that runs all tests for thirty minutes and produces a pass/fail result is less useful than a staged pipeline that provides feedback at five minutes, fifteen minutes, and thirty minutes, with progressively more comprehensive validation at each stage. Early feedback on fast failures is more operationally valuable than complete feedback on all failures, because it preserves developer flow and reduces the cost of each iteration cycle.",
          },
          {
            type: "callout",
            label: "Design Principle",
            text: "Each pipeline stage should answer a specific question as cheaply as possible, in the order those questions need to be answered. The pipeline is a sequence of hypotheses about production readiness, falsified in order of falsification cost.",
          },
        ],
      },
      {
        id: "rollback-as-architecture",
        title: "Rollback as an Architectural Requirement",
        blocks: [
          {
            type: "pullquote",
            text: "Rollback is not a recovery option to be considered after a failure. It is an architectural requirement to be designed before the first deployment. Systems that cannot roll back quickly are systems where deployment is necessarily high-risk.",
          },
          {
            type: "p",
            text: "Rollback capability is determined by architectural decisions made long before deployment systems are designed. Schema migrations that are not backward-compatible make rollback impossible without data loss. State changes that cannot be reversed make rollback produce inconsistent system state. Services that communicate through synchronously-versioned APIs make rollback require coordinated multi-service changes. These architectural constraints accumulate into a deployment profile where rollback is so expensive that it is not a realistic option under incident conditions.",
          },
          {
            type: "p",
            text: "Designing for rollback means treating rollback capability as a constraint on architectural decisions, not a feature to be added to the deployment pipeline. Database migrations must be designed to be deployable in phases that preserve backward compatibility. Service interfaces must be versioned to permit component-level rollback without system-wide coordination. State changes must be designed to be reversible or compensatable. This adds complexity to individual changes. It reduces the cost of failures dramatically.",
          },
          {
            type: "list",
            items: [
              "Database migrations in three phases: expand schema (backward compatible), migrate data, contract schema",
              "API versioning that permits old and new versions to coexist during the rollback window",
              "Feature flags that decouple deployment from activation, permitting rollback without redeployment",
              "Stateless service design that permits individual instances to be replaced without session state loss",
              "Blue-green or canary patterns that maintain a known-good state throughout the deployment process",
            ],
          },
        ],
      },
      {
        id: "confidence-and-frequency",
        title: "Deployment Confidence and Release Frequency",
        blocks: [
          {
            type: "p",
            text: "Deployment confidence and deployment frequency have an inverse relationship under event-based deployment and a positive relationship under system-based deployment. Under event-based deployment, each deployment is high-risk, so frequency decreases to reduce total risk exposure. As frequency decreases, the size of each deployment batch increases. Larger deployments are harder to test, harder to reason about when they fail, and harder to roll back. Risk increases. Frequency decreases further. The dynamic is self-reinforcing.",
          },
          {
            type: "p",
            text: "Under system-based deployment, the inverse dynamic applies. As the pipeline becomes more reliable, confidence in each deployment increases. As confidence increases, the cost of deploying frequently decreases. Smaller, more frequent deployments are easier to test and easier to reason about when they fail. The blast radius of any individual failure is smaller. Confidence increases further. Frequency increases. Each deployment is smaller, and the system improves its ability to handle failures through practice.",
          },
          {
            type: "callout",
            label: "Operational Insight",
            text: "High deployment frequency is not a risk factor under a reliable deployment system - it is a risk reduction mechanism. The teams deploying ten times per day have more practice managing deployment failures than the teams deploying once per week.",
          },
        ],
      },
      {
        id: "the-operational-case",
        title: "The Operational Case for Deployment Discipline",
        blocks: [
          {
            type: "p",
            text: "The investment in deployment system engineering is not an infrastructure project - it is a delivery capacity project. Teams that have built reliable deployment systems spend less time on release coordination, recover from failures faster, can run experiments with lower risk, and maintain higher engineering morale because deployment is not a source of anxiety. These are measurable differences in delivery capacity, not quality-of-life improvements.",
          },
          {
            type: "p",
            text: "The path from event-based to system-based deployment is incremental. It does not require rebuilding the entire pipeline. It requires identifying the highest-cost manual steps in the current process - the ones that consume the most engineering time and carry the most risk - and replacing them with automated, well-specified steps. Each improvement compounds: a reliable test stage makes the next stage more trustworthy, which makes the pipeline as a whole more reliable, which permits more frequent deployment, which builds the operational experience that catches the remaining gaps.",
          },
          {
            type: "pullquote",
            text: "The teams with the best deployment systems did not build them in a single initiative. They built them incrementally, replacing the most expensive manual step first, then the next, until deployment was no longer something that required human vigilance to succeed.",
          },
          {
            type: "callout",
            label: "Starting Point",
            text: "Begin with the step in your current deployment process that causes the most anxiety. Automate it. Measure the result. Repeat. This is not a transformation programme - it is engineering work, applied to the delivery system itself.",
          },
        ],
      },
    ],
    related: [
      "engineering-discipline-at-scale",
      "technical-debt-compounds-faster-than-growth",
      "why-operational-context-matters",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
