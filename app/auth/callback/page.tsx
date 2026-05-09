export default function AuthCallbackPage() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0B0D1A',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 48, marginBottom: 24 }}>📱</div>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
        Open on your phone
      </h1>
      <p style={{ fontSize: 16, color: '#9CA3AF', maxWidth: 360, lineHeight: 1.6 }}>
        This link needs to be opened on the device where SportsCardPulse is installed.
        Please tap the link from your email on your phone.
      </p>
    </main>
  );
}
