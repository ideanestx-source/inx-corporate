"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Abstract enterprise architecture diagram */
function ArchDiagram() {
  const nodes = [
    { id: "client", x: 52, y: 68, r: 4, primary: false, label: "Client" },
    { id: "cdn", x: 148, y: 38, r: 3.5, primary: false, label: "CDN" },
    { id: "auth", x: 58, y: 172, r: 3.5, primary: false, label: "Auth" },
    { id: "api", x: 248, y: 148, r: 7, primary: true, label: "API Gateway" },
    { id: "svcA", x: 368, y: 82, r: 4.5, primary: false, label: "Service A" },
    { id: "svcB", x: 376, y: 192, r: 4.5, primary: false, label: "Service B" },
    { id: "db", x: 456, y: 112, r: 5.5, primary: true, label: "Database" },
    { id: "ai", x: 468, y: 218, r: 5.5, primary: true, label: "AI Engine" },
    { id: "cache", x: 270, y: 268, r: 3.5, primary: false, label: "Cache" },
    { id: "queue", x: 156, y: 252, r: 3.5, primary: false, label: "Queue" },
  ];

  const edges = [
    ["client", "cdn"],
    ["client", "auth"],
    ["cdn", "api"],
    ["auth", "api"],
    ["api", "svcA"],
    ["api", "svcB"],
    ["api", "queue"],
    ["svcA", "db"],
    ["svcB", "ai"],
    ["svcA", "ai"],
    ["queue", "cache"],
    ["cache", "api"],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 530 310" className="w-full h-full" aria-hidden="true">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="4"
          refX="5"
          refY="2"
          orient="auto"
        >
          <polygon points="0 0, 6 2, 0 4" fill="rgba(255,255,255,0.1)" />
        </marker>
        <filter id="blur-sm">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Background glow spots */}
      <circle cx="248" cy="148" r="55" fill="rgba(59,130,246,0.04)" filter="url(#blur-sm)" />
      <circle cx="460" cy="165" r="40" fill="rgba(129,140,248,0.03)" filter="url(#blur-sm)" />

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const na = nodeMap[a];
        const nb = nodeMap[b];
        const isPrimary = na?.primary || nb?.primary;
        return (
          <line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke={isPrimary ? "rgba(96,165,250,0.2)" : "rgba(255,255,255,0.07)"}
            strokeWidth={isPrimary ? 1.2 : 0.8}
            strokeDasharray={isPrimary ? "none" : "4 3"}
            markerEnd="url(#arrowhead)"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          {node.primary && (
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 9}
              fill="rgba(59,130,246,0.05)"
            />
          )}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.primary ? "rgba(96,165,250,0.5)" : "rgba(255,255,255,0.18)"}
            stroke={node.primary ? "rgba(96,165,250,0.35)" : "rgba(255,255,255,0.1)"}
            strokeWidth={node.primary ? 1.5 : 1}
            style={
              node.primary
                ? { animation: `node-breathe ${2.5 + Math.random() * 1.5}s ease-in-out infinite` }
                : undefined
            }
          />
          <text
            x={node.x}
            y={node.y - node.r - 5}
            textAnchor="middle"
            fill="rgba(255,255,255,0.22)"
            fontSize="7.5"
            fontFamily="monospace"
            letterSpacing="0.04em"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Engineering corner marks */}
      <rect x="8" y="8" width="12" height="1" fill="rgba(59,130,246,0.3)" />
      <rect x="8" y="8" width="1" height="12" fill="rgba(59,130,246,0.3)" />
      <rect x="510" y="8" width="12" height="1" fill="rgba(59,130,246,0.3)" transform="translate(-12,0)" />
      <rect x="521" y="8" width="1" height="12" fill="rgba(59,130,246,0.3)" />
      <rect x="8" y="293" width="12" height="1" fill="rgba(59,130,246,0.3)" />
      <rect x="8" y="292" width="1" height="12" fill="rgba(59,130,246,0.3)" transform="translate(0,-12)" />
      <rect x="510" y="293" width="12" height="1" fill="rgba(59,130,246,0.3)" transform="translate(-12,0)" />
      <rect x="521" y="280" width="1" height="14" fill="rgba(59,130,246,0.3)" />

      {/* Version label */}
      <text
        x="530"
        y="307"
        textAnchor="end"
        fill="rgba(96,165,250,0.2)"
        fontSize="7"
        fontFamily="monospace"
        letterSpacing="0.08em"
      >
        INX SYSTEM TOPOLOGY v2.4
      </text>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05070e]">
      {/* Layered ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary breathing glow */}
        <motion.div
          className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-blue-600/[0.048] blur-[180px]"
          animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary glow - lower right */}
        <motion.div
          className="absolute bottom-0 right-1/3 w-[650px] h-[500px] rounded-full bg-indigo-800/[0.032] blur-[150px]"
          animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Accent glow - top right */}
        <motion.div
          className="absolute -top-20 right-1/4 w-[400px] h-[320px] rounded-full bg-blue-500/[0.022] blur-[120px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        />

        {/* Refined grid - fades toward center */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 75% 60% at 22% 48%, black 0%, transparent 100%)",
          }}
        />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#05070e] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-44 pb-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">

          {/* Left: Editorial content */}
          <div className="lg:col-span-7">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-[10px] font-mono tracking-[0.32em] uppercase text-white/25 mb-8 select-none"
            >
              MAKE IT PERFORM
            </motion.p>

            {/* Headline - with very subtle glow behind it */}
            <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-2 bg-blue-600/[0.025] blur-[60px] rounded-full pointer-events-none" />
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-5xl sm:text-[64px] lg:text-[78px] font-semibold leading-[1.02] tracking-[-0.01em] text-white mb-8 max-w-[660px]"
              >
                Build Systems{" "}
                <span className="text-gradient">That Perform.</span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-base sm:text-[17px] text-white/55 leading-[1.75] max-w-[500px] mb-12"
            >
              INX is a premium product engineering and digital infrastructure
              company. We build enterprise software, SaaS platforms, mobile
              applications, AI systems, and cloud-native infrastructure for
              organizations that require engineering at scale.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              {/* Primary */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-[3px] bg-blue-500 text-white px-7 py-[11px] text-sm font-semibold hover:bg-blue-400 transition-all duration-200 shadow-[0_0_28px_rgba(59,130,246,0.28)] hover:shadow-[0_0_44px_rgba(59,130,246,0.48)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Explore Services
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>

              {/* Secondary */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[3px] border border-white/[0.11] text-white/70 px-7 py-[11px] text-sm font-medium hover:border-white/[0.22] hover:bg-white/[0.04] hover:text-white/90 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>

          {/* Right: Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center"
          >
            <div className="relative w-full aspect-[530/310] rounded-[4px] border border-white/[0.07] bg-white/[0.015] p-4 overflow-hidden">
              {/* Ambient inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent pointer-events-none" />

              {/* Top label bar */}
              <div className="absolute top-3 left-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[8.5px] font-mono text-white/18 tracking-[0.1em] uppercase ml-1">
                  Architecture Overview
                </span>
              </div>

              <div className="mt-5">
                <ArchDiagram />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
