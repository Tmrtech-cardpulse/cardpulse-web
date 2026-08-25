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

import { site } from '@/lib/site';

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
      message: `The waitlist is not connected yet. Email ${site.waitlistContact} and you will be added by hand.`,
    };
  }

  try {
    const res = await fetch(`${url}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        // `apikey` only, deliberately. Sending the same value again as
        // `Authorization: Bearer` makes PostgREST try to parse it as a JWT.
        // A modern sb_publishable_ key is not one, so the request drops out of
        // the `anon` role and the insert policy stops matching: the failure
        // presents as an RLS violation rather than an auth error, which is a
        // long way from the cause.
        apikey: key,
        'Content-Type': 'application/json',
        // Plain insert. NOT `resolution=ignore-duplicates`: that turns the
        // request into an upsert, and an upsert needs UPDATE permission, which
        // the anon role deliberately does not have. Insert-only is the right
        // posture for a public form, because it means nobody can use it to
        // modify an address that is already on the list. Duplicates come back
        // as 409 and are handled below rather than avoided here.
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, source: 'sportscardpulse.app' }),
      cache: 'no-store',
    });

    // 409 is the unique index on lower(email) doing its job. From the reader's
    // point of view they are on the list, which is all they asked about.
    if (res.status === 409) {
      return { status: 'ok', message: 'You are already on the list. We will be in touch.' };
    }

    if (!res.ok) {
      return { status: 'error', message: 'Something went wrong saving that. Try again shortly.' };
    }

    return { status: 'ok', message: 'You are on the list. We will email you when it ships.' };
  } catch {
    return { status: 'error', message: 'Could not reach the server. Try again shortly.' };
  }
}
