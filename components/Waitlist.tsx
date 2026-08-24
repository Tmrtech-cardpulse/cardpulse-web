'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { joinWaitlist, type WaitlistState } from '@/app/actions/waitlist';

const initial: WaitlistState = { status: 'idle' };

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-[var(--r-md)] px-6 py-3 text-[15px] font-semibold transition-transform active:scale-[0.98] disabled:opacity-60"
      style={{ backgroundColor: 'var(--c-accent)', color: 'var(--c-accent-ink)' }}
    >
      {pending ? 'Adding you' : 'Join the waitlist'}
    </button>
  );
}

export default function Waitlist() {
  const [state, action] = useActionState(joinWaitlist, initial);

  return (
    <section id="waitlist" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="panel grid gap-10 p-8 md:grid-cols-[1fr_400px] md:items-center md:p-12">
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
              Not in the stores yet.
            </h2>
            <p
              className="mt-4 max-w-[46ch] leading-relaxed"
              style={{ color: 'var(--c-text-secondary)', fontSize: 'var(--t-body)' }}
            >
              Leave an email and you will hear from us once, on the day it is available to
              download. Nothing else.
            </p>
          </div>

          {state.status === 'ok' ? (
            <p
              className="text-[15px] font-medium"
              role="status"
              style={{ color: 'var(--c-success)' }}
            >
              {state.message}
            </p>
          ) : (
            <form action={action} className="grid gap-2">
              <label htmlFor="waitlist-email" className="text-[13px] font-medium">
                Email address
              </label>
              <div className="flex flex-wrap gap-2.5">
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-describedby="waitlist-help"
                  className="min-w-0 flex-1 rounded-[var(--r-md)] px-4 py-3 text-[15px] outline-none"
                  style={{
                    backgroundColor: 'var(--c-bg)',
                    border: 'var(--web-hairline)',
                    color: 'var(--c-text)',
                  }}
                />
                <Submit />
              </div>
              <p
                id="waitlist-help"
                className="text-[13px]"
                style={{ color: 'var(--c-text-secondary)' }}
              >
                One email. No newsletter, and you can reply to be removed.
              </p>
              {state.status === 'error' && (
                <p className="text-[13px]" role="alert" style={{ color: 'var(--c-danger)' }}>
                  {state.message}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
