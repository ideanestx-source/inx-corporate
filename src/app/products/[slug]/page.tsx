import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getProduct, getPublishedProducts } from "@/lib/products-data";
import { BASE_URL, SITE_NAME, breadcrumbSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const url = `${BASE_URL}/products/${product.slug}`;

  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.seo.title} | INX`,
      description: product.seo.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.seo.title} | INX`,
      description: product.seo.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const url = `${BASE_URL}/products/${product.slug}`;

  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Products", item: `${BASE_URL}/products` },
          { name: product.name, item: url },
        ])}
      />
      <Navbar />

      <div className="pt-32 pb-24 mx-auto max-w-4xl px-6 lg:px-8">
        <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-4">
          {product.category} · {product.status}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-4">
          {product.name}
        </h1>
        <p className="text-lg text-white/55 mb-8">{product.tagline}</p>
        <p className="text-sm text-white/60 leading-relaxed mb-12 max-w-2xl">
          {product.description}
        </p>

        <Link
          href={product.cta.href}
          className="inline-flex items-center gap-2 rounded-[3px] bg-blue-500/12 border border-blue-500/22 px-6 py-3 text-sm font-medium text-blue-300/90 hover:bg-blue-500/22 hover:border-blue-400/35 hover:text-blue-200 transition-all duration-200"
        >
          {product.cta.label}
        </Link>
      </div>

      <Footer />
    </main>
  );
}
