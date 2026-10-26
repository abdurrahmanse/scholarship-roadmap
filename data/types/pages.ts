export interface PageSection {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle: string;
  badge?: string;
  content: string;
  highlights?: string[];
  dataPoints?: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  cards?: {
    title: string;
    description: string;
    tag?: string;
    icon?: string;
    bulletPoints?: string[];
    actionUrl?: string;
    actionLabel?: string;
  }[];
}

export interface MultiPageData {
  pageId: string;
  slug: string;
  title: string;
  metaDescription: string;
  hero: {
    badge: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    tertiaryCta?: { label: string; href: string };
  };
  sections: PageSection[];
}
