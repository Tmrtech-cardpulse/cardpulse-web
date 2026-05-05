export default function Referral() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{
        maxWidth: 700, margin: '0 auto', textAlign: 'center',
        background: 'linear-gradient(145deg, #12122a, #151535)',
        border: '1px solid rgba(79,142,247,0.25)',
        borderRadius: 24, padding: '56px 40px',
        boxShadow: '0 0 60px rgba(79,142,247,0.07)',
      }}>
        <div style={{ fontSize: 48, marginBottom: 20 }}>🎁</div>
        <h2 style={{
          fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800,
          color: '#f0f0ff', letterSpacing: '-0.5px', marginBottom: 16,
        }}>
          Invite a friend, get 3 days free
        </h2>
        <p style={{ color: '#a0a0c0', fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
          Share your unique referral code with a fellow collector. When they sign up, you both get 3 days of CardPulse Premium — on us.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{
            background: 'rgba(79,142,247,0.1)', border: '1px dashed rgba(79,142,247,0.4)',
            borderRadius: 10, padding: '12px 24px',
            color: '#4F8EF7', fontWeight: 700, fontSize: 15, letterSpacing: 2,
          }}>
            Your code is in the app →
          </div>
          <a href="#download" style={{
            background: '#4F8EF7', color: '#fff',
            padding: '12px 24px', borderRadius: 10,
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
          }}>
            Download to get yours
          </a>
        </div>
      </div>
    </section>
  );
}
