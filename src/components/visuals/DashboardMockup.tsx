"use client";

const NAV_ITEMS = [
  { label: "Overview", icon: "▣" },
  { label: "Analytics", icon: "◈", active: true },
  { label: "Reports", icon: "◧" },
  { label: "Pipelines", icon: "⋮⋮" },
  { label: "Databases", icon: "⬡" },
  { label: "Settings", icon: "⊙" },
  { label: "Team", icon: "◎" },
];

const METRICS = [
  {
    label: "MRR",
    value: "$248k",
    change: "+12.4%",
    positive: true,
    sub: "vs last month",
  },
  {
    label: "Active Users",
    value: "12.4k",
    change: "+8.1%",
    positive: true,
    sub: "30-day window",
  },
  {
    label: "Uptime",
    value: "99.98%",
    change: "30d avg",
    positive: true,
    sub: "SLA compliant",
    noArrow: true,
  },
  {
    label: "API Latency",
    value: "142ms",
    change: "−18ms",
    positive: true,
    sub: "p95 baseline",
  },
];

const EVENTS = [
  {
    type: "deploy",
    name: "api-gateway-v3.2.1",
    status: "Deployed",
    statusColor: "#22c55e",
    time: "2m ago",
    dotColor: "#22c55e",
  },
  {
    type: "pipeline",
    name: "ml-inference-sync",
    status: "Running",
    statusColor: "#60a5fa",
    time: "5m ago",
    dotColor: "#60a5fa",
  },
  {
    type: "db",
    name: "migration-0044-applied",
    status: "Complete",
    statusColor: "#a3a3a3",
    time: "12m ago",
    dotColor: "#a3a3a3",
  },
  {
    type: "alert",
    name: "latency-p95-resolved",
    status: "Resolved",
    statusColor: "#34d399",
    time: "28m ago",
    dotColor: "#34d399",
  },
];

const CHART_PATH =
  "M 0,62 C 14,62 43,50 57,48 C 71,46 100,54 114,55 C 128,56 157,33 171,32 C 185,31 214,38 228,39 C 242,40 271,23 285,22 C 299,21 328,27 342,28 C 356,29 385,13 399,12";

const CHART_AREA_PATH =
  "M 0,62 C 14,62 43,50 57,48 C 71,46 100,54 114,55 C 128,56 157,33 171,32 C 185,31 214,38 228,39 C 242,40 271,23 285,22 C 299,21 328,27 342,28 C 356,29 385,13 399,12 L 399,80 L 0,80 Z";

