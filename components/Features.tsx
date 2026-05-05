"use client";
const FEATURES = [
  {
    icon: "📸",
    title: "AI Card Scanning",
    desc: "Point your camera at any card. Our AI reads the player, year, set, and variant instantly — no typing, no guessing.",
    badge: "Premium",
    color: "#4F8EF7",
  },
  {
    icon: "💰",
    title: "Live eBay Pricing",
    desc: "Real sold prices from eBay the moment you scan. Graded vs raw, PSA 10 vs PSA 9 — broken down clearly.",
    badge: null,
    color: "#30D158",
  },
  {
    icon: "📊",
    title: "Portfolio P&L",
    desc: "Track every card's purchase price against today's market value. See your total collection worth and profit at a glance.",
    badge: "Premium",
    color: "#4F8EF7",
  },
  {
    icon: "🔔",
    title: "Price Alerts",
    desc: "Set a target price on any card. Get a push notification the moment the market hits it. Never miss the right time to sell.",
    badge: "Premium",
    color: "#FF9F0A",
  },
  {
    icon: "📰",
    title: "Discover",
    desc: "Sports card news, upcoming product releases, and UK collector events — updated daily, all in one place.",
    badge: null,
    color: "#BF5AF2",
  },
  {
    icon: "⚡",
    title: "CardPulse Score",
    desc: "Every card gets a 0–100 demand score based on market velocity, price trend, and grading premium. Know what's hot.",
    badge: "Premium",
    color: "#4F8EF7",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.2)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 16,
          }}>
            <span style={{ color: "#4F8EF7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
              Features
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 900,
            letterSpacing: "-1px", color: "#FFFFFF", marginBottom: 16, lineHeight: 1.1,
          }}>
            Built for serious collectors
          </h2>
          <p style={{ color: "#8B90AA", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            From your first scan to a portfolio worth tracking — every tool you need in one app.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background: "#161827",
              border: "1px solid #252A45",
              borderRadius: 20,
              padding: 28,
              position: "relative",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(79,142,247,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#252A45";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {f.badge && (
                <span style={{
                  position: "absolute", top: 20, right: 20,
                  background: "rgba(79,142,247,0.10)", color: "#4F8EF7",
                  fontSize: 10, fontWeight: 700, padding: "3px 9px",
                  borderRadius: 6, textTransform: "uppercase", letterSpacing: 0.5,
                  border: "1px solid rgba(79,142,247,0.2)",
                }}>
                  {f.badge}
                </span>
              )}

              {/* Icon container */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${f.color}15`,
                border: `1px solid ${f.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: 18,
              }}>
                {f.icon}
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#8B90AA", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
