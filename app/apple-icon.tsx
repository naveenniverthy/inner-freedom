import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f7f1e7 0%, #e7ddcf 55%, #ddd1c0 100%)",
          borderRadius: 40
        }}
      >
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 999,
            border: "8px solid rgba(85,107,93,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              border: "8px solid rgba(140,116,90,0.95)"
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
