'use server';

/**
 * Waitlist signup.
 *
 * Writes to the `waitlist` table in the app's Supabase project. The insert
 * policy is anon-insert-only, so the publishable key is the right key here and
 * nothing readable is exposed.
 *
 * If the project is not configured the action says so plainly rather than
 * pretending the address was stored.
 */

export type WaitlistState = {
  status: 'idle' | 'ok' | 'error';
  message?: string;
};

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!EMAIL.test(email)) {
    return { status: 'error', message: 'That does not look like an email address.' };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return {
      status: 'error',
      message: 'The waitlist is not connected yet. Email tom@tmrtech.co.uk and you will be added by hand.',
    };
  }

  try {
    const res = await fetch(`${url}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=ignore-duplicates,return=minimal',
      },
      body: JSON.stringify({ email, source: 'sportscardpulse.app' }),
      cache: 'no-store',
    });

    if (!res.ok) {
      return { status: 'error', message: 'Something went wrong saving that. Try again shortly.' };
    }

    return { status: 'ok', message: 'You are on the list. We will email you when it ships.' };
  } catch {
    return { status: 'error', message: 'Could not reach the server. Try again shortly.' };
  }
}
