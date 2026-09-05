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
  /**
   * What was typed, echoed back. React resets an uncontrolled form once the
   * action returns, so without this a rejected address is wiped and has to be
   * retyped in full to fix one character.
   */
  email?: string;
  /**
   * Set only when the failure is that there is nowhere to store the address
   * yet, so the form can offer the inbox as a link instead of as text the
   * reader has to select and copy by hand.
   */
  contact?: string;
  /**
   * Submission counter. The form keys the input on it so a re-render actually
   * re-applies `email` above: changing `defaultValue` alone does nothing to an
   * input the browser has already reset.
   */
  attempt: number;
};

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

/** Long enough that a stalled connection reports rather than hanging on a
 *  spinner, short enough that the reader has not given up first. */
const TIMEOUT_MS = 8000;

export async function joinWaitlist(
  prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const attempt = prev.attempt + 1;
  const email = String(formData.get('email') ?? '').trim().toLowerCase();

  if (!EMAIL.test(email)) {
    return {
      status: 'error',
      message: 'That does not look like an email address. Check it and try again.',
      email,
      attempt,
    };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return {
      status: 'error',
      message: 'The waitlist is not connected yet. Email us and you will be added by hand.',
      contact: site.waitlistContact,
      email,
      attempt,
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
      // Without this a dead Supabase project leaves the button spinning until
      // the platform's own timeout, which reads as a broken form.
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    // 409 is the unique index on lower(email) doing its job. From the reader's
    // point of view they are on the list, which is all they asked about.
    if (res.status === 409) {
      return {
        status: 'ok',
        message: 'You are already on the list. We will be in touch.',
        email,
        attempt,
      };
    }

    if (!res.ok) {
      return {
        status: 'error',
        message: 'Something went wrong saving that. Try again shortly.',
        contact: site.waitlistContact,
        email,
        attempt,
      };
    }

    return {
      status: 'ok',
      message: 'You are on the list. We will email you when it ships.',
      email,
      attempt,
    };
  } catch {
    return {
      status: 'error',
      message: 'Could not reach the server. Check your connection and try again.',
      contact: site.waitlistContact,
      email,
      attempt,
    };
  }
}
