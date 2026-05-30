import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import FeaturedCaseStudies from "@/components/case-studies/FeaturedCaseStudies";
import EngineeringPrinciples from "@/components/case-studies/EngineeringPrinciples";
import DeliveryMetrics from "@/components/case-studies/DeliveryMetrics";
import EngagementPhilosophy from "@/components/case-studies/EngagementPhilosophy";
import CaseStudiesCta from "@/components/case-studies/CaseStudiesCta";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected INX engineering engagements across enterprise web platforms, SaaS products, AI systems, and logistics operations. Documented without hyperbole.",
  alternates: {
    canonical: `${BASE_URL}/case-studies`,
  },
  openGraph: {
    title: "Case Studies | INX",
    description:
      "Selected INX engineering engagements across enterprise web platforms, SaaS products, AI systems, and logistics operations. Documented without hyperbole.",
    url: `${BASE_URL}/case-studies`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | INX",
    description:
      "Selected INX engineering engagements across enterprise web platforms, SaaS products, AI systems, and logistics operations. Documented without hyperbole.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Case Studies", item: `${BASE_URL}/case-studies` },
        ])}
      />
      <Navbar />
      <CaseStudiesHero />
      <FeaturedCaseStudies />
      <EngineeringPrinciples />
      <DeliveryMetrics />
      <EngagementPhilosophy />
      <CaseStudiesCta />
      <Footer />
    </main>
  );
}
