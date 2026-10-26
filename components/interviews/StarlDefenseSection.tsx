"use client";

import React, { useState } from "react";
import { Activity } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { StarlCaseCard } from "@/components/interviews/StarlCaseCard";
import { interviewCasesData } from "@/data/interviews";

interface StarlDefenseSectionProps {
  initialCategory?: string;
}

export function StarlDefenseSection({ initialCategory = "All" }: StarlDefenseSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [expandedId, setExpandedId] = useState<string>(interviewCasesData[0]?.id || "");

  const categories = ["All", ...Array.from(new Set(interviewCasesData.map((c) => c.category)))];

  const filteredCases = selectedCategory === "All"
    ? interviewCasesData
    : interviewCasesData.filter((c) => c.category === selectedCategory);

  return (
    <section id="starl-defense" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="STAR-L Defense Cases"
          badgeVariant="cyan"
          badgeIcon={<Activity className="w-3.5 h-3.5 text-cyan-400" />}
          title="STAR-L Deep Learning Technical Defense Scenarios"
          subtitle="Real-world engineering challenges across memory bottlenecks, representation collapse, and real-time robotic latency with copyable talking points."
          counter={`${filteredCases.length} Scenarios Available`}
          align="center"
        />

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <TabsContainer theme="cyan" size="sm">
            {categories.map((cat) => (
              <TabItem
                key={cat}
                active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </TabItem>
            ))}
          </TabsContainer>
        </div>

        {/* STAR-L Cards */}
        <div className="space-y-6">
          {filteredCases.map((c) => (
            <StarlCaseCard
              key={c.id}
              defenseCase={c}
              isExpanded={expandedId === c.id}
              onToggle={() => setExpandedId(expandedId === c.id ? "" : c.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StarlDefenseSection;
