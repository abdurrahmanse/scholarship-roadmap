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
