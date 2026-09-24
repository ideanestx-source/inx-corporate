import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsOverview from "@/components/products/ProductsOverview";
import ProductGrid from "@/components/products/ProductGrid";
import ProductsEcosystem from "@/components/products/ProductsEcosystem";
import CTASection from "@/components/shared/CTASection";
import { BASE_URL, SITE_NAME, breadcrumbSchema, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Digital products and software systems built and owned by INX — engineered with the same discipline applied across every client engagement.",
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
    title: "Products | INX",
    description:
      "Digital products and software systems built and owned by INX — engineered with the same discipline applied across every client engagement.",
    url: `${BASE_URL}/products`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    images: [DEFAULT_OG_IMAGE.url],
    card: "summary_large_image",
    title: "Products | INX",
    description:
      "Digital products and software systems built and owned by INX — engineered with the same discipline applied across every client engagement.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#05070e]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: BASE_URL },
          { name: "Products", item: `${BASE_URL}/products` },
        ])}
      />
      <Navbar />

      <ProductsHero />
      <ProductsOverview />
      <ProductGrid />
      <ProductsEcosystem />
      <CTASection
        cta={{ label: "Start a Project", href: "/contact" }}
        heading="Have an idea worth building properly?"
      />

      <Footer />
    </main>
  );
}
