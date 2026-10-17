import Link from "next/link";
import {
  programs,
  openProgramCount,
  verifiedLiveCount,
  rollingCount,
} from "../data/programs";
import ProgramExplorer from "../components/ProgramExplorer";

const faqs = [
  {
    q: "What grants exist for AI builders?",
    a: "GrantBoard tracks open, no-equity funding for AI builders: Solana Foundation Grants and Ethereum Foundation ESP for crypto and agent infra, Emergent Ventures, Manifund, and the EA Funds Transformative AI Fund for individual builders and AI safety work, Superteam Earn and Tether bounties for fast cash, Z Fellows and the Thiel Fellowship for early builders, Halcyon Futures for AI safety founders, plus Uniswap, Arbitrum, Coefficient Giving, and the GitHub Secure Open Source Fund. Each listing shows the amount, eligibility, deadline, and application weight.",
  },
  {
    q: "Which grant deadlines are closing soon?",
    a: "As of October 17, 2026: Humanity AI's Communities Leading on AI open call (up to $1M) closes Phase 1 on October 21, 2026; Foresight Institute's AI for Science and Safety Nodes RFP ($30k-$100k) closes October 31, 2026; and NLnet's Open Internet Stack open call (€5k-€50k) closes November 3, 2026. O'Shaughnessy Fellowships ($100k) reopens for its 2027 cycle on January 1, 2027.",
  },
  {
    q: "Are these grants really no-equity?",
    a: "Every program on this board is non-dilutive: grants, bounties, and fellowships that take no equity. Each program page states the exact strings attached, such as milestone-based payouts or a grant agreement, so you know what you are signing up for before you apply. Z Fellows is the one exception to double-check: its original terms structured the funding as an optional equity investment.",
  },
  {
    q: "How often is GrantBoard updated?",
    a: "Listings are re-verified against official program pages on a rolling basis, and stale or closed programs are removed. Each card shows its last-verified date. Listings marked unverified come from search-index evidence only: confirm the details on the official page before applying.",
  },
];

export default function Home() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Grants, bounties, and fellowships for AI builders",
    description:
      "Open no-equity funding programs for AI builders: amounts, eligibility, deadlines, verified.",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://grantboard.ai/grants/${p.slug}`,
      description: `${p.amount}. ${p.eligibility}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-neutral-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Every grant, bounty, and fellowship for AI builders.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Deadlines, amounts, eligibility, verified. A living board of
            no-equity funding for independent builders, kept fresh so you never
            miss a window.
          </p>
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-3xl font-bold text-emerald-700">
                {openProgramCount}
              </p>
              <p className="mt-1 text-xs text-neutral-500">Open programs</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-3xl font-bold text-emerald-700">
                {verifiedLiveCount}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Verified on official pages
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-3xl font-bold text-emerald-700">
                {rollingCount}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Accepting applications now
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Open programs
        </h2>
        <ProgramExplorer programs={programs} />

        <section aria-label="Frequently asked questions" className="mt-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-emerald-700 p-8 text-white">
          <h2 className="text-2xl font-bold tracking-tight">
            Never miss a deadline
          </h2>
          <p className="mt-2 max-w-xl text-emerald-100">
            Get new programs and closing deadlines in your inbox. One short
            email, no noise.
          </p>
          <Link
            href="/newsletter"
            className="mt-5 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Join the newsletter
          </Link>
        </section>
      </div>
    </>
  );
}
