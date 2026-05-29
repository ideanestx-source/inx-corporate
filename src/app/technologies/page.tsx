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

export const metadata: Metadata = {
  title: "Technologies - INX | Engineering Stack & Operational Standards",
  description:
    "The technology stack, engineering standards, and architecture principles applied across INX engagements. Selected for operational fit, not trend.",
};

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
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
