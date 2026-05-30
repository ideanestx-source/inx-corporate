import { ImageResponse } from "next/og";
import { getArticle } from "@/lib/insights";

export const alt = "INX Insights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

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
          justifyContent: "space-between",
          padding: "72px 80px",
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
          INX INSIGHTS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              color: "#4b6fff",
              fontSize: "13px",
              letterSpacing: "0.1em",
              fontFamily: "sans-serif",
            }}
          >
            {article?.category ?? "Engineering"}
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "46px",
              fontWeight: 700,
              lineHeight: 1.15,
              fontFamily: "sans-serif",
              maxWidth: "960px",
            }}
          >
            {article?.title ?? "INX Insights"}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#475569",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            ideanestx.com/insights
          </div>
          <div
            style={{
              color: "#475569",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            {article?.readingTime ?? ""}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
