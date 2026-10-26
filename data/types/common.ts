export type PriorityLevel = "Crucial" | "Recommended" | "Optional";

export type DegreeLevel = "PhD" | "MS Thesis" | "Both";

export type FundingType =
  | "Graduate Research Assistantship (GRA)"
  | "Graduate Teaching Assistantship (GTA)"
  | "Salaried Researcher Contract"
  | "Institutional Fellowship"
  | "Government Fellowship";

export interface MetricItem {
  label: string;
  value: string;
  sublabel: string;
  iconName: string;
}

export interface DiagnosticOption {
  id: string;
  label: string;
  sub: string;
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
