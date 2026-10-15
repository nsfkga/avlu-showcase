// Public-release boundary verifier v2.3.0.
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
  'docs/FAQ.md','docs/SERVICE_RND.md',
  'docs/AGRICULTURAL_EQUIPMENT.md',
  'docs/AUCTION_INTELLIGENCE.md',
  'docs/AG_AUCTION_CASE_STUDIES.md',
  'docs/AUCTION_DATA_AUTOMATION.md',
  'docs/AG_SERVICE_READINESS_RND.md',
  'docs/AG_AUCTION_COMPETITIVE_CONTEXT.md',
  'docs/PROJECT_ORIGINS_TIMELINE.md',
  'docs/INVESTOR_OVERVIEW.md',
  'docs/PRICING_REVENUE.md',
  'docs/FUNDING_PLAN.md',
  'docs/SAAS_UNIT_ECONOMICS.md',
  'docs/GO_TO_MARKET.md',
  'docs/INVESTOR_DILIGENCE.md',
  'docs/FACEBOOK_MARKETPLACE_STRATEGY.md'
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
if(pkg.version!=='2.3.0'||marker!=='2.3.0')errors.push('SemVer mismatch: showcase must be 2.3.0');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const js=fs.readFileSync(path.join(root,'assets/demo.js'),'utf8');
const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
if(!html.includes('getavlu.com'))errors.push('Link to working application missing');
if(!html.includes('v2.3.0'))errors.push('Visible site version outdated');
if(!html.includes('synthetic') && !html.includes('fictional'))errors.push('Synthetic demo not disclosed');
if(!readme.includes('v2.13.0')||!readme.includes('v2.14.0'))errors.push('Published versus source status omitted');
if(!readme.includes('48,000')||!readme.includes('30'))errors.push('Required bounded evidence omitted');
if(!readme.includes('79')||!readme.includes('auction')||!readme.includes('agricultural')) errors.push('Auction/agriculture product story absent');
if(!html.includes('id="auctions"')||!html.includes('id="equipment"')) errors.push('Agriculture and auctions not visible on homepage');
for(const p of ["docs/AGRICULTURAL_EQUIPMENT.md","docs/AUCTION_INTELLIGENCE.md","docs/AG_AUCTION_CASE_STUDIES.md","docs/AUCTION_DATA_AUTOMATION.md","docs/AG_SERVICE_READINESS_RND.md","docs/AG_AUCTION_COMPETITIVE_CONTEXT.md","docs/PROJECT_ORIGINS_TIMELINE.md"]) {
  if(!fs.readFileSync(path.join(root,p),'utf8').includes('Nathaniel Schroeder')) errors.push('Owner notice missing in research file: '+p);
}

const investorDocs = ["docs/INVESTOR_OVERVIEW.md","docs/PRICING_REVENUE.md","docs/FUNDING_PLAN.md","docs/SAAS_UNIT_ECONOMICS.md","docs/GO_TO_MARKET.md","docs/INVESTOR_DILIGENCE.md"];
for(const p of investorDocs){
  const s=fs.readFileSync(path.join(root,p),'utf8');
  if(s.length<1000 || !s.includes('Nathaniel Schroeder'))errors.push('Investor source incomplete or unattributed: '+p);
}
const econ=fs.readFileSync(path.join(root,'docs/SAAS_UNIT_ECONOMICS.md'),'utf8');
const funding=fs.readFileSync(path.join(root,'docs/FUNDING_PLAN.md'),'utf8');
if(!econ.includes('$8,975')||!econ.includes('$2,455')||!econ.includes('$9,000'))errors.push('Investor model assumptions not fully disclosed');
if(!funding.includes('$100,000')||!funding.includes('not'))errors.push('Funding scenario and caveat missing');
if(!html.includes('id="investors"')||!html.includes('PRICING HYPOTHESES')||!html.includes('$100,000'))errors.push('Investor business case missing from homepage');
if(!readme.includes('docs/INVESTOR_OVERVIEW.md')||!readme.includes('pricing hypotheses')&&!readme.includes('pricing hypotheses'.replace('p','P')))errors.push('Investor model not prominent in README');
if(!readme.includes('not existing subscriptions')||!readme.includes('not money already raised'))errors.push('Investment and revenue caveats missing');

const marketplace = fs.readFileSync(path.join(root, 'docs/FACEBOOK_MARKETPLACE_STRATEGY.md'), 'utf8');
if(!readme.includes('Facebook Marketplace') || !readme.includes('docs/FACEBOOK_MARKETPLACE_STRATEGY.md')) errors.push('README omits Marketplace business channel');
if(!html.includes('id="marketplace"') || !html.includes('Facebook Marketplace')) errors.push('Marketplace sourcing is missing from public homepage');
if(!marketplace.includes('vehicles and equipment') || !marketplace.includes('asking prices') || !marketplace.includes('Meta')) errors.push('Marketplace strategy lacks category/evidence/access rules');
if(marketplace.includes('live production Facebook API integration')) errors.push('Unsupported Marketplace API activation language');

if(/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon)\s*\(/.test(js))errors.push('Sample appears to make network calls');
if(/<script\b[^>]*src\s*=\s*["']https?:/i.test(html))errors.push('Remote script found');
if(/<form\b/i.test(html))errors.push('Public demo should not collect user data');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log('Public showcase v2.3.0 boundary passed. '+allowed.size+' explicit files, no external data calls.');
