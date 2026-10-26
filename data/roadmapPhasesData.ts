export interface PhaseChecklistItem {
  id: string;
  label: string;
  tip?: string;
}

export interface PhaseOfficialResource {
  name: string;
  url: string;
  description: string;
  isExternal?: boolean;
}

export interface PhaseHowToStep {
  step: string;
  detail: string;
}

export interface RoadmapPhase {
  id: string;
  number: number;
  slug: string;
  title: string;
  tagline: string;
  estimatedDuration: string;
  degreeScope: "both" | "masters" | "phd";
  what: string;
  why: string;
  how: PhaseHowToStep[];
  where: PhaseOfficialResource[];
  commonMistakes: string[];
  practicalExample: string;
  checklist: PhaseChecklistItem[];
  mastersNuance: string;
  phdNuance: string;
  nextStep: {
    slug: string;
    title: string;
  };
}

export const roadmapPhasesData: RoadmapPhase[] = [
  {
    id: "phase-01",
    number: 1,
    slug: "understand-academic-profile",
    title: "Understand Your Academic Profile",
    tagline: "Assess your GPA, research, and language skills before applying.",
    estimatedDuration: "1–2 Months before searching (Estimate)",
    degreeScope: "both",
    what: "Audit your degree transcripts, native grading scale, research work, and language test results without guessing eligibility.",
    why: "Knowing your strengths and limitations prevents wasted applications to mismatched universities with strict cutoffs.",
    how: [
      {
        step: "Calculate True GPA Scale",
        detail: "Find your native GPA and class rank. Use official WES or modified Bavarian formulas rather than crude percentages."
      },
      {
        step: "Catalog Research Artifacts",
        detail: "List your bachelor's or master's thesis, publications, code repositories, design portfolios, or relevant industry projects."
      },
      {
        step: "Verify Language Baseline",
        detail: "Check if your degree was 100% English-taught (MOI) or if target universities require IELTS Academic or TOEFL iBT."
      },
      {
        step: "Identify Compensatory Assets",
        detail: "Balance an average GPA (3.0–3.3/4.0) with strong research outputs, high GRE scores, or stellar reference letters."
      }
    ],
    where: [
      {
        name: "WES iGPA Calculator (Free Tool)",
        url: "https://www.wes.org/calculator/",
        description: "Official credential evaluation preview for US and Canadian 4.0 GPA equivalency."
      },
      {
        name: "DAAD Bavarian Formula Calculator",
        url: "https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/recognition-of-academic-qualifications/",
        description: "Standard German formula for converting foreign grades into the 1.0–4.0 scale."
      },
      {
        name: "ENIC-NARIC Portal",
        url: "https://www.enic-naric.net/",
        description: "Official European network for degree verification and qualification recognition."
      }
    ],
    commonMistakes: [
      "Assuming a 3.0 GPA automatically disqualifies you from all funded programs.",
      "Self-converting grades without checking the university's conversion system.",
      "Delaying language tests until the application month.",
      "Forgetting to request an official Medium of Instruction (MOI) letter early."
    ],
    practicalExample:
      "A student with a 3.1 GPA focused on European salaried PhD vacancies where published conference papers and laboratory skills outweighed undergraduate coursework scores.",
    checklist: [
      { id: "p1-c1", label: "Collected official English transcripts with grading scales from all attended universities." },
      { id: "p1-c2", label: "Calculated native GPA, percentile rank, and ECTS or US 4.0 equivalent." },
      { id: "p1-c3", label: "Listed all research projects, conference papers, code repos, and capstones." },
      { id: "p1-c4", label: "Confirmed valid English test results or obtained an official registrar MOI certificate." },
      { id: "p1-c5", label: "Identified 3 faculty mentors able to write detailed reference letters." }
    ],
    mastersNuance: "Master's admissions prioritize prerequisite course credits (ECTS match) and cumulative GPA.",
    phdNuance: "PhD admissions prioritize research potential, methodological fit, and supervisor alignment over grades.",
    nextStep: {
      slug: "choose-countries",
      title: "Phase 02: Choose the Right Countries"
    }
  },
  {
    id: "phase-02",
    number: 2,
    slug: "choose-countries",
    title: "Choose the Right Countries",
    tagline: "Select target destinations based on funding models, language rules, and intake cycles.",
    estimatedDuration: "1 Month (Estimate)",
    degreeScope: "both",
    what: "Match your academic profile with countries offering government scholarships, tuition waivers, or salaried PhD jobs.",
    why: "Funding models vary by country. Scandinavia treats PhDs as employees; North America uses assistantships; Asia provides bilateral government awards.",
    how: [
      {
        step: "Group Destinations by Funding Type",
        detail: "Separate employee PhD systems (Nordics, Netherlands) from scholarship systems (DAAD, Eiffel, MEXT, Chevening) and assistantships (USA, Canada)."
      },
      {
        step: "Check Supervisor Rules by Country",
        detail: "Determine whether contacting a professor is mandatory (UK, Germany, Canada) or unnecessary (US centralized admissions, Nordic vacancies)."
      },
      {
        step: "Align Application Deadlines",
        detail: "Map deadlines across your targets: US (Dec–Jan), European scholarships (Oct–Dec), and Nordic vacancies (rolling year-round)."
      },
      {
        step: "Verify Visa & Post-Study Work Rules",
        detail: "Review post-graduation work permits and spouse work rights on official national immigration websites."
      }
    ],
    where: [
      {
        name: "Study in Europe Portal",
        url: "https://education.ec.europa.eu/study-in-europe",
        description: "Official European Commission gateway for higher education systems across 33 nations."
      },
      {
        name: "DAAD Germany Scholarship Database",
        url: "https://www2.daad.de/deutschland/stipendien/datenbank/en/21148-scholarship-database/",
        description: "Verified database of funding programs across German universities and research institutes."
      },
      {
        name: "EducationUSA Official Portal",
        url: "https://educationusa.state.gov/",
        description: "US Department of State network guiding international students to accredited graduate programs."
      }
    ],
    commonMistakes: [
      "Applying to countries without checking if living costs require personal savings.",
      "Assuming all European universities teach Master's programs tuition-free (tuition varies for non-EU students).",
      "Treating US graduate applications identically to European university applications.",
      "Overlooking country-specific deadlines like UK Chevening (November) or Japanese MEXT (May)."
    ],
    practicalExample:
      "A chemistry student balanced applications between German DAAD Master's programs, US R1 assistantships, and Swedish salaried doctoral vacancies, securing funding in two distinct systems.",
    checklist: [
      { id: "p2-c1", label: "Selected 3–5 realistic target countries matching your funding needs." },
      { id: "p2-c2", label: "Verified whether target universities charge non-EU international tuition." },
      { id: "p2-c3", label: "Checked whether supervisor pre-approval is required before applying." },
      { id: "p2-c4", label: "Recorded early government scholarship deadlines (Oct–Dec)." },
      { id: "p2-c5", label: "Confirmed post-study work visa rights on official government portals." }
    ],
    mastersNuance: "Check if non-EU tuition is charged (free in public German universities; fees apply in Sweden, Finland, and Netherlands).",
    phdNuance: "Check if PhD candidates are enrolled as students (tuition fees apply) or hired as staff (salary paid).",
    nextStep: {
      slug: "understand-funding-types",
      title: "Phase 03: Understand Funding Types"
    }
  },
  {
    id: "phase-03",
    number: 3,
    slug: "understand-funding-types",
    title: "Understand Funding Types",
    tagline: "Learn the difference between full scholarships, assistantships, employee contracts, and partial discounts.",
    estimatedDuration: "2 Weeks (Estimate)",
    degreeScope: "both",
    what: "Learn how funding packages are structured—full scholarships, research assistantships (GRA), teaching assistantships (GTA), doctoral employment contracts, and partial waivers.",
    why: "A partial tuition waiver still requires $15,000–$25,000/year for living expenses. Knowing the difference protects you from financial hardship.",
    how: [
      {
        step: "Analyze What Full Funding Actually Covers",
        detail: "Confirm that an offer covers 100% of tuition, a livable monthly stipend, and health insurance."
      },
      {
        step: "Understand Research & Teaching Assistantships",
        detail: "In North America, GRAs and GTAs provide full tuition waivers and stipends in exchange for 20 hours/week of lab work or teaching."
      },
      {
        step: "Evaluate European Doctoral Contracts",
        detail: "In Sweden, Denmark, Norway, and the Netherlands, PhDs receive statutory salaries (€2,200–€3,800/mo) with full pension and social benefits."
      },
      {
        step: "Identify Partial Waiver Pitfalls",
        detail: "Treat '30% tuition scholarships' as discounts, not full funding. You will still need heavy personal savings to clear visa financial checks."
      }
    ],
    where: [
      {
        name: "EURAXESS European Research Salaries",
        url: "https://euraxess.ec.europa.eu/",
        description: "European portal for funded doctoral vacancies and research employment contracts."
      },
      {
        name: "Council of Graduate Schools (CGS)",
        url: "https://cgsnet.org/",
        description: "North American guidelines on graduate assistantship funding standards and April 15 decision rules."
      }
    ],
    commonMistakes: [
      "Accepting a tuition waiver that offers no monthly stipend for food or rent.",
      "Assuming graduate assistantship work hours leave no time for thesis research.",
      "Overlooking mandatory university student fees ($500–$2,000/year) not covered by waivers.",
      "Forgetting to check summer funding (9-month vs. 12-month assistantships)."
    ],
    practicalExample:
      "An applicant turned down a 50% tuition scholarship in the UK requiring £18,000 personal funds, accepting instead a US Graduate Teaching Assistantship with 100% tuition coverage and a $2,800/month stipend.",
    checklist: [
      { id: "p3-c1", label: "Confirmed the offer provides 100% tuition remission for all semesters." },
      { id: "p3-c2", label: "Verified whether the living stipend covers local rent and living expenses." },
      { id: "p3-c3", label: "Confirmed whether health insurance is fully subsidized or deducted from stipend." },
      { id: "p3-c4", label: "Checked whether summer funding is guaranteed (9-month vs 12-month package)." },
      { id: "p3-c5", label: "Calculated mandatory student activity or laboratory fees." }
    ],
    mastersNuance: "Fully funded Master's awards usually come from government programs (DAAD, Eiffel, MEXT) or departmental GTAs.",
    phdNuance: "PhDs in STEM should rarely pay tuition; funding is standard through supervisor research grants or institutional assistantships.",
    nextStep: {
      slug: "find-scholarships-universities",
      title: "Phase 04: Find Scholarships & Universities"
    }
  },
  {
    id: "phase-04",
    number: 4,
    slug: "find-scholarships-universities",
    title: "Find Scholarships & Universities",
    tagline: "Use systematic search workflows, verified databases, and Boolean queries to locate opportunities.",
    estimatedDuration: "1–2 Months (Estimate)",
    degreeScope: "both",
    what: "Search official university funding pages, government scholarship registries, and funded doctoral job boards without relying on commercial search agencies.",
    why: "Legitimate scholarships are published on accredited university and government portals, not hidden behind paid agency memberships.",
    how: [
      {
        step: "Search University Department Funding Portals",
        detail: "Navigate to departmental websites (e.g., department of your field) and find 'Graduate Funding', 'Assistantships', or 'Fees and Financial Aid'."
      },
      {
        step: "Query Verified Government Portals",
        detail: "Check official databases: DAAD (Germany), Campus France (France), Fulbright (USA), Chevening (UK), and MEXT (Japan)."
      },
      {
        step: "Use Targeted Boolean Search Strings",
        detail: "Search queries like: site:.edu 'graduate assistantship' OR 'full tuition waiver' [your subject] or site:.ac.uk 'fully funded PhD studentship' [your field]."
      },
      {
        step: "Verify Deadlines & Requirements",
        detail: "Record application deadlines, eligibility criteria, and required documents directly in a clean spreadsheet."
      }
    ],
    where: [
      {
        name: "EURAXESS Jobs Database",
        url: "https://euraxess.ec.europa.eu/jobs",
        description: "Official European research vacancies database listing thousands of funded PhD positions."
      },
      {
        name: "DAAD International Programs",
        url: "https://www.daad.de/en/study-and-research-in-germany/courses-of-study-in-germany/all-study-programmes-in-germany/",
        description: "Complete database of English-taught degree programs and funding in Germany."
      },
      {
        name: "FindAPhD.com",
        url: "https://www.findaphd.com/",
        description: "Search portal for funded doctoral projects and research studentships in the UK and worldwide."
      }
    ],
    commonMistakes: [
      "Relying on unofficial blog posts with outdated deadlines and fabricated award sums.",
      "Paying commercial agencies for scholarship lists that are freely available on university websites.",
      "Missing departmental priority deadlines (often December 1 or 15 for fellowship consideration).",
      "Confusing university admission deadlines with earlier scholarship deadlines."
    ],
    practicalExample:
      "A student searching for biomedical engineering funding used Google queries targeting '.edu' domains, finding 8 funded lab positions with active NSF grants that never appeared on general scholarship aggregators.",
    checklist: [
      { id: "p4-c1", label: "Compiled a shortlist of 10–15 verified universities with documented graduate funding." },
      { id: "p4-c2", label: "Verified priority funding deadlines for each program on official department pages." },
      { id: "p4-c3", label: "Checked whether separate scholarship applications are required." },
      { id: "p4-c4", label: "Searched national government scholarship databases (DAAD, Campus France, MEXT)." },
      { id: "p4-c5", label: "Saved direct official portal URLs into a reference document." }
    ],
    mastersNuance: "Check if the university requires you to check a 'Consider me for departmental funding' box in the admission portal.",
    phdNuance: "Look for funded project vacancies with an assigned grant code on EURAXESS or university employment pages.",
    nextStep: {
      slug: "find-contact-professors",
      title: "Phase 05: Find & Contact Professors"
    }
  },
  {
    id: "phase-05",
    number: 5,
    slug: "find-contact-professors",
    title: "Find & Contact Professors",
    tagline: "Identify compatible researchers, audit their recent work, and send concise, personalized cold emails.",
    estimatedDuration: "1–2 Months before deadlines (Estimate)",
    degreeScope: "both",
    what: "Reach out to faculty members whose research matches your background when seeking a research Master's supervisor or PhD advisor.",
    why: "Faculty members hold research grant funding. A professor who supports your application can champion your acceptance and funding package.",
    how: [
      {
        step: "Identify Research Groups",
        detail: "Review faculty directories and recent lab publications to find professors actively publishing in your specific research niche."
      },
      {
        step: "Read Recent Papers",
        detail: "Read 2 recent papers (past 18 months). Understand their methodology, open questions, and how your skills fit their current directions."
      },
      {
        step: "Draft a Concise 5-Point Email",
        detail: "Write a short email (150–250 words): state your purpose, cite their paper, describe your relevant skills, and attach your 2-page academic CV."
      },
      {
        step: "Follow Up Once Professionally",
        detail: "If there is no reply after 7–10 working days, send a single polite follow-up. If no reply, move to other faculty members."
      }
    ],
    where: [
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/",
        description: "Track professor publication history, recent preprints, and active co-authors."
      },
      {
        name: "ResearchGate Directory",
        url: "https://www.researchgate.net/",
        description: "Explore laboratory projects, preprints, and open questions across global research groups."
      }
    ],
    commonMistakes: [
      "Sending generic mass-copy emails without naming specific papers or lab projects.",
      "Writing overly long emails (400+ words) that busy professors ignore.",
      "Attaching heavy zip files or unrequested certificates.",
      "Contacting professors at universities with centralized admissions where early contact is explicitly discouraged."
    ],
    practicalExample:
      "A candidate sent a 180-word email referencing a professor's 2025 paper on battery degradation, explaining their own undergraduate thesis experience with electrochemical impedance spectroscopy, leading to a 20-minute Zoom chat and a funded PhD offer.",
    checklist: [
      { id: "p5-c1", label: "Confirmed that contacting a supervisor is recommended by the target department." },
      { id: "p5-c2", label: "Read at least two recent publications from the target professor's laboratory." },
      { id: "p5-c3", label: "Drafted a concise, personalized cold email under 250 words." },
      { id: "p5-c4", label: "Attached a clean, 2-page academic CV as a lightweight PDF." },
      { id: "p5-c5", label: "Recorded outreach dates to schedule a polite 7-day follow-up if needed." }
    ],
    mastersNuance: "Usually not required for taught Master's programs; only needed for research-based (thesis) programs (e.g., Canada).",
    phdNuance: "Crucial for European and Commonwealth PhDs. You must secure a supervisor before or alongside your formal application.",
    nextStep: {
      slug: "prepare-required-documents",
      title: "Phase 06: Prepare All Required Documents"
    }
  },
  {
    id: "phase-06",
    number: 6,
    slug: "prepare-required-documents",
    title: "Prepare All Required Documents",
    tagline: "Build a polished application dossier: CV, 5-part SOP, Research Proposal, transcripts, and recommendation letters.",
    estimatedDuration: "2–3 Months (Estimate)",
    degreeScope: "both",
    what: "Draft and polish all required application documents: Academic CV, Statement of Purpose, Motivation Letter, Research Proposal, Transcripts, and Recommendation Letters.",
    why: "Admissions committees review your written documents to judge your academic rigor, motivation, and fit for the program.",
    how: [
      {
        step: "Structure an Academic CV",
        detail: "Use a clean 2-page format highlighting education, GPA, research projects, publications, technical skills, and academic awards."
      },
      {
        step: "Write a 5-Part Statement of Purpose",
        detail: "Structure logically: 1) Academic background, 2) Research experience, 3) Program fit, 4) Target faculty synergy, and 5) Long-term career goals."
      },
      {
        step: "Develop a Feasible Research Proposal",
        detail: "For PhDs: Define research questions, literature context, methodology, expected contributions, and a realistic 3-year timeline."
      },
      {
        step: "Secure Strong Recommendation Letters",
        detail: "Request letters from 3 academic professors 6–8 weeks early. Provide them with your CV, transcripts, and a summary of your achievements."
      }
    ],
    where: [
      {
        name: "Europass CV Builder",
        url: "https://europa.eu/europass/en",
        description: "Standardized European CV template accepted across EU institutions and Erasmus programs."
      },
      {
        name: "Purdue Online Writing Lab (OWL)",
        url: "https://owl.purdue.edu/",
        description: "Comprehensive guide to writing academic statements of purpose, CVs, and research proposals."
      }
    ],
    commonMistakes: [
      "Using a generic SOP without naming specific professors or courses at the university.",
      "Submitting an industry resume instead of an academic CV with research details.",
      "Writing a vague research proposal lacking clear methodology or testable questions.",
      "Giving recommenders only a few days before the deadline to submit letters."
    ],
    practicalExample:
      "A student created tailored SOPs for 5 universities, dedicating 35% of each letter to specific lab facilities and faculty papers, resulting in 3 interview invitations.",
    checklist: [
      { id: "p6-c1", label: "Formatted a clean, 2-page academic CV with publications and project links." },
      { id: "p6-c2", label: "Drafted and revised a 2-page Statement of Purpose tailored to each university." },
      { id: "p6-c3", label: "Prepared a structured 3–5 page Research Proposal with methodology (for PhD)." },
      { id: "p6-c4", label: "Requested recommendation letters from 3 faculty mentors 6+ weeks early." },
      { id: "p6-c5", label: "Obtained official, sealed or verified digital transcripts from all prior universities." }
    ],
    mastersNuance: "Master's statements should emphasize course readiness, academic growth, and clear post-graduation career goals.",
    phdNuance: "PhD proposals must demonstrate independent scientific thinking, literature mastery, and methodological feasibility.",
    nextStep: {
      slug: "understand-eligibility-requirements",
      title: "Phase 07: Understand Eligibility Requirements"
    }
  },
  {
    id: "phase-07",
    number: 7,
    slug: "understand-eligibility-requirements",
    title: "Understand Eligibility & Requirements",
    tagline: "Separate university admissions, department rules, and scholarship requirements.",
    estimatedDuration: "2 Weeks (Estimate)",
    degreeScope: "both",
    what: "Analyze admission guidelines to distinguish university minimums, departmental thresholds, and scholarship-specific rules.",
    why: "Meeting general university admission standards does not guarantee scholarship eligibility, which often has stricter GPA or nationality requirements.",
    how: [
      {
        step: "Separate Admission from Scholarship Rules",
        detail: "Confirm both admission requirements (e.g. 3.0 GPA, IELTS 6.5) and scholarship criteria (e.g. 3.5 GPA, specific country list)."
      },
      {
        step: "Check Prerequisite Course Credits",
        detail: "In Europe, check ECTS prerequisites in math, statistics, or computing. In the US, check required undergraduate coursework."
      },
      {
        step: "Verify Language Exemptions",
        detail: "Review whether your English Medium of Instruction (MOI) degree qualifies for an IELTS or TOEFL waiver."
      },
      {
        step: "Check Application Fee Waiver Options",
        detail: "Many US universities offer $75–$120 fee waivers for international applicants attending virtual graduate fairs or webinars."
      }
    ],
    where: [
      {
        name: "DAAD Admission Requirements (ZAB)",
        url: "https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/admission-requirements/",
        description: "Official database on whether foreign school and degree credentials meet German university entrance criteria."
      },
      {
        name: "UK ENIC (National Information Centre)",
        url: "https://www.enic.org.uk/",
        description: "UK national agency for comparing international qualifications to UK bachelor's and master's degree levels."
      }
    ],
    commonMistakes: [
      "Assuming university minimum GPA guarantees scholarship consideration.",
      "Overlooking country-specific eligibility lists for bilateral government awards.",
      "Failing to convert credits (ECTS vs. credit hours) to verify prerequisite match.",
      "Paying application fees without checking for departmental fee waiver codes."
    ],
    practicalExample:
      "An engineering applicant avoided an automatic rejection by discovering that an Austrian program required 18 ECTS credits in higher mathematics, which they fulfilled by submitting an annotated transcript syllabus.",
    checklist: [
      { id: "p7-c1", label: "Confirmed you meet departmental GPA thresholds for funding consideration." },
      { id: "p7-c2", label: "Verified that your nationality is eligible for targeted government scholarships." },
      { id: "p7-c3", label: "Checked prerequisite course credit requirements (ECTS or credit hours)." },
      { id: "p7-c4", label: "Confirmed language score thresholds for teaching assistantships (often Speaking >= 26)." },
      { id: "p7-c5", label: "Checked for departmental graduate application fee waivers." }
    ],
    mastersNuance: "Check prerequisite course credit match carefully; European Master's programs strictly enforce topic alignment.",
    phdNuance: "Check if a completed Master's degree is mandatory (standard in Europe) or if direct-entry from Bachelor's is allowed (common in the US).",
    nextStep: {
      slug: "prepare-strong-application",
      title: "Phase 08: Prepare a Strong Application"
    }
  },
  {
    id: "phase-08",
    number: 8,
    slug: "prepare-strong-application",
    title: "Prepare a Strong Application",
    tagline: "Unify your dossier into a cohesive, convincing narrative tailored to each program.",
    estimatedDuration: "1 Month (Estimate)",
    degreeScope: "both",
    what: "Assemble your documents into a cohesive narrative that highlights your academic strengths and program synergy.",
    why: "Successful applicants present a unified profile where transcripts, SOP, and recommendation letters all support the same research trajectory.",
    how: [
      {
        step: "Align Application Materials",
        detail: "Ensure your SOP directly builds on the research projects listed in your CV and matches the praise in your recommendation letters."
      },
      {
        step: "Tailor Every Application",
        detail: "Customize at least 30% of each application to highlight specific departmental labs, course offerings, and faculty members."
      },
      {
        step: "Address Profile Weaknesses Proactively",
        detail: "Briefly explain any semester grade dips in your SOP by highlighting subsequent recovery, difficult course loads, or external challenges."
      },
      {
        step: "Proofread Rigorously",
        detail: "Audit every document for grammar, formatting, and correct university names before final submission."
      }
    ],
    where: [
      {
        name: "Grammarly Writing Assistant",
        url: "https://www.grammarly.com/",
        description: "Grammar and sentence clarity checker for academic prose."
      },
      {
        name: "Overleaf Academic LaTeX Editor",
        url: "https://www.overleaf.com/",
        description: "Collaborative LaTeX editor for typesetting academic CVs and technical research proposals."
      }
    ],
    commonMistakes: [
      "Leaving the wrong university or professor name in a recycled Statement of Purpose.",
      "Writing a generic introduction describing childhood passions instead of academic achievements.",
      "Failing to explain how your background directly prepares you for the program's coursework.",
      "Neglecting formatting consistency across CV, SOP, and research proposals."
    ],
    practicalExample:
      "A student whose first-year GPA was 2.8 explained how a shift toward hands-on laboratory research raised their final two years' GPA to 3.7, demonstrating maturity and focus.",
    checklist: [
      { id: "p8-c1", label: "Verified that every document refers to the correct university and department." },
      { id: "p8-c2", label: "Confirmed that your SOP connects your past work with target lab research." },
      { id: "p8-c3", label: "Proofread all documents with peers or academic mentors." },
      { id: "p8-c4", label: "Formatted all documents cleanly in PDF format." },
      { id: "p8-c5", label: "Confirmed that your recommenders have uploaded their letters before the deadline." }
    ],
    mastersNuance: "Emphasize coursework mastery, analytical skills, and readiness for advanced study.",
    phdNuance: "Demonstrate independent scientific curiosity, problem formulation, and methodological resilience.",
    nextStep: {
      slug: "submit-applications-correctly",
      title: "Phase 09: Submit Applications Correctly"
    }
  },
  {
    id: "phase-09",
    number: 9,
    slug: "submit-applications-correctly",
    title: "Submit Applications Correctly",
    tagline: "Navigate application portals, verify document uploads, and beat deadlines safely.",
    estimatedDuration: "2 Weeks before deadlines (Estimate)",
    degreeScope: "both",
    what: "Submit complete application dossiers through official university and scholarship portals before deadlines.",
    why: "Portals crash on deadline day, recommenders miss submission windows, and time-zone confusion can disqualify otherwise strong dossiers.",
    how: [
      {
        step: "Submit 5–7 Days Early",
        detail: "Complete uploads early to avoid server traffic spikes and resolve unexpected upload errors."
      },
      {
        step: "Confirm Time Zone Deadlines",
        detail: "Note whether deadlines follow Eastern Time (US), Central European Time (EU), or UTC, and plan accordingly."
      },
      {
        step: "Verify Recommender Submissions",
        detail: "Log in to portal dashboards to confirm that all 3 reference letters show as received."
      },
      {
        step: "Save Confirmation Records",
        detail: "Download PDF copies of submitted forms, application ID numbers, and payment or waiver receipts."
      }
    ],
    where: [
      {
        name: "Uni-Assist Germany Portal",
        url: "https://www.uni-assist.de/en/",
        description: "Central processing agency handling international applications for over 180 German universities."
      },
      {
        name: "University Admissions Sweden",
        url: "https://www.universityadmissions.se/",
        description: "Official national application portal for all bachelor's and master's programs in Sweden."
      },
      {
        name: "Study in Finland Portal (Opintopolku)",
        url: "https://opintopolku.fi/konfo/en/",
        description: "Official Finnish national application system for university programs and scholarships."
      }
    ],
    commonMistakes: [
      "Submitting within hours of the deadline and encountering server errors.",
      "Assuming the deadline is midnight in your local time zone rather than the university's time zone.",
      "Forgetting to check the box authorizing consideration for Graduate Assistantships or Fellowships.",
      "Failing to confirm that referees uploaded their recommendation letters on time."
    ],
    practicalExample:
      "A student submitting 4 days before the December 15 deadline noticed their recommender had not received the automated email link, allowing them to resend the notification and resolve the issue in time.",
    checklist: [
      { id: "p9-c1", label: "Completed all portal forms 5+ days before the deadline." },
      { id: "p9-c2", label: "Selected the checkbox for departmental funding / assistantship consideration." },
      { id: "p9-c3", label: "Checked portal status to confirm all recommendation letters are received." },
      { id: "p9-c4", label: "Downloaded official submission receipt with application reference ID." },
      { id: "p9-c5", label: "Sent a polite thank-you email to all faculty recommenders." }
    ],
    mastersNuance: "Check if official hard-copy documents or notarized translations must be mailed by post (e.g., Uni-Assist).",
    phdNuance: "Notify your prospective supervisor via email once your official portal application is successfully submitted.",
    nextStep: {
      slug: "prepare-interviews-selection",
      title: "Phase 10: Prepare for Interviews & Selection"
    }
  },
  {
    id: "phase-10",
    number: 10,
    slug: "prepare-interviews-selection",
    title: "Prepare for Interviews & Selection",
    tagline: "Prepare for faculty video calls, defend research methodology, and present your future goals.",
    estimatedDuration: "2–4 Weeks during Jan–March (Estimate)",
    degreeScope: "both",
    what: "Prepare for selection committee interviews and one-on-one video calls with potential faculty supervisors.",
    why: "Interviews assess whether you can communicate complex ideas, handle technical questions, and collaborate effectively with a lab team.",
    how: [
      {
        step: "Prepare a 5-Slide Presentation",
        detail: "For PhDs: Outline your undergraduate or master's thesis, problem formulation, methodology, results, and future research goals."
      },
      {
        step: "Review Your Application Documents",
        detail: "Re-read your SOP, CV, and referenced papers so you can discuss any project or claim in depth."
      },
      {
        step: "Practice Common Questions",
        detail: "Prepare concise answers for: Why this university? Walk me through your thesis methodology. How do you handle research setbacks?"
      },
      {
        step: "Ask Thoughtful Questions",
        detail: "Ask about lab culture, ongoing grant projects, computing resources, and expected milestones for graduate students."
      }
    ],
    where: [
      {
        name: "National Postdoctoral Association Resources",
        url: "https://www.nationalpostdoc.org/",
        description: "Guidelines on academic interviewing, mentorship expectations, and research group dynamics."
      }
    ],
    commonMistakes: [
      "Failing to explain your personal contribution to team research papers.",
      "Not knowing the recent research directions of the professors interviewing you.",
      "Having no questions to ask the committee at the end of the interview.",
      "Poor audio or lighting during international video calls."
    ],
    practicalExample:
      "Asked about an unexpected experimental failure in their thesis, a candidate clearly explained their systematic troubleshooting process, proving their resilience and scientific maturity.",
    checklist: [
      { id: "p10-c1", label: "Prepared a concise 5-minute technical presentation of past research work." },
      { id: "p10-c2", label: "Practiced answers for common academic interview questions." },
      { id: "p10-c3", label: "Prepared 3 thoughtful questions about lab projects and mentorship." },
      { id: "p10-c4", label: "Tested camera, microphone, and internet connection before the interview." },
      { id: "p10-c5", label: "Sent a brief, professional thank-you email within 24 hours of the interview." }
    ],
    mastersNuance: "Master's interviews focus on motivation, course foundation, and career direction.",
    phdNuance: "PhD interviews test deep technical problem-solving, methodological independence, and supervisor compatibility.",
    nextStep: {
      slug: "evaluate-funding-offers",
      title: "Phase 11: Evaluate Funding Offers"
    }
  },
  {
    id: "phase-11",
    number: 11,
    slug: "evaluate-funding-offers",
    title: "Evaluate Funding Offers",
    tagline: "Audit net living stipends against rent, taxes, and fees before signing binding agreements.",
    estimatedDuration: "2–4 Weeks during March–April (Estimate)",
    degreeScope: "both",
    what: "Review the formal funding guarantee letter to verify true net take-home pay, tuition waivers, and renewal conditions.",
    why: "A $30,000 stipend in an expensive city (New York, London, Zurich) can result in a deficit, while a $24,000 stipend in a low-cost college town provides comfortable living.",
    how: [
      {
        step: "Audit Full Tuition Remission",
        detail: "Verify in writing that 100% of out-of-state or international tuition is permanently waived for your entire degree duration."
      },
      {
        step: "Calculate Real Living Costs",
        detail: "Deduct estimated taxes, health insurance copays, mandatory university fees, and median local rent from gross monthly stipend."
      },
      {
        step: "Review Funding Renewal Conditions",
        detail: "Confirm the minimum GPA required to maintain funding and whether support is guaranteed for 2 years (MS) or 4–5 years (PhD)."
      },
      {
        step: "Respect Decision Deadlines",
        detail: "In North America, the April 15 Resolution protects your right to consider all offers until April 15 without premature pressure."
      }
    ],
    where: [
      {
        name: "CGS April 15 Resolution Agreement",
        url: "https://cgsnet.org/resources/for-students/april-15-resolution/",
        description: "Official agreement among 400+ graduate institutions protecting student acceptance rights through April 15."
      },
      {
        name: "Numbeo Cost of Living Comparison",
        url: "https://www.numbeo.com/cost-of-living/",
        description: "Compare rent, groceries, and transportation costs across global university cities."
      }
    ],
    commonMistakes: [
      "Accepting an offer based on gross stipend without calculating local rent and tax deductions.",
      "Accepting an offer without a written, signed funding letter specifying duration and responsibilities.",
      "Holding multiple fully funded offers past April 15, blocking waitlisted peers.",
      "Failing to confirm whether summer funding (June–August) is included."
    ],
    practicalExample:
      "A student compared a $34,000 offer in Boston (where rent was $1,700/month) with a $29,000 offer in North Carolina (rent $750/month), realizing the North Carolina offer provided $7,000 more in net disposable income.",
    checklist: [
      { id: "p11-c1", label: "Received an official funding guarantee letter specifying stipend and waiver." },
      { id: "p11-c2", label: "Calculated net monthly take-home pay after local taxes and deductions." },
      { id: "p11-c3", label: "Researched local rent prices within commutable distance of campus." },
      { id: "p11-c4", label: "Confirmed whether summer funding is included or requires separate applications." },
      { id: "p11-c5", label: "Formally accepted your chosen offer and politely declined others before the deadline." }
    ],
    mastersNuance: "Check if the assistantship waiver applies to both academic years or requires reapplication each year.",
    phdNuance: "Confirm that funding is guaranteed for 4–5 years subject to standard academic progress, not just 1 year.",
    nextStep: {
      slug: "visa-pre-departure",
      title: "Phase 12: Visa & Pre-Departure"
    }
  },
  {
    id: "phase-12",
    number: 12,
    slug: "visa-pre-departure",
    title: "Visa & Pre-Departure",
    tagline: "Secure immigration clearance, prepare financial documents, and arrange student housing.",
    estimatedDuration: "2–3 Months before departure (Estimate)",
    degreeScope: "both",
    what: "Complete embassy visa interviews, submit official financial certificates, and finalize travel and housing plans.",
    why: "Visa processing can take 6–12 weeks. Administrative delays or missing documents can postpone your enrollment by a semester.",
    how: [
      {
        step: "Obtain Official Admission Documents",
        detail: "Request your official immigration paperwork (e.g., US Form I-20 / DS-2019, UK CAS number, or German admission letter)."
      },
      {
        step: "Prepare Visa Financial Proof",
        detail: "Use your official university funding letter to prove financial support, eliminating the need for large personal bank statements."
      },
      {
        step: "Book Visa Interview Early",
        detail: "Schedule your embassy appointment immediately upon receiving your immigration certificate to avoid peak summer queues."
      },
      {
        step: "Secure Student Housing Early",
        detail: "Apply for university dormitory housing or search verified student housing platforms as soon as your offer is accepted."
      }
    ],
    where: [
      {
        name: "US Department of State Student Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas/study.html",
        description: "Official guide to F-1 and J-1 student visa eligibility, interview prep, and wait times."
      },
      {
        name: "UK Visas and Immigration (Student Visa)",
        url: "https://www.gov.uk/student-visa",
        description: "Official British government portal for student visa applications, points-based routes, and CAS requirements."
      },
      {
        name: "Make it in Germany Visa Guide",
        url: "https://www.make-it-in-germany.com/en/visa-residence/types/studying",
        description: "Federal government portal for international students and researchers entering Germany."
      }
    ],
    commonMistakes: [
      "Delaying visa appointments until summer when embassy slots are fully booked.",
      "Presenting personal bank statements that contradict the university funding letter.",
      "Booking non-refundable international flights before the visa is stamped in your passport.",
      "Leaving accommodation searches until arrival in cities with tight rental markets."
    ],
    practicalExample:
      "A student scheduled their visa interview in May with their official I-20 and assistantship letter, received their visa within 10 days, and secured affordable on-campus housing before July waiting lists closed.",
    checklist: [
      { id: "p12-c1", label: "Received official university immigration certificates (I-20, CAS, or admission letter)." },
      { id: "p12-c2", label: "Paid SEVIS fee or national visa administration fee." },
      { id: "p12-c3", label: "Scheduled visa interview at nearest embassy or consulate." },
      { id: "p12-c4", label: "Applied for university dormitory housing or verified private student flats." },
      { id: "p12-c5", label: "Organized certified academic records, health immunization forms, and travel insurance." }
    ],
    mastersNuance: "Check if your visa category allows off-campus part-time work or only on-campus employment.",
    phdNuance: "In Europe, doctoral candidates holding salaried contracts apply for researcher or work permits rather than student visas.",
    nextStep: {
      slug: "backup-plan-reapplication",
      title: "Phase 13: Backup Plan & Reapplication"
    }
  },
  {
    id: "phase-13",
    number: 13,
    slug: "backup-plan-reapplication",
    title: "Backup Plan & Reapplication",
    tagline: "Analyze feedback, strengthen your profile, and target the next funding cycle strategically.",
    estimatedDuration: "Ongoing preparation (Estimate)",
    degreeScope: "both",
    what: "If your first application cycle is unsuccessful, conduct an objective audit of your dossier and target subsequent admission cycles.",
    why: "Top scholarship acceptance rates are competitive (often 5%–15%). Reapplicants with upgraded research and targeted applications succeed regularly.",
    how: [
      {
        step: "Conduct a Frank Dossier Audit",
        detail: "Assess what held you back: late submission, weak research alignment, low test scores, or applying to too few programs."
      },
      {
        step: "Add Tangible Qualifications",
        detail: "Spend 6–9 months producing a research preprint, improving language test scores, or gaining relevant industry experience."
      },
      {
        step: "Broaden Target Destinations",
        detail: "Expand beyond the most competitive universities to include strong research institutions with active grant funding."
      },
      {
        step: "Engage Early in the Next Cycle",
        detail: "Start contacting professors in August–September, submit applications by November, and secure stronger reference letters."
      }
    ],
    where: [
      {
        name: "arXiv Open-Access Research Repository",
        url: "https://arxiv.org/",
        description: "Post preprints of your research to build a citable scientific track record."
      },
      {
        name: "Coursera & edX Advanced Specializations",
        url: "https://www.coursera.org/",
        description: "Take verified graduate-level coursework to demonstrate mastery in prerequisite subjects."
      }
    ],
    commonMistakes: [
      "Reapplying to the exact same programs with identical, unrevised documents.",
      "Giving up after a single cycle without realizing that many fully funded scholars succeeded on their second attempt.",
      "Focusing only on Ivy League or top-10 universities where odds are lowest.",
      "Failing to ask prospective supervisors or mentors for constructive feedback."
    ],
    practicalExample:
      "After rejections in year one, an applicant spent 8 months working as a university research assistant, co-authored an IEEE conference paper, retook IELTS to score 8.0, and received 3 fully funded PhD offers in year two.",
    checklist: [
      { id: "p13-c1", label: "Identified specific areas for improvement (research output, SOP, test scores)." },
      { id: "p13-c2", label: "Upgraded your academic CV with new publications, projects, or work experience." },
      { id: "p13-c3", label: "Expanded your university list to include balanced reach, target, and safe programs." },
      { id: "p13-c4", label: "Approached new faculty recommenders who can speak to your recent growth." },
      { id: "p13-c5", label: "Set up early deadlines for the upcoming application cycle." }
    ],
    mastersNuance: "Consider post-graduate diplomas, online verified certificates, or industrial internships to strengthen your academic profile.",
    phdNuance: "Publishing a peer-reviewed paper or posting a quality preprint on arXiv is the single most effective way to turn rejections into funded offers.",
    nextStep: {
      slug: "understand-academic-profile",
      title: "Phase 01: Understand Your Academic Profile"
    }
  }
];

