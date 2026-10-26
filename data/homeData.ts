export interface HomeHeroBadge {
  iconName: string;
  title: string;
  description: string;
  color: "indigo" | "teal" | "emerald" | "amber";
}

export interface HomeHeroData {
  badge: {
    label: string;
    pingText: string;
    sublabel: string;
  };
  title: string;
  titleGradient: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  valueBadges: HomeHeroBadge[];
}

export interface PathwayFeature {
  iconName: string;
  label: string;
  detail: string;
}

export interface DegreePathway {
  id: "masters" | "phd";
  badge: string;
  title: string;
  duration: string;
  description: string;
  features: PathwayFeature[];
  ctaLabel: string;
  ctaHref: string;
}

export interface DegreePathwaySelectorData {
  badge: string;
  title: string;
  subtitle: string;
  pathways: DegreePathway[];
}

export interface TimelineOverviewData {
  badge: string;
  title: string;
  subtitle: string;
  phasePrefix: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FundingPillarItem {
  number: string;
  title: string;
  iconName: string;
  badge: string;
  badgeVariant: "emerald" | "cyan" | "indigo" | "amber";
  description: string;
  features: string[];
  examples: string;
}

export interface FundingPillarsData {
  badge: string;
  title: string;
  subtitle: string;
  pillars: FundingPillarItem[];
  callout: {
    title: string;
    description: string;
    badge: string;
  };
}

export interface FeaturedCountriesData {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  featuredCountryIds: string[];
}

export interface QuickNavItem {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface QuickNavData {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  links: QuickNavItem[];
}

// -------------------------------------------------------------
// CENTRALIZED HOME PAGE DATA (Concise, Student-Friendly, Fact-Checked)
// -------------------------------------------------------------

export const homeHeroData: HomeHeroData = {
  badge: {
    pingText: "Live Guide",
    label: "13-Phase International Roadmap",
    sublabel: "100% Free & Open Access"
  },
  title: "Your Step-by-Step Roadmap to a",
  titleGradient: "Fully Funded",
  description:
    "From finding the right country and scholarship to contacting professors, preparing documents, and submitting applications—follow a clear roadmap to navigate the entire process.",
  primaryCta: {
    label: "Explore the Roadmap",
    href: "/roadmap"
  },
  secondaryCta: {
    label: "Explore Countries",
    href: "/countries"
  },
  valueBadges: [
    {
      iconName: "Compass",
      title: "13 Clear Phases",
      description: "From profile audit to visa issuance and funding defense.",
      color: "indigo"
    },
    {
      iconName: "Globe2",
      title: "20 Country Guides",
      description: "Europe, North America, Asia & Oceania with official links.",
      color: "teal"
    },
    {
      iconName: "ShieldCheck",
      title: "100% Full Funding",
      description: "Tuition waiver plus monthly stipend or doctoral salary.",
      color: "emerald"
    },
    {
      iconName: "Sparkles",
      title: "No Account Needed",
      description: "Open educational roadmap. No login, paywalls, or trackers.",
      color: "amber"
    }
  ]
};

export const degreePathwaySelectorData: DegreePathwaySelectorData = {
  badge: "Postgraduate Pathways",
  title: "Choose Your Postgraduate Journey",
  subtitle:
    "Master's scholarships and PhD funding operate differently. Select a pathway to compare funding mechanisms, supervisor rules, and admission criteria.",
  pathways: [
    {
      id: "masters",
      badge: "Pathway 01",
      title: "Master's Scholarship Roadmap",
      duration: "1–2 Years",
      description:
        "Designed for taught or research Master's degrees abroad. Focuses on government awards (DAAD, Eiffel, Chevening), tuition-free universities, and teaching assistantships.",
      features: [
        {
          iconName: "DollarSign",
          label: "Funding Route",
          detail: "Government scholarships, university merit waivers, or free tuition with part-time work."
        },
        {
          iconName: "Users",
          label: "Supervisor Outreach",
          detail: "Rarely needed for taught programs; required for thesis-based degrees in Canada."
        },
        {
          iconName: "BookOpen",
          label: "Selection Focus",
          detail: "Undergraduate GPA, course prerequisites (ECTS alignment), and Motivation Letter."
        }
      ],
      ctaLabel: "Explore Master's Roadmap",
      ctaHref: "/roadmap?degree=masters"
    },
    {
      id: "phd",
      badge: "Pathway 02",
      title: "PhD Funding Roadmap",
      duration: "3–5 Years",
      description:
        "Designed for doctoral researchers. Focuses on European salaried employment contracts, North American Research Assistantships (GRA/GTA), and external research grants.",
      features: [
        {
          iconName: "Briefcase",
          label: "Funding Route",
          detail: "Statutory employee salaries in Europe (€2,200–€4,000/mo) or US/Canada RA/TA assistantships."
        },
        {
          iconName: "MailCheck",
          label: "Supervisor Outreach",
          detail: "Essential in the UK, Germany, Canada, and Australia before formal application."
        },
        {
          iconName: "Award",
          label: "Selection Focus",
          detail: "Research proposal quality, methodology match, publications, and supervisor fit."
        }
      ],
      ctaLabel: "Explore PhD Roadmap",
      ctaHref: "/roadmap?degree=phd"
    }
  ]
};

export const timelineOverviewData: TimelineOverviewData = {
  badge: "Complete 13-Phase Sequence",
  title: "The Scholarship Application Journey",
  subtitle:
    "A logical, 13-phase sequence from square one to your funding offer. Select any phase to review actionable instructions.",
  phasePrefix: "Phase",
  ctaLabel: "Open Complete 13-Phase Roadmap",
  ctaHref: "/roadmap"
};

export const fundingPillarsData: FundingPillarsData = {
  badge: "Funding Standards",
  title: "The 4 Global Funding Models",
  subtitle:
    "Do not confuse a partial tuition discount with a sustainable, fully funded graduate package. Learn how international funding works.",
  pillars: [
    {
      number: "01",
      title: "Government Bilateral Scholarships",
      iconName: "Award",
      badge: "Full-Ride Awards",
      badgeVariant: "emerald",
      description: "Funded by foreign ministries and national exchange councils.",
      features: [
        "100% full tuition coverage",
        "Monthly tax-free living stipend ($1,000–$2,000/mo)",
        "Round-trip airfare & arrival allowance",
        "Comprehensive health insurance"
      ],
      examples: "DAAD (Germany), Eiffel (France), Chevening (UK), Fulbright (USA), MEXT (Japan), GKS (Korea)."
    },
    {
      number: "02",
      title: "European Salaried PhD Employment",
      iconName: "Briefcase",
      badge: "Employment Contracts",
      badgeVariant: "cyan",
      description: "Doctoral researchers are hired as university staff with standard employee rights.",
      features: [
        "Statutory monthly salary (€2,200–€4,000+ net/mo)",
        "Zero tuition fees (PhD is a job, not student status)",
        "Paid annual vacation (25–30 days) and pension",
        "Protected by national collective bargaining agreements"
      ],
      examples: "Sweden, Netherlands, Norway, Denmark, Switzerland, Germany (TV-L E13)."
    },
    {
      number: "03",
      title: "Graduate Assistantships (GRA / GTA)",
      iconName: "DollarSign",
      badge: "North American Standard",
      badgeVariant: "indigo",
      description: "Universities cover tuition and living costs in return for 20 hours/week of research or teaching.",
      features: [
        "100% tuition waiver for international students",
        "Living stipend ($28,000–$45,000/year)",
        "Subsidized university health insurance",
        "Direct laboratory mentorship with a faculty PI"
      ],
      examples: "United States (R1 research universities) and Canada (U15 minimum funding packages)."
    },
    {
      number: "04",
      title: "The Partial Waiver Warning",
      iconName: "AlertTriangle",
      badge: "Critical Warning",
      badgeVariant: "amber",
      description: "Partial discounts leave you responsible for heavy living costs and remaining tuition.",
      features: [
        "Covers only 10%–50% of tuition costs",
        "Provides zero food, rent, or travel funding",
        "Requires $15,000–$30,000/year in personal savings",
        "High risk of visa rejection if bank balance is insufficient"
      ],
      examples: "Merit discounts, Dean's partial scholarships, and fee reductions without stipends."
    }
  ],
  callout: {
    badge: "Key Rule",
    title: "Always Verify True Net Living Stipends",
    description:
      "A legitimate fully funded offer covers 100% of tuition and provides enough monthly income to pay for rent, groceries, and mandatory health insurance without personal debt."
  }
};

export const featuredCountriesData: FeaturedCountriesData = {
  badge: "20 Destinations Covered",
  title: "Featured Scholarship Destinations",
  subtitle:
    "Explore funding models, doctoral salaries, government scholarships, and supervisor rules by country.",
  ctaLabel: "Explore all 20 country guides",
  ctaHref: "/countries",
  featuredCountryIds: ["germany", "sweden", "netherlands", "united-states", "canada", "japan"]
};

export const quickNavData: QuickNavData = {
  badge: "Platform Hub",
  title: "Quick Navigation Hub",
  subtitle: "Jump straight to the section you need right now.",
  ctaText: "Open Guide",
  links: [
    {
      title: "Complete Roadmap",
      description: "13 phases from profile audit to funding offer evaluation.",
      href: "/roadmap",
      iconName: "Map"
    },
    {
      title: "Country Guides",
      description: "20 country dossiers with funding routes and official portals.",
      href: "/countries",
      iconName: "Globe2"
    },
    {
      title: "Finding Scholarships",
      description: "11-step search method, Boolean queries, and portal directory.",
      href: "/scholarships",
      iconName: "Search"
    },
    {
      title: "Finding Professors",
      description: "Supervisor outreach workflow, cold email templates, and follow-up rules.",
      href: "/professors",
      iconName: "Users"
    },
    {
      title: "Required Documents",
      description: "Blueprints for CV, 5-part SOP, Proposal, and recommendation letters.",
      href: "/documents",
      iconName: "FileCheck"
    },
    {
      title: "Application Process",
      description: "Portal submissions, time zones, fee waivers, and interview prep.",
      href: "/roadmap#phase-09",
      iconName: "Send"
    },
    {
      title: "Admissions FAQs",
      description: "Clear answers on IELTS waivers, low GPAs, publications, and rejection recovery.",
      href: "/faqs",
      iconName: "HelpCircle"
    }
  ]
};
