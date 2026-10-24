import {
  MetricItem,
  FundingPillar,
  DiagnosticOption,
  GlobalFundingModel,
  CityFinancialProfile,
  HeroEqualizerData
} from "./types";

export const heroEqualizerData: HeroEqualizerData = {
  badge: "Compute Infrastructure",
  status: "NVIDIA H100 SXM5 Quota Live",
  bars: [45, 80, 60, 95, 70, 85, 50, 100, 75, 90, 65, 85]
};

export const homeMetricsData: MetricItem[] = [
  {
    label: "Tuition Cost",
    value: "$0.00",
    sublabel: "100% Full Remission",
    iconName: "DollarSign"
  },
  {
    label: "Monthly Stipend",
    value: "$2.7k–$4.2k",
    sublabel: "Guaranteed Living Wage",
    iconName: "Award"
  },
  {
    label: "Target Scope",
    value: "MS & PhD",
    sublabel: "Computer Science (AI/ML)",
    iconName: "GraduationCap"
  },
  {
    label: "Compute Cluster",
    value: "H100 / A100",
    sublabel: "Lab Slurm Quota Included",
    iconName: "Cpu"
  }
];

export const fundingPillarsData: FundingPillar[] = [
  {
    title: "100% Full Tuition Remission",
    description: "Complete waiver of all out-of-state and international tuition fees ($40,000–$65,000/year covered).",
    iconName: "DollarSign",
    tag: "Tuition Waiver",
    variant: "emerald",
    points: [
      "Zero out-of-pocket tuition",
      "Applies to entire degree duration",
      "Covers differential department fees"
    ]
  },
  {
    title: "Guaranteed Living Stipend",
    description: "Direct monthly salary ($2,500–$4,200/month net) paid through Graduate Research (GRA) or Teaching (GTA) assistantships.",
    iconName: "ShieldCheck",
    tag: "Monthly Salary",
    variant: "cyan",
    points: [
      "12-month or 9-month guaranteed",
      "Covers rent, food & living expenses",
      "No personal savings required"
    ]
  },
  {
    title: "Comprehensive Health Insurance",
    description: "100% subsidized university health and dental insurance plans covering doctor visits, hospitalization, and prescriptions.",
    iconName: "HeartPulse",
    tag: "Full Healthcare",
    variant: "rose",
    points: [
      "Major medical hospitalization",
      "Vision & dental options",
      "Saves $3,000–$5,000/year"
    ]
  },
  {
    title: "High-Density GPU Compute Quota",
    description: "Guaranteed direct access to departmental Slurm clusters (NVIDIA H100 / A100 nodes) and national supercomputer allocations.",
    iconName: "Cpu",
    tag: "Compute Access",
    variant: "purple",
    points: [
      "Cluster Slurm queue access",
      "Cloud grant credits (AWS/GCP)",
      "Zero personal hardware cost"
    ]
  }
];

export const fundingWarningData = {
  legitimate: {
    title: "Legitimate Research Assistantship (GRA / GTA)",
    description: "Your advisor funds your tuition waiver and living stipend directly out of federal research grants (NSF, DARPA, NIH, ERC) or departmental teaching endowments. You work 20 hrs/week on your thesis topic or mentoring undergraduate labs.",
    stats: "Net Student Cost: $0.00 • Net Savings: $10,000–$20,000/year"
  },
  trap: {
    title: "The 'Partial Tuition Discount' Trap (To Avoid)",
    description: "Many master's programs offer 15%–30% 'merit discounts' but still demand $50,000+ in tuition and $25,000 in living expenses, with zero lab compute access. This roadmap specifically teaches you how to avoid this debt trap.",
    stats: "Student Debt Risk: $75,000+ • Zero Compute Quota"
  }
};

export const diagnosticDegreeOptions: DiagnosticOption[] = [
  { id: "phd-direct", label: "Direct PhD (from BS)", sub: "US / Canada 100% Full-Ride" },
  { id: "phd-postms", label: "PhD (after Master's)", sub: "Europe / Global Salaried" },
  { id: "ms-thesis", label: "Master's (Thesis / GRA)", sub: "Tuition Waiver + Stipend" }
];

