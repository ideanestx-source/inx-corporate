export default function TeamTopology() {
  // Traditional pyramid nodes
  const traditionalNodes = [
    { x: 97, y: 30, r: 6, role: "Mgmt" },
    { x: 72, y: 80, r: 6, role: "Mid" },
    { x: 122, y: 80, r: 6, role: "Mid" },
    { x: 47, y: 130, r: 6, role: "Jnr" },
    { x: 97, y: 130, r: 6, role: "Jnr" },
    { x: 147, y: 130, r: 6, role: "Jnr" },
  ];

  // Traditional connections
  const traditionalEdges = [
    { x1: 97, y1: 36, x2: 72, y2: 74 },
    { x1: 97, y1: 36, x2: 122, y2: 74 },
    { x1: 72, y1: 86, x2: 47, y2: 124 },
    { x1: 72, y1: 86, x2: 97, y2: 124 },
    { x1: 122, y1: 86, x2: 97, y2: 124 },
    { x1: 122, y1: 86, x2: 147, y2: 124 },
  ];

  // INX senior nodes
  const inxEngineers = [
    { x: 253, y: 80 },
    { x: 302, y: 80 },
    { x: 351, y: 80 },
  ];

  // INX peer connections
  const inxPeerEdges = [
    { x1: 261, y1: 80, x2: 294, y2: 80 },
    { x1: 310, y1: 80, x2: 343, y2: 80 },
  ];

  // Lines from engineers to client
  const inxClientEdges = inxEngineers.map((e) => ({
    x1: e.x,
    y1: e.y + 8,
    x2: 302,
    y2: 115,
  }));

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
      { x1: 2, y1: 170, x2: 2, y2: 178 },
      { x1: 2, y1: 178, x2: 10, y2: 178 },
    ],
    // bottom-right
    [
      { x1: 390, y1: 178, x2: 398, y2: 178 },
      { x1: 398, y1: 170, x2: 398, y2: 178 },
    ],
  ];

  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width={400} height={180} fill="#060910" />

      {/* Top label */}
      <text
        x={8}
        y={10}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.18)"
      >
        TEAM TOPOLOGY
      </text>

      {/* ── LEFT PANEL: TRADITIONAL ── */}

      {/* Traditional edges */}
      {traditionalEdges.map((e, i) => (
        <line
          key={`te-${i}`}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="rgba(255,255,255,0.10)"
          strokeWidth={1}
        />
      ))}

      {/* Traditional nodes */}
      {traditionalNodes.map((n, i) => (
        <g key={`tn-${i}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="rgba(255,255,255,0.12)"
          />
          <text
            x={n.x}
            y={n.y}
            fontSize={6}
            fontFamily="ui-monospace, monospace"
            fill="rgba(255,255,255,0.35)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {n.role}
          </text>
        </g>
      ))}

      {/* Traditional label */}
      <text
        x={97}
        y={155}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.22)"
        textAnchor="middle"
      >
        TRADITIONAL
      </text>

      {/* ── CENTER DIVIDER ── */}
      <line
        x1={200}
        y1={18}
        x2={200}
        y2={162}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="3 3"
      />

      {/* ── RIGHT PANEL: INX ── */}

      {/* Peer connection lines */}
      {inxPeerEdges.map((e, i) => (
        <line
          key={`ipe-${i}`}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="rgba(59,130,246,0.25)"
          strokeWidth={1}
        />
      ))}

      {/* Client connection lines */}
      {inxClientEdges.map((e, i) => (
        <line
          key={`ice-${i}`}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="rgba(59,130,246,0.18)"
          strokeWidth={1}
        />
      ))}

      {/* INX engineer nodes */}
      {inxEngineers.map((n, i) => (
        <g key={`ine-${i}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r={8}
            fill="rgba(59,130,246,0.18)"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth={1}
          />
          <text
            x={n.x}
            y={n.y}
            fontSize={6}
            fontFamily="ui-monospace, monospace"
            fill="rgba(59,130,246,0.8)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            SNR
          </text>
        </g>
      ))}

      {/* Client node */}
      <circle
        cx={302}
        cy={125}
        r={10}
        fill="rgba(59,130,246,0.08)"
        stroke="rgba(59,130,246,0.25)"
        strokeWidth={1}
      />
      <text
        x={302}
        y={125}
        fontSize={6}
        fontFamily="ui-monospace, monospace"
        fill="rgba(59,130,246,0.55)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        CLIENT
      </text>

      {/* INX label */}
      <text
        x={302}
        y={155}
        fontSize={7}
        fontFamily="ui-monospace, monospace"
        fill="rgba(59,130,246,0.55)"
        textAnchor="middle"
      >
        INX MODEL
      </text>

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
