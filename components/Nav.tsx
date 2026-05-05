"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(13,15,28,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #252A45" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto", padding: "0 28px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={34} />
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.4px" }}>
            <span style={{ color: "#FFFFFF" }}>Card</span><span style={{ color: "#4F8EF7" }}>Pulse</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[["#features", "Features"], ["#how-it-works", "How it works"], ["#pricing", "Pricing"]].map(([href, label]) => (
            <a key={href} href={href} style={{ color: "#8B90AA", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8B90AA")}
            >{label}</a>
          ))}
          <a href="#download" style={{
            background: "linear-gradient(135deg, #4F8EF7, #7B5EF7)",
            color: "#fff", padding: "9px 20px",
            borderRadius: 10, fontSize: 14, fontWeight: 700,
            boxShadow: "0 4px 14px rgba(79,142,247,0.35)",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Download free
          </a>
        </div>
      </div>
    </nav>
  );
}
