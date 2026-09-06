# cardpulse-web

The marketing site for **SportsCardPulse**, deploying to `sportscardpulse.app`. The app and all
Supabase backend live in the sibling repo `C:\Users\tomra\cardpulse`. British English everywhere.
Read code before proposing.

## The brand is not defined here

`app/tokens.css` is **GENERATED**. Never hand-edit it.

The canonical brand lives in `../cardpulse/src/theme/index.ts`, which is also what 45 screens in the
app import. To change a colour, a type size, a radius or a duration, edit it there and run
`npm run tokens:emit` from this repo. The emitter walks the token objects with `Object.entries()`,
so adding a key needs no code change on this side.

The generated file carries an `emitted-sha256` of its own body. `npm run verify:tokens` recomputes
it, which is what catches a hand-edit from inside a Vercel build where the sibling repo does not
exist. `platformDrift.web` in the canonical file lists every web-only property, and the emitter
asserts both directions: a `--web-*` custom property that is emitted but not declared fails the
build, and so does one declared but never emitted.

**Nothing visual comes from `dupi-site` or `bagged-site`.** Same developer, three products. What is
borrowed is technical only: the repo shape, the typed-content model, and the SEO / JSON-LD / robots
/ sitemap patterns.

## Design authority

The stated point of view: **a card's price is a market, and the page prints the tape.**

Rows are hairline-ruled rather than boxed. Every figure is mono and tabular so prices line up in
columns. Horizontal runs of data fade into the field rather than stopping at a hard border. If a
change makes the data read more like a printed tape and less like a div, it is probably right. See
`.panel`, `.rule` and `.tape-mask` in `app/globals.css`.

Dials: `DESIGN_VARIANCE 7`, `MOTION_INTENSITY 6`, `VISUAL_DENSITY 6`. Density is a goal, not a risk.
The first pass of this redesign used generous section padding on a single flat ground and the page
read as empty for five thousand pixels, which is why two sections now carry `.band`.

Three rules that are this repo's own decisions:

- **Zero em-dashes.** Not in headlines, body copy, captions, alt text or button labels. Enforced
  mechanically by `npm run verify:articles`, which also rejects en-dashes used as separators.
- **No div-based fake product UI.** `PriceTape` and `PriceLine` render real computed data from a
  real fixture, which is what makes them legitimate. The old site had a phone drawn out of divs
  containing invented prices, and that is the single thing this redesign existed to delete. A
  *screenshot* of the app is still the thing this page most wants and does not have.
- **Green and red are data, never chrome.** `--c-success` and `--c-danger` mean a price went up or
  down. They never appear on a button, a border or a label. The accent blue is the only brand
  colour on the page.

## Numbers

Every figure rendered anywhere on this site is computed from `lib/exampleCard.ts` through
`summarise()`. **Never type a number into a component.** The Pulse Score on the home page is
computed by the same shape of formula the app uses, the spread in the pillar guide is derived from
the comps, and the figure on the OG image is the same `summarise()` call. Change a comp in the
fixture and all of them move together.

The card is real. The comps are illustrative, and the page says so out loud in `PriceTape` and in
the footer, because the live eBay pipeline is what produces real comps in the app.

## Content

Guides and the glossary are typed TypeScript modules under `content/`, not MDX. A guide is a module,
so it can import the fixture and interpolate a real computed figure; a markdown file could only hold
a copy that goes stale in silence.

`npm run verify:articles` enforces what the type system cannot:

- exactly one pillar guide, and it must link **down to every child in the body copy**, not only in
  the `related` grid at the foot. A grid of cards at the bottom is the shape of a link plan that
  does nothing.
- every internal link in prose resolves to a real route
- every `related` slug exists
- meta descriptions between 110 and 175 characters
- no em-dashes, no duplicate slugs, no duplicate glossary terms

Run `npm run verify` before pushing. It is `verify:tokens && verify:articles`.

## Organic search

