# AvLü™ | SaaS unit economics, clearly marked as assumptions

**Planning model v1.0.0 | October 15, 2026**  
**Owner: Nathaniel Schroeder**

There are **no measured AvLü subscription unit economics** yet. All inputs here are editable business-case hypotheses, not historical revenue, incurred cost, customer churn, pricing acceptance or investor return.

## Fixed scenario assumptions

| Input | Assumption | Status |
| --- | ---: | --- |
| Independent price | $199/month | Proposed |
| Dealer Team price | $499/month | Proposed |
| Dealer Integration price | $999/month starting point | Proposed |
| Customer mix | 60% / 32% / 8% | Hypothetical |
| Direct service cost at 25 accounts | $2,430/month | Modeled, no actual vendor quote |
| Monthly fixed expenses | $9,000 | Modeled, excludes added acquisition spending and tax |
| Fully loaded customer acquisition cost (CAC) | $1,500 | Hypothetical including founder sales work |
| Monthly account churn | 5% | Sensitivity assumption, not measured |
| Paid pilot fee | $1,000 midpoint | One-time, excluded from ARR |

The 25-account example therefore has monthly revenue of:
**15 × $199 + 8 × $499 + 2 × $999 = $8,975.**

## Core revenue and margin example

| Measure at 25 accounts | Math | Result |
| --- | --- | ---: |
| Monthly recurring revenue | $2,985 + $3,992 + $1,998 | **$8,975** |
| Annualized recurring revenue | $8,975 × 12 | **$107,700** |
| Direct service costs | Budget assumption | **$2,430/month** |
| Monthly gross profit | $8,975 − $2,430 | **$6,545** |
| Gross margin | $6,545 ÷ $8,975 | **72.9%** |
| Monthly operating result | $6,545 − $9,000 | **−$2,455** |

**The 25-account scenario is not profitable under these assumptions.** It excludes incremental paid acquisition campaigns, taxes, financing and other expenses not included in the $9,000 fixed base.

## Per-account and acquisition math

- Blended revenue per account = $8,975 ÷ 25 = **$359/month**.
- Blended direct delivery cost per account = $2,430 ÷ 25 = **$97.20/month**.
- Blended gross contribution per account = **$261.80/month**.
- Approximate CAC payback = $1,500 ÷ $261.80 = **5.7 months**, provided new accounts behave like this modeled mix.
- Gross-profit LTV proxy under constant 5% monthly churn = $261.80 ÷ 0.05 = **$5,236**; LTV/CAC ≈ **3.5×**.
- These LTV figures use a simplified churn-based formula, ignore discounting and revenue expansion/contraction, and are **not observed customer lifetime value**.

With $9,000 monthly fixed expenses, the continuous-mix break-even is $9,000 ÷ $261.80 = 34.38, or **approximately 35 paying accounts**. Actual account mixes cannot always be exactly 60/32/8 in small cohorts.

## Scenario ladder

| Account base | Example mix | Hypothetical MRR | Annualized ARR | Interpretation |
| --- | --- | ---: | ---: | --- |
| 5 | 5 Independent | $995 | $11,940 | Small early test only |
| 25 | 15 Independent, 8 Dealer Team, 2 Integration | **$8,975** | **$107,700** | At assumed 72.9% GM, below fixed-cost break-even |
| 35 | Blended mix assumption | ~ $12,565 | ~ $150,780 | Approximate modeled contribution break-even, not real profitability |
| 100 | 60 Independent, 32 Team, 8 Integration | **$35,900** | **$430,800** | Hypothetical scale, requires growth and retention proof |

The 35-account row is a blended average, not an exact whole-customer allocation. ARR is a rate, not cash collected.

## Sensitivity and critical unknowns

- **Churn:** 5% monthly implies a simplified 20-month mean retention under a constant-hazard assumption. This could be much better or worse.
- **CAC:** A $1,500 fully loaded assumption includes founder prospecting/time. It must eventually reconcile paid campaigns, payroll, travel, onboarding and attribution.
- **Data cost:** Licenses, API call minimums, scraping permissions, inference cost and regional coverage may change gross margin significantly.
- **Support load:** Exact-asset research and seller evidence review can require founder labor. Every hidden manual task must be costed.
- **Annual plans:** Advance cash is not 12 months of revenue earned at once. Revenue recognition and refunds must be tracked appropriately.
- **Gross margin versus operating margin:** Services/implementation costs may be differently classified from SaaS and should not be hidden inside gross margin.

## Customer-value evidence to request

A pilot should estimate current review time, number of monthly opportunities, repeat research steps, real overlooked costs, false HOLDs, and value of faster decisions. Calculate buyer ROI from the pilot's own records. Avoid calling time saved equivalent to paid cash unless the customer can monetize that capacity.

**Stop/go test:** if evidence collection and customer support consume more per account than the business can charge, narrow the scope, raise an explicitly justified price or find a partner. A seemingly attractive LTV/CAC spreadsheet is not market validation.

© 2026 Nathaniel Schroeder. All rights reserved.
