import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const files = [
  ['index.html', 'text/html; charset=utf-8'],
  ['site-config.js', 'text/javascript; charset=utf-8'],
  ['assets/site.css', 'text/css; charset=utf-8'],
  ['assets/lucide.min.js', 'text/javascript; charset=utf-8'],
  ['assets/Logo zeuz calistenia.png', 'image/png'],
];
const assets = {};
for (const [path, type] of files) {
  const bytes = await readFile(`dist/${path}`);
  assets[`/${path}`] = { body: bytes.toString('base64'), type, etag: '"' + createHash('sha256').update(bytes).digest('hex') + '"' };
}
const handler = `export default {
  async fetch(request) {
    if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Método no permitido', {status: 405, headers: {Allow: 'GET, HEAD'}});
    let path;
    try { path = decodeURIComponent(new URL(request.url).pathname); } catch { return new Response('URL inválida', {status: 400}); }
    const asset = assets[path === '/' ? '/index.html' : path];
    if (!asset) return new Response('Página no encontrada', {status: 404, headers: {'Content-Type': 'text/plain; charset=utf-8'}});
    const headers = {'Content-Type': asset.type, 'Cache-Control': 'public, max-age=300', 'ETag': asset.etag, 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin'};
    if (request.headers.get('If-None-Match') === asset.etag) return new Response(null, {status: 304, headers});
    const body = request.method === 'HEAD' ? null : Uint8Array.from(atob(asset.body), char => char.charCodeAt(0));
    return new Response(body, {headers});
  }
};`;
await mkdir('.build', {recursive:true});
await writeFile('.build/worker.mjs', `const assets = ${JSON.stringify(assets)};\n${handler}\n`);
console.log('Worker generado para la publicación por API.');
