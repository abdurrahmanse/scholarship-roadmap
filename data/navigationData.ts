export interface NavLinkItem {
  href: string;
  label: string;
  iconName: string;
}

export interface StatusTickerItem {
  id: string;
  badge: string;
  text: string;
  variant: "indigo" | "cyan" | "emerald" | "amber" | "purple";
}

export const liveStatusTickerData: StatusTickerItem[] = [
  {
    id: "funding-standard",
    badge: "100% Full-Ride",
    text: "Full Tuition Remission + Monthly Living Stipend ($30k–$85k) Standard",
    variant: "emerald"
  },
  {
    id: "compute-baseline",
    badge: "Compute Infrastructure",
    text: "Dedicated Multi-A100 / H100 SXM5 GPU Lab Nodes Included",
    variant: "cyan"
  },
  {
    id: "cgs-charter",
    badge: "CGS Resolution",
    text: "April 15 Binding Acceptance Window Enforced Across 400+ Institutions",
    variant: "indigo"
  },
  {
    id: "visa-tal",
    badge: "TAL Protocol",
    text: "Technology Alert List Consular Defense & Advisor Open-Science Protocols",
    variant: "amber"
  },
  {
    id: "peer-review",
    badge: "Top-Tier Venues",
    text: "Targeting NeurIPS, ICML, ICLR, CVPR & Flagship Workshops",
    variant: "purple"
  }
];

export const liveIndicatorData = {
  status: "ONLINE",
  label: "100% Fully Funded",
  detail: "2026–2027 Admissions Cycle Open",
  activePillText: "Fully Funded Research Only"
};

export const navLinksData: NavLinkItem[] = [
  { href: "/", label: "Home", iconName: "Cpu" },
  { href: "/roadmap", label: "Roadmap", iconName: "Map" },
  { href: "/programs", label: "Programs", iconName: "GraduationCap" },
  { href: "/toolkit", label: "Toolkit", iconName: "Wrench" },
  { href: "/interviews", label: "Interviews", iconName: "ShieldAlert" },
  { href: "/faqs", label: "FAQs", iconName: "HelpCircle" }
];

export const footerData = {
  brand: {
    name: "Scholarship AI Roadmap",
    tagline: "The canonical open-access blueprint for Computer Science and Artificial Intelligence researchers securing 100% fully funded graduate positions abroad.",
    badge: "100% Full-Ride Standard"
  },
  roadmapNavigation: [
    { href: "/", label: "Home" },
    { href: "/roadmap", label: "7-Phase Roadmap" },
    { href: "/roadmap#phase-0", label: "Phase 0: Math & Compute" },
    { href: "/roadmap#phase-1", label: "Phase 1: Workshops & arXiv" },
    { href: "/roadmap#phase-2", label: "Phase 2: CSRankings & Outreach" }
  ],
  directoryAndTools: [
    { href: "/programs", label: "Funded AI Programs & Labs" },
    { href: "/toolkit#interactive-email-builder", label: "Cold Email Generator" },
    { href: "/toolkit#sop-blueprint", label: "Technical SOP Blueprint" },
    { href: "/interviews", label: "STAR-L Technical Defense" },
    { href: "/interviews#visa-tal-checker", label: "Technology Alert List (TAL) Guide" }
  ],
  keyDatabases: [
    { href: "https://csrankings.org", label: "CSRankings.org", external: true },
    { href: "https://arxiv.org/corr", label: "arXiv Computer Science", external: true },
    { href: "https://openreview.net", label: "OpenReview.net", external: true },
    { href: "https://huggingface.co/spaces", label: "Hugging Face Spaces", external: true },
    { href: "/faqs", label: "Admissions FAQ & Knowledge Base", external: false }
  ],
  sections: {
    roadmap: "Roadmap Navigation",
    tools: "Programs & Toolkits",
    databases: "Key Databases"
  },
  subtext: "Crafted for ambitious AI & ML researchers worldwide",
  copyright: "© 2026 Scholarship AI Roadmap. Open-access public good licensed under CC BY-SA 4.0 & MIT."
};

