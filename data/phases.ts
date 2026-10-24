import { Phase } from "./types";

export const phasesData: Phase[] = [
  {
    id: "phase-0",
    number: 0,
    title: "Phase 0: Math, Code & Compute Foundations",
    shortTitle: "Math & Compute",
    timeline: "18–24 Months Before Intake",
    durationMonths: "6 Months",
    summary: "Establish rigorous mathematical foundations, master modern deep learning frameworks, define your technical AI niche, and resolve hardware compute limitations.",
    iconName: "Cpu",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    accentColor: "#3b82f6",
    deliverables: [
      "Rigorous math audit (Linear Algebra, Prob/Stats, Convex Opt)",
      "Production-level PyTorch / JAX engineering proficiency",
      "Defined AI subfield problem statement",
      "Low-cost cloud GPU execution pipeline"
    ],
    stepsCount: 5
  },
  {
    id: "phase-1",
    number: 1,
    title: "Phase 1: Publication Strategy & Open-Source Artifacts",
    shortTitle: "Publications & Code",
    timeline: "12–18 Months Before Intake",
    durationMonths: "6 Months",
    summary: "Produce peer-reviewed AI conference workshop papers or citable arXiv preprints, upload reproducible models to Hugging Face, and secure certified English speaking scores for TA eligibility.",
    iconName: "FileCode",
    badgeColor: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    accentColor: "#6366f1",
    deliverables: [
      "Targeted NeurIPS / ICLR / CVPR / ACL workshop submission or arXiv preprint",
      "Documented GitHub repository with reproducible baseline commands",
      "Interactive Hugging Face Space demo",
      "IELTS Speaking >= 8.0 or TOEFL Speaking >= 26/30 for TA funding"
    ],
    stepsCount: 3
  },
  {
    id: "phase-2",
    number: 2,
    title: "Phase 2: Lab Targeting & Supervisor Cold Outreach",
    shortTitle: "Lab Targeting & Outreach",
    timeline: "9–12 Months Before Intake",
    durationMonths: "3 Months",
    summary: "Map funded laboratories using CSRankings.org, identify junior tenure-track faculty with fresh startup grants, and execute high-conversion technical cold email outreach.",
    iconName: "Target",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    accentColor: "#a855f7",
    deliverables: [
      "CSRankings-calibrated 3 Dream / 5 Target / 2 Safe institutional tracker",
      "Curated list of 25–40 junior tenure-track PIs with active NSF/ERC grants",
      "Executed 5-point cold email campaigns with customized paper critiques",
      "Positive 15-minute Zoom screening interviews with professors"
    ],
    stepsCount: 4
  },
  {
    id: "phase-3",
    number: 3,
    title: "Phase 3: AI Graduate Dossier Engineering",
    shortTitle: "Dossier Engineering",
    timeline: "6–9 Months Before Intake",
    durationMonths: "3 Months",
    summary: "Engineer a high-impact technical Statement of Purpose (SOP), format a clean LaTeX CV packed with GitHub/arXiv hyperlinks, and equip recommenders with graduate brag sheets.",
    iconName: "FileSpreadsheet",
    badgeColor: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    accentColor: "#ec4899",
    deliverables: [
      "5-Movement technical Statement of Purpose (SOP)",
      "2-Page LaTeX Academic CV with arXiv DOIs and GitHub stars",
      "3 Confidential LOR packages from actively publishing AI mentors",
      "Doctoral Research Concept Proposal with compute requirements"
    ],
    stepsCount: 4
  },
  {
    id: "phase-4",
    number: 4,
    title: "Phase 4: Submission Campaign & Priority Deadlines",
    shortTitle: "Priority Submissions",
    timeline: "3–6 Months Before Intake",
    durationMonths: "3 Months",
    summary: "Secure institutional and conference diversity fee waivers, authenticate transcripts, and complete formal application portal submissions prior to hard December 1–15 priority deadlines.",
    iconName: "Send",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    accentColor: "#f59e0b",
    deliverables: [
      "Zero-cost application submissions via fee waiver codes",
      "Official certified transcripts, notarizations, and translations",
      "All applications submitted prior to December 1–15 Priority Fellowship Deadlines",
      "Recommender portal submission confirmations verified"
    ],
    stepsCount: 3
  },
  {
    id: "phase-5",
    number: 5,
    title: "Phase 5: Technical Defense, Decisions & Stipend Math",
    shortTitle: "Defense & Stipend Math",
    timeline: "1–3 Months Before Intake",
    durationMonths: "2 Months",
    summary: "Pass technical faculty interviews, defend empirical and algorithmic choices via a 5-slide deck, calculate true net take-home stipends, and leverage competing fully funded offers.",
    iconName: "ShieldCheck",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    accentColor: "#10b981",
    deliverables: [
      "Defended 5-slide project walkthrough and STAR-L technical questions",
      "True Net Disposable Income calculation per metropolitan area",
      "Negotiated summer funding / top-up departmental fellowship",
      "Signed Graduate Research Assistantship (GRA) or doctoral contract"
    ],
    stepsCount: 4
  },
  {
    id: "phase-6",
    number: 6,
    title: "Phase 6: Visa, TAL Clearance & Laboratory Onboarding",
    shortTitle: "Visa & Lab Onboarding",
    timeline: "0–3 Months Before Intake",
    durationMonths: "3 Months",
    summary: "Secure immigration documents (I-20 / CAS / European employment contract), clear the consular Technology Alert List (TAL) with open-science documentation, and configure your laboratory compute workstation.",
    iconName: "Globe",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    accentColor: "#06b6d4",
    deliverables: [
      "Issued Form I-20 / CAS / European Salaried Residence Permit",
      "Signed Advisor Open-Science TAL statement letter for consular interview",
      "Approved student or researcher visa in passport",
      "Laboratory Slurm compute environment and local housing arranged"
    ],
    stepsCount: 3
  }
];
