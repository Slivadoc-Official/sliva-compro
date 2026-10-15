import { createServer } from 'vite';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  );
try {
  const { render, routes, notFoundRoute } = await server.ssrLoadModule('/src/entry-server.tsx');
  const template = await readFile('dist/index.html', 'utf8');
  const fonts = (await readdir('dist/assets')).filter((x) => x.endsWith('.woff2'));
  if (fonts.length !== 1) throw new Error(`Expected one local font, got ${fonts.length}`);
  for (const route of [...routes, notFoundRoute]) {
    const { html, canonical, structuredData } = render(route.path);
    const head = [
      `<title>${escape(route.title)}</title>`,
      `<meta name="description" content="${escape(route.description)}" />`,
      `<meta name="robots" content="${route.type === '404' ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
      ...(route.type === '404' ? [] : [`<link rel="canonical" href="${escape(canonical)}" />`]),
      `<meta property="og:locale" content="id_ID" />`,
      `<meta property="og:site_name" content="Sliva" />`,
      `<meta property="og:type" content="${route.type === 'article' ? 'article' : 'website'}" />`,
      `<meta property="og:title" content="${escape(route.title)}" />`,
      `<meta property="og:description" content="${escape(route.description)}" />`,
      `<meta property="og:url" content="${escape(canonical)}" />`,
      `<meta property="og:image" content="https://sliva.id/og-sliva.png" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="Sliva — Ide besar. Jadi nyata. Partner teknologi Indonesia." />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${escape(route.title)}" />`,
      `<meta name="twitter:description" content="${escape(route.description)}" />`,
      `<meta name="twitter:image" content="https://sliva.id/og-sliva.png" />`,
      `<link rel="preload" href="/assets/${fonts[0]}" as="font" type="font/woff2" crossorigin />`,
      `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
    ].join('\n    ');
    const output = template
      .replace(/<!--seo-head-->[\s\S]*?<!--\/seo-head-->/, head)
      .replace('<!--app-html-->', () => html);
    const file = resolve(
      'dist',
      route.path === '/'
        ? 'index.html'
        : route.type === '404'
          ? '404.html'
          : `${route.path.slice(1)}.html`
    );
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, output);
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((x) => `  <url><loc>https://sliva.id${x.path}</loc></url>`).join('\n')}\n</urlset>\n`;
  await writeFile('dist/sitemap.xml', xml);
  await writeFile(
    'dist/robots.txt',
    'User-agent: *\nAllow: /\n\nSitemap: https://sliva.id/sitemap.xml\n'
  );
  await writeFile(
    'dist/routes.json',
    JSON.stringify(
      routes.map((x) => ({ path: x.path, title: x.title })),
      null,
      2
    )
  );
  console.log(
    `Prerendered ${routes.length} indexable pages + a real 404. Sitemap and robots ready.`
  );
} finally {
  await server.close();
}
