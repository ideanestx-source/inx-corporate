import Reveal from "@/components/motion/Reveal";
import StoreVisual from "./StoreVisual";
import { STORE_COLLECTIONS } from "@/lib/store-info";

// Names only — the collection names the Store displays, with no counts,
// products, prices, or images. The Store itself is the source of truth for
// what is currently in each collection.
export default function StoreCategories() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#060912]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-4">
                What You&apos;ll Find
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-5 max-w-md">
                3D assets and UI kits for creative professionals.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-md">
                These are the collections the Store lists on its homepage.
                The Store itself is the source of truth for what each one
                currently contains.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="flex flex-wrap gap-2.5">
                {STORE_COLLECTIONS.map((name) => (
                  <li
                    key={name}
                    className="font-mono text-[12px] text-white/65 border border-white/[0.1] rounded-[2px] px-3.5 py-1.5"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <StoreVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
