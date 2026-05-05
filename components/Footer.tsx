const PRIVACY_URL = 'https://dqrusiewaqrkbdstxyia.supabase.co/functions/v1/privacy-policy';
const TERMS_URL = 'https://dqrusiewaqrkbdstxyia.supabase.co/functions/v1/terms-of-service';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #2a2a4a',
      padding: '40px 24px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 26, height: 26, borderRadius: 6,
            background: 'linear-gradient(135deg, #4F8EF7, #7B5EF7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 800, color: '#fff',
          }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#f0f0ff' }}>CardPulse</span>
          <span style={{ color: '#606080', fontSize: 13, marginLeft: 8 }}>
            © {new Date().getFullYear()} TMR Tech · United Kingdom
          </span>
        </div>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer"
            style={{ color: '#606080', fontSize: 13, textDecoration: 'none' }}>
            Privacy Policy
          </a>
          <a href={TERMS_URL} target="_blank" rel="noopener noreferrer"
            style={{ color: '#606080', fontSize: 13, textDecoration: 'none' }}>
            Terms of Service
          </a>
          <a href="mailto:tom@tmrtech.co.uk"
            style={{ color: '#606080', fontSize: 13, textDecoration: 'none' }}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
