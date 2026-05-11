'use client';

import { useEffect, useState } from 'react';

type State = 'redirecting' | 'no_token' | 'no_app';

export default function AuthCallbackPage() {
  const [state, setState] = useState<State>('redirecting');

  useEffect(() => {
    const hash = window.location.hash.slice(1); // strip leading #
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    const refreshToken = params.get('refresh_token');
    const type = params.get('type');

    if (!accessToken || !refreshToken) {
      setState('no_token');
      return;
    }

    // Redirect to the custom scheme — app handles it identically to App Links.
    // Works whether the user opened the email on desktop or a device without App Links.
    const deepLink = `sportscardpulse://auth/callback#access_token=${accessToken}&refresh_token=${refreshToken}&type=${type ?? 'recovery'}`;
    window.location.href = deepLink;

    // If the browser hasn't navigated away after 2s the app isn't installed.
    const timer = setTimeout(() => setState('no_app'), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (state === 'no_token') {
    return (
      <Page icon="⚠️" heading="Link expired" body="This password reset link has already been used or has expired. Please request a new one from the app." />
    );
  }

  if (state === 'no_app') {
    return (
      <Page icon="📱" heading="Open on your phone" body="SportsCardPulse needs to be installed on your device. Tap the link from your email directly on the phone where the app is installed." />
    );
  }

  return (
    <Page icon="⏳" heading="Opening app…" body="You'll be redirected to SportsCardPulse automatically." />
  );
}

function Page({ icon, heading, body }: { icon: string; heading: string; body: string }) {
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
      <div style={{ fontSize: 48, marginBottom: 24 }}>{icon}</div>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{heading}</h1>
      <p style={{ fontSize: 16, color: '#9CA3AF', maxWidth: 360, lineHeight: 1.6 }}>{body}</p>
    </main>
  );
}
