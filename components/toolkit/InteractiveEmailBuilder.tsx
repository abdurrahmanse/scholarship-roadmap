"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Sparkles, Clock, Send, FileCode } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { emailPresetsData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";

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
    <section id="interactive-email-builder" className="py-20 border-b border-white/5 bg-[#0b101c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Live Customizer"}
          badgeVariant="indigo"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Interactive High-Yield Cold Email Generator"}
          subtitle={sectionMeta?.subtitle || "Generate a tailored, high-response outreach email based on the 5-point faculty formula. Pick a preset scenario or customize variables in real time."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard borderGlow="indigo" className="p-6 space-y-4 bg-[#0f1422] border border-white/10">
              {/* Preset Selector */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Select High-Response Preset Scenario:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {emailPresetsData.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleApplyPreset(preset)}
                      className={`p-2 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                        selectedPresetId === preset.id
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/50"
                          : "bg-[#090d16] text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      <span className="block text-[10px] opacity-75 uppercase tracking-wider">{preset.badge}</span>
                      <span className="truncate block font-bold">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/5">
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Target Professor Name:
                </label>
                <input
                  type="text"
                  value={profName}
                  onChange={(e) => setProfName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 focus:border-indigo-500 text-xs text-white outline-none"
                  placeholder="e.g. Prof. Chelsea Finn"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  University / Laboratory:
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 focus:border-indigo-500 text-xs text-white outline-none"
                  placeholder="e.g. Stanford University (SAIL)"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Their Recent Paper (last 12 months):
                </label>
                <input
                  type="text"
                  value={paperTitle}
                  onChange={(e) => setPaperTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 focus:border-indigo-500 text-xs text-white outline-none"
                  placeholder="e.g. Offline RL via Conservative Q-Learning"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Specific Technical Limitation or Bottleneck:
                </label>
                <input
                  type="text"
                  value={limitation}
                  onChange={(e) => setLimitation(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 focus:border-indigo-500 text-xs text-white outline-none"
                  placeholder="e.g. distribution shift under out-of-domain actions"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Your Technical Weaponry & Quantitative Result:
                </label>
                <textarea
                  rows={2}
                  value={myWeaponry}
                  onChange={(e) => setMyWeaponry(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 focus:border-indigo-500 text-xs text-white outline-none"
                  placeholder="e.g. Energy-based Dirichlet regularization improving OOD detection by 21%"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Your GitHub / Hugging Face Repository Link:
                </label>
                <input
                  type="text"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 focus:border-indigo-500 text-xs text-white outline-none"
                  placeholder="https://github.com/..."
                />
              </div>
            </GlassCard>

            {/* Timing Rule Callout */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Optimal Dispatch Window:</strong> Send on <strong>Tuesday or Thursday at 8:15 AM local time</strong> in the professor&apos;s timezone. Never send on Friday afternoon or during major conference deadlines.
              </span>
            </div>
          </div>

          {/* Live Preview Column (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard borderGlow="indigo" className="p-6 sm:p-7 bg-[#0f1422] border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-indigo-400 font-bold">
                  <Mail className="w-4 h-4" />
                  <span>Generated Email Draft (Ready to Send)</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-200">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Draft</span>
                    </>
                  )}
                </button>
              </div>

              {/* Subject Line */}
              <div className="p-3 rounded-lg bg-[#090d16] border border-white/10 mb-4 text-slate-300 text-xs">
                <span className="text-slate-500 font-bold select-none">Subject: </span>
                <span className="text-white font-semibold">{generatedSubject}</span>
              </div>

              {/* Email Content Body */}
              <div className="p-4 rounded-xl bg-[#090d16] border border-white/10 text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[480px] overflow-y-auto">
                {generatedBody}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
