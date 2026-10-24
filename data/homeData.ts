import {
  MetricItem,
  FundingPillar,
  DiagnosticOption,
  GlobalFundingModel,
  CityFinancialProfile,
  HeroEqualizerData,
  TimelineSliderItem
} from "./types";

export const timelineSliderMetadata = {
  badge: "Interactive Roadmap Slider",
  title: "24-Month Chronological Admissions Timeline",
  subtitle: "Drag the slider to explore the essential steps, deliverables, and deadlines from square one to landing abroad.",
  sliderLabels: [
    { value: 0, label: "Month 24" },
    { value: 1, label: "Month 18" },
    { value: 2, label: "Month 12" },
    { value: 3, label: "Month 9" },
    { value: 4, label: "Month 6" },
    { value: 5, label: "Month 3" },
    { value: 6, label: "Month 0" }
  ],
  deliverableLabel: "Required Proof-of-Work Deliverable:",
  targetWindowLabel: "Target Window:",
  viewFullPhaseText: "View Full Phase Details & Code"
};

export const timelineSliderData: TimelineSliderItem[] = [
  {
    id: "phase-0",
    monthIndex: 0,
    phaseNumber: 0,
    timeWindow: "18–24 Months Before Enrollment",
    stageName: "Phase 0: Mathematical & Systems Foundations",
    priorityTitle: "Establish Theoretical Proofs & Distributed PyTorch Weapons",
    badge: "Foundation Stage",
    actionBullets: [
      "Audit 20 proof problems across matrix calculus, SVD, and multivariate probability.",
      "Master modular PyTorch DDP (DistributedDataParallel) multi-GPU training.",
      "Implement a modern foundational paper architecture from scratch with WandB tracking.",
      "Establish low-cost cloud GPU pipeline (RunPod / Lambda Labs) under $1.50/hour."
    ],
    deliverable: "Verified GitHub repository with clean, modular PyTorch implementation and reproducible configs.",
    deadlineTarget: "Complete 18 months before target enrollment semester.",
    accentVariant: "indigo"
  },
  {
    id: "phase-1",
    monthIndex: 1,
    phaseNumber: 1,
    timeWindow: "12–18 Months Before Enrollment",
    stageName: "Phase 1: Research Publications & Open-Source Artifacts",
    priorityTitle: "Produce Citable Research Proof-of-Work",
    badge: "Publication Sprint",
    actionBullets: [
      "Target top-tier conference workshops (NeurIPS, ICML, ICLR Tiny Papers) for 4–6 page papers.",
      "Post a clean, timestamped preprint to arXiv with open code release.",
      "Deploy an interactive web demonstration on Hugging Face Spaces (Gradio / Streamlit).",
      "Secure IELTS 8.0 or TOEFL 105+ (Speaking >= 26) to unlock full GTA eligibility."
    ],
    deliverable: "1+ peer-reviewed workshop paper or citable arXiv preprint with live Hugging Face demo.",
    deadlineTarget: "Workshop deadlines occur 6 months prior to main conferences.",
    accentVariant: "cyan"
  },
  {
    id: "phase-2",
    monthIndex: 2,
    phaseNumber: 2,
    timeWindow: "9–12 Months Before Enrollment",
    stageName: "Phase 2: CSRankings Mapping & Faculty Cold Outreach",
    priorityTitle: "Target Grant-Funded PIs with Precision 5-Point Cold Emails",
    badge: "Outreach Campaign",
    actionBullets: [
      "Filter CSRankings.org by specific AI subfield (CV, NLP, ML, Robotics) to find active labs.",
      "Target junior Assistant Professors with fresh NSF/ERC startup packages eager to hire.",
      "Send concise, technical 5-point cold emails critiquing a recent publication from their lab.",
      "Schedule 15-minute technical Zoom screening chats before December deadlines."
    ],
    deliverable: "25+ personalized cold emails sent resulting in 3–5 positive faculty screening calls.",
    deadlineTarget: "Launch campaign between August 15 and October 31.",
    accentVariant: "emerald"
  },
  {
    id: "phase-3",
    monthIndex: 3,
    phaseNumber: 3,
    timeWindow: "6–9 Months Before Enrollment",
    stageName: "Phase 3: AI Graduate Dossier & Technical SOP",
    priorityTitle: "Craft Algorithmic SOP Manifesto & Secure Top Recommendation Letters",
    badge: "Dossier Engineering",
    actionBullets: [
      "Draft a 2-page technical SOP outlining concrete research problems and faculty synergy.",
      "Build a minimalist academic LaTeX CV (Awesome-CV) with clickable DOIs and GitHub stats.",
      "Send comprehensive Brag Sheet packets to 3 publishing research mentors.",
      "Formally waive FERPA inspection rights to maximize letter credibility."
    ],
    deliverable: "Polished technical Statement of Purpose, compiled LaTeX CV, and 3 confirmed LOR commitments.",
    deadlineTarget: "Finalize full dossier by November 15.",
    accentVariant: "purple"
  },
  {
    id: "phase-4",
    monthIndex: 4,
    phaseNumber: 4,
    timeWindow: "3–6 Months Before Enrollment",
    stageName: "Phase 4: Priority Deadlines & Institutional Submissions",
    priorityTitle: "Submit All Applications Prior to Fellowship Cutoffs",
    badge: "Submission Window",
    actionBullets: [
      "Apply for departmental graduate application fee waivers (save $1,000+ across 10 schools).",
      "Submit all portal applications prior to strict December 1–15 Priority Fellowship Deadlines.",
      "Verify that the 'Consider for Graduate Research Assistantship (GRA)' checkbox is active.",
      "Follow up courteously with recommenders 7 days before application deadlines."
    ],
    deliverable: "100% of target applications submitted with verified LOR uploads and receipt confirmations.",
    deadlineTarget: "Strict Priority Window: December 1 to December 15.",
    accentVariant: "amber"
  },
  {
    id: "phase-5",
    monthIndex: 5,
    phaseNumber: 5,
    timeWindow: "1–3 Months Before Enrollment",
    stageName: "Phase 5: Technical Defense & True Net Stipend Math",
    priorityTitle: "Defend Research Under Live Faculty Stress Tests & Negotiate",
    badge: "Decision & Defense",
    actionBullets: [
      "Deliver 5-slide technical presentation defending research methodology and ablations.",
      "Handle live deep learning debugging questions using the structured STAR-L method.",
      "Audit total compensation: Gross stipend vs metropolitan rent, taxes, and health insurance.",
      "Leverage competing fully funded offers to negotiate discretionary summer top-ups."
    ],
    deliverable: "Accepted full-ride offer with official Graduate Assistantship funding guarantee letter.",
    deadlineTarget: "Interviews Jan–March; CGS Binding Resolution Deadline: April 15.",
    accentVariant: "emerald"
  },
  {
    id: "phase-6",
    monthIndex: 6,
    phaseNumber: 6,
    timeWindow: "0–3 Months Before Enrollment",
    stageName: "Phase 6: Visa, Consular TAL Clearance & Lab Onboarding",
    priorityTitle: "Clear Technology Alert List Consular Scrutiny & Initialize Cluster",
    badge: "Arrival & Launch",
    actionBullets: [
      "Obtain signed Advisor Open-Science Defense Letter stating research is basic unclassified math.",
      "Articulate non-immigrant intent and open-source publication record at embassy interview.",
      "Secure student visa (F-1 / CAS / Study Permit) without 221(g) administrative delays.",
      "Configure university institutional credentials, international banking, and Slurm cluster SSH."
    ],
    deliverable: "Approved visa in hand, flights booked, and active SSH access to laboratory GPU cluster.",
    deadlineTarget: "Visa interview May–July; Lab arrival August.",
    accentVariant: "cyan"
  }
];

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
  housingSliderLabel: "Adjust Monthly Housing / Rent Budget:",
  rentOffsetFrugalLabel: "Shared / Dorm (-$300)",
  rentOffsetStandardLabel: "Benchmark",
  rentOffsetStudioLabel: "Private Studio (+$500)",
  summerInternshipAlert: "The Summer Internship Boost: AI PhD candidates at top labs routinely take 3-month summer research internships at Meta FAIR, Google DeepMind, OpenAI, or Microsoft Research, earning an additional $10,000–$15,000/month, elevating true annual compensation past $65,000–$80,000.",
  exploreCtaText: "View full laboratory details in Programs Directory"
};

