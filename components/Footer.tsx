import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold text-neutral-700">GrantBoard</span>:
            every grant, bounty, and fellowship for AI builders. Deadlines,
            amounts, eligibility, verified.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li>
                <Link href="/about" className="hover:text-emerald-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="hover:text-emerald-700">
                  Sponsor
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-emerald-700">
                  Submit a program
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-4 text-xs">
          Listings are research snapshots, not financial advice. Always confirm
          details on the official program page before applying.
        </p>
      </div>
    </footer>
  );
}
