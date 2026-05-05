export default function Hero() {
  return (
    <section id="download" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '120px 24px 80px',
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,142,247,0.12) 0%, transparent 70%)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 760 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(79,142,247,0.12)', border: '1px solid rgba(79,142,247,0.25)',
          borderRadius: 20, padding: '6px 14px', marginBottom: 32,
        }}>
          <span style={{ color: '#4F8EF7', fontSize: 13, fontWeight: 600 }}>
            ⚡ AI-powered card intelligence
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 68px)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          color: '#f0f0ff',
          marginBottom: 24,
        }}>
          Your sports card collection,{' '}
          <span style={{
            background: 'linear-gradient(90deg, #4F8EF7, #7B5EF7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            intelligently managed
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#a0a0c0', lineHeight: 1.6, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px',
        }}>
          Scan any card with your camera. Get instant eBay pricing. Track your portfolio P&amp;L.
          Built for serious UK collectors who want the full picture.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#f0f0ff', color: '#0a0a1a',
              padding: '14px 28px', borderRadius: 12,
              fontWeight: 700, fontSize: 16, textDecoration: 'none',
            }}
          >
            <AppleIcon />
            Download on iOS
          </a>
          <a
            href="#features"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.06)', color: '#f0f0ff',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '14px 28px', borderRadius: 12,
              fontWeight: 600, fontSize: 16, textDecoration: 'none',
            }}
          >
            See how it works →
          </a>
        </div>

        {/* Social proof */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { value: 'AI-Powered', label: 'Card identification' },
            { value: 'Live eBay', label: 'Market pricing' },
            { value: 'Real-time', label: 'Portfolio P&L' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#4F8EF7', marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#606080' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
