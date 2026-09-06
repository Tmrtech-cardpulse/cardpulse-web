# Topic map — sportscardpulse.app

The operating document for organic search. Not a description of one: if a page exists and is not
in this table, either the table is stale or the page should not exist.

Ports the playbook `dupi-site` ran as its plans 78 and 79 and `bagged-site` ran as its plan 16.
Three claims from the study behind it decide most of what follows.

- **Topic depth beats backlinks, roughly two to one.** Owning a subject completely outranks being
  linked to about one.
- **Only in-text links count.** A nav menu is not a link plan, and neither is a `related` array
  that renders a grid at the foot of a page.
- **One page per query.** Two pages competing for the same search is the commonest self-inflicted
  wound in this discipline, and it is one careless title away at all times.

## What cannot be done here, stated before anything else is read

**There is no keyword volume data in this plan.** No Ahrefs, no Similarweb, no Search Console
export. Every priority below is reasoned from structure and from what the product is, not from
measured demand. Sections marked **[VOLUME]** are exactly where a real check should replace a
judgement. Inventing figures would be worse than having none, because a fabricated number gets
planned against.

**The strongest asset on this site is not yet buildable.** The app prices named cards from real
eBay UK sold listings. "What is my 2020 Topps Chrome Bellingham worth" is a real question, the
product answers it as a matter of course, and a `/price/{card}` family is the direct analogue of
Bagged's `/is/{product}` long tail. It is blocked on the Supabase rebuild, and it must stay blocked:
a page per card asserted without data is a thin programmatic page, which is the shape of a spam farm
and is treated as one. See "The long tail, when it is possible" below.

## Host

`sportscardpulse.app` 307s to `www.sportscardpulse.app`, and `lib/site.ts` declares the `www` host.
Canonicals, OG URLs and every sitemap entry therefore point at the host that answers 200. Verified
2026-08-25. Re-check after any domain change: a mismatch here silently devalues every page on the
site and is invisible from the browser.

## Structure

```
/                                  The product. Money page for every route in.
/guides                            Hub.
  /guides/how-to-price-a-sports-card    PILLAR 1. Owns pricing.
  /guides/what-grading-does-to-the-price PILLAR 2. Owns grading.
  /guides/sold-prices-versus-asking-prices
  /guides/rookie-cards-explained
  /guides/how-to-spot-a-reprint
/glossary                          Reference. Long tail by term.
/blog                              Index, grouped by cluster. Each heading links to its hub.
  /blog/c/{cluster}                CLUSTER HUB. One per cluster, seven of them. Own intro copy,
                                   the pillar guide, and every post in the cluster. This is the
                                   URL the pillar and the posts both point at.
  /blog/about                      Editorial standards. What the numbers are, what is deliberately
                                   not stated, why the schedule exists, what is planned next.
/blog/{slug}                       Supporting articles. Link UP to a pillar, in prose, and to the
                                   cluster hub from the byline.
/price/{card}                      BLOCKED on the backend. Do not build without data.
```

## The table

Owner is Claude unless a human is named. Status is one of `live`, `drafted`, `blocked`.

| Topic | Pillar | Supporting | Money page | Status |
| --- | --- | --- | --- | --- |
| Pricing a card | `/guides/how-to-price-a-sports-card` | blog cluster `valuation` | `/#waitlist` | live |
| Grading | `/guides/what-grading-does-to-the-price` | blog cluster `grading` | `/#waitlist` | live |
| Sold vs asking | `/guides/sold-prices-versus-asking-prices` | cluster `valuation` | `/#waitlist` | live |
| Rookie cards | `/guides/rookie-cards-explained` | cluster `rookies` | `/#waitlist` | live |
| Authenticity | `/guides/how-to-spot-a-reprint` | cluster `authenticity` | `/#waitlist` | live |
| Selling in the UK | none yet | cluster `selling` | `/#waitlist` | drafted |
| Products and sets | none yet | cluster `products` | `/#waitlist` | drafted |
| Storage and care | none yet | cluster `care` | `/#waitlist` | drafted |
| Terminology | `/glossary` | glossary entries | `/#waitlist` | live |
| Named card prices | `/price/{card}` | n/a | `/#waitlist` | **blocked** |

Three clusters have no pillar yet (`selling`, `products`, `care`). That is deliberate and it is a
known gap: a pillar should be written once the cluster below it exists and has shown which sub-topic
actually carries the weight. Promoting a post to a pillar later is cheap. Writing a pillar for a
topic you have not covered yet is guesswork.

All three now have a dated slot in `content/calendar.ts`, placed after enough of their supporting
posts have run to write the pillar from what the cluster actually covers. A gap with a plan against
it is a decision; a gap with nothing against it is something that was forgotten.

Each hub says so on the page. A cluster with no guide carries a note explaining why rather than
leaving a reader to notice the absence.

## Rules that hold across every topic

- **In-text links only.** `Block` supports `[label](/href)` through `parseInline`. Every post must
  link up to its pillar **in the body copy**, and `verify:articles` fails the build if it does not.
  The `related` grid at the foot is navigation, not a link plan.
- **Money page.** Every conversion route goes to `/#waitlist`. Never a bare store link: the app is
  not listed in either store, and a dead CTA is worse than an honest one.
- **Byline is SportsCardPulse (Organization).** A named human byline only where a named human
  actually wrote the page.
- **No price claims about named cards outside the fixture.** The site quotes one example card,
  labelled illustrative, computed from `lib/exampleCard.ts`. A post asserting what a specific card
  is worth today ages badly and cannot be verified, so posts describe method and mechanics instead.
- **Nothing that reads as investment advice.** Cards are described as a market, never as an asset
  class to buy. This is a register, not a style preference.

## The editorial calendar

`content/calendar.ts` holds what is commissioned and not yet written, and nothing else. The posts
are the record of what exists, so a slot is deleted the moment its post is written and
`verify:articles` fails the build if a slot and a post ever share a slug, or if two slots share a
date, or if a slot dates itself onto a day a post already occupies.

Slots are never rendered to the public with their dates. `/blog/about` names the next few subjects
without them, because a schedule published and then missed is worse than no schedule published.

## Publishing cadence

Fifty posts published in one day is the signature of scaled content abuse under Google's spam
policies, whoever wrote them. The `published` date on a post is therefore load-bearing: the index,
the sitemap and the route all exclude anything dated in the future, so the set can be written once
and released over weeks by editing dates alone. See `content/posts/index.ts`.

## The long tail, when it is possible

`/price/{card}` once the backend exists. Design constraints, ported from Bagged's `/is/{product}`
because the failure mode is identical:

- Generated from real sold comps, never hand-asserted.
- **A page per card only where there is enough to say.** Below a comp threshold the page is thin
  and should not exist, let alone be submitted.
- Held out of the sitemap below that threshold.
- Each links up to the pricing pillar.
- **Write one by hand first.** If the first cannot be written honestly, the family does not ship.

## Monthly check

1. Search Console: impressions and average position per cluster, not per page.
2. Any post with impressions and no clicks: the title is wrong, not the content.
3. Any cluster flat for two months: the pillar is missing or the in-text linking is not real.
4. Re-run `npm run verify:articles`. It gates the in-text linking rule.
