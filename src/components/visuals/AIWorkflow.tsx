"use client";

const STAGES = [
  { label: "Data Input", sub: "Raw sources" },
  { label: "Ingestion", sub: "Streaming ETL" },
  { label: "Processing", sub: "Transform & clean" },
  { label: "AI Inference", sub: "Model execution" },
  { label: "API Output", sub: "Delivery layer" },
];

const NODE_CENTERS_X = [78, 234, 390, 546, 702];
const NODE_Y = 80;
const NODE_W = 100;
const NODE_H = 60;

// Edge stagger offsets in seconds
const EDGE_STAGGER = [0, 0.44, 0.88, 1.32];
// Per-packet offsets within each edge
const PACKET_OFFSETS = [0, 0.73, 1.46];

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function AIWorkflow() {
  // Compute edges: right edge of node[i] to left edge of node[i+1]
  const edges = NODE_CENTERS_X.slice(0, -1).map((cx, i) => ({
    x1: cx + NODE_W / 2,
    x2: NODE_CENTERS_X[i + 1] - NODE_W / 2,
    id: `edge${i}`,
    stagger: EDGE_STAGGER[i],
  }));

  return (
    <svg
      viewBox="0 0 780 160"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        {/* Edge paths for animateMotion */}
        {edges.map((e) => (
          <path key={e.id} id={e.id} d={`M ${e.x1},${NODE_Y} L ${e.x2},${NODE_Y}`} />
        ))}
      </defs>

      {/* Edge dashed lines */}
      {edges.map((e) => (
        <line
          key={`line-${e.id}`}
          x1={e.x1}
          y1={NODE_Y}
          x2={e.x2}
          y2={NODE_Y}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}

      {/* Animated data packets on each edge */}
      {edges.map((e) =>
        PACKET_OFFSETS.map((offset, pi) => {
          const begin = `${(e.stagger + offset).toFixed(2)}s`;
          return (
            <circle key={`${e.id}-pkt${pi}`} r="2.5" fill="rgba(96,165,250,0.75)">
              <animateMotion
                dur="2.2s"
                begin={begin}
                repeatCount="indefinite"
              >
                <mpath href={`#${e.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.08;0.92;1"
                dur="2.2s"
                begin={begin}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}

      {/* Nodes */}
      {STAGES.map((stage, i) => {
        const cx = NODE_CENTERS_X[i];
        const x = cx - NODE_W / 2;
        const y = NODE_Y - NODE_H / 2;
        const isHighlighted = i === 3;

        return (
          <g key={stage.label}>
            {/* Outer glow for highlighted node */}
            {isHighlighted && (
              <rect
                x={x - 6}
                y={y - 6}
                width={NODE_W + 12}
                height={NODE_H + 12}
                rx="6"
                fill="rgba(59,130,246,0.06)"
              />
            )}

            {/* Main node rect */}
            <rect
              x={x}
              y={y}
              width={NODE_W}
              height={NODE_H}
              rx="3"
              fill={isHighlighted ? "rgba(59,130,246,0.1)" : "rgba(255,255,255,0.03)"}
              stroke={isHighlighted ? "rgba(96,165,250,0.28)" : "rgba(255,255,255,0.07)"}
              strokeWidth="1"
            />

            {/* Index label */}
            <text
              x={x + 8}
              y={y + 13}
              fontSize="7"
              fontFamily="monospace"
              fill={isHighlighted ? "rgba(96,165,250,0.65)" : "rgba(255,255,255,0.2)"}
              letterSpacing="0.06em"
            >
              {pad2(i + 1)}
            </text>

            {/* Stage label */}
            <text
              x={cx}
              y={NODE_Y + 4}
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="600"
              fill={isHighlighted ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)"}
            >
              {stage.label}
            </text>

            {/* Sub label */}
            <text
              x={cx}
              y={NODE_Y + 18}
              textAnchor="middle"
              fontSize="8"
              fontFamily="monospace"
              fill="rgba(255,255,255,0.25)"
            >
              {stage.sub}
            </text>
          </g>
        );
      })}

      {/* Engineering corner marks */}
      {/* Top-left */}
      <rect x="8" y="8" width="12" height="1" fill="rgba(59,130,246,0.22)" />
      <rect x="8" y="8" width="1" height="12" fill="rgba(59,130,246,0.22)" />
      {/* Top-right */}
      <rect x="760" y="8" width="12" height="1" fill="rgba(59,130,246,0.22)" />
      <rect x="771" y="8" width="1" height="12" fill="rgba(59,130,246,0.22)" />
      {/* Bottom-left */}
      <rect x="8" y="151" width="12" height="1" fill="rgba(59,130,246,0.22)" />
      <rect x="8" y="140" width="1" height="12" fill="rgba(59,130,246,0.22)" />
      {/* Bottom-right */}
      <rect x="760" y="151" width="12" height="1" fill="rgba(59,130,246,0.22)" />
      <rect x="771" y="140" width="1" height="12" fill="rgba(59,130,246,0.22)" />

      {/* Pipeline label */}
      <text
        x="769"
        y="155"
        textAnchor="end"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(96,165,250,0.2)"
        letterSpacing="0.08em"
      >
        AI PIPELINE / INFERENCE LAYER
      </text>
    </svg>
  );
}
