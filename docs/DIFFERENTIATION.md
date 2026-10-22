# AvLü™ | Built auction intelligence, not another price chatbot

**Public investor differentiation | v2.6.0 | October 22, 2026**  
**Created and owned by Nathaniel Schroeder**

## What AvLü is

**I built an equipment Auction Market Tracker that already displays real reported auction results.** It is part of a wider AvLü acquisition-intelligence system designed to help buyers evaluate vehicles, equipment and attachments from auctions, Facebook Marketplace, dealers and private sellers.

The software is built around **the decision before the purchase**: what the specific asset is, what the market evidence really says, the costs and unknowns, and how much financial room is left after those costs.

**Price the purchase. Preserve the proof.** A reported sale result or low listing price is an observation, not a completed margin calculation.

## What has actually been built

| Layer | Observed engineering result | Release boundary |
| --- | --- | --- |
| **Public Auction Market Tracker** | Captures reviewed public auction-result evidence, groups equipment observations, displays medians, quartiles, eligible filters, date and source history | **Published application v2.18.6**, verified on October 22, 2026 |
| **Source collection and capture controls** | Bounded, approved-source public requests, durable observation history, one due capture at most hourly on activity, lease/backoff and partial-coverage reporting | Operating for the published public tracker, not a universal around-the-clock market feed |
| **Private Auction Intelligence Engine** | Source policies, asset/listing/observation records, conditional costs, missing-cost HOLD, forecast snapshots, private restore controls, outcomes and calibration calculations | Source and isolated verification; not production owner accepted or buying enabled |
| **Later item-price graph** | Up to 160 anonymous, real reported prices per selected latest group, separate from capture-date history | **v2.19.0 unpublished candidate**, not the verified live version |

A real production acceptance recorded **eight equipment families, 66 filter cohorts and partial coverage of two of three source pages**. This is meaningful software/source evidence, but the coverage is source-specific and incomplete. It is not a national market sample, eight profitable trades, or independent price-prediction accuracy.

[Built-engine evidence, source and limits](AUCTION_MARKET_ENGINE.md) · [Published market tracker](https://getavlu.com/#market-engine).

## Why AvLü is different from normal AI

AI can interpret equipment listings and explain conditional profit math. The published tracker already does something different: it **retrieves actual reviewed public auction-result evidence, preserves source and capture dates, and exposes the size and limitations of the observed sample**.

The private engine adds a structured decision workflow:

1. **Identify and classify.** Link the source policy, lot and asset identity without inventing missing configuration or condition.
2. **Observe rather than invent.** Preserve reported auction hammer observations as their own evidence class. Asking prices, current bids, paid settlements and verified resales are distinct.
3. **Calculate the whole purchase.** Include explicit fees, transportation, repairs, holding constraints and conditional exit scenarios; required unknown costs create **HOLD**.
4. **Preserve the decision.** Keep input-digested, point-in-time forecasts and non-executable review states instead of rewriting the original expectation.
5. **Evaluate outcomes later.** Record attributable completed trades separately and calculate calibration metrics only when documented outcomes support them.

**Verification before valuation. Evaluation before speculation.** Those are design disciplines embodied in software, not a claim of an exclusive algorithm. AI is a useful part of the workflow, but its output does not independently verify the market or authorize a purchase.

## Why AvLü can occupy a different position from competitors

This is not a comparison against imaginary incumbents. Their capabilities are substantial.

### Tractor Zoom Pro / Anvil Pro

[Tractor Zoom](https://www.tractorzoompro.com/our-solutions/equipment-dealers) supplies large used-equipment datasets, appraisals, inventory analytics, CRM, quotes and connected dealership operations.

**AvLü's target:** independent buyers and smaller resellers who need a narrower **cross-source pre-purchase evidence and cost review**, including auction listings, Marketplace leads and equipment attachments, without replacing a dealership management system.

A concrete, limited distinction: Anvil's [April 2026 Margin Targets feature](https://www.tractorzoompro.com/blog/margin-targets-for-quote-real-time-profit-visibility-inside-anvil-pro) shows **sales-quote** margin guidance and permits a below-target quote. AvLü's separately source-tested evaluator can return **HOLD** when *purchase* evidence or costs remain unresolved. This compares those two specific workflow stages, not every capability in the platforms.

### EquipmentWatch

[EquipmentWatch](https://equipmentwatch.com/market-activity-data/) provides longstanding auction and resale transaction data, valuation and export tools, and [market-data APIs](https://equipmentwatch.com/api/market-data/). That data history is a genuine competitor advantage.

**AvLü's target:** apply source-supported auction evidence to the individual opportunity's purchase costs, missing proof, protected decision states and subsequent outcome record. An external price-data provider might also become a licensed data input if economics and permissions justify it.

### Marketplaces and auction platforms

Marketplace, regional auction houses and dealer sites help people **find an item and observe a price**. AvLü is organized around **what to do with that observation**: track its source, verify the unit, evaluate the total purchase cost and preserve a decision.

The currently published auction collector is source-specific. Facebook Marketplace is an intended candidate source, **not a verified unattended Meta-approved feed**.

### A custom GPT or spreadsheet

A technically capable buyer could build similar workflows. AvLü's potential commercial advantage is operating the collector, case review, rules, persistence and ongoing support as one maintained product instead of requiring that buyer to develop and maintain each piece independently.

## What makes the thesis commercially interesting

**A source-to-decision chain, not another dashboard alone.** AvLü spans public market observations, condition and identity uncertainty, cost-based review, and the future ability to compare original expectations against actual trading outcomes.

The case for subscription pricing is not "AI knows the answer." It is **repeated buyer value:** less time reconciling evidence, fewer overlooked expenses, more defensible decisions, and useful records that survive a change in staff or market conditions.

Those benefits require fair paid pilots, not marketing adjectives. Compare the buyer's existing software, a GPT-assisted alternative and AvLü on the same decision-time records. Count review minutes, omitted costs, mismatched assets, false HOLDs, setup effort, repeat use and customer willingness to pay.

## The honest product boundary

- **Published:** Equipment Auction Market Tracker v2.18.6, with reviewed source observations, filters, medians, ranges and dated captures. Public capture is at most hourly **on activity**, not guaranteed while the app sleeps.
- **Developed/tested privately:** Evidence and economic gates, source policies, source records, forecasts, outcome/calibration structure and disabled private worker pathways.
- **Under review:** v2.19.0 item-price graph with bounded anonymous numeric observations. It is not a published sales-history or general market-trend claim.
- **Still missing:** Broad licensed coverage, enough exact matched realized-profit cases, measured superiority to incumbent workflows, paid recurring traction and production owner acceptance.
- **Disabled:** Binding bids, automatic purchases, private collector release and Profit Protection™.

**Investor takeaway:** AvLü has moved from an acquisition-workflow hypothesis to real, source-backed market software. The next question is whether its market and evidence engine produces enough measurable buyer value to support a profitable subscription business.

[Engine deep dive](AUCTION_MARKET_ENGINE.md) · [Comparative feature matrix](COMPETITIVE_MATRIX.md) · [Customer outcome experiment](CUSTOMER_ROI_TEST.md) · [Current release status](STATUS_SNAPSHOT.md).

© 2026 Nathaniel Schroeder. All rights reserved.
