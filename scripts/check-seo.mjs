import { readFile, writeFile, stat } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const routes = JSON.parse(await readFile('dist/routes.json', 'utf8'));
const paths = new Set(routes.map((x) => x.path));
const titles = new Set();
const descriptions = new Set();
let links = 0;
for (const route of routes) {
  const html = await readFile(
    `dist/${route.path === '/' ? 'index' : route.path.slice(1)}.html`,
    'utf8'
  );
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Exactly one h1: ${route.path}`);
  assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, `Exactly one main: ${route.path}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  assert(title && description, `Metadata: ${route.path}`);
  assert(!titles.has(title), `Unique title: ${route.path}`);
  assert(!descriptions.has(description), `Unique description: ${route.path}`);
  titles.add(title);
  descriptions.add(description);
  assert(
    html.includes(`rel="canonical" href="https://sliva.id${route.path}"`),
    `Canonical: ${route.path}`
  );
  assert(html.includes('<html lang="id">'));
  assert(!html.includes('noindex'));
  assert(html.includes('og:image'));
  assert(!html.includes('<!--app-html-->'));
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
    const schema = JSON.parse(json);
    assert(schema['@graph'].length >= 3);
    assert(schema['@graph'].some((x) => x['@type'] === 'Organization'));
  }
  for (const [, href] of html.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g))
    if (href.startsWith('/') && !href.startsWith('//')) {
      const clean = href.split(/[?#]/)[0];
      if (clean.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(clean))
        await stat(resolve('dist', '.' + clean));
      else assert(paths.has(clean), `Internal link ${route.path} -> ${clean}`);
      links++;
    }
  for (const [, href] of html.matchAll(/href="(https:\/\/wa\.me\/[^"?]+)/g))
    assert.equal(href, 'https://wa.me/6282391239651');
  assert(!html.includes('support@sliva.id'));
  assert(!html.includes('6281977388341'));
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
assert(
  (await readFile('dist/robots.txt', 'utf8')).includes('Sitemap: https://sliva.id/sitemap.xml')
);
assert((await readFile('dist/404.html', 'utf8')).includes('noindex, follow'));
const keywords = JSON.parse(await readFile('seo/sliva-5000-keywords.json', 'utf8'));
assert.equal(keywords.length, 5000);
assert.equal(new Set(keywords.map((x) => x.keyword)).size, 5000);
for (const x of keywords) {
  assert(paths.has(new URL(x.target_url).pathname));
  assert.equal(x.search_volume, null);
}
const home = await readFile('dist/index.html', 'utf8');
const bundle = home.match(/src="(\/assets\/[^" ]+\.js)"/)?.[1];
const bytes = gzipSync(await readFile('dist' + bundle)).length;
assert(bytes < 135000, `Client gzip budget 135kB, actual ${bytes}`);
const report = {
  status: 'passed',
  pages: routes.length,
  metadata: 'unique per page',
  internalLinksChecked: links,
  structuredData: 'valid JSON-LD',
  keywords: keywords.length,
  uniqueKeywords: 5000,
  keywordTargetPages: 'all valid',
  clientJavaScriptGzipBytes: bytes,
  notes: 'Static checks, not confirmation of Google indexing or ranking.',
};
await writeFile('qa/seo-report.json', JSON.stringify(report, null, 2) + '\n');
console.log(report);
