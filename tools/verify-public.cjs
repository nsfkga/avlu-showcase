// Public-release boundary verifier v2.6.0.
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
  'docs/FACEBOOK_MARKETPLACE_STRATEGY.md',
  'docs/AUCTION_MARKET_ENGINE.md',
  'investors.html','pitch.html',
  'assets/investor.css','assets/investor-experience.js','assets/pitch.css','assets/pitch.js',
  'tests/investor-experience.test.cjs',
  'docs/INVESTOR_3_MINUTE_TOUR.md','docs/COMPETITIVE_MATRIX.md',
  'docs/TRACTION_SCORECARD.md','docs/CUSTOMER_ROI_TEST.md','docs/PITCH_DECK_GUIDE.md',
  '.nojekyll','docs/GITHUB_PAGES_PUBLISHING.md','tools/verify-pages-readiness.cjs'
]);
const errors=[];
const checkText=new Set([...allowed].filter(p=>!p.endsWith('.json')&&!p.endsWith('.css')&&!p.endsWith('index.html')&&!p.endsWith('.gitignore')&&!p.endsWith('.yml')&&!p.startsWith('.')));
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
if(pkg.version!=='2.6.0'||marker!=='2.6.0')errors.push('SemVer mismatch: showcase must be 2.6.0');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const js=fs.readFileSync(path.join(root,'assets/demo.js'),'utf8');
const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
if(!html.includes('getavlu.com'))errors.push('Link to working application missing');
if(!html.includes('v2.6.0'))errors.push('Visible site version outdated');
if(!html.includes('synthetic') && !html.includes('fictional'))errors.push('Synthetic demo not disclosed');
if(!readme.includes('v2.18.6')||!readme.includes('v2.19.0'))errors.push('Current published versus candidate status omitted');
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


const investorHTML=fs.readFileSync(path.join(root,'investors.html'),'utf8');
const pitchHTML=fs.readFileSync(path.join(root,'pitch.html'),'utf8');
const experience=fs.readFileSync(path.join(root,'assets/investor-experience.js'),'utf8');
const pitchScript=fs.readFileSync(path.join(root,'assets/pitch.js'),'utf8');
for(const [name,body] of [['investors.html',investorHTML],['pitch.html',pitchHTML]]){
  if(!body.includes('v2.6.0')||!body.includes('Nathaniel Schroeder'))errors.push(name+' missing current version or owner');
  if(/<form\b/i.test(body)||/<script\b[^>]*src\s*=\s*["']https?:/i.test(body))errors.push(name+' includes form or remote script');
  if(/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon)\s*\(/.test(body))errors.push(name+' appears to make network requests');
}
for(const [name,script] of [['investor-experience.js',experience],['pitch.js',pitchScript]]){
  if(/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage)\s*\(/.test(script))errors.push(name+' uses forbidden network or storage');
}
for(const id of ['tour','difference','acquisition','business-model','traction']){
  if(!investorHTML.includes('id="'+id+'"'))errors.push('Investor tour missing '+id);
}
// Product, AI and competitor framing must be the FIRST thing an investor reads.
const introOrder=['## What AvLü is','## Why AvLü is more than a normal AI answer',
  '## How AvLü differs from existing competitors','## GitHub Pages publishing']
  .map(label=>readme.indexOf(label));
if(introOrder.some(i=>i<0)||introOrder.some((x,i)=>i>0&&x<=introOrder[i-1]))
  errors.push('README does not immediately explain product, AI distinction and competitor distinction');
const investorPos=investorHTML.indexOf('id="difference"');
const investorTourPos=investorHTML.indexOf('id="tour"');
if(investorPos<0||investorTourPos<=investorPos||investorHTML.indexOf('class="investor-band"')<investorPos)
  errors.push('Investor experience does not open with competitive differentiation');
const labels=[...pitchHTML.matchAll(/<div class="slide-label">([^<]+)<\/div>/g)].map(m=>m[1]);
if(labels.length!==10||!/^02 \/ WHY IT IS NOT JUST AI/.test(labels[1])||!/^03 \/ COMPETITION/.test(labels[2]))
  errors.push('Pitch does not put AI and competitor contrasts on slides two and three');
if(!html.includes('class="hero-differences"')||!html.includes('Tractor Zoom')||!html.includes('EquipmentWatch'))
  errors.push('Homepage lacks prominent two-part contrast');

if(!investorHTML.includes('PRICING')&&!investorHTML.includes('hypothetical'))errors.push('Investor risk caveat missing');
if((pitchHTML.match(/class="pitch-slide/g)||[]).length!==10)errors.push('Pitch should have ten slide sections');
if(!pitchHTML.includes('Print / Save as PDF'))errors.push('Pitch export instructions missing');
if(!readme.includes('investors.html')||!readme.includes('pitch.html'))errors.push('Investor links missing in README');
for(const p of ['docs/INVESTOR_3_MINUTE_TOUR.md','docs/COMPETITIVE_MATRIX.md','docs/TRACTION_SCORECARD.md','docs/CUSTOMER_ROI_TEST.md','docs/PITCH_DECK_GUIDE.md']){
  const c=fs.readFileSync(path.join(root,p),'utf8');
  if(c.length<1000||!c.includes('Nathaniel Schroeder'))errors.push(p+' incomplete or missing author credit');
}

// New public tracker evidence and investment narrative must be clear without disclosing internals.
const engineDoc=fs.readFileSync(path.join(root,'docs/AUCTION_MARKET_ENGINE.md'),'utf8');
const difference=fs.readFileSync(path.join(root,'docs/DIFFERENTIATION.md'),'utf8');
const status=fs.readFileSync(path.join(root,'docs/STATUS_SNAPSHOT.md'),'utf8');
if(!engineDoc.includes('Nathaniel Schroeder')||!engineDoc.includes('v2.18.6')||!engineDoc.includes('v2.19.0')||!engineDoc.includes('partial'))
  errors.push('Missing dated built-engine proof, separate release states or owner credit');
if(!readme.includes('published Auction Market Tracker')&&!readme.includes('published Auction Market Tracker'.replace('p','P')))
  errors.push('README fails to lead with the published engine');
if(!html.includes('getavlu.com/#market-engine')||!html.includes('v2.18.6')||!html.includes('v2.19.0'))
  errors.push('Homepage omits published live tracker or development split');
if(!html.includes('id="auctions"')||!html.includes('source-tested'))
  errors.push('Homepage auction section omits tested acquisition logic');
if(!difference.includes('v2.18.6')||!difference.includes('Tractor Zoom')||!difference.includes('EquipmentWatch'))
  errors.push('Differentiation does not compare built engine with substantial competitors');
if(!status.includes('v2.18.6')||!status.includes('v2.19.0'))
  errors.push('Status snapshot omits current published versus candidate release');
if(/I claim|I do not claim/i.test(readme.slice(0,7000)+difference.slice(0,4300)))
  errors.push('Opening differentiation uses defensive or unsupported ownership phrasing');

if(/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon)\s*\(/.test(js))errors.push('Sample appears to make network calls');
if(/<script\b[^>]*src\s*=\s*["']https?:/i.test(html))errors.push('Remote script found');
if(/<form\b/i.test(html))errors.push('Public demo should not collect user data');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log('Public showcase v2.6.0 boundary passed. '+allowed.size+' explicit files, no external data calls.');
