// v1.0.0 | © 2026 Nathaniel Schroeder. All rights reserved.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const allowed = new Set([
  '.gitignore','README.md','VERSION.txt','LICENSE_NOTICE.md','SECURITY.md','CHANGELOG.md',
  'package.json','index.html','assets/style.css','assets/demo.js',
  'docs/ARCHITECTURE.md','docs/VALIDATION.md','docs/TECHNICAL_REVIEW.md',
  'docs/ROADMAP.md','docs/INFORMATION_BOUNDARY.md','docs/DEMO_GUIDE.md',
  'tests/showcase.test.cjs','tools/verify-public.cjs',
  '.github/workflows/check.yml'
]);
const errors = [];
function walk(folder) {
  for (const entry of fs.readdirSync(folder, { withFileTypes:true })) {
    if (entry.name === '.git') continue;
    const absolute = path.join(folder, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else {
      const relative = path.relative(root, absolute).split(path.sep).join('/');
      if (!allowed.has(relative)) errors.push('Unexpected file: ' + relative);
      if (!['.gitignore','package.json'].includes(relative) && !relative.includes('/')) {
        const t = fs.readFileSync(absolute, 'utf8');
        if (!t.includes('Nathaniel Schroeder')) errors.push('Owner notice missing: ' + relative);
      }
    }
  }
}
walk(root);
for (const required of allowed) {
  if (!fs.existsSync(path.join(root, required))) errors.push('Required file missing: ' + required);
}
const script = fs.readFileSync(path.join(root,'assets/demo.js'),'utf8');
if (/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon)\s*\(/.test(script)) errors.push('Demo appears to invoke a network API');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log('Public boundary verification passed. '+allowed.size+' allowlisted files.');
