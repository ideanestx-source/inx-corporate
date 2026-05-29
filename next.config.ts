import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' required for Next.js App Router hydration scripts
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://www.googletagmanager.com https://www.clarity.ms",
  // 'unsafe-inline' required for Tailwind/Next.js inline styles
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  // Turnstile and GA4 make XHR/beacon calls to their respective origins
  "connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.clarity.ms https://e.clarity.ms",
  // Turnstile renders its challenge inside a cross-origin iframe
  "frame-src https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
