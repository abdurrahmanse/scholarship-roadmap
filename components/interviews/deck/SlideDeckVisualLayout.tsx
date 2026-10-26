import React from "react";

export interface SlideDeckVisualLayoutProps {
  visualLayout: string;
}

/**
 * Slide visual mockup and on-screen layout guide sub-component.
 */
export function SlideDeckVisualLayout({
  visualLayout,
}: SlideDeckVisualLayoutProps) {
  return (
    <div className="p-5 rounded-2xl bg-[#090d16] border border-white/10 mb-6">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
        Recommended Visual Layout on Screen:
      </span>
      <div className="text-xs text-purple-200 font-mono leading-relaxed">
        {visualLayout}
      </div>
    </div>
  );
}

export default SlideDeckVisualLayout;
