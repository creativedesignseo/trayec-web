const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await page.click('button[aria-label="Abrir menú"]');
  await page.waitForTimeout(500);
  const outDir = '/Users/aimac/Documents/Workspace/Clients/Trayec/trayec-web/mobile-screenshots';
  await page.screenshot({ path: path.join(outDir, 'menu-open-mobile.png') });
  await browser.close();
  console.log('Done');
})();
