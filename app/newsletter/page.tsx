import type { Metadata } from "next";
import SubscribeForm from "../../components/SubscribeForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "The GrantBoard newsletter: new grants, bounties, and fellowships for AI builders, plus closing deadlines. One short email, no noise.",
  alternates: { canonical: "/newsletter" },
};

const bullets = [
  "New programs the moment they are verified and listed",
  "Closing deadlines so you never miss a window",
  "Application tips: what each program actually funds and how heavy the application is",
  "One short email. No spam, unsubscribe anytime.",
];

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        The GrantBoard newsletter
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Funding windows open and close quietly. We watch the board so you do
        not have to.
      </p>
      <ul className="mt-6 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-neutral-700">
            <span className="text-emerald-700">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <SubscribeForm />
      </div>
      <p className="mt-4 text-xs text-neutral-500">
        We will only email you about grants and board updates. Unsubscribe
        anytime.
      </p>
    </div>
  );
}
