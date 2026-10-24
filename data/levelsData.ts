import { RoadmapLevel } from "./types";

export const roadmapLevelsData: RoadmapLevel[] = [
  {
    id: "level-1",
    levelNumber: 1,
    slug: "level-1",
    badge: "LEVEL 01 • FOUNDATIONAL RIGOR",
    title: "Mathematical Foundations & Production Deep Learning Systems",
    shortTitle: "Math & Systems Foundations",
    tagline: "Build the theoretical depth, matrix calculus derivations, and low-resource GPU engineering mastery that top AI faculty demand.",
    timeline: "Months 1–6 (24-Month Journey)",
    difficulty: "Fundamental",
    accentColor: "indigo",
    iconName: "Cpu",
    phasesIncluded: ["phase-0"],
    stepIds: ["step-0-1", "step-0-2", "step-0-3", "step-0-4", "step-0-5"],
    totalSteps: 5,
    estimatedHours: "15–20 hrs/week",
    objective: "Establish analytical rigor in linear algebra, vector calculus, probability, optimization theory, and PyTorch system architecture to formulate valid research hypotheses and write custom training loops.",
    milestones: [
      {
        title: "Theoretical Diagnostic Audit",
        desc: "Solve 20 proof-based problems in matrix calculus, SVD decomposition, and non-convex loss surface derivations.",
        deliverable: "Mathematical proofs self-audit document"
      },
      {
        title: "Production Deep Learning Repository",
        desc: "Build modular PyTorch implementations with mixed-precision training, gradient clipping, and WandB telemetry.",
        deliverable: "Public GitHub repository with reproducible seed checks"
      },
      {
        title: "Low-Resource GPU Compute Pipeline",
        desc: "Master PEFT, QLoRA 4-bit quantization, and free cloud compute orchestration (Colab/Kaggle/Lightning AI).",
        deliverable: "Memory-efficient training harness saving 70%+ VRAM"
      }
    ],
    coreCompetencies: [
      "Spectral & SVD Matrix Decomposition",
      "Jacobian & Hessian Graph Backpropagation",
      "Convex & Non-Convex Gradient Dynamics",
      "OOP PyTorch 2.x Modular Design",
      "Parameter-Efficient Fine-Tuning (PEFT)",
      "Zero-Budget Hardware Orchestration"
    ],
    keyDeliverable: "Reproducible Deep Learning Systems Benchmark & Math Proof Audit",
    recommendedVenuesOrTools: [
      "Deisenroth Mathematics for ML",
      "PyTorch 2.x Profiler",
      "WandB Telemetry",
      "Hugging Face PEFT / BitsAndBytes",
      "Google Colab & Kaggle GPU Quotas"
    ],
    facultyInsightQuote: {
      quote: "We do not admit PhD students to simply call pre-trained models. We look for candidates who understand what happens to gradient flow when an attention matrix rank collapses.",
      author: "Admissions Committee Member",
      affiliation: "Carnegie Mellon University (CMU LTI)"
    }
  },
  {
    id: "level-2",
    levelNumber: 2,
    slug: "level-2",
    badge: "LEVEL 02 • RESEARCH CURRENCY",
    title: "Publication Velocity, Preprints & Open-Source Artifacts",
    shortTitle: "Publications & Open-Source",
    tagline: "Transform empirical ideas into peer-reviewed workshop acceptances, first-author citable arXiv preprints, and reproducible models.",
    timeline: "Months 6–12 (24-Month Journey)",
    difficulty: "Intensive",
    accentColor: "cyan",
    iconName: "Sparkles",
    phasesIncluded: ["phase-1"],
    stepIds: ["step-1-1", "step-1-2", "step-1-3"],
    totalSteps: 3,
    estimatedHours: "20–25 hrs/week",
    objective: "Build tangible research capital before contacting professors. A single NeurIPS/ICLR/CVPR workshop paper or citable arXiv paper moves your profile into the top 5% of international applicants.",
    milestones: [
      {
        title: "Fast-Track Workshop Submission",
        desc: "Target top conference workshop tracks (NeurIPS, ICML, ICLR, CVPR) which value focused ablations over multi-million-dollar compute budgets.",
        deliverable: "4-page camera-ready workshop paper or citable arXiv submission"
      },
      {
        title: "Hugging Face & Interactive Model Demo",
        desc: "Deploy an interactive Gradio/Streamlit space and release open-weight checkpoints for the AI research community.",
        deliverable: "Live Hugging Face Space with 100+ community runs"
      },
      {
        title: "Standardized Testing Strategy",
        desc: "Secure GRE waivers for top CS departments and achieve exempt-level TOEFL/IELTS scores for Teaching Assistantship (TA) eligibility.",
        deliverable: "Exempt status documentation & verified score reports"
      }
    ],
    coreCompetencies: [
      "Empirical Ablation Design & Statistical Significance",
      "LaTeX Overleaf Conference Template Mastery",
      "Hugging Face Model Card & Checkpoint Release",
      "Open-Source GitHub Community Engagement",
      "Academic Peer-Review Rebuttal Techniques",
      "Institutional GRE Waiver Navigation"
    ],
    keyDeliverable: "First-Author Workshop Acceptance or Citable arXiv Preprint with Weights",
    recommendedVenuesOrTools: [
      "NeurIPS / ICLR / ICML Workshop Tracks",
      "arXiv Computer Science (cs.LG / cs.AI / cs.CV)",
      "Hugging Face Spaces & Model Hub",
      "PapersWithCode Benchmark Registration",
      "OpenReview.net Discussion Archive"
    ],
    facultyInsightQuote: {
      quote: "An applicant with one accepted workshop paper and clean reproducible GitHub code with weights will beat an applicant with a 4.0 GPA and zero research output every single time.",
      author: "Core Faculty Member",
      affiliation: "Mila – Quebec AI Institute & Université de Montréal"
    }
  },
  {
    id: "level-3",
    levelNumber: 3,
    slug: "level-3",
    badge: "LEVEL 03 • PROFESSOR PIPELINE",
    title: "Strategic PI Mapping & Cold Outreach Protocol",
    shortTitle: "Faculty Mapping & Outreach",
    tagline: "Bypass generic university rankings. Identify funded assistant professors with active grants and execute high-conversion outreach.",
    timeline: "Months 12–16 (24-Month Journey)",
    difficulty: "Strategic",
    accentColor: "emerald",
    iconName: "Target",
    phasesIncluded: ["phase-2"],
    stepIds: ["step-2-1", "step-2-2", "step-2-3", "step-2-4"],
    totalSteps: 4,
    estimatedHours: "12–15 hrs/week",
    objective: "Reverse-engineer laboratory funding streams using CSRankings and federal grant registries. Secure 3–5 Zoom screening calls before university application portals even open.",
    milestones: [
      {
        title: "De-Biased CSRankings Faculty Matrix",
        desc: "Filter faculty by specific AI subfields (AI, ML, CV, NLP) and cross-reference NSF/NIH/Horizon awards for active funding packages.",
        deliverable: "Spreadsheet of 25–35 targeted professors categorized into Reach, Target, and Safe tiers"
      },
      {
        title: "Tenure-Track Assistant Professor Targeting",
        desc: "Focus on assistant professors who have $400k–$800k startup packages and must hire graduate researchers to attain tenure.",
        deliverable: "Curated dossier of 15 junior faculty members with recent lab openings"
      },
      {
        title: "5-Point Technical Cold Outreach",
        desc: "Deploy concise 150-word emails referencing equation-level details from the professor's recent paper and proposing concrete next steps.",
        deliverable: "Staggered email campaign with >25% response rate"
      },
      {
        title: "15-Minute Zoom Screening Defense",
        desc: "Master the technical elevator pitch, walk through code repositories, and secure verbal endorsement for department application.",
        deliverable: "3–5 confirmed professor endorsements before official portal submission"
      }
    ],
    coreCompetencies: [
      "CSRankings Metric Filtering (Sub-Area Specialization)",
      "NSF Award Search & Federal Grant Tracking",
      "High-Yield Technical Cold Email Engineering",
      "Reverse Literature Review & Paper Deconstruction",
      "Live Faculty Screening Call Psychology",
      "Pipeline Tracking & Follow-Up Cadence"
    ],
    keyDeliverable: "30-PI Targeted Outreach Spreadsheet & 3+ Verbal Faculty Endorsements",
    recommendedVenuesOrTools: [
      "CSRankings.org (Computer Science Rankings)",
      "NSF Award Search (AwardSearch.gov)",
      "NIH RePORTER & Horizon Europe Registry",
      "Google Scholar Citation Alerts",
      "Calendly & Notion Pipeline Tracker"
    ],
    facultyInsightQuote: {
      quote: "I receive 40 generic emails a day. But when an applicant writes 4 concise sentences referencing equation 3 from my latest paper and proposes a clean ablation with code, I invite them to Zoom.",
      author: "Assistant Professor of Computer Science",
      affiliation: "University of Texas at Austin"
    }
  },
  {
    id: "level-4",
    levelNumber: 4,
    slug: "level-4",
    badge: "LEVEL 04 • APPLICATION DOSSIER",
    title: "Technical SOP Architecture & Priority Submissions",
    shortTitle: "SOP & Priority Submissions",
    tagline: "Engineer an uncompromising technical Statement of Purpose, academic LaTeX CV, brag-sheet LORs, and submit ahead of December 1 deadlines.",
    timeline: "Months 16–20 (24-Month Journey)",
    difficulty: "Critical",
    accentColor: "amber",
    iconName: "FileCheck",
    phasesIncluded: ["phase-3", "phase-4"],
    stepIds: [
      "step-3-1",
      "step-3-2",
      "step-3-3",
      "step-3-4",
      "step-4-1",
      "step-4-2",
      "step-4-3"
    ],
    totalSteps: 7,
    estimatedHours: "15–18 hrs/week",
    objective: "Assemble an airtight, faculty-endorsed application package with verified fee waivers and priority fellowship eligibility, ensuring institutional committee approval.",
    milestones: [
      {
        title: "5-Movement Technical SOP Architecture",
        desc: "Draft a research proposal-style SOP: Problem Statement, Research Capital, Methodological Vision, Specific Lab Alignment, and Career Horizon.",
        deliverable: "Tailored 1,000-word Statement of Purpose naming specific prospective faculty"
      },
      {
        title: "2-Page Academic LaTeX CV",
        desc: "Format an industry-standard Awesome-CV with Google XYZ achievement bullets, paper citations, and GitHub repository metrics.",
        deliverable: "Single-source LaTeX compiled PDF CV"
      },
      {
        title: "High-Impact LOR Brag Sheets",
        desc: "Equip 3 academic recommenders with specific accomplishment bullet points to ensure letters confirm research independence.",
        deliverable: "3 confirmed strong letters submitted before priority cutoffs"
      },
      {
        title: "Departmental Fee Waiver Acquisition",
        desc: "Leverage conference attendance, diversity programs, and early-bird requests to save $1,000–$2,000 in application fees.",
        deliverable: "Fee waiver codes for 8–12 target graduate programs"
      },
      {
        title: "Priority Fellowship Deadline Lock",
        desc: "Submit all applications before December 1–15 to guarantee institutional fellowship and university-wide funding pool consideration.",
        deliverable: "Complete portal confirmations across 10–14 institutions"
      }
    ],
    coreCompetencies: [
      "Technical Narrative SOP Writing (Grant Style)",
      "LaTeX Awesome-CV Formatting (Zero Fluff)",
      "Recommender Brag-Sheet Preparation",
      "Doctoral Research Proposal & Compute Budgeting",
      "Fee Waiver Verification Protocols",
      "Transcript Credential Evaluation (WES/ECE)"
    ],
    keyDeliverable: "Complete 100% Fee-Waived Application Submissions with Priority Fellowship Eligibility",
    recommendedVenuesOrTools: [
      "Overleaf Academic LaTeX Templates",
      "Grammarly & Hemingway Editor",
      "GradCafe Admissions Archive",
      "University Graduate School Application Portals",
      "WES (World Education Services) Attestation"
    ],
    facultyInsightQuote: {
      quote: "Admissions committees read SOPs to eliminate pretenders. A winning SOP reads like an NSF grant proposal: concise research problem, theoretical methodology, compute budget, and lab alignment.",
      author: "Graduate Admissions Committee Chair",
      affiliation: "University of Wisconsin-Madison"
    }
  },
  {
    id: "level-5",
    levelNumber: 5,
    slug: "level-5",
    badge: "LEVEL 05 • FINAL CONVERSION",
    title: "Faculty Technical Defense, Stipend Negotiation & TAL Visa",
    shortTitle: "Defense, Offers & Visa",
    tagline: "Defend your research in live screening calls, negotiate multi-year stipend packages, and clear Technology Alert List (TAL) consular scrutiny.",
    timeline: "Months 20–24 (24-Month Journey)",
    difficulty: "Elite",
    accentColor: "purple",
    iconName: "ShieldCheck",
    phasesIncluded: ["phase-5", "phase-6"],
    stepIds: [
      "step-5-1",
      "step-5-2",
      "step-5-3",
      "step-5-4",
      "step-6-1",
      "step-6-2",
      "step-6-3"
    ],
    totalSteps: 7,
    estimatedHours: "10–12 hrs/week",
    objective: "Convert faculty screening interviews into signed full-ride assistantship offers ($36,000–$52,000/yr), negotiate summer funding, and obtain approved F-1/J-1 or EU research visas without TAL delays.",
    milestones: [
      {
        title: "5-Slide Technical Research Defense",
        desc: "Deliver a crisp 10-minute presentation: Problem, Limitations, Technical Innovation, Benchmark Results, and Future Directions.",
        deliverable: "Defended 5-slide deck with live Q&A handling"
      },
      {
        title: "Offer Deciphering & Stipend Negotiation",
        desc: "Dissect tuition remission, health insurance subsidy, mandatory student fees, and negotiate summer RA stipends ($8k–$15k).",
        deliverable: "Optimized net take-home assistantship contract"
      },
      {
        title: "Technology Alert List (TAL) Clearance",
        desc: "Prepare non-classified open-source research statements for consular officers to avoid administrative processing delays (INA 221g).",
        deliverable: "Consular research defense letter signed by prospective PI"
      },
      {
        title: "International Relocation & Laboratory Onboarding",
        desc: "Finalize multi-currency banking, housing leases, compute cluster access, and begin literature review for first lab milestone.",
        deliverable: "On-site arrival, I-9 verification, and lab workstation setup"
      }
    ],
    coreCompetencies: [
      "5-Slide Slide Deck Architecture & Delivery",
      "Live Deep Learning Stress-Testing Under Pressure",
      "Assistantship Contract Deciphering & Net Math",
      "Respectful Multi-Offer Negotiation Leverage",
      "TAL Export Control Open-Science Visa Defense",
      "International Relocation Logistics & Banking"
    ],
    keyDeliverable: "Signed Full-Ride Assistantship Offer Letter ($36k–$52k/yr) & Approved Student Visa",
    recommendedVenuesOrTools: [
      "Prezi / Google Slides Deck Simulator",
      "Living Wage Calculator (MIT)",
      "SEVIS / DS-2019 / I-20 Processing Hub",
      "State Department Foreign Affairs Manual (FAM)",
      "Wise Multi-Currency Banking"
    ],
    facultyInsightQuote: {
      quote: "When presenting to faculty, never apologize for what you have not done. Walk through your problem formulation, the negative results you encountered, and why our lab's compute cluster is the next logical step.",
      author: "Max Planck Research Group Leader",
      affiliation: "Max Planck Institute for Intelligent Systems (IMPRS-IS)"
    }
  }
];

