/* AvLü™ investor demonstration v2.4.0.
 * Fictional case arithmetic and hypothetical SaaS scenarios, NOT the private engine.
 * © 2026 Nathaniel Schroeder. All rights reserved.
 */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (typeof document !== 'undefined') api.mount(document);
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const FIXTURES = Object.freeze({
    rake: Object.freeze({ label: 'Fictional root rake', hammer: 950, premium: 120, freight: 240,
      recon: 180, selling: 260, resale: 2200, target: 500 }),
    forks: Object.freeze({ label: 'Fictional fork attachment', hammer: 1100, premium: 140, freight: 220,
      recon: 85, selling: 230, resale: 2400, target: 500 }),
    snow: Object.freeze({ label: 'Fictional snow pusher', hammer: 1700, premium: 210, freight: 340,
      recon: 160, selling: 360, resale: 3150, target: 650 }),
  });
  const SAAS_DEFAULTS = Object.freeze({
    independent: 15, teams: 8, integrations: 2,
    priceIndependent: 199, priceTeams: 499, priceIntegrations: 999,
    directPerAccount: 97.2, overhead: 9000, cac: 1500, churn: 5
  });
  function amount(value, max = 100000000) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : 0;
  }
  function count(value) { return Math.floor(amount(value, 100000)); }
  function round2(n) { return Math.round((n + Number.EPSILON) * 100) / 100; }
  function calculateAcquisition(raw) {
    const p = {};
    for (const key of ['hammer','premium','freight','recon','selling','resale','target']) p[key] = amount(raw[key]);
    const additionalCost = p.premium + p.freight + p.recon + p.selling;
    const allIn = p.hammer + additionalCost;
    const gross = p.resale - allIn;
    const maxHammerRaw = p.resale - additionalCost - p.target;
    return Object.freeze({
      allIn: round2(allIn), gross: round2(gross), roiPercent: allIn > 0 ? round2(100 * gross / allIn) : null,
      mathOnlyMaxHammer: maxHammerRaw >= 0 ? round2(maxHammerRaw) : null,
      targetHeadroom: round2(maxHammerRaw - p.hammer),
      scenarioOnly: true, buyerPremiumBasis: 'assumed fixed dollar amount',
      purchaseApproved: false, actualProfitVerified: false,
      evidenceStatus: 'NOT VERIFIED',
      caveat: 'All numbers are fictional, entered assumptions. No lot matching, title, inspection, source rights, completed sale, or purchase approval.'
    });
  }
  function calculateSaaS(raw) {
    const n = { independent:count(raw.independent), teams:count(raw.teams), integrations:count(raw.integrations) };
    const price = { independent:amount(raw.priceIndependent), teams:amount(raw.priceTeams),
      integrations:amount(raw.priceIntegrations) };
    const accounts = n.independent + n.teams + n.integrations;
    const mrr = n.independent*price.independent + n.teams*price.teams + n.integrations*price.integrations;
    const directPerAccount = amount(raw.directPerAccount);
    const directCost = accounts * directPerAccount;
    const gross = mrr - directCost;
    const overhead = amount(raw.overhead);
    const op = gross - overhead;
    const contribution = accounts > 0 ? gross/accounts : null;
    const churn = Math.min(100, amount(raw.churn));
    const cac = amount(raw.cac);
    const ltv = contribution !== null && contribution > 0 && churn > 0
      ? contribution/(churn/100) : null;
    return Object.freeze({
      accounts, mrr:round2(mrr), arr:round2(mrr*12), directCosts:round2(directCost),
      gross:round2(gross), grossMargin:mrr>0 ? round2(100*gross/mrr) : null,
      operating:round2(op), perAccountContribution:contribution===null?null:round2(contribution),
      paybackMonths:contribution!==null && contribution>0 ? round2(cac/contribution) : null,
      ltvProxy:ltv===null?null:round2(ltv),
      ltvToCac:ltv!==null && cac>0 ? round2(ltv/cac) : null,
      breakEvenAccounts:contribution!==null && contribution>0 ? Math.ceil(overhead/contribution) : null,
      hypothesisOnly:true, actualCustomersVerified:false,
      caveat:'Hypothetical accounts, retention, prices and costs. Pilot fees and equipment resale proceeds are excluded.'
    });
  }
  const dollars = n => n === null ? 'Not supported' :
    new Intl.NumberFormat('en-US', { style:'currency',currency:'USD',maximumFractionDigits:0 }).format(n);
  const percent = n => n === null ? 'Not supported' : n.toFixed(1) + '%';
  const number = n => n === null ? 'Not supported' : n.toLocaleString('en-US');
  function mount(doc) {
    const acq = doc.getElementById('acquisition-demo');
    const saas = doc.getElementById('saas-demo');
    function value(id) { const el=doc.getElementById(id); return el ? el.value : 0; }
    function output(name, text) {
      const el=doc.querySelector('[data-result="' + name + '"]');
      if (el) el.textContent = text;
    }
    function paintAcquisition() {
      if (!acq) return;
      const inputs = {};
      for(const key of ['hammer','premium','freight','recon','selling','resale','target'])
        inputs[key]=value('acq-'+key);
      const o=calculateAcquisition(inputs);
      output('allIn',dollars(o.allIn)); output('gross',dollars(o.gross));
      output('roi',percent(o.roiPercent));
      output('maxHammer',o.mathOnlyMaxHammer===null?'No viable bid':dollars(o.mathOnlyMaxHammer));
      output('headroom',dollars(o.targetHeadroom));
      const verdict=doc.getElementById('acq-verdict');
      if (verdict) verdict.textContent='ILLUSTRATIVE ONLY | No acquisition approval';
    }
    if (acq) {
      acq.querySelectorAll('input[type="number"]').forEach(el=>el.addEventListener('input',paintAcquisition));
      acq.querySelectorAll('[data-fixture]').forEach(button=>{
        button.addEventListener('click',()=>{
          const fixture=FIXTURES[button.getAttribute('data-fixture')];
          if (!fixture) return;
          for(const key of ['hammer','premium','freight','recon','selling','resale','target']){
            const input=doc.getElementById('acq-'+key);
            if(input) input.value=String(fixture[key]);
          }
          acq.querySelectorAll('[data-fixture]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
          const label=doc.getElementById('acq-fixture-label');
          if(label) label.textContent=fixture.label + ' | synthetic inputs, not a captured listing';
          paintAcquisition();
        });
      });
      paintAcquisition();
    }
    function paintSaaS() {
      if(!saas) return;
      const input={};
      for(const key of Object.keys(SAAS_DEFAULTS)) input[key]=value('saas-'+key);
      const o=calculateSaaS(input);
      output('accounts',number(o.accounts)); output('mrr',dollars(o.mrr));
      output('arr',dollars(o.arr)); output('grossSaas',dollars(o.gross));
      output('margin',percent(o.grossMargin));
      output('operating',dollars(o.operating));
      output('payback',o.paybackMonths===null?'Not supported':o.paybackMonths.toFixed(1)+' months');
      output('ltv',o.ltvToCac===null?'Not supported':o.ltvToCac.toFixed(1)+'x (proxy)');
      output('breakEven',o.breakEvenAccounts===null?'Not supported':number(o.breakEvenAccounts));
      const bar=doc.getElementById('revenue-coverage');
      if (bar) {
        const percentOfOverhead = o.gross <= 0 ? 0 : (amount(input.overhead) === 0 ? 100 : 100*o.gross/amount(input.overhead));
        bar.style.width=String(Math.min(100,Math.max(0,percentOfOverhead)))+'%';
        bar.setAttribute('aria-valuenow',String(Math.round(Math.min(100,Math.max(0,percentOfOverhead)))));
      }
      const note=doc.getElementById('saas-outcome');
      if(note) note.textContent=o.operating < 0 ?
        'Hypothetical operating shortfall before financing, new acquisition spending and taxes.' :
        'Positive modeled contribution after fixed overhead is not verified profitability or cash collected.';
    }
    if (saas) {
      saas.querySelectorAll('input[type="number"]').forEach(el=>el.addEventListener('input',paintSaaS));
      const reset=doc.getElementById('saas-reset');
      if(reset) reset.addEventListener('click',()=>{
        for(const [key,val] of Object.entries(SAAS_DEFAULTS)){
          const el=doc.getElementById('saas-'+key);if(el)el.value=String(val);
        }
        paintSaaS();
      });
      paintSaaS();
    }
  }
  return Object.freeze({FIXTURES,SAAS_DEFAULTS,calculateAcquisition,calculateSaaS,mount});
});
