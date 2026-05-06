"use client";
import Logo from "./Logo";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.tmrtech.sportscardpulse";

export default function Hero() {
  return (
    <section id="download" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: "130px 28px 80px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(79,142,247,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "15%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(123,94,247,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", position: "relative" }}>
        <div className="hero-grid">

          {/* Left — copy */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.25)",
              borderRadius: 100, padding: "6px 16px", marginBottom: 28,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#4F8EF7",
                boxShadow: "0 0 8px #4F8EF7", display: "inline-block",
              }} />
              <span style={{ fontSize: 13, fontWeight: 700 }}>
                <span style={{ color: "#FFFFFF" }}>SportsCard</span><span style={{ color: "#4F8EF7" }}>Pulse</span>
                <span style={{ color: "#4F8EF7" }}> · AI-powered · Built for UK collectors</span>
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-2px",
              color: "#FFFFFF",
              marginBottom: 24,
            }}>
              The pulse of<br />the{" "}
              <span style={{
                background: "linear-gradient(90deg, #4F8EF7, #7B5EF7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>hobby</span>
            </h1>

            <p style={{
              fontSize: 18, color: "#8B90AA", lineHeight: 1.65,
              marginBottom: 40, maxWidth: 460,
            }}>
              News, market insights, and your collection intelligently managed.
              Scan any card, get live eBay pricing, and track your portfolio P&amp;L in real time.
            </p>

            {/* Download buttons */}
            <div className="hero-buttons">
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#FFFFFF", color: "#0D0F1C",
                padding: "13px 22px", borderRadius: 12,
                fontWeight: 700, fontSize: 15,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                opacity: 0.5, cursor: "default",
              }} title="Coming soon">
                <AppleIcon />
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: 10, fontWeight: 500 }}>Coming soon</div>
                  <div>App Store</div>
                </div>
              </a>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#FFFFFF", color: "#0D0F1C",
                padding: "13px 22px", borderRadius: 12,
                fontWeight: 700, fontSize: 15,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}>
                <PlayIcon />
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ fontSize: 10, fontWeight: 500 }}>Get it on</div>
                  <div>Google Play</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, marginTop: 52, flexWrap: "wrap" }}>
              {[
                { val: "30s", label: "Scan your first card" },
                { val: "Live", label: "eBay sold prices" },
                { val: "Free", label: "To get started" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#4F8EF7", marginBottom: 2 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#52566B", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="hero-mockup">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div style={{
      width: 280, position: "relative",
      filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(79,142,247,0.15))",
    }}>
      <div style={{
        width: 280, height: 560,
        background: "linear-gradient(180deg, #1E2236 0%, #161827 100%)",
        borderRadius: 44,
        border: "1px solid #252A45",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 100, height: 28, background: "#0D0F1C",
          borderRadius: "0 0 18px 18px", zIndex: 10,
        }} />
        <div style={{ padding: "48px 16px 16px", height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ textAlign: "center", marginBottom: 4 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#8B90AA", textTransform: "uppercase", letterSpacing: 0.5 }}>My Collection</div>
          </div>
          <div style={{
            background: "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(123,94,247,0.10))",
            border: "1px solid rgba(79,142,247,0.2)",
            borderRadius: 16, padding: "16px", textAlign: "center",
          }}>
            <div style={{ fontSize: 11, color: "#8B90AA", marginBottom: 4 }}>Total Value</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-1px" }}>£4,821</div>
            <div style={{ fontSize: 12, color: "#30D158", fontWeight: 600, marginTop: 4 }}>↑ £321 this week</div>
          </div>
          {[
            { name: "Erling Haaland", set: "Topps Chrome 2023", val: "£340", gain: "+£120", up: true },
            { name: "Kylian Mbappé", set: "Panini Prizm 2022", val: "£580", gain: "+£95", up: true },
            { name: "Luka Dončić", set: "Panini Select 2021", val: "£210", gain: "-£30", up: false },
          ].map(c => (
            <div key={c.name} style={{
              background: "#1E2236", border: "1px solid #252A45",
              borderRadius: 12, padding: "11px 12px",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{
                width: 36, height: 48, borderRadius: 6,
                background: "linear-gradient(135deg, #252A45, #1E2236)",
                border: "1px solid #252A45", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
              }}>🃏</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                <div style={{ fontSize: 10, color: "#52566B" }}>{c.set}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#FFFFFF" }}>{c.val}</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: c.up ? "#30D158" : "#FF453A" }}>{c.gain}</div>
              </div>
            </div>
          ))}
          <div style={{
            background: "#161827", border: "1px solid #252A45",
            borderRadius: 12, padding: "10px 12px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 11, color: "#8B90AA" }}>SportsCardPulse Score</span>
            <div style={{
              background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.25)",
              borderRadius: 6, padding: "3px 8px",
              fontSize: 12, fontWeight: 800, color: "#4F8EF7",
            }}>87 ⚡</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}
