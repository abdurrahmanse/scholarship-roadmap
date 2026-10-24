import { CsrankingsStep, CostOfLivingRow, NavAnchorItem } from "./types";

export const programsNavAnchors: NavAnchorItem[] = [
  { id: "programs-directory", label: "Funded Programs Grid", count: "16 Labs" },
  { id: "csrankings-guide", label: "CSRankings Protocol", count: "4 Steps" },
  { id: "col-matrix", label: "Stipend vs. Rent Matrix", count: "6 Hubs" }
];

export const programsRegionOptions = [
  { id: "All", label: "All Regions" },
  { id: "North America", label: "North America (US & Canada)" },
  { id: "Europe", label: "Europe (Salaried PhDs)" },
  { id: "Asia & Oceania", label: "Asia & Pacific Hubs" }
];

export const programsStipendSliderConfig = {
  min: 24000,
  max: 60000,
  step: 2000,
  defaultMin: 24000,
  label: "Min Living Stipend Filter"
};

export const programsHeroHighlightsData = [
  { label: "100% Full-Ride Verified Only", iconName: "ShieldCheck", variant: "emerald" },
  { label: "Direct Faculty & Lab PI Contacts", iconName: "CheckCircle2", variant: "cyan" },
  { label: "H100/A100 Cluster Access", iconName: "Cpu", variant: "indigo" }
];

export const csrankingsStepsData: CsrankingsStep[] = [
  {
    num: "01",
    title: "Filter Strictly by Top AI/ML Venues",
    desc: "Open CSRankings.org. Select AI (AAAI, IJCAI), Vision (CVPR, ICCV, ECCV), ML (ICML, NeurIPS, ICLR), and NLP (ACL, EMNLP). Avoid generic unranked conference metrics."
  },
  {
    num: "02",
    title: "Filter by Regional Geography",
    desc: "Set geographical bounds to US, Canada, Europe, or Asia. Bound publication window to the last 5 years to guarantee faculty have active, current grant lines."
  },
  {
    num: "03",
    title: "Target Newly Hired Assistant Professors",
    desc: "Focus on tenure-track faculty hired within the last 1–4 years. They hold $500k–$1.2M startup funds, open lab slots, and urgent need for productive PhD students."
  },
  {
    num: "04",
    title: "Audit Recent 12-Month Preprints",
    desc: "Review their two most recent conference preprints on arXiv/Google Scholar. Identify exact ablation limitations before sending customized outreach."
  }
];

export const costOfLivingComparisonData: CostOfLivingRow[] = [
  {
    hub: "Pittsburgh, PA (CMU SCS)",
    gross: "$43,000",
    rent: "$850",
    savings: "+$1,350/mo",
    tier: "High Purchasing Power",
    variant: "emerald"
  },
  {
    hub: "Zurich (ETH Zurich AI)",
    gross: "CHF 78,000",
    rent: "CHF 1,150",
    savings: "+CHF 2,350/mo",
    tier: "Highest Global Salary",
    variant: "emerald"
  },
  {
    hub: "Munich (TUM / Max Planck)",
    gross: "€54,000",
    rent: "€950",
    savings: "+€1,150/mo",
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

