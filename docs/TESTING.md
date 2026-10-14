# Engineering verification | Evidence and limits

**v2.0.0 | Nathaniel Schroeder**

AvLü has accumulated substantial private CI, browser, runtime and policy testing. I summarize public-safe evidence here without exporting the test fixtures, implementation internals or private deployment routes.

| Area | Recorded evidence | What it does not establish |
| --- | --- | --- |
| Historical formula consistency | 150 rows checked, 0 reported mismatches | Realized market accuracy or profit |
| Synthetic QA regression | 2,000 scenario packets × 24 assertions = **48,000 passing assertions** | Any real dealer transaction or paid pilot |
| Reference decision engine | **51/51 synthetic checks passed** | Live buying rights |
| Isolated PostgreSQL raw restore | Passed with the actual storage adapter and disposable data | Production owner backup or disaster recovery |
| Raw-State Attestor | Source and unit tests passed; all 7 related PR workflows and 5 observed post-merge checks passed | Attestor execution on production or presence of a live raw backup |
| Source / Watchlist tests | Synthetic history, revision conflict, import, export, privacy and PostgreSQL flows passed in recorded CI | Confirmed real owner sign-in/save/export on deployed v2.14.0 |
| Published public access boundary | Last verified v2.13.0 recorded **118 anonymous production checks** and additional expected private-route denials | All authenticated data privacy and caching behavior |
| Public user-journey verification | Recorded browser testing included research, contact and demo journeys | Paid customer adoption |
| Accessibility | Recorded browser suites included desktop, phone and automated accessibility scans with no reported issues in passing runs | Full manual accessibility testing on all devices |
| Shadow acquisition | Non-executable source and server controls tested | Accepted live transaction adapter, kill-switch operation or authority to send bids |

## Testing philosophy

- Keep **functional test pass**, **source-integrated**, **published**, and **production-accepted** as separate states.
- Fail closed when material source evidence or cost inputs are unknown.
- Repeat behavioral checks after changes to protected routes or finance controls.
- Ensure a synthetic `APPROVE` state cannot become a purchase request.
- Track environment/version identity so a successful CI run for one commit cannot be attributed to a different deployed build.
- Prefer testable corrections to claims of guaranteed market prediction.

## Remaining tests that matter most

1. Full authenticated owner read, edit, save, reload, export and permissions validation on the published host.
2. Production raw-record attestation and authorized backup before versioned data migration.
3. Actual-input privacy tests, recovery/rollback and emergency disable acceptance.
4. Human-reviewed market records linked to finished purchases, with original decision-time inputs preserved.
5. Bounded pilots measuring time saved, evidence omissions, override rate and actual user return.

I can provide narrower implementation evidence confidentially after reviewer scope and access terms are agreed.

© 2026 Nathaniel Schroeder. All rights reserved.
