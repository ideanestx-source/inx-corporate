import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductShowcase from "@/components/ProductShowcase";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AeoAnswerBlock from "@/components/aeo/AeoAnswerBlock";
import TrustBar from "@/components/trust/TrustBar";
import OutcomeStrip from "@/components/trust/OutcomeStrip";
import EntitySummary from "@/components/geo/EntitySummary";
import {
  BASE_URL,
  SITE_NAME,
  organizationSchema,
  webSiteSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

const homepageFaqs = [
  {
    question: "What does INX do?",
    answer:
      "INX (IDEANEST X PRIVATE LIMITED) is a custom software development company that engineers SaaS platforms, enterprise web applications, AI systems, and cloud infrastructure for global organisations. INX delivers production-grade systems built from operational first principles, not trend-driven architecture choices.",
  },
  {
    question: "What industries does INX serve?",
    answer:
      "INX engineers systems across SaaS, healthcare technology, financial services, logistics, eCommerce, gaming, and professional services. Industry operational context is treated as an architectural input — systems are designed around how work actually happens in the sectors they serve, not around generic software patterns.",
  },
  {
    question: "What is the difference between INX and a typical software agency?",
    answer:
      "INX operates as a senior engineering partner, not a task-execution agency. Engagements begin with a structured discovery phase that produces an architecture specification before any development work begins. Engineers are accountable for production outcomes, not just specification compliance. INX does not accept engagements where the requirements are not adequately defined.",
  },
  {
    question: "Where is INX based and does it work with international clients?",
    answer:
      "INX is headquartered in India and works with clients globally, including organisations in the United Kingdom, United States, Europe, and the Middle East. All engagements are conducted with structured communication cadences designed for distributed collaboration across time zones.",
  },
  {
    question: "How do I start a project with INX?",
    answer:
      "Submit a business inquiry through the contact page. A member of the INX leadership team responds within two business days to schedule an initial conversation. Discovery engagements — the structured technical scoping process that precedes all development work — can begin within one week of initial alignment.",
  },
  {
    question: "What is INX's engineering approach?",
    answer:
      "INX conducts operational discovery before architecture is defined, specifies systems before building them, and treats code review, test coverage, and deployment system engineering as delivery requirements rather than optional practices. The approach is designed to produce systems that perform in production, not just in demonstration conditions.",
  },
];

export const metadata: Metadata = {
  // title intentionally omitted — uses layout default:
  // "INX | Custom Software Development & Product Engineering"
  description:
    "Custom software development, SaaS engineering, and product delivery for global organizations. Enterprise-grade systems built to perform in production.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "INX | Custom Software Development & Product Engineering",
    description:
      "Custom software development, SaaS engineering, and product delivery for global organizations. Enterprise-grade systems built to perform in production.",
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INX | Custom Software Development & Product Engineering",
    description:
      "Custom software development, SaaS engineering, and product delivery for global organizations.",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", item: BASE_URL }])} />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <OutcomeStrip />
      <ServicesSection />
      <ProductShowcase />
      <AIWorkflowSection />
      <TechnologiesSection />
      <EntitySummary />
      <AeoAnswerBlock
        heading="Common Questions About INX"
        items={[
          {
            question: "What does INX do?",
            directAnswer:
              "INX is a custom software development company that engineers SaaS platforms, enterprise applications, AI systems, and cloud infrastructure for global organisations.",
            expandedAnswer:
              "IDEANEST X PRIVATE LIMITED (INX) operates as a senior engineering partner — conducting operational discovery before architecture is defined, specifying systems before building them, and treating delivery outcomes as the measure of success. Clients include enterprises, growth-stage technology companies, and organisations undergoing digital transformation across SaaS, healthcare, logistics, fintech, and eCommerce.",
          },
          {
            question: "What industries does INX serve?",
            directAnswer:
              "INX serves SaaS companies, healthcare technology organisations, financial services and fintech firms, logistics operators, eCommerce businesses, gaming companies, and professional services organisations globally.",
            expandedAnswer:
              "Industry context is treated as an architectural input. Systems INX builds reflect the operational reality of each sector — the exception categories, integration requirements, and compliance constraints that generalised software does not accommodate. Dedicated industry landing pages document INX's approach to each vertical.",
          },
          {
            question: "How much does custom software development cost?",
            directAnswer:
              "Custom software development at INX is priced against a defined specification produced during a discovery engagement. An accurate cost estimate requires two to four weeks of discovery work. INX does not publish rate cards.",
            expandedAnswer:
              "Pricing varies significantly based on scope, team composition, system complexity, and integration requirements. Discovery — the structured technical scoping phase — is a billable engagement that produces the specification development is then priced against. This approach produces accurate estimates rather than proposals that inflate during delivery.",
          },
          {
            question: "What is staff augmentation?",
            directAnswer:
              "Staff augmentation is a delivery model where external senior engineers join an existing team under the client's engineering management — adding execution capacity without transferring delivery responsibility to the external partner.",
            expandedAnswer:
              "INX provides senior engineers for staff augmentation engagements. Augmented engineers integrate into the client's existing processes, tools, and ceremonies. The model is appropriate when the engineering management and direction are working and the constraint is headcount — not when the constraint is management capability, process clarity, or technical direction.",
          },
          {
            question: "How long does MVP development take?",
            directAnswer:
              "A production-ready MVP — with core functionality, authentication, and basic infrastructure — typically requires three to four months of focused engineering, assuming a well-scoped product definition and validated hypothesis.",
            expandedAnswer:
              "Timeline depends on the scope of the hypothesis being tested, the integration requirements, and the reliability standard the MVP must meet to generate useful evidence. An MVP scoped too broadly takes longer without producing more learning. INX conducts a scoping session before estimating MVP timelines — the scope of the hypothesis determines the scope of the build.",
          },
          {
            question: "Where is INX based and does it work with international clients?",
            directAnswer:
              "INX is headquartered in India and works with clients across the United Kingdom, United States, Europe, and the Middle East. All engagements are conducted remotely with structured communication cadences for distributed collaboration.",
            expandedAnswer:
              "Remote delivery is the standard operating model, not an accommodation. Engagement structures include synchronous sessions for architecture decisions, asynchronous-first communication for day-to-day progress, and documented decisions for context that must persist across time zones. INX has delivered for clients across multiple continents simultaneously.",
          },
        ]}
      />
      <CtaSection />
      <Footer />
    </main>
  );
}
