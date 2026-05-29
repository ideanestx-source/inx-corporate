"use client";

function CornerMarks() {
  return (
    <>
      <rect x="2" y="2" width="8" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="2" y="2" width="1" height="8" fill="rgba(59,130,246,0.25)" />
      <rect x="110" y="2" width="8" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="117" y="2" width="1" height="8" fill="rgba(59,130,246,0.25)" />
      <rect x="2" y="77" width="8" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="2" y="70" width="1" height="8" fill="rgba(59,130,246,0.25)" />
      <rect x="110" y="77" width="8" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="117" y="70" width="1" height="8" fill="rgba(59,130,246,0.25)" />
    </>
  );
}

export function WebDiagram() {
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Browser frame */}
      <rect x="2" y="2" width="116" height="76" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Title bar */}
      <rect x="2" y="2" width="116" height="16" rx="4" fill="rgba(255,255,255,0.05)" />
      <rect x="2" y="14" width="116" height="4" fill="rgba(255,255,255,0.05)" />
      {/* Traffic dots */}
      <circle cx="10" cy="11" r="2.5" fill="rgba(255,80,80,0.4)" />
      <circle cx="17" cy="11" r="2.5" fill="rgba(255,185,0,0.4)" />
      <circle cx="24" cy="11" r="2.5" fill="rgba(0,200,80,0.4)" />
      {/* Address bar */}
      <rect x="32" y="6" width="74" height="7" rx="2" fill="rgba(255,255,255,0.06)" />
      {/* Content */}
      <rect x="8" y="24" width="104" height="6" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="8" y="34" width="65" height="14" rx="1" fill="rgba(59,130,246,0.15)" />
      <rect x="78" y="34" width="34" height="14" rx="1" fill="rgba(255,255,255,0.04)" />
      <rect x="8" y="52" width="104" height="4" rx="1" fill="rgba(255,255,255,0.05)" />
      <rect x="8" y="57" width="80" height="4" rx="1" fill="rgba(255,255,255,0.05)" />
      <rect x="8" y="62" width="60" height="4" rx="1" fill="rgba(255,255,255,0.05)" />
      <CornerMarks />
    </svg>
  );
}

export function SaasDiagram() {
  const rows = [
    { fill: "rgba(59,130,246,0.2)", stroke: "rgba(96,165,250,0.25)", label: "T1" },
    { fill: "rgba(139,92,246,0.15)", stroke: "rgba(167,139,250,0.2)", label: "T2" },
    { fill: "rgba(16,185,129,0.12)", stroke: "rgba(52,211,153,0.18)", label: "T3" },
  ];
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {rows.map((row, ri) =>
        [0, 1, 2].map((ci) => (
          <rect
            key={`${ri}-${ci}`}
            x={6 + ci * 36}
            y={8 + ri * 24}
            width="32"
            height="20"
            rx="2"
            fill={row.fill}
            stroke={row.stroke}
            strokeWidth="1"
          />
        ))
      )}
      {rows.map((row, ri) => (
        <text key={ri} x="2" y={20 + ri * 24} fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.22)">
          {row.label}
        </text>
      ))}
      <text x="60" y="76" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.15)" letterSpacing="0.04em">
        SHARED INFRA
      </text>
      <CornerMarks />
    </svg>
  );
}

