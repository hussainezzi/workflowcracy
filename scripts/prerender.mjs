/**
 * Writes a real HTML file for every route.
 *
 * Without this the site is a single empty <div id="root"> and every page but
 * the home page is invisible to search engines and link previews. Runs after
 * `vite build` (client) and `vite build --ssr` (server bundle).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const serverEntry = join(root, 'dist-ssr', 'entry-server.js');

const SITE_ORIGIN = 'https://aiwithezzi.com';

const { render, ROUTES, META } = await import(pathToFileURL(serverEntry).href);

const template = readFileSync(join(distDir, 'index.html'), 'utf8');

/** Swaps the value of a meta/title tag in the built template. */
function applyMeta(html, route) {
  const meta = META[route];
  if (!meta) return html;

  const canonical = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`;

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /(<meta name="description" content=")[\s\S]*?(")/,
      `$1${meta.description}$2`
    )
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
    .replace(
      /(<meta property="og:title" content=")[\s\S]*?(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta property="og:description" content=")[\s\S]*?(")/,
      `$1${meta.description}$2`
    )
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`);
}

const written = [];

for (const route of ROUTES) {
  const markup = render(route);
  const html = applyMeta(template, route).replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`
  );

  const outPath =
    route === '/' ? join(distDir, 'index.html') : join(distDir, route, 'index.html');

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  written.push(route);
}

// A 404 that still renders the site chrome, for hosts that serve 404.html.
writeFileSync(
  join(distDir, '404.html'),
  applyMeta(template, '/').replace(
    '<div id="root"></div>',
    `<div id="root">${render('/not-found')}</div>`
  )
);

// Search engines need to be told what exists.
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (route) =>
    `  <url>\n    <loc>${route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
).join('\n')}
</urlset>
`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemap);

writeFileSync(
  join(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`
);

console.log(`Pre-rendered ${written.length} routes: ${written.join(', ')}`);
console.log('Wrote 404.html, sitemap.xml, robots.txt');