export const roadmapControlsData = {
  header: {
    badge: "The 13-Phase Pipeline",
    title: "Complete Scholarship Roadmap",
    subtitle:
      "A step-by-step sequence from profile assessment to fully funded offer. Filter by degree or search any topic."
  },
  filters: {
    all: "All 13 Phases",
    masters: "Master's Pathway",
    phd: "PhD Pathway"
  },
  searchPlaceholder: "Search phases by keyword (e.g. GPA, Cold Email, SOP, Visa)...",
  actions: {
    expandAll: "Expand All",
    collapseAll: "Collapse All"
  },
  progress: {
    label: "Interactive Checklist Progress",
    sublabel: "Client-side tracking for this session only"
  },
  cardLabels: {
    whatHeading: "What to do",
    whyHeading: "Why it matters",
    howHeading: "How to do it (Step-by-step)",
    whereHeading: "Official Portals & Resources",
    mistakesHeading: "Common Mistakes to Avoid",
    exampleHeading: "Real-World Application Example",
    checklistHeading: "Phase Preparation Checklist",
    nuanceMasters: "Master's Consideration",
    nuancePhd: "PhD Consideration",
    nextStepLabel: "Next Sequential Step",
    prevStepLabel: "Previous Step"
  }
};

export function getPhaseBySlug(slug: string): RoadmapPhase | undefined {
  return roadmapPhasesData.find((p) => p.slug === slug || p.id === slug);
}

export function getPhaseById(id: string): RoadmapPhase | undefined {
  return roadmapPhasesData.find((p) => p.id === id);
}

export function getPhaseByNumber(num: number): RoadmapPhase | undefined {
  return roadmapPhasesData.find((p) => p.number === num);
}
