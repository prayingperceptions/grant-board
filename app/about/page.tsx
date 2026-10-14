import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "What GrantBoard is, how listings are verified, and how often the board is updated.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About GrantBoard
      </h1>
      <p className="mt-4 leading-relaxed text-neutral-700">
        GrantBoard is a living board of no-equity funding for AI builders:
        grants, bounties, and fellowships. Every listing shows the amount, the
        strings attached, who is eligible, the deadline, and how heavy the
        application is, so you can decide in minutes whether a program is worth
        your time.
      </p>

      <h2 className="mt-10 text-2xl font-bold tracking-tight">
        How verification works
      </h2>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
        <li>
          <strong>Verified live:</strong> the official program page was read
          directly and the details were confirmed there. The verification date
          is shown on the listing.
        </li>
        <li>
          <strong>Unverified (index):</strong> the listing is based on
          search-index evidence and has not been re-read on the official page.
          These carry a visible warning: confirm the details on the official
          page before applying.
        </li>
        <li>
          Defunct, paused, or scam-adjacent programs are never listed. If a
          program closes or changes terms, the listing is updated or removed.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold tracking-tight">
        Update cadence
      </h2>
      <p className="mt-4 leading-relaxed text-neutral-700">
        The board is reviewed continuously: new programs are researched and
        added, existing listings are re-verified against official pages, and
        stale or closed programs are removed. Deadline-driven programs get
        priority because a missed window is a missed check.
      </p>

      <h2 className="mt-10 text-2xl font-bold tracking-tight">
        What we do not list
      </h2>
      <p className="mt-4 leading-relaxed text-neutral-700">
        No equity investments disguised as grants, no programs with age caps
        that exclude working builders, and no pay-to-apply schemes. If funding
        takes a cut of your company, it does not belong here.
      </p>
    </div>
  );
}
