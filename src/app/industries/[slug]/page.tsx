import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryLandingPage from "@/components/industries/IndustryLandingPage";
import JsonLd from "@/components/JsonLd";
import { getIndustryPage, industryPages } from "@/lib/industries-data";
import { getArticle } from "@/lib/insights";
import {
  BASE_URL,
  SITE_NAME,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};

  const url = `${BASE_URL}/industries/${page.slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${page.title} | INX`,
      description: page.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | INX`,
      description: page.metaDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  const url = `${BASE_URL}/industries/${page.slug}`;
  const relatedArticles = page.relatedArticleSlugs
    .map((s) => getArticle(s))
    .filter((a) => a !== undefined);

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Industries", item: `${BASE_URL}/industries` },
          { name: page.title, item: url },
        ])}
      />
      <JsonLd
        data={faqSchema(
          page.faqs.map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />
      <Navbar />
      <IndustryLandingPage page={page} relatedArticles={relatedArticles} />
      <Footer />
    </main>
  );
}
