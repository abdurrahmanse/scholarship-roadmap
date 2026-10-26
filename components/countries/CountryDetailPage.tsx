import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  GraduationCap,
  Award,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  BookOpen,
  Users,
  Briefcase,
  Globe,
  ChevronRight,
} from "lucide-react";
import { CountryGuide } from "@/data/countryGuidesData";

interface CountryDetailPageProps {
  country: CountryGuide;
}

function SupervisorBadge({ requirement }: { requirement: CountryGuide["supervisorContactRequirement"] }) {
  const isStrict = requirement.includes("Strictly");
  const isCentralized = requirement.includes("Centralized");
  const color = isStrict
    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
    : isCentralized
    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
    : "bg-teal-500/20 text-teal-300 border-teal-500/40";
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${color}`}>
      {requirement}
    </span>
  );
}

export function CountryDetailPage({ country }: CountryDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative z-10">
          <Link
            href="/countries"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to All Destinations
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono font-medium">
                <MapPin className="w-3 h-3" />
                {country.region} · {country.code}
              </div>

              <div className="flex items-center gap-5">
                <span
                  className="text-6xl sm:text-7xl shrink-0 p-3 rounded-2xl bg-slate-900 border border-white/10"
                  aria-label={`${country.name} flag`}
                >
                  {country.flag}
                </span>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
                    {country.name}
                  </h1>
                  <p className="text-sm text-slate-400 mt-2 font-mono">
                    Fully Funded Scholarship Guide
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-teal-200 font-medium leading-relaxed max-w-2xl">
                {country.headline}
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono text-slate-400">Supervisor Contact Rule:</span>
                <SupervisorBadge requirement={country.supervisorContactRequirement} />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {country.assistantshipsAvailable && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-mono">
                    <Briefcase className="w-3.5 h-3.5" />
                    Assistantships Available
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg font-mono">
                  <Award className="w-3.5 h-3.5" />
                  {country.governmentScholarships.length} Gov&apos;t Scholarship{country.governmentScholarships.length !== 1 ? "s" : ""}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-lg font-mono">
                  <Globe className="w-3.5 h-3.5" />
                  {country.officialPortals.length} Official Portal{country.officialPortals.length !== 1 ? "s" : ""}
                </div>
              </div>
            </div>

            {/* Page Sections jump nav */}
            <div className="hidden lg:block w-72 xl:w-80 shrink-0">
              <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 sticky top-24">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Page Sections
                </h2>
                <nav className="space-y-1.5">
                  {[
                    { href: "#overview", label: "Overview & Philosophy" },
                    { href: "#funding-routes", label: "Funding Routes" },
                    { href: "#gov-scholarships", label: "Government Scholarships" },
                    { href: "#phd-masters", label: "PhD & Master\u2019s Models" },
                    { href: "#assistantships", label: "Assistantships" },
                    { href: "#supervisor", label: "Supervisor Contact" },
                    { href: "#language", label: "Language & Deadlines" },
                    { href: "#sequence", label: "Application Sequence" },
                    { href: "#warnings", label: "Warnings & Limitations" },
                    { href: "#portals", label: "Official Portals" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-teal-300 hover:bg-white/5 transition-all group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* 1. Overview */}
        <section id="overview" className="scroll-mt-20">
          <SectionTitle icon={<ShieldCheck className="w-5 h-5" />} title="Overview & Funding Philosophy" color="indigo" />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                Country Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{country.summary}</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Funding Philosophy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{country.fundingPhilosophy}</p>
            </div>
          </div>
        </section>

        {/* 2. Funding Routes */}
        <section id="funding-routes" className="scroll-mt-20">
          <SectionTitle icon={<CheckCircle2 className="w-5 h-5" />} title="Common Funding Routes" color="teal" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.commonFundingRoutes.map((route, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/30 hover:bg-slate-900/90 transition-all flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold font-mono">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{route}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Government Scholarships */}
        {country.governmentScholarships.length > 0 && (
          <section id="gov-scholarships" className="scroll-mt-20">
            <SectionTitle icon={<Award className="w-5 h-5" />} title="Government Scholarship Programs" color="emerald" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {country.governmentScholarships.map((sch, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-emerald-500/20 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-white leading-snug">{sch.name}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                        {sch.degreeLevel}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{sch.description}</p>
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-teal-200 font-mono leading-relaxed">
                        <strong>Coverage:</strong> {sch.coverage}
                      </p>
                    </div>
                  </div>
                  <a
                    href={sch.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors border-t border-white/5 pt-3 mt-auto"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
            {country.universityScholarships && (
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/5">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  University-Level Scholarships
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">{country.universityScholarships}</p>
              </div>
            )}
          </section>
        )}

        {/* 4. PhD & Master's */}
        <section id="phd-masters" className="scroll-mt-20">
          <SectionTitle icon={<GraduationCap className="w-5 h-5" />} title="PhD & Master's Funding Models" color="violet" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-teal-500/20 space-y-3">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Master&apos;s Funding Model</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{country.mastersFundingModel}</p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-indigo-500/20 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>PhD Funding Model</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{country.phdFundingModel}</p>
            </div>
          </div>
        </section>

        {/* 5. Assistantships */}
        {country.assistantshipsAvailable && (
          <section id="assistantships" className="scroll-mt-20">
            <SectionTitle icon={<Briefcase className="w-5 h-5" />} title="Research Assistantships" color="emerald" />
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 leading-relaxed">{country.assistantshipsDetail}</p>
              </div>
            </div>
          </section>
        )}

        {/* 6. Supervisor */}
        <section id="supervisor" className="scroll-mt-20">
          <SectionTitle icon={<Users className="w-5 h-5" />} title="Supervisor Contact Requirement" color="amber" />
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Classification:</span>
              <SupervisorBadge requirement={country.supervisorContactRequirement} />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{country.supervisorContactNotes}</p>
          </div>
        </section>

        {/* 7. Language & Deadlines */}
        <section id="language" className="scroll-mt-20">
          <SectionTitle icon={<BookOpen className="w-5 h-5" />} title="Language Requirements & Deadlines" color="teal" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Language Requirements
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">{country.languageRequirements}</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Typical Application Deadlines</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{country.typicalApplicationDeadlines}</p>
            </div>
          </div>
        </section>

        {/* 8. Application Sequence */}
        <section id="sequence" className="scroll-mt-20">
          <SectionTitle icon={<ChevronRight className="w-5 h-5" />} title="Application Sequence" color="teal" />
          <div className="mt-6 space-y-3">
            {country.applicationSequence.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-teal-500/20 transition-all"
              >
                <span className="w-7 h-7 rounded-xl bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center shrink-0 text-xs border border-teal-500/20">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Warnings */}
        <section id="warnings" className="scroll-mt-20">
          <SectionTitle icon={<AlertTriangle className="w-5 h-5" />} title="Important Warnings & Limitations" color="amber" />
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-3">
            {country.importantLimitations.map((lim, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 leading-relaxed">{lim}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Official Portals */}
        <section id="portals" className="scroll-mt-20">
          <SectionTitle icon={<Globe className="w-5 h-5" />} title="Official Portals & Resources" color="indigo" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.officialPortals.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all group flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {portal.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{portal.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to All Destinations
          </Link>
          <p className="text-xs font-mono text-slate-600">
            {country.flag} {country.name} · {country.region} · {country.code}
          </p>
        </div>
      </div>
    </main>
  );
}

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  color: "teal" | "indigo" | "emerald" | "amber" | "violet";
}

function SectionTitle({ icon, title, color }: SectionTitleProps) {
  const colorMap: Record<string, string> = {
    teal: "text-teal-400",
    indigo: "text-indigo-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    violet: "text-violet-400",
  };
  return (
    <div className="flex items-center gap-3">
      <span className={colorMap[color]}>{icon}</span>
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h2>
    </div>
  );
}

export default CountryDetailPage;
