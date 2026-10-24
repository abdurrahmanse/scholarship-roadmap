import { CsrankingsStep, CostOfLivingRow } from "./types";

export const programsHeroHighlightsData = [
  { label: "100% Full-Ride Verified Only", iconName: "ShieldCheck", variant: "emerald" },
  { label: "Direct Faculty & Lab PI Contacts", iconName: "CheckCircle2", variant: "cyan" },
  { label: "H100/A100 Cluster Access", iconName: "Cpu", variant: "indigo" }
];

export const csrankingsStepsData: CsrankingsStep[] = [
  {
    num: "01",
    title: "Filter Strictly by Top AI/ML Venues",
    desc: "Navigate to CSRankings.org. Check exclusively: Artificial Intelligence (AAAI, IJCAI), Computer Vision (CVPR, ICCV, ECCV), Machine Learning (ICML, NeurIPS, ICLR), and Natural Language Processing (ACL, EMNLP, NAACL)."
  },
  {
    num: "02",
    title: "Filter by Regional Geography",
    desc: "Select your target geographic jurisdictions: USA, Canada, Europe, or Asia. Adjust publication window to the last 5–10 years to see current active research funding."
  },
  {
    num: "03",
    title: "Target Newly Hired Assistant Professors",
    desc: "Identify tenure-track Assistant Professors (hired in the last 1–4 years). They receive $400k–$1.2M institutional startup packages and active NSF/ERC grants, with high urgency to recruit productive graduate researchers."
  },
  {
    num: "04",
    title: "Read Recent 12-Month Preprints",
    desc: "Before sending any email, open the professor's Google Scholar. Read their two most recent conference preprints and identify open technical limitations in their ablation studies."
  }
];

export const costOfLivingComparisonData: CostOfLivingRow[] = [
  {
    hub: "Pittsburgh, PA (CMU SCS)",
    gross: "$42,000",
    rent: "$850",
    savings: "+$1,250/mo",
    tier: "High Purchasing Power",
    variant: "emerald"
  },
  {
    hub: "Zurich (ETH Zurich AI)",
    gross: "CHF 78,000",
    rent: "CHF 1,100",
    savings: "+CHF 2,400/mo",
    tier: "Highest Global Salary",
    variant: "emerald"
  },
  {
    hub: "Munich (TUM / Max Planck)",
    gross: "€54,000",
    rent: "€900",
    savings: "+€1,100/mo",
    tier: "Social Security & Pension",
    variant: "cyan"
  },
  {
    hub: "Singapore (SINGA / NUS)",
    gross: "S$38,400",
    rent: "S$950",
    savings: "+S$1,400/mo",
    tier: "Zero Income Tax",
    variant: "emerald"
  },
  {
    hub: "Toronto, ON (Vector / UofT)",
    gross: "CAD $38,000",
    rent: "CAD $1,150",
    savings: "+CAD $800/mo",
    tier: "Moderate Purchasing Power",
    variant: "amber"
  },
  {
    hub: "Bay Area, CA (Stanford/BAIR)",
    gross: "$48,500",
    rent: "$1,750",
    savings: "+$650/mo",
    tier: "High Rent / $15k Internships",
    variant: "purple"
  }
];
