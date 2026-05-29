export default function MobileScreen() {
  return (
    <svg
      viewBox="0 0 220 420"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Phone outer frame */}
      <rect
        x="1"
        y="1"
        width="218"
        height="418"
        rx="32"
        fill="#060b14"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
      />

      {/* Camera pill */}
      <rect x="85" y="6" width="50" height="12" rx="6" fill="#040810" />

      {/* Home indicator */}
      <rect x="85" y="406" width="50" height="4" rx="2" fill="rgba(255,255,255,0.15)" />

      {/* ── Screen Content ── */}

      {/* Status bar */}
      <text
        x="20"
        y="44"
        fontSize="8.5"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.5)"
        letterSpacing="0.02em"
      >
        9:41
      </text>
      {/* Signal dots (right side) */}
      <circle cx="172" cy="40" r="2" fill="rgba(255,255,255,0.3)" />
      <circle cx="180" cy="40" r="2" fill="rgba(255,255,255,0.3)" />
      <circle cx="188" cy="40" r="2" fill="rgba(255,255,255,0.15)" />
      {/* Battery outline */}
      <rect x="194" y="36" width="16" height="9" rx="2" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />
      <rect x="195" y="37" width="11" height="7" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="210" y="38.5" width="2" height="6" rx="1" fill="rgba(255,255,255,0.2)" />

      {/* App header bar */}
      <rect
        x="12"
        y="54"
        width="196"
        height="38"
        rx="4"
        fill="rgba(255,255,255,0.03)"
      />
      <text
        x="24"
        y="78"
        fontSize="11"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fill="rgba(255,255,255,0.75)"
      >
        Platform
      </text>
      {/* Avatar circle */}
      <circle cx="195" cy="73" r="9" fill="rgba(59,130,246,0.22)" />
      <text
        x="195"
        y="76.5"
        textAnchor="middle"
        fontSize="7"
        fontFamily="monospace"
        fontWeight="600"
        fill="rgba(96,165,250,0.8)"
      >
        IX
      </text>

      {/* Hero metric card */}
      <rect
        x="12"
        y="100"
        width="196"
        height="82"
        rx="4"
        fill="rgba(59,130,246,0.08)"
        stroke="rgba(59,130,246,0.18)"
        strokeWidth="1"
      />
      {/* MRR label */}
      <text
        x="24"
        y="120"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="0.12em"
      >
        MRR
      </text>
      {/* $248k value */}
      <text
        x="24"
        y="148"
        fontSize="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fill="rgba(255,255,255,0.9)"
        letterSpacing="-0.02em"
      >
        $248k
      </text>
      {/* Trend */}
      <text
        x="24"
        y="166"
        fontSize="7.5"
        fontFamily="monospace"
        fill="rgba(52,211,153,0.7)"
      >
        ↑ 12.4% this month
      </text>
      {/* Mini sparkline in card */}
      <polyline
        points="130,155 145,140 160,145 175,130 200,118"
        stroke="rgba(96,165,250,0.55)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Two stat chips side by side */}
      {/* Left chip - Users */}
      <rect
        x="12"
        y="192"
        width="94"
        height="50"
        rx="4"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />
      <text
        x="22"
        y="210"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="0.1em"
      >
        USERS
      </text>
      <text
        x="22"
        y="228"
        fontSize="13"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fill="rgba(255,255,255,0.8)"
        letterSpacing="-0.01em"
      >
        12.4k
      </text>
      <text
        x="22"
        y="238"
        fontSize="7.5"
        fontFamily="monospace"
        fill="rgba(52,211,153,0.65)"
      >
        ↑ 8.1%
      </text>

      {/* Right chip - Uptime */}
      <rect
        x="114"
        y="192"
        width="94"
        height="50"
        rx="4"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />
      <text
        x="124"
        y="210"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="0.1em"
      >
        UPTIME
      </text>
      <text
        x="124"
        y="228"
        fontSize="13"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fill="rgba(255,255,255,0.8)"
        letterSpacing="-0.01em"
      >
        99.98%
      </text>
      <text
        x="124"
        y="238"
        fontSize="7.5"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.3)"
      >
        30d avg
      </text>

      {/* Deployment list */}
      <text
        x="20"
        y="268"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.2)"
        letterSpacing="0.12em"
      >
        RECENT
      </text>

      {/* Row 1 */}
      <circle cx="22" cy="280" r="2" fill="#22c55e" />
      <text x="30" y="283" fontSize="8.5" fontFamily="monospace" fill="rgba(255,255,255,0.55)">
        api-gateway-v3.2.1
      </text>
      <text x="193" y="283" textAnchor="end" fontSize="7.5" fontFamily="monospace" fill="rgba(255,255,255,0.2)">
        2m
      </text>

      {/* Row 2 */}
      <circle cx="22" cy="296" r="2" fill="#60a5fa" />
      <text x="30" y="299" fontSize="8.5" fontFamily="monospace" fill="rgba(255,255,255,0.55)">
        ml-inference-sync
      </text>
      <text x="193" y="299" textAnchor="end" fontSize="7.5" fontFamily="monospace" fill="rgba(255,255,255,0.2)">
        5m
      </text>

      {/* Row 3 */}
      <circle cx="22" cy="312" r="2" fill="#a3a3a3" />
      <text x="30" y="315" fontSize="8.5" fontFamily="monospace" fill="rgba(255,255,255,0.55)">
        migration-0044
      </text>
      <text x="193" y="315" textAnchor="end" fontSize="7.5" fontFamily="monospace" fill="rgba(255,255,255,0.2)">
        12m
      </text>

      {/* Divider line */}
      <line x1="12" y1="340" x2="208" y2="340" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

      {/* Bottom nav */}
      <rect
        x="12"
        y="350"
        width="196"
        height="48"
        rx="6"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />
      {/* 4 nav items evenly spaced at x: 37, 86, 134, 183 */}
      {[
        { x: 37, label: "Home", active: false },
        { x: 86, label: "Analytics", active: true },
        { x: 134, label: "Reports", active: false },
        { x: 183, label: "Settings", active: false },
      ].map((item) => (
        <g key={item.label}>
          <circle
            cx={item.x}
            cy="366"
            r="4"
            fill={item.active ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)"}
          />
          <circle
            cx={item.x}
            cy="366"
            r="2"
            fill={item.active ? "rgba(96,165,250,0.7)" : "rgba(255,255,255,0.18)"}
          />
          <text
            x={item.x}
            y="385"
            textAnchor="middle"
            fontSize="6.5"
            fontFamily="system-ui, -apple-system, sans-serif"
            fill={item.active ? "rgba(96,165,250,0.65)" : "rgba(255,255,255,0.2)"}
          >
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
