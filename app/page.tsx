import Link from "next/link";
import { homePageData } from "@/data/pagesData";
import { 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Building, 
  Briefcase, 
  Crown, 
  Zap, 
  FileCode, 
  Target, 
  FileSpreadsheet, 
  Send, 
  Globe 
} from "lucide-react";

export default function HomePage() {
  const { hero, sections } = homePageData;
  const fundingStandard = sections.find((s) => s.id === "funding-standard");
  const pipeline = sections.find((s) => s.id === "pipeline-overview");
  const models = sections.find((s) => s.id === "funding-models");
  const diagnostic = sections.find((s) => s.id === "diagnostic-scorecard");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-800/80">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>{hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            {hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {hero.highlightWord}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={hero.primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-102"
            >
              <span>{hero.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={hero.secondaryCta?.href || "/programs"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-semibold text-sm transition-all"
            >
              <span>{hero.secondaryCta?.label}</span>
            </Link>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white tracking-tight">100%</div>
              <div className="text-xs font-semibold text-indigo-400 mt-0.5">Full Tuition Waiver</div>
              <p className="text-[11px] text-neutral-400 mt-1">Zero out-of-pocket tuition across all target programs</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white tracking-tight">$30k–$85k</div>
              <div className="text-xs font-semibold text-indigo-400 mt-0.5">Annual Living Stipend</div>
              <p className="text-[11px] text-neutral-400 mt-1">Covers rent, food, utilities, and comfortable living</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white tracking-tight">A100 / H100</div>
              <div className="text-xs font-semibold text-indigo-400 mt-0.5">GPU Compute Quotas</div>
              <p className="text-[11px] text-neutral-400 mt-1">Dedicated lab compute and supercomputing clusters</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white tracking-tight">$10k–$15k/mo</div>
              <div className="text-xs font-semibold text-indigo-400 mt-0.5">Summer Internships</div>
              <p className="text-[11px] text-neutral-400 mt-1">Google DeepMind, Meta FAIR, OpenAI, Microsoft</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: THE 100% FULL-FUNDING AI CHARTER
         ======================================================== */}
      {fundingStandard && (
        <section id="funding-standard" className="py-20 border-b border-neutral-800/80 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                {fundingStandard.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                {fundingStandard.title}
              </h2>
              <p className="text-neutral-400 text-sm mt-2">{fundingStandard.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Context and Highlights */}
              <div className="space-y-6">
                <p className="text-neutral-300 leading-relaxed text-sm">
                  {fundingStandard.content}
                </p>

                <div className="space-y-3">
                  {fundingStandard.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-300 font-medium leading-normal">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data points card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-2 mb-6 text-white font-semibold text-sm">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                  <span>The Uncompromising Full-Ride Criteria</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {fundingStandard.dataPoints?.map((dp, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                      <div className="text-xs text-neutral-400 font-medium">{dp.label}</div>
                      <div className="text-xl font-bold text-white mt-1">{dp.value}</div>
                      <div className="text-[11px] text-indigo-400 mt-0.5">{dp.sublabel}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-800/80">
                  <div className="text-xs text-neutral-400 leading-relaxed">
                    <strong className="text-neutral-200">Rule of Thumb:</strong> If a university offers a "20% or 30% partial tuition scholarship" for an AI Master's, it is a revenue-generating program. Target institutions that waive 100% of tuition and pay you to research.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 2: THE 7-PHASE MASTER TIMELINE
         ======================================================== */}
      {pipeline && (
        <section id="pipeline" className="py-20 border-b border-neutral-800/80 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                {pipeline.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                {pipeline.title}
              </h2>
              <p className="text-neutral-400 text-sm mt-2">{pipeline.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pipeline.cards?.map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 transition-all hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-neutral-800 space-y-1.5">
                      {card.bulletPoints?.map((bp, bidx) => (
                        <div key={bidx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href="/roadmap"
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
                    >
                      <span>Explore this phase</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/20 transition-transform hover:scale-102"
              >
                <span>View Full Step-by-Step Roadmap with Checklists</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 3: THE 4 GLOBAL FUNDING ARCHITECTURES
         ======================================================== */}
      {models && (
        <section id="funding-models" className="py-20 border-b border-neutral-800/80 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                {models.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                {models.title}
              </h2>
              <p className="text-neutral-400 text-sm mt-2">{models.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {models.cards?.map((card, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{card.description}</p>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-800">
                    {card.bulletPoints?.map((bp, bidx) => (
                      <div key={bidx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 4: DIAGNOSTIC READINESS SCORECARD
         ======================================================== */}
      {diagnostic && (
        <section id="diagnostic" className="py-20 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {diagnostic.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                {diagnostic.title}
              </h2>
              <p className="text-neutral-400 text-sm mt-2">{diagnostic.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diagnostic.cards?.map((card, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800/90 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {card.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mt-3">{card.title}</h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{card.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-800 space-y-1.5">
                    {card.bulletPoints?.map((bp, bidx) => (
                      <div key={bidx} className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA Bar */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border border-indigo-500/30 text-center relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white tracking-tight">Ready to begin your postgraduate application journey?</h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto mt-2">
                Follow our sequential 7-phase roadmap, download copy-paste cold email scripts, and explore top AI labs holding active grants.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/roadmap"
                  className="px-5 py-2.5 rounded-xl bg-white text-neutral-950 font-semibold text-xs shadow-md hover:bg-neutral-200 transition-all"
                >
                  Start Phase 0 Now
                </Link>
                <Link
                  href="/programs"
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-xs border border-neutral-700 hover:bg-neutral-800 transition-all"
                >
                  View 100% Funded Labs
                </Link>
                <Link
                  href="/toolkit"
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-xs border border-neutral-700 hover:bg-neutral-800 transition-all"
                >
                  Get Email & SOP Templates
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
