import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import FeaturedCaseStudies from "@/components/case-studies/FeaturedCaseStudies";
import EngineeringPrinciples from "@/components/case-studies/EngineeringPrinciples";
import DeliveryMetrics from "@/components/case-studies/DeliveryMetrics";
import EngagementPhilosophy from "@/components/case-studies/EngagementPhilosophy";
import CaseStudiesCta from "@/components/case-studies/CaseStudiesCta";

export const metadata: Metadata = {
  title: "Case Studies - INX | Enterprise Engineering Work",
  description:
    "Selected INX engineering engagements across enterprise web platforms, SaaS products, AI systems, and logistics operations. Documented without hyperbole.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
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
