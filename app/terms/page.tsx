import type { Metadata } from "next";
import Logo from "../../components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service — SportsCardPulse",
};

export default function TermsPage() {
  return (
    <div style={{ background: "var(--scp-bg)", minHeight: "100vh", padding: "0 0 80px", fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <header style={{ background: "var(--scp-surface)", borderBottom: "1px solid var(--scp-border)", padding: "20px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <Logo size={32} />
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>
          <span style={{ color: "var(--scp-text)" }}>SportsCard</span><span style={{ color: "var(--scp-accent)" }}>Pulse</span>
        </div>
      </header>

      <main style={{ maxWidth: 740, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px", marginBottom: 6 }}>Terms of Service</h1>
        <p style={{ color: "#52566B", fontSize: "0.85rem", marginBottom: 40 }}>SportsCardPulse · Last updated: May 2026 · Operated by Thomas Michael Ratcliffe, United Kingdom</p>

        {[
          { title: "1. Acceptance", content: <p>By downloading or using SportsCardPulse you agree to these terms. If you do not agree, do not use the app. These terms may be updated from time to time; continued use of the app after changes are posted constitutes acceptance of the updated terms.</p> },
          { title: "2. What SportsCardPulse provides", content: <p>SportsCardPulse is a sports card collection management tool providing AI-assisted card identification, estimated market valuations based on publicly available market data, portfolio tracking, and a sports card news feed. All prices and valuations shown in the app are estimates for informational purposes only. They are not offers, guarantees, appraisals, or financial advice.</p> },
          { title: "3. Your account", content: <p>You are responsible for keeping your login credentials secure. You must be at least 13 years old to use SportsCardPulse. One account per person; you may not share accounts. You can delete your account at any time from within the app.</p> },
          { title: "4. Acceptable use", content: <ul style={{ paddingLeft: "1.4rem" }}>
            <li>Do not use SportsCardPulse for any unlawful purpose.</li>
            <li>Do not attempt to reverse-engineer, decompile, or extract data from the service.</li>
            <li>Do not upload content that infringes third-party intellectual property rights.</li>
            <li>Do not abuse the AI scanning feature in a way that degrades service for other users.</li>
          </ul> },
          { title: "5. Free tier and Premium", content: <p>SportsCardPulse offers a free tier with limits on collection size and AI scanning, and a Premium subscription that unlocks higher limits and additional tracking features. Specific limits and Premium features are shown in the app and may change with reasonable notice.</p> },
          { title: "6. Subscriptions and payments", content: <p>Premium subscriptions are billed through Apple App Store or Google Play. Subscription length and price are shown in the app at the point of purchase. Subscriptions auto-renew until cancelled. You can manage or cancel your subscription anytime in your App Store or Google Play account settings; cancellation takes effect at the end of the current billing period. Refunds are handled by Apple or Google in accordance with their respective policies. We do not issue refunds directly.</p> },
          { title: "7. Referral programme", content: <p>The referral programme grants both parties a limited-time Premium trial. Codes may only be redeemed once per account. Abuse of the referral system may result in account suspension.</p> },
          { title: "8. Card Catalogue contributions", content: <p>If you opt in, you grant a non-exclusive, royalty-free licence to use anonymised card identity data to build and improve the shared catalogue. This licence ends when you withdraw consent. No prices or personal information are included.</p> },
          { title: "9. Intellectual property", content: <p>The SportsCardPulse app, brand, and content are owned by Thomas Michael Ratcliffe. Card images, player names, set names, and league marks are the property of their respective rights holders. SportsCardPulse makes no claim of ownership over third-party card content.</p> },
          { title: "10. Disclaimer of warranties", content: <p>SportsCardPulse is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied. We do not guarantee uninterrupted service, accuracy of AI identification, or accuracy of market valuations. Estimates may be inaccurate or unavailable for some cards.</p> },
          { title: "11. Limitation of liability", content: <p>To the maximum extent permitted by UK law, Thomas Michael Ratcliffe is not liable for any indirect, incidental, or consequential loss arising from use of SportsCardPulse, including financial losses based on app valuations or decisions made in reliance on them.</p> },
          { title: "12. Termination", content: <p>We may suspend or terminate your account if you breach these terms. You may delete your account at any time from within the app, or by contacting <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a>.</p> },
          { title: "13. Relationship with Apple", content: <p>If you downloaded SportsCardPulse from the Apple App Store, you acknowledge that these terms are between you and Thomas Michael Ratcliffe, not Apple. Apple is not responsible for the app or its content. In the event of any failure of the app to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the app. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the app. Apple and its subsidiaries are third-party beneficiaries of these terms and, upon your acceptance, will have the right to enforce these terms against you.</p> },
          { title: "14. Governing law", content: <p>These terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</p> },
          { title: "15. Contact", content: <p>Thomas Michael Ratcliffe, United Kingdom<br />Email: <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a></p> },
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
