# Auction intelligence | From catalog lot to realized result

**Public research brief v1.0.0 | October 14, 2026 | Nathaniel Schroeder**

## The published Auction Market Tracker

AvLü now has a **verified published public market tracker** at [getavlu.com](https://getavlu.com/#market-engine), application v2.18.6 as of October 22, 2026. It displays source-linked, real reported public auction results with equipment categories, dated captures, eligible filter cohorts, lot counts, medians and range context.

Production acceptance recorded eight families and 66 eligible cohorts from two of three source pages. This is a partial, source-specific sample, not a market-wide appraisal. Bounded capture happens no more than hourly on app activity, with the last stored snapshot available for read-only viewing.

The **private Auction Intelligence Engine** separately handles source policies, exact lot records, cost evidence, review snapshots and calibration structures. Its guarded worker and real-money purchase capability have not passed production owner-release gates.

The newer v2.19.0 view of individual reported item prices is **not published** in this recorded status. A reported hammer price is not a final paid invoice or realized resale profit.

[Current engine and tracker detail](AUCTION_MARKET_ENGINE.md).

## Why auctions are central

AvLü grew from real equipment auction and resale tracking, not only from vehicle listings. The challenge is not simply finding a low auction bid. It is determining whether an **exact lot**, acquired under a **specific auction's rules**, has enough supported resale potential after **all costs and evidence gaps**.

The long-term aim is a repeatable, authorized market-observation workflow. The current app has research, Watchlist and non-executable decision foundations, **not** verified fully autonomous auction scanning or purchasing.

## Auction lifecycle

| Step | What the product should capture | What can go wrong |
| --- | --- | --- |
| 1. Discovery | Auction house, event, date, lot and stable source URL | Listings move or duplicate across platforms |
| 2. Lot identity | Exact model, configuration, photographs and serial where available | An attachment family name is mistaken for an exact item |
| 3. Sale terms | Bidding channel, premium, payment, tax, pickup, storage, loadout and "as is" language | Buyer costs are assumed to be zero or copied across auctioneers |
| 4. Pre-bid screen | Known evidence, cost uncertainty, comparisons and conservative hold criteria | A hoped-for retail number becomes a false supported bid |
| 5. Auction outcome | Event close, bid history, price-realized label or final hammer when verifiable | An old current bid is mislabeled a completed sale |
| 6. Settlement | Paid invoice, premium, tax, mandatory services and transport | A website's "Price Realized" is mistaken for the buyer's complete cost |
| 7. Resale plan | Exit channel, comparable sold results, timing, inspection and recon | Asking prices are mistaken for realized proceeds |
| 8. Actual closeout | Documented seller proceeds, expenses, held days and identity match | Profit is claimed from an unsold item |

## Public auction sources already examined

- **I.R.A.Y. Companies**: publicly archived January 7, 2026 heavy-equipment event with **523 catalog items** and site-posted sale results. The event description lists a **10% buyer's premium with a $2,500 per-item cap**. An event is verifiable without claiming any particular private unit has been matched to a lot. [Public January archive](https://www.iraymn.com/auctions/8443ee3c).
- **HiBid**: individual historical lots can show **Price Realized**, date, location and sale terms. Different auctioneers apply different premiums, taxes, card fees and removal requirements. [Public example](https://hibid.com/www.heretn.com/lot/323004423/wolverine-db-15-84w-skid-steer-snow-pusher).
- **AuctionTime and auctioneer result pages**: the recorded September 30 Fargo pallet-fork lot matches an exact stock/lot/listing identity, but the result page reviewed in the private trace did **not** disclose final settlement price without login. A stale $20 pre-close bid was excluded. [Historic listing reference](https://www.auctiontime.com/listing/upcoming-auctions/260273447/48-inch-pallet-forks-pallet-forks).
- **BigIron, regional consignments and dealer sources**: studied for comparable research, identity and auction context, subject to access and terms. Their inclusion here does not mean AvLü has a live licensed integration.

External listing availability, result visibility and reuse rights must be checked individually. Public readability does not automatically grant bulk downloading or commercial redistribution rights.

## A concrete public source comparison

An online lot reported as a **Wolverine DB-15-84W snow pusher** shows a **$850 Price Realized** on September 21, 2026, with **10% buyer premium** listed in the auction terms. That means the advertised result plus that stated premium would be **$935 before any applicable tax, payment charge, transport or other costs**, assuming the stated premium applies to that sale. The individual buyer's actual settlement invoice was not recovered. [Auction lot](https://hibid.com/www.heretn.com/lot/323004423/wolverine-db-15-84w-skid-steer-snow-pusher).

The manufacturer describes **DB-15-84W as a hydraulically powered dozer blade**. The auction label says "snow pusher". Therefore, it does **not** qualify for the initial **non-powered** acquisition box merely because of its title, and the $850 result is not a sold comparison for a mechanically different SP-series pusher. [Manufacturer](https://usawolverine.com/html/product/205.html).

**This is an example of the actual problem being investigated:** an AI summary or title match is insufficient to control category, costs or bidding.

## Fee translation matters

Auction costs are event, lot, channel and payment-specific. A 10% premium at one operator, 8% at another and 15% elsewhere are not interchangeable defaults. An exemption claim does not establish an actual tax-exempt invoice.

The correct screen should show the **cost basis and what remains unknown**. Unknown freight, loadout or inspection means an unsupported "profit" field should not quietly become positive.

## Target workflow, not current deployment claim

**Licensed or authorized sources → repeat observations → identity and fee normalization → pre-bid evidence review → confirmed outcome → cost reconciliation → actual disposition → category calibration.**

The same result event may be used for market research without constituting an acquisition by AvLü or its founder. The system still needs reliable source permissions, outcome linking, sample representativeness, monitoring and technical integrations before claiming fully automatic operation.

See [Data Automation](AUCTION_DATA_AUTOMATION.md), [Agriculture Scope](AGRICULTURAL_EQUIPMENT.md) and [Case Studies](AG_AUCTION_CASE_STUDIES.md).

© 2026 Nathaniel Schroeder. All rights reserved.
