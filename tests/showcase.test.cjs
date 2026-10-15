// v2.4.0 | © 2026 Nathaniel Schroeder. All rights reserved.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {cases}=require('../assets/demo.js');
test('three fixed fictional examples',()=> {
  assert.equal(cases.length,3);
  assert.ok(cases.every(record=>record.id.startsWith('synthetic-')));
});
test('no sample grants purchase authority',()=> {
  assert.ok(cases.every(record=>['HOLD','INVESTIGATE','REJECT'].includes(record.status)));
});
test('every sample exposes missing evidence',()=> {
  assert.ok(cases.every(record=>Array.isArray(record.missing)&&record.missing.length>=3));
});
test('gross potential is explicitly unverified',()=> {
  assert.ok(cases.every(record=>/not verified|pending evidence|not supported/i.test(record.gross)));
});
test('public-facing README points to real app and separates versions',()=> {
  const readme=fs.readFileSync(path.resolve(__dirname,'../README.md'),'utf8');
  assert.ok(readme.includes('https://getavlu.com'));
  assert.ok(readme.includes('v2.13.0')&&readme.includes('v2.14.0'));
});
test('proof figures are identified as synthetic or historical, not real profit',()=> {
  const readme=fs.readFileSync(path.resolve(__dirname,'../README.md'),'utf8');
  assert.match(readme,/48,000/);
  assert.match(readme,/synthetic/i);
  assert.match(readme,/realized/i);
  assert.match(readme,/OFF|disabled/i);
});

test('agrarian equipment and auction intelligence have dedicated public research',()=> {
 const root=path.resolve(__dirname,'..');
 const req=['docs/AGRICULTURAL_EQUIPMENT.md','docs/AUCTION_INTELLIGENCE.md',
 'docs/AG_AUCTION_CASE_STUDIES.md','docs/AUCTION_DATA_AUTOMATION.md',
 'docs/AG_SERVICE_READINESS_RND.md','docs/AG_AUCTION_COMPETITIVE_CONTEXT.md',
 'docs/PROJECT_ORIGINS_TIMELINE.md'];
 for(const p of req){
   const doc=fs.readFileSync(path.join(root,p),'utf8');
   assert.ok(doc.length>800,p+' is too short');
   assert.ok(doc.includes('Nathaniel Schroeder'),p+' lacks credit');
 }
});
test('original equipment evidence and actual sales are not conflated',()=> {
 const p=fs.readFileSync(path.resolve(__dirname,'../docs/AG_AUCTION_CASE_STUDIES.md'),'utf8');
 assert.match(p,/79 units/);
 assert.match(p,/not.*realized profit|cannot be called realized profit|cannot be called.*profit/i);
});
test('current agricultural auction scope and public version are visible',()=> {
 const p=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8');
 assert.match(p,/id="auctions"/);
 assert.match(p,/id="equipment"/);
 assert.match(p,/v2\.4\.0/);
});

test('investor model separates hypothetical recurring revenue from actual traction',()=> {
 const root=path.resolve(__dirname,'..');
 const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
 const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const diligence=fs.readFileSync(path.join(root,'docs/INVESTOR_DILIGENCE.md'),'utf8');
 assert.match(home,/id="investors"/);
 assert.match(home,/PRICING HYPOTHESES/);
 assert.match(readme,/not existing subscriptions/);
 assert.match(readme,/not money already raised/);
 assert.match(diligence,/pricing has not been validated|not.*priced|not established/i);
});
test('proposed 25-account revenue and operating loss reconcile exactly',()=> {
 const mrr=15*199+8*499+2*999;
 const directCosts=2430, fixedCosts=9000;
 const gross=mrr-directCosts, operating=gross-fixedCosts;
 assert.equal(mrr,8975);
 assert.equal(mrr*12,107700);
 assert.equal(gross,6545);
 assert.equal(operating,-2455);
 assert.equal(Math.round(1000*gross/mrr)/10,729/10);
 const perAccount=gross/25;
 assert.equal(perAccount,261.8);
 assert.ok(34*perAccount<fixedCosts&&35*perAccount>=fixedCosts);
 const funds=[40000,20000,15000,10000,10000,5000];
 assert.equal(funds.reduce((a,b)=>a+b,0),100000);
});
test('new investor docs identify planned prices and exclude revenue claims',()=> {
 const root=path.resolve(__dirname,'..');
 const docs=['INVESTOR_OVERVIEW','PRICING_REVENUE','FUNDING_PLAN','SAAS_UNIT_ECONOMICS','GO_TO_MARKET','INVESTOR_DILIGENCE'];
 for(const doc of docs){
   const body=fs.readFileSync(path.join(root,'docs/'+doc+'.md'),'utf8');
   assert.ok(body.length>1000,doc+' should be substantial');
   assert.ok(body.includes('Nathaniel Schroeder'),doc+' retains ownership');
 }
 const pricing=fs.readFileSync(path.join(root,'docs/PRICING_REVENUE.md'),'utf8');
 assert.ok(pricing.includes('$199/month')&&pricing.includes('$499/month'));
 assert.match(pricing,/not publicly purchasable|not.*contracts/i);
 const funds=fs.readFileSync(path.join(root,'docs/FUNDING_PLAN.md'),'utf8');
 assert.ok(funds.includes('$100,000')&&funds.includes('not'));
});

