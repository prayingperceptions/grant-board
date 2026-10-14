import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature your program",
  description:
    "Sponsor GrantBoard: featured listings, category sponsorships, and newsletter placements in front of AI builders hunting for funding.",
  alternates: { canonical: "/sponsor" },
};

const tiers = [
  {
    name: "Featured listing",
    price: "$49/mo",
    blurb: "Your program pinned to the top of the board with a featured badge.",
    points: [
      "Pinned placement above organic listings",
      "Featured badge on the card and detail page",
      "Link directly to your application page",
    ],
  },
  {
    name: "Category sponsor",
    price: "$149/mo",
    blurb: "Own the AI, crypto, or general category for a month.",
    points: [
      "Banner on every listing in your category",
      "Logo on the category filter and detail pages",
      "Everything in Featured listing",
    ],
  },
  {
    name: "Newsletter sponsor",
    price: "$99/issue",
    blurb: "One dedicated placement in the deadline-reminder newsletter.",
    points: [
      "Top placement in one issue",
      "Short write-up of your program (you approve the copy)",
      "Sent to builders actively hunting for funding",
    ],
  },
];

export default function SponsorPage() {
  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_SPONSOR_LINK;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Feature your program
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
        Put your grant, bounty, or fellowship in front of AI builders who are
        actively looking for funding. Simple pricing, no sales calls.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold">{t.name}</h2>
            <p className="mt-1 text-3xl font-bold text-emerald-700">{t.price}</p>
            <p className="mt-3 text-sm text-neutral-600">{t.blurb}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-neutral-700">
              {t.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="text-emerald-700">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        {stripeLink ? (
          <a
            href={stripeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-emerald-700 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Become a sponsor
          </a>
        ) : (
          <>
            <p className="text-sm font-semibold text-neutral-700">
              Online payment link coming soon.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              To sponsor, email{" "}
              <a
                href="mailto:sponsor@grantboard.ai"
                className="font-medium text-emerald-700 hover:underline"
              >
                sponsor@grantboard.ai
              </a>{" "}
              with the tier you want and your program URL.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
