export interface PhaseDetailAnchorItem {
  id: string;
  label: string;
}

export interface PhaseDetailUiData {
  badges: {
    phasePrefix: string;
    totalPhasesSuffix: string;
    mastersSpecific: string;
    phdSpecific: string;
    bothScope: string;
    freeStandard: string;
  };
  anchorNav: {
    items: PhaseDetailAnchorItem[];
  };
  hero: {
    breadcrumbHub: string;
  };
  whatWhy: {
    badge: string;
    mandateBadge: string;
    mandateHeading: string;
    rationaleBadge: string;
    rationaleHeading: string;
  };
  howSteps: {
    badge: string;
    heading: string;
    milestonesSuffix: string;
  };
  resources: {
    badge: string;
    heading: string;
    subtitle: string;
  };
  pitfallsAndExample: {
    mistakesBadge: string;
    mistakesHeading: string;
    exampleBadge: string;
    exampleHeading: string;
  };
  degreeNuances: {
    badge: string;
    heading: string;
    mastersSubheading: string;
    mastersHeading: string;
    phdSubheading: string;
    phdHeading: string;
  };
  checklist: {
    auditSuffix: string;
    heading: string;
    ofSeparator: string;
    verifiedSuffix: string;
    completeSuffix: string;
    proTipPrefix: string;
  };
  navigationFooter: {
    prevPhaseLabel: string;
    overviewLabel: string;
    allPhasesTitle: string;
    hubButton: string;
    nextPhaseLabel: string;
    completeBadge: string;
    toolkitButton: string;
  };
}

export const phaseDetailUiData: PhaseDetailUiData = {
  badges: {
    phasePrefix: "Phase",
    totalPhasesSuffix: "of 13",
    mastersSpecific: "Master's Specific",
    phdSpecific: "PhD Specific",
    bothScope: "Master's & PhD Scope",
    freeStandard: "100% Free Standard",
  },
  anchorNav: {
    items: [
      { id: "what-why", label: "Mandate & Why" },
      { id: "how-to-execute", label: "Execution Steps" },
      { id: "official-resources", label: "Official Portals" },
      { id: "mistakes-example", label: "Pitfalls & Case" },
      { id: "degree-nuances", label: "Degree Nuances" },
      { id: "checklist", label: "Preparation Audit" },
    ],
  },
  hero: {
    breadcrumbHub: "Pipeline Hub",
  },
  whatWhy: {
    badge: "Strategic Core",
    mandateBadge: "Core Tactical Mandate",
    mandateHeading: "What You Must Accomplish",
    rationaleBadge: "Why It Matters To Selection Committees",
    rationaleHeading: "Faculty Selection Panel Insight",
  },
  howSteps: {
    badge: "Action Protocol",
    heading: "How to Execute (Step-by-Step)",
    milestonesSuffix: "Sequenced Milestones",
  },
  resources: {
    badge: "Verified Portals",
    heading: "Where to Go: Official Directories & Tools",
    subtitle:
      "Always consult official governmental databases, accredited credential evaluators, and university registers.",
  },
  pitfallsAndExample: {
    mistakesBadge: "Fatal Pitfalls to Avoid",
    mistakesHeading: "Mistakes That Trigger Immediate Rejection",
    exampleBadge: "Real-World Application Example",
    exampleHeading: "Practical Execution Scenario",
  },
  degreeNuances: {
    badge: "Degree-Specific Strategic Nuances",
    heading: "Master's Coursework vs PhD Doctoral Lab Fit",
    mastersSubheading: "Coursework & Pre-Doctoral Focus",
    mastersHeading: "Master's Degree Consideration",
    phdSubheading: "Research Employment & Lab Fit",
    phdHeading: "PhD Doctoral Consideration",
  },
  checklist: {
    auditSuffix: "Preparation Audit",
    heading: "Verification Checklist",
    ofSeparator: "of",
    verifiedSuffix: "Verified",
    completeSuffix: "Complete",
    proTipPrefix: "Pro-Tip:",
  },
  navigationFooter: {
    prevPhaseLabel: "Previous Phase",
    overviewLabel: "Overview",
    allPhasesTitle: "All 13 Application Phases",
    hubButton: "All 13 Phases Pipeline Hub",
    nextPhaseLabel: "Next Sequential Step",
    completeBadge: "13-Phase Pipeline Complete",
    toolkitButton: "Explore Application Toolkit",
  },
};
