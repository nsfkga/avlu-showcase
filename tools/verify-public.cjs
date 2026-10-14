// Public-release boundary verifier v2.0.0.
// © 2026 Nathaniel Schroeder. All rights reserved.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const allowed = new Set([
  '.gitignore', '.github/workflows/check.yml', 'README.md', 'VERSION.txt',
  'LICENSE_NOTICE.md','SECURITY.md','CHANGELOG.md','package.json','index.html',
  'assets/style.css','assets/demo.js','tests/showcase.test.cjs','tools/verify-public.cjs',
  'docs/ARCHITECTURE.md','docs/DEMO_GUIDE.md','docs/INFORMATION_BOUNDARY.md',
  'docs/ROADMAP.md','docs/TECHNICAL_REVIEW.md','docs/VALIDATION.md',
  'docs/START_HERE.md','docs/STATUS_SNAPSHOT.md','docs/PRODUCT_MODULES.md',
  'docs/MARKET_DATA.md','docs/AUTONOMY.md','docs/TESTING.md',
  'docs/CUSTOMER_DISCOVERY.md','docs/DIFFERENTIATION.md',
  'docs/COMMERCIALIZATION.md','docs/PILOT_PLAN.md','docs/MENTOR_REVIEW.md',
  'docs/FAQ.md','docs/SERVICE_RND.md'
]);
const errors=[];
const checkText=new Set([...allowed].filter(p=>!p.endsWith('.json')&&!p.endsWith('.css')&&!p.endsWith('index.html')&&!p.endsWith('.gitignore')&&!p.endsWith('.yml')));
function walk(folder) {
  for (const entry of fs.readdirSync(folder,{withFileTypes:true})) {
    if (entry.name === '.git') continue;
    const abs=path.join(folder,entry.name);
    if (entry.isDirectory()) walk(abs);
    else {
      const relative=path.relative(root,abs).split(path.sep).join('/');
      if (!allowed.has(relative)) { errors.push('Unexpected file: '+relative);continue; }
      const source=fs.readFileSync(abs,'utf8');
      if (source.includes(String.fromCharCode(0x2014))) errors.push('Prohibited punctuation found: '+relative);
      if (checkText.has(relative) && !source.includes('Nathaniel Schroeder')) errors.push('Attribution missing: '+relative);
    }
  }
}
walk(root);
for (const p of allowed) if(!fs.existsSync(path.join(root,p)))errors.push('Required file missing: '+p);
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const marker=fs.readFileSync(path.join(root,'VERSION.txt'),'utf8').trim().split(/\s+/)[0];
if(pkg.version!=='2.0.0'||marker!=='2.0.0')errors.push('SemVer mismatch: showcase must be 2.0.0');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const js=fs.readFileSync(path.join(root,'assets/demo.js'),'utf8');
const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
if(!html.includes('getavlu.com'))errors.push('Link to working application missing');
if(!html.includes('v2.0.0'))errors.push('Visible site version outdated');
if(!html.includes('synthetic') && !html.includes('fictional'))errors.push('Synthetic demo not disclosed');
if(!readme.includes('v2.13.0')||!readme.includes('v2.14.0'))errors.push('Published versus source status omitted');
if(!readme.includes('48,000')||!readme.includes('30'))errors.push('Required bounded evidence omitted');
if(/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon)\s*\(/.test(js))errors.push('Sample appears to make network calls');
if(/<script\b[^>]*src\s*=\s*["']https?:/i.test(html))errors.push('Remote script found');
if(/<form\b/i.test(html))errors.push('Public demo should not collect user data');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log('Public showcase v2.0.0 boundary passed. '+allowed.size+' explicit files, no external data calls.');
