import { ImageResponse } from "next/og";

export const alt = "Moksha - Five Keys to Inner Freedom";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f7f1e7 0%, #eee4d5 45%, #e1d7c8 100%)",
          color: "#1f2b25",
          padding: "64px",
          fontFamily: "Georgia, serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "36px",
            border: "1px solid rgba(85,107,93,0.16)",
            borderRadius: "32px"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            zIndex: 1
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "rgba(31,43,37,0.56)",
              fontFamily: "ui-sans-serif, system-ui, sans-serif"
            }}
          >
            Five Keys to Inner Freedom
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: "-0.05em"
            }}
          >
            Moksha
          </div>
          <div
            style={{
              maxWidth: "760px",
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(31,43,37,0.74)",
              fontFamily: "ui-sans-serif, system-ui, sans-serif"
            }}
          >
            Calm guidance for meeting life with clarity, steadiness, and inner
            freedom.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 1
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px"
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 999,
                border: "5px solid rgba(85,107,93,0.88)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  border: "5px solid rgba(140,116,90,0.95)"
                }}
              />
            </div>
            <div
              style={{
                fontSize: 24,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(31,43,37,0.58)",
                fontFamily: "ui-sans-serif, system-ui, sans-serif"
              }}
            >
              mokshakeys.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
