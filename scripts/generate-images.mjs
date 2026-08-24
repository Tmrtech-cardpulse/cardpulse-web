// Generates the site photography with Gemini 2.5 Flash Image ("nano banana").
//
// Same pipeline as bagged-site/scripts/generate-images.mjs. Reads GEMINI_API_KEY
// from the environment. Put it in .env.local, which is gitignored. Never pass it
// on the command line: it lands in shell history.
//
//   node --env-file=.env.local scripts/generate-images.mjs             # all
//   node --env-file=.env.local scripts/generate-images.mjs slab loupe  # some
//
// Output goes straight to the paths the components read, so a good generation is
// live the moment the build runs. Existing files are only overwritten when the
// call succeeds, so a bad run cannot destroy what is already there.
//
// Read IMAGE-BRIEF.md before editing a prompt. The five rules there are not
// stylistic preferences: two of them are about likeness and trade marks, and a
// generation that breaks either cannot ship regardless of how good it looks.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error(
    '\nGEMINI_API_KEY is not set.\n' +
      'Add it to .env.local (gitignored) and run with --env-file=.env.local\n',
  );
  process.exit(2);
}

// bagged-site is pinned to gemini-2.5-flash-image and there was no reason to
// move it. This set is generated fresh and leans on the things the newer models
// are better at: specular highlights on chrome, macro paper fibre, and blacks
// that stay black. Override per run without editing this file:
//
//   IMAGE_MODEL=gemini-3-pro-image npm run images:gen hero og
//
// The pro tier costs more per image, so the default is the flash one.
const MODEL = process.env.IMAGE_MODEL ?? 'gemini-3.1-flash-image';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Appended to every prompt. The negatives are the expensive lessons: garbled
// lettering, real likenesses and real brand marks are all reasons a generation
// gets binned, so they are stated on every single call rather than trusted to
// the style preamble.
const NEVER =
  ' Absolutely no text, no lettering, no numbers, no logos, no brand marks, no club badges, ' +
  'no watermarks, no user interface, no phones, no screens, no hands, and no recognisable human ' +
  'faces. Any card face is angled away, out of focus, or lost in glare so that nothing on it is ' +
  'readable.';

const OBJECT =
  'Editorial product photography on a very dark near-black surface, tones around #0B0D1A, matte ' +
  'and faintly textured like slate. A single hard raking light from one side at a low angle, so ' +
  'edges catch a bright specular line and the rest falls into deep shadow. Cool colour ' +
  'temperature, no warm tungsten, no golden hour. Shallow depth of field, shot on a 50mm macro ' +
  'at f/2.8. Deep blacks, high contrast, quiet and expensive.';

const MACRO =
  'Extreme macro photography, magnification so high that paper fibre and printed dot structure ' +
  'are visible. Very shallow focus with most of the frame falling out of focus. Dark cool ' +
  'background, near-black. One hard raking light. Clinical and forensic, more like a laboratory ' +
  'than a studio.';

/** `out` paths match what the components import. Aspect is 3:2 unless stated. */
const JOBS = {
  hero: {
    style: OBJECT,
    out: 'public/photo/cards-fanned.jpg',
    prompt:
      'A loose fan of blank trading cards spread across a dark slate surface, photographed from ' +
      'a low three-quarter angle. The cards overlap so only narrow slivers of each face show. ' +
      'One card near the centre has a chrome mirror finish and catches the raking light as a ' +
      'sharp cool blue rainbow shimmer across its surface. The rest sit in deep shadow. The right ' +
      'half of the frame is empty dark surface falling away to black.',
  },
  slab: {
    style: OBJECT,
    out: 'public/photo/slab.jpg',
    prompt:
      'A single unbranded rigid clear plastic protective case holding a trading card, standing ' +
      'upright and leaning slightly, on a dark slate surface. The case is completely plain with a ' +
      'blank unmarked label strip across the top. Light rakes across from the left, catching the ' +
      'bevelled edge of the plastic as a bright line and throwing a long soft shadow to the right. ' +
      'The card inside is dark and unreadable behind the glare on the plastic.',
  },
  loupe: {
    style: MACRO,
    out: 'public/photo/loupe.jpg',
    prompt:
      'A small metal jewellers loupe resting lens-down on the surface of a blank trading card on a ' +
      'dark surface. Through the lens the card surface is magnified enough to show the regular ' +
      'rosette pattern of offset printing as coloured dots. Outside the lens the card falls ' +
      'immediately out of focus. The metal barrel of the loupe catches a single hard highlight.',
  },
  sleeves: {
    style: OBJECT,
    out: 'public/photo/sleeves.jpg',
    prompt:
      'A row of blank trading cards standing upright in clear soft plastic sleeves inside a plain ' +
      'dark storage box, photographed from directly above at a slight angle so the tops of the ' +
      'cards recede into shadow. The sleeves catch thin cool highlights along their folded edges. ' +
      'Card faces are almost entirely hidden by the ones in front of them.',
  },
  edge: {
    style: MACRO,
    out: 'public/photo/card-edge.jpg',
    prompt:
      'Extreme macro of the cut edge of a single trading card lying on a dark surface, shot almost ' +
      'level with the surface so the layered paper core of the card is visible as a fine pale ' +
      'stripe between two darker printed faces. One sharp corner is in focus and the rest of the ' +
      'card recedes into darkness. A cool blue rim light picks out the top edge.',
  },
  pair: {
    style: OBJECT,
    out: 'public/photo/two-cards.jpg',
    prompt:
      'Two blank trading cards lying side by side on a dark slate surface, seen from above at a ' +
      'slight angle. The left card is lit by a hard raking light and shows its texture clearly. ' +
      'The right card sits just outside the light and is almost entirely in shadow, visible only ' +
      'by a faint edge highlight. Generous empty dark surface around both.',
  },
  og: {
    style: OBJECT,
    out: 'public/photo/og-backdrop.jpg',
    prompt:
      'A small stack of blank trading cards sitting at a slight angle on a dark slate surface, ' +
      'occupying only the left third of a wide landscape frame. The remaining two thirds is empty ' +
      'dark surface falling smoothly away to near-black. The top card catches a single cool blue ' +
      'specular highlight along one edge.',
  },
};

