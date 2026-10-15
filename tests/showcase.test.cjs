// v2.2.0 | © 2026 Nathaniel Schroeder. All rights reserved.
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
 assert.match(p,/v2\.2\.0/);
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
