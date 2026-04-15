const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:4173';
const routes = [
  '/',
  '/vaciado-pisos',
  '/recogida-muebles',
  '/reformas',
  '/limpieza-post-obra',
  '/pintura',
  '/contacto',
  '/sobre-nosotros',
  '/legal',
];

const outDir = '/Users/aimac/Documents/Workspace/Clients/Trayec/trayec-web/mobile-screenshots';
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  for (const route of routes) {
    await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
    const filename = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
    await page.screenshot({ path: path.join(outDir, `${filename}-mobile.png`), fullPage: true });
    console.log('Screenshot:', filename);
  }

  await browser.close();
  console.log('Done');
})();
