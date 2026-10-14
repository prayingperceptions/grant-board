"use client";

import { useState } from "react";

export default function SubmitForm() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [why, setWhy] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Program suggestion: ${name}`);
    const body = encodeURIComponent(
      `Program name: ${name}\nOfficial URL: ${url}\nWhy it fits: ${why}`
    );
    window.location.href = `mailto:tips@grantboard.ai?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400";

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-700">
        Program name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Example Foundation Grants"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-700">
        Official URL
        <input
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.org/grants"
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold text-neutral-700">
        Why it fits AI builders
        <textarea
          required
          value={why}
          onChange={(e) => setWhy(e.target.value)}
          placeholder="Who is eligible, what it funds, why it is no-equity..."
          rows={4}
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Send suggestion
      </button>
      <p className="text-xs text-neutral-500">
        This opens your email app with the details addressed to
        tips@grantboard.ai. We verify every suggestion against the official
        page before listing it.
      </p>
    </form>
  );
}
