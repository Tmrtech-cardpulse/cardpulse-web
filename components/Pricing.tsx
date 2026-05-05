"use client";

const FREE_FEATURES = [
  "Up to 20 cards in your collection",
  "eBay active listing prices",
  "Discover — news, releases & events",
  "New release notifications",
  "Manual card entry",
];

const PREMIUM_FEATURES = [
  "Unlimited card collection",
  "AI camera scanning",
  "eBay sold price data",
  "Full portfolio P&L tracking",
  "Price alerts & target notifications",
  "Sold price tracking",
  "Portfolio value change alerts",
  "SportsCardPulse Score (demand index)",
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.2)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 16,
          }}>
            <span style={{ color: "#4F8EF7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
              Pricing
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 900,
            letterSpacing: "-1px", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.1,
          }}>
            Start free, upgrade when ready
          </h2>
          <p style={{ color: "#8B90AA", fontSize: 17, lineHeight: 1.6 }}>
            No credit card needed to get started.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

          {/* Free */}
          <div style={{
            background: "#161827",
            border: "1px solid #252A45",
            borderRadius: 24, padding: "36px 32px",
          }}>
            <p style={{ color: "#52566B", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Free</p>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-2px" }}>£0</span>
            </div>
            <p style={{ color: "#52566B", fontSize: 13, marginBottom: 32 }}>No credit card required</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {FREE_FEATURES.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 6,
                    background: "rgba(48,209,88,0.12)", border: "1px solid rgba(48,209,88,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <span style={{ color: "#30D158", fontSize: 11, fontWeight: 800 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#8B90AA", lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>

            <a href="#download" style={{
              display: "block", textAlign: "center",
              background: "transparent", border: "1px solid #252A45",
              color: "#FFFFFF", padding: "14px",
              borderRadius: 12, fontWeight: 600, fontSize: 15,
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#4F8EF7")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#252A45")}
            >
              Download free
            </a>
          </div>

          {/* Premium */}
          <div style={{
            background: "linear-gradient(160deg, #161E38 0%, #161827 100%)",
            border: "1px solid rgba(79,142,247,0.35)",
            borderRadius: 24, padding: "36px 32px",
            position: "relative",
            boxShadow: "0 0 60px rgba(79,142,247,0.08), inset 0 1px 0 rgba(79,142,247,0.1)",
          }}>
            <div style={{
              position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
              background: "linear-gradient(90deg, #4F8EF7, #7B5EF7)",
              color: "#fff", fontSize: 11, fontWeight: 700,
              padding: "5px 16px", borderRadius: 20,
              textTransform: "uppercase", letterSpacing: 0.8, whiteSpace: "nowrap",
            }}>
              Most popular
            </div>

            <p style={{ color: "#4F8EF7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Premium</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-2px" }}>£6.99</span>
              <span style={{ color: "#52566B", fontSize: 15 }}>/mo</span>
            </div>
            <p style={{ color: "#52566B", fontSize: 13, marginBottom: 32 }}>or £59.99/year · 1-day free trial</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {PREMIUM_FEATURES.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: 6,
                    background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <span style={{ color: "#4F8EF7", fontSize: 11, fontWeight: 800 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#FFFFFF", lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>

            <a href="#download" style={{
              display: "block", textAlign: "center",
              background: "linear-gradient(135deg, #4F8EF7, #7B5EF7)",
              color: "#fff", padding: "15px",
              borderRadius: 12, fontWeight: 700, fontSize: 15,
              boxShadow: "0 4px 20px rgba(79,142,247,0.35)",
            }}>
              Start free trial
            </a>
            <p style={{ textAlign: "center", color: "#52566B", fontSize: 12, marginTop: 10 }}>
              Auto-renews after trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
