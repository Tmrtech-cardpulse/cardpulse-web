import Link from 'next/link';
import type { ReactNode } from 'react';

import { type Block, headingId } from '@/content/types';

/**
 * Renders the house content format. The inline syntax is three things and no
 * more: [label](/href), **bold** and `code`. Anything richer belongs in a
 * component, not in a string.
 */
function parseInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = pattern.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));

    if (m[1] && m[2]) {
      const href = m[2];
      out.push(
        href.startsWith('/') ? (
          <Link key={key++} href={href}>
            {m[1]}
          </Link>
        ) : (
          <a key={key++} href={href} rel="noopener noreferrer" target="_blank">
            {m[1]}
          </a>
        ),
      );
    } else if (m[3]) {
      out.push(<strong key={key++}>{m[3]}</strong>);
    } else if (m[4]) {
      out.push(
        <code key={key++} className="mono">
          {m[4]}
        </code>,
      );
    }
    last = pattern.lastIndex;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-legal">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case 'h2':
            return (
              <h2 key={i} id={headingId(b.text)}>
                {b.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} id={headingId(b.text)}>
                {b.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{parseInline(it)}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{parseInline(it)}</li>
                ))}
              </ol>
            );
          case 'note':
            return (
              <p
                key={i}
                className="panel my-6 p-5 text-[14px]"
                style={{ borderLeft: '2px solid var(--c-accent)' }}
              >
                {parseInline(b.text)}
              </p>
            );
          case 'stat':
            return (
              <p key={i} className="my-8">
                <span className="figure block text-[40px] font-semibold leading-none" data-money>
                  {b.value}
                </span>
                <span className="col-label mt-2 block">{b.label}</span>
              </p>
            );
          default:
            return <p key={i}>{parseInline(b.text)}</p>;
        }
      })}
    </div>
  );
}
