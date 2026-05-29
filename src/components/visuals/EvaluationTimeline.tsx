export default function EvaluationTimeline() {
  const nodes = [
    {
      x: 60,
      label: "INQUIRY",
      numeral: "I",
      isHighlighted: false,
      labelFill: "rgba(255,255,255,0.30)",
    },
    {
      x: 210,
      label: "RESPONSE",
      numeral: "II",
      isHighlighted: false,
      labelFill: "rgba(255,255,255,0.30)",
    },
    {
      x: 360,
      label: "DECISION",
      numeral: "III",
      isHighlighted: true,
      labelFill: "#60a5fa",
    },
  ];

  const lines = [
    { x1: 68, x2: 202 },
    { x1: 218, x2: 352 },
  ];

  const timeLabels = [
    { x: 135, y: 28, text: "< 48 HOURS" },
    { x: 285, y: 28, text: "5 – 7 DAYS" },
  ];

  // Corner marks
  const corners = [
    // top-left
    [
      { x1: 2, y1: 8, x2: 2, y2: 2 },
      { x1: 2, y1: 2, x2: 10, y2: 2 },
    ],
    // top-right
    [
      { x1: 410, y1: 2, x2: 418, y2: 2 },
      { x1: 418, y1: 2, x2: 418, y2: 8 },
    ],
    // bottom-left
    [
      { x1: 2, y1: 72, x2: 2, y2: 78 },
      { x1: 2, y1: 78, x2: 10, y2: 78 },
    ],
    // bottom-right
    [
      { x1: 410, y1: 78, x2: 418, y2: 78 },
      { x1: 418, y1: 72, x2: 418, y2: 78 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 420 80"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={420} height={80} rx={3} fill="#060910" />

      {/* Connector lines */}
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={40}
          x2={line.x2}
          y2={40}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={1}
        />
      ))}

      {/* Time labels above lines */}
      {timeLabels.map((tl) => (
        <text
          key={tl.x}
          x={tl.x}
          y={tl.y}
          fontSize={7}
          fontFamily="ui-monospace, monospace"
          fill="rgba(255,255,255,0.22)"
          textAnchor="middle"
        >
          {tl.text}
        </text>
      ))}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.x}>
          <circle
            cx={node.x}
            cy={40}
            r={8}
            fill={node.isHighlighted ? "rgba(59,130,246,0.12)" : "#060910"}
            stroke={
              node.isHighlighted
                ? "rgba(59,130,246,0.35)"
                : "rgba(255,255,255,0.20)"
            }
            strokeWidth={1}
          />
          {/* Numeral inside */}
          <text
            x={node.x}
            y={40}
            fontSize={7}
            fontFamily="ui-monospace, monospace"
            fill="rgba(255,255,255,0.35)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {node.numeral}
          </text>
          {/* Step label below */}
          <text
            x={node.x}
            y={58}
            fontSize={7}
            fontFamily="ui-monospace, monospace"
            fill={node.labelFill}
            textAnchor="middle"
          >
            {node.label}
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
