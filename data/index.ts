// ========================================================
// Canonical Data Exports for Scholarship Roadmap Frontend
// ========================================================

export * from "./types";
export * from "./steps";
export * from "./faqs";
export * from "./pagesData";
export * from "./levelsData";
export * from "./navigationData";
export * from "./metadata";

// Comprehensive Roadmap Datasets
export * from "./roadmapPhasesData";
export * from "./countryGuidesData";
export * from "./documentsData";
export * from "./professorsData";
export * from "./scholarshipsSearchData";

// Modular Section Datasets
export * from "./homeData";
export * from "./roadmapSectionData";
export * from "./faqsSectionData";
export * from "./stepWidgetsData";

// Specialized UI Text & Layout Datasets
export * from "./admissionsLaunchpadData";
export * from "./roadmapUiData";
export * from "./phaseDetailUiData";
export * from "./levelDetailUiData";
export * from "./scholarshipsUiData";
export * from "./countryGuidesUiData";

import { roadmapPhasesData } from "./roadmapPhasesData";
import { countryGuidesData } from "./countryGuidesData";
import { documentsData } from "./documentsData";
import { coldEmailTemplates } from "./professorsData";
import { faqsData } from "./faqs";

export const scholarshipRoadmapMasterData = {
  phases: roadmapPhasesData,
  countries: countryGuidesData,
  documents: documentsData,
  emailTemplates: coldEmailTemplates,
  faqs: faqsData,
  metadata: {
    title: "Scholarship Roadmap — Step-by-Step to a Fully Funded Master's or PhD",
    targetAudience: "Prospective International Master's & PhD Scholarship Candidates",
    lastUpdated: "2026-10-26",
    totalPhases: roadmapPhasesData.length,
    totalCountries: countryGuidesData.length,
    totalDocuments: documentsData.length,
    totalTemplates: coldEmailTemplates.length,
    totalFaqs: faqsData.length,
  },
};

export default scholarshipRoadmapMasterData;
