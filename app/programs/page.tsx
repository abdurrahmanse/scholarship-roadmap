"use client";

import { useState } from "react";
import Link from "next/link";
import { fundedProgramsData } from "@/data/programs";
import { programsPageData } from "@/data/pagesData";
import { 
  Search, 
  MapPin, 
  GraduationCap, 
  DollarSign, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  Building2,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedDegree, setSelectedDegree] = useState<string>("All");

  const regions = ["All", "North America", "Europe", "Asia & Oceania"];
  const degrees = ["All", "PhD", "Both"];

  const filteredPrograms = fundedProgramsData.filter((program) => {
    const matchesSearch = 
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRegion = selectedRegion === "All" || program.region === selectedRegion;
    const matchesDegree = selectedDegree === "All" || program.degreeType === selectedDegree;

    return matchesSearch && matchesRegion && matchesDegree;
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pb-24">
      {/* ========================================================
          PAGE HERO
         ======================================================== */}
      <section className="pt-14 pb-14 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            {programsPageData.hero.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            {programsPageData.hero.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              {programsPageData.hero.highlightWord}
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {programsPageData.hero.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* ========================================================
            SECTION 1: SEARCH & MULTI-PARAMETER FILTER
           ======================================================== */}
        <section id="directory-filter" className="mb-10">
          <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by university, lab, country, or research focus (e.g., Robotics, LLMs, Vision)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mr-1">Region:</span>
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedRegion === reg
                        ? "bg-purple-600 text-white"
                        : "bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white"
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>

              {/* Degree Filter */}
              <div className="flex items-center gap-1.5 w-full md:w-auto">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mr-1">Degree:</span>
                {degrees.map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setSelectedDegree(deg)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedDegree === deg
                        ? "bg-purple-600 text-white"
                        : "bg-neutral-950 text-neutral-400 border border-neutral-800 hover:text-white"
                    }`}
                  >
                    {deg === "Both" ? "MS & PhD" : deg}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>Showing {filteredPrograms.length} verified 100% fully funded programs</span>
              <span className="text-emerald-400 font-medium">✓ Guaranteed full tuition waiver + living stipend</span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: CURATED FUNDED PROGRAMS & LAB DIRECTORY
           ======================================================== */}
        <section id="directory-list" className="space-y-6 mb-16">
          {filteredPrograms.map((prog) => (
            <article
              key={prog.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-neutral-800 pb-5 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20">
                      {prog.degreeType === "Both" ? "MSc & PhD (Fully Funded)" : `${prog.degreeType} Program`}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{prog.city}, {prog.country}</span>
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{prog.department}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">{prog.name}</h3>
                  <div className="text-xs text-neutral-300 font-semibold mt-0.5">{prog.institution}</div>
                </div>

                <div className="text-left lg:text-right shrink-0">
                  <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{prog.deadlinePriority}</span>
                  </span>
                  <div className="text-[11px] text-neutral-500 mt-1.5">{prog.fundingModel}</div>
                </div>
              </div>

              {/* Financial Package & Compute Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tuition Coverage</span>
                  </div>
                  <div className="text-xs font-bold text-white">{prog.fundingDetails.tuitionCoverage}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-semibold mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Living Stipend / Salary</span>
                  </div>
                  <div className="text-xs font-bold text-white">{prog.fundingDetails.stipendAnnualUSD}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{prog.fundingDetails.stipendMonthlyLocal}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-semibold mb-1">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    <span>GPU Compute Allocation</span>
                  </div>
                  <div className="text-[11px] text-neutral-300 line-clamp-2">{prog.fundingDetails.computeAccess}</div>
                </div>
              </div>

              {/* Key Faculty & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-xs">
                <div>
                  <span className="text-neutral-400 font-semibold block mb-1">Pioneering Faculty / Labs:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.keyFacultyOrLabs.map((fac, fIdx) => (
                      <span key={fIdx} className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[11px]">
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-neutral-400 font-semibold block mb-1">Admissions Expectations:</span>
                  <div className="text-[11px] text-neutral-300 space-y-0.5">
                    <div><strong>GRE Policy:</strong> {prog.requirements.grePolicy}</div>
                    <div><strong>English Cutoff:</strong> {prog.requirements.englishMin}</div>
                    <div><strong>Research Output:</strong> {prog.requirements.publicationsExpected}</div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {prog.tags.map((t, tidx) => (
                    <span key={tidx} className="text-[10px] font-medium text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      #{t}
                    </span>
                  ))}
                </div>

                <a
                  href={prog.portalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 font-semibold text-xs transition-colors"
                >
                  <span>Official Admissions Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* ========================================================
            SECTION 3: CSRANKINGS.ORG INTELLIGENCE PROTOCOL
           ======================================================== */}
        <section id="csrankings-guide" className="py-12 border-t border-neutral-800">
          <div className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              Research Intelligence Protocol
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">CSRankings.org & Active Grant Search Protocol</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              How to avoid relying on general university reputation and pinpoint laboratories that are actively publishing and hiring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-[10px]">1</span>
                  <span>Filter csrankings.org by Top Conferences</span>
                </h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Select Artificial Intelligence (AAAI, IJCAI), Computer Vision (CVPR, ICCV, ECCV), Machine Learning (NeurIPS, ICML, ICLR), and NLP (ACL, EMNLP, NAACL). Filter by 2021–2026 to see current faculty output.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-[10px]">2</span>
                  <span>Cross-Reference with NSF Award Search</span>
                </h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Copy faculty names into the National Science Foundation (NSF) award search database. Confirm that the PI holds an active award through 2026–2030, ensuring liquid capital for your Graduate Research Assistantship (GRA).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-[10px]">3</span>
                  <span>Check EU CORDIS for ERC Starting Grants</span>
                </h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  In Europe, PIs who win European Research Council (ERC) Starting or Consolidator Grants receive €1.5M–€2.5M and are legally required to recruit doctoral candidates as salaried staff on TV-L or national scales.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-[10px]">4</span>
                  <span>Audit Lab PhD Graduation Rosters</span>
                </h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Visit the laboratory’s team page. If 2 or 3 senior PhD students graduated in the past year, the lab has open physical desks and active funding slots ready for incoming Fall cohort students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: COST-OF-LIVING VS NET STIPEND MATRIX
           ======================================================== */}
        <section id="col-matrix" className="py-12 border-t border-neutral-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Purchasing Power Analysis
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Metropolitan Cost-of-Living vs. Net Take-Home Stipend</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Evaluating true disposable income after rent, taxes, and mandatory campus fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-semibold text-emerald-400">Purdue / UIUC / Alberta</span>
              <div className="text-2xl font-bold text-white mt-1">$30k - $34k</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">College Town • Low COL</div>
              <p className="text-[11px] text-neutral-500 mt-2">1BR rent ~$800–$1,100. High savings potential and comfortable living.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-semibold text-blue-400">Georgia Tech / Austin / Toronto</span>
              <div className="text-2xl font-bold text-white mt-1">$34k - $42k</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Growing Tech Hub • Medium COL</div>
              <p className="text-[11px] text-neutral-500 mt-2">Shared 2BR rent ~$1,000–$1,400. Balanced budget with active tech ecosystems.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-semibold text-amber-400">Stanford / Berkeley / Columbia</span>
              <div className="text-2xl font-bold text-white mt-1">$46k - $52k</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Metro Center • High COL</div>
              <p className="text-[11px] text-neutral-500 mt-2">Studio rent ~$1,800–$2,400. Higher nominal stipend, but shared housing is mandatory.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-semibold text-purple-400">ETH Zurich / EPFL</span>
              <div className="text-2xl font-bold text-white mt-1">CHF 75k - 85k</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Switzerland • High COL & Pay</div>
              <p className="text-[11px] text-neutral-500 mt-2">World's highest doctoral salary. Enables substantial annual savings after expenses.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/toolkit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 hover:scale-102 transition-transform"
            >
              <span>Next Step: Prepare Your Application Dossier & Email Templates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
