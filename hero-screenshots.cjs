const { chromium } = require('playwright');
const path = require('path');

const BASE = 'https://trayec-web.netlify.app';
const outDir = '/Users/aimac/Documents/Workspace/Clients/Trayec/trayec-web/mobile-screenshots';

(async () => {
  const browser = await chromium.launch();

  // Desktop Home
  const desktopContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const d1 = await desktopContext.newPage();
  await d1.goto(BASE, { waitUntil: 'networkidle' });
  await d1.screenshot({ path: path.join(outDir, 'home-desktop-hero-light.png') });

  // Desktop Reformas
  const d2 = await desktopContext.newPage();
  await d2.goto(BASE + '/reformas', { waitUntil: 'networkidle' });
  await d2.screenshot({ path: path.join(outDir, 'reformas-desktop-hero-light.png') });

  // Mobile Home
  const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
  const m1 = await mobileContext.newPage();
  await m1.goto(BASE, { waitUntil: 'networkidle' });
  await m1.screenshot({ path: path.join(outDir, 'home-mobile-hero-light.png'), fullPage: false });

  // Mobile Reformas
  const m2 = await mobileContext.newPage();
  await m2.goto(BASE + '/reformas', { waitUntil: 'networkidle' });
  await m2.screenshot({ path: path.join(outDir, 'reformas-mobile-hero-light.png'), fullPage: false });

  await browser.close();
  console.log('Done');
})();
