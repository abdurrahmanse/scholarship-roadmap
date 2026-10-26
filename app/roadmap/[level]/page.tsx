import { redirect } from "next/navigation";
import { roadmapLevelsData } from "@/data/levelsData";

export async function generateStaticParams() {
  return roadmapLevelsData.map((lvl) => ({
    level: lvl.slug,
  }));
}

export default function LevelDetailPage() {
  redirect("/roadmap");
}