async function generate(job) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': KEY },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${job.style}\n\n${job.prompt}${NEVER}` }] }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${res.status} ${res.statusText}\n${body.slice(0, 400)}`);
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const image = parts.find((p) => p.inlineData?.data);

  if (!image) {
    // A refusal or a text-only reply comes back here rather than as an HTTP
    // error, so surface whatever the model actually said.
    const said = parts.map((p) => p.text).filter(Boolean).join(' ').slice(0, 300);
    throw new Error(`no image in response. Model said: ${said || '(nothing)'}`);
  }

  const buf = Buffer.from(image.inlineData.data, 'base64');
  mkdirSync(dirname(job.out), { recursive: true });
  writeFileSync(job.out, buf);
  return buf.length;
}

// Candidate mode. `--n 3` writes three tries per job into
// design-review/candidates/ instead of public/, for review before anything goes
// live. Nothing in public/ is touched until a winner is promoted, which is what
// makes it safe to generate freely: the site cannot regress while you are
// choosing.
const argv = process.argv.slice(2);
const nFlag = argv.indexOf('--n');
const CANDIDATES = nFlag === -1 ? 0 : Number(argv[nFlag + 1] || 3);
const wanted = argv.filter((a, i) => !a.startsWith('--') && i !== nFlag + 1);

const jobs = Object.entries(JOBS).filter(
  ([name]) => wanted.length === 0 || wanted.some((w) => name.startsWith(w)),
);

if (jobs.length === 0) {
  console.error(`\nNo jobs matched. Available: ${Object.keys(JOBS).join(', ')}\n`);
  process.exit(2);
}

console.log(`\nGenerating ${jobs.length} image(s) with ${MODEL}\n`);

let failed = 0;
let made = 0;

for (const [name, job] of jobs) {
  const tries = CANDIDATES || 1;
  for (let i = 1; i <= tries; i++) {
    const target = CANDIDATES
      ? { ...job, out: `design-review/candidates/${name}-${i}.jpg` }
      : job;
    try {
      const bytes = await generate(target);
      made++;
      console.log(`  ok    ${`${name}-${i}`.padEnd(11)} ${(bytes / 1024).toFixed(0)}KB  ${target.out}`);
    } catch (err) {
      failed++;
      console.error(`  FAIL  ${`${name}-${i}`.padEnd(11)} ${err.message}`);
    }
  }
}

// Rough running cost, so a large candidate run cannot quietly get expensive.
// Flash image output is billed per image; treat this as an estimate, not a bill.
const RATE = MODEL.includes('pro') ? 0.15 : 0.04;
console.log(`\n  approx spend this run: $${(made * RATE).toFixed(2)} (${made} images on ${MODEL})`);

console.log(
  `\n${made} written, ${failed} failed.` +
    (failed ? ' Re-run the failures by name.\n' : '\n'),
);

// exitCode rather than process.exit(): exiting outright while stdout is still
// flushing throws a libuv assertion on Windows, which looks like a crash on top
// of whatever actually failed.
process.exitCode = failed ? 1 : 0;
