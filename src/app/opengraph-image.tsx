import { ImageResponse } from "next/og";

export const alt = "IKO+ STUDIO — Páginas Web y Soluciones Digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1C1E",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "0px" }}>
          <span style={{ fontSize: 72, fontWeight: 700, color: "#FAFAF8" }}>
            IKO
          </span>
          <span style={{ fontSize: 72, fontWeight: 700, color: "#FF6B4A" }}>
            +
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: "#8E8E93",
              letterSpacing: "0.2em",
              marginLeft: 12,
            }}
          >
            STUDIO
          </span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#8E8E93",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Páginas web y soluciones digitales para pequeños negocios y
          emprendedores
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 18,
            color: "#FF6B4A",
            letterSpacing: "0.15em",
          }}
        >
          Lima, Perú
        </div>
      </div>
    ),
    { ...size }
  );
}
