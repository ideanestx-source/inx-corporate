import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EcosystemDiagram from "@/components/visuals/EcosystemDiagram";

// Above-the-fold motion uses the CSS-only .hero-rise (globals.css) rather than
// Reveal: Reveal renders at opacity 0 until hydration, and this headline is the
// page's LCP element — it must paint without waiting for JavaScript.
const rise = (delay: number) => ({ "--rise-delay": `${delay}s` }) as React.CSSProperties;

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-600/[0.05] blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[460px] rounded-full bg-indigo-800/[0.035] blur-[150px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 75% 70% at 30% 40%, black 0%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070e] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p
              className="hero-rise font-mono text-[11px] tracking-[0.3em] uppercase text-white/35 mb-8"
              style={rise(0)}
            >
              IDEANEST X
            </p>

            <h1
              className="hero-rise text-[44px] sm:text-6xl lg:text-[76px] font-semibold leading-[1.03] tracking-[-0.015em] text-white mb-8 max-w-[680px]"
              style={rise(0.06)}
            >
              Build Systems <span className="text-gradient">That Perform.</span>
            </h1>

            <p
              className="hero-rise text-base sm:text-[17px] text-white/60 leading-[1.75] max-w-[520px] mb-11"
              style={rise(0.16)}
            >
              INX builds software, digital products, AI and automation
              systems, and games — and can take an idea from concept to a
              working product.
            </p>

            <div className="hero-rise flex flex-col sm:flex-row gap-3.5" style={rise(0.26)}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-[3px] bg-blue-600 text-white px-7 py-3.5 text-sm font-semibold hover:bg-blue-500 transition-all duration-200 shadow-[0_0_28px_rgba(59,130,246,0.28)] hover:shadow-[0_0_44px_rgba(59,130,246,0.48)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-white/[0.13] text-white/75 px-7 py-3.5 text-sm font-medium hover:border-white/[0.26] hover:bg-white/[0.04] hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          <div
            className="hero-rise lg:col-span-5 w-full max-w-[540px] mx-auto lg:max-w-none"
            style={rise(0.32)}
          >
            <EcosystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