export const csProfileRequirementsMetadata = {
  badge: "Profile Architecture",
  title: "What Your Computer Science Profile Must Look Like",
  subtitle: "Top universities do not award 100% full-ride funding based on high GPAs alone. Admissions committees and professors hire graduate research assistants based on verified research output, open-source code velocity, and mathematical foundations.",
  guidanceNote: "Select your target academic degree below to see the exact profile standards, deliverables, and competitive advantages required to secure full funding."
};

export const csProfileRequirementsData = [
  {
    id: "ms-thesis",
    label: "Master's by Research (MS Thesis)",
    badge: "100% Funded MS Track",
    targetDegree: "Master of Science in Computer Science (Thesis / Research)",
    fundingModel: "Graduate Teaching Assistantship (GTA) / Research Assistantship (GRA)",
    typicalStipend: "$28,000 – $38,000 / year + 100% Tuition Waiver",
    pillars: [
      {
        title: "Research Proof-of-Work",
        badge: "Core Metric",
        iconName: "FileCode",
        summary: "1 public arXiv preprint, an undergrad honors thesis, or a workshop submission (ICML/NeurIPS Tiny Papers).",
        mustHavePoints: [
          "Demonstrate ability to define a problem, design an ablation experiment, and write scientific prose.",
          "Clear benchmark comparison against 2 standard baselines on public datasets."
        ],
        competitiveAdvantage: "Having 1 verified arXiv preprint places you ahead of 90% of applicants applying with only course grades.",
        variant: "cyan" as const
      },
      {
        title: "Clean Open-Source PyTorch Code",
        badge: "Systems Proof",
        iconName: "Cpu",
        summary: "A public GitHub repository implementing a modern machine learning architecture with clean documentation.",
        mustHavePoints: [
          "Modular code structure (`model.py`, `train.py`, `config.yaml`, `dataset.py`).",
          "Reproducible 1-click execution script with Conda / Docker environment and Weights & Biases telemetry."
        ],
        competitiveAdvantage: "Faculty look at your GitHub to verify you can write bug-free research code without hand-holding.",
        variant: "indigo" as const
      },
      {
        title: "High Spoken English Score (GTA Key)",
        badge: "Funding Trigger",
        iconName: "Award",
        summary: "Most funded MS students are supported via Graduate Teaching Assistantships (GTA) funded by the department.",
        mustHavePoints: [
          "TOEFL Speaking score >= 26 or IELTS Speaking score >= 8.0.",
          "Meeting institutional threshold unlocks automatic teaching assistantship lines that pay full tuition + stipend."
        ],
        competitiveAdvantage: "Departments often reject 4.0 GPA students for funding if their spoken English is below GTA thresholds.",
        variant: "emerald" as const
      },
      {
        title: "Strong Academic LORs & 3.5+ GPA",
        badge: "Credential Anchor",
        iconName: "CheckCircle2",
        summary: "3 academic letters from CS professors who can speak to your algorithmic skills and independent curiosity.",
        mustHavePoints: [
          "Cumulative GPA of 3.5/4.0 in core CS/Math courses (Algorithms, Linear Algebra, Probability).",
          "If GPA is between 3.0–3.4, first-author research code and arXiv preprints successfully offset the deficit."
        ],
        competitiveAdvantage: "Detailed letters comparing you to past students who went to top PhD programs carry 5x more weight than generic praise.",
        variant: "purple" as const
      }
    ]
  },
  {
    id: "direct-phd",
    label: "Direct PhD (From Bachelor's)",
    badge: "5-Year Full Fellowship",
    targetDegree: "Doctor of Philosophy in Computer Science (Direct-Entry)",
    fundingModel: "Guaranteed 5-Year GRA / GTA / Presidential University Fellowship",
    typicalStipend: "$36,000 – $52,000 / year + 100% Tuition Waiver + Health Insurance",
    pillars: [
      {
        title: "Peer-Reviewed Workshop or Conference Paper",
        badge: "Primary Currency",
        iconName: "FileCode",
        summary: "1+ workshop paper at a Tier-1 venue (NeurIPS, ICML, ICLR, CVPR) or a strong co-authored conference paper.",
        mustHavePoints: [
          "Demonstrate you can independently run multi-seed experiments and write a 4–6 page scientific manuscript.",
          "Preprint posted to arXiv with code release and Hugging Face demo."
        ],
        competitiveAdvantage: "Admissions committees evaluate PhD applicants on research taste and paper delivery, not coursework.",
        variant: "emerald" as const
      },
      {
        title: "Distributed GPU Training Stack",
        badge: "Compute Mastery",
        iconName: "Cpu",
        summary: "Hands-on experience with multi-GPU training, memory optimization, and cluster execution.",
        mustHavePoints: [
          "Familiarity with PyTorch DDP, mixed precision (bf16/fp16), and FlashAttention-2.",
          "Experience scheduling jobs via Slurm on university or cloud GPU clusters (RunPod, Lambda, AWS)."
        ],
        competitiveAdvantage: "Proves you will not drain the professor's grant budget by producing GPU out-of-memory crashes.",
        variant: "indigo" as const
      },
      {
        title: "Precision Faculty Synergy & Outreach",
        badge: "Advisor Match",
        iconName: "Target",
        summary: "Clear alignment with 2–3 faculty members whose recent 12-month papers you have analyzed in detail.",
        mustHavePoints: [
          "Target junior Assistant Professors (1–4 years on tenure track) with fresh $500k–$1.2M startup grants.",
          "Send personalized 5-point cold emails highlighting an open limitation in their recent paper and offering your code solution."
        ],
        competitiveAdvantage: "An endorsement from a prospective PI who wants you in their lab guarantees PhD admission with full funding.",
        variant: "cyan" as const
      },
      {
        title: "3 Glowing Research LORs (FERPA Waived)",
        badge: "Vetting Gold Standard",
        iconName: "ShieldCheck",
        summary: "Letters from publishing researchers stating you operate at the level of a top graduate student.",
        mustHavePoints: [
          "All 3 letters must come from research supervisors or collaborators, not classroom instructors.",
          "Must check 'I waive my right to access this letter' (FERPA) to ensure 100% credibility with the committee."
        ],
        competitiveAdvantage: "A single sentence from a known researcher saying 'Applicant is among the top 2% I have mentored' secures admission.",
        variant: "purple" as const
      }
    ]
  },
  {
    id: "postms-phd",
    label: "Post-Master's PhD (Europe / Flagship Labs)",
    badge: "Salaried Researcher",
    targetDegree: "Doctoral Researcher / PhD Candidate (Europe & Top US Labs)",
    fundingModel: "Salaried Employment Contract (TV-L E13 in Germany, SNF in Switzerland, Salaried GRA)",
    typicalStipend: "€50,000–€55,000 (Germany) / CHF 78,000–85,000 (ETH/EPFL) / $42,000–$55,000 (US)",
    pillars: [
      {
        title: "Main Conference Publications",
        badge: "Proven Record",
        iconName: "FileCode",
        summary: "1+ first-author papers accepted at NeurIPS, ICML, ICLR, CVPR, ACL, or equivalent Tier-1 conferences.",
        mustHavePoints: [
          "Demonstrated track record of taking an empirical research project from conception to acceptance.",
          "Public GitHub repo with 50+ stars and verified reproducible benchmark numbers."
        ],
        competitiveAdvantage: "Qualifies you immediately for top global institutes (Max Planck, ETH Zurich, Oxford, Stanford).",
        variant: "emerald" as const
      },
      {
        title: "Formal 3–5 Page Research Proposal",
        badge: "European Requirement",
        iconName: "BookOpen",
        summary: "In Europe and Asia (ELLIS, ETH, SINGA, MEXT), funding is attached to specific research proposals.",
        mustHavePoints: [
          "Include problem statement, mathematical objective functions, state-of-the-art critique, and compute budget.",
          "Provide a realistic 3-year Gantt milestone chart targeting specific conference submission cycles."
        ],
        competitiveAdvantage: "Proves you are ready to produce research from Day 1 without requiring 1–2 years of basic training.",
        variant: "cyan" as const
      },
      {
        title: "Advanced System & Algorithmic Depth",
        badge: "HPC Experience",
        iconName: "Cpu",
        summary: "Mastery over distributed large-scale model training, custom CUDA kernels, and scaling laws.",
        mustHavePoints: [
          "Experience training on 8x–64x GPU nodes with DeepSpeed / Megatron-LM / FSDP.",
          "Understanding of computational complexity, sample efficiency, and mathematical convergence proofs."
        ],
        competitiveAdvantage: "Essential for winning top laboratory lines where millions of dollars in compute are entrusted to doctoral researchers.",
        variant: "purple" as const
      },
      {
        title: "Direct PI Alignment & Grants Synergy",
        badge: "Hiring Match",
        iconName: "Target",
        summary: "Direct connection with European Chairs or US Lab Directors with open funded project positions.",
        mustHavePoints: [
          "Identify specific funded project positions (e.g. EU Horizon, ERC Starting Grants, DFG projects).",
          "Interview with the PI demonstrating intellectual autonomy and willingness to co-supervise junior students."
        ],
        competitiveAdvantage: "European PhD positions are salaried employment contracts with pension, social security, and zero tuition.",
        variant: "indigo" as const
      }
    ]
  }
];



