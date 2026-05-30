import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologiesHero from "@/components/technologies/TechnologiesHero";
import CoreTechnologyStack from "@/components/technologies/CoreTechnologyStack";
import EngineeringStandards from "@/components/technologies/EngineeringStandards";
import ArchitectureThinking from "@/components/technologies/ArchitectureThinking";
import DeliveryInfrastructure from "@/components/technologies/DeliveryInfrastructure";
import TechnologyPhilosophy from "@/components/technologies/TechnologyPhilosophy";
import TechnologiesCta from "@/components/technologies/TechnologiesCta";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Technology Stack",
  description:
    "The technology stack, engineering standards, and architecture principles applied across INX engagements. Selected for operational fit, not trend.",
  alternates: {
    canonical: `${BASE_URL}/technologies`,
  },
  openGraph: {
    title: "Technology Stack | INX",
    description:
      "The technology stack, engineering standards, and architecture principles applied across INX engagements. Selected for operational fit, not trend.",
    url: `${BASE_URL}/technologies`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Stack | INX",
    description:
      "The technology stack, engineering standards, and architecture principles applied across INX engagements. Selected for operational fit, not trend.",
  },
};

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Technologies", item: `${BASE_URL}/technologies` },
        ])}
      />
      <Navbar />
      <TechnologiesHero />
      <CoreTechnologyStack />
      <EngineeringStandards />
      <ArchitectureThinking />
      <DeliveryInfrastructure />
      <TechnologyPhilosophy />
      <TechnologiesCta />
      <Footer />
    </main>
  );
}
