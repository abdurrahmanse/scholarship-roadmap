export interface SearchWorkflowStep {
  number: number;
  title: string;
  category: "Discovery" | "Validation" | "Safety";
  summary: string;
  actionableInstructions: string[];
  keyToolsOrKeywords: string[];
}

export interface SearchQueryFormula {
  id: string;
  title: string;
  purpose: string;
  query: string;
  exampleFilled: string;
  targetEngines: string[];
}

export interface VerifiedScholarshipPortal {
  id: string;
  name: string;
  countryOrRegion: string;
  governingBody: string;
  url: string;
  coverageType: "Full Tuition + Living Stipend" | "Salaried Employment" | "Tuition Offset + Living Grant";
  notes: string;
}

export const searchWorkflowSteps: SearchWorkflowStep[] = [
  {
    number: 1,
    title: "Search Official University Websites Directly",
    category: "Discovery",
    summary: "Bypass search engine ad spam and third-party commercial portals by navigating directly to primary university domains (.edu, .ac.uk, .edu.au, .ca).",
    actionableInstructions: [
      "Navigate to the target university's homepage and find the 'Graduate School', 'School of Graduate Studies', or 'Postgraduate Admissions' tab.",
      "Inspect the specific department offering your subject, looking for 'Prospective Graduate Students' or 'Academic Programs'.",
      "Bookmark the direct URL to the graduate curriculum handbook and departmental financial aid policies."
    ],
    keyToolsOrKeywords: ["Graduate Admissions", "Faculty of Graduate Studies", "Department Financial Support"]
  },
  {
    number: 2,
    title: "Identify Government Scholarship Programs",
    category: "Discovery",
    summary: "Target official national exchange agencies that sponsor bilateral full-ride awards for international postgraduates.",
    actionableInstructions: [
      "Check official state agency portals: DAAD (Germany), Campus France, Swedish Institute (Sweden), Fulbright (USA), EduCanada (Canada), Chevening/Commonwealth (UK), MEXT (Japan), GKS (Korea), CSC (China), and Australia Awards.",
      "Review eligibility by country of citizenship: many bilateral government awards are reserved specifically for emerging or developing economies.",
      "Note return-to-home-country conditions (e.g., Fulbright J-1 2-year rule, Chevening 2-year rule) before committing."
    ],
    keyToolsOrKeywords: ["Bilateral Government Scholarships", "Ministry of Foreign Affairs", "National Exchange Agency"]
  },
  {
    number: 3,
    title: "Inspect University Funding & Awards Pages",
    category: "Discovery",
    summary: "Locate decentralized department endowments, presidential fellowships, and merit awards buried inside university sub-domains.",
    actionableInstructions: [
      "Within the target university site, search for: 'Graduate Fellowships', 'Dean's Excellence Award', 'Presidential Doctoral Fellowship', or 'Tuition Remission Policies'.",
      "Check whether international students are eligible for internal institutional fellowships (some awards are restricted to domestic residents).",
      "Look for application mechanisms: is scholarship consideration automatic upon submission of the admission application, or does it require a distinct supplemental application form?"
    ],
    keyToolsOrKeywords: ["Graduate Fellowships", "Dean's Merit Award", "Institutional Tuition Remission"]
  },
  {
    number: 4,
    title: "Locate Funded Doctoral Vacancies (European Model)",
    category: "Discovery",
    summary: "Search European university employment and human resources portals where PhDs are advertised as paid research staff positions.",
    actionableInstructions: [
      "In the Netherlands, Sweden, Denmark, Norway, and Switzerland, navigate to the university's 'Work With Us', 'Vacancies', or 'Jobs' section.",
      "Filter listings by category: 'PhD Candidate', 'Doctoral Researcher', 'Stipendiat', or 'Scientific Staff'.",
      "Cross-reference centralized academic job boards: EURAXESS, AcademicTransfer, Jobbnorge, and Jobs.ac.uk."
    ],
    keyToolsOrKeywords: ["EURAXESS", "AcademicTransfer", "PhD Vacancies", "Scientific Staff"]
  },
  {
    number: 5,
    title: "Use Academic Research Databases to Find Funded Labs",
    category: "Discovery",
    summary: "Discover which professors hold active multi-million-dollar research grants capable of hiring graduate research assistants.",
    actionableInstructions: [
      "Inspect government grant databases: NSF Awards Search (USA), NIH RePORTER (USA), ERC Grants Directory (Europe), DFG GEPRIS (Germany), and NSERC Awards Database (Canada).",
      "Search for research grants awarded within the last 12–24 months in your topic; Principal Investigators (PIs) with newly funded 3–5 year grants always need to recruit graduate researchers.",
      "Review author affiliations in recent papers published in top-tier open-access journals in your field."
    ],
    keyToolsOrKeywords: ["NSF Awards Search", "ERC Grants", "NIH RePORTER", "DFG GEPRIS"]
  },
  {
    number: 6,
    title: "Deploy Advanced Precision Search Operators",
    category: "Discovery",
    summary: "Use boolean search syntax to eliminate commercial agency ad clutter and pinpoint primary university funding documents.",
    actionableInstructions: [
      "Use site: restrictions to restrict results exclusively to accredited university top-level domains: site:.edu, site:.ac.uk, site:.edu.au, site:.ca.",
      "Enclose exact key phrases in quotation marks: \"fully funded\" \"master's\" OR \"full tuition waiver\" \"monthly stipend\".",
      "Combine subject keywords, target country domains, and admission intake years: site:.ac.uk \"PhD studentship\" \"Computer Science\" 2026."
    ],
    keyToolsOrKeywords: ["site:.edu", "filetype:pdf", "\"fully funded\"", "\"tuition waiver\""]
  },
  {
    number: 7,
    title: "Verify Exact Eligibility Criteria",
    category: "Validation",
    summary: "Confirm that your nationality, degree equivalency, grading scale, and subject prerequisites satisfy the mandatory thresholds.",
    actionableInstructions: [
      "Check minimum GPA requirements and whether the published GPA is an absolute administrative cutoff or a recommended average.",
      "Verify degree length requirements: does the graduate school accept a 3-year European/Indian bachelor's, or is a 4-year degree (or 1-year master's) required?",
      "Audit prerequisite courses: ensure your undergraduate transcript contains the exact required credit hours in core foundational topics."
    ],
    keyToolsOrKeywords: ["Eligibility Criteria", "Minimum Admission Standards", "Course Prerequisites"]
  },
  {
    number: 8,
    title: "Audit Hard Deadlines & Time Zones",
    category: "Validation",
    summary: "Identify disparate deadlines between general university admission, priority funding rounds, and external scholarship programs.",
    actionableInstructions: [
      "Beware the 'Priority Funding Deadline': many US and Canadian universities have a general admission deadline of February 1, but mandate applying by December 1 to be considered for department scholarships.",
      "Note the time zone of the portal (e.g., 11:59 PM EST vs. PST vs. CET); portals automatically lock at midnight in their local server zone.",
      "Establish your personal submission target at least 72 hours prior to the official deadline to avoid payment and server bottlenecks."
    ],
    keyToolsOrKeywords: ["Priority Scholarship Deadline", "Server Time Zone", "Portal Lockout Date"]
  },
  {
    number: 9,
    title: "Identify the Actual Real Funding Coverage",
    category: "Validation",
    summary: "Examine whether an offer is genuinely sustainable or leaves severe living cost and fee deficits.",
    actionableInstructions: [
      "Verify whether the package covers 100% of out-of-state/international tuition, or only domestic in-state rates.",
      "Confirm the living stipend: is it paid monthly or per semester? Is it guaranteed for 9 months or 12 months?",
      "Check mandatory campus student fees (technology, health center, recreation fees) which can deduct $1,000–$2,500/year if un-waived.",
      "Verify health insurance coverage: does the university provide full medical insurance subsidy for international scholars?"
    ],
    keyToolsOrKeywords: ["Net Monthly Stipend", "Mandatory Student Fees", "Health Insurance Subsidy"]
  },
  {
    number: 10,
    title: "Confirm Supervisor Outreach Requirements",
    category: "Validation",
    summary: "Determine if reaching out to faculty is legally mandatory, optional, or prohibited prior to application.",
    actionableInstructions: [
      "Look for language on the department page: 'Applicants must secure an advisor before applying' (common in Canada, Australia) vs. 'Admissions are centralized by committee; do not contact faculty' (common in US biomedical rotation tracks).",
      "If supervisor agreement is required, start faculty outreach 3–4 months before the official application deadline.",
      "Obtain written proof of supervision agreement (an email confirmation or official endorsement form) before submitting the portal application."
    ],
    keyToolsOrKeywords: ["Prospective Supervisor Agreement", "Admissions Committee Review", "Expression of Interest (EOI)"]
  },
  {
    number: 11,
    title: "Distinguish Official Opportunities from Fraudulent Traps",
    category: "Safety",
    summary: "Identify and avoid fraudulent scholarship schemes, fake admissions agents, and misleading commercial aggregator sites.",
    actionableInstructions: [
      "Rule 1: Legitimate university scholarships NEVER charge an 'award claim fee', 'scholarship processing fee', or 'guaranteed placement charge'.",
      "Rule 2: Never trust scholarship information on commercial blog aggregators without verifying it directly on the university's official domain (.edu, .ac.uk, .ca, etc.).",
      "Rule 3: Official correspondence always originates from official institutional email domains (@university.edu, @daad.de), never from generic webmail accounts (@gmail.com, @yahoo.com).",
      "Rule 4: Avoid any service that guarantees 100% scholarship success in exchange for an upfront payment; admissions and funding are determined solely by academic committees."
    ],
    keyToolsOrKeywords: ["Fraud Detection", "Official Domain Verification", "No Upfront Award Fees"]
  }
];

