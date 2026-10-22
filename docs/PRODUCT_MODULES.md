# Product modules and actual state

**v2.6.0 | October 22, 2026 | Nathaniel Schroeder**

The core product is a *proof-first acquisition decision workflow*. These areas are intentionally separated by release state.

| Module / workflow | Current state | What it means |
| --- | --- | --- |
| Public homepage, explanations, dealer information | **Published** | Visitors can understand the workflow and reach a guided entry point. |
| Listing/intake and guided review | **Working prototype** | Organizes submitted or entered listing information for review, rather than requiring users to start from an empty spreadsheet. |
| Protected owner review and administrative routes | **Implemented; access controls tested** | Private data is not intended for anonymous visitors. Automated public-denial checks passed on the recorded live version. |
| Evidence fields, missing-proof checks, condition/cost context | **Implemented across review workflows** | Keeps claims and assumptions explicit, highlights missing documentation, and supports bounded next actions. |
| Cost-based screening / ask gap / supported ceiling concepts | **Prototype / reference logic** | Economics are conditional on supported resale and cost inputs. Missing material inputs trigger HOLD, not false precision. |
| Private Inventory Watchlist | **Published v1.0.0** | Owner-facing research listings, observation history, entered cost assumptions and export; deployed owner save/export acceptance is still pending. |
| Historical case extension | **Source-verified v1.1.0, not published** | Preserves dated historical source claims without treating historic retail projections as today's market price. |
| Non-executable acquisition decision engine | **Tested reference engine** | APPROVE, COUNTER, REJECT and HOLD are evaluation states. The reference remains `live_executable=false`. |
| Shadow case and intent controls | **Source-tested; disabled for production execution** | Studies acquisition decisions while preventing binding purchase actions. Deployment gates are still open. |
| Digital Inspection™ evidence protocol | **Designed/tested intake and evidence verification; field-complete captures not established** | Missing, contradictory or incomplete photo/video evidence remains unresolved and cannot silently pass. |
| Comparable matching and calibration | **Public price ranges published; acquisition calibration unverified** | Equipment-family medians and ranges are observed market context, not confirmed exact-unit valuations or profit outcomes. |
| Persistent PostgreSQL and recovery engineering | **Implemented and partly verified** | Adapter, atomic revisions, private sessions and disposable restore tests exist; full production owner recovery acceptance does not. |
| Public auction-market collection | **Published v2.18.6; source-specific and on-activity** | Reviewed result observations with durable due-time leases, bounded retries and explicit partial-coverage flags; not a general 24/7 cross-platform feed. |
| Automatic bidding, transaction execution | **Off / future only** | Not an active capability; requires explicit release and separate legal, capital, data and control gates. |
| Profit Protection™ | **Inactive development concept** | Not funded or contractually offered. No coverage or profit guarantee is active. |
| Agricultural service readiness and recovery | **Separate historical R&D track** | Requirements and synthetic reference checks exist, but it is not the current autonomous-acquisition production module. |

## The built Auction Market Engine now has two distinct release layers

**Published Auction Market Tracker v2.18.6:** Real, reviewed public auction results, dated source captures, supported equipment filters, lot counts, medians, Q1/Q3 ranges, original result-page links and device-local saved views. On-activity due captures are at most hourly, not guaranteed collection every hour with the browser closed. October 22 production acceptance: eight equipment families, 66 eligible filter cohorts, two of three source pages. The figures describe a partial source sample.

**Private Auction Intelligence Engine:** Source-tested policies, classified observations, cost and protected-ceiling evaluation, unknown-cost HOLD, decision/forecast snapshots, outcome/calibration records, private owner controls and backup/restore. A hosted continuous private collector and autonomous acquisition are not released.

**v2.19.0 candidate:** An additional item-price graph of up to 160 anonymous reported prices from one latest capture, separate from the aggregate capture-history view. Not yet verified published.

[Engine architecture and exact limits](AUCTION_MARKET_ENGINE.md) · [Source/economic distinction](DIFFERENTIATION.md).

## Facebook Marketplace research capability and limits

The private application's `assets/js/source-search.js` lists **Facebook Marketplace** as a recognized source for vehicles **and** equipment, alongside Craigslist, dealerships and equipment-auction sites. Listing links and descriptions are useful inputs to the existing evidence-first screening concept. The historical Marketplace research sheets are QA/source leads, not proof of completed sales.

| Marketplace-related capability | Actual status |
| --- | --- |
| Facebook Marketplace named as vehicle/equipment search source | **Present in private source-search configuration** |
| Guided listing review and evidence gaps | **Working prototype**; owner-specific workflow capabilities depend on the verified release |
| Historic Marketplace capture and QA datasets | **Research records**, not live certified collection |
| Periodic automatic scanning and price-drop alerts for Facebook | **Not verified deployed; source permissions unresolved** |
| Automated Marketplace seller messages, account credentials, purchase/posting | **Not released or authorized** |

[Marketplace workflow and distinction from auctions](FACEBOOK_MARKETPLACE_STRATEGY.md).

## The current user journey

**Public:** Learn what is being screened → Start with a listing → Enter or paste available details → Check gaps and assumptions → Reach a bounded next action or request further review.

**Private owner:** Review saved research → Revisit source observations and entered assumptions → Track changes and hold reasons → Export a research view as permitted. Owner save/export persistence needs final live acceptance.

**Reference engineering:** Exercise a frozen synthetic record → Evaluate decision states within an explicit policy → Record a non-executable shadow result. It does not place bids.

## Why vehicles and equipment both appear

I started with a broad inventory problem involving cars and equipment. I am **retaining automotive support**, but avoiding a premature claim that one policy safely approves every asset class. The first potential autonomous coverage deliberately excludes vehicles and powered machines until category-specific evidence, identity checks, inspections and controls can support them.

## Current product discipline

- **A stated fact** is not a verified fact.
- **An asking price** is not a sold result.
- **Expected gross** is not realized net profit.
- **A math pass** is not approval to buy.
- **A synthetic test pass** is not a completed real-world pilot.

Read [Status Snapshot](STATUS_SNAPSHOT.md) and [Autonomy](AUTONOMY.md) for the precise boundary.

## Agricultural auctions and equipment: real modules and research

My earliest equipment work tracked actual auction acquisition economics for **71 inventory lines and 79 units**, with planned resale separately labeled. Public results research later examined **22 attachment outcome observations**, including 18 pallet-fork records whose weak comparability and clustering do not justify a live valuation.

The broader project contains auction lot/stock research, fee translation and source provenance, attachment fitment/configuration checks, inspection evidence controls, non-executable acquisition policy and a saved Watchlist. These are not the same as **live recurring sourcing or autonomous buying**. The local, unpublished Replit v2.15.2 worktree adds market-research and inspection features that remain to be reconciled with GitHub v2.14.0.

The initial buying policy is narrower than the research base: **selected non-powered compact attachments** only, and execution remains off. Root rakes, blades and pushers must be classified by their real mechanism, not just title. The September equipment field-service concept is **separate historical R&D**.

[Agriculture detail](AGRICULTURAL_EQUIPMENT.md) · [Auction intelligence](AUCTION_INTELLIGENCE.md) · [Unpublished workspace status](STATUS_SNAPSHOT.md).

© 2026 Nathaniel Schroeder. All rights reserved.
