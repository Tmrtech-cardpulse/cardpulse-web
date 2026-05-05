const FREE = [
  'Up to 20 cards in your collection',
  'Discover — news, releases & events',
  'Release notifications',
  'Manual card entry',
];

const PREMIUM = [
  'Unlimited card collection',
  'AI camera scanning',
  'Live eBay market pricing',
  'Full portfolio P&L tracking',
  'Price alerts & target notifications',
  'Sold price tracking',
  'Portfolio value change alerts',
  'CardPulse Score (demand index)',
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      padding: '100px 24px',
      background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(79,142,247,0.07) 0%, transparent 70%)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: '#4F8EF7', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
            Simple pricing
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#f0f0ff', marginBottom: 16 }}>
            Start free, upgrade when ready
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {/* Free */}
          <div style={{
            background: '#12122a', border: '1px solid #2a2a4a',
            borderRadius: 20, padding: 32,
          }}>
            <p style={{ color: '#a0a0c0', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Free</p>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 42, fontWeight: 800, color: '#f0f0ff' }}>£0</span>
            </div>
            <p style={{ color: '#606080', fontSize: 13, marginBottom: 28 }}>No credit card required</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {FREE.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#30D158', fontSize: 15, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#a0a0c0', lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>
            <a href="#download" style={{
              display: 'block', textAlign: 'center',
              background: 'rgba(255,255,255,0.06)', border: '1px solid #2a2a4a',
              color: '#f0f0ff', padding: '13px', borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}>
              Download free
            </a>
          </div>

          {/* Premium */}
          <div style={{
            background: 'linear-gradient(145deg, #151535, #12122a)',
            border: '1px solid rgba(79,142,247,0.35)',
            borderRadius: 20, padding: 32, position: 'relative',
            boxShadow: '0 0 40px rgba(79,142,247,0.1)',
          }}>
            <div style={{
              position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
              background: 'linear-gradient(90deg, #4F8EF7, #7B5EF7)',
              color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 14px',
              borderRadius: 20, textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap',
            }}>
              Most popular
            </div>
            <p style={{ color: '#4F8EF7', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 }}>Premium</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 42, fontWeight: 800, color: '#f0f0ff' }}>£3.99</span>
              <span style={{ color: '#606080', fontSize: 14 }}>/month</span>
            </div>
            <p style={{ color: '#606080', fontSize: 13, marginBottom: 28 }}>or £29.99/year · 1-day free trial</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {PREMIUM.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#4F8EF7', fontSize: 15, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#f0f0ff', lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>
            <a href="#download" style={{
              display: 'block', textAlign: 'center',
              background: 'linear-gradient(90deg, #4F8EF7, #7B5EF7)',
              color: '#fff', padding: '14px', borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
            }}>
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
