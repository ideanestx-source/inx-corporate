import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { Service } from "@/lib/services-data";

type ServiceCardProps = {
  service: Service;
  Diagram: ComponentType;
  variant?: "large" | "compact";
  delay?: number;
};

export default function ServiceCard({
  service,
  Diagram,
  variant = "compact",
  delay = 0,
}: ServiceCardProps) {
  if (variant === "large") {
    return (
      <Reveal delay={delay}>
        <Link
          href={`/services/${service.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-white/[0.09] rounded-[3px] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 p-8 lg:p-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
        >
          <div className="lg:col-span-7">
            <p className="text-[10px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-4">
              {service.category}
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-white/55 leading-relaxed max-w-lg mb-7">
              {service.summary}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 group-hover:text-white/80 transition-colors duration-200">
              Explore {service.title}
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </span>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[3/2] w-full border border-white/[0.07] rounded-[3px] bg-[#060a12] overflow-hidden p-2">
              <Diagram />
            </div>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group flex flex-col h-full border border-white/[0.09] rounded-[3px] bg-[#080c18] hover:bg-[#0c1120] hover:border-white/[0.17] transition-colors duration-300 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        <div className="aspect-[3/2] w-full border border-white/[0.06] rounded-[2px] bg-[#060a12] overflow-hidden mb-5 p-1.5">
          <Diagram />
        </div>
        <p className="text-[10px] font-medium text-blue-400/55 tracking-[0.14em] uppercase mb-2">
          {service.category}
        </p>
        <h3 className="text-base font-semibold text-white leading-snug mb-2">
          {service.title}
        </h3>
        <p className="text-xs text-white/45 leading-relaxed mb-4 flex-1">
          {service.summary}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/30 group-hover:text-white/65 transition-colors duration-200">
          Learn more
          <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </span>
      </Link>
    </Reveal>
  );
}
