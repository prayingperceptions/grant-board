# GrantBoard

A living board of no-equity funding for AI builders: grants, bounties, and fellowships. Deadlines, amounts, eligibility, verified.

Tagline: "Every grant, bounty, and fellowship for AI builders. Deadlines, amounts, eligibility, verified."

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Minimal dependencies: `next`, `react`, `react-dom` only. The Resend newsletter integration calls the Resend REST API directly via `fetch`, so no extra SDK is needed.

## Run locally

```bash
cd /home/hatch/workspace/moolah/grant-board
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_STRIPE_SPONSOR_LINK` | No | Stripe payment link URL for the Sponsor page. If unset, the page shows "payment link coming soon" plus the contact email. |
| `RESEND_API_KEY` | No | Resend API key for newsletter signup. |
| `RESEND_AUDIENCE_ID` | No | Resend audience ID the signup adds contacts to. |

If the Resend variables are not set, `/api/subscribe` returns `{ok:false, message:"Newsletter launching soon..."}` gracefully instead of crashing.

## Deploy on Vercel

1. Push this directory to a GitHub repo (see note below).
2. In Vercel, import the repo. Framework preset: Next.js. No custom build settings needed (`npm run build`, output is automatic).
3. Add the environment variables above in the Vercel project settings (all optional for a first deploy).
4. Deploy. The sitemap (`/sitemap.xml`), robots (`/robots.txt`), and `llms.txt` are generated/served automatically.

## GitHub repo note

The GitHub App integration used by the owner's automation cannot create repositories (it lacks that permission). The owner must create the repo manually (e.g. `prayingperceptions/grant-board`), then the code can be pushed and connected to Vercel.

## Updating listings

Seed data lives in `data/programs.ts`, encoded from the builder-grants research report (2026-10-14). Programs with `confidence: "index"` carry a visible "unverified, confirm on the official page" note. To add or update a program, edit that file: the homepage, detail pages, sitemap, and JSON-LD all render from it.