test('Facebook Marketplace is explained for both vehicle and equipment research', () => {
 const root=path.resolve(__dirname, '..');
 const readme=fs.readFileSync(path.join(root, 'README.md'), 'utf8');
 const home=fs.readFileSync(path.join(root, 'index.html'), 'utf8');
 const strategy=fs.readFileSync(path.join(root, 'docs/FACEBOOK_MARKETPLACE_STRATEGY.md'), 'utf8');
 assert.ok(readme.includes('Facebook Marketplace'));
 assert.ok(readme.includes('docs/FACEBOOK_MARKETPLACE_STRATEGY.md'));
 assert.ok(home.includes('id="marketplace"'));
 assert.ok(strategy.includes('vehicles and equipment'));
 assert.ok(strategy.includes('Nathaniel Schroeder'));
});
test('marketplace source is not mislabeled as an automated feed or verified sold-profit', () => {
 const root=path.resolve(__dirname, '..');
 const doc=fs.readFileSync(path.join(root, 'docs/FACEBOOK_MARKETPLACE_STRATEGY.md'), 'utf8');
 const home=fs.readFileSync(path.join(root, 'index.html'), 'utf8');
 assert.match(doc, /no.*?(?:automated|live)|not.*?live|Not established as live capabilities/is);
 assert.match(doc, /asking prices.*not|asking price.*not/i);
 assert.match(doc, /scraping|data rights|permission/i);
 assert.match(home, /does <strong>not<\/strong> currently claim a live Meta-approved API feed/);
 assert.match(home, /v2\.4\.0/);
});

test('v2.4 investor site provides five focused review sections and competitor reality',()=>{
  const root=path.resolve(__dirname,'..');
  const html=fs.readFileSync(path.join(root,'investors.html'),'utf8');
  const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
  for(const id of ['tour','difference','acquisition','business-model','traction'])
    assert.ok(html.includes('id="'+id+'"'),id+' is missing');
  assert.match(home,/href="investors.html"/);
  assert.match(html,/Facebook Marketplace/);
  assert.match(html,/No acquisition approval/);
  assert.match(html,/NO VERIFIED PAID ARR/);
  assert.match(html,/Tractor Zoom Pro/);
});
test('ten printable slides distinguish historical proof from plans',()=>{
  const html=fs.readFileSync(path.resolve(__dirname,'../pitch.html'),'utf8');
  assert.equal((html.match(/class="pitch-slide/g)||[]).length,10);
  assert.match(html,/Print \/ Save as PDF/);
  assert.match(html,/−\$2,455/);
  assert.match(html,/48,000/);
  assert.match(html,/No autonomous transactions/);
});
test('investor materials provide sources and preserve the Facebook Marketplace position',()=>{
 const root=path.resolve(__dirname,'..');
 const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
 for(const p of ['INVESTOR_3_MINUTE_TOUR','COMPETITIVE_MATRIX','TRACTION_SCORECARD','CUSTOMER_ROI_TEST','PITCH_DECK_GUIDE'])
  assert.ok(fs.readFileSync(path.join(root,'docs/'+p+'.md'),'utf8').includes('Nathaniel Schroeder'));
 assert.match(readme,/Facebook Marketplace/);
 assert.match(readme,/investors\.html/);
 assert.match(readme,/pitch\.html/);
 const scorecard=fs.readFileSync(path.join(root,'docs/TRACTION_SCORECARD.md'),'utf8');
 assert.match(scorecard,/Not independently verified/);
 assert.match(scorecard,/realized resale|actual resale|resale/i);
});
