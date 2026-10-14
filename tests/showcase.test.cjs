// v2.0.0 | © 2026 Nathaniel Schroeder. All rights reserved.
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
