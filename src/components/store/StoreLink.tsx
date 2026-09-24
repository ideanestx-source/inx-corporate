import { ExternalLink } from "lucide-react";
import { STORE_URL, STORE_HOST } from "@/lib/store-info";

// The one place the external Store link is rendered, so the exact URL and
// the external-link treatment (new tab, noopener, visible icon, screen-reader
// notice) are identical everywhere on the page.
type Props = { label?: string };

export default function StoreLink({ label = "Explore INX Store" }: Props) {
  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 rounded-[3px] bg-blue-600 text-white px-7 py-[13px] text-sm font-semibold hover:bg-blue-500 transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.24)] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only"> (opens {STORE_HOST} in a new tab)</span>
    </a>
  );
}
