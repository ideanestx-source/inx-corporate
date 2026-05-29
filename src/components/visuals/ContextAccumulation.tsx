export default function ContextAccumulation() {
  // Curve path: M 40,138 C 120,130 200,80 340,30
  const curvePath = "M 40,138 C 120,130 200,80 340,30";
  // Closed area path (back along x-axis baseline y=140)
  const areaPath = "M 40,138 C 120,130 200,80 340,30 L 340,140 L 40,140 Z";

  const dataPoints = [
    { cx: 90, cy: 125, label: "INITIAL CONTEXT", labelAbove: false },
    { cx: 190, cy: 95, label: "ESTABLISHED", labelAbove: false },
    { cx: 310, cy: 45, label: "COMPOUNDING VALUE", labelAbove: true },
  ];

  const corners = [
    // top-left
    [
      { x1: 2, y1: 10, x2: 2, y2: 2 },
      { x1: 2, y1: 2, x2: 10, y2: 2 },
    ],
    // top-right
    [
      { x1: 350, y1: 2, x2: 358, y2: 2 },
      { x1: 358, y1: 2, x2: 358, y2: 10 },
    ],
    // bottom-left
    [
      { x1: 2, y1: 160, x2: 2, y2: 168 },
      { x1: 2, y1: 168, x2: 10, y2: 168 },
    ],
    // bottom-right
    [
      { x1: 350, y1: 168, x2: 358, y2: 168 },
      { x1: 358, y1: 160, x2: 358, y2: 168 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 360 170"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={360} height={170} fill="#060910" />

      {/* Label */}
      <text
        x={8}
        y={10}
        fontSize={6.5}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.18)"
      >
        CONTEXT ACCUMULATION MODEL
      </text>

      {/* Dashed grid lines */}
      {[50, 80, 110].map((y) => (
        <line
          key={y}
          x1={40}
          y1={y}
          x2={340}
          y2={y}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
      ))}

      {/* Axes */}
      {/* X axis */}
      <line
        x1={40}
        y1={140}
        x2={340}
        y2={140}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
      />
      {/* Y axis */}
      <line
        x1={40}
        y1={15}
        x2={40}
        y2={140}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={1}
      />

      {/* X axis label */}
      <text
        x={190}
        y={162}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.2)"
        textAnchor="middle"
      >
        PARTNERSHIP DURATION
      </text>

      {/* Y axis label */}
      <text
        x={12}
        y={78}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.2)"
        textAnchor="middle"
        transform="rotate(-90, 12, 78)"
      >
        CONTEXT DEPTH
      </text>

      {/* Area fill */}
      <path d={areaPath} fill="rgba(59,130,246,0.04)" />

      {/* Curve */}
      <path
        d={curvePath}
        stroke="rgba(59,130,246,0.55)"
        strokeWidth={1.5}
        fill="none"
      />

      {/* Data points */}
      {dataPoints.map((pt) => (
        <g key={pt.cx}>
          <circle cx={pt.cx} cy={pt.cy} r={pt.cx === 310 ? 4 : 3} fill="#3b82f6" />
          <text
            x={pt.cx}
            y={pt.labelAbove ? pt.cy - 8 : pt.cy + 12}
            fontSize={6.5}
            fontFamily="ui-monospace, monospace"
            fill="rgba(255,255,255,0.32)"
            textAnchor="middle"
          >
            {pt.label}
          </text>
        </g>
      ))}

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
