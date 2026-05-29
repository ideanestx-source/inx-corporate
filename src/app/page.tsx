import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductShowcase from "@/components/ProductShowcase";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductShowcase />
      <AIWorkflowSection />
      <TechnologiesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
