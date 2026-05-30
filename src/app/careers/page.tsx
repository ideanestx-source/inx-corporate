import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import WorkingPhilosophy from "@/components/careers/WorkingPhilosophy";
import WhatINXValues from "@/components/careers/WhatINXValues";
import OpenRoles from "@/components/careers/OpenRoles";
import EngineeringCulture from "@/components/careers/EngineeringCulture";
import HiringPhilosophy from "@/components/careers/HiringPhilosophy";
import CareersCta from "@/components/careers/CareersCta";
import JsonLd from "@/components/JsonLd";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engineering Careers",
  description:
    "Open roles at INX. A small, senior engineering organisation building operational systems across enterprise verticals. High ownership, low ceremony.",
  alternates: {
    canonical: `${BASE_URL}/careers`,
  },
  openGraph: {
    title: "Engineering Careers | INX",
    description:
      "Open roles at INX. A small, senior engineering organisation building operational systems across enterprise verticals. High ownership, low ceremony.",
    url: `${BASE_URL}/careers`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Careers | INX",
    description:
      "Open roles at INX. A small, senior engineering organisation building operational systems across enterprise verticals. High ownership, low ceremony.",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Careers", item: `${BASE_URL}/careers` },
        ])}
      />
      <Navbar />
      <CareersHero />
      <WorkingPhilosophy />
      <WhatINXValues />
      <OpenRoles />
      <EngineeringCulture />
      <HiringPhilosophy />
      <CareersCta />
      <Footer />
    </main>
  );
}
