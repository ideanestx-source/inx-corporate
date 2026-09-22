import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

// Keeps a hard line between "games INX owns" (this page) and "game
// development as a client service" (/services/game-development) — the
// two are never presented as the same thing.
export default function GamesCapabilities() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border border-white/[0.09] rounded-[3px] bg-[#05070e] p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-4">
                A Separate Engagement Model
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-4 max-w-xl">
                Need a game built for your studio, not by one?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-white/50 leading-relaxed max-w-xl">
                The titles on this page are games INX designs, builds, and
                owns. Game backend engineering — multiplayer infrastructure,
                economy systems, live operations — for studios and game
                companies is a separate, client-facing service.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <Link
              href="/services/game-development"
              className="group flex items-center justify-between gap-3 border border-white/[0.12] rounded-[3px] px-5 py-4 hover:border-white/[0.24] hover:bg-white/[0.03] transition-all duration-200"
            >
              <span className="text-sm font-medium text-white/75 group-hover:text-white">
                Game Development Service
              </span>
              <ArrowUpRight className="h-4 w-4 text-white/35 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