export const searchQueryFormulas: SearchQueryFormula[] = [
  {
    id: "formula-us-phd",
    title: "North American Fully Funded PhD Search",
    purpose: "Find US and Canadian university department pages offering full tuition remission and guaranteed graduate assistantships.",
    query: "site:.edu \"fully funded\" OR \"full tuition waiver\" \"monthly stipend\" PhD [Your Field]",
    exampleFilled: "site:.edu \"fully funded\" OR \"full tuition waiver\" \"monthly stipend\" PhD \"Computer Science\"",
    targetEngines: ["Google", "Bing", "DuckDuckGo"]
  },
  {
    id: "formula-uk-studentships",
    title: "UK / Commonwealth Funded PhD Studentship Search",
    purpose: "Locate active UKRI and university doctoral training partnerships that fund international fees and UKVI stipends.",
    query: "site:.ac.uk \"PhD studentship\" OR \"fully funded studentship\" [Your Field] \"tuition and stipend\" 2026",
    exampleFilled: "site:.ac.uk \"PhD studentship\" OR \"fully funded studentship\" \"Biomedical Engineering\" \"tuition and stipend\" 2026",
    targetEngines: ["Google", "Jobs.ac.uk"]
  },
  {
    id: "formula-europe-salaried",
    title: "European Salaried Doctoral Vacancy Search",
    purpose: "Pinpoint university job postings in Sweden, Denmark, Netherlands, and Norway where PhD candidates are paid full employee salaries.",
    query: "site:academicpositions.com OR site:euraxess.ec.europa.eu \"PhD candidate\" OR \"doctoral researcher\" [Your Field] \"salary\"",
    exampleFilled: "site:academicpositions.com OR site:euraxess.ec.europa.eu \"PhD candidate\" \"Renewable Energy\" \"salary\"",
    targetEngines: ["Google", "EURAXESS", "AcademicTransfer"]
  },
  {
    id: "formula-masters-scholarship",
    title: "Fully Funded Master's Bilateral Scholarship Search",
    purpose: "Discover accredited government and university master's scholarships covering 100% tuition and living allowances.",
    query: "site:.edu OR site:.org \"full scholarship\" OR \"tuition waiver\" \"master's\" [Your Subject] \"international students\" 2026",
    exampleFilled: "site:.edu OR site:.org \"full scholarship\" \"master's\" \"Data Science\" \"international students\" 2026",
    targetEngines: ["Google"]
  },
  {
    id: "formula-australia-rtp",
    title: "Australian Research Training Program (RTP) Search",
    purpose: "Find Go8 and Australian university departments offering international RTP fee offsets and living stipends.",
    query: "site:.edu.au \"Research Training Program\" OR \"RTP stipend\" [Your Field] \"international\"",
    exampleFilled: "site:.edu.au \"Research Training Program\" \"Mechanical Engineering\" \"international\"",
    targetEngines: ["Google"]
  }
];

