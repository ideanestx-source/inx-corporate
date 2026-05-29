export default function CultureProfile() {
  const rows = [
    {
      label: "TEAM SIZE",
      leftEnd: "Large",
      rightEnd: "Small",
      pct: 0.85,
      y: 50,
    },
    {
      label: "COMMUNICATION",
      leftEnd: "Synchronous",
      rightEnd: "Async-First",
      pct: 0.8,
      y: 85,
    },
    {
      label: "PROCESS",
      leftEnd: "Ceremony",
      rightEnd: "Outcome",
      pct: 0.75,
      y: 120,
    },
    {
      label: "AUTHORITY",
      leftEnd: "Hierarchical",
      rightEnd: "Tech Merit",
      pct: 0.9,
      y: 155,
    },
    {
      label: "OWNERSHIP",
      leftEnd: "Distributed",
      rightEnd: "Individual",
      pct: 0.7,
      y: 185,
    },
  ];

  const trackX1 = 110;
  const trackX2 = 390;
  const trackWidth = trackX2 - trackX1;

  const corners = [
    // top-left
    [
      { x1: 2, y1: 10, x2: 2, y2: 2 },
      { x1: 2, y1: 2, x2: 10, y2: 2 },
    ],
    // top-right
    [
      { x1: 390, y1: 2, x2: 398, y2: 2 },
      { x1: 398, y1: 2, x2: 398, y2: 10 },
    ],
    // bottom-left
    [
      { x1: 2, y1: 190, x2: 2, y2: 198 },
      { x1: 2, y1: 198, x2: 10, y2: 198 },
    ],
    // bottom-right
    [
      { x1: 390, y1: 198, x2: 398, y2: 198 },
      { x1: 398, y1: 190, x2: 398, y2: 198 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 400 200"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={400} height={200} fill="#060910" />

      {/* Top label */}
      <text
        x={8}
        y={10}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.18)"
      >
        INX CULTURE PROFILE
      </text>

      {/* Rows */}
      {rows.map((row) => {
        const dotX = trackX1 + row.pct * trackWidth;
        return (
          <g key={row.label}>
            {/* Row label */}
            <text
              x={98}
              y={row.y}
              fontSize={8}
              fontFamily="ui-monospace, monospace"
              fill="rgba(255,255,255,0.32)"
              textAnchor="end"
              dominantBaseline="middle"
            >
              {row.label}
            </text>

            {/* Track */}
            <line
              x1={trackX1}
              y1={row.y}
              x2={trackX2}
              y2={row.y}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={2}
            />

            {/* Left endpoint label */}
            <text
              x={trackX1}
              y={row.y + 12}
              fontSize={7}
              fontFamily="ui-monospace, monospace"
              fill="rgba(255,255,255,0.16)"
              textAnchor="start"
            >
              {row.leftEnd}
            </text>

            {/* Right endpoint label */}
            <text
              x={trackX2}
              y={row.y + 12}
              fontSize={7}
              fontFamily="ui-monospace, monospace"
              fill="rgba(255,255,255,0.16)"
              textAnchor="end"
            >
              {row.rightEnd}
            </text>

            {/* INX position dot */}
            <circle cx={dotX} cy={row.y} r={5} fill="#3b82f6" />
          </g>
        );
      })}

      {/* Corner marks */}
      {corners.map((pair, i) =>
        pair.map((line, j) => (
          <line
            key={`cm-${i}-${j}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(255,255,255,0.14)"
            strokeWidth={1}
          />
        ))
      )}
    </svg>
  );
}
