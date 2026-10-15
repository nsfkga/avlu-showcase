# Auction and equipment data automation | Future operating model

**Public architectural research v1.1.0 | October 15, 2026 | Nathaniel Schroeder**

## What I want AvLü to become

AvLü should eventually monitor **authorized equipment and vehicle sources** repeatedly, retain how a lot or listing changes over time, separate reported bids from completed sales, and use verified outcomes to assess protected acquisition decisions.

This is the larger idea behind the Inventory Watchlist. The **published Watchlist v1.0.0** is an owner-facing saved research interface; it is **not evidence that recurring external-source ingestion has been installed or is always synchronizing**.

A separate Replit **v2.15.2 local workspace** contains additional unpublished protected inspection and market-research workflow code, including observation, persistence and deduplication work. That line of development must be preserved and reconciled with GitHub v2.14.0 before any publication. It does not prove live source data collection.

## Two source categories with different permissions

**Auctions and dealer records:** some auctioneers publish catalog lots and result labels, while commercial reuse or repeated collection may still require permission or licensing.

**Facebook Marketplace and private-sale listings:** a user can discover candidate vehicles or attachments, then submit links/details via an approved intake workflow. This is **not** proof that AvLü can routinely scrape Facebook, access private sellers' accounts, replay logins or independently verify completed transaction prices. Meta's [data scraping notice](https://www.facebook.com/help/463983701520800) distinguishes authorized collection from unauthorized automated extraction.

A future observer must be source-specific and rights-aware. If a reliable authorized Facebook feed is unavailable, manual user-provided observations remain the valid product path, not an undocumented login automation workaround. [Sourcing policy](FACEBOOK_MARKETPLACE_STRATEGY.md).

## Proposed observation architecture

```text
Approved source inventories + authorized exports
               |
               v
Read-only scheduled observations with provenance and rate controls
               |
               v
Exact source event + lot + asset identity resolution
               |
               v
Append-only dated price/condition/status snapshots
               |
               v
Conflict, freshness, duplicate and mechanical-configuration checks
               |
               v
Category-specific comparable / cost assessment
               |
               v
Non-executable review, HOLD reasons and user-visible alerts
               |
               v
Authenticated settled auction results, later disposition and replay
```

## Design principles

- **Permission first:** Publicly viewable data do not automatically grant commercial database ingestion rights. Prefer authorized source feeds, official exports, licenses and customer-approved records. Never defeat login, robots restrictions or access controls.
- **History, not overwrite:** Retain the observed value with collection date, source version and any later correction, instead of rewriting what the system appeared to know when the buyer acted.
- **Exact identity:** Do not merge two lots just because they share a product title, stock photo, size or price. Keep event, lot, stock, model and serial identity individually attributable.
- **Bid versus close:** An auction page can show "bidding closed" without a confirmed sale; a "Price Realized" label does not prove a purchaser's paid settlement.
- **Fees are sourced:** Premium, taxes, payment, loadout, storage and freight are rules for the specific event, not hard-coded global percentages.
- **Human review:** A dashboard's promising margin never automatically turns into an offer, payment or contractual obligation.

## The most useful four outputs

1. **Opportunity record:** source link, exact model and configuration, age of observation, known asking/current bid and unverified evidence.
2. **Comparable view:** current asks versus completed public results, with comparability flags and date/region filters.
3. **Conservative economic screen:** an understandable landed-cost structure, costs pending verification, possible resale context and a clear HOLD state when supporting evidence is inadequate.
4. **Outcome and calibration record:** what the decision was *at the time*, what the exact unit eventually sold for, and the actual transaction expenses, without backfilling unavailable historical evidence.

## Automation milestones and their acceptance criteria

| Stage | Evidence required |
| --- | --- |
| Source discovery | Specific permitted source and documented access terms |
| Repeated snapshots | Durable, dated observations with deduplication, retries and stale data detection |
| Auction result capture | Proven relationship between the originating event/lot and final result, with amount label preserved |
| Actual economics | Real purchase settlement, actual sale proceeds and attributable costs |
| Calibration | Independent sample coverage and category/model/condition matching |
| Shadow policy | Replayable non-executable decisions and human override review |
| Restricted live execution | Separate legal, capital, operational and technical releases; currently blocked |

## Why this is more than automatic scraping

The difficult value lies in linking **a discovered lot**, **the physical asset**, **the relevant comparable outcome**, **the true total cost**, **the decision at the time** and **the final realized margin**, while preserving uncertain or contradictory evidence.

An AI assistant may help extract descriptions, but a safe acquisition workflow needs source contracts, durable provenance, explicit validations, category-specific normalization and human controls.

© 2026 Nathaniel Schroeder. All rights reserved.
