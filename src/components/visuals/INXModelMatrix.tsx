export default function INXModelMatrix() {
  const cols = [
    { label: "CONSULTANCY", x: 210 },
    { label: "AGENCY", x: 294 },
    { label: "STAFF AUG", x: 378 },
    { label: "INX", x: 462, isINX: true },
  ];

  const rows = [
    {
      label: "TECHNICAL DEPTH",
      values: ["partial", "none", "partial", "full"] as const,
    },
    {
      label: "SENIOR-ONLY",
      values: ["none", "none", "partial", "full"] as const,
    },
    {
      label: "OUTCOME OWNERSHIP",
      values: ["none", "none", "none", "full"] as const,
    },
    {
      label: "CONTEXT RETENTION",
      values: ["partial", "none", "none", "full"] as const,
    },
    {
      label: "PROD STANDARDS",
      values: ["none", "none", "none", "full"] as const,
    },
  ];

  type Indicator = "full" | "partial" | "none";

  function renderIndicator(type: Indicator, cx: number, cy: number, isINX: boolean) {
    if (type === "full") {
      return (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={5}
          fill={isINX ? "#3b82f6" : "rgba(255,255,255,0.28)"}
        />
      );
    }
    if (type === "partial") {
      return (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={4}
          fill="rgba(255,255,255,0.14)"
        />
      );
    }
    // none
    return (
      <circle
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r={4.5}
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={1}
      />
    );
  }

  const rowHeight = 34;
  const firstRowCenterY = 67;
  const cornerLen = 8;

  // Corner L-marks
  const corners = [
    // top-left
    [
      { x1: 2, y1: 10, x2: 2, y2: 2 },
      { x1: 2, y1: 2, x2: 10, y2: 2 },
    ],
    // top-right
    [
      { x1: 494, y1: 2, x2: 502, y2: 2 },
      { x1: 502, y1: 2, x2: 502, y2: 10 },
    ],
    // bottom-left
    [
      { x1: 2, y1: 222, x2: 2, y2: 230 },
      { x1: 2, y1: 230, x2: 10, y2: 230 },
    ],
    // bottom-right
    [
      { x1: 494, y1: 230, x2: 502, y2: 230 },
      { x1: 502, y1: 222, x2: 502, y2: 230 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 504 232"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={504} height={232} fill="#060910" />

      {/* Section label */}
      <text
        x={8}
        y={10}
        fontSize={7}
        fill="rgba(255,255,255,0.18)"
        fontFamily="ui-monospace, monospace"
      >
        CAPABILITY MATRIX
      </text>

      {/* INX column background */}
      <rect
        x={441}
        y={14}
        width={44}
        height={212}
        fill="rgba(59,130,246,0.07)"
      />

      {/* Vertical rule lines */}
      {cols.map((col) => (
        <line
          key={`vline-${col.x}`}
          x1={col.x - 42}
          y1={36}
          x2={col.x - 42}
          y2={220}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={1}
        />
      ))}

      {/* Column headers */}
      {cols.map((col) => (
        <text
          key={`header-${col.x}`}
          x={col.x}
          y={24}
          fontSize={8}
          textAnchor="middle"
          fill={col.isINX ? "#60a5fa" : "rgba(255,255,255,0.25)"}
          fontFamily="ui-monospace, monospace"
          fontWeight={col.isINX ? "500" : "400"}
        >
          {col.label}
        </text>
      ))}

      {/* Header separator */}
      <line
        x1={4}
        y1={32}
        x2={500}
        y2={32}
        stroke="rgba(255,255,255,0.07)"
        strokeWidth={1}
      />

      {/* Rows */}
      {rows.map((row, rowIdx) => {
        const cy = firstRowCenterY + rowIdx * rowHeight;
        const lineY = cy + rowHeight / 2;
        return (
          <g key={row.label}>
            {/* Row separator */}
            {rowIdx < rows.length - 1 && (
              <line
                x1={4}
                y1={lineY}
                x2={500}
                y2={lineY}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth={1}
              />
            )}
            {/* Row label */}
            <text
              x={155}
              y={cy}
              fontSize={9}
              textAnchor="end"
              dominantBaseline="middle"
              fill="rgba(255,255,255,0.32)"
              fontFamily="ui-monospace, monospace"
            >
              {row.label}
            </text>
            {/* Indicators */}
            {row.values.map((val, colIdx) => {
              const col = cols[colIdx];
              return renderIndicator(val, col.x, cy, !!col.isINX);
            })}
          </g>
        );
      })}

      {/* Corner marks */}
      {corners.map((pair, i) =>
        pair.map((line, j) => (
          <line
            key={`corner-${i}-${j}`}
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
