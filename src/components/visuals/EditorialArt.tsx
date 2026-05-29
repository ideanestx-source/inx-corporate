"use client";

export function SystemsArchArt() {
  return (
    <svg viewBox="0 0 200 110" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Background grid dots */}
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={col * 20 + 10}
            cy={row * 20 + 5}
            r="0.8"
            fill="rgba(255,255,255,0.03)"
          />
        ))
      )}
      {/* Layer 1 - bottom */}
      <rect x="10" y="78" width="180" height="20" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <rect x="18" y="82" width="26" height="12" rx="1" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.15)" strokeWidth="0.8" />
      <rect x="56" y="82" width="26" height="12" rx="1" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.15)" strokeWidth="0.8" />
      <rect x="94" y="82" width="26" height="12" rx="1" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.15)" strokeWidth="0.8" />
      <rect x="132" y="82" width="26" height="12" rx="1" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.15)" strokeWidth="0.8" />
      {/* Layer 2 - middle */}
      <rect x="22" y="52" width="156" height="20" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <rect x="30" y="56" width="36" height="12" rx="1" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" />
      <rect x="80" y="56" width="36" height="12" rx="1" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" />
      <rect x="130" y="56" width="36" height="12" rx="1" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.18)" strokeWidth="0.8" />
      {/* Vertical connectors */}
      <line x1="100" y1="52" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="48" y1="72" x2="31" y2="78" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="98" y1="72" x2="107" y2="78" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Layer 3 - top */}
      <rect x="40" y="28" width="120" height="18" rx="2" fill="rgba(59,130,246,0.08)" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
      <text x="100" y="39" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(96,165,250,0.55)">API GATEWAY</text>
      {/* Top accent line */}
      <line x1="10" y1="1" x2="80" y2="1" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
      {/* Label */}
      <text x="10" y="14" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="0.06em">SYSTEMS ARCHITECTURE</text>
    </svg>
  );
}

export function EngineeringPracticeArt() {
  const codeLines = [
    { y: 18, indent: 12, kw: { x: 12, w: 8 }, code: { x: 24, w: 60 } },
    { y: 30, indent: 20, kw: { x: 20, w: 6 }, code: { x: 30, w: 80 } },
    { y: 40, indent: 28, kw: { x: 28, w: 6 }, code: { x: 38, w: 90 } },
    { y: 50, indent: 28, kw: { x: 28, w: 6 }, code: { x: 38, w: 50 } },
    { y: 60, indent: 20, kw: { x: 20, w: 6 }, code: { x: 30, w: 70 } },
    { y: 70, indent: 12, kw: { x: 12, w: 6 }, code: { x: 22, w: 20 } },
  ];
  return (
    <svg viewBox="0 0 200 110" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Vertical guide line */}
      <line x1="8" y1="15" x2="8" y2="78" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {/* Code lines */}
      {codeLines.map((line, i) => (
        <g key={i}>
          <rect x={line.kw.x} y={line.y} width={line.kw.w} height="5" rx="1" fill="rgba(139,92,246,0.35)" />
          <rect x={line.code.x} y={line.y} width={line.code.w} height="5" rx="1" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}
      {/* Git branch visual */}
      <circle cx="8" cy="45" r="3" fill="rgba(59,130,246,0.5)" />
      <path d="M 8,45 Q 18,40 28,35" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none" />
      <line x1="28" y1="35" x2="28" y2="25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <circle cx="28" cy="25" r="3" fill="rgba(52,211,153,0.5)" />
      {/* Label */}
      <text x="10" y="95" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="0.06em">ENGINEERING PRACTICE</text>
    </svg>
  );
}

export function AISystemsArt() {
  const layer1 = [{ cx: 25, cy: 25 }, { cx: 25, cy: 50 }, { cx: 25, cy: 85 }];
  const layer2 = [{ cx: 100, cy: 18 }, { cx: 100, cy: 40 }, { cx: 100, cy: 62 }, { cx: 100, cy: 84 }];
  const layer3 = [{ cx: 175, cy: 38 }, { cx: 175, cy: 73 }];

  return (
    <svg viewBox="0 0 200 110" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Glow behind layer 2 */}
      <rect x="85" y="5" width="30" height="100" rx="15" fill="rgba(59,130,246,0.03)" />
      {/* Layer 1 → Layer 2 edges */}
      {layer1.map((n1, i) =>
        layer2.map((n2, j) => (
          <line
            key={`l12-${i}-${j}`}
            x1={n1.cx}
            y1={n1.cy}
            x2={n2.cx}
            y2={n2.cy}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.8"
          />
        ))
      )}
      {/* Layer 2 → Layer 3 edges */}
      {layer2.map((n2, i) =>
        layer3.map((n3, j) => (
          <line
            key={`l23-${i}-${j}`}
            x1={n2.cx}
            y1={n2.cy}
            x2={n3.cx}
            y2={n3.cy}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.8"
          />
        ))
      )}
      {/* Layer 1 nodes */}
      {layer1.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
      ))}
      {/* Layer 2 nodes */}
      {layer2.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="6"
          fill="rgba(59,130,246,0.15)"
          stroke="rgba(96,165,250,0.25)"
          strokeWidth="1.2"
          style={{ animation: "node-breathe 2.5s ease-in-out infinite" }}
        />
      ))}
      {/* Layer 3 nodes */}
      {layer3.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="7" fill="rgba(139,92,246,0.2)" stroke="rgba(167,139,250,0.3)" strokeWidth="1.5" />
      ))}
      <text x="10" y="104" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="0.06em">AI SYSTEMS</text>
    </svg>
  );
}

