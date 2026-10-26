export interface CountryGuidesUiData {
  card: {
    moreRoutesSuffix: string;
    govtScholarshipSingular: string;
    govtScholarshipPlural: string;
    assistantshipsBadge: string;
    fullGuideCta: string;
  };
  filters: {
    supervisorLabel: string;
    showingPrefix: string;
    ofSeparator: string;
    countriesSuffix: string;
  };
}

export const countryGuidesUiData: CountryGuidesUiData = {
  card: {
    moreRoutesSuffix: "more",
    govtScholarshipSingular: "gov't scholarship",
    govtScholarshipPlural: "gov't scholarships",
    assistantshipsBadge: "Assistantships Available",
    fullGuideCta: "Full Guide",
  },
  filters: {
    supervisorLabel: "Supervisor Outreach:",
    showingPrefix: "Showing",
    ofSeparator: "of",
    countriesSuffix: "countries",
  },
};
