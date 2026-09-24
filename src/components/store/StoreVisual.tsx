import Reveal from "@/components/motion/Reveal";

// Abstract composition of the two kinds of thing the Store offers — a 3D
// object in a viewport and a UI-kit component sheet — drawn as generic
// wireframe/outline shapes. It depicts no actual Store product and is
// captioned as illustrative; it is never a stand-in for a real listing.
export default function StoreVisual() {
  return (
    <Reveal delay={0.1}>
      <figure className="border border-white/[0.09] rounded-[3px] overflow-hidden bg-[#060a12]">
        <div className="aspect-[4/3] w-full">
          <svg viewBox="0 0 400 300" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
            <rect width="400" height="300" fill="#060a12" />

            {/* Viewport ground plane */}
            <g fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1">
              <polygon points="30,160 120,115 210,160 120,205" strokeDasharray="3 4" />
              <line x1="60" y1="175" x2="150" y2="130" />
              <line x1="90" y1="190" x2="180" y2="145" />
              <line x1="60" y1="145" x2="150" y2="190" />
              <line x1="90" y1="130" x2="180" y2="175" />
            </g>

            {/* Wireframe cube */}
            <g strokeLinejoin="round" strokeWidth="1">
              <polygon points="120,85 163,110 120,135 77,110" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.5)" />
              <polygon points="120,135 163,110 163,160 120,185" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.22)" />
              <polygon points="77,110 120,135 120,185 77,160" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.22)" />
            </g>

            {/* Axis gizmo */}
            <g strokeWidth="1.2" strokeLinecap="round">
              <line x1="40" y1="250" x2="40" y2="228" stroke="rgba(96,165,250,0.6)" />
              <line x1="40" y1="250" x2="60" y2="260" stroke="rgba(255,255,255,0.35)" />
              <line x1="40" y1="250" x2="22" y2="260" stroke="rgba(255,255,255,0.22)" />
            </g>

            {/* UI-kit component sheet */}
            <rect x="225" y="60" width="160" height="180" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" />
            <circle cx="239" cy="76" r="3.5" fill="rgba(96,165,250,0.5)" />
            <rect x="248" y="74" width="50" height="4" rx="1" fill="rgba(255,255,255,0.14)" />
            <rect x="239" y="96" width="64" height="20" rx="2" fill="rgba(59,130,246,0.22)" stroke="rgba(96,165,250,0.5)" />
            <rect x="311" y="96" width="60" height="20" rx="2" fill="none" stroke="rgba(255,255,255,0.18)" />
            <rect x="239" y="128" width="132" height="18" rx="2" fill="none" stroke="rgba(255,255,255,0.14)" />
            <rect x="246" y="134" width="1.5" height="6" fill="rgba(96,165,250,0.7)" />
            <rect x="239" y="158" width="28" height="14" rx="7" fill="rgba(59,130,246,0.3)" stroke="rgba(96,165,250,0.4)" />
            <circle cx="260" cy="165" r="5" fill="rgba(255,255,255,0.6)" />
            <rect x="275" y="160" width="60" height="4" rx="1" fill="rgba(255,255,255,0.12)" />
            <rect x="275" y="167" width="40" height="3" rx="1" fill="rgba(255,255,255,0.07)" />
            <rect x="239" y="184" width="132" height="44" rx="2" fill="none" stroke="rgba(255,255,255,0.12)" />
            <circle cx="257" cy="206" r="8" fill="none" stroke="rgba(255,255,255,0.22)" />
            <rect x="272" y="198" width="70" height="4" rx="1" fill="rgba(255,255,255,0.16)" />
            <rect x="272" y="207" width="52" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
            <rect x="272" y="214" width="40" height="3" rx="1" fill="rgba(255,255,255,0.07)" />

            {/* Registration marks */}
            <g fill="rgba(59,130,246,0.3)">
              <rect x="8" y="8" width="12" height="1" />
              <rect x="8" y="8" width="1" height="12" />
              <rect x="380" y="8" width="12" height="1" />
              <rect x="391" y="8" width="1" height="12" />
              <rect x="8" y="291" width="12" height="1" />
              <rect x="8" y="280" width="1" height="12" />
              <rect x="380" y="291" width="12" height="1" />
              <rect x="391" y="280" width="1" height="12" />
            </g>
          </svg>
        </div>
        <figcaption className="border-t border-white/[0.07] px-4 py-3 font-mono text-[10px] text-white/30 uppercase tracking-[0.14em]">
          Illustrative composition — not a Store product
        </figcaption>
      </figure>
    </Reveal>
  );
}
