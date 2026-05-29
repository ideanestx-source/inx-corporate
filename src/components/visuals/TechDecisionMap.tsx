export default function TechDecisionMap() {
  const stages = [
    {
      x: 60,
      label: "REQUIREMENTS",
      sub: "defined first",
      isHighlighted: false,
    },
    {
      x: 180,
      label: "EVALUATION",
      sub: "against real load",
      isHighlighted: false,
    },
    {
      x: 300,
      label: "SELECTION",
      sub: "follows problem",
      isHighlighted: false,
    },
    {
      x: 420,
      label: "OUTCOMES",
      sub: "measured in prod",
      isHighlighted: true,
    },
  ];

  const arrows = [
    { x1: 100, x2: 140 },
    { x1: 220, x2: 260 },
    { x1: 340, x2: 380 },
  ];

  const corners = [
    // top-left
    [
      { x1: 2, y1: 10, x2: 2, y2: 2 },
      { x1: 2, y1: 2, x2: 10, y2: 2 },
    ],
    // top-right
    [
      { x1: 470, y1: 2, x2: 478, y2: 2 },
      { x1: 478, y1: 2, x2: 478, y2: 10 },
    ],
    // bottom-left
    [
      { x1: 2, y1: 90, x2: 2, y2: 98 },
      { x1: 2, y1: 98, x2: 10, y2: 98 },
    ],
    // bottom-right
    [
      { x1: 470, y1: 98, x2: 478, y2: 98 },
      { x1: 478, y1: 90, x2: 478, y2: 98 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 480 100"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={480} height={100} rx={3} fill="#060910" />

      {/* Top label */}
      <text
        x={8}
        y={12}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.18)"
      >
        TECHNOLOGY DECISION CHAIN
      </text>

      {/* Arrows */}
      {arrows.map((a, i) => (
        <g key={i}>
          <line
            x1={a.x1}
            y1={50}
            x2={a.x2 - 5}
            y2={50}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
          />
          <polygon
            points={`${a.x2},50 ${a.x2 - 6},47 ${a.x2 - 6},53`}
            fill="rgba(255,255,255,0.18)"
          />
        </g>
      ))}

      {/* Stage boxes */}
      {stages.map((stage) => (
        <g key={stage.x}>
          <rect
            x={stage.x - 40}
            y={36}
            width={80}
            height={28}
            rx={2}
            fill={stage.isHighlighted ? "rgba(59,130,246,0.06)" : "#060910"}
            stroke={
              stage.isHighlighted
                ? "rgba(59,130,246,0.35)"
                : "rgba(255,255,255,0.12)"
            }
            strokeWidth={1}
          />
          <text
            x={stage.x}
            y={50}
            fontSize={7}
            fontFamily="ui-monospace, monospace"
            fill={stage.isHighlighted ? "#60a5fa" : "rgba(255,255,255,0.45)"}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {stage.label}
          </text>
          {/* Sub-label */}
          <text
            x={stage.x}
            y={74}
            fontSize={6.5}
            fontFamily="ui-monospace, monospace"
            fill="rgba(255,255,255,0.20)"
            textAnchor="middle"
          >
            {stage.sub}
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
