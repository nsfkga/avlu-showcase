# AvLü™ | Purchase intelligence for Marketplace, equipment, and auctions

**Public investor and technical showcase | v2.5.1 | October 19, 2026**  
**Created and owned by Nathaniel Schroeder**

[Investor tour](investors.html) · [Working prototype](https://getavlu.com) · [Printable pitch](pitch.html) · [Competitive assessment](docs/COMPETITIVE_MATRIX.md) · [Pricing](docs/PRICING_REVENUE.md) · [Funding plan](docs/FUNDING_PLAN.md)

## What AvLü is

**AvLü helps inventory buyers decide what is worth buying, what they can afford to pay, and what they need to verify first.**

I am building it for used vehicles, agricultural and compact equipment, and attachments found on **Facebook Marketplace, at auctions, through dealers, and in private sales**. The working application brings listing information, condition evidence, acquisition costs, resale assumptions, and review history into one decision process.

**Price the purchase. Preserve the proof.** A promising resale price is only useful when the exact asset, expenses, and evidence support the purchase.

## Why AvLü is more than a normal AI answer

**A recommendation should survive verification.** A one-off AI answer can suggest a number. AvLü is being built to preserve the information, calculations, and conditions behind a buyer's decision.

The difference is the product around the answer:

- **Evidence changes the result.** Missing identity, ownership, condition, or cost information stays visible. A plausible margin does not erase an unresolved requirement or turn a historical auction result into a current buying opportunity.
- **The original forecast stays intact.** The source-tested Owner Resale workflow connects saved opportunities, dated observations, the calculator, and preserved forecasts. Later edits do not silently replace the original basis for the decision.
- **The warnings travel with the numbers.** In the latest tested development workflow, downloaded reports retain the screen's source classifications and missing-cost warnings. An export does not turn uncertain expenses into confirmed costs.
- **Expected profit and actual results remain separate.** Forecasts use stated assumptions. Actual trades have a separate owner-entered record, with independent verification still required before treating those entries as established transaction evidence.

AI can help extract descriptions, explain results, or build similar software. AvLü's value proposition is a maintained acquisition workflow with explicit rules, durable records, and consistent handling of uncertainty, not exclusive access to a model.

**Development status:** The Owner Resale integration has passed source, browser, export, and database tests but remains unmerged and unpublished. Continuous authorized source feeds and independently verified realized-profit calibration remain development goals. [Product status](docs/PRODUCT_MODULES.md) · [Detailed differentiation](docs/DIFFERENTIATION.md).

## How AvLü differs from existing competitors

**AvLü focuses on the buyer's acquisition decision: not just what an item might sell for, but what it is worth buying for.**

Tractor Zoom Pro/Anvil Pro already offer substantial valuation, appraisal, inventory, quoting, and dealer-workflow capabilities. EquipmentWatch already provides extensive auction and resale data. AvLü's distinctive product focus is the **independent buyer reviewing incomplete opportunities across different sources**, with the original forecast, unresolved evidence, and eventual actual result kept separate and connected.

| Alternative | Documented strength | AvLü's specific focus and buyer benefit |
| --- | --- | --- |
| Tractor Zoom Pro / Anvil Pro | Equipment valuations, appraisals, inventory, CRM, quotes, and settlement workflows | A focused acquisition review across Marketplace, private sales, dealer listings, and auctions, without requiring the buyer to adopt an entire dealership workflow |
| EquipmentWatch | Historical auction/resale transactions and market-data services | Apply market evidence to this exact unit, the buyer's costs, and the reasons an opportunity should remain on HOLD |
| Marketplace and auction catalogs | Finding inventory and observing asking prices or reported results | Carry an opportunity from discovery into a documented cost-and-evidence review rather than treat the listing as sufficient proof |
| A custom GPT or spreadsheet | Flexible analysis, calculations, and user-built workflows | Preserve original forecasts, retain uncertainty in reports, and keep expected returns separate from actual trade records in a maintained application |

**The benefit to test is better coordination with less complication:** fewer repeated lookups, clearer cost exposure, and a decision that can be reviewed without reconstructing the reasoning from scattered notes.

One concrete comparison is already visible in the published product descriptions. Anvil Pro's April 2026 Margin Targets release displays profit guidance inside a sales quote and explicitly does not block below-target deals. AvLü's reference acquisition logic uses **HOLD** when source evidence or required costs are unresolved. Those controls serve different decisions: a sales-margin indicator versus a pre-purchase evidence gate. This comparison applies to that specific Anvil feature, not every control in its wider platform.

[Anvil Pro margin-target behavior](https://www.tractorzoompro.com/blog/margin-targets-for-quote-real-time-profit-visibility-inside-anvil-pro) · [Anvil Pro product scope](https://www.tractorzoompro.com/anvil-pro) · [EquipmentWatch data](https://equipmentwatch.com/market-activity-data/) · [Full comparison](docs/COMPETITIVE_MATRIX.md).

**Validation milestone:** Measure review time, overlooked costs, false holds, repeat use, and willingness to pay against the customer's actual tools. The workflow difference is specific; superior customer outcomes still need a fair comparison.

## GitHub Pages publishing

The static homepage, investor tour, and pitch are prepared for GitHub Pages using `main` and `/(root)`. **Prepared source is not a verified deployment.** The formatted README and linked documents remain available on GitHub. [Publishing instructions](docs/GITHUB_PAGES_PUBLISHING.md).

## Marketplace, agriculture, and auctions belong together

Facebook Marketplace is present in the private source-search configuration for both vehicles and equipment. It supplies candidate opportunities alongside dealer inventory, private sellers, and regional auctions. A listing's asking price or sold badge is not independently verified resale proceeds.

The agricultural and auction work is foundational. Original research includes **71 acquisition lines representing 79 units**, with actual aggregate purchase accounting and a separate projected retail ledger. The retained sales log was empty at its recorded snapshot, so projected retail spread is not realized profit.

Research categories include root rakes, pallet forks, buckets, blades, snow pushers, flail-mowing equipment, pressure washers, and compact loaders. The first proposed autonomous category is narrower: selected non-powered attachments. Vehicles and powered equipment remain research categories rather than authorized automatic purchases.

**Source access:** The published application does not have a verified live Facebook Marketplace feed or an authorized unattended Facebook scraper. User-provided listings and permitted observations are distinct from commercially licensed, recurring collection.

[Marketplace strategy](docs/FACEBOOK_MARKETPLACE_STRATEGY.md) · [Agricultural equipment](docs/AGRICULTURAL_EQUIPMENT.md) · [Auction intelligence](docs/AUCTION_INTELLIGENCE.md) · [Original research](docs/PROJECT_ORIGINS_TIMELINE.md).

## Development and evidence

| Area | Recorded position | Interpretation |
| --- | --- | --- |
| Working application | Last documented published baseline: v2.13.0 | A working prototype, not confirmation that later development is live |
| Source history | v2.14.0 GitHub baseline; later Replit-derived and Owner Resale work on separate development branches | Source progress and publication remain different milestones |
| Owner Resale integration | Latest reviewed draft connects source-aware forecasts, saved opportunities, and separate actual trades; full source-release check passed | Development evidence, not deployment or independent review approval |
| Historical arithmetic audit | 150 rows; zero reported mismatches; seven advanced for further investigation | Calculation consistency for audited inputs, not trading profit |
| Synthetic regression | 2,000 fictional cases and 48,000 passing assertions | Software testing, not real acquisitions |
| Shadow research | 30 sealed cases, all HOLD and non-executable | No purchase authority released |
| Customer discovery | 31 founder-reported dealer meetings; a separate course log recorded 23 completed conversations | Distinct research records, not paying customers |
| Buying and Profit Protection™ | OFF / inactive | No autonomous bids, payments, purchases, or active coverage |

The newest private development receipt reports 47 forecast/concurrency/export tests, 11 real PostgreSQL and local-storage checks, 35 forecast browser/API checks, and 43 retained desktop/mobile browser checks passing. It also records a successful full source-release check. These are isolated software tests. Independent review, owner production acceptance, backup/restore, and controlled deployment remain release gates.

[Validation](docs/VALIDATION.md) · [Technical testing](docs/TESTING.md) · [Historical status snapshot](docs/STATUS_SNAPSHOT.md) · [Public evidence scorecard](docs/TRACTION_SCORECARD.md).

## How the business would earn revenue

The primary model is recurring software subscriptions for inventory buyers and dealers, not ownership of their equipment or a percentage of their resale proceeds.

**Proposed pricing:** $199/month Independent ($1,990/year), $499/month Dealer Team, and from $999/month for a negotiated integration. A bounded pilot is modeled at $750–$1,500 once. These are **pricing hypotheses**, not existing subscriptions or confirmed customer acceptance.

A hypothetical mix of 15 Independent, eight Team, and two Integration accounts produces **$8,975 MRR** and **$107,700 annualized ARR**. Assumed direct costs of $2,430/month leave $6,545 gross profit, or approximately 72.9% gross margin. After hypothetical fixed expenses of $9,000/month, the scenario has a **$2,455 monthly operating loss**, before additional acquisition costs and taxes. Approximate blended break-even is 35 accounts.

The proposed **$100,000** capital plan allocates $40,000 to engineering/founder QA, $20,000 to data rights/integrations, $15,000 to pilots/onboarding, $10,000 to security/infrastructure, $10,000 to legal/accounting, and $5,000 to contingency. This is **not money already raised**, a financing offer, or guaranteed runway.

The first commercial test is a founder-led path from 50 qualified buyers to 15 demonstrations, five paid pilots, and three recurring conversions. Those are targets, not recorded revenue.

[Investor overview](docs/INVESTOR_OVERVIEW.md) · [Pricing](docs/PRICING_REVENUE.md) · [Unit economics](docs/SAAS_UNIT_ECONOMICS.md) · [Funding](docs/FUNDING_PLAN.md) · [Go-to-market](docs/GO_TO_MARKET.md).

## Related agricultural service research

Equipment Service Readiness and Recovery examines machine configuration, parts, technician preparation, and confirmed field-service recovery. It remains a separate R&D track, not a deployed dealer-service product. The current acquisition focus and automotive support remain intact. [Service research](docs/AG_SERVICE_READINESS_RND.md).

## Read deeper

| Topic | Documents |
| --- | --- |
| Investor presentation | [Interactive tour](investors.html), [ten-slide pitch](pitch.html), [reading guide](docs/INVESTOR_3_MINUTE_TOUR.md), [pitch guide](docs/PITCH_DECK_GUIDE.md) |
| Why AvLü | [Differentiation](docs/DIFFERENTIATION.md), [competitor matrix](docs/COMPETITIVE_MATRIX.md), [customer ROI experiment](docs/CUSTOMER_ROI_TEST.md) |
| Product and engineering | [Modules](docs/PRODUCT_MODULES.md), [architecture](docs/ARCHITECTURE.md), [autonomy](docs/AUTONOMY.md), [testing](docs/TESTING.md) |
| Acquisition evidence | [Market data](docs/MARKET_DATA.md), [auction cases](docs/AG_AUCTION_CASE_STUDIES.md), [source automation](docs/AUCTION_DATA_AUTOMATION.md) |
| Business and diligence | [Commercialization](docs/COMMERCIALIZATION.md), [pilot plan](docs/PILOT_PLAN.md), [investor diligence](docs/INVESTOR_DILIGENCE.md), [roadmap](docs/ROADMAP.md) |
| Research and review | [Customer discovery](docs/CUSTOMER_DISCOVERY.md), [mentor questions](docs/MENTOR_REVIEW.md), [all documentation](docs/) |

## Public and private boundaries

This repository contains public presentation material and browser-only fictional examples. The homepage's three sample cases have fixed states; the investor page recalculates hypothetical costs and subscription scenarios. Neither accesses the proprietary engine, production records, or live market feeds.

Private implementation, participant details, transaction documents, credentials, and source history remain outside this repository. [Disclosure policy](docs/INFORMATION_BOUNDARY.md).

© 2026 Nathaniel Schroeder. All rights reserved.