[docs/topic-map.md](docs/topic-map.md) is the operating document. If a page exists and is not in
that table, either the table is stale or the page should not exist. It ports the playbook
`dupi-site` and `bagged-site` ran, and three of its rules bind here:

- **Topic depth beats backlinks, roughly two to one.** Own a subject rather than collect links.
- **Only in-text links count.** A `related` array renders a grid at the foot and is navigation, not
  a link plan. `verify:articles` fails the build if a post declares a `pillar` and does not link to
  it in the body copy, which is the rule that makes a cluster real.
- **No invented volume data.** There is no Ahrefs or Search Console access in this repo. Priorities
  are reasoned from structure and marked `[VOLUME]` where a real check should replace a judgement.
  A fabricated figure is worse than none, because it gets planned against.

The strongest asset on the site, a `/price/{card}` long tail generated from real sold comps, is
**blocked on the Supabase rebuild and must stay blocked.** A page per card asserted without data is
a thin programmatic page, which is the shape of a spam farm and is treated as one.

## Posts

Fifty posts across seven clusters in `content/posts/`, one file per cluster so the cluster structure
is visible in the file tree.

**Every cluster has a hub at `/blog/c/{cluster}`**, defined in `content/clusters.ts`. A hub is not a
listing: it carries its own intro copy, links down to the pillar guide in that copy rather than only
in a card, and is what the posts link up to from their byline. `verify:articles` enforces a floor on
the intro length and the same description bounds as a post, because a thin page in the middle of a
cluster is worse than no page at all: everything below it points at it.

`content/calendar.ts` holds what is commissioned and not yet written, and only that. The posts are
the record of what exists, so a slot is deleted the moment its post is written, and the verify
script fails the build if a slot and a post share a slug or a date. `/blog/about` is the editorial
standards page and names the next few subjects without dates.

**They are released on a schedule, and the mechanism is load-bearing.** Fifty pages appearing on one
day is the signature of scaled content abuse under Google's spam policies regardless of who wrote
them or how good they are. `publishedPosts()` filters on the `published` date, the blog routes set
`revalidate = 3600`, and `generateStaticParams` prerenders only what is due. A post that is not yet
due **404s**, and the sitemap omits it, so nothing is submitted that would fail a crawl. Releasing
the set faster or slower is editing dates, nothing else.

Two content rules specific to this subject, both about not going stale:

- **No current licence holders, and no grading fees, stated as fact.** Licences move between
  manufacturers and fee schedules change, so posts describe how the structures work and point at the
  manufacturer for the current position.
- **No claims about what a named card is worth.** The site quotes one example card, labelled
  illustrative and computed from the fixture. Everything else describes method.

## Motion

**No motion library.** `motion/react` was removed: the header was its only consumer, and it cost
107KB of client JavaScript to fade one background. Everything is CSS, which also means it runs off
the main thread and cannot judder while the page is busy. This matches `dupi-site`, which ships zero
motion JS and is the smoothest of the three sites for exactly that reason.

**Animation is additive, never subtractive.** Every keyframe animation lives inside
`@media (prefers-reduced-motion: no-preference)`, so under `reduce` the animations are not declared
at all and the resting state is simply what renders. There is no blanket
`animation-duration: 0.01ms !important`: that forces animations to complete instantly including any
whose resting state is the hidden pose, which is how the first build of this site shipped invisible
content. Transitions are kept under `reduce`, because a hover colour change is feedback rather than
motion; what collapses is the springs.

**Springs.** A cubic-bezier cannot overshoot its endpoint, so a curve that settles rather than merely
arrives has to be a CSS `linear()` with enough stops to describe the wobble. `--web-spring-reveal`
overshoots gently to 1.047 and is for content arriving. `--web-spring-slam` overshoots hard to 1.148
and is for something landing. Both degrade to `--m-ease` under reduced motion, keeping the timing and
dropping the bounce. They are web-only garnish by necessity: React Native's easing API cannot express
them, which is why they are declared in `platformDrift.web` rather than in `Motion`.

