const FEATURES = [
  {
    icon: '📸',
    title: 'AI Card Scanning',
    desc: 'Point your camera at any card. Our AI identifies the player, year, set, and variant in seconds — no typing required.',
    badge: 'Premium',
  },
  {
    icon: '💰',
    title: 'Live eBay Pricing',
    desc: 'See real sold prices from eBay the moment you scan. Know exactly what your card is worth on the open market today.',
    badge: null,
  },
  {
    icon: '📊',
    title: 'Portfolio P&L',
    desc: 'Track every card\'s purchase price against current market value. See your total collection value and profit at a glance.',
    badge: 'Premium',
  },
  {
    icon: '🔔',
    title: 'Price Alerts',
    desc: 'Set a target price on any card and get a push notification the moment the market hits it. Never miss the right moment to sell.',
    badge: 'Premium',
  },
  {
    icon: '📰',
    title: 'Discover',
    desc: 'Sports card news, upcoming product releases, and UK collector events — all in one place, updated daily.',
    badge: null,
  },
  {
    icon: '⚡',
    title: 'CardPulse Score',
    desc: 'Every card gets a 0–100 demand score based on market velocity, price trend, and grading premium. Know what\'s hot.',
    badge: 'Premium',
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      padding: '100px 24px',
      background: 'rgba(255,255,255,0.01)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: '#4F8EF7', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
            Everything you need
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#f0f0ff', marginBottom: 16 }}>
            Built for serious collectors
          </h2>
          <p style={{ color: '#a0a0c0', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
            From your first scan to a portfolio worth tracking — CardPulse has every tool you need.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background: '#12122a',
              border: '1px solid #2a2a4a',
              borderRadius: 16,
              padding: 28,
              position: 'relative',
            }}>
              {f.badge && (
                <span style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'rgba(79,142,247,0.12)', color: '#4F8EF7',
                  fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 5,
                  textTransform: 'uppercase', letterSpacing: 0.5,
                }}>
                  {f.badge}
                </span>
              )}
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f0f0ff', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#a0a0c0', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
