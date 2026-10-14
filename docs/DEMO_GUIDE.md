# Demonstration guide | Live product versus public fixture

**v2.1.0 | Nathaniel Schroeder**

## Two different experiences

**[Working application: getavlu.com](https://getavlu.com).** This is the actual public-facing AvLü prototype. It presents the product positioning and available guided experience. Some owner tools require separate authenticated access.

**[Synthetic showcase: index.html](../index.html).** This repo's illustrative interface uses three invented records with predetermined outputs. It does not call the working application, private API, actual valuation method, or external sources.

## Live walkthrough sequence for a mentor

1. Start with the problem: weak evidence and missing total cost can destroy an apparent spread.
2. Open the working AvLü site and show its public **Start with a listing** path where available.
3. Explain how the intake/review workflow separates stated, missing and verified inputs.
4. Explain the distinction between conditional research economics and any supported final bid.
5. Refer to [Product Modules](PRODUCT_MODULES.md) and [Status](STATUS_SNAPSHOT.md) to distinguish deployed owner tools from source-tested or planned features.
6. End at [Mentor Review](MENTOR_REVIEW.md) with a narrow question about data outcomes, customer economics or platform scope.

Do not show private contacts, proprietary engine source, restricted data exports, unaudited financial projections or operational secrets during an open screen share.

## Synthetic example walkthrough

Select one of the three fictional cases. Point out its "HOLD", "INVESTIGATE" or "REJECT" state and missing evidence. There are deliberately no real maximum bid figures or claims of realized profit in this interface.

**Important:** A fixed synthetic case is a communication aid, not a functional test of production calculation accuracy.

## Show the actual agricultural and auction research, not just three fictional cards

For a mentor or gBETA walkthrough, begin with the working public app, then open [Agricultural Equipment](AGRICULTURAL_EQUIPMENT.md), [Auction Intelligence](AUCTION_INTELLIGENCE.md) and [Auction Case Studies](AG_AUCTION_CASE_STUDIES.md). Explain why the 79-unit historical ledger, public realized-result records, source-specific buyer premiums, and powered-versus-non-powered classification are meaningful research.

The static three-card interface is *not* a substitute for the real app or the auction research. Continuous live market sync and autonomous purchasing remain unverified/off.

© 2026 Nathaniel Schroeder. All rights reserved.
