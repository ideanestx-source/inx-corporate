export default function PublicationFlow() {
  const nodes = [
    { x: 60, label1: "DELIVERY", label2: "EXPERIENCE", isHighlighted: false },
    { x: 185, label1: "ANALYSIS", label2: "INSIGHT", isHighlighted: false },
    { x: 310, label1: "POSITION", label2: "POSITION", isHighlighted: false },
    { x: 440, label1: "PUBLISHED", label2: "EDITORIAL", isHighlighted: true },
  ];

  const arrows = [
    { x1: 78, x2: 167 },
    { x1: 203, x2: 292 },
    { x1: 328, x2: 422 },
  ];

  // Corner marks: top-left and bottom-right only
  const cornerMarks = [
    // top-left
    [
      { x1: 2, y1: 8, x2: 2, y2: 2 },
      { x1: 2, y1: 2, x2: 10, y2: 2 },
    ],
    // bottom-right
    [
      { x1: 490, y1: 88, x2: 498, y2: 88 },
      { x1: 498, y1: 82, x2: 498, y2: 88 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 500 90"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={500} height={90} rx={3} fill="#060910" />

      {/* Top label */}
      <text
        x={10}
        y={12}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.18)"
      >
        PUBLICATION MODEL
      </text>

      {/* Arrow lines */}
      {arrows.map((a, i) => (
        <g key={i}>
          <line
            x1={a.x1}
            y1={45}
            x2={a.x2 - 5}
            y2={45}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
          />
          {/* Arrowhead */}
          <polygon
            points={`${a.x2},45 ${a.x2 - 6},42 ${a.x2 - 6},48`}
            fill="rgba(255,255,255,0.18)"
          />
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.x}>
          <circle
            cx={node.x}
            cy={45}
            r={18}
            fill={node.isHighlighted ? "rgba(59,130,246,0.06)" : "#060910"}
            stroke={
              node.isHighlighted
                ? "rgba(59,130,246,0.35)"
                : "rgba(255,255,255,0.12)"
            }
            strokeWidth={1}
          />
          <text
            x={node.x}
            y={42}
            fontSize={7}
            fontFamily="ui-monospace, monospace"
            fill="rgba(255,255,255,0.45)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {node.label1}
          </text>
          <text
            x={node.x}
            y={52}
            fontSize={7}
            fontFamily="ui-monospace, monospace"
            fill="rgba(255,255,255,0.28)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {node.label2}
          </text>
        </g>
      ))}

      {/* Corner marks */}
      {cornerMarks.map((pair, i) =>
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
