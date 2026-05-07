"use client";
import Logo from "./Logo";

const PRIVACY_URL = "https://www.sportscardpulse.app/privacy";
const TERMS_URL = "https://www.sportscardpulse.app/terms";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #252A45", padding: "36px 28px" }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={28} />
          <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.3px" }}>
            <span style={{ color: "#FFFFFF" }}>SportsCard</span><span style={{ color: "#4F8EF7" }}>Pulse</span>
          </span>
          <span style={{ color: "#52566B", fontSize: 13, marginLeft: 4 }}>
            © {new Date().getFullYear()} TMR Tech · United Kingdom
          </span>
        </div>

        <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
          {[
            { label: "Privacy Policy", href: PRIVACY_URL },
            { label: "Terms of Service", href: TERMS_URL },
            { label: "Contact", href: "mailto:tom@tmrtech.co.uk" },
          ].map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ color: "#52566B", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#8B90AA")}
              onMouseLeave={e => (e.currentTarget.style.color = "#52566B")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