Timing is `--m-fast` 140, `--m-base` 240, `--m-slow` 480, `--m-ceremony` 900. Ceremony is
deliberately far from slow: a duration between the two reads as a slow transition rather than a
deliberate one, and it is for the one moment per page meant to be watched.

**What actually moves, and why each is motivated:**

- The comp line **prints itself**. It is the tape, and a tape prints. Above the fold it draws on
  load; below the fold the same keyframe is driven by a view timeline so it prints as it arrives
  rather than before anyone has seen it. Normalised with SVG `pathLength` so the dash pattern
  survives the stretched viewBox.
- Comp rows **stagger in from the left**, like printed lines. Delay comes from `--stagger-index` on
  each child, capped at the eighth: past about half a second the reader is waiting, not being led.
- Headline figures use `figure-in` on a spring, because a number that settles reads as printed and a
  number that fades reads as loaded.
- Panels lift on hover, rows nudge right. Feedback about what is interactive.
- The header lifts on a `scroll()` timeline. **Not gated on reduced motion**, because without a
  ground the nav sits on page content and stops being readable, and the safe default is background
  on: a browser without scroll-timeline support keeps it permanently.

**Component classes belong in `@layer components`.** Unlayered they outrank Tailwind utilities: a
bare `.cta { display: inline-flex }` beat `md:hidden` and put a second button in the header on every
desktop page. Same trap as the note in `@layer base`, one layer up.

## Conventions

- Next.js 16 App Router, React 19, npm, TypeScript strict, `@/*` paths. `params` is a Promise.
- Tailwind v4, CSS-first. No `tailwind.config`. Tokens arrive as `@theme inline` in `app/tokens.css`.
- Flat `components/`, PascalCase, default exports.
- Icons from `@phosphor-icons/react/ssr` only, so they render in Server Components. Never hand-roll
  an SVG icon. `PriceLine` is a chart, not an icon: every vertex is a real datum.
- `next/font` always. Archivo for language, IBM Plex Mono for every figure.
- Dark only, by brand: `app.json` in the app repo pins `userInterfaceStyle` to dark and ships no
  light theme, so the site does not invent one.
- One radius scale applied by role: chips take `--r-sm`, controls `--r-md`, panels `--r-lg`.
- Resets belong in `@layer base`, or an unlayered rule silently beats a Tailwind utility.
- Section eyebrows are rationed to one per three sections. `.col-label` is a different thing: it
  names a column of figures inside a data panel, and is not counted against that budget.

## Photography

Generated with `npm run images:gen`, which needs `GEMINI_API_KEY` in `.env.local`. Read
[IMAGE-BRIEF.md](IMAGE-BRIEF.md) before touching a prompt: two of its five rules are about likeness
and trade marks, and a generation that breaks either cannot ship however good it looks. Trading
cards depict real athletes and carry real brand marks, which is why every prompt shoots cards
edge-on, fanned, face-down or lost in glare.

Workflow:

```
npm run images:gen -- --n 2     # two candidates per job, into design-review/candidates/
npm run images:sheet            # one contact sheet of the lot, for judging side by side
# copy the winners into public/photo/
```

Candidate mode never writes to `public/`, so the live site cannot regress while you are choosing.
Without `--n`, a run writes straight to `public/` and only on success, so a failed call cannot
destroy a good file.

`IMAGE_MODEL` overrides the model for a run. The default is the flash tier; the pro tier costs
several times more per image and is worth it only for the two frames that carry weight, the home
band and the share card.

The share card composites one of these behind the type. Two Satori behaviours are load-bearing there
and are commented in `app/opengraph-image.tsx`: `inset: 0` resolves against the padding box, and a
div with a background but no dimensions is not painted at all, which silently dropped the scrim and
left the headline sitting on bright chrome.

## Reviewing a change

`npm run shoot` writes `design-review/*.png` at 1440, 834 and 390, with `reducedMotion: 'reduce'`
so the settled state is what gets captured. Start the server first.

