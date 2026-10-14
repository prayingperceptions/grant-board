import Link from "next/link";

const links = [
  { href: "/", label: "Board" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4"
      >
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-emerald-700">
            GrantBoard
          </span>
          <span className="hidden text-xs text-neutral-500 sm:inline">
            Funding for AI builders
          </span>
        </Link>
        <ul className="flex items-center gap-4 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-neutral-600 transition-colors hover:text-emerald-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
