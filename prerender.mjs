import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
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
  // SEO Services
  '/services/seo-audits',
  '/services/local-seo',
  '/services/google-business-profile',
  // Paid Advertising
  '/services/ppc-google-ads',
  '/services/social-media-ads',
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
  // Location Pages
  '/locations/brisbane-seo',
  '/locations/sydney-seo',
  '/locations/melbourne-seo',
  '/locations/perth-seo',
  '/locations/adelaide-seo',
  '/locations/canberra-seo',
  // General
  '/portfolio',
  '/portfolio/my-fitness-coach',
  '/portfolio/circle-it',
  '/portfolio/vacancies',
  '/portfolio/heaven-on-mainstreet',
  '/portfolio/institutional-scalper',
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

async function runPrerender() {
  const originalIndex = path.join(distDir, 'index.html');
  const templateIndex = path.join(distDir, '_template.html');
  fs.copyFileSync(originalIndex, templateIndex);

  console.log('Starting local server for prerendering...');
  
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: distDir,
      rewrites: [
        { source: '**', destination: '/_template.html' }
      ]
    });
  });

  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Server listening on port ${PORT}`);

  console.log('Launching Playwright Chrome...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  for (const route of routes) {
    const page = await context.newPage();
    console.log(`Prerendering route: ${route}`);
    
    // Intercept and skip external resources to speed up headless render
    await page.route('**/*', route => {
      const isExternalLink = !route.request().url().startsWith(`http://localhost:${PORT}`) && !route.request().url().startsWith('data:');
      const type = route.request().resourceType();
      if (isExternalLink && (type === 'image' || type === 'stylesheet' || type === 'font' || route.request().url().includes('google-analytics'))) {
        route.abort();
      } else {
        route.continue();
      }
    });

    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle' });
    
    // Wait an extra 1500ms for framer-motion or state effects to settle
    await page.waitForTimeout(1500);
    
    // Remove injected Vite/React script tags if desired, but actually we want hydration to work on client later, 
    // so we just grab the massive rendered DOM.
    let html = await page.content();

    // Validate the snapshot is not hollow (JS error or animation race)
    const bodyText = (await page.innerText('body')).trim();
    const isHamzaRoute = route.startsWith('/hamza');
    const minLength = isHamzaRoute ? 20 : 400; // Auth guard screen has very little text
    
    if (bodyText.length < minLength) {
      console.error(`\n⚠️  HOLLOW PAGE DETECTED: ${route}`);
      console.error(`   Body text length: ${bodyText.length} chars — expected ≥${minLength}.`);
      console.error('   Aborting prerender to prevent deploying empty pages.\n');
      await browser.close();
      server.close();
      process.exit(1);
    }
    
    const isIndex = route === '/';
    const filePath = isIndex 
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');
      
    const fileDir = path.dirname(filePath);
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`Saved ${filePath}`);
    await page.close();
  }

  await browser.close();
  server.close();
  
  // Clean up the template
  if (fs.existsSync(templateIndex)) {
    fs.unlinkSync(templateIndex);
  }
  
  console.log('Prerendering complete! Crawler HTML generated perfectly.');
}

runPrerender().catch(err => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
