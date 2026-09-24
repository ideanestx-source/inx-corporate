import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
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
  metadataBase: new URL("https://ideanestx.com"),
  title: {
    default: "INX | Build Systems That Perform",
    template: "%s | INX",
  },
  description:
    "INX builds software, digital products, AI and automation systems, and games — taking ideas from concept to a working product.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "INX | Build Systems That Perform",
    description:
      "INX builds software, digital products, AI and automation systems, and games — taking ideas from concept to a working product.",
    siteName: "INX",
    locale: "en_US",
    type: "website",
    url: "https://ideanestx.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "INX | Build Systems That Perform",
    description:
      "INX builds software, digital products, AI and automation systems, and games — taking ideas from concept to a working product.",
  },
  manifest: "/site.webmanifest",
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
      <head>
        {/* Scroll-reveal sections are server-rendered at opacity 0 and revealed
            by client JS. Without JavaScript they would stay invisible, so this
            noscript rule shows them. It has no effect when JS is enabled. */}
        <noscript>
          <style>{`[style*="opacity:0;"],[style$="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-[#05070e]">
        <GoogleAnalytics />
        <MicrosoftClarity />
        {/* Central reduced-motion gate: when the visitor's OS requests reduced
            motion, Framer Motion automatically simplifies every motion.*
            animation site-wide — no per-component logic needed. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
