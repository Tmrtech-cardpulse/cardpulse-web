export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,10,26,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, #4F8EF7, #7B5EF7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 800, color: '#fff',
          }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: 17, color: '#f0f0ff', letterSpacing: '-0.3px' }}>
            CardPulse
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a href="#features" style={{ color: '#a0a0c0', fontSize: 14, textDecoration: 'none' }}>Features</a>
          <a href="#how-it-works" style={{ color: '#a0a0c0', fontSize: 14, textDecoration: 'none' }}>How it works</a>
          <a href="#pricing" style={{ color: '#a0a0c0', fontSize: 14, textDecoration: 'none' }}>Pricing</a>
          <a
            href="#download"
            style={{
              background: '#4F8EF7', color: '#fff', padding: '8px 18px',
              borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
