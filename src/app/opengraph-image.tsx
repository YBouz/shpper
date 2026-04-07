import { ImageResponse } from "next/og";

export const alt = "Shpper — Your Global Personal Shopper";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1F3043",
          padding: "70px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            backgroundColor: "#FDBE12",
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(253,190,18,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            color: "white",
            marginBottom: 36,
            fontFamily: "sans-serif",
          }}
        >
          Shpper
          <span style={{ color: "#FDBE12" }}>.</span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            maxWidth: 750,
            fontFamily: "sans-serif",
          }}
        >
          Your Global Personal Shopper
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
            marginTop: 20,
            maxWidth: 650,
            lineHeight: 1.5,
            fontFamily: "sans-serif",
          }}
        >
          Buy products from anywhere in the world, delivered by real
          travelers. Simple, secure, and personal.
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 56,
            marginTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: 32, fontWeight: 700, color: "#FDBE12" }}
            >
              50+
            </span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
              Countries
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: 32, fontWeight: 700, color: "#FDBE12" }}
            >
              10K+
            </span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
              Users
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: 32, fontWeight: 700, color: "#FDBE12" }}
            >
              4.8
            </span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
              App Rating
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