export const diagnosticGpaOptions: DiagnosticOption[] = [
  { id: "high", label: "3.8 – 4.0", sub: "Top 5% Honors" },
  { id: "good", label: "3.5 – 3.79", sub: "Competitive" },
  { id: "medium", label: "3.2 – 3.49", sub: "Research offset" },
  { id: "low", label: "< 3.2", sub: "Heavy code focus" }
];

export const diagnosticPaperOptions: DiagnosticOption[] = [
  { id: "conf", label: "1+ Main Conference Paper", sub: "NeurIPS / ICML / ICLR / CVPR / ACL" },
  { id: "workshop", label: "Workshop Paper or arXiv Preprint", sub: "Verified preprint with code repo" },
  { id: "thesis", label: "Undergraduate / MS Thesis", sub: "Empirical study without formal publication" },
  { id: "none", label: "Coursework / Class Projects Only", sub: "No public preprints yet" }
];

export const diagnosticEngineeringOptions: DiagnosticOption[] = [
  { id: "multi-gpu", label: "PyTorch DDP / Slurm / Hugging Face", sub: "Multi-node, vLLM, wandb" },
  { id: "pytorch-colab", label: "PyTorch Single GPU / Colab", sub: "Standard training runs" },
  { id: "basic", label: "Scikit-Learn / Academic Python", sub: "Basics of machine learning" }
];

export const globalFundingModelsData: GlobalFundingModel[] = [
  {
    title: "1. US & Canada: GRA / GTA Assistantships",
    region: "United States & Canada",
    iconName: "Globe2",
    stipend: "$32,000 – $52,000 / year",
    tuition: "100% Full Remission",
    tag: "Direct PhD & MS Thesis",
    variant: "indigo",
    details: [
      "Graduate Research Assistantship (GRA) funded by advisor grants (NSF, DARPA)",
      "Graduate Teaching Assistantship (GTA) requires high spoken English (TOEFL >= 26 / IELTS >= 8.0)",
      "Direct-entry PhD straight after 4-year Bachelor's degree without MS",
      "Summer research internships at FAANG/frontier AI labs pay $10k–$15k/mo"
    ]
  },
  {
    title: "2. Continental Europe: Salaried University Employee",
    region: "Germany, Switzerland, Netherlands, Scandinavia",
    iconName: "Building2",
    stipend: "€42,000 – €85,000 / year",
    tuition: "€0 (Free Public Tuition)",
    tag: "TV-L E13 / Swiss SNF",
    variant: "cyan",
    details: [
      "Hired as official university staff with social security, state pension, and paid leave",
      "Zero tuition fees across public universities in Germany, Switzerland, and Sweden",
      "ETH Zurich / EPFL Swiss National Science Foundation (SNF) scale: CHF 75,000–85,000",
      "Strict legal requirement: Must hold a completed Master's degree prior to PhD start"
    ]
  },
  {
    title: "3. Asia & Global: Flagship Government Grants",
    region: "Singapore, Japan, Multilateral",
    iconName: "Award",
    stipend: "S$2,700–$3,200/mo (SINGA) | ¥145,000/mo (MEXT)",
    tuition: "100% Fully Waived",
    tag: "SINGA / MEXT / Erasmus",
    variant: "emerald",
    details: [
      "Singapore SINGA covers NUS, NTU, and A*STAR research institutes with zero tax",
      "Japan MEXT provides monthly stipend, full tuition waiver, and roundtrip international flights",
      "Erasmus Mundus offers €1,400/month plus travel allowances across 3 European countries",
      "Extremely prestigious credentials with dedicated diplomatic alumni networks"
    ]
  },
  {
    title: "4. UK & Commonwealth: Elite Collegiate Trusts",
    region: "United Kingdom & Canada",
    iconName: "Crown",
    stipend: "£19,000 – £22,000 / year + fees",
    tuition: "Full International Fees Paid",
    tag: "Gates / Rhodes / Vanier",
    variant: "amber",
    details: [
      "Gates Cambridge & Oxford Clarendon cover university fees, college dues, and maintenance",
      "Vanier Canada Graduate Scholarship ($50,000/year for 3 years)",
      "Awarded to top 1% of doctoral scholars worldwide based on leadership and research promise",
      "Application deadlines are early (mid-October to early December)"
    ]
  }
];

