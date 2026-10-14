# Technical review questions | AvLü™

**v2.0.0 | Nathaniel Schroeder**

I have implemented a private web prototype and tested reference decision controls, but full market ingestion, outcome calibration and purchase automation are not proven. I am asking reviewers to challenge the hard parts.

## Data and model integrity

- How would you construct a defensible entity resolver for vehicles, equipment and attachments with missing VINs/serials or inconsistent configurations?
- Which permitted data partnerships or feed models are realistic for current asking observations **and** finalized auction/sale results?
- How should the system show stale, conflicting or weak sources without collapsing uncertainty into one number?
- How would you test comp matching and category calibration against holdout sold results, avoiding data leakage from the future?

## Backend and platform

- How should I structure owner-only access and scoped operational controls when later pilots add more participants?
- What should the durable audit record preserve to make a reference decision reproducible?
- How can a private watch/ingestion service recover from retries, source outages and duplicate notifications?
- What backup/restore and migration acceptance criteria should block the next production upgrade?

## Autonomy and safety

- Which safeguards have to be outside the language model and outside the reference policy evaluator?
- How should shadow-mode disagreements and operator overrides be evaluated?
- What confidence, reserve and operational requirements would justify moving one narrow category into a capped live pilot?
- When should I choose an incumbent integration instead of developing another feature?

## Product proof

- Which workflow metric actually matters most for a buyer?
- How would you run a fair pilot without the founder doing invisible manual cleanup?
- At what point does a general-purpose GPT or established dealer platform make this product redundant?

[See the complete mentor packet](MENTOR_REVIEW.md).

© 2026 Nathaniel Schroeder. All rights reserved.
