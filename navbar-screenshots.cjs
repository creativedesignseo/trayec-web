const { chromium } = require('playwright');
const path = require('path');

const BASE = 'https://trayec-web.netlify.app';
const outDir = '/Users/aimac/Documents/Workspace/Clients/Trayec/trayec-web/mobile-screenshots';

(async () => {
  const browser = await chromium.launch();

  // Desktop dropdown - use hover and wait for visible dropdown
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(BASE, { waitUntil: 'networkidle' });
  await desktopPage.locator('nav >> button:has-text("Servicios")').hover();
  await desktopPage.waitForSelector('nav >> .absolute >> text=Reformas Integrales', { state: 'visible', timeout: 5000 });
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: path.join(outDir, 'navbar-desktop-dropdown.png') });

  await browser.close();
  console.log('Done');
})();
