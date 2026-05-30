import { ImageResponse } from "next/og";

export const alt = "INX | Custom Software Development & Product Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#05070e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "96px",
          position: "relative",
        }}
      >
        {/* Top accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, #0500FF 30%, #CC00FF 70%, transparent)",
        }} />

        {/* Entity label */}
        <div style={{
          display: "flex",
          color: "rgba(255,255,255,0.28)",
          fontSize: "14px",
          letterSpacing: "0.28em",
          fontFamily: "monospace",
          fontWeight: 500,
          marginBottom: "28px",
        }}>
          IDEANEST X PRIVATE LIMITED
        </div>

        {/* INX wordmark — brand gradient */}
        <div style={{
          display: "flex",
          fontSize: "130px",
          fontWeight: 800,
          lineHeight: 1,
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
          marginBottom: "28px",
          background: "linear-gradient(90deg, #00C4FF 0%, #0500FF 38%, #CC00FF 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}>
          INX
        </div>

        {/* Tagline */}
        <div style={{
          display: "flex",
          color: "rgba(255,255,255,0.75)",
          fontSize: "32px",
          fontWeight: 500,
          fontFamily: "sans-serif",
          marginBottom: "16px",
        }}>
          Custom Software Development
        </div>

        {/* Sub-tagline */}
        <div style={{
          display: "flex",
          color: "rgba(255,255,255,0.30)",
          fontSize: "20px",
          fontFamily: "sans-serif",
          letterSpacing: "0.04em",
        }}>
          Product Engineering · SaaS · AI Systems · Cloud Infrastructure
        </div>

        {/* Bottom accent */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, #0500FF 30%, #CC00FF 70%, transparent)",
        }} />
      </div>
    ),
    { ...size }
  );
}
