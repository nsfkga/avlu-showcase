# AvLü™ | The Auction Market Engine I Built

**Public product and investor briefing | v1.0.0 | October 22, 2026**  
**Creator and owner: Nathaniel Schroeder**

## What is AvLü?

AvLü is acquisition intelligence for people evaluating used vehicles, equipment and attachments across **auctions, Facebook Marketplace, dealers and private sellers**. Its commercial purpose is to help answer three questions **before capital is committed**: *What is worth investigating? What would the entire purchase cost? What does the evidence actually support?*

**Price the purchase. Preserve the proof.** The engine is software that observes and organizes real reported auction-market activity. The broader acquisition workflow is being built to connect those observations with unit identity, fees, transport, repairs, a protected purchase ceiling, and the later result.

## The built auction-market capability

This is not a conceptual mockup. The private source contains a developed Auction Intelligence Engine; a separate **public, real-source equipment market tracker is deployed at [getavlu.com](https://getavlu.com/#market-engine)**.

### Public Auction Market Tracker: published application v2.18.6

The published tracker has verified production-read and browser evidence for these features:

- **Real reported auction-result observations**, taken through a bounded, reviewed public-source collector rather than synthesized price points. Observations are classified as *reported auction hammer results*, not full paid buyer settlements.
- **Market categories and filters.** Equipment-family groups can be narrowed by available type, make, model and year. Detailed filter cohorts require at least **three distinct eligible lots**, rather than publishing unsupported one-lot estimates.
- **Price context.** Dated captures, lot counts, medians, first and third quartiles, recorded auction-date coverage and links to approved source-result pages. The price and provenance can be inspected using pointer, keyboard, date selector and accessible table controls.
- **Actual capture history.** Stored daily aggregate points can be retained up to **365 days**; a short observed history is shown as short history, never as a fabricated long-term trend. Changing mixtures of lots, models and conditions can affect medians.
- **Saved views and opt-in alerts on the user's device.** Supported view selections and qualified observation-change rules can be retained locally. These are not email or phone push alerts while the browser is closed.
- **Controlled refresh.** The collector reserves no more than one due-source capture per hour **when the application is active**, with persistence, leases, backoff and explicit partial/failure status. The page can check saved data approximately every minute while visible. This is **not** a guarantee of new data every hour around the clock.

**Verified example of coverage, not a universal market size:** The October 22, 2026 production acceptance recorded **eight equipment families and 66 eligible filter cohorts** with **two of three source pages covered**. This is source-specific, partial observed coverage, not 66 dealers, 66 validated valuations, or a nationwide census.

The verified deployed code is **application v2.18.6**. This release reused existing hosting and was checked for public/private route separation, exact asset versions and anonymous read-only access. Public source-price observations were not converted into private owner documents or actual trade profits.

### Auction price-by-lot view: newer v2.19.0 candidate

A later, **unpublished v2.19.0 candidate** adds a graph of **up to 160 anonymous individual reported auction prices** from the latest capture in each selected group. It separates two views:

- **Auction prices:** reported individual item prices for a selected source capture, ordered by source page and numerical lot, **not a timeline or matched comparable price trend**.
- **Capture history:** dated aggregate medians and sample sizes, **not the individual lots from old captures**.

The candidate expands a bounded batch to four rotating results pages plus a featured page, subject to the same reviewed source-access rules, cadence and backoff. It passed recorded local component/browser/visual checks, but **its GitHub verification and publication must be assessed on the exact candidate commit**. The public showcase describes it as in development until a publication receipt establishes otherwise.

## The separate private Auction Intelligence Engine

The private engine, on its own development/release track, contains additional software beyond a public price chart:

| Implemented source/test capability | Why it matters to the buyer |
| --- | --- |
| Asset, listing, observation and policy records | Distinguish an observed price from the exact physical unit and the source permission governing it |
| Explicit asking, bid, reported hammer and verified completed-resale categories | Prevent an auction result or seller ask from quietly becoming paid net-profit evidence |
| Cost-input screen with protected purchase ceiling and HOLD reasons | An unknown fee, reconditioning cost or other required component remains **unknown**, not zero |
| Non-executable forecast and decision snapshots | Preserve the original basis for a decision before later market changes or sale outcomes |
| Separately documented completed-sale outcomes and calibration calculations | Make it possible to evaluate forecast error when genuinely matched paid acquisition, expenses and resale receipts exist |
| Source-policy editor, bounded collector/worker, leases, pause, quarantine and retry rules | Design for controlled, permitted acquisition of data rather than an unrestricted scraper |
| Private revision controls, backup/restore and owner cockpit | Protect source and decision history from silent overwrites and unverified restoration |

These private components have been developed and tested, but **production private-owner acceptance, unrestricted continuous worker operation and execution release are separate gates**. Live bidding and purchasing remain **OFF**. Profit Protection™ remains **inactive**. Synthetic, unit and disposable-database tests are not independent commercial performance results.

## Why this is more than asking a GPT

A general AI tool can explain equipment prices, summarize a copied listing and build a calculator. AvLü's software delivers a more specific sequence:

**Observe a permitted source → preserve capture time and source link → group comparable market evidence without inventing history → expose incomplete identity/cost evidence → calculate a conditional acquisition scenario → keep the decision and later actual outcome separate.**

The distinctive value to **prove** is a buyer's ability to use a maintained process repeatedly, rather than reconstruct source links, calculations and uncertainty in a new conversation each time. The public tracker demonstrates genuine software and source operations today; the private acquisition engine is the broader product being validated.

**An AI estimate is easy to generate. A defensible acquisition decision requires verification before valuation.**

## How this differs from competitors

Existing providers are substantial competitors, not featureless price tables:

| Established provider | Documented strength | Specific AvLü focus |
| --- | --- | --- |
| [Tractor Zoom Pro / Anvil Pro](https://www.tractorzoompro.com/our-solutions/equipment-dealers) | Extensive auction/retail equipment values, appraisals, CRM, quotes, inventory visibility and dealer workflows | A focused **pre-purchase review** for fragmented auction, Marketplace and independent-seller opportunities, not a replacement for an entire dealer platform |
| [EquipmentWatch](https://equipmentwatch.com/market-activity-data/) | Decades of heavy-equipment auction/resale history, valuation tools and data APIs | Join a buyer's **specific** source observation, evidence gaps, total acquisition-cost scenario and review history |
| Auction and listing marketplaces | Opportunity discovery, individual prices and source-specific terms | Apply consistent **proof and cost controls** after discovery, without equating the listing price with paid settlement |
| General AI or custom spreadsheets | Flexible analysis and calculation | Reusable source collection and dated records, restricted review decisions, and preservation of the assumptions behind a case |

**A precise workflow comparison:** Anvil Pro's published April 2026 *Margin Targets* feature gives real-time, color-coded **sales quote** margin guidance and explicitly permits a below-target quote to proceed. AvLü's source-tested acquisition evaluator can return **HOLD** when required evidence or costs are unresolved, **without authorizing a purchase**. These are different steps in the deal lifecycle. This does **not** imply Anvil lacks separate acquisition controls elsewhere.

[Anvil Pro's official feature explanation](https://www.tractorzoompro.com/blog/margin-targets-for-quote-real-time-profit-visibility-inside-anvil-pro) · [EquipmentWatch market activity](https://equipmentwatch.com/market-activity-data/) · [Full competitive analysis](COMPETITIVE_MATRIX.md).

**The proposed commercial advantage is not exclusive ownership of auction prices.** It is the combination of a source-aware market tracker, conservative acquisition economics, evidence-sensitive decisions and a retained record of what was known when the buyer acted. Whether that combination saves enough time or money to justify a subscription must be measured in buyer pilots.

## What investors can verify, and what is still missing

**Demonstrated in source/release evidence:** published tracker, documented real public auction captures, multiple equipment filters and price statistics, source links, private guarded engine logic, tests, and dated release records.

**Still to establish:** broad licensed commercial feeds beyond reviewed sources, lasting performance across enough categories, actual matched purchase-to-resale profit cases, repeat paid subscribers, confirmed buyer ROI, production private-owner acceptance, and any autonomous purchase authorization.

**Key business question:** Can the combination of current auction observations and guarded cost/evidence review help a small dealer or reseller make better-supported purchase decisions with less manual reconciliation than the software and AI tools they already use?

[Working published tracker](https://getavlu.com/#market-engine) · [Product module status](PRODUCT_MODULES.md) · [Investor overview](INVESTOR_OVERVIEW.md) · [Public evidence scorecard](TRACTION_SCORECARD.md)

© 2026 Nathaniel Schroeder. All rights reserved.
