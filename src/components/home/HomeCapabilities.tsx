import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { getFeaturedServices, getPublishedServices } from "@/lib/services-data";

// A summary, not the full catalog: the featured services from
// services-data.ts as an editorial index, with the remaining services
// surfaced as links beneath so nothing is hidden. All ten live on /services.
export default function HomeCapabilities() {
  const featured = getFeaturedServices();
  const others = getPublishedServices().filter((s) => !s.featured);

  return (
    <section id="capabilities" className="py-24 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] text-blue-400/60 tracking-[0.2em] uppercase mb-4">
                Capabilities
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                What INX builds.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:text-right">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/55 hover:text-white transition-colors"
            >
              All {featured.length + others.length} services
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </Link>
          </Reveal>
        </div>

        <ul className="border-b border-white/[0.09]">
          {featured.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-12 gap-x-6 gap-y-2 items-start border-t border-white/[0.09] px-2 py-7 hover:bg-white/[0.02] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500/40"
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-[11px] text-white/25 tracking-wider pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                      {s.title}
                    </h3>
                    <p className="font-mono text-[10px] text-blue-400/55 uppercase tracking-[0.14em] mt-1.5">
                      {s.category}
                    </p>
                  </div>
                  <p className="col-span-12 sm:col-span-5 sm:col-start-6 text-sm text-white/45 leading-relaxed">
                    {s.capabilities.slice(0, 3).join(" · ")}
                  </p>
                  <span className="hidden sm:flex col-span-2 justify-end pt-1">
                    <ArrowUpRight className="h-4 w-4 text-white/25 group-hover:text-white/65 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {others.length > 0 && (
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-white/40 leading-relaxed">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/28 mr-3">
                Also
              </span>
              {others.map((s, i) => (
                <span key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/15 hover:decoration-white/40 transition-colors"
                  >
                    {s.title}
                  </Link>
                  {i < others.length - 1 && <span className="text-white/20"> · </span>}
                </span>
              ))}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
