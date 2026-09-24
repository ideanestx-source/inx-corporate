/**
 * Purely abstract "measurement figure" — a fine grid, edge rulers, an
 * unlabeled trace converging on a crosshair. It plots no data and states no
 * result; the on-figure label says so. Distinct from AbstractProductVisual
 * (stacked UI panels) and AbstractGameVisual (atmospheric glow), and never
 * a stand-in for a real prototype screenshot.
 */
const GRID_X = Array.from({ length: 19 }, (_, i) => (i + 1) * 20);
const GRID_Y = Array.from({ length: 14 }, (_, i) => (i + 1) * 20);
const RULER_X = Array.from({ length: 21 }, (_, i) => i * 20);
const RULER_Y = Array.from({ length: 16 }, (_, i) => i * 20);

export default function AbstractLabVisual() {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      <rect width="400" height="300" fill="#060a12" />

      {/* Fine grid, heavier every 100 units */}
      <g strokeWidth="1">
        {GRID_X.map((x) => (
          <line
            key={`gx-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="300"
            stroke={x % 100 === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)"}
          />
        ))}
        {GRID_Y.map((y) => (
          <line
            key={`gy-${y}`}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke={y % 100 === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)"}
          />
        ))}
      </g>

      {/* Edge rulers */}
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
        {RULER_X.map((x) => (
          <line key={`rx-${x}`} x1={x} y1="300" x2={x} y2={x % 100 === 0 ? 291 : 296} />
        ))}
        {RULER_Y.map((y) => (
          <line key={`ry-${y}`} x1="0" y1={y} x2={y % 100 === 0 ? 9 : 4} y2={y} />
        ))}
      </g>

      {/* Unlabeled trace converging on a target */}
      <path
        d="M 60 236 L 140 182 L 214 204 L 300 118"
        fill="none"
        stroke="rgba(96,165,250,0.35)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      {[
        [60, 236],
        [140, 182],
        [214, 204],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#060a12" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      ))}

      {/* Crosshair target */}
      <circle cx="300" cy="118" r="22" fill="none" stroke="rgba(96,165,250,0.3)" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="268" y1="118" x2="332" y2="118" stroke="rgba(96,165,250,0.25)" strokeWidth="1" />
      <line x1="300" y1="86" x2="300" y2="150" stroke="rgba(96,165,250,0.25)" strokeWidth="1" />
      <circle
        cx="300"
        cy="118"
        r="3"
        fill="rgba(96,165,250,0.75)"
        style={{ animation: "node-breathe 3.2s ease-in-out infinite" }}
      />

      {/* Figure label — states plainly that this is illustrative */}
      <text x="22" y="24" fontSize="7" fontFamily="monospace" letterSpacing="0.1em" fill="rgba(255,255,255,0.24)">
        SCHEMATIC — ILLUSTRATIVE ONLY
      </text>

      {/* Registration marks */}
      <g fill="rgba(59,130,246,0.3)">
        <rect x="8" y="8" width="12" height="1" />
        <rect x="8" y="8" width="1" height="12" />
        <rect x="380" y="8" width="12" height="1" />
        <rect x="391" y="8" width="1" height="12" />
      </g>
    </svg>
  );
}