export function InternalSystemsArt() {
  return (
    <svg viewBox="0 0 200 110" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* TRIGGER box */}
      <rect x="10" y="38" width="36" height="22" rx="2" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
      <text x="28" y="51" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(255,255,255,0.45)">TRIGGER</text>
      {/* Arrow right to PROCESS */}
      <line x1="46" y1="49" x2="62" y2="49" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
      <polygon points="62,46.5 66,49 62,51.5" fill="rgba(255,255,255,0.18)" />
      {/* PROCESS box */}
      <rect x="62" y="30" width="44" height="38" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
      <rect x="66" y="35" width="36" height="6" rx="1" fill="rgba(255,255,255,0.04)" />
      <rect x="66" y="43" width="36" height="6" rx="1" fill="rgba(255,255,255,0.04)" />
      <rect x="66" y="51" width="36" height="6" rx="1" fill="rgba(255,255,255,0.04)" />
      {/* Arrow right to OUTPUT */}
      <line x1="106" y1="49" x2="122" y2="49" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
      <polygon points="122,46.5 126,49 122,51.5" fill="rgba(255,255,255,0.18)" />
      {/* OUTPUT box */}
      <rect x="122" y="38" width="36" height="22" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.2)" strokeWidth="0.8" />
      <text x="140" y="51" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(52,211,153,0.55)">OUTPUT</text>
      {/* Loop arrow */}
      <path d="M 158,60 Q 158,75 84,75 Q 10,75 10,60" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />
      <text x="10" y="100" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="0.06em">INTERNAL SYSTEMS</text>
    </svg>
  );
}

export function PerformanceArt() {
  return (
    <svg viewBox="0 0 200 110" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      <defs>
        <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[25, 45, 65, 85].map((y) => (
        <line key={y} x1="10" y1={y} x2="190" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
      ))}
      {/* Area fill */}
      <path
        d="M 10,70 C 25,70 30,35 50,35 C 70,35 75,55 95,52 C 115,49 120,22 140,20 C 160,18 165,38 185,36 L 190,36 L 190,90 L 10,90 Z"
        fill="url(#perfGrad)"
      />
      {/* Waveform line */}
      <path
        d="M 10,70 C 25,70 30,35 50,35 C 70,35 75,55 95,52 C 115,49 120,22 140,20 C 160,18 165,38 185,36 L 190,36"
        stroke="rgba(96,165,250,0.65)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Y-axis labels */}
      <text x="2" y="38" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.18)">100ms</text>
      <text x="2" y="58" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.18)">50ms</text>
      <text x="2" y="88" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.18)">0ms</text>
      {/* X-axis ticks and labels */}
      {["0s", "1s", "2s", "3s"].map((label, i) => (
        <g key={label}>
          <line x1={10 + i * 60} y1="90" x2={10 + i * 60} y2="93" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          <text x={10 + i * 60} y="99" fontSize="6.5" fontFamily="monospace" fill="rgba(255,255,255,0.18)" textAnchor="middle">{label}</text>
        </g>
      ))}
      {/* Last point highlight */}
      <circle cx="190" cy="36" r="6" fill="rgba(96,165,250,0.15)" />
      <circle cx="190" cy="36" r="3" fill="rgba(96,165,250,0.8)" />
      <text x="10" y="104" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="0.06em">PERFORMANCE</text>
    </svg>
  );
}
