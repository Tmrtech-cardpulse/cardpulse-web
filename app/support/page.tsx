import type { Metadata } from 'next';

import LegalShell from '@/components/LegalShell';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Support',
  description: 'Questions, bugs and account help.',
  path: '/support',
});

export default function Page() {
  return (
    <LegalShell title={'Support'} meta={'Questions, bugs and account help.'}>
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
          <p style={{ color: "var(--c-text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
            We're a small team and we read every message. Drop us an email and we'll get back to you as soon as we can.
          </p>
        </div>

        {/* Contact card */}
        <a
          href="mailto:tom@tmrtech.co.uk?subject=SportsCardPulse Support"
          style={{
            display: "flex", alignItems: "center", gap: 20,
            background: "var(--c-surface)",
            border: "1px solid var(--c-border)",
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
            <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--c-text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 4 }}>
              Email Support
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--c-accent)" }}>
              tom@tmrtech.co.uk
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--c-text-secondary)", marginTop: 4 }}>
              Typically replies within 24 hours
            </div>
          </div>
        </a>

        {/* Common topics */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--c-text-secondary)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 16 }}>
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
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: 12, padding: "16px 20px",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: 20 }}>{emoji}</span>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--c-text)" }}>{title}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--c-text-secondary)", marginTop: 2 }}>{desc}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--c-text-secondary)", fontSize: "1rem" }}>›</span>
              </a>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 48, textAlign: "center", fontSize: "0.8rem", color: "var(--c-text-secondary)" }}>
          SportsCardPulse is operated by TMR Tech, United Kingdom.
        </p>
    </LegalShell>
  );
}
