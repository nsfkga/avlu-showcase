# AvLü™ GitHub Pages publishing

**Source readiness v2.6.0 | October 22, 2026 | Owner: Nathaniel Schroeder**

**Two different websites:** The working product's **Auction Market Tracker v2.18.6 is published on [getavlu.com](https://getavlu.com/#market-engine)**. This GitHub showcase's separate static investor site is only prepared for GitHub Pages until independent hosted-site publication is verified. Publishing either must not redirect or overwrite the other.

## What this means

The public `avlu-showcase` repository already includes three static entry points:

- `index.html`: Marketplace, auction, equipment and business overview
- `investors.html`: investor tour with fictional acquisition and hypothetical SaaS calculators
- `pitch.html`: ten browser-printable presentation slides

All CSS and JavaScript dependencies are local. No private application code, customer records, real offers, paid subscriptions or investor terms are published. The official product at `getavlu.com` remains separate.

## One-time Pages setup

GitHub Pages can host this public static repository without a new paid hosting plan. The final GitHub repository setting is required because GitHub's API connection here does not provide a Pages-site setup action.

1. While signed in to GitHub, open [Pages settings for avlu-showcase](https://github.com/nsfkga/avlu-showcase/settings/pages).
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** as the branch and **/(root)** as the publishing folder.
4. Click **Save**. Use GitHub's **Visit site** link after deployment completes.

GitHub's standard URL pattern for this repo would be `https://nsfkga.github.io/avlu-showcase/`, but **do not advertise it as live until it actually responds with the new website**. The `.nojekyll` file enables direct static file publishing; it does not turn Pages on. The public HTML links to documents use GitHub's formatted Markdown viewer, preserving readable source documents.

## Verify before sharing with investors

- Open the homepage, investor tour, and pitch using the published site address.
- Check CSS and local JS, desktop and mobile layout, and the three fictional cases.
- Verify the investor calculator recalculates the modeled acquisition figures without approving purchases.
- Verify the SaaS demo loads with $8,975 illustrative MRR and $2,455 monthly operating shortfall, not as actual revenue.
- Confirm the pitch contains ten slides and browser Print / Save as PDF works.
- Open some source documentation links, making sure GitHub displays formatted Markdown.
- Confirm the domain `getavlu.com` and the private application have not been redirected.
- Check GitHub Actions on the exact source commit. Passing static tests is not proof of a live Pages deployment.

Run `npm run check` for the offline verification suite, which checks the original demos, the source boundary, and Pages link readiness.

## Hosting status

**Prepared source is not a verified deployment.** The final Pages configuration and live browser verification remain required until successful deployment evidence is available.

Official reference: [Configuring a GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

© 2026 Nathaniel Schroeder. All rights reserved.
