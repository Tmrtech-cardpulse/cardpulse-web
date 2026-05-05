const STEPS = [
  {
    num: "01",
    icon: "📸",
    title: "Scan your card",
    desc: "Open CardPulse and point your camera at any sports card. Our AI reads the player, year, set, and variant automatically — no manual entry needed.",
  },
  {
    num: "02",
    icon: "💰",
    title: "See its real value",
    desc: "Instantly see real eBay sold prices for that exact card. Graded vs raw, PSA 10 vs PSA 9 — broken down so you know exactly where you stand.",
  },
  {
    num: "03",
    icon: "📈",
    title: "Track your portfolio",
    desc: "Save cards with your purchase price. Your collection value updates daily as the market moves — with P&L, gains, and alerts when target prices are hit.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "100px 28px",
      background: "linear-gradient(180deg, transparent 0%, rgba(79,142,247,0.03) 50%, transparent 100%)",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.2)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 16,
          }}>
            <span style={{ color: "#4F8EF7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
              How it works
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 900,
            letterSpacing: "-1px", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.1,
          }}>
            Scan to portfolio in 30 seconds
          </h2>
          <p style={{ color: "#8B90AA", fontSize: 17, maxWidth: 460, margin: "0 auto", lineHeight: 1.6 }}>
            No manual entry. No guessing. Just point, scan, and your collection builds itself.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              background: "#161827",
              border: "1px solid #252A45",
              borderRadius: 20,
              padding: 32,
              position: "relative",
            }}>
              {/* Step number */}
              <div style={{
                position: "absolute", top: 24, right: 24,
                fontSize: 11, fontWeight: 800, color: "#252A45",
                letterSpacing: 1,
              }}>
                {step.num}
              </div>

              {/* Connector dot */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: "absolute", right: -13, top: "50%", transform: "translateY(-50%)",
                  width: 26, height: 2,
                  background: "linear-gradient(90deg, #252A45, transparent)",
                  display: "none", // hidden on mobile, shown via grid gap
                }} />
              )}

              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(123,94,247,0.10))",
                border: "1px solid rgba(79,142,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20,
              }}>
                {step.icon}
              </div>

              <h3 style={{ fontSize: 19, fontWeight: 700, color: "#FFFFFF", marginBottom: 12, letterSpacing: "-0.3px" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "#8B90AA", lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
