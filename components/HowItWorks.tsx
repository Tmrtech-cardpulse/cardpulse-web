const STEPS = [
  {
    num: '01',
    title: 'Scan your card',
    desc: 'Open CardPulse and point your camera at any sports card. Our AI reads the player, year, set, and variant automatically.',
  },
  {
    num: '02',
    title: 'See its value',
    desc: 'Instantly see real eBay sold prices for that exact card. Graded vs raw, PSA 10 vs PSA 9 — broken down clearly.',
  },
  {
    num: '03',
    title: 'Track your collection',
    desc: 'Save cards to your collection with your purchase price. Watch your portfolio value update daily as the market moves.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: '#4F8EF7', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
            Simple by design
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#f0f0ff', marginBottom: 16 }}>
            From scan to portfolio in 30 seconds
          </h2>
          <p style={{ color: '#a0a0c0', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
            No manual entry. No guessing. Just point, scan, and your collection builds itself.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 720, margin: '0 auto' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              {/* Step line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4F8EF7, #7B5EF7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 800, color: '#fff', flexShrink: 0,
                }}>
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 48, background: 'linear-gradient(180deg, rgba(79,142,247,0.4), transparent)', margin: '8px 0' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < STEPS.length - 1 ? 48 : 0 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#f0f0ff', marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontSize: 16, color: '#a0a0c0', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