export const stipendCitiesData: CityFinancialProfile[] = [
  {
    name: "Pittsburgh, PA",
    country: "USA",
    institution: "Carnegie Mellon University (CMU SCS)",
    currency: "USD",
    symbol: "$",
    annualGrossStipend: 42000,
    taxRatePercent: 12,
    avgMonthlyRentShared: 850,
    avgMonthlyFood: 400,
    monthlyHealthInsurance: 0,
    costOfLivingIndex: 104,
    tuitionCovered: 58000,
    notes: "High purchasing power. Low housing costs allow saving $1,200+/month on standard GRA stipend."
  },
  {
    name: "San Francisco Bay Area, CA",
    country: "USA",
    institution: "Stanford SAIL / UC Berkeley BAIR",
    currency: "USD",
    symbol: "$",
    annualGrossStipend: 48500,
    taxRatePercent: 15,
    avgMonthlyRentShared: 1750,
    avgMonthlyFood: 550,
    monthlyHealthInsurance: 0,
    costOfLivingIndex: 185,
    tuitionCovered: 62000,
    notes: "World center of AI. High rent offset by premier tech summer internships ($12k–$15k/mo)."
  },
  {
    name: "Zurich",
    country: "Switzerland",
    institution: "ETH Zurich / AI Center",
    currency: "CHF",
    symbol: "CHF",
    annualGrossStipend: 78000,
    taxRatePercent: 14,
    avgMonthlyRentShared: 1100,
    avgMonthlyFood: 700,
    monthlyHealthInsurance: 280,
    costOfLivingIndex: 195,
    tuitionCovered: 1500,
    notes: "Highest gross PhD salary in the world. Significant net savings ($2,500+/month) on SNF scale."
  },
  {
    name: "Munich",
    country: "Germany",
    institution: "TUM / Max Planck IMPRS-IS",
    currency: "EUR",
    symbol: "€",
    annualGrossStipend: 54000,
    taxRatePercent: 32,
    avgMonthlyRentShared: 900,
    avgMonthlyFood: 450,
    monthlyHealthInsurance: 0,
    costOfLivingIndex: 130,
    tuitionCovered: 0,
    notes: "Full civil service social security, state pension contribution, and zero university tuition."
  },
  {
    name: "Toronto, ON",
    country: "Canada",
    institution: "University of Toronto / Vector Institute",
    currency: "CAD",
    symbol: "CAD $",
    annualGrossStipend: 38000,
    taxRatePercent: 8,
    avgMonthlyRentShared: 1150,
    avgMonthlyFood: 450,
    monthlyHealthInsurance: 0,
    costOfLivingIndex: 140,
    tuitionCovered: 28000,
    notes: "Vector Institute scholarships provide additional $10k/yr top-ups for top AI researchers."
  },
  {
    name: "Singapore",
    country: "Singapore",
    institution: "NUS / NTU / A*STAR (SINGA)",
    currency: "SGD",
    symbol: "S$",
    annualGrossStipend: 38400,
    taxRatePercent: 2,
    avgMonthlyRentShared: 950,
    avgMonthlyFood: 500,
    monthlyHealthInsurance: 0,
    costOfLivingIndex: 150,
    tuitionCovered: 40000,
    notes: "Almost zero income tax. Airfare allowance and thesis grants included in SINGA fellowship."
  }
];

export const stipendCalculatorMetadata = {
  badge: "Global Financial Reality",
  title: "Interactive Net Stipend & Cost-of-Living Calculator",
  subtitle: "Compare real monthly purchasing power across world AI hubs: gross stipends, mandatory deductions, housing costs, and actual student savings.",
  summerInternshipAlert: "The Summer Internship Boost: AI PhD candidates at top labs routinely take 3-month summer research internships at Meta FAIR, Google DeepMind, OpenAI, or Microsoft Research, earning an additional $10,000–$15,000/month, elevating true annual compensation past $65,000–$80,000.",
  exploreCtaText: "View full laboratory details in Programs Directory"
};

