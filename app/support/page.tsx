import type { Metadata } from "next";
import Logo from "../../components/Logo";

export const metadata: Metadata = {
  title: "Support — SportsCardPulse",
  description: "Get help with SportsCardPulse. Contact our support team.",
};

export default function SupportPage() {
  return (
    <div style={{ background: "var(--scp-bg)", minHeight: "100vh", fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <header style={{ background: "var(--scp-surface)", borderBottom: "1px solid var(--scp-border)", padding: "20px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <Logo size={32} />
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>
          <span style={{ color: "var(--scp-text)" }}>SportsCard</span><span style={{ color: "var(--scp-accent)" }}>Pulse</span>
        </div>
      </header>

      <main style={{ maxWidth: 600, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20,
            background: "linear-gradient(135deg, #3D7BFF22, #3D7BFF44)",
            border: "1px solid #3D7BFF55",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px", fontSize: 28
          }}>
            ⚡
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", marginBottom: 12 }}>
            How can we help?
          </h1>
          <p style={{ color: "var(--scp-text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
            We're a small team and we read every message. Drop us an email and we'll get back to you as soon as we can.
          </p>
        </div>

        {/* Contact card */}
        <a
          href="mailto:tom@tmrtech.co.uk?subject=SportsCardPulse Support"
          style={{
            display: "flex", alignItems: "center", gap: 20,
            background: "var(--scp-surface)",
            border: "1px solid var(--scp-border)",
            borderRadius: 16, padding: "24px 28px",
            textDecoration: "none",
            transition: "border-color 0.15s",
          }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: 14, flexShrink: 0,
            background: "linear-gradient(135deg, #3D7BFF, #2562e8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
          }}>
            ✉️
          </div>
          <div>
            <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--scp-text-muted)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 4 }}>
              Email Support
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--scp-accent)" }}>
              tom@tmrtech.co.uk
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--scp-text-secondary)", marginTop: 4 }}>
              Typically replies within 24 hours
            </div>
          </div>
        </a>

        {/* Common topics */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--scp-text-muted)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 16 }}>
            Common Topics
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { emoji: "💳", title: "Subscription & Billing", desc: "Upgrades, cancellations, refund requests" },
              { emoji: "📷", title: "Card Scanning", desc: "Scan not working or wrong card identified" },
              { emoji: "💰", title: "Pricing Data", desc: "Missing or incorrect eBay prices" },
              { emoji: "🔒", title: "Account & Privacy", desc: "Login issues, data deletion requests" },
            ].map(({ emoji, title, desc }) => (
              <a
                key={title}
                href={`mailto:tom@tmrtech.co.uk?subject=SportsCardPulse – ${title}`}
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "var(--scp-surface)",
                  border: "1px solid var(--scp-border)",
                  borderRadius: 12, padding: "16px 20px",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: 20 }}>{emoji}</span>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--scp-text)" }}>{title}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--scp-text-secondary)", marginTop: 2 }}>{desc}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--scp-text-muted)", fontSize: "1rem" }}>›</span>
              </a>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 48, textAlign: "center", fontSize: "0.8rem", color: "var(--scp-text-muted)" }}>
          SportsCardPulse is operated by TMR Tech, United Kingdom.
        </p>
      </main>
    </div>
  );
}