export const verifiedScholarshipPortals: VerifiedScholarshipPortal[] = [
  {
    id: "portal-euraxess",
    name: "EURAXESS European Research Jobs",
    countryOrRegion: "European Union / 40+ European Nations",
    governingBody: "European Commission",
    url: "https://euraxess.ec.europa.eu/jobs",
    coverageType: "Salaried Employment",
    notes: "Official EU portal listing thousands of salaried doctoral positions across Europe with statutory employee benefits."
  },
  {
    id: "portal-daad",
    name: "DAAD International Scholarship Database",
    countryOrRegion: "Germany",
    governingBody: "German Academic Exchange Service (Federal Foreign Office)",
    url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Comprehensive official database of all government and foundation scholarships for studying in Germany."
  },
  {
    id: "portal-campus-france",
    name: "CampusBourses French Grant Directory",
    countryOrRegion: "France",
    governingBody: "Campus France / French Ministry of Foreign Affairs",
    url: "https://campusbourses.campusfrance.org/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Complete official directory of French government (Eiffel), regional, and institutional doctoral grants."
  },
  {
    id: "portal-academictransfer",
    name: "AcademicTransfer Netherlands",
    countryOrRegion: "Netherlands",
    governingBody: "Universiteiten van Nederland (UNL)",
    url: "https://www.academictransfer.com/en/",
    coverageType: "Salaried Employment",
    notes: "The centralized official portal listing all PhD researcher vacancies across all 14 Dutch research universities."
  },
  {
    id: "portal-chevening",
    name: "Chevening Scholarships Portal",
    countryOrRegion: "United Kingdom",
    governingBody: "UK Foreign, Commonwealth & Development Office (FCDO)",
    url: "https://www.chevening.org/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "UK government's global scholarship programme offering 100% full tuition, flights, and living stipends."
  },
  {
    id: "portal-fulbright",
    name: "Fulbright Foreign Student Program",
    countryOrRegion: "United States",
    governingBody: "U.S. Department of State (Bureau of Educational and Cultural Affairs)",
    url: "https://foreign.fulbrightonline.org/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Flagship U.S. bilateral exchange program covering tuition, living expenses, health insurance, and airfare."
  },
  {
    id: "portal-vanier",
    name: "Vanier Canada Graduate Scholarships",
    countryOrRegion: "Canada",
    governingBody: "Government of Canada (Tri-Agencies: NSERC, CIHR, SSHRC)",
    url: "https://vanier.gc.ca/en/home-accueil.html",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Canada's top doctoral award providing CAD $50,000/year for 3 years across Canadian universities."
  },
  {
    id: "portal-mext",
    name: "MEXT Japanese Government Scholarships",
    countryOrRegion: "Japan",
    governingBody: "Ministry of Education, Culture, Sports, Science and Technology (MEXT)",
    url: "https://www.studyinjapan.go.jp/en/planning/scholarship/mext-scholarships/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Japanese full-ride scholarship covering 100% university tuition, monthly living allowance, and round-trip flights."
  },
  {
    id: "portal-gks",
    name: "Global Korea Scholarship (GKS)",
    countryOrRegion: "South Korea",
    governingBody: "National Institute for International Education (NIIED)",
    url: "https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Full-ride Korean government program covering tuition, living stipend, airfare, settlement grant, and language training."
  },
  {
    id: "portal-singa",
    name: "Singapore International Graduate Award (SINGA)",
    countryOrRegion: "Singapore",
    governingBody: "Agency for Science, Technology and Research (A*STAR) & NUS / NTU",
    url: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Premier biomedical and physical sciences PhD award in Singapore providing full tuition and SGD 2,700–3,200/month."
  },
  {
    id: "portal-study-australia",
    name: "Study Australia & Research Training Program (RTP)",
    countryOrRegion: "Australia",
    governingBody: "Australian Department of Education & Austrade",
    url: "https://www.studyaustralia.gov.au/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Official Australian government portal for degree search and Research Training Program (RTP) scholarship rules."
  }
];
