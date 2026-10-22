# AvLü™ | Dated project and public tracker status

**Snapshot: October 22, 2026 | Public showcase v2.6.0**  
**Owner: Nathaniel Schroeder**  
**This is a release/evidence snapshot, not a live database report.**

## Published public Auction Market Tracker

| Component | Last verified status |
| --- | --- |
| Published application | **v2.18.6** on [getavlu.com](https://getavlu.com/#market-engine), verified October 22, 2026 |
| Public tracker | Source-linked, real reported auction-result observations, equipment families/filtered cohorts, lot counts, medians, quartiles, dates, capture inspection and locally saved views |
| Example verified production capture | **Eight families, 66 eligible filter cohorts, two of three source pages**. Explicitly partial, source-specific coverage |
| Public source capture | **At most once per hour on app activity**, using a persistent due-time lease, partial/error flags and backoff; minute-level browser read checks while visible |
| Saved views/alerts | Device-local opt-in; no promise of email/push notifications when the browser is closed |
| Provenance | Public result-page URLs, observation dates, auction-date context; **reported hammer evidence**, not buyer settlement or unit-level resale profit |
| Deployment verification | Exact deployed public assets, anonymous route permissions, denied private access and public POST rejection passed for v2.18.6 |

The public collector is intentionally bounded. Published capture history can extend to one year only as **real observations accumulate**. Different lot configurations and changing sample mixes prevent treating a reported category median as an individualized appraisal.

[Built engine evidence](AUCTION_MARKET_ENGINE.md) · [Published tracker](https://getavlu.com/#market-engine).

## Newer v2.19.0 Auction Price Graph

A separate **v2.19.0 private source candidate**, not the verified published release, adds up to **160 anonymous individual reported result prices** for the latest capture of each eligible group, alongside a separate dated-median capture history.

The item-price list is ordered by source page and numeric lot, **not a price trend over time or a validated matched comparable set**. The candidate retains actual prior aggregate history without reconstructing missing lot-level history. Its source collector proposes more rotating result pages under the existing hourly limits. Local/browser and source tests were recorded; check the exact candidate and publication receipts before describing it as live.

## Private Auction Intelligence Engine

The private implementation includes **asset/listing/observation and source-policy records, cost scenarios, forecast and decision snapshots, public result adapters, calibrated-outcome data structures, owner revision controls, backup/restore and bounded scheduler/worker logic**.

| Private capability | State |
| --- | --- |
| Complete-cost evaluation and missing-cost HOLD | Implemented and source-tested, non-executable |
| Asking/bid/reported hammer/verified completed resale classifications | Implemented in reference engine, preserves distinct meanings |
| Source-policy/collector/lease/quarantine/retry controls | Implemented and tested in isolated code; the continuous private hosted worker remains disabled |
| Outcome/calibration calculations | Source-tested; meaningful accuracy unavailable without matched real acquisitions and resales |
| Private cockpit and raw backup/restore | Source/isolated tests exist; deployed authenticated owner acceptance is separate |
| Autonomous bids, payments and purchases | **OFF** |
| Profit Protection™ | **Inactive** |

A source-tested internal workflow is different from a private production release. The public tracker can be live while private buying and owner-release acceptance remain gated.

## Source history versus published application

The **GitHub main application baseline is v2.16.0** in the dated private engineering record, with later mechanic/inspection source changes. Public deployment v2.18.6 is tracked through a separate auction feature branch and verified published assets. The v2.19.0 candidate is later source work, not confirmed deployed.

Replit's earlier source lineage has been preserved/reconciled in the private project. Do not treat a local commit, passing CI run, or merged source branch alone as published owner functionality.

## Customer and economic evidence

| Evidence | Dated recorded result | What it does not prove |
| --- | --- | --- |
| Early equipment purchases | **71 acquisition lines / 79 units**; actual aggregate first-party costs | Completed unit-matched resale proceeds or business net profit |
| Historical arithmetic screening | **150 rows**, zero reported arithmetic mismatches | Valuation accuracy for new live buyers |
| Synthetic regression | **2,000 fictional cases / 48,000 passing assertions** | Real closed trades or expected economic return |
| Acquisition shadow research | **30 sealed public cases**, all **HOLD** / non-executable | Authorized live bids or actual paid deals |
| Customer discovery | Founder-reported **31 dealer meetings**; separate course log **23 completed interviews** | Paid subscriptions or signed pilots |
| Subscription scenarios | Proposed $199/$499/from-$999 per month; hypothetical 25 accounts = $8,975 MRR | Contracted revenue, observed CAC/churn or profitability |
| Funding | Illustrative **$100,000** allocation, not committed | Money raised or guaranteed runway |

The existing outcome-linked and actual-economics gates are incomplete. The public data tracker does not change those acquisition-readiness counts. Seller asking prices and public auction results cannot become realized-owner-profit claims without the appropriate paid purchase, expenses and disposal receipts.

## What the next milestones actually are

1. **Protect data permissions:** validate approved source terms and costs before expanding beyond the current reviewed auction source.
2. **Verify the v2.19.0 candidate separately:** maintain item-price versus capture-history semantics, keyboard access, read-only public rules and exact deployment evidence.
3. **Complete owner acceptance for the private engine:** source and privacy review, database backup/restore, owner login/save/reload/export and controls for worker activation.
4. **Pilot against existing tools:** demonstrate time and cost value for one independent-buyer category; measure errors, false HOLDs and repeat willingness to pay.
5. **Obtain matched realized outcomes:** preserve exact paid acquisition, costs and actual resale receipts before calibrating profit estimates.

There is **no live autonomous purchasing, confirmed company ARR or active profit guarantee** in this snapshot.

## Public showcase publishing

The GitHub showcase homepage, investor tour and pitch are static assets prepared for GitHub Pages publication. Source readiness and passing offline link tests do **not** establish that an independently hosted Pages URL is available. The product's published auction tracker is a **separate real application at [getavlu.com](https://getavlu.com/#market-engine)**.

[Public engine](AUCTION_MARKET_ENGINE.md) · [Product modules](PRODUCT_MODULES.md) · [Competitors](COMPETITIVE_MATRIX.md) · [Investor overview](INVESTOR_OVERVIEW.md) · [Pages readiness](GITHUB_PAGES_PUBLISHING.md).

© 2026 Nathaniel Schroeder. All rights reserved.
