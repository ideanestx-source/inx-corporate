/**
 * Purely abstract atmosphere/world visual — gradient glows, a horizon
 * grid, and ambient particles. Deliberately not a UI-panel mockup (that's
 * AbstractProductVisual's motif) and never a fabricated gameplay
 * screenshot; used wherever a game has no supplied screenshots/artwork.
 */
export default function AbstractGameVisual() {
  return (
    <svg viewBox="0 0 400 240" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      <defs>
        <radialGradient id="game-glow-a" cx="30%" cy="32%" r="60%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.22)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0)" />
        </radialGradient>
        <radialGradient id="game-glow-b" cx="76%" cy="62%" r="55%">
          <stop offset="0%" stopColor="rgba(167,139,250,0.16)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="#060a12" />
      <rect width="400" height="240" fill="url(#game-glow-a)" />
      <rect width="400" height="240" fill="url(#game-glow-b)" />

      {/* Horizon grid */}
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        <line x1="0" y1="180" x2="400" y2="180" />
        <line x1="0" y1="206" x2="400" y2="206" />
        <line x1="60" y1="180" x2="20" y2="240" />
        <line x1="140" y1="180" x2="120" y2="240" />
        <line x1="220" y1="180" x2="220" y2="240" />
        <line x1="300" y1="180" x2="320" y2="240" />
        <line x1="380" y1="180" x2="400" y2="230" />
      </g>

      {/* Ambient particles */}
      <circle cx="90" cy="58" r="1.6" fill="rgba(96,165,250,0.6)" />
      <circle cx="262" cy="40" r="1.2" fill="rgba(167,139,250,0.5)" />
      <circle
        cx="330"
        cy="88"
        r="1.8"
        fill="rgba(96,165,250,0.45)"
        style={{ animation: "node-breathe 4s ease-in-out infinite" }}
      />
      <circle cx="150" cy="98" r="1.4" fill="rgba(167,139,250,0.4)" />

      {/* Central focal node */}
      <circle cx="200" cy="118" r="26" fill="rgba(59,130,246,0.05)" />
      <circle
        cx="200"
        cy="118"
        r="3"
        fill="rgba(96,165,250,0.7)"
        style={{ animation: "node-breathe 3s ease-in-out infinite" }}
      />
    </svg>
  );
}
