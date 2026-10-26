import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { roadmapPhasesData, getPhaseBySlug } from "@/data/roadmapPhasesData";
import { PhaseDetailPage } from "@/components/roadmap/phases/PhaseDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return roadmapPhasesData.map((phase) => ({ slug: phase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const phase = getPhaseBySlug(slug);
  if (!phase) return { title: "Phase Not Found" };

  return {
    title: `Phase ${phase.number}: ${phase.title} — Scholarship Roadmap`,
    description: `${phase.tagline} Detailed step-by-step instructions, official resources, common pitfalls to avoid, and preparation checklist for Phase ${phase.number}.`,
    openGraph: {
      title: `Phase ${phase.number}: ${phase.title} — Fully Funded Scholarship Roadmap`,
      description: phase.what.slice(0, 160),
      type: "article",
    },
  };
}

export default async function PhaseDetailRoute({ params }: Props) {
  const { slug } = await params;
  const phase = getPhaseBySlug(slug);

  if (!phase) {
    notFound();
  }

  return <PhaseDetailPage phase={phase} />;
}