Two traps, both of which cost time already:

- `fullPage` at `deviceScaleFactor: 2` exceeds Chromium's capture surface on a page this tall and
  silently returns blank bands. The harness uses 1.
- If a previous `next start` is still holding the port, the new one fails with `EADDRINUSE` and the
  stale process keeps serving. The HTML then references a CSS chunk the rebuild has since renamed,
  so every page renders unstyled and every screenshot of it is a lie. **Use `npm run serve`, not
  `npm run start`**: it frees the port first. `pkill` from Git Bash does not reliably kill the node
  process on Windows, which is how this kept recurring. The harness also now fails loudly rather
  than photographing an unstyled page.

## Waitlist

The app is not in either store, so the only conversion on the page is the waitlist. `joinWaitlist`
in `app/actions/waitlist.ts` posts to a `waitlist` table in the app's Supabase project using the
publishable key, which is correct because the table's only policy is anon insert.

**That project was deleted and is being rebuilt.** Until `NEXT_PUBLIC_SUPABASE_URL` and
`SUPABASE_PUBLISHABLE_KEY` are set, the action returns a message telling the reader to email
instead. It does not pretend to have stored the address.

## Contrast

Every text colour on the site now clears WCAG AA against the ground it sits on. Measured, on
`--c-bg`: text 19.32:1, secondary 6.14:1, muted 5.66:1, accent 6.26:1, danger 5.67:1, success
9.56:1. Secondary on `--c-surface` is 5.58:1 and on `--c-elevated` 4.99:1.

One rule survives the correction:

- White on `--c-accent` measures **3.08:1** and fails at normal size. Filled controls use
  `--c-accent-ink`, the near-black ground, which measures **6.26:1** against the same blue. `.cta`,
  `.skip-link` and `::selection` all take it. `--c-accent-fill` is the darker blue for the opposite
  case, white on a fill, at 5.10:1.

`--c-text-muted` used to measure 2.67:1 and was banned from text for it. The palette correction in
`../cardpulse/src/theme/index.ts` moved it to `#828AA8`, which is 5.66:1, so the ban has lapsed.
The site still gives tertiary information its hierarchy from size and case on `--c-text-secondary`,
because that is a typographic decision rather than a workaround.

The four legal and support pages were the last holdouts: each carried its own palette in literal
hexes and so froze at the pre-correction values, including `#52566B` at 2.67:1 for the copyright
line and a brand blue two revisions out of date. They now read from the tokens like everything else.

## Things that are easy to undo by accident

- **`.prose-legal` sets the measure, not just the type.** Body copy is `--t-body` capped at `68ch`
  on the wrapper. It was `--t-body-sm` in a 760px column, which measured about 95 characters a line.
  The cap sits on the wrapper so headings, lists and note panels share one column edge.
- **`.prose-legal a` is scoped to `a:not([class])`.** Unscoped it measures (0,1,1) and beats `.cta`
  at (0,1,0) in the same layer, which painted the accent link colour onto the accent button ground
  and rendered the account deletion control as a blank blue block.
- **The hero headline is sized in `cqw` against `.hero-copy`, not in `vw`.** Sized against the
  viewport it rendered as four lines at 320, 360, 1024 and 1100, because the `lg` grid hands 460px
  of the row to the tape exactly where the viewport sum says the type should be near maximum. It is
  written as two lines and must render as two. The `vw` clamp is kept first as the fallback.
- **`[id] { scroll-margin-top: 88px }`.** The header is fixed. Without it every in-page anchor lands
  under the bar.
- **`verify:articles` checks dashes in `app/`, `components/`, `lib/` and `content/` source, not only
  in the content modules.** The rule held perfectly in fifty posts while the privacy policy shipped
  five em-dashes in JSX.
- **`app/not-found.tsx` is a real page.** Thirty-odd posts are scheduled and 404 by design at any
  moment, so this is a destination, not an edge case. `npm run shoot` photographs it.
