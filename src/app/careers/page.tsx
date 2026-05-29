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

export const metadata: Metadata = {
  title: "Careers - INX | Engineering Roles & Working Philosophy",
  description:
    "Open roles at INX. A small, senior engineering organisation building operational systems across enterprise verticals. High ownership, low ceremony.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
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
