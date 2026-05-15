import type { Metadata } from "next";
import Logo from "../../components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy — SportsCardPulse",
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--scp-bg)", minHeight: "100vh", padding: "0 0 80px", fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <header style={{ background: "var(--scp-surface)", borderBottom: "1px solid var(--scp-border)", padding: "20px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <Logo size={32} />
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>
          <span style={{ color: "var(--scp-text)" }}>SportsCard</span><span style={{ color: "var(--scp-accent)" }}>Pulse</span>
        </div>
      </header>

      <main style={{ maxWidth: 740, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px", marginBottom: 6 }}>Privacy Policy</h1>
        <p style={{ color: "#52566B", fontSize: "0.85rem", marginBottom: 40 }}>SportsCardPulse · Last updated: May 2026 · Operated by Thomas Michael Ratcliffe, United Kingdom</p>

        {[
          { title: "1. Who we are", content: <p>SportsCardPulse is a sports card collection management app operated by Thomas Michael Ratcliffe, a sole trader based in the United Kingdom. Thomas Michael Ratcliffe is the data controller for the purposes of UK GDPR. Questions about this policy: <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a></p> },
          { title: "2. What data we collect", content: <ul style={{ paddingLeft: "1.4rem" }}>
            <li>Account data: your email address and encrypted password, used solely to identify your account.</li>
            <li>Collection data: card details you add (player, year, set, purchase price, notes, photos). Visible only to you.</li>
            <li>Scan images: photos you take to identify cards. Processed by our AI service and retained to display your card in the app.</li>
            <li>Catalogue contributions (optional): anonymised card identity data if you opt in. No prices or personal details. Withdraw via Profile → Data &amp; Privacy.</li>
            <li>Usage data: app opens and feature usage to improve the product. No third-party advertising trackers.</li>
          </ul> },
          { title: "3. How we use your data", content: <ul style={{ paddingLeft: "1.4rem" }}>
            <li>To provide app features: collection tracking, AI card identification, P&amp;L calculations, price alerts.</li>
            <li>To send push notifications you have explicitly requested. Disable in Profile → Notifications or device settings.</li>
            <li>To process subscription payments via RevenueCat and Apple/Google. We do not store payment card details.</li>
            <li>To build the anonymised SportsCardPulse Card Catalogue, if you have opted in.</li>
          </ul> },
          { title: "4. Who we share data with", content: <ul style={{ paddingLeft: "1.4rem" }}>
            <li>Supabase — database and file storage (EU region)</li>
            <li>Anthropic — card image analysis via Claude AI. Images not retained beyond the API call.</li>
            <li>eBay — market price lookups. No personal data sent to eBay.</li>
            <li>RevenueCat — subscription management.</li>
            <li>Shotstack — video generation for the Share feature.</li>
          </ul> },
          { title: "5. Data retention", content: <p>Your data is retained while your account is active. You can delete your account at any time from within the app. Deletion requests are fulfilled within 30 days. Catalogue contributions are removed immediately upon consent withdrawal.</p> },
          { title: "6. Your rights (UK GDPR)", content: <p>You have the right to access, correct, export, or delete your personal data. Email <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a>. You may also complain to the <a href="https://ico.org.uk" style={{ color: "#4F8EF7" }}>ICO</a>.</p> },
          { title: "7. Cookies", content: <p>The app does not use browser cookies. Sessions are stored locally on your device using secure storage.</p> },
          { title: "8. Children", content: <p>SportsCardPulse is not directed at children under 13. We do not knowingly collect data from children under 13.</p> },
          { title: "9. Changes to this policy", content: <p>We may update this policy. Significant changes will be notified within the app. Continued use constitutes acceptance.</p> },
        ].map(({ title, content }) => (
          <section key={title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>{title}</h2>
            <div style={{ color: "#8B90AA", fontSize: "0.95rem", lineHeight: 1.75 }}>{content}</div>
          </section>
        ))}

        <hr style={{ border: "none", borderTop: "1px solid #252A45", margin: "40px 0" }} />
        <p style={{ fontSize: "0.85rem", color: "#52566B" }}>© 2026 Thomas Michael Ratcliffe · United Kingdom · <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a></p>
      </main>
    </div>
  );
}
