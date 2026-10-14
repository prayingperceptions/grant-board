# GrantBoard v1: judgment calls

## Seed data
- The task said "all 8 ranked programs"; the research report's ranked shortlist actually contains 9 apply-now programs (Solana, Emergent Ventures, EF ESP, Manifund, Superteam Earn, Uniswap, Long-Term Future Fund, Coefficient Giving, Arbitrum). All 9 are encoded; dropping Arbitrum would have removed a real, relevant program.
- Honorable mentions (O'Shaughnessy, Gitcoin GG25, Optimism Retro, Base Batches, MATS, etc.) were not encoded: they are closed, paused, or not yet open, so they do not belong on an "apply now" board. They are candidates for a future watchlist section.
- Fields were only filled from the report. Where the report was vague (e.g. exact current EF ESP Wishlist areas), the listing says so or points at the official page instead of inventing specifics.
- `confidence: "index"` (Superteam Earn, LTFF, Coefficient Giving, Arbitrum) gets a visible "unverified, confirm on the official page" note on both the card and the detail page, per the brief.
- Default sort: all 9 are rolling, so the board preserves the report's fit-rank order.

## Scope kept minimal
- No database: listings are a typed TS module (`data/programs.ts`). A CMS or DB is overkill for 9 listings and would complicate autonomous maintenance.
- No Resend SDK: `/api/subscribe` calls the Resend REST API with `fetch`. Keeps `package.json` at next/react/react-dom only.
- Submit form uses `mailto:` (no backend), per the brief.
- Stripe sponsorship is a single env-driven payment link (`NEXT_PUBLIC_STRIPE_SPONSOR_LINK`); per-tier links can be added later by extending the tiers array.

## Design/copy
- Light theme, single accent (emerald-700). No em dashes anywhere in copy, per the owner's standing rule.
- Canonical domain assumed as `https://grantboard.ai` for metadata, sitemap, robots, JSON-LD, and llms.txt. Change `metadataBase` in `app/layout.tsx`, `BASE` in `app/sitemap.ts`, `robots.ts`, and `public/llms.txt` if the real domain differs.
- Stats row uses honest counts (open programs, verified-live count, rolling count) rather than a fabricated "total funding" sum, since amounts are ranges.

## Scaffold quirks
- `create-next-app` failed on first run with EPERM on its config chown; reran with `XDG_CONFIG_HOME=/tmp/cna-config` and it completed. The scaffold landed in a temp dir and was moved to the required working directory; `package.json` name fixed to `grant-board`.
