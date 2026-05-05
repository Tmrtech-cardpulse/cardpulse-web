export default function Referral() {
  return (
    <section style={{ padding: "60px 28px 100px" }}>
      <div style={{
        maxWidth: 720, margin: "0 auto",
        background: "linear-gradient(160deg, #161E38 0%, #161827 100%)",
        border: "1px solid rgba(79,142,247,0.25)",
        borderRadius: 28, padding: "60px 48px",
        textAlign: "center",
        boxShadow: "0 0 80px rgba(79,142,247,0.06)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400, height: 200,
          background: "radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: "linear-gradient(135deg, rgba(79,142,247,0.15), rgba(123,94,247,0.15))",
          border: "1px solid rgba(79,142,247,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 30, margin: "0 auto 24px",
        }}>🎁</div>

        <h2 style={{
          fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 900,
          color: "#FFFFFF", letterSpacing: "-0.8px", marginBottom: 16, lineHeight: 1.15,
        }}>
          Invite a friend,<br />get 3 days Premium free
        </h2>
        <p style={{
          color: "#8B90AA", fontSize: 16, lineHeight: 1.7,
          marginBottom: 36, maxWidth: 440, margin: "0 auto 36px",
        }}>
          Share your unique referral code with a fellow collector. When they sign up,
          you both unlock 3 days of CardPulse Premium — on us.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{
            background: "rgba(79,142,247,0.08)",
            border: "1px dashed rgba(79,142,247,0.35)",
            borderRadius: 12, padding: "13px 24px",
            color: "#4F8EF7", fontWeight: 700, fontSize: 14, letterSpacing: 2,
          }}>
            Your code lives in the app →
          </div>
          <a href="#download" style={{
            background: "linear-gradient(135deg, #4F8EF7, #7B5EF7)",
            color: "#fff", padding: "13px 24px",
            borderRadius: 12, fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 16px rgba(79,142,247,0.3)",
          }}>
            Get the app
          </a>
        </div>
      </div>
    </section>
  );
}
