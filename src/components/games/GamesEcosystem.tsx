import Reveal from "@/components/motion/Reveal";

const NODES = [
  { label: "Games", note: "Owned interactive titles" },
  { label: "Products", note: "Owned software products" },
  { label: "Labs", note: "Internal experimentation" },
  { label: "Store", note: "External asset marketplace" },
];

// Concise, visual positioning of Games within the wider INX ecosystem —
// deliberately plain labels, not links, since Labs/Store nav wiring is
// out of scope for this phase and Store is a separate external property.
export default function GamesEcosystem() {
  return (
    <section className="py-20 border-t border-white/[0.08] bg-[#05070e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium text-blue-400/60 tracking-[0.16em] uppercase mb-10">
            Where Games Sits in the INX Ecosystem
          </p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07] rounded-[3px] overflow-hidden">
          {NODES.map((node, i) => (
            <Reveal key={node.label} delay={i * 0.06}>
              <div
                className={`px-6 py-8 h-full ${
                  node.label === "Games" ? "bg-[#0c1120]" : "bg-[#080c18]"
                }`}
              >
                <p
                  className={`text-sm font-semibold mb-2 ${
                    node.label === "Games" ? "text-white" : "text-white/70"
                  }`}
                >
                  {node.label}
                </p>
                <p className="text-xs text-white/35 leading-relaxed">{node.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
