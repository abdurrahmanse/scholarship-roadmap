// ========================================================
// Canonical Data Exports for Scholarship Roadmap Frontend
// ========================================================

export * from "./types";
export * from "./phases";
export * from "./steps";
export * from "./programs";
export * from "./templates";
export * from "./interviews";
export * from "./faqs";
export * from "./pagesData";

// Modular Section Datasets
export * from "./homeData";
export * from "./roadmapSectionData";
export * from "./programsSectionData";
export * from "./toolkitSectionData";
export * from "./interviewsSectionData";
export * from "./faqsSectionData";
export * from "./stepWidgetsData";

import { phasesData } from "./phases";
import { stepsData } from "./steps";
import { fundedProgramsData } from "./programs";
import { emailTemplatesData } from "./templates";
import { interviewCasesData } from "./interviews";
import { faqsData } from "./faqs";
import { allMultiPages } from "./pagesData";

export const roadmapMasterData = {
  phases: phasesData,
  steps: stepsData,
  programs: fundedProgramsData,
  templates: emailTemplatesData,
  interviewCases: interviewCasesData,
  faqs: faqsData,
  metadata: {
    title: "The 100% Fully Funded AI & Machine Learning Postgraduate Roadmap",
    targetAudience: "Computer Science (AI/ML) Master's and PhD Candidates",
    lastUpdated: "2026-10-24",
    totalPhases: phasesData.length,
    totalSteps: stepsData.length,
    totalPrograms: fundedProgramsData.length,
    totalTemplates: emailTemplatesData.length,
    totalFaqs: faqsData.length
  }
};

export default roadmapMasterData;
