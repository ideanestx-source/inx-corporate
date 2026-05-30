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
  metadataBase: new URL("https://ideanestx.com"),
  title: {
    default: "INX | Custom Software Development & Product Engineering",
    template: "%s | INX",
  },
  description:
    "Custom software development, SaaS engineering, and product delivery for global organizations. Enterprise-grade systems built to perform in production.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico",       sizes: "any",   type: "image/x-icon" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "INX | Custom Software Development & Product Engineering",
    description:
      "Custom software development, SaaS engineering, and product delivery for global organizations.",
    siteName: "INX",
    locale: "en_US",
    type: "website",
    url: "https://ideanestx.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "INX | Custom Software Development & Product Engineering",
    description:
      "Custom software development, SaaS engineering, and product delivery for global organizations.",
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
      <body className="min-h-full flex flex-col bg-[#05070e]">
        <GoogleAnalytics />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
