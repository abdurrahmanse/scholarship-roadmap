export interface NavLinkItem {
  href: string;
  label: string;
  iconName: string;
}

export const navLinksData: NavLinkItem[] = [
  { href: "/", label: "Overview", iconName: "Cpu" },
  { href: "/roadmap", label: "Roadmap", iconName: "Map" },
  { href: "/programs", label: "Funded Programs", iconName: "GraduationCap" },
  { href: "/toolkit", label: "Dossier & Toolkit", iconName: "Wrench" },
  { href: "/interviews", label: "Technical Defense", iconName: "ShieldAlert" },
  { href: "/faqs", label: "FAQs", iconName: "HelpCircle" }
];

export const footerData = {
  brand: {
    name: "Scholarship AI Roadmap",
    tagline: "The canonical open-access blueprint for Computer Science and Artificial Intelligence researchers securing 100% fully funded graduate positions abroad.",
    badge: "100% Full-Ride Standard"
  },
  roadmapNavigation: [
    { href: "/", label: "Master Overview" },
    { href: "/roadmap", label: "7-Phase Step-by-Step Roadmap" },
    { href: "/roadmap#phase-0", label: "Phase 0: Math & Compute" },
    { href: "/roadmap#phase-1", label: "Phase 1: Workshops & arXiv" },
    { href: "/roadmap#phase-2", label: "Phase 2: CSRankings & PI Outreach" }
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
  copyright: "© 2026 Scholarship AI Roadmap. Open-access public good licensed under CC BY-SA 4.0 & MIT."
};
