import { FaqCategoryCard, LaunchpadCard } from "./types";

export const faqsHeroHighlightsData = [
  { label: "Direct PhD vs MS Clarity", iconName: "CheckCircle2", variant: "emerald" },
  { label: "Low GPA Research Offset Strategies", iconName: "CheckCircle2", variant: "cyan" },
  { label: "$15k/mo Summer Industry Internships", iconName: "CheckCircle2", variant: "indigo" }
];

export const faqCategoryCardsData: FaqCategoryCard[] = [
  {
    name: "Admissions & Strategy",
    desc: "Direct PhD from Bachelor's, low GPA offsets, and junior vs senior faculty targeting.",
    tag: "Strategy",
    iconName: "Compass",
    variant: "purple"
  },
  {
    name: "Research & Code",
    desc: "First-author expectations, workshop fast-tracks, arXiv preprints, and OpenReview.",
    tag: "Publications",
    iconName: "FileCode",
    variant: "cyan"
  },
  {
    name: "Funding & Money",
    desc: "GPU cluster access, gross vs net stipends, and $15k/month summer research internships.",
    tag: "Stipends & Tech",
    iconName: "DollarSign",
    variant: "emerald"
  },
  {
    name: "Testing & Requirements",
    desc: "GRE test-blind policies, mandatory GTA spoken English thresholds, and TAL clearance.",
    tag: "Testing & Visas",
    iconName: "ShieldCheck",
    variant: "amber"
  }
];

export const preflightChecklistData: string[] = [
  "Confirmed that target programs offer 100% full tuition remission and guaranteed living stipends",
  "Verified that your TOEFL Speaking is >= 26 or IELTS Speaking is >= 8.0 for Graduate Teaching Assistantships (GTA)",
  "Ensured all 3 recommendation letters have been formally requested with 1-page brag sheets attached",
  "Checked the box 'I waive my right to access this recommendation' (FERPA) on every institutional application portal",
  "Audited public GitHub code for hardcoded paths and verified reproducible execution on a fresh conda environment"
];

export const communityLaunchpadData: LaunchpadCard[] = [
  {
    title: "7-Phase Execution Roadmap",
    desc: "Step-by-step pipeline from math diagnostics to TAL visa clearance.",
    href: "/roadmap",
    iconName: "Compass"
  },
  {
    title: "Funded Programs Directory",
    desc: "Curated 100% full-ride AI laboratories and faculty contacts.",
    href: "/programs",
    iconName: "Cpu"
  },
  {
    title: "Application Dossier Toolkit",
    desc: "5-movement SOP blueprint, LaTeX CV benchmarks, and cold emails.",
    href: "/toolkit",
    iconName: "FileCode"
  },
  {
    title: "STAR-L Defense & TAL Guide",
    desc: "5-slide defense deck simulator and consular export control clearance.",
    href: "/interviews",
    iconName: "Presentation"
  }
];
