# AvLü™ | Purchase intelligence for Marketplace, equipment, and auctions

**Public investor and technical showcase | v2.6.0 | October 22, 2026**  
**Created and owned by Nathaniel Schroeder**

[Investor tour](investors.html) · [Working prototype](https://getavlu.com) · [Printable pitch](pitch.html) · [Competitive assessment](docs/COMPETITIVE_MATRIX.md) · [Pricing](docs/PRICING_REVENUE.md) · [Funding plan](docs/FUNDING_PLAN.md)

## What AvLü is

**I built AvLü to help buyers decide what inventory is worth pursuing, what the entire acquisition would cost and what evidence they still need before committing capital.** It supports used vehicles, agricultural equipment and attachments discovered on **Facebook Marketplace, at auctions, from dealers and through private sellers**.

The project now has **two concrete auction-market components**:

1. **A published Auction Market Tracker** at [getavlu.com](https://getavlu.com/#market-engine). It presents actual *reported* auction-result observations with equipment filters, dated captures, sample sizes, median and price-range context, and original source links. It is software operating on real market observations, not a fictional AI-generated pricing chart.
2. **A separately developed private Auction Intelligence Engine** for source policies, recorded observations, conditional all-in acquisition costs, explicit **HOLD** decisions, frozen forecasts and separate outcome records. Its source tests have passed, but full private-owner production acceptance and automatic purchasing are **not released**.

**Price the purchase. Preserve the proof.** A low auction result only becomes a worthwhile opportunity after configuration, condition, buyer fees, freight, reconditioning and a credible exit are considered.

[See the built Auction Market Engine](docs/AUCTION_MARKET_ENGINE.md) · [Open the published tracker](https://getavlu.com/#market-engine) · [Current release boundaries](docs/STATUS_SNAPSHOT.md).

## Why AvLü is different from just using normal AI

**An AI answer can estimate a price. AvLü has a market-data process and a decision record behind the number.**

- **Actual observed market activity:** The public tracker uses a bounded collector of reviewed auction-result pages. It stores dated observations, distinguishes the capture date from the auction date, and shows only supported categories and price statistics. A user can review the source instead of relying on a fabricated answer.
- **Evidence before economics:** The private evaluator distinguishes asks, bids, reported auction hammer results and verified completed resales. An unknown acquisition expense stays **unknown**, not zero. Required missing costs can produce **HOLD** rather than a false buying ceiling.
- **A repeatable record:** Source policies, revisioned observations, decision-time forecasts and later separately documented trade outcomes are designed to remain traceable across repeated reviews. That is operational software, not a prompt pasted into a new conversation.
- **Visible limitations:** A chart median is not a universal valuation, and a reported auction price is not a buyer's paid invoice or a reseller's earned profit. The engine keeps those differences explicit.

The public market collection works **at most hourly on activity**, not as a guaranteed always-on commercial feed. User-device alerts are opt-in and do not send messages when the browser is closed. Additional sources, actual realized-profit calibration and automated purchases remain gated.

**The advantage to test:** verification before valuation, followed by an informed acquisition decision. AI can assist the process; the value of AvLü is the maintained, evidence-controlled workflow and the time and risk it could save a recurring buyer.

## How AvLü is different from competitors

**Tractor Zoom Pro and Anvil Pro already offer extensive equipment valuations, appraisals, inventory and dealership workflows. EquipmentWatch already provides auction/resale history and market-data APIs.** AvLü's opportunity is not exclusive ownership of price data or AI calculations.

I am developing a **focused source-to-purchase workflow for independent buyers and smaller resale operators**. The buyer can examine an auction lot, a Facebook Marketplace listing or a dealer offer, then evaluate *this exact item*, its proof gaps, total acquisition exposure and the original basis for a decision, instead of piecing those steps together across multiple tools.

| Established solution | What it provides | AvLü's more specific job |
| --- | --- | --- |
| **Tractor Zoom Pro / Anvil Pro** | Rich used-equipment comps, appraisals, inventory, quoting, CRM and dealership operations | A narrower, cross-source **pre-purchase evidence and cost review** for an independent buyer, not a dealership-system replacement |
| **EquipmentWatch** | Historical equipment transactions, valuation tools, auction/resale research and APIs | Bring suitable market observations into a **specific asset's acquisition scenario**, with cost uncertainty and documented next steps |
| **Auction and Marketplace platforms** | Listings, bids and publicly reported sale results | Transform a discovery lead into a traceable review that distinguishes seller claims, reported hammer and paid resale evidence |
| **General-purpose AI or spreadsheets** | Flexible summaries, calculations and custom workflows | Deliver a purpose-built market tracker plus maintained review rules, source history and explicit HOLD behavior |

**One concrete lifecycle difference:** Anvil Pro's published April 2026 *Margin Targets* feature displays profit expectations in **sales quotes** and expressly permits a below-target quote to proceed. AvLü's reference **acquisition** evaluator instead returns **HOLD** if required proof or costs are incomplete. This illustrates **sale-side guidance versus pre-purchase evidence gating**, without suggesting that Anvil lacks other approval controls.

[Tractor Zoom's dealer capabilities](https://www.tractorzoompro.com/our-solutions/equipment-dealers) · [Anvil's Margin Targets feature](https://www.tractorzoompro.com/blog/margin-targets-for-quote-real-time-profit-visibility-inside-anvil-pro) · [EquipmentWatch market data](https://equipmentwatch.com/market-activity-data/) · [Detailed comparison](docs/COMPETITIVE_MATRIX.md).

The proposed competitive advantage must still be demonstrated in pilots through **time saved, avoided missed costs, false HOLD rates, repeated use and price acceptance**. Current software and synthetic checks establish development progress, not proven superiority or paying customers.

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
| Published Auction Market Tracker | **Application v2.18.6**, verified October 22, 2026 | Real reported auction-result data, equipment filters, capture inspection, price ranges, source dates and locally saved views |
| Private development | GitHub main v2.16.0; separate v2.18.6 auction release and v2.19.0 candidate | Source and deployment approvals must be treated separately |
| Owner Resale and private Auction Intelligence | Preserved private development branches and source-tested logic | Forecast/decision history exists; authenticated owner deployment, buying and autonomous-worker release remain gated |
| Historical arithmetic audit | 150 rows; zero reported mismatches; seven advanced for further investigation | Calculation consistency for audited inputs, not trading profit |
| Synthetic regression | 2,000 fictional cases and 48,000 passing assertions | Software testing, not real acquisitions |
| Shadow underwriting | 30 sealed cases, all HOLD and non-executable | Not actual trades or released buying approval |
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

## Published tracker versus next version

The **latest verified public release is v2.18.6**, tested with eight equipment families and 66 eligible filter cohorts in one dated capture, with **two of three source pages** covered. That partial-source count must not be treated as market-wide coverage.

The **v2.19.0 candidate is not yet published** in the reviewed evidence. It adds a separate view of up to 160 individual anonymous reported auction prices per supported group at the latest capture; it does not pretend that source-page order is a time trend or that mixed equipment lots are automatically comparable. Historical capture medians remain separately labeled.

[Engine release details](docs/AUCTION_MARKET_ENGINE.md).

## Read deeper

| Topic | Documents |
| --- | --- |
| Investor presentation | [Interactive tour](investors.html), [ten-slide pitch](pitch.html), [reading guide](docs/INVESTOR_3_MINUTE_TOUR.md), [pitch guide](docs/PITCH_DECK_GUIDE.md) |
| Why AvLü | [Differentiation](docs/DIFFERENTIATION.md), [competitor matrix](docs/COMPETITIVE_MATRIX.md), [customer ROI experiment](docs/CUSTOMER_ROI_TEST.md) |
| Built Auction Market Engine | [Market tracker and private engine status](docs/AUCTION_MARKET_ENGINE.md), [live published tracker](https://getavlu.com/#market-engine) |
| Product and engineering | [Modules](docs/PRODUCT_MODULES.md), [architecture](docs/ARCHITECTURE.md), [autonomy](docs/AUTONOMY.md), [testing](docs/TESTING.md) |
| Acquisition evidence | [Market data](docs/MARKET_DATA.md), [auction cases](docs/AG_AUCTION_CASE_STUDIES.md), [source automation](docs/AUCTION_DATA_AUTOMATION.md) |
| Business and diligence | [Commercialization](docs/COMMERCIALIZATION.md), [pilot plan](docs/PILOT_PLAN.md), [investor diligence](docs/INVESTOR_DILIGENCE.md), [roadmap](docs/ROADMAP.md) |
| Research and review | [Customer discovery](docs/CUSTOMER_DISCOVERY.md), [mentor questions](docs/MENTOR_REVIEW.md), [all documentation](docs/) |

## Public and private boundaries

This repository contains public presentation material and browser-only fictional examples. The homepage's three sample cases have fixed states; the investor page recalculates hypothetical costs and subscription scenarios. Neither accesses the proprietary engine, production records, or live market feeds.

Private implementation, participant details, transaction documents, credentials, and source history remain outside this repository. [Disclosure policy](docs/INFORMATION_BOUNDARY.md).

© 2026 Nathaniel Schroeder. All rights reserved.
