# Image brief for SportsCardPulse

What to generate, at what size, and what must never appear in it.

Generated with `scripts/generate-images.mjs` using Gemini 2.5 Flash Image, the same pipeline as
`bagged-site`. The three rules that set failed on are inherited here as hard rules, plus two more
that are specific to trading cards and are the more dangerous ones.

---

## The five rules

### 1. No text inside any image

No headlines, no logos, no captions, no labels, no card names, no numbers, no UI. Every word on this
site is live HTML sitting beside or on top of the picture, which is how it stays translatable,
searchable, accessible and editable without regenerating anything.

Image models garble small lettering. Bagged's first set produced "TESCG" and "PYVITA". A card
covered in invented misspelled words is an immediate reject.

Where a card face would normally carry text, the art direction turns that weakness into the point:
shoot at an angle, in shallow focus, or under a specular highlight, so the card reads as a card
without any of it being readable.

### 2. No real player likenesses

Trading cards depict real, living, identifiable athletes with commercial likeness rights. A
generated image that looks like a specific footballer on a card is a rights problem, not a style
problem.

So: no recognisable faces. Cards are shown edge-on, face-down, fanned so only slivers are visible,
in deep shadow, or with the face turned away from camera. Where a figure is unavoidable it is a
generic athletic silhouette, small in frame and out of focus.

### 3. No real brand marks

No Topps, Panini, Upper Deck, Prizm, Select, PSA, BGS, SGC or eBay. No club badges, no league logos,
no kit sponsors, no national team crests. A graded case is an unbranded rigid clear plastic holder
with a blank label area, never a PSA slab.

### 4. No app screenshots, ever

The whole point of this redesign was deleting a fake product UI drawn out of divs. Generating a fake
product UI out of pixels instead is the same lie with a better renderer. `PriceTape` renders real
computed data and that stays the way the product is shown. Photography shows the physical object
only.

### 5. It has to sit on a near-black page

The site ground is `#0B0D1A`. Images that arrive on a white or warm studio background will look
stuck on. Everything is shot dark, and the frame edges need to fall away to near-black so an image
can sit on the page without a hard boundary.

---

## Style preamble

Pasted in front of every prompt by the script. Two styles, because the page has two jobs.

**OBJECT.** The card as a physical thing. Used for the home page and for guide headers.

> Editorial product photography on a very dark near-black surface, tones around #0B0D1A, matte and
> faintly textured like slate. A single hard raking light from one side at a low angle, so edges
> catch a bright specular line and the rest falls into deep shadow. Cool colour temperature, no warm
> tungsten, no golden hour. Shallow depth of field, shot on a 50mm macro at f/2.8. Deep blacks, high
> contrast, quiet and expensive. A single cool blue highlight around #3D7BFF where specified.

**MACRO.** Extreme close detail, for guides about condition and authenticity.

> Extreme macro photography, magnification so high that paper fibre and printed dot structure are
> visible. Very shallow focus with most of the frame falling out of focus. Dark cool background,
> near-black. One hard raking light. Clinical, forensic, more like a laboratory than a studio.

---

## The set

| Job | Output | Where it goes |
| --- | --- | --- |
| `hero` | `public/photo/cards-fanned.jpg` | Home page, band between sections |
| `slab` | `public/photo/slab.jpg` | Guide: what grading does to the price |
| `loupe` | `public/photo/loupe.jpg` | Guide: how to spot a reprint |
| `sleeves` | `public/photo/sleeves.jpg` | Guide: how to price a sports card |
| `edge` | `public/photo/card-edge.jpg` | Guide: rookie cards explained |
| `pair` | `public/photo/two-cards.jpg` | Guide: sold prices versus asking prices |
| `og` | `public/photo/og-backdrop.jpg` | Share card backdrop, wide, left third occupied |

Guide header images are 3:2 and are rendered at up to 760px wide, so 1536x1024 is comfortable.

---

## Reviewing a generation

Reject on any of these, without arguing with it:

- any legible word, anywhere, including on a blurred card face
- a face that could be mistaken for a specific person
- anything resembling a real brand mark or club badge
- a white, cream or warm background
- a phone, a screen, or anything resembling app UI
- six fingers, or hands at all

Re-run a single failed job by name: `node --env-file=.env.local scripts/generate-images.mjs slab`.
Existing files are only overwritten when a call succeeds, so a bad run cannot destroy a good file.
