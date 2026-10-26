"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { WidgetCallout } from "@/components/roadmap/widgets/common";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { emailPresetsData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";
import {
  EmailPresetSelector,
  EmailFormInputs,
  EmailPreviewCard,
} from "./email";

export function InteractiveEmailBuilder() {
  const [selectedPresetId, setSelectedPresetId] = useState(emailPresetsData[0].id);
  const [profName, setProfName] = useState(emailPresetsData[0].profName);
  const [institution, setInstitution] = useState(emailPresetsData[0].institution);
  const [paperTitle, setPaperTitle] = useState(emailPresetsData[0].paperTitle);
  const [limitation, setLimitation] = useState(emailPresetsData[0].limitation);
  const [myWeaponry, setMyWeaponry] = useState(emailPresetsData[0].myWeaponry);
  const [githubUrl, setGithubUrl] = useState(emailPresetsData[0].githubUrl);
  const [copied, setCopied] = useState(false);

  const sectionMeta = toolkitPageData.sections[2];

  const handleApplyPreset = (preset: typeof emailPresetsData[0]) => {
    setSelectedPresetId(preset.id);
    setProfName(preset.profName);
    setInstitution(preset.institution);
    setPaperTitle(preset.paperTitle);
    setLimitation(preset.limitation);
    setMyWeaponry(preset.myWeaponry);
    setGithubUrl(preset.githubUrl);
  };

  const currentPreset = emailPresetsData.find((p) => p.id === selectedPresetId) || emailPresetsData[0];
  const generatedSubject = `${currentPreset.subjectPrefix} – Inquiry regarding ${paperTitle.slice(0, 32)}...`;

  const generatedBody = `Dear ${profName || "[Professor's Last Name]"},

I have been following your lab's work at ${institution || "[Institution]"} with great admiration, particularly your recent paper "${paperTitle || "[Recent Paper Title]"}".

While studying your benchmark results, I was especially intrigued by your ablation analysis on ${limitation || "[Specific limitation or open research question]"}. In my recent research, I addressed a similar bottleneck by developing ${myWeaponry || "[Your technical solution & quantitative benchmark result]"}. 

I have open-sourced the reproducible PyTorch codebase and validation weights on GitHub at:
${githubUrl || "[GitHub Repository Link]"}

I am applying for fully funded PhD / MS Thesis graduate positions for Fall 2026, and my research interests in scalable robot learning and foundation models align closely with your lab's current grants. 

Would you have 15 minutes in the coming weeks for a brief Zoom conversation to discuss your lab's upcoming research directions and potential graduate openings?

My academic CV and research preprint are attached for your review. Thank you very much for your time and consideration.

Sincerely,
[Your Full Name]
B.S. / M.S. in Computer Science
[Your Current University]
[Link to Personal Website / Google Scholar Profile]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${generatedSubject}\n\n${generatedBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="interactive-email-builder" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={sectionMeta?.badge || "Live Customizer"}
          badgeVariant="indigo"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Interactive High-Yield Cold Email Generator"}
          subtitle={sectionMeta?.subtitle || "Generate a tailored, high-response outreach email based on the 5-point faculty formula. Pick a preset scenario or customize variables in real time."}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard borderGlow="indigo" className="p-6 space-y-4 bg-[#0f1422] border border-white/10">
              <EmailPresetSelector
                selectedPresetId={selectedPresetId}
                onSelectPreset={handleApplyPreset}
              />
              <EmailFormInputs
                profName={profName}
                setProfName={setProfName}
                institution={institution}
                setInstitution={setInstitution}
                paperTitle={paperTitle}
                setPaperTitle={setPaperTitle}
                limitation={limitation}
                setLimitation={setLimitation}
                myWeaponry={myWeaponry}
                setMyWeaponry={setMyWeaponry}
                githubUrl={githubUrl}
                setGithubUrl={setGithubUrl}
              />
            </GlassCard>

            {/* Timing Rule Callout */}
            <WidgetCallout
              variant="warning"
              title="Optimal Dispatch Window:"
              message="Send on Tuesday or Thursday at 8:15 AM local time in the professor's timezone. Never send on Friday afternoon or during major conference deadlines."
            />
          </div>

          {/* Live Preview Column (7 cols) */}
          <div className="lg:col-span-7">
            <EmailPreviewCard
              subject={generatedSubject}
              body={generatedBody}
              copied={copied}
              onCopy={handleCopy}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveEmailBuilder;
