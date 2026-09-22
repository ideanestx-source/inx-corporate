function CornerMarks() {
  return (
    <>
      <rect x="2" y="2" width="10" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="2" y="2" width="1" height="10" fill="rgba(59,130,246,0.25)" />
      <rect x="108" y="2" width="10" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="117" y="2" width="1" height="10" fill="rgba(59,130,246,0.25)" />
      <rect x="2" y="77" width="10" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="2" y="68" width="1" height="10" fill="rgba(59,130,246,0.25)" />
      <rect x="108" y="77" width="10" height="1" fill="rgba(59,130,246,0.25)" />
      <rect x="117" y="68" width="1" height="10" fill="rgba(59,130,246,0.25)" />
    </>
  );
}

/**
 * Generic, purely abstract stand-in visual for a product with no supplied
 * media — layered panels suggesting "a software product" without
 * resembling any specific screenshot or UI. Not tied to any product's
 * actual interface; safe to reuse across any future product lacking
 * uploaded assets.
 */
export default function AbstractProductVisual() {
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" style={{ display: "block" }}>
      {/* Back panel */}
      <rect x="14" y="10" width="80" height="52" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {/* Mid panel */}
      <rect x="24" y="18" width="80" height="52" rx="3" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* Front panel — accent */}
      <rect x="34" y="26" width="80" height="52" rx="3" fill="rgba(59,130,246,0.05)" stroke="rgba(96,165,250,0.22)" strokeWidth="1" />
      {/* Front panel content rows */}
      <rect x="42" y="36" width="40" height="5" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="42" y="46" width="64" height="4" rx="1" fill="rgba(255,255,255,0.05)" />
      <rect x="42" y="54" width="50" height="4" rx="1" fill="rgba(255,255,255,0.05)" />
      <circle cx="98" cy="38" r="3" fill="rgba(96,165,250,0.4)" style={{ animation: "node-breathe 3s ease-in-out infinite" }} />
      <CornerMarks />
    </svg>
  );
}
