'use client';

import { DeviceMobile, Spinner, Warning } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
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

    // Redirect to the custom scheme. The app handles it identically to App
    // Links, which covers opening the email on desktop or on a device without
    // App Links support.
    const deepLink = `sportscardpulse://auth/callback#access_token=${accessToken}&refresh_token=${refreshToken}&type=${type ?? 'recovery'}`;
    window.location.href = deepLink;

    // If the browser has not navigated away after 2s, the app is not installed.
    const timer = setTimeout(() => setState('no_app'), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (state === 'no_token') {
    return (
      <Page
        Glyph={Warning}
        heading="Link expired"
        body="This password reset link has already been used, or it has expired. Request a new one from the app."
      />
    );
  }

  if (state === 'no_app') {
    return (
      <Page
        Glyph={DeviceMobile}
        heading="Open this on your phone"
        body="SportsCardPulse needs to be installed on the device. Tap the link from your email on the phone where you have the app."
      />
    );
  }

  return (
    <Page Glyph={Spinner} heading="Opening the app" body="You will be redirected automatically." />
  );
}

function Page({ Glyph, heading, body }: { Glyph: Icon; heading: string; body: string }) {
  return (
    <main id="main" className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <Glyph size={32} color="var(--c-accent)" weight="regular" />
      <h1 className="display mt-6" style={{ fontSize: 'var(--t-heading-lg)' }}>
        {heading}
      </h1>
      <p
        className="mt-3 max-w-[42ch] leading-relaxed"
        style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body-sm)' }}
      >
        {body}
      </p>
    </main>
  );
}