export function AIDiagram() {
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      <defs>
        <path id="ai-edge0" d="M 28,40 L 52,40" />
        <path id="ai-edge1" d="M 68,40 L 92,40" />
      </defs>
      {/* Edges */}
      <line x1="28" y1="40" x2="52" y2="40" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
      <line x1="68" y1="40" x2="92" y2="40" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
      {/* Animated packets */}
      <circle r="2" fill="rgba(96,165,250,0.7)">
        <animateMotion dur="1.5s" begin="0s" repeatCount="indefinite">
          <mpath href="#ai-edge0" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="rgba(96,165,250,0.7)">
        <animateMotion dur="1.5s" begin="0.75s" repeatCount="indefinite">
          <mpath href="#ai-edge1" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
      </circle>
      {/* Model node glow */}
      <circle cx="60" cy="40" r="16" fill="rgba(59,130,246,0.05)" />
      {/* Model node */}
      <circle
        cx="60"
        cy="40"
        r="12"
        fill="rgba(59,130,246,0.12)"
        stroke="rgba(96,165,250,0.3)"
        strokeWidth="1.5"
        style={{ animation: "node-breathe 2s ease-in-out infinite" }}
      />
      {/* Input node */}
      <circle cx="20" cy="40" r="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Output node */}
      <circle cx="100" cy="40" r="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Labels */}
      <text x="60" y="62" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.3)">MODEL</text>
      <text x="20" y="58" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.25)">INPUT</text>
      <text x="100" y="58" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.25)">OUTPUT</text>
      <CornerMarks />
    </svg>
  );
}

export function StaffDiagram() {
  const engineers = [
    { cx: 20, cy: 22, initials: "JD" },
    { cx: 60, cy: 15, initials: "MK" },
    { cx: 100, cy: 22, initials: "SR" },
    { cx: 20, cy: 60, initials: "AT" },
    { cx: 60, cy: 67, initials: "LN" },
    { cx: 100, cy: 60, initials: "PM" },
  ];
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Edges from engineers to center */}
      {engineers.map((e, i) => (
        <line key={i} x1={e.cx} y1={e.cy} x2="60" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      ))}
      {/* Engineer nodes */}
      {engineers.map((e, i) => (
        <g key={i}>
          <circle cx={e.cx} cy={e.cy} r="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <text x={e.cx} y={e.cy} textAnchor="middle" dominantBaseline="middle" fontSize="5" fontFamily="monospace" fill="rgba(255,255,255,0.4)">{e.initials}</text>
        </g>
      ))}
      {/* Center project node */}
      <circle cx="60" cy="40" r="10" fill="rgba(59,130,246,0.2)" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" />
      <text x="60" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="5" fontFamily="monospace" fill="rgba(96,165,250,0.6)">PROJECT</text>
      <CornerMarks />
    </svg>
  );
}

export function MobileDiagram() {
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Phone outline */}
      <rect x="35" y="3" width="50" height="74" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      {/* Camera notch */}
      <rect x="51" y="6" width="18" height="5" rx="2.5" fill="rgba(0,0,0,0.6)" />
      {/* Header bar */}
      <rect x="38" y="14" width="44" height="8" rx="2" fill="rgba(59,130,246,0.15)" />
      {/* Content card */}
      <rect x="38" y="25" width="44" height="18" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <text x="60" y="37" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.65)">248k</text>
      {/* Chart */}
      <polyline points="38,52 46,48 54,50 62,44 70,42 82,40" fill="none" stroke="rgba(96,165,250,0.5)" strokeWidth="1.2" />
      {/* Bottom nav */}
      <rect x="38" y="64" width="44" height="10" rx="2" fill="rgba(255,255,255,0.04)" />
      <circle cx="48" cy="69" r="2" fill="rgba(59,130,246,0.6)" />
      <circle cx="60" cy="69" r="2" fill="rgba(255,255,255,0.15)" />
      <circle cx="72" cy="69" r="2" fill="rgba(255,255,255,0.15)" />
      {/* Home indicator */}
      <rect x="48" y="76" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
      <CornerMarks />
    </svg>
  );
}

