import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LabDetailHero from "@/components/labs/LabDetailHero";
import LabOverview from "@/components/labs/LabOverview";
import LabMedia from "@/components/labs/LabMedia";
import LabTechnology from "@/components/labs/LabTechnology";
import LabRelated from "@/components/labs/LabRelated";
import CTASection from "@/components/shared/CTASection";
import { getLabProject, getPublishedLabProjects } from "@/lib/labs-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema, labProjectSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedLabProjects().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const labProject = getLabProject(slug);
  if (!labProject) return {};

  const url = `${BASE_URL}/labs/${labProject.slug}`;

  return {
    title: labProject.seo.title,
    description: labProject.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${labProject.seo.title} | INX`,
      description: labProject.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${labProject.seo.title} | INX`,
      description: labProject.seo.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const labProject = getLabProject(slug);
  if (!labProject) notFound();

  const url = `${BASE_URL}/labs/${labProject.slug}`;

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Labs", item: `${BASE_URL}/labs` },
          { name: labProject.title, item: url },
        ])}
      />
      <JsonLd
        data={labProjectSchema({
          name: labProject.title,
          description: labProject.description,
          url,
          category: labProject.category,
        })}
      />
      <Navbar />

      <LabDetailHero project={labProject} />
      <LabOverview
        description={labProject.description}
        experimentDetails={labProject.experimentDetails}
      />
      <LabMedia media={labProject.media} />
      <LabTechnology technologies={labProject.technologies} />
      <LabRelated
        currentSlug={labProject.slug}
        category={labProject.category}
        relatedProductSlugs={labProject.relatedProductSlugs}
      />
      <CTASection cta={labProject.cta} heading={`Want to talk about ${labProject.title}?`} />

      <Footer />
    </main>
  );
}
