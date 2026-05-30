export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustrySection = {
  heading: string;
  paragraphs: string[];
};

export type IndustryPage = {
  slug: string;
  title: string;
  eyebrow: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  sections: IndustrySection[];
  capabilities: string[];
  faqs: IndustryFaq[];
  relatedArticleSlugs: string[];
};

export const industryPages: IndustryPage[] = [
  // ─── SaaS Development ────────────────────────────────────────────────────────
  {
    slug: "saas-development",
    title: "SaaS Development",
    eyebrow: "Industry — SaaS",
    metaDescription:
      "Custom SaaS development for companies building subscription products. INX engineers multi-tenant platforms, billing systems, and scalable SaaS architecture.",
    heroHeadline: "SaaS Development",
    heroSubtext:
      "Engineering subscription products that perform under real commercial pressure. From multi-tenant architecture to billing infrastructure, INX builds SaaS platforms designed for long-term product growth — not just the launch milestone.",
    sections: [
      {
        heading: "What SaaS Development Actually Requires",
        paragraphs: [
          "SaaS development is not web application development with a subscription bolt-on. The architectural decisions that govern a SaaS product — how tenants are isolated, how data is partitioned, how the system handles a customer that triples their usage overnight — are engineering decisions that need to be made before the first line of application code is written. Getting them wrong early produces systems that are technically functional but operationally fragile: they work for the first hundred customers and struggle at a thousand.",
          "The failure mode is predictable. A team prioritises feature delivery over foundational architecture. The product launches, gains traction, and then encounters the structural limits of a system that was never designed to be a true multi-tenant platform. Retrofitting multi-tenancy, tenant-level rate limiting, or usage-based billing into an existing system is an order of magnitude more expensive than building it correctly from the start. The engineering cost is real, but the business cost — churn, reliability incidents, feature delays during the retrofit — is typically larger.",
          "INX approaches SaaS development with the architecture scoped to the product's growth model, not just its launch requirements. This means modelling tenant isolation strategies before the data layer is designed, specifying the billing architecture before the subscription flows are built, and establishing observability infrastructure before the first production customer is onboarded. The upfront investment in architectural discipline is recovered at scale.",
        ],
      },
      {
        heading: "Multi-Tenant Architecture and Its Consequences",
        paragraphs: [
          "Multi-tenancy is the defining architectural challenge of SaaS development. The choice between shared-database single-schema, shared-database separate-schema, and database-per-tenant approaches is not a matter of preference — each has distinct implications for cost, isolation, compliance, and the complexity of future migrations. A shared-schema approach minimises infrastructure cost at low tenant counts but creates data isolation risks and complicates compliance requirements. Database-per-tenant provides strong isolation but makes cross-tenant analytics and schema migrations operationally expensive.",
          "The right architecture depends on the product's compliance posture, its anticipated tenant size distribution, and its pricing model. A product sold to enterprise customers with strict data residency requirements has different architectural requirements from a product targeting SMBs at high volume and low ACV. INX scopes the tenancy model to the commercial reality of the product, not the convenience of the implementation. This requires understanding the business before specifying the architecture — the two are inseparable in SaaS.",
          "Beyond data isolation, multi-tenancy affects every layer of the stack: caching strategies, job queue design, webhook delivery, API rate limiting, and operational tooling. A tenant that generates ten times the expected load must be containable without degrading other tenants. A tenant that needs to be offboarded must be removable without manual database surgery. These are operational requirements that must be engineered into the system, not features that can be added after the architecture is established.",
        ],
      },
      {
        heading: "Billing, Subscription, and Revenue Infrastructure",
        paragraphs: [
          "Billing infrastructure is consistently underengineered in SaaS products, with consequences that compound as the product matures. The initial implementation handles the launch pricing model competently. Over time, the product introduces usage-based pricing, annual contracts, volume discounts, trial-to-paid conversions, and enterprise invoicing. Each addition to the pricing model interacts with an existing billing implementation that was designed for simpler requirements. The accumulated complexity becomes a bottleneck that constrains pricing strategy and sales flexibility.",
          "A correctly engineered billing system abstracts the pricing model from the payment processing layer, allowing pricing changes without re-engineering the subscription logic. It handles dunning, failed payment recovery, proration, mid-cycle upgrades and downgrades, and credit management without requiring custom code for each variation. It produces reliable revenue recognition data that the finance function can use without manual reconciliation. These properties require deliberate architectural decisions, not just integration with a billing API.",
          "INX builds billing infrastructure against the product's anticipated commercial evolution, not just the current pricing model. This means identifying the pricing experiments the product team expects to run in the next eighteen months, the enterprise deal structures the sales team will need to support, and the revenue reporting requirements the finance function will impose as the business scales. The billing system is scoped to support that evolution without structural modification.",
        ],
      },
      {
        heading: "SaaS Performance and Reliability at Scale",
        paragraphs: [
          "SaaS reliability requirements are not uniform across the product. The API endpoints that power the core user workflow have different availability requirements from the analytics pipeline or the billing reconciliation job. A reliability architecture that treats all components identically will either over-engineer low-criticality components or under-engineer high-criticality ones. The correct approach is tiered reliability: explicit availability targets per component, infrastructure and monitoring designed to those targets, and incident response procedures calibrated to the impact of each component failing.",
          "Performance in SaaS products degrades characteristically at scale: queries that perform adequately at ten thousand records slow at ten million. Background jobs that complete in seconds at low tenant counts create queue backlogs at high volume. API endpoints that respond within acceptable latency under typical load return timeouts under peak conditions. These degradations are predictable and preventable — but only if the system was instrumented to surface them before they become customer-visible incidents.",
          "INX builds SaaS systems with observability as a first-class engineering requirement, not a retrospective addition. This means structured logging, distributed tracing, and metrics collection designed into the system from the start, with alerting calibrated to the reliability targets of each component. The operational team can identify the source of a performance degradation without manually inspecting logs or reproducing issues in a development environment.",
        ],
      },
    ],
    capabilities: [
      "Multi-tenant architecture design (shared schema, shared DB, database-per-tenant)",
      "Subscription and usage-based billing (Stripe, Paddle, custom)",
      "Authentication and authorisation (SSO, SAML, OAuth 2.0, RBAC)",
      "API-first SaaS platform development",
      "Webhook delivery infrastructure",
      "SaaS onboarding and activation flows",
      "White-labelling and custom domain support",
      "Usage metering and quota enforcement",
      "SaaS analytics and reporting pipelines",
      "Automated dunning and failed payment recovery",
      "Tenant administration and self-serve billing portals",
      "SaaS observability and performance monitoring",
    ],
    faqs: [
      {
        question: "How long does it take to build a SaaS product from scratch?",
        answer:
          "A production-ready SaaS product with core functionality, multi-tenancy, billing, and authentication typically requires four to six months of focused engineering. This timeline assumes a well-scoped product definition, not an evolving brief. Factors that extend the timeline include complex integrations with third-party platforms, regulatory compliance requirements, and late-stage scope changes. A structured discovery and architecture phase before development begins is the most reliable way to produce accurate timeline estimates — and to avoid mid-build architectural rewrites.",
      },
      {
        question:
          "What is the difference between SaaS development and regular web application development?",
        answer:
          "The functional difference is multi-tenancy, billing infrastructure, and operational complexity. A standard web application serves one organisation. A SaaS product serves many simultaneously, each with isolated data, configurable permissions, and independent billing. The architectural decisions required to make this work reliably — data isolation strategy, billing abstraction, API rate limiting, tenant-level observability — are different in character from standard web application engineering. Teams that approach SaaS development as web development with subscription payments added consistently underestimate the architectural work involved.",
      },
      {
        question: "How do you approach multi-tenancy in SaaS architecture?",
        answer:
          "The tenancy model is determined by the product's compliance posture, tenant size distribution, and pricing model — not by default preference. For products with enterprise customers and strict data residency requirements, database-per-tenant provides the strongest isolation at higher infrastructure cost. For high-volume SMB products, a shared-database approach with row-level security is often more appropriate. INX scopes the architecture to the commercial reality of the product, documents the trade-offs explicitly, and ensures the tenancy model can be migrated as the product's customer profile evolves.",
      },
      {
        question: "What technology stack does INX use for SaaS development?",
        answer:
          "Stack selection follows from product requirements, not house preference. For most SaaS products, we work with React or Next.js on the frontend, Node.js, Python, or Go on the backend, and PostgreSQL as the primary data store. Billing is typically handled through Stripe or Paddle. Infrastructure runs on AWS or GCP with Terraform for provisioning. The specific combination is determined during the architecture phase based on the team's existing expertise, the product's performance requirements, and the operational capabilities of the team who will maintain the system in production.",
      },
      {
        question: "Can INX take over an existing SaaS product?",
        answer:
          "Yes. Ongoing SaaS engineering engagements follow a structured onboarding: a technical audit of the existing system to identify debt, architectural constraints, and immediate reliability risks; a period of shadow pairing with existing team members where applicable; and a phased handover that ensures no operational knowledge is lost during the transition. INX does not accept SaaS takeover engagements without the audit phase — the cost of entering a system blind is consistently higher than the time the audit takes.",
      },
    ],
    relatedArticleSlugs: [
      "saas-multi-tenancy-architecture-decisions",
      "how-to-choose-saas-development-partner",
      "technical-debt-compounds-faster-than-growth",
    ],
  },

  // ─── Healthcare Software Development ────────────────────────────────────────
  {
    slug: "healthcare-software-development",
    title: "Healthcare Software Development",
    eyebrow: "Industry — Healthcare",
    metaDescription:
      "Healthcare software development for digital health companies, hospitals, and clinical operations. HIPAA-compliant systems, EHR integration, and patient-facing application engineering.",
    heroHeadline: "Healthcare Software Development",
    heroSubtext:
      "Engineering clinical and operational software for healthcare organisations that cannot tolerate failure. From EHR integration to patient-facing applications, INX builds healthcare systems that meet regulatory requirements and perform in production clinical environments.",
    sections: [
      {
        heading: "Healthcare Software Engineering Constraints",
        paragraphs: [
          "Healthcare software development operates under constraints that have no equivalent in general enterprise software. Patient data carries legal protections that govern not just storage and transmission but access logging, retention schedules, and breach notification obligations. Clinical workflow software must accommodate the exception-dense reality of care delivery — the cases that don't fit the standard pathway, the overrides that clinical staff need in urgent situations, the integrations with legacy systems that were never designed to interoperate. These are not edge cases to be handled later. They are the operating conditions the system must be built for.",
          "The consequence of ignoring these constraints during development is predictable: systems that pass acceptance testing and fail in clinical use. A patient portal that cannot accommodate the data quality variations present in real EHR exports. A scheduling system that cannot handle the exception categories that clinical operations staff deal with daily. A telehealth platform that fails under the load patterns that occur during peak appointment periods. Healthcare software failure is not a technical inconvenience — it affects patient care outcomes and carries regulatory exposure.",
          "INX's approach to healthcare software development begins with operational discovery before architecture is defined. This means understanding the clinical workflows the software must support, the exception categories that clinical and administrative staff manage, and the integration requirements of the existing technology environment. The specification is written against operational reality, not against an idealised process model.",
        ],
      },
      {
        heading: "Data Handling and Compliance in Practice",
        paragraphs: [
          "HIPAA compliance is not a feature set — it is an engineering posture. It requires access controls with audit logging at the individual record level, encryption at rest and in transit with documented key management, breach detection and response procedures, and Business Associate Agreements with every vendor that handles protected health information. A system that implements these requirements correctly but lacks the documentation to demonstrate compliance to an auditor provides incomplete protection. The technical implementation and the compliance documentation are both necessary.",
          "Compliance requirements also shape architecture decisions. Data residency constraints affect where infrastructure can be provisioned. Audit log requirements affect the data model and the storage architecture. Retention and deletion obligations affect how data is structured and how the system handles deletion requests. These are not post-build additions — they are architectural inputs that must be established before the data layer is designed.",
          "Beyond HIPAA, healthcare software must increasingly address state-specific privacy regulations, international data protection requirements for organisations with global patient populations, and emerging requirements around AI-generated clinical content. INX builds compliance infrastructure that is maintainable as the regulatory environment evolves, not just compliant at the point of initial delivery.",
        ],
      },
      {
        heading: "Integration with Clinical and Operational Systems",
        paragraphs: [
          "Healthcare software rarely operates in isolation. Patient data originates in EHR systems. Insurance claims move through clearinghouses. Laboratory results arrive via HL7 interfaces. Appointment data synchronises with practice management systems. The integration landscape of a healthcare organisation is typically a combination of modern APIs and legacy interfaces that predate REST by decades. Building software that integrates reliably with this environment requires understanding the standards, the variations in how those standards are implemented, and the operational patterns of the systems involved.",
          "HL7 v2 and FHIR are the dominant interoperability standards in healthcare, but their implementations vary significantly across EHR vendors. Epic's FHIR API has different capability coverage from Cerner's. HL7 v2 message formats vary by institution, by EHR version, and by interface configuration. A healthcare integration that works against one vendor's sandbox environment does not automatically work against another vendor's production environment. Integration testing must be conducted against real production systems or high-fidelity sandbox environments that accurately represent production behaviour.",
          "INX builds healthcare integrations with explicit handling for the data quality variations and message format inconsistencies that occur in production environments. This means designing ingestion pipelines that validate and normalise incoming data, produce structured error records for messages that cannot be processed automatically, and provide operational tooling for resolving integration failures without engineering intervention.",
        ],
      },
      {
        heading: "Reliability in Healthcare Environments",
        paragraphs: [
          "Healthcare software reliability requirements are driven by clinical impact. A patient portal that is unavailable during business hours inconveniences patients. A clinical decision support system that is unavailable during active care delivery creates risk. The reliability architecture must reflect the clinical criticality of each system component, with infrastructure redundancy, failover procedures, and monitoring calibrated to the impact of each component's failure on patient care.",
          "Clinical workflows are also intolerant of data loss. A system that loses a clinician's documentation entry due to a session timeout or a network interruption creates an adverse event — documentation must be recovered, the clinician must re-enter data, and the incident must be investigated. Healthcare software must be designed to handle interrupted sessions, partial submissions, and connectivity failures in ways that preserve data and allow workflows to resume without data loss.",
          "Maintenance windows, deployment procedures, and infrastructure changes all require clinical operational approval in environments where the software is actively supporting care delivery. INX designs deployment systems for healthcare software with zero-downtime deployment capability, blue-green or canary release strategies, and rollback procedures that can be executed without clinical operational impact. These are not optional features — they are operational requirements of software in clinical production use.",
        ],
      },
    ],
    capabilities: [
      "HIPAA-compliant application architecture",
      "EHR integration (Epic, Cerner, Allscripts — HL7 v2, FHIR R4)",
      "Patient portal and digital front door development",
      "Telehealth platform engineering",
      "Clinical workflow automation",
      "Healthcare data pipelines and analytics",
      "Medical device software integration",
      "Appointment scheduling and referral management systems",
      "Insurance verification and claims workflow engineering",
      "Audit logging and compliance infrastructure",
      "Healthcare API development and interoperability",
      "Patient engagement and remote monitoring applications",
    ],
    faqs: [
      {
        question: "Does INX build HIPAA-compliant healthcare software?",
        answer:
          "Yes. HIPAA compliance is an architectural input for all healthcare software engagements, not a post-build audit. This means access controls and audit logging designed at the data model level, encryption implemented at rest and in transit with documented key management, Business Associate Agreement coverage for every vendor in the data handling chain, and documentation sufficient to support a HIPAA audit. INX does not represent compliance as a checkbox — it is an engineering posture applied throughout the development process.",
      },
      {
        question: "Can you integrate with EHR systems like Epic or Cerner?",
        answer:
          "Yes. INX has experience integrating with Epic, Cerner, and other major EHR platforms via both FHIR R4 APIs and legacy HL7 v2 interfaces. Integration scope and timeline vary significantly based on the EHR vendor's API capability coverage, the specific data types required, and the availability of sandbox access. All healthcare integrations include explicit handling for the data quality variations and message format inconsistencies present in production EHR environments — integration testing against real production systems is a standard part of the engagement.",
      },
      {
        question: "What is the typical timeline for healthcare software development?",
        answer:
          "A production-ready healthcare application with core clinical functionality, HIPAA-compliant infrastructure, and EHR integration typically requires five to eight months depending on integration complexity. Regulatory review periods, security assessments, and clinical validation requirements can extend this timeline and should be planned for explicitly. INX recommends including compliance review time in the project schedule rather than treating it as a separate workstream — compliance requirements that surface late in development are significantly more expensive to address than those identified during the architecture phase.",
      },
      {
        question: "How do you handle healthcare data security beyond HIPAA?",
        answer:
          "HIPAA establishes the floor for protected health information handling. INX designs healthcare systems to exceed that floor where the risk profile of the application warrants it. This includes zero-trust network architecture for systems handling sensitive clinical data, penetration testing as part of the delivery process, threat modelling during the architecture phase, and security incident response procedures documented before the system goes live. State-specific privacy regulations and international data protection requirements are addressed where they apply to the patient population the system serves.",
      },
      {
        question:
          "Do you build both patient-facing and clinical staff applications?",
        answer:
          "Yes. INX builds across the healthcare application spectrum: patient-facing portals and mobile applications, clinical staff workflow tools, administrative and billing applications, and backend integration and data infrastructure. Patient-facing and clinical staff applications have different design constraints — patient applications must be accessible to people with varying digital literacy and device capabilities, while clinical staff applications must support the high-information-density workflows of care delivery without compromising speed. INX designs to each context's requirements rather than applying a single UX approach across different user populations.",
      },
    ],
    relatedArticleSlugs: [
      "why-operational-context-matters",
      "what-to-look-for-custom-software-development-company",
      "engineering-discipline-at-scale",
    ],
  },

  // ─── FinTech Software Development ───────────────────────────────────────────
  {
    slug: "fintech-software-development",
    title: "FinTech Software Development",
    eyebrow: "Industry — FinTech",
    metaDescription:
      "FinTech software development for payment companies, digital banks, and financial services platforms. PCI DSS compliant engineering, open banking integration, and financial data infrastructure.",
    heroHeadline: "FinTech Software Development",
    heroSubtext:
      "Engineering financial systems that operate correctly under commercial pressure. INX builds payment infrastructure, compliance-grade financial software, and data systems for fintech companies that cannot afford correctness failures.",
    sections: [
      {
        heading: "Engineering Financial Systems That Work Under Pressure",
        paragraphs: [
          "Financial software correctness requirements are categorical, not probabilistic. A payment system that processes the correct amount 99.9% of the time is not a payment system that works — it is a system with a known defect rate that will produce incorrect financial outcomes at scale. The engineering standards for financial software reflect this: double-entry accounting logic, idempotent transaction processing, reconciliation infrastructure, and audit trails are not enhancements to a financial system. They are requirements of any system that handles money correctly.",
          "The failure mode for fintech companies that underinvest in financial engineering is characteristically slow and expensive. The system works at low transaction volumes. As volume grows, edge cases in transaction processing accumulate into reconciliation discrepancies. Reconciliation discrepancies require manual investigation. Manual investigation scales with transaction volume but does not scale with engineering output. The operational cost of the reconciliation backlog grows faster than revenue, and the root cause is an accounting architecture that was never designed to produce reliable audit trails at scale.",
          "INX approaches fintech development with financial correctness as a non-negotiable engineering requirement. This means designing transaction processing with idempotency guarantees before building the payment flows, specifying the reconciliation infrastructure before the first payment is processed, and building audit trails that satisfy both operational and regulatory requirements from the point of initial delivery.",
        ],
      },
      {
        heading: "Compliance and Regulatory Architecture",
        paragraphs: [
          "FinTech regulatory compliance is not a legal function — it is an engineering function. PCI DSS cardholder data requirements determine how payment data is stored, transmitted, and accessed. AML and KYC obligations require transaction monitoring infrastructure and identity verification workflows. Open banking regulations mandate specific API formats, consent management systems, and data portability implementations. These requirements shape the data model, the infrastructure architecture, and the operational procedures of a financial system. They must be treated as architectural inputs, not post-build constraints.",
          "The cost of retrofitting compliance into a non-compliant financial system is consistently underestimated. A payment system that was built without cardholder data scope minimisation will require architectural changes — not configuration changes — to achieve PCI DSS compliance. A KYC workflow that was bolted onto an existing user management system will have data model inconsistencies that create compliance gaps. These are not problems that can be resolved through audit preparation. They require engineering work on the underlying system.",
          "INX scopes compliance requirements during the architecture phase and designs systems that are compliant by construction rather than by retrospective remediation. This means working with the organisation's compliance function during architecture — not after delivery — to ensure that regulatory requirements are fully understood before they are encoded in the data model and the application logic.",
        ],
      },
      {
        heading: "Payment Processing and Financial Data Infrastructure",
        paragraphs: [
          "Payment processing infrastructure is more complex than payment gateway integration. A gateway integration handles the payment authorisation. The payment processing system handles the business logic that surrounds it: payment method management, retry logic for failed authorisations, partial payment handling, refund and dispute management, multi-currency support, and the reconciliation of gateway transaction records against internal ledger state. Each of these components has correctness requirements that must be designed and tested explicitly.",
          "Financial data infrastructure — the pipelines, stores, and analytics systems that make financial data usable for operations and reporting — is a separate engineering problem from the transaction processing system. Financial reports must be accurate to the cent, reproducible across time periods, and auditable to the source transaction. Analytics pipelines must handle the data volume of a scaled payment operation without introducing latency that delays reporting. These requirements drive infrastructure choices that are different from general-purpose analytics systems.",
          "INX builds payment and financial data systems with explicit specification of the correctness guarantees provided by each component. This includes documented idempotency properties of transaction endpoints, reconciliation procedures that produce auditable results, and reporting infrastructure that can be validated against raw transaction data by the finance function without engineering assistance.",
        ],
      },
      {
        heading: "Security and Fraud Prevention in Financial Systems",
        paragraphs: [
          "Financial systems are high-value targets for both external attackers and internal fraud. The security architecture of a financial system must address both threat categories. External attack surface reduction requires strict cardholder data scope minimisation, network segmentation, and application-layer controls that prevent injection, authentication bypass, and data exfiltration. Internal fraud prevention requires transaction monitoring, anomaly detection, and segregation of duties in financial operations workflows.",
          "Fraud prevention in consumer-facing financial products requires infrastructure that balances security with user experience. Friction-heavy authentication flows reduce fraud but also reduce conversion. Risk-based authentication — applying additional verification only where the transaction risk profile warrants it — provides better protection at lower friction cost, but requires a risk scoring infrastructure that can assess transaction context in real time without introducing payment latency.",
          "INX designs security architecture for financial systems from the threat model rather than from a checklist of controls. This means identifying the specific attack vectors and internal fraud scenarios relevant to the product, designing controls that address the actual risk rather than controls that satisfy a compliance checkbox, and building monitoring infrastructure that surfaces anomalies in financial behaviour before they become material incidents.",
        ],
      },
    ],
    capabilities: [
      "Payment gateway integration and processing infrastructure",
      "Core banking and ledger system development",
      "KYC and AML workflow engineering",
      "PCI DSS compliant application architecture",
      "Open banking API development (PSD2, FAPI)",
      "Financial data pipelines and reconciliation infrastructure",
      "FX and multi-currency transaction handling",
      "Fraud detection and transaction monitoring",
      "Digital wallet and stored value systems",
      "Credit and lending platform engineering",
      "Financial reporting and audit trail infrastructure",
      "Card programme and issuing infrastructure",
    ],
    faqs: [
      {
        question: "Does INX build PCI DSS compliant payment systems?",
        answer:
          "Yes. PCI DSS compliance is scoped during the architecture phase, not audited after delivery. This means designing cardholder data flows to minimise scope, implementing tokenisation where applicable to reduce the volume of cardholder data the system handles directly, and documenting the compliance architecture in a format suitable for a Qualified Security Assessor review. INX works with the organisation's compliance function throughout the engagement rather than producing a system and then attempting to make it compliant retrospectively.",
      },
      {
        question: "Can you build open banking integrations?",
        answer:
          "Yes. INX builds open banking integrations across PSD2-regulated markets in Europe and equivalent frameworks in other markets. This includes account information service integrations, payment initiation service implementations, and consent management infrastructure. Open banking integration scope varies significantly by market — API capability coverage, authentication requirements, and data format standards differ across geographies and across individual bank implementations of those standards. Integration timelines should account for the variability in bank sandbox quality and the time required to resolve integration issues with individual bank technical teams.",
      },
      {
        question: "How do you approach correctness in financial transaction processing?",
        answer:
          "Transaction processing correctness requires idempotency guarantees at every endpoint that initiates or modifies financial state, double-entry accounting logic in the ledger layer, and reconciliation infrastructure that can detect and surface discrepancies between internal ledger state and external payment processor records. INX designs these properties into the transaction processing architecture before building the application logic on top of it. Correctness is not tested for — it is designed in, then validated through testing against the documented guarantees.",
      },
      {
        question: "Can you integrate with legacy banking infrastructure?",
        answer:
          "Yes. Integration with legacy banking systems — core banking platforms, SWIFT messaging, domestic payment schemes — is a common requirement in fintech engagements. Legacy integration typically requires working with fixed-format message specifications, batch processing patterns, and settlement windows rather than real-time APIs. INX designs integration layers that abstract the constraints of legacy systems from the application layer, allowing the fintech product to present a modern interface to end users while handling the operational realities of legacy banking infrastructure behind the integration boundary.",
      },
      {
        question: "What is the typical engagement structure for fintech development?",
        answer:
          "Fintech engagements follow a structured discovery phase before development begins. The discovery phase covers compliance requirements, integration scope, correctness requirements for financial logic, and security threat modelling. This phase produces an architecture specification that the development team builds against, and a compliance documentation package that supports regulatory review. Development proceeds in phases that prioritise the foundational financial infrastructure — ledger, transaction processing, reconciliation — before building the application features that depend on it.",
      },
    ],
    relatedArticleSlugs: [
      "why-operational-context-matters",
      "deployment-systems-not-release-events",
      "engineering-discipline-at-scale",
    ],
  },

  // ─── eCommerce Development ──────────────────────────────────────────────────
  {
    slug: "ecommerce-development",
    title: "eCommerce Development",
    eyebrow: "Industry — eCommerce",
    metaDescription:
      "Custom eCommerce development for retailers, D2C brands, and marketplace operators. Headless commerce architecture, order management systems, and high-performance storefront engineering.",
    heroHeadline: "eCommerce Development",
    heroSubtext:
      "Engineering eCommerce systems that convert at scale. From headless storefronts to order management infrastructure, INX builds commerce platforms designed to grow with the business — not constrain it.",
    sections: [
      {
        heading: "eCommerce Engineering Beyond Storefront Development",
        paragraphs: [
          "eCommerce development is frequently scoped as storefront development — building the product display, cart, and checkout experience. The operational infrastructure that makes a storefront viable at scale — inventory management, order routing, fulfillment integration, returns processing, and the data pipelines that connect all of these — is treated as a later problem. This sequencing is commercially understandable and operationally expensive. The operational infrastructure determines whether the storefront experience is actually deliverable, and retrofitting it into a system that was not designed to accommodate it is consistently harder than building it correctly from the start.",
          "The symptoms of underinvested eCommerce infrastructure are visible before they become critical. Orders take longer than expected to fulfil because the warehouse management integration is not automated. Return rates are higher than they should be because product data is incomplete or inaccurate. Customer support volume is elevated because order status tracking is not available in real time. Each of these is a data problem or an integration problem, not a storefront problem — and none of them can be solved by improving the storefront.",
          "INX scopes eCommerce engagements to include the operational infrastructure required to make the commerce experience function end-to-end, not just the customer-facing layer. This means understanding the fulfilment model, the inventory management requirements, and the returns process before writing a line of storefront code — and designing systems where all three work together rather than in operational isolation.",
        ],
      },
      {
        heading: "Inventory, Order, and Fulfilment System Architecture",
        paragraphs: [
          "Inventory management in multi-channel eCommerce is a distributed state problem. A single SKU may be available through a DTC storefront, a marketplace, a retail partner, and a physical retail location simultaneously. Overselling occurs when inventory allocation is not synchronised across channels in real time. The technical solution — a centralised inventory service with real-time reservation and allocation — is well understood. The operational challenge is designing it to accommodate the specific channel mix, the vendor lead times, and the inventory buffer policies of the business.",
          "Order management architecture must accommodate the full order lifecycle: placement, payment capture, fraud review, inventory reservation, fulfillment routing, shipment, and post-delivery events including returns and exchanges. Each state transition has business logic — how fraud scoring results affect fulfillment routing, how back-orders are handled, how split shipments are managed — that must be explicitly specified and engineered, not inferred from the platform's default behaviour. Platforms provide the infrastructure; the business logic must be designed.",
          "Fulfillment integration — the connection between the order management system and the warehouse, 3PL, or drop-ship supplier — is the integration that most directly affects the customer experience and is most commonly the weakest link in eCommerce operations. A robust fulfillment integration handles order transmission, acknowledgement, status updates, exception notifications, and shipment confirmation with explicit error handling and operational tooling for resolving exceptions without engineering intervention.",
        ],
      },
      {
        heading: "Performance and Conversion in eCommerce Systems",
        paragraphs: [
          "eCommerce performance is a revenue metric. Page load time directly correlates with conversion rate and bounce rate across every category of eCommerce product. A site that loads in one second converts measurably better than the same site loading in three seconds. The performance gap is not a user experience preference — it is a commercial difference that is quantifiable from analytics data. Performance engineering is therefore commercial engineering, not infrastructure overhead.",
          "Performance in eCommerce systems degrades at predictable points: product catalogue queries that perform adequately at ten thousand SKUs slow at a hundred thousand. Search responses that return in milliseconds under normal load spike during peak periods. Checkout processes that complete quickly for most users fail or slow for the subset of users whose cart triggers complex promotion rule evaluation. These degradations must be identified through load testing under realistic conditions before they occur in production.",
          "INX builds eCommerce systems with performance budgets defined at the start of development, not measured after launch. This means establishing response time targets for product pages, search results, and checkout flows before the architecture is finalised, and validating against those targets through automated performance testing as part of the delivery pipeline. Performance regressions are caught before they reach production, not diagnosed after they affect conversion.",
        ],
      },
      {
        heading: "Headless Commerce and Custom Platform Strategy",
        paragraphs: [
          "Headless commerce architecture — separating the commerce backend from the presentation layer — provides significant flexibility for brands with complex storefront requirements or multi-channel distribution strategies. A headless approach allows the storefront to be rebuilt, redesigned, or extended without modifying the commerce infrastructure. It allows the same commerce infrastructure to power a web storefront, a mobile application, and a kiosk interface from a single API layer. These benefits are real, but they come with engineering cost: headless architecture requires more upfront investment to build and more operational complexity to maintain than a tightly-coupled platform.",
          "The headless vs. platform-native decision is driven by the brand's specific requirements rather than by trend. Brands with standard commerce requirements and limited technical resources often get better outcomes from a well-configured platform-native approach. Brands with complex customisation requirements, high-performance demands that platform-native rendering cannot meet, or multi-channel distribution needs that require a single commerce API often get better long-term outcomes from headless. INX provides the analysis to make this decision correctly rather than defaulting to either approach.",
          "Custom eCommerce platform development — building commerce infrastructure from first principles rather than on top of an existing platform — is justified in limited circumstances: when the commerce model is sufficiently differentiated that existing platforms cannot accommodate it, or when the transaction volume and customisation requirements make platform licensing costs and constraints commercially prohibitive. INX evaluates this option honestly, including the total cost of building, maintaining, and operating a custom platform against the cost of the platform-native alternatives.",
        ],
      },
    ],
    capabilities: [
      "Headless commerce architecture (Next.js, Remix, custom)",
      "Order management system development",
      "Inventory management and multi-channel allocation",
      "3PL and warehouse management system integration",
      "High-performance product catalogue and search",
      "Custom checkout and payment flow engineering",
      "Multi-vendor marketplace platform development",
      "Returns, exchanges, and refund workflow automation",
      "Promotion and discount rule engine development",
      "eCommerce analytics and reporting pipelines",
      "Shopify and commercetools customisation and extension",
      "Customer account and loyalty programme systems",
    ],
    faqs: [
      {
        question:
          "Should we build custom eCommerce or use Shopify or another platform?",
        answer:
          "Platform-native is the correct starting point for most eCommerce businesses. Shopify, commercetools, and similar platforms provide mature commerce infrastructure that would take years to replicate from scratch. The cases where custom development makes sense are: commerce models that existing platforms cannot accommodate, performance requirements that platform-native rendering cannot meet, or customisation requirements so extensive that the total cost of platform customisation exceeds the cost of a custom build. INX provides an honest evaluation of both options, including the total long-term cost of each, before recommending an approach.",
      },
      {
        question: "What is headless commerce and when does it make sense?",
        answer:
          "Headless commerce separates the commerce backend (products, pricing, inventory, orders) from the presentation layer (the storefront). The storefront is built as a custom application that fetches data from the commerce API rather than being rendered by the commerce platform itself. This provides full design control, better performance, and multi-channel capability. It makes sense for brands with complex design requirements that platform templates cannot accommodate, high-traffic operations where storefront performance is a revenue concern, or multi-channel operations that need to serve web, mobile, and other surfaces from a single API.",
      },
      {
        question: "Can INX build a multi-vendor marketplace?",
        answer:
          "Yes. Multi-vendor marketplaces require several infrastructure components beyond the standard eCommerce stack: vendor onboarding and management, product listing moderation, commission calculation and settlement, dispute resolution workflows, and vendor analytics. The marketplace model also affects the payment infrastructure — marketplace payments require split payment handling and payout management that is more complex than single-vendor commerce. INX designs marketplace architecture to accommodate these requirements from the start rather than attempting to extend a single-vendor platform into a marketplace model.",
      },
      {
        question: "How do you handle eCommerce performance at scale?",
        answer:
          "Performance engineering starts during architecture with defined response time targets for every customer-facing endpoint. Product pages, search results, and checkout flows each have distinct performance characteristics and distinct optimisation strategies. Product page performance is primarily a rendering and caching problem. Search performance is primarily a query optimisation and index design problem. Checkout performance is primarily a third-party dependency problem. Each is addressed with the appropriate technique. Load testing against production-representative traffic profiles validates performance targets before launch.",
      },
      {
        question: "Can you migrate an existing eCommerce platform to a new one?",
        answer:
          "Yes. Platform migration is a structured engagement: data migration (products, customers, orders, content), integration re-mapping (payments, fulfilment, ERP), and storefront rebuild or re-implementation. The risks in eCommerce migration are primarily in the data migration — product data quality issues, order history completeness, customer account migration — and in the integration re-mapping, where new platform integration patterns may not map cleanly to existing operational workflows. INX conducts a pre-migration data audit and integration inventory to identify risks before the migration begins, not during it.",
      },
    ],
    relatedArticleSlugs: [
      "technical-debt-compounds-faster-than-growth",
      "why-internal-tools-fail-adoption",
      "when-to-build-custom-software",
    ],
  },

  // ─── Gaming Software Development ────────────────────────────────────────────
  {
    slug: "gaming-software-development",
    title: "Gaming Software Development",
    eyebrow: "Industry — Gaming",
    metaDescription:
      "Gaming software development for studios and game companies. Multiplayer backend infrastructure, game economy systems, real-time matchmaking, and live operations engineering.",
    heroHeadline: "Gaming Software Development",
    heroSubtext:
      "Engineering the backend infrastructure that games run on. From real-time multiplayer systems to game economy and live operations, INX builds the server-side systems that keep games online, balanced, and commercially viable.",
    sections: [
      {
        heading: "Engineering Game Systems That Scale",
        paragraphs: [
          "Game backend engineering is distinct from enterprise backend engineering in one critical dimension: load patterns. Enterprise systems experience predictable load that scales gradually with business growth. Games experience load spikes that are orders of magnitude above baseline, correlated with content releases, streamer coverage, and viral distribution events. A game that is engineered for its launch audience and experiences a sudden spike in player acquisition will either handle that spike or suffer the visible operational failure of going down at the moment of maximum commercial opportunity.",
          "The architectural response to unpredictable load is horizontal scalability: systems designed to add capacity in response to demand without requiring manual intervention or architectural changes. This is a standard infrastructure requirement in theory. In practice, many game backends are built on architectures that have implicit scaling limits: database designs that do not shard cleanly, stateful game server architectures that make horizontal scaling difficult, or synchronous service dependencies that become bottlenecks under load. Identifying and resolving these limits before they affect players requires deliberate architectural review at the design stage.",
          "INX designs game backend systems with the expected peak-to-average load ratio as a core architectural input. This means specifying the scaling strategy for each system component before building it, load-testing against realistic peak scenarios before launch, and establishing operational runbooks for the scaling events that occur when a game achieves unexpected viral distribution. The goal is a backend that handles success, not just steady-state operation.",
        ],
      },
      {
        heading: "Backend Infrastructure for Online and Multiplayer Games",
        paragraphs: [
          "Multiplayer game infrastructure has requirements that have no equivalent in standard web application development. Real-time state synchronisation between players requires low-latency data paths that are fundamentally different from the request-response patterns of web services. Matchmaking systems must balance player skill, latency, and session availability across a dynamic pool that changes with every match completion. Anti-cheat infrastructure must detect manipulation without introducing latency that degrades the experience for legitimate players. Each of these is a specialised engineering problem with established solution patterns and specific implementation tradeoffs.",
          "Game server architecture for session-based multiplayer must address server allocation, session lifecycle management, and graceful handling of player disconnections and reconnections. Dedicated server architectures provide the highest performance and lowest latency but require server allocation infrastructure. Relay architectures are simpler to operate but introduce latency that is unacceptable in fast-paced games. Cloud gaming infrastructure from platform providers offers a middle path for some game types. The correct choice depends on the game's latency requirements, geographic player distribution, and operational budget.",
          "Persistent world and live service games add complexity: game state must persist across sessions, player progression must be maintained, and the game world must remain consistent across concurrent players. These requirements drive data architecture decisions — how player state is stored and retrieved, how world state is partitioned, how conflict resolution is handled when concurrent players modify adjacent game state. The data architecture for a persistent world game is a meaningful engineering problem in its own right.",
        ],
      },
      {
        heading: "Game Economy and Monetisation Systems",
        paragraphs: [
          "Game economy design is the commercial foundation of a live service game. The virtual economy — how virtual currency is acquired and spent, how item scarcity is managed, how progression pacing affects purchase motivation — determines both player retention and revenue. An economy that is too generous eliminates the commercial opportunity. An economy that is too extractive drives churn. The correct balance is specific to the game's genre, audience, and competitive context, and it must be maintained through active monitoring and adjustment as player behaviour evolves.",
          "The technical infrastructure supporting a game economy must provide accurate tracking of every virtual currency transaction and item acquisition, real-time economy dashboards that surface the metrics required to manage the economy actively, and the ability to adjust economy parameters — drop rates, prices, progression pacing — without requiring a client update. Server-authoritative economy validation prevents exploitation, but must be implemented without introducing latency that degrades the purchase experience.",
          "Monetisation systems — in-app purchase processing, subscription management, and platform-specific payment flows — must handle the specific requirements of each platform the game is distributed on. Apple and Google have distinct review requirements, payment processing constraints, and subscription management behaviours. Real-money-to-virtual-currency conversions carry regulatory implications in some markets. INX designs monetisation infrastructure that addresses these requirements explicitly rather than discovering them during platform review.",
        ],
      },
      {
        heading: "Cross-Platform Development and Live Operations",
        paragraphs: [
          "Cross-platform games — titles that run on mobile, PC, and console simultaneously — require backend infrastructure that abstracts platform-specific differences while providing each platform's players with a consistent experience. Cross-platform progression, cross-platform matchmaking, and cross-platform friend systems each have platform-specific constraints — Apple and Google have specific requirements around cross-platform login that affect how accounts are linked, and console platforms have certification requirements that affect feature implementation.",
          "Live operations is the ongoing operational discipline of maintaining and growing a live game. Content updates, seasonal events, balance patches, and promotional campaigns each require backend infrastructure to deliver, monitor, and measure. The infrastructure for live operations — content management systems for game content, event scheduling and delivery systems, live analytics and player behaviour tracking, A/B testing infrastructure — is distinct from the core game infrastructure but equally important for a game that expects to generate revenue beyond its launch window.",
          "The organisational structure of live operations — who creates content, who reviews it, how it is tested before being delivered to production players — must be supported by tooling designed for the people doing that work. Content creators should not need engineering support to schedule a promotional event. Balance changes should be testable in a staging environment before they reach live players. Player targeting for promotional offers should be configurable by the operations team without requiring a data engineering engagement. INX designs live operations tooling to support the operations team's actual workflow, not the tooling that is easiest to build.",
        ],
      },
    ],
    capabilities: [
      "Multiplayer game server architecture",
      "Real-time matchmaking and session management",
      "Game backend API development",
      "Virtual economy and in-game item systems",
      "Anti-cheat server-side validation",
      "Cross-platform account and progression systems",
      "Leaderboard and competitive ranking infrastructure",
      "Live operations tooling and content management",
      "Player analytics and behaviour tracking",
      "In-app purchase and subscription infrastructure",
      "Game data pipelines and economy analytics",
      "Cloud gaming infrastructure and DevOps",
    ],
    faqs: [
      {
        question: "Do you build game clients or primarily backend systems?",
        answer:
          "INX focuses on game backend engineering — the server-side systems that game clients connect to. This includes multiplayer infrastructure, game APIs, economy systems, authentication, analytics, and live operations tooling. We do not build game clients or game engines. For studios building a client that requires a sophisticated backend, INX engineers the backend to the API contract required by the client. For studios that have client engineers but lack backend expertise, this is the most common engagement structure.",
      },
      {
        question: "How do you handle real-time multiplayer at scale?",
        answer:
          "Real-time multiplayer at scale requires architecture decisions that are different from standard web application scaling. Game server allocation must respond to player demand dynamically — standing up new game server instances in response to matchmaking demand and releasing them when sessions complete. Session state must be managed to handle player disconnections and reconnections gracefully. The network layer must minimise latency between players, which typically means deploying game server infrastructure in multiple regions close to the player population. INX designs multiplayer infrastructure with realistic peak load assumptions and load-tests against those assumptions before launch.",
      },
      {
        question: "How do you approach anti-cheat in game systems?",
        answer:
          "Server-authoritative game logic is the foundational anti-cheat technique: game state that affects other players is computed on the server and cannot be manipulated by client-side modifications. For fast-paced games where full server authority is not compatible with acceptable latency, server-side validation of client-reported actions — detecting statistical impossibilities in reported movement, aim, or action timing — is implemented alongside client-side detection. INX designs anti-cheat systems that are specific to the game's mechanics and the cheat vectors that are realistic for the player population, rather than applying generic solutions.",
      },
      {
        question: "Can you build cross-platform games that work on mobile and PC?",
        answer:
          "The backend infrastructure INX builds is platform-agnostic by design — game clients on any platform communicate with the same API. Cross-platform account linking, cross-platform progression, and cross-platform matchmaking require specific implementation decisions around platform-specific login systems and platform certification requirements. Cross-platform progression has regulatory implications in some markets for games with in-app purchases. INX designs cross-platform infrastructure with platform certification requirements in scope from the start, not discovered during the submission process.",
      },
      {
        question: "What does a live service game engagement typically look like?",
        answer:
          "Live service game engagements cover the backend infrastructure required to run the game post-launch: content delivery systems, economy management tooling, player analytics, A/B testing infrastructure, and the ongoing engineering support required for seasonal events and content updates. The scope is defined by the operations team's requirements — what they need to be able to do without engineering support — and the analytics requirements of the product team for understanding player behaviour. INX designs live operations infrastructure to make the operations team self-sufficient, not dependent on engineers for routine content operations.",
      },
    ],
    relatedArticleSlugs: [
      "deployment-systems-not-release-events",
      "engineering-discipline-at-scale",
      "technical-debt-compounds-faster-than-growth",
    ],
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
