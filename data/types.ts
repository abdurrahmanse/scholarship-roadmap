export type PriorityLevel = "Crucial" | "Recommended" | "Optional";

export type DegreeLevel = "PhD" | "MS Thesis" | "Both";

export type FundingType = 
  | "Graduate Research Assistantship (GRA)"
  | "Graduate Teaching Assistantship (GTA)"
  | "Salaried Researcher Contract"
  | "Institutional Fellowship"
  | "Government Fellowship";

export interface ResourceItem {
  title: string;
  url: string;
  type: "tool" | "paper" | "guide" | "official" | "database";
  description?: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  detail: string;
  completedDefault?: boolean;
}

export interface RoadmapStep {
  id: string;
  phaseId: string;
  stepNumber: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  duration: string;
  priority: PriorityLevel;
  keyObjective: string;
  description: string;
  checklist: ChecklistItem[];
  proTips: string[];
  commonPitfalls: string[];
  deliverable: string;
  codeSnippet?: {
    language: string;
    caption: string;
    code: string;
  };
  resources: ResourceItem[];
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  timeline: string;
  durationMonths: string;
  summary: string;
  iconName: string;
  badgeColor: string;
  accentColor: string;
  deliverables: string[];
  stepsCount: number;
}

export interface FundedProgram {
  id: string;
  name: string;
  institution: string;
  department: string;
  country: string;
  city: string;
  region: "North America" | "Europe" | "Asia & Oceania" | "Global";
  degreeType: DegreeLevel;
  fundingModel: FundingType;
  fundingDetails: {
    tuitionCoverage: string;
    stipendAnnualUSD: string;
    stipendMonthlyLocal: string;
    healthInsurance: boolean;
    computeAccess: string;
    travelGrant: boolean;
  };
  keyFacultyOrLabs: string[];
  deadlinePriority: string;
  portalUrl: string;
  requirements: {
    minGpaSuggested: string;
    grePolicy: "Not Considered / Waived" | "Optional" | "Required" | "Not Required" | string;
    englishMin: string;
    publicationsExpected: string;
  };
  tags: string[];
}

export interface EmailTemplate {
  id: string;
  title: string;
  category: "Cold Outreach" | "Follow-Up" | "Recommendation" | "Negotiation" | "Visa Defense";
  targetAudience: string;
  subject: string;
  description: string;
  body: string;
  placeholders: string[];
  instructions: string[];
}

export interface InterviewDefenseCase {
  id: string;
  category: "Systems & Memory" | "Model Training & Convergence" | "Inference & Optimization" | "Theory & Foundations";
  technicalChallenge: string;
  context: string;
  task: string;
  actionTaken: string;
  quantitativeResult: string;
  researchInsight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Funding & Money" | "Admissions & Strategy" | "Research & Code" | "Testing & Requirements" | "Visa & Relocation";
  tags: string[];
}
