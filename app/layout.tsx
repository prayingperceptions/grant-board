import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grantboard.ai"),
  title: {
    default: "GrantBoard: grants, bounties, and fellowships for AI builders",
    template: "%s | GrantBoard",
  },
  description:
    "Every grant, bounty, and fellowship for AI builders. Deadlines, amounts, eligibility, verified. A living board of no-equity funding for independent builders, kept fresh.",
  keywords: [
    "AI grants",
    "AI builder grants",
    "no equity grants",
    "AI fellowships",
    "crypto grants",
    "developer bounties",
    "AI safety grants",
    "Solana grants",
    "Ethereum Foundation grants",
    "Emergent Ventures",
  ],
  authors: [{ name: "GrantBoard" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GrantBoard",
    title: "GrantBoard: grants, bounties, and fellowships for AI builders",
    description:
      "Every grant, bounty, and fellowship for AI builders. Deadlines, amounts, eligibility, verified.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrantBoard: grants, bounties, and fellowships for AI builders",
    description:
      "Every grant, bounty, and fellowship for AI builders. Deadlines, amounts, eligibility, verified.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
