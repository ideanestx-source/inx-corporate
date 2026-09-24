"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Only a well-formed GA4 measurement ID (G-XXXXXXXX…) enables analytics. An
// unset variable or a placeholder such as "G-PLACEHOLDER" renders nothing, so
// no traffic is ever sent to a fake property.
const RAW_GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const GA_ID =
  RAW_GA_ID && /^G-[A-Z0-9]{8,12}$/.test(RAW_GA_ID) && !/PLACEHOLDER|XXXX/i.test(RAW_GA_ID)
    ? RAW_GA_ID
    : undefined;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    // Skip the initial mount — the inline init script sends the first pageview
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (!GA_ID) return;
    window.gtag?.("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
