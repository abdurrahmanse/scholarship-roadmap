import { DegreeLevel, FundingType } from "./common";

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
