# Product modules and actual state

**v2.0.0 | October 14, 2026 | Nathaniel Schroeder**

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
| Comparable matching and calibration | **Under active evidence development** | Public comparisons and completed-sale observations exist, but category release requires trustworthy matched outcomes. |
| Persistent PostgreSQL and recovery engineering | **Implemented and partly verified** | Adapter, atomic revisions, private sessions and disposable restore tests exist; full production owner recovery acceptance does not. |
| Continuous market monitoring/synchronization | **Goal / not verified live** | Repeated authorized market observations are a central product direction, not yet a proven browser-closed service. |
| Automatic bidding, transaction execution | **Off / future only** | Not an active capability; requires explicit release and separate legal, capital, data and control gates. |
| Profit Protection™ | **Inactive development concept** | Not funded or contractually offered. No coverage or profit guarantee is active. |
| Agricultural service readiness and recovery | **Separate historical R&D track** | Requirements and synthetic reference checks exist, but it is not the current autonomous-acquisition production module. |

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

© 2026 Nathaniel Schroeder. All rights reserved.
