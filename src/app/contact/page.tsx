import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import InquiryCategories from "@/components/contact/InquiryCategories";
import EngagementExpectations from "@/components/contact/EngagementExpectations";
import OfficePresence from "@/components/contact/OfficePresence";
import ContactCta from "@/components/contact/ContactCta";

export const metadata: Metadata = {
  title: "Contact - INX | Begin an Engagement",
  description:
    "Begin a conversation with INX. Submit a business inquiry and a member of our leadership team will respond within two business days.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b1020]">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <InquiryCategories />
      <EngagementExpectations />
      <OfficePresence />
      <ContactCta />
      <Footer />
    </main>
  );
}
