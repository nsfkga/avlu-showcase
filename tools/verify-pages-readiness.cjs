/* AvLü Pages static-readiness verification v2.5.0.
 * Owner: Nathaniel Schroeder. © 2026 Nathaniel Schroeder. All rights reserved.
 * Offline only. Does not deploy, fetch, use accounts, or place offers.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const pages = ['index.html', 'investors.html', 'pitch.html'];
const base = 'https://github.com/nsfkga/avlu-showcase/blob/main/docs/';
const exists = p => fs.existsSync(path.join(root,p));
const errors = [];
let tested = 0;
for (const page of pages) {
  if (!exists(page)) { errors.push('Missing entry: '+page); continue; }
  const html = fs.readFileSync(path.join(root,page), 'utf8');
  if (!html.includes('Nathaniel Schroeder')) errors.push(page+' missing owner credit');
  if (!html.includes('v2.5.0')) errors.push(page+' missing version');
  if (/<form\b/i.test(html)) errors.push(page+' includes a form');
  if (/<script\b[^>]*src\s*=\s*["']https?:/i.test(html)) errors.push(page+' includes remote script');
  const refs = [...html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g)].map(m=>m[1]);
  for (const ref of refs) {
    tested++;
    if (ref.startsWith('#')) {
      if (!html.includes('id="'+ref.slice(1)+'"')) errors.push(page+' missing anchor '+ref);
      continue;
    }
    if (ref.startsWith(base)) {
      const md = ref.slice(base.length).split(/[?#]/)[0];
      if (!md.endsWith('.md') || !exists('docs/'+md)) errors.push(page+' missing linked Markdown '+ref);
      continue;
    }
    if (/^https:\/\//.test(ref) || /^mailto:/i.test(ref)) continue;
    if (ref.startsWith('/') || /^http:\/\//.test(ref)) {
      errors.push(page+' invalid root-relative or insecure link '+ref); continue;
    }
    const target = ref.split(/[?#]/)[0];
    if (target.endsWith('.md')) errors.push(page+' raw Markdown site link '+ref);
    if (!exists(target)) errors.push(page+' missing local asset '+ref);
  }
}
for (const file of ['assets/style.css','assets/demo.js','assets/investor.css',
 'assets/investor-experience.js','assets/pitch.css','assets/pitch.js','.nojekyll']) {
  if (!exists(file)) errors.push('Missing static asset '+file);
}
const version = JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version;
const marker = fs.readFileSync(path.join(root,'VERSION.txt'),'utf8').trim().split(/\s+/)[0];
if (version !== '2.5.0' || marker !== '2.5.0') errors.push('Version mismatch');
const guide = fs.readFileSync(path.join(root,'docs/GITHUB_PAGES_PUBLISHING.md'),'utf8');
if (!guide.includes('Prepared source is not a verified deployment') || !guide.includes('main') || !guide.includes('/(root)')) errors.push('Pages deployment gate absent');
if (tested < 40) errors.push('Unexpectedly few checked site links');
if (errors.length) {
  for (const e of errors) console.error('FAIL: '+e);
  process.exit(1);
}
console.log('PASS: Pages readiness for '+pages.length+' HTML entries, '+tested+' checked links, 6 assets, and no hosted-site claim.');
