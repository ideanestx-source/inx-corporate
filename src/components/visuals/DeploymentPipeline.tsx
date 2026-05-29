const stages = [
  {
    label: "GIT COMMIT",
    sub: "push to main - 47 files changed",
    status: "done" as const,
    time: "0:03",
    icon: "commit",
  },
  {
    label: "BUILD",
    sub: "webpack 5 · node 20 · compiled in 42s",
    status: "done" as const,
    time: "0:45",
    icon: "build",
  },
  {
    label: "TEST SUITE",
    sub: "847 tests · 0 failures · 94% coverage",
    status: "done" as const,
    time: "2:18",
    icon: "test",
  },
  {
    label: "SECURITY SCAN",
    sub: "0 critical · 0 high · 2 low (acknowledged)",
    status: "done" as const,
    time: "1:02",
    icon: "scan",
  },
  {
    label: "STAGING DEPLOY",
    sub: "verification env · smoke tests passing",
    status: "active" as const,
    time: "running",
    icon: "deploy",
  },
  {
    label: "PRODUCTION",
    sub: "blue-green ready · awaiting gate",
    status: "pending" as const,
    time: "-",
    icon: "prod",
  },
];

function StatusDot({ status }: { status: "done" | "active" | "pending" }) {
  if (status === "done") {
    return (
      <div className="h-4 w-4 rounded-full flex items-center justify-center bg-emerald-400/[0.12]">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M1.5 4L3 5.5L6.5 2.5"
            stroke="rgba(52,211,153,0.7)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (status === "active") {
    return (
      <div
        className="h-4 w-4 rounded-full bg-blue-400/[0.18] animate-pulse"
        style={{ boxShadow: "0 0 6px rgba(96,165,250,0.3)" }}
      />
    );
  }
  return (
    <div className="h-4 w-4 rounded-full bg-white/[0.06] border border-white/[0.12]" />
  );
}

export default function DeploymentPipeline() {
  return (
    <div className="w-full rounded-[5px] border border-white/[0.08] bg-[#060a12] overflow-hidden select-none">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#05090f]">
        <div className="flex items-center gap-2">
          <div
            className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 animate-pulse"
            style={{ boxShadow: "0 0 4px rgba(52,211,153,0.5)" }}
          />
          <span
            style={{ fontSize: "8.5px" }}
            className="font-mono text-white/35 tracking-widest uppercase"
          >
            Deployment Pipeline
          </span>
        </div>
        <span
          style={{ fontSize: "8.5px" }}
          className="font-mono text-white/20"
        >
          v3.2.1 → main
        </span>
      </div>

      {/* Pipeline stages */}
      <div className="divide-y divide-white/[0.04]">
        {stages.map((stage, i) => (
          <div
            key={stage.label}
            className="flex items-start gap-3 px-4 py-3 hover:bg-white/[0.015] transition-colors cursor-default"
          >
            {/* Icon column */}
            <div className="w-7 shrink-0 flex flex-col items-center gap-0">
              <StatusDot status={stage.status} />
              {i < stages.length - 1 && (
                <div className="flex-1 w-px bg-white/[0.06] mt-1" />
              )}
            </div>

            {/* Content column */}
            <div className="flex-1 min-w-0 pb-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold text-white/65 tracking-[0.1em] uppercase">
                  {stage.label}
                </span>
                {stage.status === "active" ? (
                  <span className="inline-block text-[8px] font-mono rounded-[2px] px-1.5 py-0.5 bg-blue-500/10 text-blue-300/60">
                    {stage.time}
                  </span>
                ) : stage.status === "done" ? (
                  <span className="inline-block text-[8px] font-mono text-white/18 px-1.5 py-0.5">
                    {stage.time}
                  </span>
                ) : (
                  <span className="inline-block text-[8px] font-mono text-white/12 px-1.5 py-0.5">
                    {stage.time}
                  </span>
                )}
              </div>
              <p className="text-[9px] text-white/28 font-mono mt-0.5 leading-relaxed">
                {stage.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-4 py-2 border-t border-white/[0.05] flex items-center justify-between">
        <span style={{ fontSize: "7.5px" }} className="font-mono text-white/18 uppercase tracking-wider">
          Pipeline Status
        </span>
        <div className="w-24 h-0.5 bg-white/[0.06] rounded overflow-hidden">
          <div className="w-4/6 h-full bg-gradient-to-r from-blue-500/50 to-emerald-500/50 rounded" />
        </div>
      </div>
    </div>
  );
}
