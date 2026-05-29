import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INX - MAKE IT PERFORM | Product Engineering & Digital Infrastructure",
  description:
    "INX (IDEANEST X PRIVATE LIMITED) is a premium global product engineering and digital infrastructure company. We build enterprise software, SaaS platforms, mobile applications, AI systems, and cloud-native infrastructure for organizations worldwide.",
  openGraph: {
    title: "INX - MAKE IT PERFORM",
    description:
      "Premium global product engineering and digital infrastructure. Enterprise software, SaaS platforms, AI systems, mobile applications, cloud architecture.",
    siteName: "INX - IDEANEST X PRIVATE LIMITED",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INX - MAKE IT PERFORM",
    description:
      "Premium global product engineering and digital infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070e]">
        <GoogleAnalytics />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
