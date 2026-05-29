"use client";

const CENTER = { cx: 200, cy: 150 };
const RADIUS = 115;

const satellites = [
  { angle: 0, label: "Tech Vendor" },
  { angle: 60, label: "Product Co" },
  { angle: 120, label: "Enterprise" },
  { angle: 180, label: "Agency" },
  { angle: 240, label: "Advisor" },
  { angle: 300, label: "SaaS Co" },
];

const nodes = satellites.map((s) => {
  const rad = (s.angle * Math.PI) / 180;
  return {
    cx: Math.round((CENTER.cx + RADIUS * Math.cos(rad)) * 10) / 10,
    cy: Math.round((CENTER.cy + RADIUS * Math.sin(rad)) * 10) / 10,
    label: s.label,
  };
});

export default function NetworkGraph() {
  return (
    <svg
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        {nodes.map((node, i) => (
          <path
            key={`edge-path-${i}`}
            id={`edge${i}`}
            d={`M ${CENTER.cx},${CENTER.cy} L ${node.cx},${node.cy}`}
          />
        ))}
      </defs>

      {/* Edge lines */}
      {nodes.map((node, i) => (
        <line
          key={`edge-line-${i}`}
          x1={CENTER.cx}
          y1={CENTER.cy}
          x2={node.cx}
          y2={node.cy}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.8"
          strokeDasharray="3 4"
        />
      ))}

      {/* Animated data packets */}
      {nodes.map((_, i) => {
        const begin1 = `${(i * 0.5).toFixed(1)}s`;
        const begin2 = `${(i * 0.5 + 1.5).toFixed(1)}s`;
        return (
          <g key={`packets-${i}`}>
            {/* Packet 1 */}
            <circle r="2" fill="rgba(96,165,250,0.65)">
              <animateMotion dur="3s" begin={begin1} repeatCount="indefinite">
                <mpath href={`#edge${i}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.8;0.8;0"
                keyTimes="0;0.1;0.9;1"
                dur="3s"
                begin={begin1}
                repeatCount="indefinite"
              />
            </circle>
            {/* Packet 2 */}
            <circle r="2" fill="rgba(96,165,250,0.65)">
              <animateMotion dur="3s" begin={begin2} repeatCount="indefinite">
                <mpath href={`#edge${i}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.8;0.8;0"
                keyTimes="0;0.1;0.9;1"
                dur="3s"
                begin={begin2}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Satellite nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r="7"
            fill="rgba(255,255,255,0.12)"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          <text
            x={node.cx}
            y={node.cy + 7 + 12}
            textAnchor="middle"
            fontSize="7"
            fontFamily="monospace"
            fill="rgba(255,255,255,0.28)"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Center node glow ring */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="24"
        fill="rgba(59,130,246,0.06)"
      />

      {/* Center node */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r="14"
        fill="rgba(59,130,246,0.55)"
        stroke="rgba(96,165,250,0.4)"
        strokeWidth="1.5"
        style={{ animation: "node-breathe 3s ease-in-out infinite" }}
      />
      <text
        x={CENTER.cx}
        y={CENTER.cy + 3.5}
        textAnchor="middle"
        fontSize="7.5"
        fontFamily="monospace"
        fill="rgba(255,255,255,0.85)"
        fontWeight="700"
      >
        INX
      </text>

      {/* Corner marks */}
      <rect x="8" y="8" width="12" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="8" y="8" width="1" height="12" fill="rgba(59,130,246,0.2)" />
      <rect x="380" y="8" width="12" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="391" y="8" width="1" height="12" fill="rgba(59,130,246,0.2)" />
      <rect x="8" y="291" width="12" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="8" y="280" width="1" height="12" fill="rgba(59,130,246,0.2)" />
      <rect x="380" y="291" width="12" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="391" y="280" width="1" height="12" fill="rgba(59,130,246,0.2)" />

      {/* Label */}
      <text
        x="392"
        y="295"
        textAnchor="end"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(96,165,250,0.18)"
        letterSpacing="0.06em"
      >
        NETWORK TOPOLOGY
      </text>
    </svg>
  );
}
