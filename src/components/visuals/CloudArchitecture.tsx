"use client";

export default function CloudArchitecture() {
  return (
    <svg
      viewBox="0 0 560 300"
      width="100%"
      height="100%"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        {/* Animated packet paths */}
        <path id="ca-p1" d="M 70,68 L 280,110" />
        <path id="ca-p2" d="M 280,68 L 280,110" />
        <path id="ca-p3" d="M 490,68 L 280,110" />
        <path id="ca-p4" d="M 280,160 L 80,200" />
        <path id="ca-p5" d="M 280,160 L 280,200" />
        <path id="ca-p6" d="M 280,160 L 480,200" />
      </defs>

      {/* ── TIER 1: EDGE / CDN LAYER ── */}
      <text x="10" y="20" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.20)" letterSpacing="0.08em">
        EDGE / CDN LAYER
      </text>

      {/* CDN West */}
      <rect x="30" y="30" width="80" height="38" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <text x="70" y="48" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.65)">CDN</text>
      <text x="70" y="60" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(255,255,255,0.25)">us-west</text>

      {/* Load Balancer */}
      <rect x="240" y="30" width="80" height="38" rx="3" fill="rgba(59,130,246,0.10)" stroke="rgba(96,165,250,0.22)" strokeWidth="1" />
      <text x="280" y="48" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.65)">LOAD BALANCER</text>
      <text x="280" y="60" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(96,165,250,0.35)">lb.prod.inx</text>

      {/* CDN East */}
      <rect x="450" y="30" width="80" height="38" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <text x="490" y="48" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.65)">CDN</text>
      <text x="490" y="60" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(255,255,255,0.25)">us-east</text>

      {/* Tier 1 → Tier 2 connectors */}
      <line x1="70" y1="68" x2="280" y2="110" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="280" y1="68" x2="280" y2="110" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="490" y1="68" x2="280" y2="110" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />

      {/* Tier 1 data packets */}
      <circle r="2" fill="rgba(96,165,250,0.5)">
        <animateMotion dur="2.5s" begin="0s" repeatCount="indefinite"><mpath href="#ca-p1" /></animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.9;1" dur="2.5s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="rgba(96,165,250,0.5)">
        <animateMotion dur="2s" begin="0.3s" repeatCount="indefinite"><mpath href="#ca-p2" /></animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.9;1" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="rgba(96,165,250,0.5)">
        <animateMotion dur="2.5s" begin="0.6s" repeatCount="indefinite"><mpath href="#ca-p3" /></animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.9;1" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>

      {/* ── TIER 2: APPLICATION LAYER ── */}
      <text x="10" y="100" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.20)" letterSpacing="0.08em">
        APPLICATION LAYER
      </text>

      {/* Auth Service */}
      <rect x="60" y="120" width="70" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <text x="95" y="133" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.55)">AUTH</text>
      <text x="95" y="143" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.22)">auth.service</text>

      {/* Search Service */}
      <rect x="150" y="120" width="70" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <text x="185" y="133" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.55)">SEARCH</text>
      <text x="185" y="143" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.22)">search.svc</text>

      {/* API Gateway - center, highlighted */}
      <rect x="240" y="110" width="80" height="50" rx="3" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.28)" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="280" y="132" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.75)">API GATEWAY</text>
      <text x="280" y="145" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="rgba(96,165,250,0.45)">gateway.prod</text>

      {/* Worker Service */}
      <rect x="340" y="120" width="70" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <text x="375" y="133" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.55)">WORKER</text>
      <text x="375" y="143" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.22)">worker.svc</text>

      {/* Analytics Service */}
      <rect x="430" y="120" width="70" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <text x="465" y="133" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.55)">ANALYTICS</text>
      <text x="465" y="143" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.22)">analytics.svc</text>

      {/* Tier 2 → Tier 3 connectors from API Gateway */}
      <line x1="280" y1="160" x2="80" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="280" y1="160" x2="180" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="280" y1="160" x2="280" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="280" y1="160" x2="380" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="280" y1="160" x2="480" y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" strokeDasharray="4 4" />

      {/* Tier 2 data packets */}
      <circle r="2" fill="rgba(96,165,250,0.5)">
        <animateMotion dur="2s" begin="0.2s" repeatCount="indefinite"><mpath href="#ca-p4" /></animateMotion>
        <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="rgba(96,165,250,0.5)">
        <animateMotion dur="1.8s" begin="0.5s" repeatCount="indefinite"><mpath href="#ca-p5" /></animateMotion>
        <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="1.8s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="rgba(96,165,250,0.5)">
        <animateMotion dur="2.2s" begin="0.8s" repeatCount="indefinite"><mpath href="#ca-p6" /></animateMotion>
        <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.9;1" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      {/* ── TIER 3: DATA LAYER ── */}
      <text x="10" y="190" fontSize="7" fontFamily="monospace" fill="rgba(255,255,255,0.20)" letterSpacing="0.08em">
        DATA LAYER
      </text>

      {/* DB Primary */}
      <rect x="40" y="200" width="80" height="38" rx="3" fill="rgba(16,185,129,0.10)" stroke="rgba(52,211,153,0.18)" strokeWidth="0.8" />
      <text x="80" y="218" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.65)">DB PRIMARY</text>
      <text x="80" y="230" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(52,211,153,0.35)">postgres.main</text>

      {/* DB Read Replica */}
      <rect x="140" y="200" width="80" height="38" rx="3" fill="rgba(16,185,129,0.07)" stroke="rgba(52,211,153,0.12)" strokeWidth="0.8" />
      <text x="180" y="218" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.55)">DB READ</text>
      <text x="180" y="230" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(52,211,153,0.25)">replica.ro</text>

      {/* Cache */}
      <rect x="240" y="200" width="80" height="38" rx="3" fill="rgba(245,158,11,0.08)" stroke="rgba(251,191,36,0.15)" strokeWidth="0.8" />
      <text x="280" y="218" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.65)">CACHE</text>
      <text x="280" y="230" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(251,191,36,0.30)">redis.cluster</text>

      {/* Queue */}
      <rect x="340" y="200" width="80" height="38" rx="3" fill="rgba(139,92,246,0.10)" stroke="rgba(167,139,250,0.18)" strokeWidth="0.8" />
      <text x="380" y="218" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.65)">QUEUE</text>
      <text x="380" y="230" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(167,139,250,0.30)">rabbitmq</text>

      {/* Object Storage */}
      <rect x="440" y="200" width="80" height="38" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <text x="480" y="218" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="rgba(255,255,255,0.55)">STORAGE</text>
      <text x="480" y="230" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="rgba(255,255,255,0.22)">s3-compatible</text>

      {/* Corner marks */}
      <rect x="8" y="8" width="14" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="8" y="8" width="1" height="14" fill="rgba(59,130,246,0.2)" />
      <rect x="538" y="8" width="14" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="551" y="8" width="1" height="14" fill="rgba(59,130,246,0.2)" />
      <rect x="8" y="291" width="14" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="8" y="278" width="1" height="14" fill="rgba(59,130,246,0.2)" />
      <rect x="538" y="291" width="14" height="1" fill="rgba(59,130,246,0.2)" />
      <rect x="551" y="278" width="1" height="14" fill="rgba(59,130,246,0.2)" />

      {/* Bottom label */}
      <text
        x="552"
        y="295"
        textAnchor="end"
        fontSize="7"
        fontFamily="monospace"
        fill="rgba(96,165,250,0.18)"
        letterSpacing="0.06em"
      >
        CLOUD ARCHITECTURE / PRODUCTION
      </text>
    </svg>
  );
}
