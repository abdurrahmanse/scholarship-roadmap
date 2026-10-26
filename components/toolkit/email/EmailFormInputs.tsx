"use client";

import React from "react";

export interface EmailFormInputsProps {
  profName: string;
  setProfName: (val: string) => void;
  institution: string;
  setInstitution: (val: string) => void;
  paperTitle: string;
  setPaperTitle: (val: string) => void;
  limitation: string;
  setLimitation: (val: string) => void;
  myWeaponry: string;
  setMyWeaponry: (val: string) => void;
  githubUrl: string;
  setGithubUrl: (val: string) => void;
}

/**
 * Form inputs sub-component for professor outreach variables.
 */
export function EmailFormInputs({
  profName,
  setProfName,
  institution,
  setInstitution,
  paperTitle,
  setPaperTitle,
  limitation,
  setLimitation,
  myWeaponry,
  setMyWeaponry,
  githubUrl,
  setGithubUrl,
}: EmailFormInputsProps) {
  return (
    <div className="space-y-3 pt-2 border-t border-white/5">
      <div>
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
    </div>
  );
}

export default EmailFormInputs;
