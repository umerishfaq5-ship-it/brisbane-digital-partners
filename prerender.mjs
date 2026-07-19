import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { chromium } from '@playwright/test';
import http from 'http';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  // Core SEO Services
  '/services/seo-audits',
  '/services/local-seo',
  '/services/google-business-profile',
  '/services/technical-seo',
  '/services/ecommerce-seo',
  '/services/link-building',
  '/services/ai-seo',
  '/services/seo-migration',
  '/services/on-page-seo',
  '/services/content-marketing',
  '/services/seo-packages',
  '/services/seo-consulting',
  '/services/small-business-seo',
  '/services/b2b-seo',
  '/services/enterprise-seo',
  '/services/wordpress-seo',
  '/services/shopify-seo',
  '/services/woocommerce-seo',
  '/services/speed-optimization',
  // Paid Advertising
  '/services/ppc-google-ads',
  '/services/social-media-ads',
  '/services/facebook-ads',
  '/services/email-marketing',
  '/services/conversion-rate-optimisation',
  '/services/ppc-brisbane',
  '/services/google-ads-brisbane',
  // Web & App Development
  '/services/mobile-apps',
  '/services/web-development',
  '/services/wordpress-development',
  '/services/squarespace-development',
  '/services/shopify-development',
  '/services/woocommerce-development',
  '/services/wix-development',
  '/services/bigcommerce-development',
  '/services/magento-development',
  '/services/maropost-neto',
  // Industry Pages
  '/industry/seo-for-tradies',
  '/industry/seo-for-dentists',
  '/industry/seo-for-lawyers',
  '/industry/seo-for-real-estate',
  '/industry/retail-seo',
  '/industry/hospitality-seo',
  '/industry/healthcare-seo',
  '/industry/accountant-seo',
  '/industry/mortgage-broker-seo',
  '/industry/education-seo',
  // Location Pages
  '/locations/brisbane-seo',
  '/locations/sydney-seo',
  '/locations/melbourne-seo',
  '/locations/perth-seo',
  '/locations/adelaide-seo',
  '/locations/canberra-seo',
  '/locations/gold-coast-seo',
  '/locations/sunshine-coast-seo',
  '/locations/hobart-seo',
  // General
  '/portfolio',
  '/portfolio/my-fitness-coach',
  '/portfolio/circle-it',
  '/portfolio/vacancies',
  '/portfolio/heaven-on-mainstreet',
  '/portfolio/institutional-scalper',
  '/portfolio/markhor-auto-care',
  '/testimonials',
  '/sitemap',
  '/privacy',
  '/terms',
  // Blog Index
  '/blog',
  // Blog Posts
  '/blog/why-your-website-needs-seo',
  '/blog/seo-for-small-business-zero-time',
  '/blog/seo-vs-google-ads-aussie-tradies',
  '/blog/google-business-profile-setup',
  '/blog/seo-audit-checklist',
  '/blog/com-vs-com-au-australia',
  '/blog/what-are-backlinks',
  '/blog/shopify-seo-australia',
  '/blog/core-update-may-2026',
  '/blog/content-strategy-core-update',
  '/blog/technical-seo-core-update',
  '/blog/local-entity-core-update',
  // Hamza Invoice
  '/hamza',
  '/hamza/records',
];

const PORT = 54321;
const distDir = path.join(__dirname, 'dist');

