export type Category = "AI" | "crypto" | "general";
export type FundingType = "grant" | "bounty" | "fellowship";
export type Confidence = "verified live" | "index";

export interface Program {
  slug: string;
  name: string;
  amount: string;
  equityStrings: string;
  eligibility: string;
  deadline: string;
  rolling: boolean;
  applicationWeight: string;
  fitNote: string;
  applyUrl: string;
  categories: Category[];
  fundingType: FundingType;
  tags: string[];
  verifiedDate: string;
  confidence: Confidence;
}

/**
 * Seed data, encoded from the builder-grants research report (2026-10-14).
 * confidence "verified live" = the official page was read on the date shown.
 * confidence "index" = search-index evidence only; amounts and details should
 * be confirmed on the official page. Nothing here is invented.
 * 2026-10-15: added GitHub Secure Open Source Fund and Foresight Institute
 * AI for Science & Safety Nodes RFP 2026; removed Long-Term Future Fund (EA
 * Funds officially closed it in 2026) and replaced it with its successor,
 * the Transformative AI Fund. Sorted by fit: rolling first, then report rank.
 * 2026-10-16: added Z Fellows and ChainGPT Web3 AI Grant (both verified on
 * official pages); re-verified Humanity AI (still open, Phase 1 due Oct 21)
 * and Foresight Nodes RFP (still open, due Oct 31). Digital Science Catalyst
 * Grant 2026 excluded: applications closed Oct 5, 2026.
 * 2026-10-17: added Halcyon Futures (career-transition grants up to $500K,
 * official site read), Thiel Fellowship ($250k, official site read), and the
 * NLnet Open Internet Stack open call (EU €5k-€50k, deadline Nov 3, 2026;
 * honest caveat: flagship Restack fund excludes AI projects under 1M users).
 * Re-verified Humanity AI (Phase 1 still due Oct 21, 4 days) and Foresight
 * Nodes RFP (still due Oct 31). O'Shaughnessy Fellowships 2026 closed Apr 30;
 * 2027 cycle reopens Jan 1, 2027: watchlist, not yet listed.
 */
