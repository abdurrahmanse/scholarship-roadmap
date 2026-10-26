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
    tagline: "Conduct an objective, audit of your undergraduate or master's credentials, grading scale, research outputs, and language baselines before targeting scholarships.",
    estimatedDuration: "1–2 Months before searching (Indicative timeline)",
    degreeScope: "both",
    what: "Assess your complete academic portfolio—undergraduate or master's transcripts, GPA conversion scale (e.g., ECTS, WES, or home university percentage), research publications, capstone projects, internships, and existing language test results (IELTS/TOEFL) without making assumptions about universal cutoffs.",
    why: "Scholarship committees and university admissions boards evaluate applicants holistically. Knowing your quantitative metrics (grades, percentiles) and qualitative assets (research methodology, subject mastery, leadership) prevents wasting hundreds of hours applying to misaligned programs where eligibility filters automatically reject your dossier.",
    how: [
      {
        step: "Audit Academic Transcripts & GPA Scale",
        detail: "Calculate your cumulative GPA on your university's native scale. Determine your class rank or percentile. Note if your university provides official WES-compatible semester breakdowns or ECTS conversion charts."
      },
      {
        step: "Catalog Research & Practical Deliverables",
        detail: "List all conference papers, peer-reviewed articles, bachelor's or master's theses, open-source repositories, design portfolios, clinical cases, or industrial internships. Note your specific methodology contributions."
      },
      {
        step: "Verify Language Proficiency Baseline",
        detail: "Check if your native degree was taught in 100% English (Medium of Instruction / MOI) and identify whether target institutions accept an official institutional MOI certificate or strictly mandate standardized exams (IELTS Academic, TOEFL iBT, Duolingo English Test)."
      },
      {
        step: "Map Academic Strengths & Mitigate Weaknesses",
        detail: "If your GPA is average (e.g., 3.0–3.3/4.0), identify compensatory qualitative assets: published research, exceptional GRE scores if relevant, substantial professional field experience, or outstanding recommendation letters."
      }
    ],
    where: [
      {
        name: "WES iGPA Calculator (Free Tool)",
        url: "https://www.wes.org/calculator/",
        description: "Standard international credential evaluation tool to estimate US/Canadian 4.0 scale equivalency."
      },
      {
        name: "DAAD International Student Grading Conversion",
        url: "https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/recognition-of-academic-qualifications/",
        description: "Official German modified Bavarian formula guidance for foreign grade recognition."
      },
      {
        name: "ENIC-NARIC Portal",
        url: "https://www.enic-naric.net/",
        description: "Official European network of information centres for academic credential and degree recognition across 55 countries."
      }
    ],
    commonMistakes: [
      "Assuming a 3.0 GPA permanently disqualifies you from fully funded opportunities in Europe or North America.",
      "Self-converting your local GPA using a crude percentage calculation instead of official credential evaluation guidelines.",
      "Conflating coursework-based Master's criteria with research-intensive Master's or PhD criteria.",
      "Neglecting to request official English Medium of Instruction (MOI) letters from your undergraduate registrar early."
    ],
    practicalExample: "An applicant with a 3.1/4.0 undergraduate degree in Mechanical Engineering recognized that competitive German DAAD programs had high GPA cutoffs. Instead of giving up, they focused on Scandinavian salaried PhD vacancies where their two published conference workshop papers and practical CAD prototyping skills carried 70% of the interview committee evaluation weight.",
    checklist: [
      { id: "p1-c1", label: "Obtained official, stamped English transcripts from all attended universities", tip: "Ensure grading legend is included on reverse." },
      { id: "p1-c2", label: "Calculated native GPA, class rank percentile, and ECTS/US equivalent", tip: "Do not guess; use institutional conversion charts." },
      { id: "p1-c3", label: "Inventoried all research artifacts (thesis, papers, code repos, capstones)", tip: "Draft one-paragraph summaries of your methodology." },
      { id: "p1-c4", label: "Confirmed current English test scores or secured official MOI verification letter", tip: "Check validity dates (most tests expire in 2 years)." },
      { id: "p1-c5", label: "Identified 3 potential academic referees who can attest to your research work", tip: "Ensure at least two are active tenure-track or senior faculty." }
    ],
    mastersNuance: "For Master's degrees, admissions committees place strong emphasis on foundational coursework grades, prerequisite math/subject distribution, and clear professional motivation. Research publications are an advantage but rarely mandatory.",
    phdNuance: "For PhD applications, research capability is paramount. Committees and professors look for evidence of independent inquiry, experimental design, academic writing ability, and methodological maturity rather than pure classroom exam memorization.",
    nextStep: {
      slug: "choose-right-countries",
      title: "Phase 02: Choose the Right Countries"
    }
  },
  {
    id: "phase-02",
    number: 2,
    slug: "choose-right-countries",
    title: "Choose the Right Countries",
    tagline: "Strategic destination selection based on systemic funding mechanisms, visa work rights, and academic governance.",
    estimatedDuration: "3–4 Weeks of research",
    degreeScope: "both",
    what: "Analyze target countries based on their structural funding models—such as salaried doctoral employment (Sweden, Netherlands, Norway, Denmark, Switzerland), government bilateral awards (DAAD in Germany, Eiffel in France, Chevening in the UK, MEXT in Japan, GKS in Korea), or graduate assistantship ecosystems (RA/TA in the US and Canada).",
    why: "Funding structures are not uniform across the globe. Targeting countries with legally mandated doctoral salaries means you are hired as a salaried university employee with full pension and social benefits, whereas other countries rely on competitive institutional scholarships or tuition waivers.",
    how: [
      {
        step: "Categorize Destinations by Funding Philosophy",
        detail: "Group countries into: (A) Salaried Employee PhDs (Nordics, Netherlands, Switzerland, Germany); (B) Graduate Assistantship Ecosystems (USA, Canada); (C) Flagship Government Schemes (UK, France, Japan, South Korea, China, Australia)."
      },
      {
        step: "Evaluate Master's Tuition Policies",
        detail: "Identify countries where public universities charge zero or nominal tuition for non-EU students (e.g., most public universities in Germany, or heavily subsidized tuition in France and Italy), versus countries requiring six-figure institutional scholarships (USA, UK, Australia)."
      },
      {
        step: "Assess Post-Study Visa & Dependent Regulations",
        detail: "Check post-graduation stay-back periods (e.g., 18 months in Germany, 2–3 years in Canada and the UK, 3 years for STEM OPT in the US) and spousal full-time work authorization rights if relocating with family."
      },
      {
        step: "Cross-Reference Application Cycles",
        detail: "Map out application deadlines: North American Fall cycles typically close December–January; European cycles span November–March; Asian Spring/Fall cycles operate on dual timelines."
      }
    ],
    where: [
      {
        name: "EURAXESS European Research Jobs Portal",
        url: "https://euraxess.ec.europa.eu/jobs",
        description: "Official EU Commission database listing thousands of salaried doctoral vacancies across Europe."
      },
      {
        name: "DAAD International Programs Database",
        url: "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/",
        description: "Official portal of all 2,000+ English-taught degree programs and funding options in Germany."
      },
      {
        name: "Campus France Scholarships Directory",
        url: "https://www.campusfrance.org/en/bourses-etudiants-etrangers",
        description: "Comprehensive official catalogue of French national, regional, and institutional scholarships."
      },
      {
        name: "Study in Sweden Official Portal",
        url: "https://studyinsweden.se/",
        description: "Swedish Institute official directory of degree programs, SI scholarships, and PhD employment policies."
      }
    ],
    commonMistakes: [
      "Targeting only the USA and UK while ignoring Northern European countries where PhD positions are unionized, salaried jobs.",
      "Assuming public universities in all European countries are completely tuition-free for international non-EU students (Sweden, Denmark, and Finland charge non-EU tuition for Master's programs).",
      "Ignoring the cost of living index and required financial guarantee deposits (such as the German Blocked Account / Sperrkonto) if partial funding is offered.",
      "Applying to a country without verifying that your target subject has robust English-language graduate tracks."
    ],
    practicalExample: "A student from South Asia interested in Biotechnology initially focused only on US universities with high application fees. After researching Northern Europe, they discovered that PhD positions in Sweden and Denmark are advertised as full-time employment contracts with monthly salaries of €3,000+, no tuition fees, and no application fee requirements.",
    checklist: [
      { id: "p2-c1", label: "Selected 3–5 realistic target countries matching your degree level", tip: "Balance competitive high-volume countries with systematic funding countries." },
      { id: "p2-c2", label: "Documented the core funding model (salaried employee vs. fellowship vs. RA/TA) for each country", tip: "Record whether healthcare and social insurance are covered." },
      { id: "p2-c3", label: "Checked English-taught program availability in your specific academic field", tip: "Verify language of instruction on the official university curriculum page." },
      { id: "p2-c4", label: "Mapped the primary application window and deadline months for each country", tip: "Most northern hemisphere cycles open 10–12 months before enrollment." }
    ],
    mastersNuance: "Master's full funding is competitive. The highest success rates are found in German tuition-free programs paired with DAAD or working-student jobs, Erasmus Mundus Joint Masters, French Eiffel Excellence, and US/Canadian universities offering Graduate Teaching Assistantships (GTA).",
    phdNuance: "PhD funding is standard in science, engineering, and quantitative fields across Europe, North America, and Australia. Avoid any PhD offer that requires personal self-funding or loans; treat doctoral applications as competitive research job searches.",
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
    tagline: "Dissect genuine fully funded packages from partial waivers, assistantship contracts, and deceptive financial awards.",
    estimatedDuration: "1–2 Weeks",
    degreeScope: "both",
    what: "Learn the crucial differences between fully funded scholarships, tuition-waiver scholarships, partial discounts, government bilateral awards, university fellowships, doctoral employment contracts, and graduate research/teaching assistantships (GRA/GTA).",
    why: "Thousands of students accept 'scholarship' offers only to discover upon arrival that a 50% tuition waiver leaves them with $25,000/year in unpaid tuition plus $18,000 in mandatory living costs. Understanding funding terminology prevents catastrophic financial distress and visa denials.",
    how: [
      {
        step: "Define the Full-Ride Standard Criteria",
        detail: "A genuinely fully funded package covers: (1) 100% Tuition & Student Fees; (2) Guaranteed Monthly Living Stipend indexed to local rent; (3) Health & Accident Insurance; (4) Frequently, round-trip economy airfare and visa fee reimbursement."
      },
      {
        step: "Differentiate Tuition Waivers from Living Stipends",
        detail: "A tuition waiver merely zeroes the university's invoice; it does not buy food, pay rent, or satisfy embassy visa solvency requirements. Confirm whether an offer includes a separate, guaranteed living stipend."
      },
      {
        step: "Examine Doctoral Employment Contracts",
        detail: "In countries like Germany (TV-L E13), Netherlands (CAO Universiteiten), Sweden, and Switzerland, doctoral candidates sign union-negotiated employment contracts with paid annual leave, pension contributions, and parental benefits rather than student scholarships."
      },
      {
        step: "Understand Graduate Assistantships (RA/TA)",
        detail: "In North America, graduate funding is usually tied to 20 hours per week of service as a Graduate Teaching Assistant (grading, labs) or Graduate Research Assistant (sponsored grant lab work), which provides tuition remission and a monthly salary."
      }
    ],
    where: [
      {
        name: "Council of Graduate Schools (CGS) Resolution (USA)",
        url: "https://cgsnet.org/resources/for-students/cgs-april-15-resolution/",
        description: "The binding charter protecting graduate funding acceptance deadlines across 400+ North American universities."
      },
      {
        name: "CAO Nederlandse Universiteiten (Dutch Collective Agreement)",
        url: "https://www.universiteitenvannederland.nl/en_GB/cao-universiteiten",
        description: "Official legal salary scales and employment conditions for PhD candidates in the Netherlands."
      },
      {
        name: "Tarifvertrag für den öffentlichen Dienst der Länder (TV-L Germany)",
        url: "https://oeffentlicher-dienst.info/tv-l/allg/",
        description: "Official German public sector pay tables (TV-L E13) governing academic research personnel."
      }
    ],
    commonMistakes: [
      "Celebrating a '50% Merit Scholarship' that still leaves a $30,000 funding deficit you cannot afford.",
      "Failing to check whether a stipend is paid for 9 months (academic year) or 12 months (full calendar year) in US institutions.",
      "Assuming university health insurance is automatically included in every tuition waiver package.",
      "Overlooking the distinction between taxable employment salaries (Europe) and tax-exempt student scholarships (some Asian/Commonwealth programs)."
    ],
    practicalExample: "Offer A offered a '$20,000 Presidential Scholarship' at a private US university where tuition was $60,000, leaving a $40,000 tuition gap plus living expenses. Offer B at a public Canadian university offered a Graduate Research Assistantship covering 100% tuition plus a CAD $26,000 annual living stipend. Offer B was the genuinely sustainable, fully funded route.",
    checklist: [
      { id: "p3-c1", label: "Confirmed the exact definition of 'Full Funding' in your target program", tip: "Must include 100% tuition remission + livable monthly stipend." },
      { id: "p3-c2", label: "Identified whether target funding is an external fellowship, internal award, or RA/TA job", tip: "RA/TA positions require weekly work hour commitments (typically 20h/wk)." },
      { id: "p3-c3", label: "Checked whether health insurance and mandatory institutional fees are covered", tip: "Campus fees can exceed $1,500/semester if not covered." },
      { id: "p3-c4", label: "Verified stipend duration (9-month academic term vs. 12-month annual guaranteed)", tip: "Ask how summer funding is covered in 9-month contracts." }
    ],
    mastersNuance: "Most fully funded Master's awards come from prestigious government bilateral programs (Fulbright, Chevening, DAAD, Swedish Institute, MEXT, GKS) or specific research thesis Master's programs offering GTA/GRA positions.",
    phdNuance: "PhD programs in STEM and quantitative social sciences routinely provide 100% tuition remission and guaranteed stipends for 4–5 years, conditional on satisfactory academic and research progress.",
    nextStep: {
      slug: "find-scholarships-universities",
      title: "Phase 04: Find Scholarships and Universities"
    }
  },
  {
    id: "phase-04",
    number: 4,
    slug: "find-scholarships-universities",
    title: "Find Scholarships and Universities",
    tagline: "Master systematic search strategies across institutional databases, government repositories, and official faculty vacancy boards.",
    estimatedDuration: "4–6 Weeks of structured searching",
    degreeScope: "both",
    what: "Execute a methodical discovery workflow to locate legitimate, accredited universities, government scholarship schemes, faculty-funded lab vacancies, and open doctoral calls without falling prey to commercial scholarship aggregators or sponsored ad portals.",
    why: "Commercial blogs and third-party agencies frequently republish outdated deadlines, false funding amounts, and expired programs to generate ad revenue. Finding opportunities directly on primary accredited university domains (.edu, .ac.uk, .edu.au, .ac.jp, etc.) guarantees 100% factual reliability.",
    how: [
      {
        step: "Query Official National Scholarship Portals",
        detail: "Start with primary government scholarship engines: DAAD (Germany), Campus France (France), Study in Sweden, Fulbright Foreign Student portal (USA), EduCanada (Canada), MEXT (Japan), Study in Korea, Study Australia."
      },
      {
        step: "Inspect University Graduate School 'Funding & Fees' Pages",
        detail: "Navigate directly to target university websites. Search specifically for the 'Graduate School' or 'Faculty of Graduate Studies' and open the sub-pages titled: 'Awards & Financial Support', 'Departmental Fellowships', or 'Graduate Assistantships'."
      },
      {
        step: "Monitor Academic Vacancy & Job Portals for European PhDs",
        detail: "Use specialized European academic job boards: EURAXESS, AcademicTransfer (Netherlands), Academic Positions (Nordics/Europe), Jobs.ac.uk (UK/Commonwealth), and university HR portals under 'Scientific Staff / PhD Vacancies'."
      },
      {
        step: "Utilize Advanced Search Operators",
        detail: "Use precise Google search operators to bypass blog spam: site:.edu 'fully funded' 'master's' [your field]; site:.ac.uk 'PhD studentship' [field] 'fees and stipend' 2026; site:.edu.au 'RTP scholarship' [field]."
      }
    ],
    where: [
      {
        name: "EURAXESS European Research Vacancies",
        url: "https://euraxess.ec.europa.eu/jobs/search",
        description: "Official EU Commission board listing thousands of funded doctoral and research positions."
      },
      {
        name: "AcademicTransfer Netherlands",
        url: "https://www.academictransfer.com/en/",
        description: "Centralized official portal for all PhD vacancies and research jobs across all Dutch research universities."
      },
      {
        name: "Jobs.ac.uk PhD Studentships",
        url: "https://www.jobs.ac.uk/categories/phd",
        description: "Primary verified portal for funded UKRI doctoral training partnerships and British university studentships."
      },
      {
        name: "DAAD Scholarship Database",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
        description: "Official repository of all funding programs administered by the German Academic Exchange Service."
      }
    ],
    commonMistakes: [
      "Relying on generic scholarship aggregator websites that link to dead pages or ask for credit card details.",
      "Searching only top-10 Ivy League or Oxbridge institutions while overlooking excellent regional universities with massive funded research endowments.",
      "Confusing an international student admissions brochure with a guaranteed funding agreement.",
      "Missing separate scholarship application deadlines that close 2–3 months before general admission deadlines."
    ],
    practicalExample: "Instead of searching 'scholarships in Europe', a chemistry graduate searched: site:academicpositions.com 'PhD candidate' 'Chemistry' 'fully funded OR salary'. Within 20 minutes, they found 8 active, funded doctoral positions at KU Leuven, Uppsala University, and TU Munich with direct links to the primary department application portals.",
    checklist: [
      { id: "p4-c1", label: "Compiled an initial list of 15–20 accredited target universities across 3+ countries", tip: "Record institution URLs, department pages, and world ranking in your subject." },
      { id: "p4-c2", label: "Verified whether scholarship consideration is automatic with admission or requires a separate dossier", tip: "Look for checkboxes on the primary application: 'Consider for institutional funding'." },
      { id: "p4-c3", label: "Documented the exact official deadline date and time zone for every target", tip: "Be mindful of early priority scholarship deadlines (often Dec 1 vs. Jan 15)." },
      { id: "p4-c4", label: "Bookmarked the official faculty vacancy / financial aid pages directly", tip: "Never rely on cached or third-party blog information." }
    ],
    mastersNuance: "For Master's programs, focus heavily on national government bilateral scholarships (e.g., DAAD, Eiffel, Chevening, Swedish Institute, Australia Awards) and European Erasmus Mundus Joint Masters programs.",
    phdNuance: "For PhDs, focus directly on department research groups, Principal Investigator (PI) project grants, and advertised research vacancies on university employment pages.",
    nextStep: {
      slug: "find-contact-professors",
      title: "Phase 05: Find and Contact Professors"
    }
  },
  {
    id: "phase-05",
    number: 5,
    slug: "find-contact-professors",
    title: "Find and Contact Professors",
    tagline: "Academic supervisor outreach protocol: research compatibility audit, cold email formula, and professional follow-up etiquette.",
    estimatedDuration: "6–8 Weeks during pre-application",
    degreeScope: "both",
    what: "Identify prospective research supervisors, evaluate faculty research agendas through recent publications, determine whether prior supervisor agreement is mandatory, and send concise, highly customized academic inquiry emails.",
    why: "In research Master's and PhD programs across Canada, Australia, the UK, Germany, and many Asian institutions, your application cannot be approved by the graduate committee without a faculty member agreeing in advance to supervise you and provide lab funding.",
    how: [
      {
        step: "Determine if Supervisor Outreach is Required",
        detail: "Check department rules: Canada, Australia, New Zealand, and European individualized PhDs strictly REQUIRE securing a supervisor before submitting an application. In contrast, US PhD programs frequently use centralized committee admissions with first-year lab rotations."
      },
      {
        step: "Identify Active Faculty via Recent Publications",
        detail: "Do not just look at university faculty directories. Search Google Scholar, PubMed, or Scopus for professors who have published peer-reviewed papers in your specific niche within the past 18–24 months."
      },
      {
        step: "Assess Research Alignment & Lab Funding Capacity",
        detail: "Read 2–3 of the professor's recent publications. Note their theoretical framework, experimental methods, and acknowledgments section (which reveals their active research grants from NSF, NIH, ERC, DFG, etc.)."
      },
      {
        step: "Draft the 4-Paragraph Concise Academic Inquiry Email",
        detail: "Paragraph 1: Clear statement of intent (seeking Fall 2026 PhD/thesis MS mentorship). Paragraph 2: Specific critique of their recent paper and how it intersects with your background. Paragraph 3: Your concrete research experience and quantitative skills. Paragraph 4: Polite request for a brief 15-minute introductory call + attached Academic CV."
      },
      {
        step: "Execute Polite Follow-Up Protocol",
        detail: "If the professor does not reply after 7–10 business days, send a single, courteous reply on the same email thread. If no reply is received after the follow-up, move on to other faculty without taking it personally."
      }
    ],
    where: [
      {
        name: "Google Scholar Faculty Profile Search",
        url: "https://scholar.google.com/",
        description: "Search authors by university affiliation and specific research keyword to find actively publishing professors."
      },
      {
        name: "OpenReview.net Conference Submissions",
        url: "https://openreview.net/",
        description: "Inspect open peer reviews and recent paper submissions in computer science and quantitative domains."
      },
      {
        name: "Scopus Author Directory",
        url: "https://www.scopus.com/",
        description: "Official scientific citation database to check researcher publications, co-authors, and grant funding affiliations."
      }
    ],
    commonMistakes: [
      "Sending mass, copy-pasted 'Dear Respected Professor' emails with generic praise that could apply to any academic in any discipline.",
      "Writing a 1,500-word essay that busy professors immediately delete from their mobile inbox.",
      "Attaching 20MB of unrequested certificates, high school diplomas, or zipped folders.",
      "Pestering a professor daily on WhatsApp, LinkedIn, or multiple social media channels after one unreturned email.",
      "Contacting professors when the official program guidelines explicitly state: 'Admissions are centralized; do not contact faculty directly before acceptance'."
    ],
    practicalExample: "Subject: Prospective Fall 2026 PhD Inquirer: Investigating Microplastic Degradation in Coastal Sediments (Undergrad Thesis Fit with Dr. Miller's 2025 Nature Water Paper). The email was 180 words, cited Dr. Miller's specific enzymatic assay method, summarized the student's 1-year lab experience with gas chromatography, and secured a Zoom meeting within 48 hours.",
    checklist: [
      { id: "p5-c1", label: "Confirmed whether your target degree mandates securing a prospective supervisor in advance", tip: "Rule of thumb: Canada/Australia/individual European PhDs = YES; US rotation programs = usually NO." },
      { id: "p5-c2", label: "Identified 8–15 prospective professors across your target institutions", tip: "Record their recent paper titles and lab grant affiliations." },
      { id: "p5-c3", label: "Read at least 2 recent papers (2024–2026) for each prospective supervisor", tip: "Focus on the abstract, methodology, and future research directions." },
      { id: "p5-c4", label: "Drafted a personalized, 150–220 word cold email for each professor", tip: "Never use mass mailers; customize paragraph 2 specifically to their lab." },
      { id: "p5-c5", label: "Attached a clean, 2-page academic CV named 'CV_FirstName_LastName.pdf'", tip: "Never attach large portfolios or zip files unless specifically requested." }
    ],
    mastersNuance: "For coursework Master's degrees, supervisor contact is not needed. For research-thesis Master's programs (especially in Canada and Europe), contacting potential thesis advisors increases your chances of securing a funded Graduate Research Assistantship.",
    phdNuance: "For PhD applications, finding an advisor whose research passion and funding grants align with your background is the single most decisive factor determining your acceptance and long-term doctoral funding.",
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
    tagline: "Dossier architecture: Academic CV, 5-part Statement of Purpose, Research Proposal, LORs, and verified credentials.",
    estimatedDuration: "8–12 Weeks of rigorous drafting & revision",
    degreeScope: "both",
    what: "Craft a comprehensive, program-tailored application dossier comprising an Academic CV, Statement of Purpose (SOP) or Motivation Letter, Research Proposal (for PhD/research Master's), official academic transcripts, degree certificates, 3 strong letters of recommendation (LORs), standardized test score reports, and certified translations.",
    why: "Admissions committees read hundreds of dossiers. A single generic, poorly formatted, or plagiarized document (such as an SOP copied from internet templates or AI hallucinations) leads to immediate rejection, regardless of your GPA.",
    how: [
      {
        step: "Format a Clean 2-Page Academic CV",
        detail: "Use a clean LaTeX or minimalist PDF template. Structure: Education, Research Interests, Publications/Preprints, Research Experience, Teaching/Work Experience, Technical/Language Skills, Awards. Remove personal photos, marital status, or high school entries."
      },
      {
        step: "Structure the 5-Movement Statement of Purpose",
        detail: "Movement 1: Intellectual Hook & Academic Foundation (no childhood stories). Movement 2: Past Research & Methodology Mastery. Movement 3: Gap in Current Literature & Proposed Investigation. Movement 4: Specific Program & Faculty Alignment (why this university). Movement 5: Realistic Long-term Career Trajectory."
      },
      {
        step: "Draft a Rigorous Doctoral Research Proposal",
        detail: "Include: Title, Abstract, Background & Research Problem, Specific Research Questions/Hypotheses, Methodology (data collection, analysis, instruments), Expected Contributions, Indicative 3-Year Timeline, and Key Academic References."
      },
      {
        step: "Secure 3 Authoritative Academic Recommendation Letters",
        detail: "Approach professors who know your work firsthand (thesis advisor, research supervisor, senior lab head). Provide them with an LOR briefing packet: your updated CV, draft SOP, list of target programs with deadlines, and bullet points reminding them of your project achievements."
      },
      {
        step: "Prepare Certified Translations & Official Records",
        detail: "If original documents are not in English, obtain certified sworn translations. Ensure university seals, registrar signatures, and degree conferral certificates are legible and properly digitized."
      }
    ],
    where: [
      {
        name: "Overleaf Academic LaTeX CV & Proposal Templates",
        url: "https://www.overleaf.com/gallery/tagged/cv",
        description: "Standard academic curriculum vitae and research proposal templates used in international universities."
      },
      {
        name: "ETS Official TOEFL iBT / GRE Registration",
        url: "https://www.ets.org/",
        description: "Official portal for scheduling international standardized language and graduate examinations."
      },
      {
        name: "IELTS Official Test Registration",
        url: "https://takeielts.britishcouncil.org/",
        description: "Official booking portal for IELTS Academic examinations recognized across 11,000+ institutions worldwide."
      }
    ],
    commonMistakes: [
      "Using a 1-page corporate resume with bullet points focusing on marketing or customer service instead of an academic research CV.",
      "Beginning an SOP with cliché quotes like 'Since childhood, I have always been fascinated by science...'",
      "Submitting letters of recommendation from high school teachers, family friends, or politicians rather than active academic faculty.",
      "Using generative AI to write your entire SOP without personal technical specifics, resulting in empty buzzwords and committee disqualification.",
      "Failing to adapt the university and professor names in your SOP across different applications."
    ],
    practicalExample: "A student rewrote their SOP from a chronological autobiography into a focused research statement. They dedicated 40% of the essay to explaining the statistical regression model they built during their undergraduate thesis and specifically referenced two current research projects led by Dr. Zhao at the target institution, clearly stating how their skills would immediately contribute to the lab.",
    checklist: [
      { id: "p6-c1", label: "Completed a polished 2-page Academic CV in clean PDF format", tip: "Ensure all GitHub links, DOI numbers, and contact details work." },
      { id: "p6-c2", label: "Drafted, revised, and proofread a tailored Statement of Purpose (800–1,200 words)", tip: "Seek feedback from a mentor or current graduate student." },
      { id: "p6-c3", label: "Prepared a 4–6 page Research Proposal with clear methodology and references (PhD applicants)", tip: "Check if the target department has specific word limits or templates." },
      { id: "p6-c4", label: "Confirmed 3 academic recommenders and provided them with an LOR dossier packet", tip: "Give recommenders at least 4–6 weeks advance notice before deadlines." },
      { id: "p6-c5", label: "Gathered certified official transcripts, grading scales, and passport scans", tip: "Scan all documents in high-resolution 300 DPI color PDF." }
    ],
    mastersNuance: "Master's applications focus heavily on the Statement of Purpose or Motivation Letter, academic grades, and course prerequisites. Research proposals are usually not required unless applying to an MPhil or research-thesis program.",
    phdNuance: "PhD applications require an Academic CV showcasing research potential, strong academic LORs from publishing researchers, and a robust Research Proposal (in European/Commonwealth models) or focused research essay (in US models).",
    nextStep: {
      slug: "understand-eligibility-requirements",
      title: "Phase 07: Understand Eligibility and Application Requirements"
    }
  },
  {
    id: "phase-07",
    number: 7,
    slug: "understand-eligibility-requirements",
    title: "Understand Eligibility and Requirements",
    tagline: "Deconstruct university admission criteria, program prerequisites, scholarship bylaws, and international degree equivalencies.",
    estimatedDuration: "2–3 Weeks of document audits",
    degreeScope: "both",
    what: "Systematically analyze and dissect official university admission bulletins, program-specific prerequisite course requirements, and external scholarship eligibility statutes to ensure your background strictly qualifies prior to investing application fees.",
    why: "Universities operate multi-tiered admissions screening. First, central admissions screens for basic degree equivalency and language scores. Second, the department evaluates subject-matter prerequisites. Third, the scholarship committee evaluates funding eligibility. Missing a single requirement at any tier causes immediate administrative disqualification.",
    how: [
      {
        step: "Separate the 4 Distinct Eligibility Tiers",
        detail: "Tier 1: Central Graduate School requirements (accredited 3-year or 4-year bachelor's, minimum GPA, passport). Tier 2: Department prerequisites (specific credits in calculus, algorithms, or lab science). Tier 3: External scholarship rules (nationality, age caps, return-home requirements). Tier 4: Embassy visa solvency rules."
      },
      {
        step: "Verify Degree Equivalency Rules (3-Year vs. 4-Year Bachelor's)",
        detail: "Students from countries with 3-year Bologna Bachelor's degrees must verify if US/Canadian target universities accept 3-year degrees directly or require an evaluated credential (via WES) or a preliminary 1-year Master's."
      },
      {
        step: "Scrutinize Language Test Waivers & Minimum Sub-Scores",
        detail: "Check not just the overall band score (e.g., IELTS 7.0), but mandatory individual sub-scores (e.g., no band below 6.5, or TOEFL speaking 26+ for Graduate Teaching Assistantships)."
      },
      {
        step: "Identify Application Fee Waiver Policies",
        detail: "Many top US and Canadian graduate schools grant full application fee waivers for international applicants based on financial hardship, attendance at official university virtual open days, or participation in research conferences."
      }
    ],
    where: [
      {
        name: "Anabin Database (German Degree Recognition)",
        url: "https://anabin.kmk.org/",
        description: "Official German Central Office for Foreign Education database verifying foreign university accreditation (H+ status)."
      },
      {
        name: "WES Degree Equivalency Tool",
        url: "https://applications.wes.org/degree-equivalency-tool/",
        description: "Quick official preview of how your undergraduate qualification translates into North American standards."
      },
      {
        name: "UK ENIC (National Information Centre)",
        url: "https://www.enic.org.uk/",
        description: "Official UK government agency responsible for providing recognition and evaluation for foreign qualifications."
      }
    ],
    commonMistakes: [
      "Assuming that meeting the minimum posted GPA (e.g., 3.0/4.0) guarantees admission or funding, when the competitive average is often 3.6+.",
      "Failing to check specific course prerequisites (e.g., applying to Data Science without required university-level multivariable calculus credits).",
      "Ignoring strict scholarship conditions (e.g., Commonwealth or Fulbright bilateral scholarships requiring recipients to return to their home country for 2 years after graduation).",
      "Paying $100+ application fees without checking whether your home university holds accredited H+ status in target recognition databases."
    ],
    practicalExample: "An applicant with an engineering degree applied to a prestigious European Master's in Artificial Intelligence. Although their GPA was exceptional (3.8/4.0), they were rejected because the program legally required a minimum of 30 ECTS credits in pure theoretical Computer Science, which their engineering curriculum lacked by 6 credits.",
    checklist: [
      { id: "p7-c1", label: "Audited undergraduate transcript against the target department's prerequisite course list", tip: "Ensure all required foundational credits are documented." },
      { id: "p7-c2", label: "Confirmed your undergraduate university holds recognized international accreditation (e.g., H+ on Anabin)", tip: "Check Anabin or UK ENIC to verify status." },
      { id: "p7-c3", label: "Checked overall and minimum sub-band language requirements (especially Speaking band for TAs)", tip: "Many universities enforce strict speaking minimums for teaching stipends." },
      { id: "p7-c4", label: "Investigated application fee waiver eligibility and submitted waiver requests early", tip: "Request fee waivers at least 3 weeks before the application deadline." }
    ],
    mastersNuance: "Master's admissions heavily enforce foundational coursework credit distributions (ECTS credit matches in core subjects). Ensure your syllabus aligns closely with their undergraduate curriculum expectations.",
    phdNuance: "PhD eligibility focuses on advanced research methodology preparation, prior thesis completion (or equivalent research paper publications), and finding an approved departmental research supervisor.",
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
    tagline: "Assemble a cohesive, customized application package tailored precisely to program priorities and funding criteria.",
    estimatedDuration: "4–6 Weeks of assembly & refinement",
    degreeScope: "both",
    what: "Synthesize all individual dossier components into a harmonious, high-impact, program-specific application package that connects your background to the specific research initiatives, faculty labs, and mission of the host department.",
    why: "Committees can immediately tell when an applicant has 'shotgunned' the same generic essay to 15 different institutions. A tailored application demonstrating intimate knowledge of the department's labs, ongoing projects, and unique equipment stands out in the top 5% of all evaluated dossiers.",
    how: [
      {
        step: "Tailor the Narrative to Department Specializations",
        detail: "For each university, dedicate at least 25% of your SOP to specific program features: named faculty research groups, unique research centers, clinical facilities, specialized lab instruments, or specific elective courses."
      },
      {
        step: "Align with Scholarship Selection Criteria",
        detail: "If applying for an external government scholarship (e.g., Chevening, DAAD, Fulbright), align your essays with their specific charter: leadership potential, cross-cultural diplomacy, home-country development impact, and sustainable development goals (SDGs)."
      },
      {
        step: "Eliminate Inconsistencies Across Documents",
        detail: "Ensure dates, project titles, publication citations, and research descriptions match seamlessly across your CV, SOP, recommendation letters, and online portal entries."
      },
      {
        step: "Conduct a Multi-Stage Peer & Expert Review",
        detail: "Have your dossier reviewed by at least one faculty mentor, one current international PhD/Master's student, and one native English speaker for technical rigor, structural flow, and typographical perfection."
      }
    ],
    where: [
      {
        name: "Purdue Online Writing Lab (OWL) Academic Writing Guide",
        url: "https://owl.purdue.edu/owl/job_search_resources/applications/graduate_school_applications/index.html",
        description: "Authoritative resource for structuring graduate school personal statements, CVs, and academic prose."
      },
      {
        name: "Grammarly / LanguageTool Academic Polish",
        url: "https://languagetool.org/",
        description: "Privacy-focused open-source tool for checking grammar, punctuation, and structural clarity."
      }
    ],
    commonMistakes: [
      "Submitting an application with the wrong university name left in the header or concluding paragraph.",
      "Allowing recommenders to submit generic one-paragraph letters that lack concrete examples of your work.",
      "Overloading your Statement of Purpose with passive adjectives ('hardworking', 'passionate') instead of concrete evidence and data.",
      "Waiting until 48 hours before the deadline to assemble the final package, leading to hurried mistakes and server crash panics."
    ],
    practicalExample: "An applicant applying to 6 programs created a modular SOP system: a 60% core foundation detailing their research methodology, paired with a 40% program-specific module written from scratch for each university, naming specific lab projects, course codes, and recent publications from prospective mentors.",
    checklist: [
      { id: "p8-c1", label: "Customized each SOP with specific department facilities, labs, and faculty references", tip: "Never use the exact same final paragraph for multiple universities." },
      { id: "p8-c2", label: "Cross-checked dates, titles, and metrics across all documents for 100% consistency", tip: "Ensure your CV dates match your transcript graduation and enrollment dates." },
      { id: "p8-c3", label: "Completed a comprehensive grammar, spelling, and academic tone audit", tip: "Read your essay out loud or use text-to-speech to catch awkward phrasing." },
      { id: "p8-c4", label: "Verified that recommenders received official portal upload invitations and confirmed their submission status", tip: "Check portal dashboards to ensure all 3 letters are marked 'Submitted'." }
    ],
    mastersNuance: "For Master's applications, emphasize your ability to thrive in rigorous graduate-level coursework, your technical problem-solving capabilities, and how the degree serves as a launchpad for your professional or research career.",
    phdNuance: "For PhD applications, demonstrate intellectual independence, resilience in the face of failed experiments, mastery of the academic literature, and readiness to produce publishable scholarship from Year 1.",
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
    tagline: "Flawless portal execution: document uploading, referee tracking, timezone safety buffers, and submission verification.",
    estimatedDuration: "2–3 Weeks during deadline window",
    degreeScope: "both",
    what: "Navigate university institutional portals (e.g., Slate, ApplyWeb, Embark, Uni-Assist) and external scholarship portals to correctly upload digitized documents, pay application fees or apply waivers, monitor referee submissions, and obtain official receipt confirmations.",
    why: "Every admissions cycle, eligible applicants are disqualified because of technical submission errors: submitting after the local time zone deadline, uploading corrupted PDF files, or having an application canceled because a referee failed to submit their letter before the portal locked.",
    how: [
      {
        step: "Create Official Application Accounts Early",
        detail: "Register your accounts on target university portals 4–6 weeks before the deadline. Familiarize yourself with the exact document upload fields, character limits, and specific essay prompts."
      },
      {
        step: "Register Recommenders Immediately",
        detail: "Do not wait until your own essays are finished to register your recommenders. Enter their names and official university email addresses first so the system dispatches their recommendation upload links weeks in advance."
      },
      {
        step: "Format and Name Upload Files Professionally",
        detail: "Convert all files to standard PDF format with clean naming conventions: LastName_FirstName_Academic_CV.pdf, LastName_FirstName_SOP.pdf, LastName_FirstName_Transcripts.pdf. Ensure file sizes remain under portal limits (usually 2MB–5MB)."
      },
      {
        step: "Submit with a 72-Hour Safety Buffer",
        detail: "Never submit on the deadline day. Server overloads, payment gateway timeouts, and unexpected time zone differences (e.g., EST vs. PST vs. CET) can cause portal lockouts. Submit 3 days prior."
      },
      {
        step: "Archive Submission Receipts & Confirmation Numbers",
        detail: "Download and securely save your completed application summary PDF, application ID number, payment receipt, and email confirmation."
      }
    ],
    where: [
      {
        name: "Uni-Assist Application Portal for German Universities",
        url: "https://www.uni-assist.de/en/",
        description: "Official preliminary evaluation and application processing portal for over 180 German universities."
      },
      {
        name: "TimeAndDate.com International Time Zone Converter",
        url: "https://www.timeanddate.com/worldclock/converter.html",
        description: "Essential tool to avoid missing international deadline cutoffs due to UTC/EST/CET conversions."
      }
    ],
    commonMistakes: [
      "Submitting at 11:59 PM in your local time zone when the deadline was 11:59 PM in the university's time zone (e.g., Eastern Standard Time).",
      "Using personal email addresses (@gmail.com, @yahoo.com) for academic recommenders when universities mandate institutional domains (@university.edu).",
      "Uploading low-resolution, illegible mobile photos of transcripts instead of crisp, high-resolution scans.",
      "Failing to submit the separate scholarship application form when a program requires both an admission application and a distinct funding dossier."
    ],
    practicalExample: "An applicant set calendar reminders 72 hours before the official December 1st 11:59 PM EST deadline. Due to their early submission, they noticed that one of their transcript PDF uploads was cut off at page 2. They had plenty of time to re-upload the complete 4-page transcript and verify their application status without panic.",
    checklist: [
      { id: "p9-c1", label: "Confirmed all required files are clean, flattened PDFs under the portal's file size limit", tip: "Open every uploaded PDF inside the portal previewer to verify legibility." },
      { id: "p9-c2", label: "Double-checked deadline time zone and converted to your exact local time", tip: "Set your target deadline 72 hours ahead of the official deadline." },
      { id: "p9-c3", label: "Confirmed that all recommenders have successfully submitted their letters or received reminders", tip: "Politely follow up with recommenders 5 days before the deadline." },
      { id: "p9-c4", label: "Downloaded the official application summary PDF and saved the application confirmation ID", tip: "Store all confirmation IDs in a secure personal spreadsheet or notes document." }
    ],
    mastersNuance: "Check whether the scholarship application is embedded in the main admission form or requires a completely separate application through a national agency (e.g., Uni-Assist in Germany or Campus France).",
    phdNuance: "If you secured prior approval from a prospective supervisor, ensure you enter their exact name and department affiliation in the 'Proposed Research Advisor' field on the application portal.",
    nextStep: {
      slug: "prepare-interviews-selection",
      title: "Phase 10: Prepare for Interviews and Selection"
    }
  },
  {
    id: "phase-10",
    number: 10,
    slug: "prepare-interviews-selection",
    title: "Prepare for Interviews and Selection",
    tagline: "Selection defense: technical research walkthrough, PI alignment meetings, behavioral framing, and post-interview protocol.",
    estimatedDuration: "2–4 Weeks during interview invitations",
    degreeScope: "both",
    what: "Prepare for formal admissions committee interviews, scholarship panel defenses, and one-on-one technical video conferences with prospective research supervisors.",
    why: "Securing an interview means your paper qualifications met the threshold; you are now in the top 10–20% of applicants. The interview evaluates your intellectual authenticity, depth of research understanding, communication clarity, problem-solving agility, and cultural fit within the lab.",
    how: [
      {
        step: "Master the 3-Minute Research Elevator Pitch",
        detail: "Formulate a concise summary of your past research: Problem statement, your specific methodological intervention, key experimental or theoretical results, and broader implications for the field."
      },
      {
        step: "Prepare for Rigorous Technical Interrogation",
        detail: "Be ready to defend every line on your CV and transcripts. Committees will ask: 'Why did you choose this statistical model over that one? What were the limitations of your dataset? How would you solve this bottleneck?'"
      },
      {
        step: "Prepare Thoughtful Questions for the Faculty",
        detail: "Never say 'I have no questions.' Ask: 'What are the current grant directions for the lab over the next 2–3 years? How do senior PhDs collaborate with external institutes? What is the standard publication timeline for new students?'"
      },
      {
        step: "Optimize Professional Video Conferencing Setup",
        detail: "Test high-speed internet, external microphone, professional lighting facing your face, clean distraction-free background, and professional attire. Rehearse maintaining camera eye-contact."
      },
      {
        step: "Send a Courteous 24-Hour Thank-You Note",
        detail: "Send a concise email within 24 hours thanking the interviewers, reiterating your enthusiasm, and referencing a specific intellectual point discussed during the conversation."
      }
    ],
    where: [
      {
        name: "STAR Method Guide for Academic & Behavioral Interviews",
        url: "https://www.vanderbilt.edu/career/students/star-method/",
        description: "Official guide from Vanderbilt Career Center on structuring answers using Situation, Task, Action, Result."
      },
      {
        name: "Nature Careers: How to Ace Your Academic Interview",
        url: "https://www.nature.com/articles/d41586-021-00812-7",
        description: "Nature guide covering strategies for graduate and doctoral interview preparation."
      }
    ],
    commonMistakes: [
      "Exaggerating your contribution to a collaborative project; if a professor discovers you cannot explain the underlying code or mathematics, you will be disqualified.",
      "Speaking negatively about your undergraduate university, previous professors, or country.",
      "Reading prepared answers off a second monitor or using AI voice prompts during a live interview.",
      "Failing to review the professor's recent papers right before the interview call."
    ],
    practicalExample: "When asked about a project failure, the applicant used the STAR method: they described an algorithm that failed to converge (Situation/Task), explained the diagnostic tests they ran to pinpoint numerical instability (Action), and detailed how modifying the loss function achieved 94% accuracy and taught them systematic debugging (Result). The panel praised their resilience.",
    checklist: [
      { id: "p10-c1", label: "Rehearsed your 3-minute past research and motivation pitch out loud", tip: "Record yourself to evaluate pacing, filler words, and clarity." },
      { id: "p10-c2", label: "Re-read your own Statement of Purpose, CV, and undergraduate thesis summary", tip: "Be prepared to defend every claim, methodology, and conclusion." },
      { id: "p10-c3", label: "Prepared 3–5 insightful questions to ask the professor or panel", tip: "Ask about lab mentoring culture, compute resources, or upcoming grant directions." },
      { id: "p10-c4", label: "Tested audio, video, lighting, and internet connection 24 hours prior", tip: "Have a phone hotspot ready as a backup in case Wi-Fi drops." }
    ],
    mastersNuance: "Master's interviews focus on academic readiness, ability to handle heavy course loads, communication skills, and clarity of post-graduation professional aspirations.",
    phdNuance: "PhD interviews are intensive academic defenses. Faculty evaluate whether you can think like an independent scientist, handle unexpected research setbacks, and contribute meaningfully to their funded grant deliverables.",
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
    tagline: "Financial audit: verify tuition remission, net living stipend, health coverage, tax obligations, and contractual renewal conditions.",
    estimatedDuration: "1–3 Weeks during offer season (March–April)",
    degreeScope: "both",
    what: "Conduct a rigorous line-by-line financial audit of official university admission letters, scholarship award notifications, and doctoral employment contracts before formally signing an acceptance.",
    why: "A university offer claiming 'Full Funding' might only cover tuition while leaving you with an unlivable $800/month stipend in an expensive city where rent is $1,200. Auditing the net financial reality ensures you do not face poverty, debt, or visa distress abroad.",
    how: [
      {
        step: "Audit the 5 Core Financial Pillars",
        detail: "1. Tuition Remission: Is 100% of out-of-state/international tuition waived? 2. Living Stipend: What is the exact monthly or annual dollar amount? 3. Mandatory Fees: Are campus health, technology, and athletics fees covered or deducted from your stipend? 4. Health Insurance: Is single comprehensive health insurance subsidized? 5. Travel & Relocation: Is there a flight allowance or initial settling-in grant?"
      },
      {
        step: "Calculate Local Cost of Living & Net Disposable Income",
        detail: "Compare the monthly net stipend against actual local rents and groceries using realistic student living indexes (e.g., Numbeo, student union housing boards). Ensure rent consumes no more than 40–50% of your net monthly income."
      },
      {
        step: "Examine Funding Duration & Renewal Benchmarks",
        detail: "Verify the guaranteed funding duration (e.g., 2 years for Master's; 4–5 years for PhD). Check renewal criteria: minimum GPA required (often 3.0 or 3.5), satisfactory research progress, and passing doctoral comprehensive exams."
      },
      {
        step: "Understand the CGS April 15 Resolution (For North America)",
        detail: "Under the international Council of Graduate Schools resolution, you have until April 15 to consider graduate financial offers. You are under no obligation to accept an offer prematurely, and programs cannot revoke an offer before this date."
      }
    ],
    where: [
      {
        name: "Numbeo International Cost of Living Comparator",
        url: "https://www.numbeo.com/cost-of-living/",
        description: "Accurate crowdsourced and verified cost of living data across global university cities."
      },
      {
        name: "CGS April 15 Resolution Official Text",
        url: "https://cgsnet.org/resources/for-students/cgs-april-15-resolution/",
        description: "Official policy governing graduate student acceptance deadlines across 400+ participating universities."
      }
    ],
    commonMistakes: [
      "Accepting an offer without checking local housing costs, resulting in a stipend that cannot cover basic studio or shared apartment rent.",
      "Overlooking mandatory campus and student fees that can deduct $1,000–$2,000 annually from your modest stipend.",
      "Assuming taxation is zero; in many countries (including the US and Europe), graduate assistantship salaries and living stipends are subject to income tax.",
      "Verbally accepting multiple binding offers simultaneously, which violates academic ethics and can lead to rescinded offers."
    ],
    practicalExample: "A student received Offer 1 from a prestigious university in New York City with a $34,000 annual stipend and Offer 2 from a top university in a Midwestern college town with a $28,000 stipend. Because average shared rent in NYC was $1,600/month versus $600/month in the Midwest, Offer 2 provided $8,000 more in real net disposable income each year.",
    checklist: [
      { id: "p11-c1", label: "Confirmed 100% full tuition waiver coverage in writing in the official financial letter", tip: "Ensure the waiver covers all credit hours required for graduation." },
      { id: "p11-c2", label: "Calculated net monthly stipend after estimated local taxes and mandatory campus fees", tip: "Check whether your country has a bilateral tax treaty with the host nation." },
      { id: "p11-c3", label: "Audited local student rental costs near the campus (target rent < 50% of monthly stipend)", tip: "Check university graduate housing waiting lists and local student groups." },
      { id: "p11-c4", label: "Verified guaranteed funding duration (e.g., 4 or 5 years for PhD; 2 years for Master's)", tip: "Check what happens if your PhD extends beyond the guaranteed period." }
    ],
    mastersNuance: "Fully funded Master's offers are rare, so thoroughly verify whether the package covers both years of study or only Year 1 conditional on securing an assistantship in Year 2.",
    phdNuance: "Legitimate PhD offers guarantee 4–5 years of funding through a combination of fellowships, Graduate Research Assistantships (GRA), and Graduate Teaching Assistantships (GTA).",
    nextStep: {
      slug: "visa-pre-departure",
      title: "Phase 12: Visa and Pre-Departure"
    }
  },
  {
    id: "phase-12",
    number: 12,
    slug: "visa-pre-departure",
    title: "Visa and Pre-Departure",
    tagline: "Immigration protocol: financial sponsorship documentation, consular interviews, health clearances, and relocation logistics.",
    estimatedDuration: "8–12 Weeks prior to program start date",
    degreeScope: "both",
    what: "Transition from accepted scholar to enrolled international student by obtaining official immigration certificates (e.g., I-20/DS-2019 in the USA, CAS in the UK, admission letter for German/Schengen student visa), navigating embassy visa appointments, securing student housing, and completing medical clearances.",
    why: "Obtaining a scholarship offer is meaningless if your visa is refused or delayed due to flawed financial documentation, incorrect visa categories, or failure to demonstrate non-immigrant intent where required by consular law.",
    how: [
      {
        step: "Obtain Official Immigration Documents from University",
        detail: "Submit your signed scholarship award letter to the university's International Student Office (ISSO). They will issue your official eligibility certificate: Form I-20 (F-1 visa) or DS-2019 (J-1 visa) in the US, Confirmation of Acceptance for Studies (CAS) in the UK, or national equivalent."
      },
      {
        step: "Assemble Consular Financial Evidence",
        detail: "Ensure your official scholarship letter explicitly states your full tuition coverage and exact living stipend. Consulates require evidence that your guaranteed funding meets or exceeds the official living cost threshold established by the embassy."
      },
      {
        step: "Book Consular Visa Interview Months in Advance",
        detail: "Visa appointment backlogs can span several months during peak summer periods. Book your visa interview date immediately upon receiving your immigration certificate."
      },
      {
        step: "Prepare for the Visa Consular Interview",
        detail: "Be prepared to clearly state: (1) Your precise academic field and why you chose this university; (2) How your scholarship fully funds your studies; (3) Your concrete post-graduation career plans demonstrating strong ties to your home country (for non-immigrant visas)."
      },
      {
        step: "Arrange Student Housing & Health Immunizations",
        detail: "Apply for on-campus graduate housing or verified student dorms immediately. Complete mandatory immunization forms (MMR, Meningitis, Tuberculosis screening) required for university enrollment."
      }
    ],
    where: [
      {
        name: "U.S. Department of State Student Visa (F-1/J-1) Guide",
        url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        description: "Official United States government portal for international student visa rules and SEVIS fee payment."
      },
      {
        name: "UK Visas and Immigration (Student Visa Official Portal)",
        url: "https://www.gov.uk/student-visa",
        description: "Official British government portal detailing the Student Visa (formerly Tier 4) requirements and CAS rules."
      },
      {
        name: "German Federal Foreign Office Student Visa Regulations",
        url: "https://www.auswaertiges-amt.de/en/visa-service/visabestimmungen-node/studenten-node",
        description: "Official German national visa guidance for academic studies and doctoral research."
      }
    ],
    commonMistakes: [
      "Waiting until July or August to book a visa appointment when wait times in many countries exceed 60–90 days.",
      "Providing inconsistent financial figures that do not match the exact numbers on your university immigration form.",
      "Failing to review university immunization deadlines, resulting in registration holds that prevent enrolling in classes.",
      "Booking non-refundable international flights before your passport and student visa are physically stamped in your hands."
    ],
    practicalExample: "A funded PhD scholar highlighted their official scholarship award during their US F-1 visa interview: 'My 5-year PhD in Chemical Engineering at the University of Michigan is 100% funded by a departmental Graduate Research Assistantship covering my full tuition, health insurance, and a $36,000 annual stipend, as documented on page 1 of my Form I-20.' The visa was approved in 90 seconds.",
    checklist: [
      { id: "p12-c1", label: "Received official university immigration document (I-20, DS-2019, CAS, or national equivalent)", tip: "Carefully verify spelling of your name, birthdate, and program start date." },
      { id: "p12-c2", label: "Paid mandatory government immigration fees (e.g., SEVIS I-901 fee for USA; Immigration Health Surcharge for UK)", tip: "Print official digital payment receipts immediately." },
      { id: "p12-c3", label: "Scheduled consular visa appointment and practiced interview questions", tip: "Organize documents in a clean accordion folder with clear tabs." },
      { id: "p12-c4", label: "Secured verified student housing and finalized university immunization forms", tip: "Never wire rent money to unverified private listings on social media." }
    ],
    mastersNuance: "Master's students must often demonstrate that their scholarship is guaranteed for both years or provide personal bank statements covering any estimated funding differential.",
    phdNuance: "PhD students traveling on bilateral or research visas must often undergo routine administrative processing (such as the Technology Alert List / TAL review for advanced STEM fields); applying early is vital.",
    nextStep: {
      slug: "backup-plan-reapplication",
      title: "Phase 13: Backup Plan and Reapplication"
    }
  },
  {
    id: "phase-13",
    number: 13,
    slug: "backup-plan-reapplication",
    title: "Backup Plan and Reapplication",
    tagline: "Strategic recovery: rejection audit, portfolio enhancement, expanding target tiers, and next-cycle execution.",
    estimatedDuration: "Ongoing strategic evaluation",
    degreeScope: "both",
    what: "Formulate a systematic, constructive response if your applications do not yield a fully funded offer in your first attempt: conduct an objective dossier post-mortem, strengthen weak metrics, acquire targeted research experience, expand geographical horizons, and execute an improved strategy for the following cycle.",
    why: "Top fully funded scholarships and doctoral seats frequently have acceptance rates below 5–10%. Many of the world's most accomplished scholars were rejected in their initial application cycle. Viewing rejection not as a permanent verdict on your intelligence, but as data highlighting specific profile gaps, is what separates ultimately successful scholars from those who give up.",
    how: [
      {
        step: "Conduct an Objective Rejection Post-Mortem",
        detail: "Analyze where the breakdown occurred: Did you get rejected at the initial administrative screen (GPA/prerequisites)? After department review (research fit)? Or after an interview (communication/depth)? If a professor rejected you politely, reply asking for one piece of advice to improve your application next year."
      },
      {
        step: "Diagnose and Strengthen Quantitative Weaknesses",
        detail: "If your profile lacked research evidence: Join a research lab as a project assistant, write an extended literature review, co-author a conference workshop paper, or publish an open-source technical artifact. If language scores were marginal: Retake the exam to hit competitive percentiles."
      },
      {
        step: "Broaden Geographical & Institutional Scope",
        detail: "If you applied exclusively to top-20 US universities, expand your portfolio to include Scandinavian salaried doctoral jobs, German Max Planck / DFG positions, Canadian U15 universities, Australian RTP awards, and Asian flagship programs (MEXT, GKS, SINGA)."
      },
      {
        step: "Diversify Recommenders & Enhance SOP",
        detail: "Re-evaluate your recommendation letters. Did all 3 recommenders provide detailed, enthusiastic accounts of your technical capability? Rewrite your Statement of Purpose to showcase your new year of publications and hands-on deliverables."
      }
    ],
    where: [
      {
        name: "arXiv Open-Access Research Repository",
        url: "https://arxiv.org/",
        description: "Disseminate preprints of your research work to establish a public, citable track record before the next cycle."
      },
      {
        name: "ResearchGate Academic Community",
        url: "https://www.researchgate.net/",
        description: "Connect with researchers, follow ongoing lab projects, and discover collaborative research opportunities."
      }
    ],
    commonMistakes: [
      "Re-submitting the exact same unchanged application package to the same universities in the subsequent cycle.",
      "Taking rejection personally and abandoning your academic aspirations after one cycle.",
      "Failing to expand your university tier list from high-reach schools to balanced reach/match institutions.",
      "Burning bridges by sending angry, confrontational emails to admissions offices or professors after receiving a rejection letter."
    ],
    practicalExample: "An applicant received 8 rejections in their first PhD cycle. Instead of quitting, they spent the next 10 months working as a full-time research assistant in a university laboratory, co-authored one conference paper, and retook their TOEFL to raise their speaking score from 22 to 27. In their second cycle, they applied to 10 balanced programs across Europe and Canada and received 3 fully funded offers.",
    checklist: [
      { id: "p13-c1", label: "Completed an objective, honest audit of your dossier's primary weaknesses", tip: "Ask a neutral academic mentor to review your rejected application package." },
      { id: "p13-c2", label: "Formulated a concrete 6–12 month action plan to publish, research, or improve test scores", tip: "Focus on tangible outputs: a preprint, a code repository, or higher language scores." },
      { id: "p13-c3", label: "Expanded your target university list to include balanced geographical destinations", tip: "Include countries with systematic salaried employment models." },
      { id: "p13-c4", label: "Maintained professional, cordial relationships with professors and recommenders", tip: "Send mentors updates on your progress and thank them for their support." }
    ],
    mastersNuance: "For Master's re-applicants, gaining 1–2 years of relevant industry or lab experience often dramatically strengthens your profile, transforming an average undergraduate GPA into a compelling practical track record.",
    phdNuance: "For PhD re-applicants, dedicating a bridge year to full-time academic lab research and publishing a peer-reviewed paper or conference presentation is the single most effective way to guarantee multiple funded offers in the next cycle.",
    nextStep: {
      slug: "understand-academic-profile",
      title: "Phase 01: Understand Your Academic Profile"
    }
  }
];

export const getPhaseBySlug = (slug: string): RoadmapPhase | undefined => {
  return roadmapPhasesData.find((phase) => phase.slug === slug);
};

export const getPhaseByNumber = (num: number): RoadmapPhase | undefined => {
  return roadmapPhasesData.find((phase) => phase.number === num);
};
