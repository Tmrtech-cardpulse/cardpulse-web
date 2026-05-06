import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account — SportsCardPulse",
};

export default function DeleteAccountPage() {
  return (
    <div style={{ background: "#0D0F1C", minHeight: "100vh", padding: "0 0 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
      <header style={{ background: "#161827", borderBottom: "1px solid #252A45", padding: "20px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <img src="/icon.png" alt="SportsCardPulse" width={32} height={32} style={{ borderRadius: 7 }} />
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px" }}>
          <span style={{ color: "#ffffff" }}>SportsCard</span><span style={{ color: "#4F8EF7" }}>Pulse</span>
        </div>
      </header>

      <main style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px", marginBottom: 6 }}>Delete Your Account</h1>
        <p style={{ color: "#52566B", fontSize: "0.85rem", marginBottom: 40 }}>SportsCardPulse · Operated by TMR Tech, United Kingdom</p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>What gets deleted</h2>
          <ul style={{ paddingLeft: "1.4rem", color: "#8B90AA", fontSize: "0.95rem", lineHeight: 1.75 }}>
            <li>Your account and login credentials</li>
            <li>Your entire card collection and all card data</li>
            <li>All scan images stored in your account</li>
            <li>Your portfolio history and price alerts</li>
            <li>Your Card Catalogue contributions (immediately removed)</li>
            <li>All personal data associated with your account</li>
          </ul>
          <p style={{ color: "#8B90AA", fontSize: "0.95rem", marginTop: 12 }}>All data is permanently deleted within <strong style={{ color: "#C8CADC" }}>30 days</strong> of your request.</p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>What is retained</h2>
          <p style={{ color: "#8B90AA", fontSize: "0.95rem", lineHeight: 1.75 }}>Nothing. We do not retain any personal data after account deletion. Anonymous, aggregated catalogue data that cannot be linked back to you may remain as part of the shared card catalogue.</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#4F8EF7", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>How to request deletion</h2>
          <p style={{ color: "#8B90AA", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 16 }}>Send an email to the address below from the email address associated with your account. Include your registered email address in the message body.</p>

          <a href="mailto:tom@tmrtech.co.uk?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20SportsCardPulse%20account%20and%20all%20associated%20data.%0A%0ARegistered%20email%3A%20" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#FF453A", color: "#ffffff",
            padding: "14px 24px", borderRadius: 12,
            fontWeight: 700, fontSize: 15,
            textDecoration: "none",
          }}>
            Request account deletion
          </a>

          <p style={{ color: "#52566B", fontSize: "0.85rem", marginTop: 12 }}>
            Or email directly: <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a> with subject line "Account Deletion Request"
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #252A45", margin: "40px 0" }} />
        <p style={{ fontSize: "0.85rem", color: "#52566B" }}>© 2026 TMR Tech · United Kingdom · <a href="mailto:tom@tmrtech.co.uk" style={{ color: "#4F8EF7" }}>tom@tmrtech.co.uk</a></p>
      </main>
    </div>
  );
}
