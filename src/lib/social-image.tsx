import { ImageResponse } from "next/og";
import { siteName } from "@/config/site";
import messages from "../../messages/es.json";

export function createSocialImage() {
  // Use ImageResponse's bundled font; no remote font or image requests are needed.
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: "#2f3436",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path d="M835 630 1065 0H1200V630Z" fill="#84c0bf" fillOpacity="0.12" />
          <path d="M935 630 1165 0M835 630 1065 0" stroke="#84c0bf" strokeOpacity="0.5" />
          <path d="M1070 465h58m-29-29v58" stroke="#84c0bf" strokeWidth="2" />
        </svg>
        <div style={{ display: "flex", fontSize: 40, color: "#84c0bf", letterSpacing: "-2px" }}>
          {siteName}
        </div>
        <div style={{ display: "flex", maxWidth: 900, fontSize: 70, lineHeight: 1.12, letterSpacing: "-3px" }}>
          {messages.Hero.title}
        </div>
        <div style={{ display: "flex", width: 1056, paddingTop: 24, borderTop: "1px solid #84c0bf", fontSize: 24, color: "#84c0bf" }}>
          {messages.Footer.tagline}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
