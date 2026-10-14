"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Program, Category, FundingType } from "../data/programs";

type CategoryFilter = Category | "all";
type TypeFilter = FundingType | "all";
type DeadlineFilter = "all" | "rolling" | "fixed";

function badgeClass(p: Program): string {
  if (p.rolling) return "bg-emerald-100 text-emerald-800";
  return "bg-amber-100 text-amber-800";
}

function ProgramCard({ p }: { p: Program }) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={`/grants/${p.slug}`} className="hover:text-emerald-700">
            {p.name}
          </Link>
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass(p)}`}
        >
          {p.rolling ? "Rolling" : "Fixed deadline"}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-neutral-900">{p.amount}</p>
      <p className="mt-1 text-sm text-neutral-600">{p.eligibility}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700">
          {p.fundingType}
        </span>
        {p.categories.map((c) => (
          <span
            key={c}
            className="rounded bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700"
          >
            {c}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-neutral-500">
        {p.confidence === "verified live" ? (
          <>Verified {p.verifiedDate}</>
        ) : (
          <>
            <span className="font-semibold text-amber-700">
              Unverified: confirm on the official page.
            </span>{" "}
            Last checked {p.verifiedDate}
          </>
        )}{" "}
        <Link
          href={`/grants/${p.slug}`}
          className="ml-1 font-medium text-emerald-700 hover:underline"
        >
          Details
        </Link>
      </p>
    </article>
  );
}

export default function ProgramExplorer({ programs }: { programs: Program[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [fundingType, setFundingType] = useState<TypeFilter>("all");
  const [deadline, setDeadline] = useState<DeadlineFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((p) => {
      if (category !== "all" && !p.categories.includes(category)) return false;
      if (fundingType !== "all" && p.fundingType !== fundingType) return false;
      if (deadline === "rolling" && !p.rolling) return false;
      if (deadline === "fixed" && p.rolling) return false;
      if (q) {
        const hay =
          `${p.name} ${p.amount} ${p.eligibility} ${p.fitNote} ${p.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [programs, query, category, fundingType, deadline]);

  const selectClass =
    "rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800";

  return (
    <section aria-label="Grant listings">
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-1 text-xs font-semibold text-neutral-600">
          Search
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. solana, ai safety, bounty"
            className="rounded-lg border border-neutral-300 px-3 py-2 text-sm font-normal text-neutral-900 placeholder:text-neutral-400"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-neutral-600">
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryFilter)}
            className={selectClass}
          >
            <option value="all">All categories</option>
            <option value="AI">AI</option>
            <option value="crypto">Crypto</option>
            <option value="general">General</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-neutral-600">
          Funding type
          <select
            value={fundingType}
            onChange={(e) => setFundingType(e.target.value as TypeFilter)}
            className={selectClass}
          >
            <option value="all">All types</option>
            <option value="grant">Grants</option>
            <option value="bounty">Bounties</option>
            <option value="fellowship">Fellowships</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-semibold text-neutral-600">
          Deadline
          <select
            value={deadline}
            onChange={(e) => setDeadline(e.target.value as DeadlineFilter)}
            className={selectClass}
          >
            <option value="all">Any deadline</option>
            <option value="rolling">Rolling</option>
            <option value="fixed">Fixed</option>
          </select>
        </label>
      </div>

      <p className="mb-4 text-sm text-neutral-600" role="status">
        Showing {filtered.length} of {programs.length} programs.
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500">
          No programs match those filters. Try clearing the search or widening
          the filters.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((p) => (
            <ProgramCard key={p.slug} p={p} />
          ))}
        </div>
      )}
    </section>
  );
}
