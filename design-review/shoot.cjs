/**
 * Screenshot harness. Start the site, then:
 *   node design-review/shoot.cjs [baseUrl]
 *
 * Shoots every route at three widths so a layout that only breaks on tablet
 * cannot ship unnoticed. Output lands next to this file and is gitignored.
 */
const { chromium } = require('playwright');
const path = require('path');

const BASE = process.argv[2] || 'http://127.0.0.1:3000';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 834, height: 1100 },
  { name: 'mobile', width: 390, height: 844 },
];

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'guides', path: '/guides' },
  { name: 'glossary', path: '/glossary' },
  { name: 'guide', path: '/guides/how-to-price-a-sports-card' },
  { name: 'privacy', path: '/privacy' },
];

(async () => {
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1, // fullPage at 2x exceeds Chromium's capture surface and returns blank bands
      colorScheme: 'dark',
      reducedMotion: 'reduce', // shoot the settled state, not mid-reveal
    });
    const page = await ctx.newPage();
    for (const route of ROUTES) {
      const url = `${BASE}${route.path}`;
      const res = await page.goto(url, { waitUntil: 'load', timeout: 20000 }).catch(() => null);
      if (!res || !res.ok()) {
        console.log(`skip ${route.name} @ ${vp.name} (${res ? res.status() : 'no response'})`);
        continue;
      }
      await page.waitForTimeout(300);

      // Guard against the stale-server trap. If a previous `next start` still
      // holds the port, the new one dies with EADDRINUSE and the old process
      // keeps serving HTML that points at a CSS chunk which no longer exists.
      // Every page then renders as unstyled markup, and a screenshot of that is
      // worse than no screenshot: it looks like a design regression.
      const styled = await page.evaluate(() => {
        const bg = getComputedStyle(document.body).backgroundColor;
        return bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' && bg !== 'rgb(255, 255, 255)';
      });
      if (!styled) {
        throw new Error(
          `${url} rendered without CSS. A stale server is probably holding the port: ` +
            'kill it and start a fresh one, or shoot against another port.',
        );
      }
      const out = path.join(__dirname, `${route.name}-${vp.name}.png`);
      await page.screenshot({ path: out, fullPage: true });
      console.log(`shot ${path.basename(out)}`);
    }
    await ctx.close();
  }
  await browser.close();
})();
