# cardpulse-web

Marketing site for **SportsCardPulse**, at `sportscardpulse.app`. Next.js 16, React 19, Tailwind v4.

The app and Supabase backend are in the sibling repo `../cardpulse`.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

## Before pushing

```bash
npm run verify       # token hash + content rules
npm run build
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run tokens:emit` | Regenerate `app/tokens.css` from `../cardpulse/src/theme/index.ts` |
| `npm run verify:tokens` | Fail if `app/tokens.css` was hand-edited |
| `npm run verify:articles` | Content rules: links resolve, pillar links down, no em-dashes |
| `npm run verify` | Both verifies |
| `npm run serve` | Serve the production build, freeing the port first |
| `npm run shoot` | Screenshot every route at 1440 / 834 / 390 into `design-review/` |
| `npm run images:gen` | Generate site photography. Add `-- --n 2` for candidates |
| `npm run images:sheet` | Contact sheet of `design-review/candidates/` |

`tokens:emit` needs the sibling app repo checked out. The generated file is committed, so builds
without it still work, and `verify:tokens` is what stops the committed copy drifting.

## Environment

| Variable | Used by | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | waitlist signup | Yes, once the Supabase project exists |
| `SUPABASE_PUBLISHABLE_KEY` | waitlist signup | Yes, once the Supabase project exists |
| `GEMINI_API_KEY` | `npm run images:gen` only | Only to regenerate photography |

Without them the waitlist form tells the reader to email instead of silently discarding the address.

## Conventions

See [CLAUDE.md](CLAUDE.md) for the design position, the token pipeline, the content model and the
rules that are enforced mechanically.