/** Kill any process currently holding PORT */
function killPort(port) {
  try {
    const result = execSync(
      `powershell -Command "Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -First 1"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    if (result && !isNaN(parseInt(result))) {
      execSync(`taskkill /PID ${result} /F`, { stdio: 'ignore' });
      console.log(`Freed port ${port} (killed PID ${result})`);
    }
  } catch {
    // port was already free
  }
}

/**
 * Wait for the React app to fully render on the page.
 * Strategy:
 *   1. Wait for networkidle (JS bundle loaded & executed)
 *   2. Wait for a visible content selector to appear in the DOM
 *   3. Poll innerText until it has real content (retry up to 10×)
 *   4. Extra settle time for framer-motion animations
 */
async function waitForContent(page, route, minLength) {
  // Step 1 — wait for any meaningful DOM element
  const selectors = [
    'h1',
    'h2',
    'main p',
    'section',
    '[class*="hero"]',
    '[class*="Hero"]',
    '.container',
    '#root > div > *',
  ];
  for (const sel of selectors) {
    try {
      await page.waitForSelector(sel, { timeout: 5000, state: 'attached' });
      break;
    } catch { /* try next */ }
  }

  // Step 2 — poll body.innerText with increasing backoff
  let bodyText = '';
  const delays = [300, 500, 700, 1000, 1000, 1000, 1500, 1500, 2000, 2000];
  for (let i = 0; i < delays.length; i++) {
    await page.waitForTimeout(delays[i]);
    try {
      bodyText = (await page.innerText('body', { timeout: 3000 })).trim();
    } catch {
      bodyText = '';
    }
    if (bodyText.length >= minLength) break;
  }

  // Step 3 — extra settle for CSS animations / lazy images
  await page.waitForTimeout(600);

  return bodyText;
}

async function runPrerender() {
  const originalIndex = path.join(distDir, 'index.html');
  const templateIndex = path.join(distDir, '_template.html');
  fs.copyFileSync(originalIndex, templateIndex);

  console.log('Starting local server for prerendering...');

  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: distDir,
      rewrites: [{ source: '**', destination: '/_template.html' }]
    });
  });

  killPort(PORT);
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Server listening on port ${PORT}`);

  console.log('Launching Playwright Chrome...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Reuse a single browser context for all pages (faster + shares JS heap)
  const context = await browser.newContext({
    // Simulate a real desktop viewport so layout calculations work
    viewport: { width: 1280, height: 900 },
    userAgent: 'Mozilla/5.0 (compatible; Prerender/1.0)',
  });

  let hollowCount = 0;
  const hollowRoutes = [];

  for (const route of routes) {
    const page = await context.newPage();
    console.log(`Prerendering: ${route}`);

    // Block external resources that slow down rendering but aren't needed for HTML
    await page.route('**/*', intercepted => {
      const url = intercepted.request().url();
      const isLocal = url.startsWith(`http://localhost:${PORT}`) || url.startsWith('data:');
      const type = intercepted.request().resourceType();
      // Allow local JS/CSS (needed for React to run), block external images/fonts/analytics
      if (!isLocal && (type === 'image' || type === 'font' || type === 'media'
        || url.includes('google-analytics') || url.includes('googletagmanager')
        || url.includes('hotjar') || url.includes('intercom'))) {
        intercepted.abort();
      } else {
        intercepted.continue();
      }
    });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle',
        timeout: 45000,
      });
    } catch (err) {
      console.warn(`  ⚠ goto timed out for ${route}: ${err.message}`);
    }

    const isHamzaRoute = route.startsWith('/hamza');
    const minLength = isHamzaRoute ? 20 : 300;

    const bodyText = await waitForContent(page, route, minLength);
    const html = await page.content();

    if (bodyText.length < minLength) {
      hollowCount++;
      hollowRoutes.push(route);
      console.warn(`  ⚠ HOLLOW: ${route} (${bodyText.length} chars)`);
    } else {
      console.log(`  ✓ ${route} (${bodyText.length} chars)`);
    }

    const isIndex = route === '/';
    const filePath = isIndex
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');

    const fileDir = path.dirname(filePath);
    if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir, { recursive: true });

    fs.writeFileSync(filePath, html);
    await page.close();
  }

  await browser.close();
  server.close();

  if (fs.existsSync(templateIndex)) fs.unlinkSync(templateIndex);

  console.log('\n✅ Prerendering complete!');
  console.log(`   Total routes: ${routes.length}`);
  console.log(`   Successful:   ${routes.length - hollowCount}`);
  if (hollowCount > 0) {
    console.warn(`   Hollow pages: ${hollowCount}`);
    hollowRoutes.forEach(r => console.warn(`     - ${r}`));
    console.warn('\n   Hollow pages still have the React SPA shell — they will');
    console.warn('   render correctly in the browser via client-side hydration.');
  }
}

runPrerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
