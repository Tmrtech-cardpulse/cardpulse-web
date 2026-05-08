"use client";
import { Camera, PoundSterling, TrendingUp, Bell, Newspaper, Zap } from "lucide-react";

const FEATURES = [
  {
    Icon: Camera,
    title: "AI Card Scanning",
    desc: "Point your camera at any card. Our AI reads the player, year, set, and variant instantly — no typing, no guessing.",
    badge: "Premium",
    color: "#3D7BFF",
  },
  {
    Icon: PoundSterling,
    title: "Live eBay Pricing",
    desc: "Active listing prices free for everyone. Upgrade for real sold prices — what cards are actually changing hands for.",
    badge: null,
    color: "#30D158",
  },
  {
    Icon: TrendingUp,
    title: "Portfolio P&L",
    desc: "Track every card's purchase price against today's market value. See your total collection worth and profit at a glance.",
    badge: "Premium",
    color: "#3D7BFF",
  },
  {
    Icon: Bell,
    title: "Price Alerts",
    desc: "Set a target price on any card. Get a push notification the moment the market hits it. Never miss the right time to sell.",
    badge: "Premium",
    color: "#FF9F0A",
  },
  {
    Icon: Newspaper,
    title: "Discover",
    desc: "Sports card news, upcoming product releases, and UK collector events — updated daily, all in one place.",
    badge: null,
    color: "#BF5AF2",
  },
  {
    Icon: Zap,
    title: "SportsCardPulse Score",
    desc: "Every card gets a 0–100 demand score based on market velocity, price trend, and grading premium. Know what's hot.",
    badge: "Premium",
    color: "#3D7BFF",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 28px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(61,123,255,0.10)", border: "1px solid rgba(61,123,255,0.2)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 16,
          }}>
            <span style={{ color: "var(--scp-accent)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
              Features
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 900,
            letterSpacing: "-1px", color: "var(--scp-text)", marginBottom: 16, lineHeight: 1.1,
          }}>
            Built for serious collectors
          </h2>
          <p style={{ color: "var(--scp-text-secondary)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            From your first scan to a portfolio worth tracking — every tool you need in one app.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}>
          {FEATURES.map(({ Icon, title, desc, badge, color }) => (
            <div key={title} style={{
              background: "var(--scp-surface)",
              border: "1px solid var(--scp-border)",
              borderRadius: 20,
              padding: 28,
              position: "relative",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(61,123,255,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--scp-border)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {badge && (
                <span style={{
                  position: "absolute", top: 20, right: 20,
                  background: "rgba(61,123,255,0.10)", color: "var(--scp-accent)",
                  fontSize: 10, fontWeight: 700, padding: "3px 9px",
                  borderRadius: 6, textTransform: "uppercase", letterSpacing: 0.5,
                  border: "1px solid rgba(61,123,255,0.2)",
                }}>
                  {badge}
                </span>
              )}

              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${color}15`,
                border: `1px solid ${color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18,
              }}>
                <Icon size={24} color={color} strokeWidth={1.75} />
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--scp-text)", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "var(--scp-text-secondary)", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
