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

Scroll reveal is CSS, via `animation-timeline: view()` in `app/globals.css`, not a `whileInView`
motion component. This is not a preference. A JS reveal parks real content at opacity 0 until an
IntersectionObserver fires, so anything that does not scroll never sees it, and the first build of
this redesign shipped exactly that bug. The CSS version has a visible resting state and adds motion
only where the browser supports a view timeline and the reader has not asked for less.

`Header` is the one motion component, and it reads scroll position from Motion's `useScroll`. Never
`window.addEventListener('scroll')`, and never `useState` for a continuous value.

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

Two values in the inherited palette fail WCAG AA and the site works around both:

- `--c-text-muted` measures **2.67:1** on the page ground. It fails AA at every size, so it is not
  used for text anywhere on this site. Tertiary information gets its hierarchy from size and case
  instead, on `--c-text-secondary` (6.14:1).
- White on `--c-accent` measures **3.84:1**, short of the 4.5 that normal-size text needs. Filled
  controls use `--c-accent-ink` instead, which is the near-black ground and measures **5.04:1**
  against the same blue. The brand hex is unchanged.

The app has the same two problems in `../cardpulse/src/theme/index.ts` and has not been changed.
`accentInk` was added there additively and is available whenever the app wants it.