export const roadmapLevelsComparisonData = [
  {
    level: "Level 1",
    title: "Math & Systems Foundations",
    duration: "Months 1–6",
    primaryGatekeeper: "Coursework / Lab Diagnostic",
    keyDeliverable: "PyTorch benchmark & math audit",
    riskFactor: "Treating AI as a black box",
    statusBadge: "Phase 0 Covered"
  },
  {
    level: "Level 2",
    title: "Publications & Open-Source",
    duration: "Months 6–12",
    primaryGatekeeper: "Workshop & Conference Reviewers",
    keyDeliverable: "First-author workshop or arXiv paper",
    riskFactor: "Zero citable research proof-of-work",
    statusBadge: "Phase 1 Covered"
  },
  {
    level: "Level 3",
    title: "Faculty Mapping & Outreach",
    duration: "Months 12–16",
    primaryGatekeeper: "Prospective Faculty (PIs)",
    keyDeliverable: "3–5 Zoom screening call invites",
    riskFactor: "Generic spam cold emails",
    statusBadge: "Phase 2 Covered"
  },
  {
    level: "Level 4",
    title: "SOP & Priority Submissions",
    duration: "Months 16–20",
    primaryGatekeeper: "Graduate Admissions Committee",
    keyDeliverable: "Completed priority fee-waived apps",
    riskFactor: "Missing Dec 1 fellowship cutoff",
    statusBadge: "Phases 3 & 4 Covered"
  },
  {
    level: "Level 5",
    title: "Defense, Offers & Visa",
    duration: "Months 20–24",
    primaryGatekeeper: "Department Chair & Consular Officer",
    keyDeliverable: "Signed $38k+ package & visa stamp",
    riskFactor: "TAL 221(g) administrative delay",
    statusBadge: "Phases 5 & 6 Covered"
  }
];
