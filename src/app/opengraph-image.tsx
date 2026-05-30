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
          padding: "80px",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "#4b6fff",
            fontSize: "13px",
            letterSpacing: "0.22em",
            fontFamily: "sans-serif",
          }}
        >
          IDEANEST X PRIVATE LIMITED
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "88px",
            fontWeight: 700,
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}
        >
          INX
        </div>
        <div
          style={{
            color: "#e2e8f0",
            fontSize: "30px",
            fontWeight: 500,
            fontFamily: "sans-serif",
          }}
        >
          Custom Software Development
        </div>
        <div
          style={{
            color: "#475569",
            fontSize: "20px",
            fontFamily: "sans-serif",
          }}
        >
          Product Engineering · SaaS · AI Systems · Cloud Infrastructure
        </div>
      </div>
    ),
    { ...size }
  );
}
