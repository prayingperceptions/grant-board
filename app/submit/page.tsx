import type { Metadata } from "next";
import SubmitForm from "../../components/SubmitForm";

export const metadata: Metadata = {
  title: "Submit a program",
  description:
    "Suggest a grant, bounty, or fellowship for AI builders. We verify every suggestion against the official page before listing it.",
  alternates: { canonical: "/submit" },
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Submit a program
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Know a grant, bounty, or fellowship that should be on this board? Send
        it our way. We verify every suggestion against the official page before
        listing it, and we never list programs with age caps that exclude
        working builders or equity strings hidden in the fine print.
      </p>
      <SubmitForm />
    </div>
  );
}
