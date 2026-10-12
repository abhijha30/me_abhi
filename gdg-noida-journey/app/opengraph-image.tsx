import { ImageResponse } from "next/og";

// Text-only share card used by WhatsApp, Discord, LinkedIn, etc.
export const alt = "GDG Noida — My 2026 Journey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 6,
            color: "#a1a1aa",
          }}
        >
          GDG NOIDA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 6,
              background: "#4285f4",
              marginBottom: 36,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            My 2026 Journey
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#a1a1aa",
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            A year of creating, designing and making things happen with GDG
            Noida.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 5,
            color: "#4285f4",
          }}
        >
          MAY 2026 TO OCTOBER 2026
        </div>
      </div>
    ),
    { ...size },
  );
}
