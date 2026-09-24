// The INX ecosystem as one connected system: Services, Work, Products, Games,
// Labs and Store arranged around INX in the order the site tells the story.
// Purely illustrative and decorative (announced once via aria-label).
//
// Motion is CSS-only (edge-flow / soft-pulse in globals.css), deliberately not
// SMIL: the global prefers-reduced-motion rule reaches CSS animations but not
// SVG <animate>, so this stays reduced-motion safe. Server-rendered, no JS.

const CX = 260;
const CY = 210;
const RX = 175;
const RY = 130;

const NODES = [
  { label: "Services", angle: -90 },
  { label: "Work", angle: -30 },
  { label: "Products", angle: 30 },
  { label: "Games", angle: 90 },
  { label: "Labs", angle: 150 },
  { label: "Store", angle: 210 },
].map((n) => {
  const a = (n.angle * Math.PI) / 180;
  return {
    ...n,
    x: Math.round((CX + RX * Math.cos(a)) * 10) / 10,
    y: Math.round((CY + RY * Math.sin(a)) * 10) / 10,
  };
});

const RING = NODES.map((n) => `${n.x},${n.y}`).join(" ");

export default function EcosystemDiagram() {
  return (
    <div className="relative rounded-[4px] border border-white/[0.07] bg-white/[0.015] p-3 sm:p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.04] to-transparent pointer-events-none" />
      <p className="relative font-mono text-[9px] text-white/25 uppercase tracking-[0.2em] mb-1">
        INX / Ecosystem
      </p>
      <svg
        viewBox="0 0 520 420"
        className="relative w-full h-auto block"
        role="img"
        aria-label="The INX ecosystem: Services, Work, Products, Games, Labs and Store, connected around INX"
      >
        {/* Faint orbit + ring linking the areas in story order */}
        <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 6" />
        <polygon points={RING} fill="none" stroke="rgba(96,165,250,0.16)" strokeWidth="1" />

        {/* Spokes: flowing dashes from the center out to each area */}
        {NODES.map((n, i) => (
          <line
            key={`spoke-${n.label}`}
            x1={CX}
            y1={CY}
            x2={n.x}
            y2={n.y}
            stroke="rgba(96,165,250,0.5)"
            strokeWidth="1"
            strokeDasharray="4 6"
            style={{ animation: "edge-flow 6s linear infinite", animationDelay: `${i * 0.7}s` }}
          />
        ))}

        {/* Center */}
        <circle
          cx={CX}
          cy={CY}
          r="46"
          fill="none"
          stroke="rgba(96,165,250,0.22)"
          style={{ animation: "soft-pulse 5s ease-in-out infinite" }}
        />
        <circle cx={CX} cy={CY} r="34" fill="rgba(59,130,246,0.09)" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />
        <text
          x={CX}
          y={CY + 6}
          textAnchor="middle"
          className="font-mono"
          fontSize="19"
          fontWeight="600"
          letterSpacing="0.08em"
          fill="rgba(255,255,255,0.88)"
        >
          INX
        </text>

        {/* Areas */}
        {NODES.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x - 10}
              y={n.y - 10}
              width="20"
              height="20"
              transform={`rotate(45 ${n.x} ${n.y})`}
              fill="rgba(5,7,14,1)"
              stroke="rgba(96,165,250,0.28)"
            />
            <rect
              x={n.x - 4.5}
              y={n.y - 4.5}
              width="9"
              height="9"
              transform={`rotate(45 ${n.x} ${n.y})`}
              fill="rgba(96,165,250,0.6)"
            />
            <text
              x={n.x}
              y={n.angle === -90 ? n.y - 24 : n.y + 32}
              textAnchor="middle"
              className="font-mono"
              fontSize="13"
              letterSpacing="0.16em"
              fill="rgba(255,255,255,0.6)"
            >
              {n.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Registration marks */}
        <g fill="rgba(59,130,246,0.3)">
          <rect x="4" y="4" width="12" height="1" />
          <rect x="4" y="4" width="1" height="12" />
          <rect x="504" y="4" width="12" height="1" />
          <rect x="515" y="4" width="1" height="12" />
          <rect x="4" y="415" width="12" height="1" />
          <rect x="4" y="404" width="1" height="12" />
          <rect x="504" y="415" width="12" height="1" />
          <rect x="515" y="404" width="1" height="12" />
        </g>
      </svg>
    </div>
  );
}