export const programs: Program[] = [
  {
    slug: "solana-foundation-grants",
    name: "Solana Foundation Grants",
    amount: "Milestone-based, sized to proposal (historically five- to six-figure)",
    equityStrings: "No equity on standard grants; funding released against milestones under a grant agreement",
    eligibility: "Anyone: individuals, independent teams, companies, nonprofits, universities. No age cap; US fine.",
    deadline: "Rolling (review ~1 week, decision ~3 weeks)",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "Best fit for crypto tooling: open-source tooling, security, and infra on Solana are their stated sweet spot. A shipped token-risk API doubles as proof of work.",
    applyUrl: "https://solana.org/grants-funding",
    categories: ["crypto"],
    fundingType: "grant",
    tags: ["solana", "open source", "infra", "security"],
    verifiedDate: "2026-10-14",
    confidence: "verified live",
  },
  {
    slug: "emergent-ventures",
    name: "Emergent Ventures",
    amount: "Typically $1k-$50k; outliers higher",
    equityStrings: "None. Non-dilutive fellowship/grant with minimal reporting (a short update later).",
    eligibility: "13+, global. Individuals and tiny teams; funds people, not companies.",
    deadline: "Rolling (form says ~1 week review; real-world often a few weeks)",
    rolling: true,
    applicationWeight: "Light",
    fitNote:
      "Built exactly for independent builders. Note: Emergent Ventures tests submissions and rejects AI-written applications, so the proposal must be written by the applicant.",
    applyUrl: "https://mercatus.tfaforms.net/5099527",
    categories: ["general"],
    fundingType: "fellowship",
    tags: ["individuals", "no equity", "global"],
    verifiedDate: "2026-10-14",
    confidence: "verified live",
  },
  {
    slug: "ethereum-foundation-esp",
    name: "Ethereum Foundation Ecosystem Support Program",
    amount: "Project grants historically $5k-$500k+",
    equityStrings: "Non-dilutive grants (fiat or crypto).",
    eligibility: "Individuals and small teams building free/open-source public goods aligned with CROPS principles.",
    deadline: "Rolling, against active Wishlist areas and open RFPs",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "Agent safety tooling and OSS frameworks on Base (an Ethereum L2) plausibly fit Wishlist/RFP areas. Check the current Wishlist before applying.",
    applyUrl: "https://esp.ethereum.foundation",
    categories: ["crypto", "AI"],
    fundingType: "grant",
    tags: ["ethereum", "public goods", "open source"],
    verifiedDate: "2026-10-14",
    confidence: "verified live",
  },
  {
    slug: "manifund",
    name: "Manifund (incl. Falcon Fund)",
    amount: "Commonly $1k-$25k; Falcon Fund does rapid 1-week $25k-$150k grants",
    equityStrings: "No equity; public proposal on the marketplace.",
    eligibility: "Individuals, charities, and for-profits working on AI safety. Global (some jurisdiction restrictions).",
    deadline: "Rolling (post a proposal any time; regrantors decide)",
    rolling: true,
    applicationWeight: "Light",
    fitNote:
      "Best fit for agent-safety tooling: frame the work as reducing catastrophic risk from advanced AI. Projects with public outputs (benchmarks, evals, open tools) do best.",
    applyUrl: "https://manifund.org",
    categories: ["AI"],
    fundingType: "grant",
    tags: ["ai safety", "regranting", "individuals"],
    verifiedDate: "2026-10-14",
    confidence: "verified live",
  },
  {
    slug: "github-secure-oss-fund",
    name: "GitHub Secure Open Source Fund",
    amount: "$10,000 per project (paid $6,000 during the program, $2,000 at each 6- and 12-month check-in) plus $10,000 in Azure credits",
    equityStrings: "None. Non-dilutive funding to maintainers, plus a 3-week security education program with the GitHub Security Lab.",
    eligibility:
      "Current maintainers of open source projects, 18+, active GitHub profile, in a GitHub Sponsors-supported region. Project must be open-source-first with demonstrated community traction, a clear governance structure, and a clear open source license; willingness to engage on security.",
    deadline: "Rolling (applications open; program runs in sessions)",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "Strong fit for shipped open-source AI tooling: agent-safety libraries, MCP servers, and eval harnesses with real users. Expect ~15 hours over 3 weeks of workshops plus the 6- and 12-month check-ins; funding is released against program milestones.",
    applyUrl: "https://resources.github.com/github-secure-open-source-fund/",
    categories: ["AI", "general"],
    fundingType: "grant",
    tags: ["open source", "security", "maintainers", "ai tooling"],
    verifiedDate: "2026-10-15",
    confidence: "verified live",
  },
  {
    slug: "transformative-ai-fund",
    name: "EA Funds: Transformative AI Fund",
    amount: "Typically $10,000-$150,000; rarely exceeding $300,000",
    equityStrings: "None; charitable grants from EA Funds.",
    eligibility:
      "Individuals, new organizations, and existing organizations getting a new project off the ground. Work must address the transition to transformative AI: technical AI safety research, policy analysis, forecasting, advocacy, demonstration projects, researcher training, or field-building infrastructure.",
    deadline: "Rolling (always-open application via the EA Funds portal)",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "EA Funds' official successor to the Long-Term Future Fund, which closed in 2026. Strong fit for the agent-safety/alignment angle; a credible pilot or milestones improve odds. A live application went through the EA Funds portal successfully on 2026-10-15.",
    applyUrl: "https://www.givingwhatwecan.org/charities/transformative-ai-fund",
    categories: ["AI"],
    fundingType: "grant",
    tags: ["ai safety", "transformative ai", "x-risk", "individuals"],
    verifiedDate: "2026-10-15",
    confidence: "verified live",
  },
  {
    slug: "superteam-earn",
    name: "Superteam Earn",
    amount: "Bounties $300-$4,000; open grants up to $10,000 USDC",
    equityStrings: "None. Paid on submission/acceptance.",
    eligibility: "Open bounty listings; anyone can compete.",
    deadline: "Rolling (listings appear continuously)",
    rolling: true,
    applicationWeight: "Very light",
    fitNote:
      "Fastest cash for Solana work. A shipped token-risk API doubles as proof of work for the Solana Foundation grant above.",
    applyUrl: "https://earn.superteam.fun",
    categories: ["crypto"],
    fundingType: "bounty",
    tags: ["solana", "bounties", "fast cash"],
    verifiedDate: "2026-10-14",
    confidence: "index",
  },
  {
    slug: "uniswap-foundation-grants",
    name: "Uniswap Foundation Grants",
    amount: "$10k for small tooling up to $1M+ for strategic initiatives",
    equityStrings: "Non-dilutive grants. Much funding is proactively sourced; inbound intake is rolling.",
    eligibility: "Builders in the Uniswap/Unichain ecosystem. Categories: Ecosystem, Research, Security, Governance.",
    deadline: "Rolling",
    rolling: true,
    applicationWeight: "Medium-heavy",
    fitNote:
      "Viable if your work touches Uniswap v4 hooks, Unichain, or DeFi tooling more broadly. Weaker fit for pure Solana work.",
    applyUrl: "https://www.uniswapfoundation.org/grants",
    categories: ["crypto"],
    fundingType: "grant",
    tags: ["defi", "uniswap", "unichain"],
    verifiedDate: "2026-10-14",
    confidence: "verified live",
  },
  {
    slug: "coefficient-giving-career-funding",
    name: "Coefficient Giving: Career Development and Transition Funding",
    amount: "Transition runway, sized to need",
    equityStrings: "None; philanthropic.",
    eligibility:
      "People at any career stage transitioning into catastrophic-risk AI safety work; must show deep engagement, evidence of ability, a career theory of change, genuine funding need, and a specific budget.",
    deadline: "Rolling (open until further notice)",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "Good option for a funded runway to pivot deeper into agent safety rather than funding a specific product.",
    applyUrl:
      "https://coefficientgiving.org/funds/global-catastrophic-risks-opportunities/career-development-and-transition-funding/",
    categories: ["AI"],
    fundingType: "fellowship",
    tags: ["ai safety", "career transition", "runway"],
    verifiedDate: "2026-10-14",
    confidence: "index",
  },
  {
    slug: "arbitrum-foundation-grants",
    name: "Arbitrum Foundation Grants / Trailblazer AI",
    amount: "$20k-$150k in ARB (milestone-based); Trailblazer AI pool $1M with $10k cap per submission",
    equityStrings: "Non-dilutive grants, paid in ARB.",
    eligibility: "Projects deploying on Arbitrum chains. Trailblazer: deployed AI agents, agent templates, or capability integrations.",
    deadline: "Rolling",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "AI-agent infra fits the Trailblazer theme well, but requires an Arbitrum deployment. Treat as an expansion play, not the lead program.",
    applyUrl: "https://arbitrum.foundation/grants",
    categories: ["crypto", "AI"],
    fundingType: "grant",
    tags: ["arbitrum", "ai agents", "l2"],
    verifiedDate: "2026-10-14",
    confidence: "index",
  },
  {
    slug: "tether-developer-grants",
    name: "Tether Developer Grants",
    amount: "~$1,500-$4,000 per task, no cap on total payouts; paid in USD₮ or BTC",
    equityStrings: "None; build-to-earn bounties tied to defined deliverables.",
    eligibility: "Developers anywhere; apply to active tasks on the official portal.",
    deadline: "Rolling (apply to active tasks now)",
    rolling: true,
    applicationWeight: "Light",
    fitNote:
      "Task-based: ship a defined deliverable, get paid on completion. Strong fit for wallet/agent infra, on-device AI (QVAC), technical docs, and research deliverables.",
    applyUrl: "https://tether.dev",
    categories: ["crypto", "AI"],
    fundingType: "bounty",
    tags: ["tether", "qvac", "wdk", "local-first ai", "wallet infra"],
    verifiedDate: "2026-10-14",
    confidence: "verified live",
  },
  {
    slug: "z-fellows",
    name: "Z Fellows Program",
    amount: "$10,000 in financial support for early builders (reported terms describe an optional equity investment; confirm current terms on the application)",
    equityStrings:
      "Not a pure cash grant in its original terms: the $10k was structured as an optional equity investment. Confirm the current funding instrument before accepting.",
    eligibility:
      "Technical builders of all ages working on a side project or early startup: students, dropouts, recent grads, and full-time employees welcome. Worldwide; no registered company or revenue required.",
    deadline: "Rolling (cohorts run continuously; application open now)",
    rolling: true,
    applicationWeight: "Light",
    fitNote:
      "A one-week intensive plus $10k for very early builders, with heavy AI/dev-tool representation among alumni: founders of Cursor, Cognition, Mintlify, Greptile, Listen Labs, and Bland went through. Strong if you have an agent prototype and want a week with billion-dollar founders as mentors.",
    applyUrl: "https://zfellows.com",
    categories: ["AI", "general"],
    fundingType: "fellowship",
    tags: ["fellowship", "accelerator", "early builders", "ai", "dev tools"],
    verifiedDate: "2026-10-16",
    confidence: "verified live",
  },
  {
    slug: "chaingpt-web3-ai-grant",
    name: "ChainGPT Web3 AI Grant",
    amount:
      "$1M program pool. Research tier: up to $5k in API. Builder tier: up to $10k in API credits + $5k cash. Growth tier: up to $20k in API credits + $10k cash.",
    equityStrings:
      "None; grant support is tied to integration milestones. Cash tiers require traction-based milestones, a visible 'Powered by ChainGPT AI' credit, and 12 months of maintained integration.",
    eligibility:
      "Blockchain/AI projects that genuinely integrate ChainGPT's Core APIs or SDKs. Cash grants additionally require substantial current active users (≥20k MAU/DAU floor in the cash grant rules) and meaningful technical lift or open-source contributions.",
    deadline: "Rolling (pipeline: pre-qualification, intro call, PoC, review, production launch, distribution)",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "Natural fit for agent builders already in crypto: the Builder tier's $5k cash plus $10k credits suits an early MVP, and ChainGPT itself ships open-source agent tooling (AgenticOS). The gate is real: your product must run on ChainGPT's AI.",
    applyUrl: "https://www.chaingpt.org/web3-ai-grant",
    categories: ["crypto", "AI"],
    fundingType: "grant",
    tags: ["web3", "ai agents", "api credits", "open source"],
    verifiedDate: "2026-10-16",
    confidence: "verified live",
  },
  {
    slug: "halcyon-futures",
    name: "Halcyon Futures",
    amount:
      "Career transition grants up to $500K; nonprofit seed grants up to $3M; venture investments up to $5M",
    equityStrings:
      "Grants are non-dilutive. The separate VC arm takes equity on its investments; career-transition and seed grants do not.",
    eligibility:
      "Founders and builders at career inflection points moving into AI safety/alignment, biosecurity, or critical cybersecurity; new nonprofit projects and mission-driven early-stage companies.",
    deadline:
      "Rolling (reach out to hello@halcyonfutures.org; also runs incubations and founder retreats)",
    rolling: true,
    applicationWeight: "Light",
    fitNote:
      "A founder fund for the exact pivot many AI builders are making: career-transition grants fund the research that becomes an AI safety startup. Goodfire, AIUC, and Transluce all started with Halcyon grants before raising venture rounds.",
    applyUrl: "https://halcyonfutures.org",
    categories: ["AI"],
    fundingType: "grant",
    tags: ["ai safety", "career transition", "founders", "seed"],
    verifiedDate: "2026-10-17",
    confidence: "verified live",
  },
  {
    slug: "thiel-fellowship",
    name: "Thiel Fellowship",
    amount: "$250,000 over two years",
    equityStrings:
      "None; it is a grant, not an investment. Fellows keep 100% of their work.",
    eligibility:
      "Young builders who skip or stop out of college to build new things. Widely reported as 22-and-under; the official page says 'young people'.",
    deadline: "Rolling (applications accepted continuously)",
    rolling: true,
    applicationWeight: "Medium",
    fitNote:
      "The classic drop-out-and-build fellowship: $250k plus the Thiel network. The age bar makes it a niche fit; if you are past it, Emergent Ventures and the O'Shaughnessy Fellowships (2027 cycle reopens Jan 1, 2027) are the open-ended alternatives on this board.",
    applyUrl: "https://thielfellowship.org",
    categories: ["general"],
    fundingType: "fellowship",
    tags: ["fellowship", "young builders", "no equity"],
    verifiedDate: "2026-10-17",
    confidence: "verified live",
  },
  {
    slug: "humanity-ai-open-call",
    name: "Humanity AI: Communities Leading on AI",
    amount: "$75,000-$150,000; $150,000-$500,000; $500,000-$1,000,000 (three tiers, $10M total)",
    equityStrings: "None; philanthropic grants with terms up to 3 years.",
    eligibility:
      "U.S.-based initiatives led by a 501(c)(3); individuals may apply through a fiscal sponsor. Issue areas: education, labor and economy, humanities/arts/culture. No research-only, AI-literacy, or adoption-only proposals. Priority to open-weight/open-source AI.",
    deadline: "Phase 1 due Oct 21, 2026, 4:59pm PT / 7:59pm ET",    rolling: false,
    applicationWeight: "Heavy",
    fitNote:
      "Real money for community-led AI: workable for a builder who can partner with a 501(c)(3) or fiscal sponsor on a community-owned AI effort. Finalists notified Dec 2026; awards announced spring 2027. Phase 1 is a light application, finalists add budget and measurement plan. Only 4 days left as of Oct 17: apply before Wednesday evening.",
    applyUrl: "https://humanityai.ai/open-call/",
    categories: ["AI", "general"],
    fundingType: "grant",
    tags: ["philanthropy", "community ai", "open source", "deadline"],
    verifiedDate: "2026-10-17",
    confidence: "verified live",
  },
  {
    slug: "foresight-ai-nodes-rfp-2026",
    name: "Foresight Institute AI for Science & Safety Nodes RFP 2026",
    amount: "Typically $30,000-$100,000; larger amounts possible for the right project",
    equityStrings: "None; philanthropic grants. Usually paid as a lump sum; multi-year projects may be paid in tranches against milestones.",
    eligibility:
      "Individuals, teams, and organizations (nonprofit and for-profit; for-profits must justify grant need). Work products (code, data, outputs) must be open-sourced. Projects should target reduced existential risk from AI with concrete milestones within 1-3 years; in-person participation at the SF/Berlin nodes is strongly prioritized.",
    deadline: "October 31, 2026, 23:59 PDT",
    rolling: false,
    applicationWeight: "Medium-heavy",
    fitNote:
      "Best fit for AI-safety builders: agent accountability, decentralized alignment, human empowerment, local AI compute, and AI-first science (bio, neuro, nano). The 2026 RFP prioritizes AI-first projects that use AI to achieve their goals. Expect ~3-month review after the deadline plus due diligence.",
    applyUrl: "https://foresight.org/grants/ai-science-safety-nodes-rfp/",
    categories: ["AI"],
    fundingType: "grant",
    tags: ["ai safety", "x-risk", "open source", "deadline", "coordination"],
    verifiedDate: "2026-10-17",
    confidence: "verified live",
  },
  {
    slug: "nlnet-open-internet-stack",
    name: "NLnet Open Internet Stack Open Call",
    amount: "€5,000-€50,000 for a first grant (7M euro fund through 2030)",
    equityStrings:
      "None; non-dilutive grants. All software, hardware, and content must be released under a recognized open license.",
    eligibility:
      "Individuals, informal teams, nonprofits, and companies worldwide. EU-funded funds expect a European dimension. AI-generated projects and proposals are not eligible: proposals must be written in the applicant's own words.",
    deadline: "November 3, 2026, 12:00 CET (noon); bi-monthly cadence continues",
    rolling: false,
    applicationWeight: "Light",
    fitNote:
      "Honest caveat: the flagship Restack fund explicitly excludes AI projects unless they already have 1M+ active human users. Best on this board for OSS builders doing open internet infrastructure (local-first, open standards, supply-chain security), not pure AI-agent work. Lightweight application: short proposal, quick process.",
    applyUrl: "https://nlnet.nl/propose",
    categories: ["general"],
    fundingType: "grant",
    tags: ["open source", "deadline", "europe", "infrastructure"],
    verifiedDate: "2026-10-17",
    confidence: "verified live",
  },
];

export const openProgramCount = programs.length;
export const verifiedLiveCount = programs.filter((p) => p.confidence === "verified live").length;
export const rollingCount = programs.filter((p) => p.rolling).length;

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
