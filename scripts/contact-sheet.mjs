// Builds a contact sheet of everything in design-review/candidates/ so a whole
// generation round can be judged side by side instead of one file at a time.
//
//   node scripts/contact-sheet.mjs
//
// Writes design-review/contact-sheet.png. Uses the Playwright that is already a
// devDependency for the screenshot harness, so this adds no new tooling: the
// grid is an HTML page rendered from local files and screenshotted.

import { chromium } from 'playwright';
import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIR = resolve('design-review/candidates');
if (!existsSync(DIR)) {
  console.error('\nNo design-review/candidates/. Run: npm run images:gen -- --n 2\n');
  process.exit(2);
}

const files = readdirSync(DIR).filter((f) => /\.(jpg|png)$/i.test(f)).sort();
if (!files.length) {
  console.error('\nNo candidate images found.\n');
  process.exit(2);
}

// file:// URLs so the page reads straight off disk with no server involved.
const cells = files
  .map(
    (f) => `
    <figure>
      <img src="file:///${join(DIR, f).replace(/\\/g, '/')}" alt="">
      <figcaption>${f.replace(/\.(jpg|png)$/i, '')}</figcaption>
    </figure>`,
  )
  .join('');

const html = `<!doctype html><meta charset="utf-8">
<style>
  body { margin:0; padding:24px; background:#0B0D1A; color:#8B90AA;
         font:13px ui-monospace,monospace; }
  .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  figure { margin:0; }
  img { width:100%; aspect-ratio:3/2; object-fit:cover; display:block;
        border:1px solid #252A45; border-radius:8px; background:#161827; }
  figcaption { padding-top:8px; letter-spacing:.08em; text-transform:uppercase; }
</style>
<div class="grid">${cells}</div>`;

const tmp = resolve('design-review/.contact-sheet.html');
writeFileSync(tmp, html);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
await page.goto(`file:///${tmp.replace(/\\/g, '/')}`, { waitUntil: 'load' });
await page.waitForTimeout(400);
await page.screenshot({ path: 'design-review/contact-sheet.png', fullPage: true });
await browser.close();

console.log(`\ncontact sheet: design-review/contact-sheet.png (${files.length} candidates)\n`);
