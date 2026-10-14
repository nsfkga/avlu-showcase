// v1.0.0 | © 2026 Nathaniel Schroeder. All rights reserved.
const test = require('node:test');
const assert = require('node:assert/strict');
const { cases } = require('../assets/demo.js');
test('exactly three fictional examples', () => {
  assert.equal(cases.length, 3);
  assert.ok(cases.every(record => record.id.startsWith('synthetic-')));
});
test('no fictional case grants purchase authority', () => {
  assert.ok(cases.every(record => ['HOLD','INVESTIGATE','REJECT'].includes(record.status)));
});
test('missing evidence is shown for every sample', () => {
  assert.ok(cases.every(record => Array.isArray(record.missing) && record.missing.length > 0));
});
test('illustrative economics do not claim verified gross profit', () => {
  assert.ok(cases.every(record => /not verified|pending evidence|not supported/i.test(record.gross)));
});