const X_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export default function DashboardMockup() {
  return (
    <div
      className="relative select-none w-full rounded-[6px] overflow-hidden border border-white/[0.08] bg-[#060a12] text-white"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Window Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-[#07090f]">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 bg-[#0a0e1d] border border-white/[0.06] rounded-[3px] px-3 py-1 min-w-[200px] max-w-[260px] w-full">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className="shrink-0 opacity-30"
            >
              <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1" />
              <path d="M4 2v2l1 1" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            <span
              style={{ fontSize: "9px", letterSpacing: "0.02em" }}
              className="text-white/35 font-mono truncate"
            >
              app.platform.io/analytics
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="h-5 w-14 rounded-[2px] bg-white/[0.04] border border-white/[0.05]" />
          <div className="h-5 w-5 rounded-[2px] bg-white/[0.04] border border-white/[0.05] flex items-center justify-center">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
              <circle cx="3.5" cy="3.5" r="2.5" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
            </svg>
          </div>
        </div>
      </div>

      {/* App Body */}
      <div className="flex" style={{ height: "360px", overflow: "hidden" }}>
        {/* Sidebar */}
        <div
          className="shrink-0 border-r border-white/[0.06] bg-[#060911] flex flex-col py-4"
          style={{ width: "160px" }}
        >
          {/* Logo area */}
          <div className="px-4 mb-5 flex items-center gap-2">
            <div className="h-5 w-5 rounded-[3px] bg-blue-500/80 flex items-center justify-center shrink-0">
              <span style={{ fontSize: "9px", fontWeight: 700, color: "white" }}>P</span>
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600 }} className="text-white/70">
              Platform
            </span>
          </div>

          {/* Workspace badge */}
          <div className="mx-3 mb-4 px-2.5 py-1.5 rounded-[3px] bg-white/[0.03] border border-white/[0.05]">
            <div style={{ fontSize: "8px" }} className="text-white/30 font-mono tracking-wider uppercase mb-0.5">
              Workspace
            </div>
            <div style={{ fontSize: "10px", fontWeight: 500 }} className="text-white/55">
              acme-corp
            </div>
          </div>

          {/* Nav items */}
          <nav className="flex-1 px-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-[3px] mb-0.5 cursor-default ${
                  item.active
                    ? "bg-blue-500/[0.14] border border-blue-500/[0.22]"
                    : "border border-transparent hover:bg-white/[0.03]"
                }`}
              >
                <span
                  style={{ fontSize: "10px" }}
                  className={item.active ? "text-blue-400" : "text-white/25"}
                >
                  {item.icon}
                </span>
                <span
                  style={{ fontSize: "11px", fontWeight: item.active ? 600 : 400 }}
                  className={item.active ? "text-blue-300" : "text-white/40"}
                >
                  {item.label}
                </span>
                {item.active && (
                  <div className="ml-auto h-1 w-1 rounded-full bg-blue-400" />
                )}
              </div>
            ))}
          </nav>

          {/* Bottom user row */}
          <div className="mx-3 mt-2 pt-3 border-t border-white/[0.06] flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center shrink-0">
              <span style={{ fontSize: "7px", fontWeight: 700 }} className="text-blue-400">
                JD
              </span>
            </div>
            <div className="min-w-0">
              <div style={{ fontSize: "9.5px", fontWeight: 500 }} className="text-white/50 truncate">
                J. Davis
              </div>
              <div style={{ fontSize: "8px" }} className="text-white/25 font-mono">
                Admin
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#060a12]">
          {/* Page header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] shrink-0">
            <div className="flex items-center gap-3">
              <h1 style={{ fontSize: "14px", fontWeight: 600 }} className="text-white">
                Analytics
              </h1>
              <div className="h-3.5 w-px bg-white/[0.08]" />
              <span style={{ fontSize: "9px" }} className="text-white/25 font-mono">
                30d · UTC
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-white/[0.04] border border-white/[0.07] hover:border-white/[0.12] transition-colors">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 2h6M2 4h4M3 6h2" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: "10px", fontWeight: 500 }} className="text-white/40">
                  Filter
                </span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-blue-500/[0.15] border border-blue-500/[0.25] hover:border-blue-500/[0.4] transition-colors">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M4 1v5M2 4l2 2 2-2M1 7h6" stroke="rgba(96,165,250,0.7)" strokeWidth="0.8" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: "10px", fontWeight: 500 }} className="text-blue-400">
                  Export
                </span>
              </button>
            </div>
          </div>

          {/* Scrollable inner content */}
          <div className="flex-1 overflow-hidden p-4 flex flex-col gap-4">
            {/* Metric Cards */}
            <div className="grid grid-cols-4 gap-3 shrink-0">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[4px] bg-[#0a0e1d] border border-white/[0.06] p-3"
                >
                  <div style={{ fontSize: "8.5px" }} className="text-white/30 font-mono tracking-widest uppercase mb-2">
                    {m.label}
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" }} className="text-white leading-none mb-1.5">
                    {m.value}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {!m.noArrow && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d={m.positive ? "M4 6V2M2 4l2-2 2 2" : "M4 2v4M2 4l2 2 2-2"}
                          stroke={m.positive ? "#22c55e" : "#ef4444"}
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    <span
                      style={{ fontSize: "9px", fontWeight: 500 }}
                      className={
                        m.noArrow
                          ? "text-white/35"
                          : m.positive
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {m.change}
                    </span>
                    <span style={{ fontSize: "8px" }} className="text-white/20">
                      {m.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="rounded-[4px] bg-[#0a0e1d] border border-white/[0.06] p-4 shrink-0" style={{ flex: "0 0 auto" }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 600 }} className="text-white/75">
                    Revenue over time
                  </span>
                  <span style={{ fontSize: "9px" }} className="text-white/25 ml-2 font-mono">
                    MRR · USD
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                  <span style={{ fontSize: "9px" }} className="text-white/30">
                    MRR
                  </span>
                </div>
              </div>

              <div className="relative" style={{ height: "90px" }}>
                <svg
                  viewBox="0 0 399 80"
                  preserveAspectRatio="none"
                  width="100%"
                  height="82"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(96,165,250,0.22)" />
                      <stop offset="100%" stopColor="rgba(96,165,250,0)" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(96,165,250,0.4)" />
                      <stop offset="100%" stopColor="rgba(96,165,250,0.9)" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  {[16, 32, 48, 64].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="399"
                      y2={y}
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Area fill */}
                  <path d={CHART_AREA_PATH} fill="url(#chartGrad)" />
                  {/* Line */}
                  <path
                    d={CHART_PATH}
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Data point at end */}
                  <circle cx="399" cy="12" r="2.5" fill="#60a5fa" />
                  <circle cx="399" cy="12" r="5" fill="rgba(96,165,250,0.15)" />
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between mt-1.5">
                  {X_LABELS.map((label) => (
                    <span key={label} style={{ fontSize: "8px" }} className="text-white/20 font-mono">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Events Table */}
            <div className="rounded-[4px] bg-[#0a0e1d] border border-white/[0.06] flex-1 min-h-0">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
                <span style={{ fontSize: "10px", fontWeight: 600 }} className="text-white/60">
                  Recent Events
                </span>
                <span style={{ fontSize: "8.5px" }} className="text-blue-400/60 font-mono cursor-default">
                  View all →
                </span>
              </div>
              <div>
                {/* Table header */}
                <div className="grid px-4 py-1.5 border-b border-white/[0.04]" style={{ gridTemplateColumns: "80px 1fr 90px 60px" }}>
                  {["TYPE", "EVENT", "STATUS", "TIME"].map((h) => (
                    <span key={h} style={{ fontSize: "7.5px" }} className="text-white/20 font-mono tracking-widest uppercase">
                      {h}
                    </span>
                  ))}
                </div>
                {EVENTS.map((ev, i) => (
                  <div
                    key={i}
                    className="grid items-center px-4 py-2 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.015] transition-colors cursor-default"
                    style={{ gridTemplateColumns: "80px 1fr 90px 60px" }}
                  >
                    <span style={{ fontSize: "8.5px" }} className="text-white/25 font-mono">
                      {ev.type}
                    </span>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div
                        className="h-1 w-1 rounded-full shrink-0"
                        style={{ backgroundColor: ev.dotColor }}
                      />
                      <span style={{ fontSize: "9.5px", fontWeight: 500 }} className="text-white/65 font-mono truncate">
                        {ev.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span
                        className="px-1.5 py-0.5 rounded-[2px] text-[7.5px] font-mono font-medium"
                        style={{
                          color: ev.statusColor,
                          backgroundColor: `${ev.statusColor}14`,
                          border: `1px solid ${ev.statusColor}28`,
                        }}
                      >
                        {ev.status}
                      </span>
                    </div>
                    <span style={{ fontSize: "8.5px" }} className="text-white/20 font-mono">
                      {ev.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scan line animation overlay */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 h-px bg-white/[0.012]"
          style={{ animation: "scan-line 6s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}
