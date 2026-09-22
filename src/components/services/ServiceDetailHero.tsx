import type { ComponentType } from "react";
import Reveal from "@/components/motion/Reveal";
import type { Service } from "@/lib/services-data";

type Props = {
  service: Service;
  Diagram: ComponentType;
};

export default function ServiceDetailHero({ service, Diagram }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#05070e] pt-36 pb-16 border-b border-white/[0.07]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[380px] rounded-full bg-blue-600/[0.045] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/65 tracking-[0.16em] uppercase mb-5">
                {service.category}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-tight text-white mb-6">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-base text-white/55 leading-relaxed max-w-xl">
                {service.summary}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2} x={16} y={0}>
              <div className="aspect-[3/2] w-full border border-white/[0.08] rounded-[4px] bg-[#080c18] overflow-hidden p-3">
                <Diagram />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
