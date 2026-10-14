# AvLü™ | Evidence-first acquisition intelligence

**Public technical and venture showcase | v2.0.0 | October 14, 2026**  
**Created and owned by Nathaniel Schroeder**

**[Explore the working AvLü prototype](https://getavlu.com)** · [Start here](docs/START_HERE.md) · [Product modules](docs/PRODUCT_MODULES.md) · [Technical architecture](docs/ARCHITECTURE.md) · [Evidence and validation](docs/VALIDATION.md) · [Mentor review brief](docs/MENTOR_REVIEW.md)

## What I am building

AvLü is a working, privately developed web application for evaluating **used vehicles, equipment, and attachments before money is committed**. It brings asset identity, seller claims, market observations, condition and inspection evidence, likely costs, potential resale, uncertainty, and decision controls into one reviewable workflow.

**The goal is not to produce an optimistic price. It is to determine what the evidence supports, what is missing, and what the next responsible action should be.**

I am extending the existing prototype toward continuous market observation, outcome-backed calibration, and bounded autonomous acquisition. Those are **development objectives**, not features that I claim are fully deployed. The product does **not** place orders, send bids, guarantee profit, or automatically purchase inventory today.

## The project in one minute

| Dimension | Current status |
| --- | --- |
| Working app | Yes. Public site and private owner features exist. Last verified publication: **application v2.13.0**. |
| Private source | **v2.14.0**, including later historical research and recovery controls; **not yet verified as published**. |
| Public showcase | **v2.0.0**, a standalone presentation repo, not the private application. |
| Research scope | Vehicles, non-powered attachments and other equipment research. Initial proposed autonomous policy is narrower than the research scope. |
| First autonomous policy scope | Selected **non-powered compact-equipment attachments**. Powered machines and vehicles are not authorized for live automated acquisition. |
| Historical arithmetic audit | **150** screened rows; **0** reported arithmetic mismatches; **7** advanced to investigate further; **0** acquisition approvals. |
| Synthetic regression | **2,000** fictional scenarios and **48,000/48,000** automated assertions passed in a recorded regression run. This is software QA, not real profits. |
| Live-market research | **30** sealed public shadow cases. All remain **HOLD** and non-executable. |
| Customer discovery | **31 dealer meetings reported by the founder**; a separate course workbook documented **23 completed discovery conversations** at its final handoff. These counts are not interchangeable. |
| Purchase authority | **OFF**. No autonomous bids, buying, or binding offers are authorized. |
| Profit Protection™ | **Inactive**. No guarantee, funded protection program or coverage is being sold. |

[Read the status and limits in full](docs/STATUS_SNAPSHOT.md).

## Why I am building it

The attractive asking price is rarely the whole economic story. It can conceal missing ownership proof, inaccurate specifications, unresolved condition issues, reconditioning, freight, taxes and fees, weak local comparables, resale timing, or a mismatch between advertised equipment and actual configuration.

For a dealer, small fleet, resale operator, or equipment buyer, the hard work is often **assembling and trusting the evidence before making the decision**. AvLü is being designed to handle that process consistently.

## Product workflow

```text
Listing / auction / dealer observation
           |
           v
Normalize asset identity, description and provenance
           |
           v
Separate stated facts, verified evidence and unknowns
           |
           v
Evaluate supported market context and complete cost stack
           |
           v
Apply versioned decision controls and explicit HOLD reasons
           |
           v
Review, reject, counter, monitor or investigate further
           |
           v
Record disposition and verified outcomes when available
```

Current functionality includes guided public intake and a protected owner review experience. The Inventory Watchlist stores research observations and conditional cost assumptions; the private reference engine supports non-executable decision states. Continuous scheduled market ingestion, fully matched realized-profit feedback and autonomous transactions still require further work.

[Explore product modules and implementation status](docs/PRODUCT_MODULES.md).

## Why not just ask a GPT?

A language model can summarize a listing, explain a market concept, help estimate a cost, or help someone build a competing tool. **I do not claim that ordinary AI access is unique.**

The value I am testing is **the maintained operational system around the answer**: data lineage, identity and configuration checks, verified versus assumed inputs, category calibration, reusable policy controls, stored decision history, restricted access, repeatable tests, and eventual links from observations to actual outcomes. Users would be paying for a proven workflow that is cheaper and safer than maintaining their own equivalent, not access to an irreplaceable prompt.

That economic and performance advantage is **not yet proven**. I intend to test it against existing dealer workflows rather than assume it.

[Competitive positioning and the GPT challenge](docs/DIFFERENTIATION.md).

## Actual engineering, not a pitch-only mockup

The private application has a Node-based runtime, server-enforced protected routes, a PostgreSQL storage adapter, durable owner sessions, review exports, browser and API verification, and an Inventory Watchlist with stored observations and optimistic revision control. A reference acquisition engine and separately constrained shadow workflow have also been built and tested without enabling purchases.

More recent source work includes a tested disposable PostgreSQL restore rehearsal and a read-only raw-state attestor. Neither is proof of an actual production backup. Owner sign-in/save/export acceptance and deployed recovery controls remain outstanding.

The public GitHub repo deliberately contains **only architecture-level descriptions and a fictional, fixed-state interactive sample**, not the private algorithms, data, API implementation or infrastructure credentials.

[Engineering architecture](docs/ARCHITECTURE.md) · [Autonomy and safety](docs/AUTONOMY.md) · [Verification matrix](docs/TESTING.md).

## Evidence rather than exaggerated claims

I keep **asking price, current bid, completed auction price, projected resale, verified sold result, and realized net profit** as distinct concepts. Synthetic regression passes do not create sold units; a screenshot does not prove clear title; an attractive spread is not profit.

The evidence currently supports arithmetic consistency, structured workflows, selected source recovery, and software guardrail testing. It does **not** support claimed realized-profit accuracy, fully calibrated autonomous decisions, a live protection guarantee, or purchase authority.

[Detailed evidence status](docs/VALIDATION.md) · [Market-data lifecycle](docs/MARKET_DATA.md) · [Customer discovery](docs/CUSTOMER_DISCOVERY.md).

## Who I am seeking feedback from

- **gBETA and early-stage mentors:** category focus, commercialization pathway, defendability, first paid use case, and the validation milestone needed to justify investment.
- **Technical reviewers:** system boundaries, permitted data sourcing, matching sold results to observed units, auditability, security, reliability and the automation release gates.
- **Independent dealers and equipment professionals:** real past workflow examples, handoffs, repeated work, hidden costs, useful outputs, and what would justify replacing or supplementing their current process.

I completed a Great Plains regional I-Corps customer discovery cohort. The next phase is to turn that research into bounded pilot tests with measurable operational outcomes, not claim that meeting activity is a paid customer.

[Read the mentor review brief](docs/MENTOR_REVIEW.md) · [Pilot plan](docs/PILOT_PLAN.md).

## Repository guide

| Resource | What it covers |
| --- | --- |
| [Start here](docs/START_HERE.md) | Five-minute tour for evaluators |
| [Product modules](docs/PRODUCT_MODULES.md) | Existing features, source-tested features, and planned features |
| [Current status](docs/STATUS_SNAPSHOT.md) | Exact release, evidence and permission boundaries |
| [Architecture](docs/ARCHITECTURE.md) | Conceptual data flow, module map, trust boundaries |
| [Autonomy](docs/AUTONOMY.md) | Non-executable engine, shadow mode and prerequisites to live release |
| [Market data](docs/MARKET_DATA.md) | Data types, provenance, comparables and outcome linking |
| [Testing](docs/TESTING.md) | What was tested and what test passes do not prove |
| [Validation](docs/VALIDATION.md) | Audit and research counts with honest limits |
| [Customer discovery](docs/CUSTOMER_DISCOVERY.md) | I-Corps, interviews and hypothesis changes |
| [Differentiation](docs/DIFFERENTIATION.md) | Competitive thesis and why generic AI alone is insufficient |
| [Commercialization](docs/COMMERCIALIZATION.md) | Beachhead users, pilot, revenue hypotheses and metrics |
| [Roadmap](docs/ROADMAP.md) | Sequencing and explicit blocked gates |
| [Mentor review](docs/MENTOR_REVIEW.md) | Requested review and concrete technical questions |
| [Synthetic demo](index.html) | Three predetermined fictional cases, not the live app |
| [Disclosure policy](docs/INFORMATION_BOUNDARY.md) | What is deliberately excluded |

## Important boundaries

The **live application is at [getavlu.com](https://getavlu.com)**. The interactive file in this repository is a **fictional fixed-state illustration**. It does not calculate real offers, obtain source data, access production or demonstrate autonomous purchasing.

This repo is public to make the problem, product discipline, and technical work **reviewable without publishing proprietary code, protected records, confidential business details, or private source history**. It is not an open-source release or a dealer implementation package.

**AvLü™** and **Profit Protection™** are used as pending or unregistered marks. No license to commercialize or redistribute the private application is granted.

© 2026 Nathaniel Schroeder. All rights reserved.
