import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getLabProject, getPublishedLabProjects } from "@/lib/labs-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

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
      <Navbar />

      <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
          {labProject.category} · {labProject.status}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
          {labProject.title}
        </h1>
        <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-2xl">
          {labProject.description}
        </p>
        <p className="text-sm text-white/45 leading-relaxed mb-12 max-w-2xl">
          {labProject.experimentDetails}
        </p>

        <Link
          href={labProject.cta.href}
          className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
        >
          {labProject.cta.label}
        </Link>
      </div>

      <Footer />
    </main>
  );
}