export function CloudDiagram() {
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Tier 1 label */}
      <text x="60" y="10" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.22)">CDN / LB</text>
      {/* Tier 1 boxes */}
      <rect x="20" y="14" width="36" height="14" rx="2" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
      <text x="38" y="23" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill="rgba(255,255,255,0.45)">CDN</text>
      <rect x="64" y="14" width="36" height="14" rx="2" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
      <text x="82" y="23" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill="rgba(255,255,255,0.45)">BALANCER</text>
      {/* Connectors tier1 to tier2 */}
      <line x1="38" y1="28" x2="38" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="82" y1="28" x2="60" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Tier 2 label */}
      <text x="60" y="38" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.22)">SERVICES</text>
      {/* Tier 2 boxes */}
      <rect x="8" y="42" width="30" height="12" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <text x="23" y="50" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="rgba(255,255,255,0.35)">SVC A</text>
      <rect x="45" y="42" width="30" height="12" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <text x="60" y="50" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="rgba(255,255,255,0.35)">SVC B</text>
      <rect x="82" y="42" width="30" height="12" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <text x="97" y="50" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="rgba(255,255,255,0.35)">SVC C</text>
      {/* Connectors tier2 to tier3 */}
      <line x1="23" y1="54" x2="23" y2="62" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="60" y1="54" x2="60" y2="62" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="97" y1="54" x2="97" y2="62" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Tier 3 label */}
      <text x="60" y="62" textAnchor="middle" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.22)">DATA</text>
      {/* Tier 3 boxes */}
      <rect x="8" y="66" width="30" height="10" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.2)" strokeWidth="0.8" />
      <text x="23" y="73" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill="rgba(52,211,153,0.6)">DB</text>
      <rect x="45" y="66" width="30" height="10" rx="2" fill="rgba(245,158,11,0.08)" stroke="rgba(251,191,36,0.15)" strokeWidth="0.8" />
      <text x="60" y="73" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill="rgba(251,191,36,0.55)">CACHE</text>
      <rect x="82" y="66" width="30" height="10" rx="2" fill="rgba(139,92,246,0.1)" stroke="rgba(167,139,250,0.18)" strokeWidth="0.8" />
      <text x="97" y="73" textAnchor="middle" fontSize="5.5" fontFamily="monospace" fill="rgba(167,139,250,0.55)">QUEUE</text>
      <CornerMarks />
    </svg>
  );
}

export function UIUXDiagram() {
  const grandchildren = [
    { x: 2, label: "Color" },
    { x: 26, label: "Space" },
    { x: 40, label: "Button" },
    { x: 64, label: "Input" },
    { x: 78, label: "Form" },
    { x: 100, label: "Page" },
  ];
  const children = [
    { x: 8, label: "TOKENS" },
    { x: 46, label: "COMPS" },
    { x: 84, label: "PATTERNS" },
  ];
  const swatchColors = [
    "rgba(59,130,246,0.6)",
    "rgba(139,92,246,0.6)",
    "rgba(16,185,129,0.6)",
    "rgba(245,158,11,0.6)",
    "rgba(239,68,68,0.6)",
  ];
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Root */}
      <rect x="42" y="4" width="36" height="12" rx="2" fill="rgba(59,130,246,0.15)" stroke="rgba(96,165,250,0.25)" strokeWidth="1" />
      <text x="60" y="13" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="rgba(255,255,255,0.55)">DESIGN SYSTEM</text>
      {/* Branch lines root to children */}
      <line x1="60" y1="16" x2="22" y2="26" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="60" y1="16" x2="60" y2="26" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="60" y1="16" x2="98" y2="26" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      {/* Children */}
      {children.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="26" width="28" height="10" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <text x={c.x + 14} y="33" textAnchor="middle" fontSize="5" fontFamily="monospace" fill="rgba(255,255,255,0.4)">{c.label}</text>
        </g>
      ))}
      {/* Connector lines children to grandchildren */}
      <line x1="22" y1="36" x2="11" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="22" y1="36" x2="35" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="60" y1="36" x2="49" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="60" y1="36" x2="73" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="98" y1="36" x2="87" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="98" y1="36" x2="109" y2="42" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      {/* Grandchildren */}
      {grandchildren.map((gc, i) => (
        <g key={i}>
          <rect x={gc.x} y="42" width="20" height="8" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
          <text x={gc.x + 10} y="48" textAnchor="middle" fontSize="4.5" fontFamily="monospace" fill="rgba(255,255,255,0.28)">{gc.label}</text>
        </g>
      ))}
      {/* Color swatches */}
      {swatchColors.map((color, i) => (
        <circle key={i} cx={20 + i * 12} cy="62" r="3.5" fill={color} />
      ))}
      <CornerMarks />
    </svg>
  );
}
