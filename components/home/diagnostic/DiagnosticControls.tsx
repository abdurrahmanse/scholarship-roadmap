"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import {
  diagnosticDegreeOptions,
  diagnosticGpaOptions,
  diagnosticPaperOptions,
  diagnosticEngineeringOptions,
} from "@/data/homeData";

export interface DiagnosticControlsProps {
  degree: string;
  setDegree: (val: string) => void;
  gpa: string;
  setGpa: (val: string) => void;
  papers: string;
  setPapers: (val: string) => void;
  engineering: string;
  setEngineering: (val: string) => void;
}

/**
 * Questionnaire controls sub-section containing the 4 profile diagnostic inputs.
 */
export function DiagnosticControls({
  degree,
  setDegree,
  gpa,
  setGpa,
  papers,
  setPapers,
  engineering,
  setEngineering,
}: DiagnosticControlsProps) {
  return (
    <GlassCard borderGlow="indigo" className="space-y-6 bg-[#0f1422] border border-white/10 p-6 sm:p-7">
      {/* Question 1: Target Degree */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
          1. Target Postgraduate Path
        </label>
        <TabsContainer variant="cards" columns={3}>
          {diagnosticDegreeOptions.map((item) => (
            <TabItem
              key={item.id}
              active={degree === item.id}
              onClick={() => setDegree(item.id)}
              variant="cards"
              title={item.label}
              subtitle={item.sub}
              theme="indigo"
            />
          ))}
        </TabsContainer>
      </div>

      {/* Question 2: Academic GPA */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
          2. Cumulative Academic GPA (Scale of 4.0)
        </label>
        <TabsContainer variant="cards" columns={4}>
          {diagnosticGpaOptions.map((item) => (
            <TabItem
              key={item.id}
              active={gpa === item.id}
              onClick={() => setGpa(item.id)}
              variant="cards"
              title={item.label}
              subtitle={item.sub}
              theme="cyan"
            />
          ))}
        </TabsContainer>
      </div>

      {/* Question 3: Research Capital & Publications */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 font-mono">
          3. Peer-Reviewed Research & Preprints
        </label>
        <TabsContainer variant="cards" columns={2}>
          {diagnosticPaperOptions.map((item) => (
            <TabItem
              key={item.id}
              active={papers === item.id}
              onClick={() => setPapers(item.id)}
              variant="cards"
              title={item.label}
              subtitle={item.sub}
              theme="emerald"
            />
          ))}
        </TabsContainer>
      </div>

      {/* Question 4: Technical Stack */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 font-mono">
          4. Production AI Stack & Compute Experience
        </label>
        <TabsContainer variant="cards" columns={3}>
          {diagnosticEngineeringOptions.map((item) => (
            <TabItem
              key={item.id}
              active={engineering === item.id}
              onClick={() => setEngineering(item.id)}
              variant="cards"
              title={item.label}
              subtitle={item.sub}
              theme="purple"
            />
          ))}
        </TabsContainer>
      </div>
    </GlassCard>
  );
}

export default DiagnosticControls;
