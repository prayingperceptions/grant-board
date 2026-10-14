import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { programs, getProgram } from "../../../data/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return { title: "Program not found" };
  return {
    title: `${p.name}: ${p.amount}`,
    description: `${p.name}: ${p.amount}. ${p.eligibility} Deadline: ${p.deadline}.`,
    alternates: { canonical: `/grants/${p.slug}` },
    openGraph: {
      title: `${p.name} | GrantBoard`,
      description: `${p.amount}. ${p.eligibility}`,
      url: `/grants/${p.slug}`,
      type: "article",
    },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Grant",
    name: p.name,
    description: `${p.amount}. ${p.eligibility} ${p.fitNote}`,
    url: `https://grantboard.ai/grants/${p.slug}`,
    funder: { "@type": "Organization", name: p.name },
  };

  const rows: [string, string][] = [
    ["Amount", p.amount],
    ["Equity / strings", p.equityStrings],
    ["Eligibility", p.eligibility],
    ["Deadline", p.deadline],
    ["Application weight", p.applicationWeight],
    ["Type", `${p.fundingType} (${p.categories.join(", ")})`],
    [
      "Verification",
      p.confidence === "verified live"
        ? `Verified on the official page, ${p.verifiedDate}`
        : `Unverified (index evidence only), last checked ${p.verifiedDate}. Confirm on the official page.`,
    ],
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-emerald-700">
            Board
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">{p.name}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{p.name}</h1>
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              p.rolling
                ? "bg-emerald-100 text-emerald-800"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            {p.rolling ? "Rolling" : "Fixed deadline"}
          </span>
        </div>

        {p.confidence === "index" && (
          <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Unverified:</strong> this listing is based on search-index
            evidence, not a fresh read of the official page. Confirm the amount,
            deadline, and eligibility on the official page before applying.
          </p>
        )}

        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200">
          <table className="w-full text-sm">
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label} className="border-b border-neutral-100 last:border-0">
                  <th
                    scope="row"
                    className="w-40 bg-neutral-50 px-4 py-3 text-left font-semibold text-neutral-700"
                  >
                    {label}
                  </th>
                  <td className="px-4 py-3 text-neutral-800">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section aria-label="Why it fits" className="mt-8">
          <h2 className="text-xl font-bold tracking-tight">Why it fits</h2>
          <p className="mt-2 leading-relaxed text-neutral-700">{p.fitNote}</p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={p.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Apply on the official page
          </a>
          <Link
            href="/"
            className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 hover:border-emerald-700 hover:text-emerald-700"
          >
            Back to the board
          </Link>
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          Last verified {p.verifiedDate}. Details change: always confirm on the
          official page.
        </p>
      </div>
    </>
  );
}
