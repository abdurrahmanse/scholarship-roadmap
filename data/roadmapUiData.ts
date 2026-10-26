export interface RoadmapHeaderChip {
  iconName: "ListOrdered" | "GraduationCap" | "Sparkles";
  label: string;
}

export interface RoadmapUiData {
  header: {
    standardBadge: string;
    chips: RoadmapHeaderChip[];
  };
  phasesSection: {
    badge: string;
    title: string;
    subtitle: string;
    countBadge: string;
  };
  levelsSection: {
    badge: string;
    title: string;
    subtitle: string;
    countBadge: string;
  };
  controls: {
    scopeLabel: string;
    clearSearchLabel: string;
    countSuffix: string;
    ofSeparator: string;
  };
  card: {
    phasePrefix: string;
    totalPhasesSuffix: string;
    mastersBadge: string;
    phdBadge: string;
    bothBadge: string;
    exploreBlueprint: string;
    strategicMandateLabel: string;
    keyMilestonesLabel: string;
    sequencedMilestonesSuffix: string;
    portalsLabel: string;
    verificationChecksSuffix: string;
    fullBlueprintCta: string;
  };
  emptyState: {
    title: string;
    description: string;
    resetLabel: string;
  };
  levelsHeader: {
    badge: string;
    title: string;
    subtitle: string;
  };
}

export const roadmapUiData: RoadmapUiData = {
  header: {
    standardBadge: "100% Fully Funded Standard",
    chips: [
      {
        iconName: "ListOrdered",
        label: "13 Sequenced Phases",
      },
      {
        iconName: "GraduationCap",
        label: "Master's & PhD Pathways",
      },
      {
        iconName: "Sparkles",
        label: "WHAT • WHY • HOW • WHERE",
      },
    ],
  },
  phasesSection: {
    badge: "13-Phase Chronological Pipeline",
    title: "Sequential Application Phases",
    subtitle: "From academic diagnostics to official visa issuance: an end-to-end chronological campaign.",
    countBadge: "13 Sequenced Phases",
  },
  levelsSection: {
    badge: "5-Level Career Ladder",
    title: "Curricular Proof-of-Work Levels",
    subtitle: "A 24-month developmental curriculum dividing graduate preparation into 5 mastery tiers.",
    countBadge: "5 Levels • 26 Actionable Tasks",
  },
  controls: {
    scopeLabel: "Scope:",
    clearSearchLabel: "Clear search",
    countSuffix: "Phases",
    ofSeparator: "of",
  },
  card: {
    phasePrefix: "Phase",
    totalPhasesSuffix: "of 13",
    mastersBadge: "Master's Specific",
    phdBadge: "PhD Specific",
    bothBadge: "Master's & PhD",
    exploreBlueprint: "Explore Blueprint",
    strategicMandateLabel: "Strategic Mandate:",
    keyMilestonesLabel: "Key Execution Milestones:",
    sequencedMilestonesSuffix: "Sequenced Milestones",
    portalsLabel: "Portals:",
    verificationChecksSuffix: "Verification Checks",
    fullBlueprintCta: "Full Blueprint & Audit",
  },
  emptyState: {
    title: "No phases match your search",
    description: "Try searching with different terms or reset your degree filters.",
    resetLabel: "Reset Filters",
  },
  levelsHeader: {
    badge: "5-Level Career Ladder",
    title: "The 5 Distinct Levels to Fully Funded Graduate Admission",
    subtitle: "A structured modular curriculum dividing the 24-month admissions campaign into 5 manageable levels. Click any level to access its actionable tasks, checklists, code snippets, and deliverables.",
  },
};
