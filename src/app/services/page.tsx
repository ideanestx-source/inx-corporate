import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import CoreServices from "@/components/services/CoreServices";
import DeliveryApproach from "@/components/services/DeliveryApproach";
import EngagementModels from "@/components/services/EngagementModels";
import ServicesTech from "@/components/services/ServicesTech";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCta from "@/components/services/ServicesCta";
import Link from "next/link";
import OutcomeStrip from "@/components/trust/OutcomeStrip";
import JsonLd from "@/components/JsonLd";
import ExpertiseBlock from "@/components/geo/ExpertiseBlock";
import { BASE_URL, SITE_NAME, breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/seo";

const servicesFaqItems = [
  {
    question: "What types of organizations does INX work with?",
    answer:
      "INX works primarily with established enterprises, growth-stage technology companies, and organizations undertaking significant digital transformation. We operate across financial services, logistics, healthcare technology, and enterprise SaaS — typically with organizations that treat engineering quality as a business-critical requirement.",
  },
  {
    question: "How does INX structure its pricing?",
    answer:
      "Engagements are priced based on scope, team composition, and delivery model. Project-based work is quoted against a defined technical specification produced during discovery. Ongoing engagements operate on a monthly retainer. INX does not publish rate cards — pricing begins with a scoping conversation.",
  },
  {
    question: "How quickly can an engagement begin?",
    answer:
      "For well-defined project engagements, INX can mobilize within two to three weeks of agreement. Dedicated team deployments require a four to six week onboarding period to ensure appropriate team assembly, context transfer, and process alignment. Discovery engagements can begin within one week.",
  },
  {
    question: "What does the discovery process involve?",
    answer:
      "Discovery is a structured, billable engagement — typically two to four weeks — covering technical audit where applicable, architecture requirements, stakeholder interviews, risk assessment, and the production of a detailed technical specification. The output is a document that governs all subsequent engineering work.",
  },
  {
    question: "Does INX provide post-delivery support and maintenance?",
    answer:
      "All project-based engagements include a post-deployment warranty period. Structured ongoing support retainers are available and are typically scoped during the delivery phase. INX does not recommend handoffs to unrelated third parties for systems it has architected and built.",
  },
  {
    question: "How does INX integrate with existing internal engineering teams?",
    answer:
      "INX operates as a genuine extension of the client's engineering organization — participating in ceremonies, adopting the client's toolchain, and maintaining the same accountability standards as internal engineers. The exact integration model is defined during discovery and documented in the engagement specification.",
  },
  {
    question: "How is intellectual property and confidentiality handled?",
    answer:
      "All intellectual property produced under an INX engagement transfers in full to the client upon settlement. Confidentiality is governed by a Master Services Agreement signed prior to any discovery work. INX does not retain or reuse client-specific architectural decisions or code across engagements.",
  },
  {
    question: "What quality assurance standards does INX apply?",
    answer:
      "All production code is peer-reviewed, test-covered, and documented to an internal quality standard before deployment. Automated test coverage is treated as a delivery requirement, not an optional supplement. INX maintains dedicated QA processes within each engagement, and post-deployment observability is part of the standard deployment package.",
  },
];

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Enterprise software development, SaaS platforms, mobile applications, AI systems, staff augmentation, and cloud infrastructure for global clients.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Software Development Services | INX",
    description:
      "Enterprise software development, SaaS platforms, mobile applications, AI systems, staff augmentation, and cloud infrastructure for global clients.",
    url: `${BASE_URL}/services`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | INX",
    description:
      "Enterprise software development, SaaS platforms, mobile applications, AI systems, staff augmentation, and cloud infrastructure for global clients.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Services", item: `${BASE_URL}/services` },
        ])}
      />
      <JsonLd data={faqSchema(servicesFaqItems)} />
      <JsonLd data={servicePageSchema()} />
      <Navbar />
      <ServicesHero />
      <CoreServices />
      <DeliveryApproach />
      <OutcomeStrip />
      <EngagementModels />
      <ServicesTech />
      <ServicesFAQ />
      <ExpertiseBlock />
      {/* GEO cross-links */}
      <div className="border-t border-white/[0.06] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-6">
            How We Work
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Our Process", href: "/our-process" },
              { label: "Engagement Models", href: "/engagement-models" },
              { label: "Our Expertise", href: "/expertise" },
              { label: "Why INX", href: "/why-inx" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-white/[0.08] rounded-[3px] px-4 py-3 text-[12px] text-white/40 hover:text-white/65 hover:border-white/[0.15] transition-colors text-center"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ServicesCta />
      <Footer />
    </main>
  );
}
