/* AvLü public investor arithmetic and privacy regressions v2.5.0.
 * © 2026 Nathaniel Schroeder. All rights reserved.
 */
const test=require('node:test');
const assert=require('node:assert/strict');
const {FIXTURES,SAAS_DEFAULTS,calculateAcquisition,calculateSaaS}=
  require('../assets/investor-experience.js');
test('public acquisition fixtures are explicitly fictional and cannot authorize buying',()=>{
  assert.equal(Object.keys(FIXTURES).length,3);
  for(const fixture of Object.values(FIXTURES)){
    assert.match(fixture.label,/Fictional/);
    const output=calculateAcquisition(fixture);
    assert.equal(output.purchaseApproved,false);
    assert.equal(output.actualProfitVerified,false);
    assert.equal(output.scenarioOnly,true);
    assert.match(output.caveat,/fictional/i);
  }
});
test('public math includes full illustrative costs and never invents a completed sale',()=>{
 const o=calculateAcquisition(FIXTURES.rake);
 assert.equal(o.allIn,1750);
 assert.equal(o.gross,450);
 assert.equal(o.roiPercent,25.71);
 assert.equal(o.mathOnlyMaxHammer,900);
 assert.equal(o.targetHeadroom,-50);
 assert.equal(o.evidenceStatus,'NOT VERIFIED');
});
test('invalid or zero inputs never create buy approval or infinite profit',()=>{
 const o=calculateAcquisition({hammer:-1,premium:Infinity,freight:'bad',recon:null,selling:0,resale:0,target:500});
 assert.equal(o.allIn,0);
 assert.equal(o.roiPercent,null);
 assert.equal(o.mathOnlyMaxHammer,null);
 assert.equal(o.purchaseApproved,false);
});
test('SaaS default scenario matches the investor plan and remains hypothetical',()=>{
 const o=calculateSaaS(SAAS_DEFAULTS);
 assert.equal(o.accounts,25);
 assert.equal(o.mrr,8975);
 assert.equal(o.arr,107700);
 assert.equal(o.directCosts,2430);
 assert.equal(o.gross,6545);
 assert.equal(o.grossMargin,72.92);
 assert.equal(o.operating,-2455);
 assert.equal(o.perAccountContribution,261.8);
 assert.equal(o.paybackMonths,5.73);
 assert.equal(o.ltvToCac,3.49);
 assert.equal(o.breakEvenAccounts,35);
 assert.equal(o.actualCustomersVerified,false);
 assert.equal(o.hypothesisOnly,true);
});
test('SaaS economic edge cases do not imply reliable returns',()=>{
 const empty=calculateSaaS({...SAAS_DEFAULTS,independent:0,teams:0,integrations:0});
 assert.equal(empty.mrr,0);
 assert.equal(empty.grossMargin,null);
 assert.equal(empty.breakEvenAccounts,null);
 const zeroChurn=calculateSaaS({...SAAS_DEFAULTS,churn:0});
 assert.equal(zeroChurn.ltvToCac,null);
 const negative=calculateSaaS({...SAAS_DEFAULTS,directPerAccount:100000});
 assert.equal(negative.breakEvenAccounts,null);
});
test('public demonstration avoids network and sale processing',()=>{
 const fs=require('node:fs');
 const path=require('node:path');
 const code=fs.readFileSync(path.join(__dirname,'../assets/investor-experience.js'),'utf8');
 assert.doesNotMatch(code,/\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage/);
 assert.doesNotMatch(code,/approvePurchase|placeBid|purchaseNow|stripe|paymentIntent/i);
 assert.match(code,/textContent/);
});
