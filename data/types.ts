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

export interface PageSection {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle: string;
  badge?: string;
  content: string;
  highlights?: string[];
  dataPoints?: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  cards?: {
    title: string;
    description: string;
    tag?: string;
    icon?: string;
    bulletPoints?: string[];
    actionUrl?: string;
    actionLabel?: string;
  }[];
}

export interface MultiPageData {
  pageId: string;
  slug: string;
  title: string;
  metaDescription: string;
  hero: {
    badge: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    tertiaryCta?: { label: string; href: string };
  };
  sections: PageSection[];
}

export interface HeroEqualizerData {
  badge: string;
  status: string;
  bars: number[];
}

export interface TimelineSliderItem {
  id: string;
  monthIndex: number;
  phaseNumber: number;
  timeWindow: string;
  stageName: string;
  priorityTitle: string;
  badge: string;
  actionBullets: string[];
  deliverable: string;
  deadlineTarget: string;
  accentVariant: "indigo" | "cyan" | "emerald" | "amber" | "purple";
}

export interface NavAnchorItem {
  id: string;
  label: string;
  count?: string;
  iconName?: string;
}

export interface EmailPreset {
  id: string;
  name: string;
  badge: string;
  profName: string;
  institution: string;
  paperTitle: string;
  limitation: string;
  myWeaponry: string;
  githubUrl: string;
  subjectPrefix: string;
}

export interface CsProfilePillar {
  title: string;
  badge: string;
  iconName: string;
  summary: string;
  mustHavePoints: string[];
  competitiveAdvantage: string;
  variant: "indigo" | "cyan" | "emerald" | "purple" | "amber";
}

export interface CsProfileTier {
  id: string;
  label: string;
  badge: string;
  targetDegree: string;
  fundingModel: string;
  typicalStipend: string;
  pillars: CsProfilePillar[];
}


// ==========================================
// SECTION & WIDGET SPECIFIC TYPED DATA
// ==========================================

export interface MetricItem {
  label: string;
  value: string;
  sublabel: string;
  iconName: string;
}

export interface FundingPillar {
  title: string;
  description: string;
  iconName: string;
  tag: string;
  variant: "emerald" | "cyan" | "rose" | "purple";
  points: string[];
}

export interface CityFinancialProfile {
  name: string;
  country: string;
  institution: string;
  currency: string;
  symbol: string;
  annualGrossStipend: number;
  taxRatePercent: number;
  avgMonthlyRentShared: number;
  avgMonthlyFood: number;
  monthlyHealthInsurance: number;
  costOfLivingIndex: number;
  tuitionCovered: number;
  notes: string;
}

export interface DiagnosticOption {
  id: string;
  label: string;
  sub: string;
}

export interface GlobalFundingModel {
  title: string;
  region: string;
  iconName: string;
  stipend: string;
  tuition: string;
  tag: string;
  variant: "indigo" | "cyan" | "emerald" | "amber";
  details: string[];
}

export interface GpuTactic {
  title: string;
  desc: string;
  code: string;
  benefit: string;
}

export interface DeliverableAuditItem {
  title: string;
  phase: string;
  desc: string;
}

export interface CsrankingsStep {
  num: string;
  title: string;
  desc: string;
}

export interface CostOfLivingRow {
  hub: string;
  gross: string;
  rent: string;
  savings: string;
  tier: string;
  variant: "emerald" | "cyan" | "amber" | "purple";
}

export interface SopMovement {
  num: string;
  pct: string;
  title: string;
  desc: string;
  points: string[];
}

export interface CvBenchmark {
  label: string;
  value: string;
  sub: string;
}

export interface XyzExample {
  bad: string;
  good: string;
}

export interface SlideData {
  number: number;
  title: string;
  subtitle: string;
  timing: string;
  visualLayout: string;
  keyPoints: string[];
  facultyInterruptionQuestion: string;
  defenseAnswer: string;
}

export interface RedFlagRule {
  term: string;
  danger: string;
  safeReplacement: string;
}

export interface OfferFinancialMetric {
  label: string;
  value: string;
  sub: string;
}

export interface FaqCategoryCard {
  name: string;
  desc: string;
  tag: string;
  iconName: string;
  variant: "purple" | "cyan" | "emerald" | "amber";
}

export interface LaunchpadCard {
  title: string;
  desc: string;
  href: string;
  iconName: string;
}
