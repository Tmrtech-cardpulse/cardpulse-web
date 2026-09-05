'use client';

import { CheckCircle } from '@phosphor-icons/react/ssr';
import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';

import { joinWaitlist, type WaitlistState } from '@/app/actions/waitlist';

const initial: WaitlistState = { status: 'idle', attempt: 0 };

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="cta justify-center px-6 py-3 text-[15px] disabled:cursor-progress disabled:opacity-60"
    >
      {pending ? 'Adding you' : 'Join the waitlist'}
    </button>
  );
}

export default function Waitlist() {
  const [state, action] = useActionState(joinWaitlist, initial);
  const confirmed = useRef<HTMLDivElement>(null);

  // The form is removed from the tree on success, which would drop focus to
  // the body and leave a keyboard reader at the top of the document. Move it
  // onto the confirmation instead, which is also what gets announced.
  useEffect(() => {
    if (state.status === 'ok') confirmed.current?.focus();
  }, [state.status, state.attempt]);

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

          {/* The live region is always in the tree and never swaps out. One
              that is inserted at the same moment as its text is unreliable:
              several screen readers only announce changes to a region that was
              already there to change. */}
          <p aria-live="polite" aria-atomic="true" className="sr-only">
            {state.message ?? ''}
          </p>

          {state.status === 'ok' ? (
            <div
              ref={confirmed}
              tabIndex={-1}
              className="grid gap-3 outline-none"
              style={{ borderTop: 'var(--web-hairline)', paddingTop: '1.25rem' }}
            >
              <CheckCircle
                size={26}
                weight="fill"
                color="var(--c-accent)"
                aria-hidden
              />
              <p className="text-[17px] font-semibold leading-snug">{state.message}</p>
              {state.email && (
                <p className="mono text-[13px]" style={{ color: 'var(--c-text-secondary)' }}>
                  {state.email}
                </p>
              )}
            </div>
          ) : (
            <form action={action} className="grid gap-2">
              <label htmlFor="waitlist-email" className="text-[13px] font-medium">
                Email address
              </label>
              {/* Grid, not a wrapping flex row. `flex-1` gives the input a
                  basis of zero, so it shrank to fit alongside the button
                  instead of ever wrapping: at 360px the field was about ninety
                  pixels wide and showed six characters of the address being
                  typed into it. Stacked below 640, side by side above. */}
              <div className="grid gap-2.5 sm:grid-cols-[1fr_auto]">
                <input
                  // Keyed on the attempt so a rejected address is put back.
                  // React resets the form once the action returns, and a
                  // changed defaultValue alone does not survive that.
                  key={state.attempt}
                  defaultValue={state.email ?? ''}
                  id="waitlist-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  autoCapitalize="off"
                  placeholder="you@example.com"
                  // aria-describedby rather than aria-errormessage: the
                  // latter is still unevenly supported, and this reads the
                  // failure out with the help text either way.
                  aria-describedby={
                    state.status === 'error' ? 'waitlist-error waitlist-help' : 'waitlist-help'
                  }
                  aria-invalid={state.status === 'error' || undefined}
                  className="min-w-0 rounded-[var(--r-md)] px-4 py-3 text-[15px] outline-none"
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
                <p id="waitlist-error" className="text-[13px]" style={{ color: 'var(--c-danger)' }}>
                  {state.message}
                  {state.contact && (
                    <>
                      {' '}
                      <a
                        href={`mailto:${state.contact}?subject=SportsCardPulse waitlist`}
                        className="mono underline"
                        style={{ color: 'var(--c-accent)', textUnderlineOffset: 2 }}
                      >
                        {state.contact}
                      </a>
                    </>
                  )}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
