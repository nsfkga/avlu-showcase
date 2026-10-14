// v2.1.0 | © 2026 Nathaniel Schroeder. All rights reserved.
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
 assert.match(p,/v2\.1\.0/);
});
