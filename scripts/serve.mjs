import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
const root = resolve('dist');
const port = Number(process.env.PORT || 4173);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
};
createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (path === '/' ? '/index.html' : path));
    if (!file.startsWith(root + sep)) {
      res.writeHead(403);
      return res.end();
    }
    let chosen = file;
    let code = 200;
    try {
      if (!(await stat(chosen)).isFile()) throw new Error();
    } catch {
      try {
        chosen = file + '.html';
        await stat(chosen);
      } catch {
        chosen = resolve(root, '404.html');
        code = 404;
      }
    }
    const data = await readFile(chosen);
    const compressed =
      /gzip/.test(req.headers['accept-encoding'] || '') &&
      /\.(html|css|js|json|xml|txt|webmanifest)$/.test(chosen);
    res.writeHead(code, {
      'Content-Type': mime[extname(chosen)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
      Vary: 'Accept-Encoding',
      ...(compressed ? { 'Content-Encoding': 'gzip' } : {}),
    });
    res.end(compressed ? gzipSync(data) : data);
  } catch {
    res.writeHead(400);
    res.end('Bad request');
  }
}).listen(port, '127.0.0.1', () =>
  console.log(`Sliva production preview: http://127.0.0.1:${port}`)
);
