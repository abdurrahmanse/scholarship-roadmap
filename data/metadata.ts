import type { Metadata } from "next";
import { roadmapLevelsData } from "./levelsData";
import {
  homePageData,
  roadmapPageData,
  programsPageData,
  toolkitPageData,
  interviewsPageData,
  faqsPageData,
} from "./pagesData";

// ========================================================
// Canonical Global Site Metadata Configuration
// ========================================================

export const siteMetadata = {
  siteName: "Scholarship AI Roadmap",
  siteUrl: "https://scholarship-roadmap.vercel.app",
  defaultTitle: "100% Fully Funded AI & Machine Learning Postgraduate Roadmap",
  titleTemplate: "%s | Fully Funded AI & CS Roadmap",
  defaultDescription:
    "The canonical zero-to-landing blueprint for Computer Science, AI, and Machine Learning students securing 100% fully funded PhD and Master's research assistantships abroad.",
  locale: "en_US",
  keywords: [
    "Fully Funded PhD Computer Science",
    "MS Thesis AI Funding",
    "Graduate Research Assistantship",
    "GRA Stipend",
    "Machine Learning Scholarship Roadmap",
    "CSRankings Guide",
    "Cold Email Professor Template",
    "NeurIPS Workshop",
    "Technology Alert List TAL",
    "Fully Funded CS Labs",
    "AI Graduate Admissions",
  ],
  authors: [{ name: "Scholarship AI Roadmap Open Source Initiative" }],
  creator: "Scholarship AI Roadmap Team",
  publisher: "Scholarship AI Roadmap",
  themeColor: "#090d16",
};

// ========================================================
// Reusable Metadata Builder Helper
// ========================================================

export interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Creates standardized, OpenGraph and Twitter-compliant Next.js Metadata objects.
 */
export function constructMetadata({
  title,
  description = siteMetadata.defaultDescription,
  path = "",
  image,
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const url = `${siteMetadata.siteUrl}${path}`;
  const formattedTitle = title
    ? `${title} | Fully Funded AI & CS Roadmap`
    : siteMetadata.defaultTitle;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: formattedTitle,
      description,
      url,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {
          robots: {
            index: true,
            follow: true,
          },
        }),
  };
}

// ========================================================
// Centralized Pre-Configured Metadata for All Pages
// ========================================================

/**
 * Root Layout Metadata applied globally across the application.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.defaultDescription,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  openGraph: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Home Page (/) Metadata
 */
export const homeMetadata: Metadata = constructMetadata({
  title: homePageData.title,
  description: homePageData.metaDescription,
  path: "/",
});

/**
 * 5-Level Strategic Roadmap (/roadmap) Metadata
 */
export const roadmapMetadata: Metadata = constructMetadata({
  title: "5-Level Strategic Research Roadmap",
  description: roadmapPageData.metaDescription,
  path: "/roadmap",
});

/**
 * Funded Programs & Labs Directory (/programs) Metadata
 */
export const programsMetadata: Metadata = constructMetadata({
  title: "Fully Funded AI & CS Graduate Programs Directory",
  description: programsPageData.metaDescription,
  path: "/programs",
});

/**
 * Application Toolkit & Cold Email Generator (/toolkit) Metadata
 */
export const toolkitMetadata: Metadata = constructMetadata({
  title: "AI Application Toolkit: SOP, CV & Cold Email",
  description: toolkitPageData.metaDescription,
  path: "/toolkit",
});

/**
 * Interviews, 5-Slide Deck & Defense Simulator (/interviews) Metadata
 */
export const interviewsMetadata: Metadata = constructMetadata({
  title: "Professor Interviews & STAR-L Defense",
  description: interviewsPageData.metaDescription,
  path: "/interviews",
});

/**
 * Frequently Asked Questions & Knowledge Base (/faqs) Metadata
 */
export const faqsMetadata: Metadata = constructMetadata({
  title: "Admissions FAQs & Pre-Flight Checklist",
  description: faqsPageData.metaDescription,
  path: "/faqs",
});

/**
 * Dynamic Level Deep-Dive Page (/roadmap/[level]) Metadata Resolver
 */
export function getLevelMetadata(levelSlug: string): Metadata {
  const level = roadmapLevelsData.find((l) => l.slug === levelSlug);

  if (!level) {
    return constructMetadata({
      title: "Roadmap Level Not Found",
      description: "The requested roadmap level could not be found.",
      path: `/roadmap/${levelSlug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `Level ${level.levelNumber}: ${level.shortTitle}`,
    description: level.tagline,
    path: `/roadmap/${level.slug}`,
  });
}
