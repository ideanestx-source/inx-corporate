import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import InquiryCategories from "@/components/contact/InquiryCategories";
import EngagementExpectations from "@/components/contact/EngagementExpectations";
import OfficePresence from "@/components/contact/OfficePresence";
import ContactCta from "@/components/contact/ContactCta";
import JsonLd from "@/components/JsonLd";
import AeoAnswerBlock from "@/components/aeo/AeoAnswerBlock";
import { BASE_URL, SITE_NAME, breadcrumbSchema, contactPageSchema, faqSchema } from "@/lib/seo";

const contactFaqItems = [
  {
    question: "How do I start a project with INX?",
    answer:
      "Submit a business inquiry through the contact form on this page. A member of the INX leadership team will respond within two business days to schedule an initial conversation. Discovery engagements — the structured technical scoping process that precedes all development work — can begin within one week of initial alignment.",
  },
  {
    question: "How quickly can an INX engagement start?",
    answer:
      "Discovery engagements can begin within one week of initial alignment. Project-based engagements typically mobilise within two to three weeks of agreement on scope and commercial terms. Dedicated team deployments require four to six weeks for appropriate team assembly, onboarding, and context transfer.",
  },
  {
    question: "Does INX sign NDAs before initial conversations?",
    answer:
      "Yes. INX operates under a Master Services Agreement that includes confidentiality provisions before any discovery work begins. A mutual NDA can be provided and executed prior to any initial technical conversation if the client requires it before sharing sensitive business context.",
  },
  {
    question: "What information should I include in my initial inquiry?",
    answer:
      "A brief description of the problem you are trying to solve, the approximate timeline you are working toward, and whether you have an existing system that needs to be extended or you are building from scratch. A precise brief is not required at this stage — the discovery process exists to produce it.",
  },
  {
    question: "Does INX work with startups or only enterprises?",
    answer:
      "INX works with growth-stage technology companies and funded startups as well as established enterprises. The common factor is treating engineering quality as a business-critical requirement. INX does not accept engagements where cost is the primary selection criterion over capability and delivery rigour.",
  },
  {
    question: "What happens after the initial inquiry is submitted?",
    answer:
      "A member of the INX leadership team responds within two business days. The initial conversation covers the problem scope, existing technical context, timeline, and whether an INX engagement is the appropriate fit. If it is, a discovery engagement is proposed as the next step before any development commitment is made.",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a conversation with INX. Submit a business inquiry and a member of our leadership team will respond within two business days.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | INX",
    description:
      "Begin a conversation with INX. Submit a business inquiry and a member of our leadership team will respond within two business days.",
    url: `${BASE_URL}/contact`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | INX",
    description:
      "Begin a conversation with INX. Submit a business inquiry and a member of our leadership team will respond within two business days.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b1020]">
      <JsonLd data={contactPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Contact", item: `${BASE_URL}/contact` },
        ])}
      />
      <JsonLd data={faqSchema(contactFaqItems)} />
      <Navbar />
      <ContactHero />
      <InquiryCategories />
      <ContactForm />
      <EngagementExpectations />
      <AeoAnswerBlock
        heading="Common Questions Before Getting in Touch"
        items={contactFaqItems.map((f) => ({
          question: f.question,
          directAnswer: f.answer,
        }))}
      />
      <OfficePresence />
      <ContactCta />
      <Footer />
    </main>
  );
}
