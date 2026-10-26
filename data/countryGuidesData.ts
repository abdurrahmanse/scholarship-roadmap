export interface CountryOfficialPortal {
  name: string;
  url: string;
  description: string;
}

export interface GovernmentScholarship {
  name: string;
  url: string;
  description: string;
  coverage: string;
  degreeLevel: "Master's & PhD" | "Master's Only" | "PhD Only";
}

export interface CountryGuide {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: "Europe" | "North America" | "Asia" | "Oceania";
  headline: string;
  summary: string;
  fundingPhilosophy: string;
  commonFundingRoutes: string[];
  governmentScholarships: GovernmentScholarship[];
  universityScholarships: string;
  phdFundingModel: string;
  mastersFundingModel: string;
  assistantshipsAvailable: boolean;
  assistantshipsDetail: string;
  supervisorContactRequirement: "Strictly Required Before Application" | "Recommended" | "Centralized / Not Required";
  supervisorContactNotes: string;
  languageRequirements: string;
  typicalApplicationDeadlines: string;
  importantLimitations: string[];
  officialPortals: CountryOfficialPortal[];
  applicationSequence: string[];
}

export const countryGuidesData: CountryGuide[] = [
  // ================= EUROPE =================
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    region: "Europe",
    headline: "Zero Public Tuition + Salaried TV-L E13 PhD Research Positions & DAAD Awards",
    summary: "Germany is one of the world's most accessible graduate destinations. Most public universities charge zero tuition for both domestic and international non-EU students (outside Baden-Württemberg and Bavaria for certain programs). PhD candidates are predominantly hired as university researchers on state TV-L E13 employment contracts.",
    fundingPhilosophy: "Public Higher Education as a Merit-Based Public Good: zero tuition at public institutions, complemented by statutory doctoral employment agreements and federal DAAD scholarship programs.",
    commonFundingRoutes: [
      "Tuition-Free Public Master's Degree (pay only €150–€350 semester fee including transit pass)",
      "TV-L E13 Public Sector Doctoral Employment Contract (50%–100% full salary: €2,200–€3,200 net/month)",
      "DAAD (German Academic Exchange Service) Government Scholarships",
      "Heinrich Böll, Konrad Adenauer & Friedrich Ebert Political Foundation Fellowships",
      "Max Planck, Helmholtz, and Fraunhofer Institute Research Fellowships"
    ],
    governmentScholarships: [
      {
        name: "DAAD Development-Related Postgraduate Courses (EPOS)",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-scholarships/",
        description: "Fully funded awards for professionals from developing countries pursuing selected development-focused Master's and PhD programs.",
        coverage: "€934/month for Master's, €1,300/month for PhD, travel allowance, health insurance, and study allowance.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Deutschlandstipendium (National Scholarship Programme)",
        url: "https://www.deutschlandstipendium.de/deutschlandstipendium/en/home/home_node.html",
        description: "Public-private merit scholarship awarded directly by German universities to top domestic and international students.",
        coverage: "€300/month stipend co-funded by the federal government and private sponsors.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Direct university scholarships are rare for Master's because tuition is already zero. Financial support primarily comes from student research assistant jobs ('HiWi' / Hilfswissenschaftler), working-student contracts ('Werkstudent'), or external foundations.",
    phdFundingModel: "Structured or Individual PhDs are predominantly formal employment contracts (TV-L E13/E14). Candidates are paid a legal salary with full statutory pension, unemployment, and health insurance benefits.",
    mastersFundingModel: "Virtually zero tuition at public universities. Living costs (€992/month baseline) must be covered via DAAD scholarship, working-student job, or personal blocked account (Sperrkonto).",
    assistantshipsAvailable: true,
    assistantshipsDetail: "HiWi (Studentische Hilfskraft) positions in labs pay €13–€16/hour for up to 20 hours/week, providing an excellent way to finance living costs while gaining lab experience.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes: "For individual doctoral research (Individualpromotion), securing a Doktorvater/mutter (supervisor) in advance is mandatory. For structured PhD programs (Graduiertenkolleg) and Master's programs, applications are centralized.",
    languageRequirements: "English-taught programs require IELTS 6.5–7.0 or TOEFL 90–100. German language is not required for academic admission in English programs, though A2/B1 German is recommended for daily life.",
    typicalApplicationDeadlines: "Winter Semester (starts October): Applications open April–July 15. Summer Semester (starts April): Applications open November–January 15.",
    importantLimitations: [
      "If self-funding living costs for a Master's, German immigration legally requires a Blocked Account (Sperrkonto) with ~€11,904/year.",
      "Non-EU tuition fees (€1,500/semester) exist in Baden-Württemberg and select Bavarian universities.",
      "ECTS subject-prerequisite matching is strictly enforced; admissions committees rarely admit students with non-aligned bachelor's degrees."
    ],
    officialPortals: [
      { name: "DAAD Official Portal", url: "https://www.daad.de/en/", description: "Central German Academic Exchange Service for all programs and funding." },
      { name: "Uni-Assist e.V.", url: "https://www.uni-assist.de/en/", description: "Centralized credential evaluation and application portal used by 180+ German universities." },
      { name: "Research in Germany", url: "https://www.research-in-germany.org/en.html", description: "Federal Ministry of Education and Research portal for international doctoral candidates." }
    ],
    applicationSequence: [
      "Check undergraduate degree accreditation on Anabin (confirm H+ status).",
      "Find English-taught programs on the DAAD International Programs database.",
      "Review ECTS curriculum prerequisites to ensure direct course alignment.",
      "For individual PhD: Contact prospective professors with a concise research proposal.",
      "Submit application either via Uni-Assist or directly to the university's portal before July 15."
    ]
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    region: "Europe",
    headline: "Eiffel Excellence Scholarships + Fully Funded Contrats Doctoraux & Subsidized Tuition",
    summary: "France offers prestigious state-funded scholarships (such as the Ministry of Foreign Affairs' Eiffel Excellence program) and heavily subsidized public tuition fees. PhD candidates are hired under legal 3-year Contrats Doctoraux with mandatory minimum researcher salaries.",
    fundingPhilosophy: "State-Subsidized Higher Education and Competitive National Excellence Awards: public tuition is low by international standards, and doctoral research is framed as formal employment.",
    commonFundingRoutes: [
      "Eiffel Excellence Scholarship Program (French Ministry for Europe and Foreign Affairs)",
      "Contrat Doctoral (3-year statutory doctoral research employment contract with ~€2,100 gross/month)",
      "ANR (National Research Agency) and CIFRE Industrial PhD Contracts",
      "Regional & University Foundation Excellence Scholarships",
      "Erasmus+ / Erasmus Mundus Joint Masters"
    ],
    governmentScholarships: [
      {
        name: "Eiffel Excellence Scholarship Program (Bourse Eiffel)",
        url: "https://www.campusfrance.org/en/the-eiffel-scholarship-program",
        description: "France's flagship award for top international Master's and PhD students across engineering, science, economics, and law.",
        coverage: "€1,181/month (Master's) or €1,800/month (PhD), international round-trip airfare, national health insurance, and cultural activities.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Make Our Planet Great Again (MOPGA) Grants",
        url: "https://www.campusfrance.org/en/mopga-make-our-planet-great-again",
        description: "Visiting research and doctoral grants in climate change, earth system sciences, and energy transition.",
        coverage: "Monthly allowance, travel grant, and institutional lab support.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "Universities and Grand Écoles offer merit waivers reducing non-EU tuition to standard domestic rates (~€243/year for Master's).",
    phdFundingModel: "In France, enrolling in a science/engineering PhD legally requires secured funding. Most doctoral students sign a 'Contrat Doctoral' funded by the Ministry of Higher Education, regional councils, or research institutes (CNRS, INRIA, INSERM).",
    mastersFundingModel: "Public university Master's fees for non-EU students are officially €3,770/year, though many universities systematically apply fee waivers down to the domestic rate (€243/year). Living costs require scholarship or self-funding.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Doctoral students on Contrats Doctoraux can take on up to 64 hours of annual university teaching ('Mission d'enseignement') for additional supplemental compensation.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "For PhD applications, finding an accredited Thesis Director (Directeur de Thèse) affiliated with a Doctoral School (École Doctorale) is an absolute legal prerequisite before registration.",
    languageRequirements: "Many science, engineering, and business Master's and almost all PhD programs are taught entirely in English (IELTS 6.5+ or TOEFL 90+). French (B2/C1) is needed for humanities and social sciences.",
    typicalApplicationDeadlines: "Eiffel Scholarship: Universities pre-screen candidates between September and December. General Master's via Campus France: October–January.",
    importantLimitations: [
      "Eiffel applications cannot be submitted by students directly; you must be nominated by an accredited French higher education institution.",
      "Doctoral registration without guaranteed 3-year funding is legally prohibited in STEM fields.",
      "Accommodation search in Paris is notoriously competitive; use CROUS student housing whenever eligible."
    ],
    officialPortals: [
      { name: "Campus France Official Portal", url: "https://www.campusfrance.org/en", description: "The national agency for the promotion of French higher education." },
      { name: "CampusBourses Search Engine", url: "https://campusbourses.campusfrance.org/", description: "The complete official grant search directory in France." },
      { name: "ABG (Association Bernard Gregory)", url: "https://www.abg.asso.fr/en/", description: "French portal for doctoral and postdoctoral research job offers." }
    ],
    applicationSequence: [
      "Search English-taught programs on the Campus France 'Taught in English' catalog.",
      "For Master's: Apply to prospective French universities between September–November to request Eiffel nomination.",
      "For PhD: Browse thesis offers on the Campus France Doctoral Portal or contact CNRS/INRIA research directors.",
      "Submit your complete dossier through the official 'Études en France' procedural portal.",
      "Apply for the Long-Stay Student Visa (VLS-TS) upon receiving the acceptance certificate."
    ]
  },
  {
    id: "sweden",
    name: "Sweden",
    code: "SE",
    flag: "🇸🇪",
    region: "Europe",
    headline: "Salaried Unionized PhD Positions + Swedish Institute Global Professionals Scholarships",
    summary: "Sweden treats PhD candidates as salaried university employees with full collective-bargaining labor rights, generous parental leave, and pension contributions (~SEK 31,000–35,000/month). For Master's applicants, the Swedish Institute (SI) provides flagship fully funded scholarships.",
    fundingPhilosophy: "Nordic Social Welfare Model: doctoral candidates are full employees, and state scholarship schemes prioritize global leadership and sustainable innovation.",
    commonFundingRoutes: [
      "Salaried Doctoral Employment (Doktorandanställning: SEK 31,000–35,000/month before tax)",
      "Swedish Institute (SI) Scholarship for Global Professionals (Master's level)",
      "University Tuition Waiver Scholarships (e.g., KTH, Lund, Uppsala Global Scholarships)",
      "Wallenberg Foundation and Vinnova-funded Research Projects"
    ],
    governmentScholarships: [
      {
        name: "Swedish Institute Scholarship for Global Professionals (SISGP)",
        url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
        description: "Prestigious fully funded scholarship for future global leaders pursuing Master's programs aligned with UN Sustainable Development Goals.",
        coverage: "100% full tuition coverage, monthly living allowance of SEK 12,000, travel grant of SEK 15,000, and health/accident insurance.",
        degreeLevel: "Master's Only"
      }
    ],
    universityScholarships: "Each Swedish university (e.g., Lund Global Scholarship, KTH Scholarship, Chalmers IPOET) awards 100% and 75% tuition waivers based purely on academic excellence.",
    phdFundingModel: "PhDs in Sweden are ALWAYS fully funded. You do not pay tuition; you are an employee on an official 4-year contract with annual salary step increases governed by the Swedish Association of University Teachers and Researchers (SULF).",
    mastersFundingModel: "Non-EU students pay tuition (approx. SEK 90,000–160,000/year) unless awarded the Swedish Institute scholarship or an institutional university tuition waiver.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "PhD employment contracts can allocate up to 20% of time for teaching and department administration, which extends the 4-year PhD duration to 5 full years with paid salary.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes: "Swedish PhD vacancies are legally advertised publicly as job openings on university career pages. You apply directly to the open vacancy posting; cold contacting professors is generally not required unless asking for vacancy clarification.",
    languageRequirements: "English proficiency is universal. IELTS 6.5 (minimum 5.5 subscores) or TOEFL 90 (minimum 20 writing) meets the English 6 standard required nationwide.",
    typicalApplicationDeadlines: "National Master's Portal (UniversityAdmissions.se): Opens mid-October, closes January 15. Swedish Institute scholarship application: February. PhD vacancies: Advertised year-round.",
    importantLimitations: [
      "Master's application fee of SEK 900 is mandatory for non-EU applicants through UniversityAdmissions.se.",
      "The Swedish Institute scholarship is restricted to citizens of ~41 specified developing/partner nations with documented work experience (3,000+ hours).",
      "Doctoral vacancy competition is intense because each position is a globally advertised, fully paid job."
    ],
    officialPortals: [
      { name: "UniversityAdmissions.se", url: "https://www.universityadmissions.se/intl/start", description: "Centralized national application portal for all Swedish universities." },
      { name: "Study in Sweden", url: "https://studyinsweden.se/", description: "Official Swedish Institute resource guide for international degree studies." },
      { name: "Swedish Institute (SI)", url: "https://si.se/en/", description: "Official portal for Swedish government scholarships and leadership networks." }
    ],
    applicationSequence: [
      "Create an account on UniversityAdmissions.se and select up to 4 Master's programs in priority order before January 15.",
      "Pay the SEK 900 application fee and upload verified academic transcripts and passport.",
      "In early February, apply for the Swedish Institute Scholarship for Global Professionals if eligible.",
      "For PhD: Regularly check university career pages (KTH, Lund, Karolinska, Uppsala, Chalmers) for open doctoral job ads.",
      "Apply for a Swedish Residence Permit for Higher Education through the Swedish Migration Agency (Migrationsverket)."
    ]
  },
  {
    id: "finland",
    name: "Finland",
    code: "FI",
    flag: "🇫🇮",
    region: "Europe",
    headline: "Finland Scholarships (100% Tuition + €5,000 Relocation) + Salaried Doctoral Fellowships",
    summary: "Finland provides high-quality academic education and world-leading research facilities. Non-EU students admitted to Master's programs can receive national 'Finland Scholarships' covering full tuition plus relocation grants. PhD candidates are funded via salaried university positions or Finnish foundation research grants.",
    fundingPhilosophy: "Egalitarian Nordic Innovation: targeted state excellence scholarships for Master's and salaried employment for doctoral researchers.",
    commonFundingRoutes: [
      "Finland Scholarships (Ministry of Education and Culture - 100% tuition + €5,000 living grant)",
      "University 100% Tuition Waiver Scholarships (Aalto, Helsinki, Tampere, Oulu)",
      "Salaried Doctoral Researcher Positions (~€2,400–€2,800/month employment)",
      "Finnish Foundation Grants (Kone Foundation, Finnish Cultural Foundation, Academy of Finland)",
      "Erasmus Mundus Joint Masters"
    ],
    governmentScholarships: [
      {
        name: "Finland Scholarship (Master's level)",
        url: "https://www.studyinfinland.fi/scholarships/finland-scholarships",
        description: "Funded by the Finnish Ministry of Education and Culture to attract exceptional international talent to Finnish research universities.",
        coverage: "100% tuition fee waiver for the first year + a €5,000 relocation grant deposited upon arrival.",
        degreeLevel: "Master's Only"
      },
      {
        name: "EDUFI Fellowships for Doctoral Students",
        url: "https://www.oph.fi/en/development/edufi-fellowship",
        description: "Finnish National Agency for Education grants for international doctoral researchers completing visits or full PhDs in Finland.",
        coverage: "€1,500–€1,900/month living stipend for research visits up to 12 months.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "Every Finnish university operates a competitive scholarship program. When applying via the national portal, you can tick a single checkbox to be considered for a 100% tuition waiver.",
    phdFundingModel: "Doctoral researchers at Finnish universities are either employed directly on university payroll with standard employee benefits or funded through multi-year personal grants from Finnish philanthropic foundations.",
    mastersFundingModel: "Non-EU students pay tuition (€10,000–€18,000/year) unless awarded a Finland Scholarship or institutional tuition waiver. Living costs average €800–€1,000/month.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Research Assistantships in university labs are common for Master's students writing their theses, providing hourly wages or monthly thesis stipends.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes: "For PhD applications, you must identify a prospective supervisor who agrees to support your doctoral research plan before formal admission to the doctoral school.",
    languageRequirements: "Programs are taught extensively in English. Standard requirements: IELTS Academic 6.5 (minimum 6.0 in writing) or TOEFL iBT 92.",
    typicalApplicationDeadlines: "Joint Application to Higher Education (Opintopolku / Studyinfo.fi): Opens early January, closes mid-January. Doctoral application windows open 2–4 times per year.",
    importantLimitations: [
      "The primary Master's joint application window is extremely brief (typically just two weeks in January).",
      "Living costs in Helsinki and Espoo are high; personal funds or a relocation grant are required.",
      "Non-EU students must provide proof of €6,720/year living funds for the Finnish residence permit."
    ],
    officialPortals: [
      { name: "Studyinfo.fi (Opintopolku)", url: "https://opintopolku.fi/konfo/en/", description: "Official centralized national application portal for all Finnish higher education." },
      { name: "Study in Finland", url: "https://www.studyinfinland.fi/", description: "Official national portal for international students by the Finnish National Agency for Education." },
      { name: "Research.fi", url: "https://research.fi/en/", description: "The national science portal of the Academy of Finland for ongoing research projects." }
    ],
    applicationSequence: [
      "Browse degree programs on Studyinfo.fi during autumn.",
      "Prepare certified academic transcripts, language scores, and portfolio/CV.",
      "Submit application on Studyinfo.fi during the two-week January joint application window.",
      "Tick the box applying for the 'Finland Scholarship' and institutional tuition waivers on the joint form.",
      "Upon receiving offer in March/April, accept seat and apply for Finnish Residence Permit through Enter Finland."
    ]
  },
  {
    id: "norway",
    name: "Norway",
    code: "NO",
    flag: "🇳🇴",
    region: "Europe",
    headline: "High-Paying Salaried PhD Fellowships (NOK 530,000+/year) with Full Employee Rights",
    summary: "Norway is a premier global destination for doctoral research. All PhD candidates are hired as salaried research fellows (Stipendiat) earning over NOK 530,000 annually with full healthcare, pension, and worker rights. While public universities introduced non-EU tuition for Master's in 2023, PhD education remains 100% tuition-free and fully salaried.",
    fundingPhilosophy: "Decent Work Model: PhD researchers are fully recognized academic staff with legally mandated living wages and collective bargaining protections.",
    commonFundingRoutes: [
      "Doctoral Research Fellowship (Stipendiat - fully salaried position at NOK 532,000+ / ~$50,000/year)",
      "Research Council of Norway (Forskningsrådet) project grants",
      "Erasmus+ and EEA/Norway Grants",
      "University Post-Doctoral and Research Assistantships"
    ],
    governmentScholarships: [
      {
        name: "EEA and Norway Grants Scholarships",
        url: "https://eeagrants.org/",
        description: "Bilateral funding for students and researchers from beneficiary European partner states.",
        coverage: "Full study grants and project research stipends.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Merit scholarships for non-EU Master's students are limited following the 2023 tuition reform, but selected private and specialized institutions offer tuition relief.",
    phdFundingModel: "PhDs are 100% funded jobs. You apply to an advertised 'PhD Fellow' vacancy. The standard salary starts around NOK 532,700/year, with annual seniority increments and comprehensive public pension.",
    mastersFundingModel: "Non-EU students pay tuition at public universities (approx. NOK 130,000–250,000/year) as of autumn 2023. Self-funding requires proof of ~NOK 151,690/year for living expenses.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "PhD appointments typically span 3 years of 100% research, or 4 years including 25% mandatory department duty work (teaching, mentoring, lab maintenance).",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes: "Apply directly to advertised PhD vacancy announcements on Jobbnorge or Webcruiter. Prior supervisor contact is only needed if proposing an external, self-funded grant project.",
    languageRequirements: "English proficiency is exceptionally high in Norway. IELTS 6.5 or TOEFL 90 is required for admissions.",
    typicalApplicationDeadlines: "PhD positions are posted year-round on Jobbnorge.no. Master's applications for international students typically close between December 1 and January 15.",
    importantLimitations: [
      "Master's degrees at public universities are no longer tuition-free for non-EU/EEA students.",
      "Norway has one of the highest cost-of-living indices in the world; living without a salary or scholarship is prohibitive.",
      "Proof of funds for student residence permits is approximately NOK 151,690/year."
    ],
    officialPortals: [
      { name: "Study in Norway", url: "https://studyinnorway.no/", description: "Official Norwegian government guide to higher education for international students." },
      { name: "Jobbnorge", url: "https://www.jobbnorge.no/en/available-jobs", description: "The primary national portal for all Norwegian university faculty and PhD Fellow vacancies." },
      { name: "UDI (Norwegian Directorate of Immigration)", url: "https://www.udi.no/en/", description: "Official immigration authority for Norwegian residence and work permits." }
    ],
    applicationSequence: [
      "For PhD: Set up daily alerts on Jobbnorge.no for 'PhD Research Fellow' in your field.",
      "Prepare a comprehensive academic CV, publication list, and tailored project cover letter.",
      "Submit application directly via the university's online recruitment system (Jobbnorge/Webcruiter).",
      "Shortlisted candidates undergo a formal interview and presentation before the departmental hiring committee.",
      "Accepted fellows receive an employment contract and apply for a Norwegian Residence Permit for Skilled Workers / Researchers."
    ]
  },
  {
    id: "denmark",
    name: "Denmark",
    code: "DK",
    flag: "🇩🇰",
    region: "Europe",
    headline: "Collective Agreement PhD Salaries (DKK 33,000/month) + Danish Government Scholarships",
    summary: "Denmark offers world-class universities (Copenhagen, DTU, Aarhus) where PhD researchers are employed under the AC collective agreement, receiving competitive salaries (DKK ~33,000/month) and generous pension benefits. Master's candidates can compete for Danish Government Scholarships.",
    fundingPhilosophy: "Collaborative Nordic Research Economy: strong industry-academic linkages, industrial PhD options, and union-backed doctoral salaries.",
    commonFundingRoutes: [
      "PhD Fellow Employment Contract (Overenskomst - DKK 32,000–35,000/month + 17.1% pension)",
      "Danish Government Scholarships under the Cultural Agreements (Master's level)",
      "University 100% Tuition Waiver + Living Cost Grants (DTU, KU, AU)",
      "Industrial PhD (ErhvervsPhD) co-funded by the Innovation Fund Denmark and private industry"
    ],
    governmentScholarships: [
      {
        name: "Danish Government Scholarships (Cultural Agreements)",
        url: "https://ufm.dk/en/education/programmes-and-education-institutions/scholarships-and-loans/the-cultural-agreements-programme",
        description: "Targeted scholarships for highly qualified exchange and degree students from selected non-EU partner nations.",
        coverage: "Full or partial tuition fee waivers and monthly living contributions.",
        degreeLevel: "Master's Only"
      },
      {
        name: "Innovation Fund Denmark Industrial PhD",
        url: "https://innovationsfonden.dk/en/p/industrial-phd",
        description: "A 3-year research project where the PhD candidate is employed by a private company while enrolled at a Danish university.",
        coverage: "Full private company salary + DKK 17,500/month company subsidy + university tuition coverage.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "Danish public universities receive government pools to award full tuition waivers and monthly stipends (~DKK 6,000–8,000/month) to outstanding non-EU Master's applicants.",
    phdFundingModel: "PhDs are fully funded employment contracts. Tuition is zero, and candidates receive a formal salary paid under the Danish Confederation of Professional Associations (AC) agreement.",
    mastersFundingModel: "Non-EU students pay tuition (€6,000–€16,000/year) unless awarded a Danish Government Scholarship or institutional fee waiver.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "PhD employment contracts include a statutory requirement of 840 hours of teaching and knowledge dissemination over the 3-year doctoral period.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes: "For advertised university PhD vacancies, apply through the portal. For independent project applications or Industrial PhDs, securing a university supervisor first is essential.",
    languageRequirements: "Programs require proven English proficiency: IELTS 6.5 overall or TOEFL iBT 88–90.",
    typicalApplicationDeadlines: "Master's applications for non-EU students close January 15. PhD vacancies are advertised throughout the year.",
    importantLimitations: [
      "Denmark has strict immigration rules and high living expenses (Copenhagen rent is competitive).",
      "Master's government scholarships are allocated internally by universities; there is no separate government application portal.",
      "A 3-year Bachelor's degree must meet Danish equivalency standards for direct Master's admission."
    ],
    officialPortals: [
      { name: "Study in Denmark", url: "https://studyindenmark.dk/", description: "Official Danish Ministry of Higher Education and Science portal." },
      { name: "UFM (Danish Ministry of Higher Education)", url: "https://ufm.dk/en", description: "Official government portal for education policies and international agreements." },
      { name: "SIRI (Danish Agency for International Recruitment)", url: "https://www.nyidanmark.dk/en-GB", description: "Official immigration service for Danish student and researcher permits." }
    ],
    applicationSequence: [
      "Apply through the national digital application portal (DANS) before January 15 for Master's programs.",
      "Check the box requesting consideration for the Danish Government Scholarship.",
      "For PhD: Browse vacancy listings on DTU Jobs, Copenhagen University Job Portal, or Aarhus University Careers.",
      "Upon acceptance, your university or employer initiates the digital residence and work permit application (ST1 or PhD permit)."
    ]
  },
  {
    id: "netherlands",
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    region: "Europe",
    headline: "Salaried Promovendus PhD Positions (€2,770–€3,539/month) + NL Scholarships",
    summary: "In the Netherlands, doctoral candidates are not treated as students—they are 'Promovendi' (university employees) hired under the national CAO Universiteiten collective agreement with generous salaries, holiday allowances, and year-end bonuses. Master's candidates can access the NL Scholarship and Erasmus Mundus joint degrees.",
    fundingPhilosophy: "Employee-First Doctoral Framework: full labor rights, union wages, and structured research autonomy.",
    commonFundingRoutes: [
      "Promovendus Doctoral Employment (CAO Universiteiten salary: €2,770 in Year 1 rising to €3,539/month in Year 4)",
      "NL Scholarship (formerly Holland Scholarship - Dutch Ministry of Education)",
      "NWO (Dutch Research Council) Open Technology & Talent Programme grants",
      "Institutional Excellence Scholarships (e.g., TU Delft Justus & Louise van Effen, Leiden Excellence)",
      "Erasmus Mundus Joint Master Degrees"
    ],
    governmentScholarships: [
      {
        name: "NL Scholarship (Dutch Ministry of Education)",
        url: "https://www.studyinnl.org/finances/nl-scholarship",
        description: "Funded by the Dutch Ministry of Education, Culture and Science for international students outside the EEA.",
        coverage: "€5,000–€15,000 financial contribution toward tuition and living costs during the first year.",
        degreeLevel: "Master's Only"
      },
      {
        name: "Orange Knowledge Programme (OKP)",
        url: "https://www.nuffic.nl/en/subjects/orange-knowledge-programme",
        description: "Dutch global development initiative offering full scholarships for professionals in partner countries.",
        coverage: "Full tuition, living costs, visa, and insurance for selected Master's and training courses.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Top universities offer flagship awards, such as TU Delft's Justus & Louise van Effen Excellence Scholarships (100% tuition + living expenses) and Utrecht Excellence Scholarships.",
    phdFundingModel: "PhDs are 100% fully funded employment positions (internal candidates). You receive a salary according to the Collective Labour Agreement of Dutch Universities (CAO), including an 8% holiday allowance and 8.3% end-of-year bonus.",
    mastersFundingModel: "Non-EU students pay tuition fees (€12,000–€22,000/year). Funding requires winning an NL Scholarship, university excellence grant, or an Erasmus Mundus award.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Under the CAO agreement, PhD candidates generally allocate up to 10–15% of their time to assisting with bachelor's coursework and lab supervision.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes: "Most Dutch PhD vacancies are advertised as open jobs on AcademicTransfer.com. You apply directly to the posting; cold emailing professors is only helpful when proposing a pre-funded external fellowship.",
    languageRequirements: "The Netherlands is the top non-native English-speaking country in the world. IELTS 6.5–7.0 (minimum 6.0 subscores) or TOEFL iBT 90–100 is standard.",
    typicalApplicationDeadlines: "Master's priority scholarship deadlines: December 1 to February 1. General admission: April 1. PhD vacancies: Advertised year-round.",
    importantLimitations: [
      "Severe national student housing shortage; never travel to the Netherlands without verified accommodation booked months in advance.",
      "High non-EU tuition for Master's programs if no scholarship is secured.",
      "Application evaluation fees (€75–€100) are charged by most Dutch research universities."
    ],
    officialPortals: [
      { name: "AcademicTransfer", url: "https://www.academictransfer.com/en/", description: "The official academic job portal for all 14 Dutch universities and research institutes." },
      { name: "Study in NL (Nuffic)", url: "https://www.studyinnl.org/", description: "The official Dutch national agency portal for international education." },
      { name: "NWO (Dutch Research Council)", url: "https://www.nwo.nl/en", description: "Official funding body investing over €1 billion annually in scientific research." }
    ],
    applicationSequence: [
      "For Master's: Apply via Studielink.nl and the university application portal before December 1/February 1.",
      "Submit the institutional excellence scholarship application simultaneously.",
      "For PhD: Regularly monitor AcademicTransfer.com for PhD vacancies matching your specialization.",
      "Submit CV, publication list, and cover letter addressing the specific project criteria.",
      "Upon acceptance, the university handles your IND entry visa and Dutch residence permit application directly."
    ]
  },
  {
    id: "belgium",
    name: "Belgium",
    code: "BE",
    flag: "🇧🇪",
    region: "Europe",
    headline: "FWO / FNRS Doctoral Fellowships (€2,400+ net/month) + Master Mind Awards",
    summary: "Belgium boasts world-renowned research institutions like KU Leuven, Ghent University, and UCLouvain. PhD researchers receive tax-exempt doctoral fellowship stipends of €2,400+ net per month via FWO (Flanders) or FNRS (Wallonia), while Master's applicants can secure Master Mind scholarships.",
    fundingPhilosophy: "Subsidized European High-Tech Hub: low standard tuition at Flemish and Walloon universities paired with generous tax-exempt research fellowship salaries.",
    commonFundingRoutes: [
      "FWO / FNRS Doctoral Fellowships (tax-exempt salary of €2,400–€2,700 net/month with full social security)",
      "Master Mind Scholarship Programme (Government of Flanders)",
      "VLIR-UOS Scholarships for Sustainable Development (Master's level)",
      "University Special Research Fund (BOF) Doctoral Grants",
      "Erasmus Mundus Joint Master Degrees"
    ],
    governmentScholarships: [
      {
        name: "Master Mind Scholarship (Flanders Government)",
        url: "https://www.studyinflanders.be/scholarships/master-mind-scholarships",
        description: "Awarded by the Flemish Ministry of Education to outstanding international Master's students.",
        coverage: "Full tuition waiver + €10,000 living grant per academic year.",
        degreeLevel: "Master's Only"
      },
      {
        name: "VLIR-UOS Scholarships",
        url: "https://www.vliruos.be/en/scholarships/6",
        description: "Full-ride awards for candidates from developing nations pursuing selected international master's programs.",
        coverage: "100% tuition, monthly allowance, accommodation, travel, and comprehensive insurance.",
        degreeLevel: "Master's Only"
      }
    ],
    universityScholarships: "KU Leuven and Ghent University provide Special Research Fund (BOF) doctoral positions and targeted developing-country master's grants.",
    phdFundingModel: "PhDs are predominantly fully funded through 4-year tax-exempt doctoral fellowships (FWO in Flanders, FNRS in Wallonia) or BOF university research grants, providing €2,400+ net monthly take-home pay.",
    mastersFundingModel: "Standard public tuition is exceptionally low at ~€1,116/year for many programs, though certain specialized Master's charge non-EU fees (~€3,500–€6,000/year).",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Doctoral researchers can serve as teaching assistants ('Assisterend Academisch Personeel' - AAP), which includes formal university employment and structured teaching hours.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "For PhD applications in Belgium, you MUST secure a university faculty promoter (professor) who co-submits your research grant proposal to FWO, FNRS, or the university BOF fund.",
    languageRequirements: "English is widely used in graduate research. Standard requirements: IELTS 6.5–7.0 or TOEFL 90+.",
    typicalApplicationDeadlines: "Master Mind Scholarship nominations: February–March. FWO PhD fellowship applications: Typically March 1. Master's admissions: February 1 (non-EEA).",
    importantLimitations: [
      "Master Mind requires institutional nomination by a Flemish university before you can apply to the government.",
      "Strict Belgian visa proof of financial solvency requirement (~€789–€1,000/month block or official guarantor).",
      "FWO/FNRS fellowship competition is rigorous; high academic rankings and clear research design are critical."
    ],
    officialPortals: [
      { name: "Study in Flanders", url: "https://www.studyinflanders.be/", description: "Official website for higher education in the Flemish region of Belgium." },
      { name: "FWO (Research Foundation - Flanders)", url: "https://www.fwo.be/en/", description: "The premier funding body for fundamental scientific research in Flanders." },
      { name: "FNRS (Fonds de la Recherche Scientifique)", url: "https://www.frs-fnrs.be/en/", description: "Funding agency supporting scientific research in the French-speaking community of Belgium." }
    ],
    applicationSequence: [
      "Find a prospective research promoter at a Belgian university (KU Leuven, Ghent, Antwerp, VUB, UCLouvain).",
      "For Master's: Apply to the university and request nomination for the Master Mind Scholarship.",
      "For PhD: Work collaboratively with your promoter to write and co-submit an FWO/FNRS/BOF doctoral proposal.",
      "Upon fellowship approval, receive official admission and register at the university doctoral school.",
      "Apply for the Belgian Long-Stay Visa (Type D) through the local embassy or VFS Global."
    ]
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    region: "Europe",
    headline: "Highest Global PhD Salaries (CHF 47,040–80,000/year) + Swiss Excellence Scholarships",
    summary: "Switzerland provides the highest academic research salaries on earth. At world top-10 universities like ETH Zurich and EPFL, PhD researchers earn between CHF 47,000 and CHF 80,000+ per year under Swiss National Science Foundation (SNSF) standards. The Swiss Government also awards prestigious Excellence Scholarships.",
    fundingPhilosophy: "World-Class Precision & Unrivaled Research Investment: premier national salaries that guarantee complete financial independence during doctoral studies.",
    commonFundingRoutes: [
      "SNSF-Funded Doctoral Research Positions (CHF 47,040–CHF 55,000+ per year base salary)",
      "ETH Zurich / EPFL Internal Doctoral Assistantships (up to CHF 70,000–CHF 85,000/year depending on department)",
      "Swiss Government Excellence Scholarships (ESKAS / FCS)",
      "ETH Zurich Excellence Scholarship & Opportunity Programme (ESOP - Master's level)",
      "EPFL Master Excellence Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Swiss Government Excellence Scholarships (ESKAS)",
        url: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        description: "Federal awards granted by the Swiss Confederation to international postgraduates and researchers.",
        coverage: "CHF 1,920/month living allowance, exemption from tuition fees, health insurance, and flight allowance.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "ETH Zurich's ESOP and EPFL's Excellence Fellowships cover full living costs (CHF 12,000/semester) and tuition waivers for top Master's students.",
    phdFundingModel: "All PhD students at Swiss public universities are employed as university research assistants. Tuition is negligible (often under CHF 150/semester for PhDs), and salaries are world-leading.",
    mastersFundingModel: "Standard public tuition at ETH Zurich and EPFL is remarkably low (~CHF 730/semester). However, high living expenses (CHF 20,000–24,000/year) require personal funds or competitive excellence fellowships like ESOP.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Assistantship responsibilities (TA work, lab exercises) are directly integrated into the salaried doctoral contract without needing extra applications.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "For individual doctoral research, you must contact professors directly and secure a formal commitment letter. For structured doctoral schools (e.g., EPFL EDIC), admissions are centralized.",
    languageRequirements: "Master's and PhD programs in STEM are 100% in English: IELTS 7.0+ or TOEFL iBT 100+.",
    typicalApplicationDeadlines: "ETH Zurich & EPFL Master's: December 15. Swiss Government Excellence Scholarships: September–December (varies by embassy). PhD vacancies: Posted year-round.",
    importantLimitations: [
      "Cost of living in Zurich and Geneva is among the highest globally (monthly living costs exceed CHF 1,800–2,200).",
      "Cantonal immigration offices strictly enforce proof of financial means (CHF 21,000 in a Swiss bank account) for Master's study visas if unassisted.",
      "Acceptance rates at ETH Zurich and EPFL are exceptionally competitive."
    ],
    officialPortals: [
      { name: "Swiss Government Excellence Scholarships (SERI)", url: "https://www.sbfi.admin.ch/sbfi/en/home.html", description: "State Secretariat for Education, Research and Innovation official portal." },
      { name: "SNSF (Swiss National Science Foundation)", url: "https://www.snf.ch/en", description: "Switzerland's central research funding agency." },
      { name: "ETH Zurich Jobs & Vacancies", url: "https://jobs.ethz.ch/", description: "Direct portal for scientific and doctoral research vacancies at ETH Zurich." }
    ],
    applicationSequence: [
      "For Master's: Apply directly to ETH Zurich or EPFL online admissions before December 15, selecting the ESOP/Fellowship option.",
      "For PhD: Browse lab vacancy pages or contact targeted professors with a tailored research inquiry and CV.",
      "For Swiss Government Excellence: Contact the local Swiss embassy in your home country in August/September for official application packages.",
      "Upon securing an employment contract or scholarship, submit visa application to the Swiss cantonal migration office."
    ]
  },
  {
    id: "italy",
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    region: "Europe",
    headline: "Regional DSU Need-Based Full Waivers + MAECI Government Grants & National PhD Stipends",
    summary: "Italy is one of the most generous destinations for international students due to its DSU (Diritto allo Studio Universitario) regional framework, which provides full tuition waivers, free cafeteria meals, and annual living stipends based on family income. National PhD programs are fully funded at €1,200–€1,400 net/month.",
    fundingPhilosophy: "Constitutional Right to Higher Education: socio-economic need-based regional funding (DSU) guarantees tuition-free access and living support for qualifying families worldwide.",
    commonFundingRoutes: [
      "DSU Regional Need-Based Scholarship (100% tuition waiver + free dorm + free meals + ~€5,000–€7,000 cash stipend)",
      "MAECI Italian Government Scholarships for Foreign Citizens",
      "Invest Your Talent in Italy (IYT) Programme (scholarship + guaranteed company internship)",
      "National PNRR-Funded PhD Scholarships (~€1,200–€1,400 net/month with 50% increase for research abroad)",
      "University Merit Scholarships (Politecnico di Milano, Politecnico di Torino, Sapienza, Bologna)"
    ],
    governmentScholarships: [
      {
        name: "MAECI Grants for Foreign Citizens",
        url: "https://studyinitaly.esteri.it/en/call-for-procedure",
        description: "Italian Ministry of Foreign Affairs scholarships to foster international cultural and scientific cooperation.",
        coverage: "€900/month living stipend + university tuition exemption + health insurance.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Invest Your Talent in Italy",
        url: "https://postgradinitaly.esteri.it/postgradinitaly/en/how-to-apply",
        description: "Targeted Master's program combining engineering/business studies with paid Italian corporate internships.",
        coverage: "Full tuition waiver + €900/month allowance + Italian language courses.",
        degreeLevel: "Master's Only"
      }
    ],
    universityScholarships: "Merit awards (e.g., Politecnico di Milano Platinum/Gold scholarships) provide €10,000/year living allowance plus complete tuition waivers.",
    phdFundingModel: "All accredited PhD seats in Italy (Dottorato di Ricerca) with scholarship receive a national legally defined stipend (~€16,243 gross per year, approx. €1,200–€1,400 net/month), increasing by 50% during authorized research visits abroad.",
    mastersFundingModel: "Public university tuition is indexed to family income via the 'ISEE Parificato' document (€156–€3,000/year). Qualifying students through DSU pay €0 tuition and receive living stipends.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Universities offer '150 Ore' (150 hours) student collaborations in libraries, computer labs, and international offices paying €8–€10/hour.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes: "PhD admissions in Italy are strictly governed by public competitive examinations (Bando di Concorso). You submit a research project and CV to a centralized department committee.",
    languageRequirements: "Over 500 English-taught Master's and almost all PhD programs require IELTS 6.0–6.5 or TOEFL 78–90.",
    typicalApplicationDeadlines: "University pre-admissions: November–February. Universitaly pre-enrollment: March–June. DSU regional applications: July–September.",
    importantLimitations: [
      "Obtaining the ISEE Parificato document requires getting home-country family income documents translated and stamped by the Italian Embassy.",
      "Italian university administrative bureaucracy can be slow; start paperwork 6 months in advance.",
      "DSU scholarship cash stipends are often paid in two delayed installments (December and June)."
    ],
    officialPortals: [
      { name: "Universitaly Official Portal", url: "https://www.universitaly.it/", description: "The official Italian Ministry of University and Research portal for all university pre-enrollments." },
      { name: "Study in Italy (MAECI)", url: "https://studyinitaly.esteri.it/", description: "Official Ministry of Foreign Affairs portal for international students and government scholarships." }
    ],
    applicationSequence: [
      "Apply directly to Italian university portals (UniBo, PoliMi, Sapienza, PoliTo) between November and February.",
      "Receive conditional admission letter and submit official pre-enrollment via the Universitaly portal.",
      "Obtain translated and legalized family income documents from your home country for the ISEE Parificato.",
      "Apply for regional DSU scholarships (e.g., ER.GO in Emilia Romagna, DSU Toscana, Disco Lazio) in July.",
      "Book study visa appointment at the Italian Embassy/Consulate."
    ]
  },
  {
    id: "austria",
    name: "Austria",
    code: "AT",
    flag: "🇦🇹",
    region: "Europe",
    headline: "Low Public Tuition (€726/semester) + FWF Salaried Doctoral Positions & Ernst Mach Grants",
    summary: "Austria combines world-leading academic heritage with modern scientific funding. Non-EU tuition at public universities is legally capped at just €726.72 per semester. PhD researchers are hired under collective agreements (Kollektivvertrag) on FWF research grants earning ~€2,400+ gross/month.",
    fundingPhilosophy: "Subsidized Central European Excellence: legally capped low tuition fees and competitive national Austrian Science Fund (FWF) doctoral research positions.",
    commonFundingRoutes: [
      "Statutory Low Tuition at Public Universities (€726.72 per semester for non-EU students)",
      "FWF (Austrian Science Fund) Salaried Doctoral Positions (~€2,460 gross/month on 30h/wk contracts)",
      "Ernst Mach Grant (Austrian Agency for Education and Internationalisation - OeAD)",
      "Marietta Blau Grant (for doctoral candidates conducting research abroad)",
      "University of Vienna / TU Wien / ISTA (Institute of Science and Technology Austria) Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Ernst Mach Grant (OeAD)",
        url: "https://oead.at/en/to-austria/grants-and-scholarships/ernst-mach-grant",
        description: "Funded by the Austrian Federal Ministry of Education, Science and Research for international postgraduates and young researchers.",
        coverage: "Monthly grant of €1,150–€1,250, health insurance, accommodation assistance, and tuition fee exemption.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "ISTA PhD Fellowships (Institute of Science and Technology Austria)",
        url: "https://ista.ac.at/en/education/phd-program/",
        description: "Fully funded international PhD program in computer science, biology, neuroscience, physics, and math.",
        coverage: "100% full international salary, full health insurance, and comprehensive housing assistance.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "Merit-based tuition waiver grants (Leistungsstipendium) are awarded after completion of successful academic semesters.",
    phdFundingModel: "PhD students employed on third-party FWF projects or university positions sign employment contracts under the collective agreement for university staff (Kollektivvertrag B1).",
    mastersFundingModel: "Tuition is universally capped at €726.72/semester for non-EU students. Living costs (~€950–€1,200/month) must be funded via scholarships, part-time work, or personal funds.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Student assistant (Studienassistent) positions in faculties pay hourly wages for up to 20 hours/week.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes: "For individual doctoral research, finding a professor willing to supervise your dissertation is required. For structured programs (like ISTA or Vienna Graduate Schools), applications are centralized.",
    languageRequirements: "English-taught programs require IELTS 6.5–7.0 or TOEFL 90+. German is helpful for local living but not required for STEM research.",
    typicalApplicationDeadlines: "Winter Semester: Apply by September 5 (Austrian universities allow extended enrollment periods). ISTA PhD deadline: January 8. OeAD grants: February 1.",
    importantLimitations: [
      "Strict legalization requirements: Austrian universities mandate Apostille or full consular superlegalization for all foreign degree certificates.",
      "Proof of financial funds for Austrian student residence permit is roughly €1,100/month for students under 24, and ~€1,250/month for older students.",
      "Housing in Vienna requires booking early via OeAD student housing."
    ],
    officialPortals: [
      { name: "Grants.at (OeAD Database)", url: "https://grants.at/en/", description: "Austria's official and largest online database for scholarships and research grants." },
      { name: "OeAD (Agency for Education and Internationalisation)", url: "https://oead.at/en/", description: "The central Austrian service agency for international academic mobility." },
      { name: "ISTA PhD Portal", url: "https://ista.ac.at/en/education/phd-program/", description: "Direct portal for Austria's premier world-leading science and tech institute." }
    ],
    applicationSequence: [
      "Search for programs and funding options on Grants.at and university websites.",
      "Obtain official Apostille or consular legalization on all academic certificates.",
      "Apply directly to the university's online portal (e.g., u:space for Uni Vienna, TISS for TU Wien).",
      "Apply for the Ernst Mach Grant or ISTA Fellowship if eligible.",
      "Apply for the Austrian Residence Permit (Aufenthaltsbewilligung Student) at the Austrian Embassy."
    ]
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "Europe",
    headline: "Chevening & Commonwealth Scholarships + UKRI Fully Funded PhD Studentships",
    summary: "The United Kingdom hosts historic global universities (Oxford, Cambridge, Imperial, UCL, Edinburgh). International students can access fully funded flagship awards like Chevening, Commonwealth Scholarships, Rhodes, and Gates Cambridge. Additionally, UKRI doctoral training partnerships now allocate up to 30% of fully funded PhD awards to international applicants.",
    fundingPhilosophy: "Prestigious Merit Fellowships & Research Council Studentships: highly competitive, fully funded packages that cover international fees and tax-free stipends.",
    commonFundingRoutes: [
      "Chevening Scholarships (UK Foreign, Commonwealth & Development Office - Master's)",
      "Commonwealth Scholarships (for citizens of Commonwealth developing nations)",
      "UKRI (UK Research and Innovation) Doctoral Training Partnerships (DTPs/CDTs - PhD)",
      "Gates Cambridge & Rhodes Scholarships (Oxford/Cambridge)",
      "University Departmental Studentships & President's Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Chevening Scholarships",
        url: "https://www.chevening.org/scholarships/",
        description: "The UK government's global scholarship programme, funded by the FCDO and partner organizations.",
        coverage: "100% full university tuition fees, monthly living allowance, economy flights to/from the UK, and arrival grants.",
        degreeLevel: "Master's Only"
      },
      {
        name: "Commonwealth Master's and PhD Scholarships",
        url: "https://cscuk.fcdo.gov.uk/apply/",
        description: "Funded by the UK FCDO for individuals from developing Commonwealth countries.",
        coverage: "Full tuition, monthly stipend of £1,347 (£1,652 in London), return flights, warm clothing allowance, and thesis grant.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Major institutional awards include Clarendon Fund (Oxford), Gates Cambridge, Cambridge Trust, Imperial College President's PhD Scholarships, and Edinburgh Doctoral College Scholarships.",
    phdFundingModel: "Funded PhDs in the UK are called 'Studentships'. UKRI studentships provide a minimum tax-free stipend of £19,237/year (£21,237 in London for 2024–2025) plus full tuition fee coverage for 3.5–4 years.",
    mastersFundingModel: "Master's tuition is high (£18,000–£45,000/year). Fully funded Master's positions rely on winning a Chevening, Commonwealth, or university-wide full scholarship.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Graduate Teaching Assistant (GTA) work pays competitive hourly rates (£18–£25/hour) for marking and laboratory demonstration, typically capped at 6–8 hours/week.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "For PhD applications, approaching prospective supervisors with a structured 3–5 page research proposal is standard practice across almost all UK universities before formal portal submission.",
    languageRequirements: "Strict UKVI requirements: IELTS Academic (usually 6.5–7.5 overall with 6.0–7.0 minimum subscores) or TOEFL iBT 92–100.",
    typicalApplicationDeadlines: "Chevening: Opens August, closes early November. Commonwealth: September–December. Oxford/Cambridge funding deadlines: December 1 or early January.",
    importantLimitations: [
      "Chevening requires recipients to return to their home country for a minimum of two years post-graduation.",
      "The UK Immigration Health Surcharge (IHS) costs £776/year unless covered by specific scholarship schemes.",
      "UKRI studentships have a statutory cap (maximum 30%) on international scholars, making competition fierce."
    ],
    officialPortals: [
      { name: "Jobs.ac.uk PhD Studentships", url: "https://www.jobs.ac.uk/categories/phd", description: "The premier UK academic job board listing all active university PhD studentships." },
      { name: "Chevening Official Portal", url: "https://www.chevening.org/", description: "Official application and information portal for Chevening scholars." },
      { name: "FindAPhD.com UK Directory", url: "https://www.findaphd.com/", description: "Comprehensive searchable directory of funded doctoral projects across the UK." }
    ],
    applicationSequence: [
      "For Master's: Submit Chevening or Commonwealth application in autumn (August–November).",
      "Apply to 3 eligible UK university master's programs in parallel before January.",
      "For PhD: Find funded studentships on Jobs.ac.uk or contact supervisors with a research proposal.",
      "Submit official university portal application before the institutional funding deadline (December/January).",
      "Receive CAS (Confirmation of Acceptance for Studies) letter and apply for the UK Student Visa."
    ]
  },

  // ================= NORTH AMERICA =================
  {
    id: "united-states",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America",
    headline: "100% Tuition Remission + Graduate Assistantships (RA/TA) & Fulbright Foreign Student Grants",
    summary: "The United States is the largest funder of doctoral education in the world. Virtually all STEM and quantitative PhD programs offer 100% tuition remission, comprehensive health insurance, and guaranteed 9–12 month living stipends ($28,000–$45,000/year) funded via Graduate Research Assistantships (GRA) or Teaching Assistantships (GTA). Master's candidates can access Fulbright awards or university assistantships.",
    fundingPhilosophy: "Departmental Graduate Assistantship Ecosystem: PhD candidates are supported through teaching and sponsored federal research grants (NSF, NIH, DOE, DARPA).",
    commonFundingRoutes: [
      "Graduate Research Assistantship (GRA - 20h/week research funding full tuition + $28k–$45k/year stipend)",
      "Graduate Teaching Assistantship (GTA - 20h/week lab/recitation teaching + full tuition waiver + stipend)",
      "University Graduate School Fellowships (Dean's Fellowship, Presidential Fellowship)",
      "Fulbright Foreign Student Program (US Department of State bilateral award)",
      "External Fellowships (HHMI, Google, Microsoft, Apple PhD Fellowships for enrolled scholars)"
    ],
    governmentScholarships: [
      {
        name: "Fulbright Foreign Student Program",
        url: "https://foreign.fulbrightonline.org/",
        description: "The flagship international educational exchange program sponsored by the U.S. government.",
        coverage: "Full tuition, monthly living stipend, health insurance (ASPE), round-trip airfare, and visa sponsorship (J-1).",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Most R1 doctoral institutions (MIT, Stanford, Michigan, UIUC, Texas, Georgia Tech) guarantee 4–5 years of full funding to 100% of admitted PhD candidates.",
    phdFundingModel: "Standard Full-Ride Package: 100% Tuition Remission + Health Insurance Subsidy + Monthly Living Stipend ($2,400–$3,800/month) for 9 to 12 months per year.",
    mastersFundingModel: "Most coursework Master's degrees are self-funded ($40,000–$70,000/year). However, research-thesis Master's degrees in STEM frequently offer partial or full Graduate Teaching Assistantships (GTA).",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Standard assistantships require 20 hours per week of service (the legal maximum under F-1 visa regulations during academic semesters).",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes: "US PhD admissions are predominantly centralized by departmental graduate committees. Prior supervisor agreement is rarely binding; students often complete laboratory rotations in Year 1 before choosing a permanent PI.",
    languageRequirements: "Rigorous standards: TOEFL iBT 90–105 (crucially, Speaking subscore of 26+ is required by many universities for GTA teaching eligibility) or IELTS 7.0–7.5.",
    typicalApplicationDeadlines: "Fall Intake: Priority PhD deadlines are December 1, December 15, or January 1. CGS April 15 Resolution governs final offer acceptance.",
    importantLimitations: [
      "Application fees ($75–$150 per university) add up quickly; apply for departmental fee waivers early.",
      "Fulbright scholars travel on J-1 visas with a strict 2-year home-country physical presence requirement (Section 212(e)).",
      "9-month stipends mean you must secure summer research funding or internship income to bridge June–August."
    ],
    officialPortals: [
      { name: "EducationUSA Official Portal", url: "https://educationusa.state.gov/", description: "U.S. Department of State network of over 430 international student advising centers." },
      { name: "Fulbright Foreign Student Program", url: "https://foreign.fulbrightonline.org/", description: "Official application guidelines and participating country binational commissions." },
      { name: "CGS April 15 Resolution", url: "https://cgsnet.org/resources/for-students/cgs-april-15-resolution/", description: "Official resolution protecting student rights regarding funding offer decision deadlines." }
    ],
    applicationSequence: [
      "Identify 10–12 target US institutions balanced across Reach, Match, and Safety tiers in July/August.",
      "Take IELTS/TOEFL and GRE (if mandated by target departments) by September/October.",
      "Request 3 academic recommendation letters and write tailored Statements of Purpose by November.",
      "Submit online applications via university portals (Slate/ApplyWeb) before December 1/15 deadlines.",
      "Participate in virtual committee interviews in January/February; compare funding letters by April 15."
    ]
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    headline: "Guaranteed Departmental Minimum Funding Packages + Vanier CGS ($50,000/year)",
    summary: "Canada's top research universities (Toronto, UBC, McGill, Waterloo, Alberta, Montreal) provide guaranteed multi-year minimum funding packages for research Master's (MSc) and PhD students. Exceptional doctoral applicants can compete for the prestigious federal Vanier Canada Graduate Scholarship ($50,000/year).",
    fundingPhilosophy: "Institutional Minimum Funding Guarantees: departments establish binding baseline funding commitments covering tuition and basic living costs for research degree candidates.",
    commonFundingRoutes: [
      "Departmental Minimum Funding Package (GRA + GTA + internal fellowship totaling CAD $24,000–$35,000/year)",
      "Vanier Canada Graduate Scholarships (Vanier CGS - CAD $50,000/year for 3 years)",
      "Provincial Graduate Fellowships (e.g., Ontario Graduate Scholarship - OGS, CAD $15,000/year)",
      "Graduate Research Assistantships (GRA) from supervisor tri-agency grants (NSERC, CIHR, SSHRC)",
      "University President's and International Tuition Offset Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Vanier Canada Graduate Scholarships (Vanier CGS)",
        url: "https://vanier.gc.ca/en/home-accueil.html",
        description: "Canada's most prestigious doctoral award, honoring world-class academic excellence, research potential, and leadership.",
        coverage: "CAD $50,000 annually for three years during doctoral studies.",
        degreeLevel: "PhD Only"
      },
      {
        name: "Banting Postdoctoral & Research Fellowships",
        url: "https://banting.fellowships-bourses.gc.ca/en/home-accueil.html",
        description: "Premier awards for postdoctoral and senior advanced research talent.",
        coverage: "CAD $70,000/year for two years.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "U15 universities maintain published minimum funding policies. For example, the University of Toronto guarantees a minimum doctoral funding package of CAD $28,000–$34,000/year plus tuition coverage.",
    phdFundingModel: "PhDs are systematically funded for 4–5 years. Packages combine Graduate Research Assistantships (funded by the supervisor's research grant) and Graduate Teaching Assistantships (GTA union contract).",
    mastersFundingModel: "Unlike the US, thesis-based Master's (MSc/MA with thesis) in Canada are frequently funded through guaranteed minimum funding packages (CAD $18,000–$25,000/year). Coursework-only Master's are self-funded.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "GTA positions are governed by university labor unions (e.g., CUPE) and pay high hourly wages (CAD $45–$52/hour) for 100–140 hours per term.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "At most Canadian universities (especially Toronto, UBC, McGill, Alberta), you MUST find a supervisor who agrees in writing to accept and fund you before the department will evaluate your formal application.",
    languageRequirements: "IELTS Academic 6.5–7.0 (with no band below 6.0) or TOEFL iBT 90–100.",
    typicalApplicationDeadlines: "Vanier CGS institutional nominations: September–October. University admissions: December 1 to January 15 for Fall intake.",
    importantLimitations: [
      "Recent Canadian student visa caps do not apply to Master's and PhD programs, but provincial attestation letters (PAL) may require review.",
      "High cost of living and housing in Vancouver and Toronto; verify that the department funding package covers local rent.",
      "Course-based (non-thesis) professional Master's programs do not offer guaranteed funding."
    ],
    officialPortals: [
      { name: "EduCanada Official Portal", url: "https://www.educanada.ca/", description: "Government of Canada official portal for international scholarships and study permits." },
      { name: "Vanier CGS Portal", url: "https://vanier.gc.ca/en/home-accueil.html", description: "Official application and eligibility portal for Vanier Canada Graduate Scholarships." },
      { name: "IRCC (Immigration, Refugees and Citizenship Canada)", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html", description: "Official federal portal for Canadian Study Permits and Post-Graduation Work Permits (PGWP)." }
    ],
    applicationSequence: [
      "Identify prospective faculty supervisors across Canadian U15 universities in July/August.",
      "Send tailored academic inquiry emails with your CV and a brief thesis proposal.",
      "Once a professor agrees to sponsor your admission, submit formal university portal application before December/January.",
      "If nominated for Vanier CGS or OGS, prepare supporting leadership statements with your supervisor.",
      "Receive official Letter of Acceptance (LOA) and apply for the Canadian Study Permit via IRCC."
    ]
  },

  // ================= ASIA =================
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    region: "Asia",
    headline: "MEXT Monbukagakusho Government Scholarships + JSPS Doctoral Research Fellowships",
    summary: "Japan is a global leader in scientific innovation, engineering, and robotics. The Japanese Ministry of Education, Culture, Sports, Science and Technology (MEXT) awards one of the most generous international scholarships in the world, covering 100% tuition, monthly stipends, and round-trip airfare. JSPS research fellowships support doctoral candidates.",
    fundingPhilosophy: "Government-Sponsored Bilateral Scholarship Diplomacy: MEXT fully finances international graduate researchers to integrate into Japanese university laboratory systems.",
    commonFundingRoutes: [
      "MEXT Embassy Recommendation Scholarship (full ride: 100% tuition + flights + ¥144,000–¥145,000/month)",
      "MEXT University Recommendation Scholarship (direct university nomination pathway)",
      "JSPS (Japan Society for the Promotion of Science) Research Fellowships (DC1/DC2)",
      "University Presidential Scholarships (e.g., University of Tokyo, Kyoto University, Tokyo Tech)",
      "JASSO (Japan Student Services Organization) Honors Scholarships"
    ],
    governmentScholarships: [
      {
        name: "MEXT Monbukagakusho Scholarship (Research Students)",
        url: "https://www.studyinjapan.go.jp/en/planning/scholarship/mext-scholarships/",
        description: "The premier Japanese government scholarship for international graduate research students.",
        coverage: "100% university tuition fees, monthly living allowance of ¥144,000 (Master's) or ¥145,000 (PhD), round-trip flights, and language prep.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "JSPS Postdoctoral & Doctoral Fellowships",
        url: "https://www.jsps.go.jp/english/e-fellow/index.html",
        description: "Competitive fellowships for young researchers conducting collaborative research in Japanese labs.",
        coverage: "Monthly research grant of ¥200,000 + domestic travel and research grants-in-aid (Kakenhi).",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "National universities offer tuition exemptions (50% or 100% waiver) for self-funded students who perform well academically.",
    phdFundingModel: "PhDs are predominantly funded via MEXT scholarships, JSPS research fellowships, or professor research project appointments (Research Assistant / RA).",
    mastersFundingModel: "Fully funded Master's studies are widely available through MEXT (both Embassy and University tracks). Self-funded tuition at national universities is standardized and relatively modest (~¥535,800/year).",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Teaching Assistant (TA) and Research Assistant (RA) positions in university laboratories provide supplementary hourly stipends (~¥1,200–¥1,800/hour).",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "For both MEXT and direct admissions, obtaining an informal Letter of Acceptance (Naidaku) from a prospective Japanese professor is an essential milestone.",
    languageRequirements: "Top national universities offer English-medium graduate programs (Global 30 network): IELTS 6.5+ or TOEFL 85–90. Japanese language (JLPT) is not required for English tracks.",
    typicalApplicationDeadlines: "MEXT Embassy Track: Applications open April/May at local Japanese embassies. MEXT University Track: Applications open October–December.",
    importantLimitations: [
      "The MEXT Embassy application process spans nearly a full year from initial exam to departure.",
      "Cultural hierarchy within laboratory research groups (Kōza system) requires respectful, formal communication.",
      "MEXT recipients often spend the first 6 months as a non-degree 'Research Student' before passing the formal Master's/PhD entrance exam."
    ],
    officialPortals: [
      { name: "Study in Japan (JASSO)", url: "https://www.studyinjapan.go.jp/en/", description: "Comprehensive official information portal for studying in Japan and scholarship directories." },
      { name: "MEXT Ministry Portal", url: "https://www.mext.go.jp/en/", description: "Official Japanese Ministry of Education, Culture, Sports, Science and Technology." },
      { name: "JSPS (Japan Society for the Promotion of Science)", url: "https://www.jsps.go.jp/english/", description: "Japan's core agency for scientific research funding and researcher fellowships." }
    ],
    applicationSequence: [
      "Choose pathway: Embassy Recommendation (apply via your local Japanese Embassy in April) OR University Recommendation (apply directly to university in October).",
      "Pass document screening and preliminary interview at the Japanese embassy (Embassy track).",
      "Contact Japanese university professors with your embassy passing certificate to secure an official Letter of Acceptance.",
      "Submit final placement preferences to MEXT; receive formal scholarship award notification in January/February.",
      "Embassy issues visa and provides official economy flight tickets to Japan for October or April intake."
    ]
  },
  {
    id: "south-korea",
    name: "South Korea",
    code: "KR",
    flag: "🇰🇷",
    region: "Asia",
    headline: "Global Korea Scholarship (GKS Full-Ride) + BK21 Government Lab Research Stipends",
    summary: "South Korea has emerged as an intellectual powerhouse with elite institutions like KAIST, Seoul National University, and POSTECH. The Korean government's flagship Global Korea Scholarship (GKS) provides 100% tuition, living stipends, and airfare. In STEM fields, the national Brain Korea 21 (BK21) initiative funds graduate researchers directly in academic labs.",
    fundingPhilosophy: "National Strategic R&D Drive: government GKS scholarships attract global talent, while the multi-billion-dollar BK21 fund directly subsidizes STEM lab personnel.",
    commonFundingRoutes: [
      "Global Korea Scholarship (GKS - 100% full tuition + ₩1,000,000–₩1,300,000/month stipend + flights)",
      "BK21 (Brain Korea 21) Four Lab Research Stipends (minimum ₩1,000,000/mo for Master's, ₩1,600,000/mo for PhD)",
      "KAIST, UNIST, DGIST, and GIST Institutional Full Fellowships (tuition waiver + lab stipend for all admitted)",
      "University Presidential Fellowships (Seoul National University SNU Global Scholarship)",
      "POSCO TJ Park Foundation Asian Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Global Korea Scholarship (GKS Graduate)",
        url: "https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do",
        description: "National Institute for International Education (NIIED) flagship full-ride scholarship program.",
        coverage: "Full tuition, ₩1,000,000–₩1,300,000/month living stipend, round-trip flights, settlement allowance, medical insurance, and 1-year Korean language training.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Specialized STEM universities (KAIST, GIST, UNIST) automatically waive tuition and provide living stipends for all accepted international graduate scholars.",
    phdFundingModel: "PhD students in science and engineering are funded through BK21 project funds and national research grants managed by their laboratory professor (Professor-funded RA).",
    mastersFundingModel: "GKS provides full funding for Master's candidates. In STEM labs, professors routinely provide full tuition waivers and monthly stipends from university research grants.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Lab Research Assistantships (RA) are the standard mechanism of graduate study in Korean STEM departments.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "For STEM admissions (especially KAIST, SNU, POSTECH), securing an agreement from a lab professor to cover your tuition and stipend is virtually mandatory before formal application.",
    languageRequirements: "English-track programs require IELTS 6.0–6.5 or TOEFL iBT 80–90. GKS includes one year of mandatory Korean language training prior to degree study.",
    typicalApplicationDeadlines: "GKS Graduate Embassy Track: February–March. GKS University Track: February–April. Fall university intake: February–April.",
    importantLimitations: [
      "GKS requires a mandatory 1-year Korean language training program in Korea unless you already hold TOPIK Level 5 or 6.",
      "Korean STEM lab culture entails long working hours and intense publication expectations.",
      "Apostille or Korean consular legalization is mandatory for all undergraduate degree certificates and transcripts."
    ],
    officialPortals: [
      { name: "Study in Korea (NIIED)", url: "https://www.studyinkorea.go.kr/", description: "The official Korean government portal for international students and GKS application notices." },
      { name: "National Research Foundation of Korea (NRF)", url: "https://www.nrf.re.kr/eng/index", description: "Korea's leading agency for national academic research grants and BK21 funding." }
    ],
    applicationSequence: [
      "Choose GKS route: Embassy Track (apply through Korean Embassy in your home country) or University Track (apply directly to a Korean university) in February.",
      "Submit legalized transcripts, recommendation letters, personal statement, and medical report.",
      "For STEM: Contact prospective lab professors at KAIST, SNU, or POSTECH to secure research supervisor backing.",
      "Pass NIIED review and receive official GKS selection certificate in June.",
      "Arrive in Korea in late August for the mandatory Korean language program or direct degree enrollment."
    ]
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    region: "Asia",
    headline: "Chinese Government Scholarship (CSC Full-Ride) + Belt and Road & CAS-TWAS Fellowships",
    summary: "China has invested heavily in higher education under Project Double First-Class, elevating universities like Tsinghua, Peking, Fudan, and Zhejiang to top global rankings. The Chinese Government Scholarship (CSC) provides full tuition, free university dormitories, health insurance, and monthly living stipends up to 3,500 RMB/month.",
    fundingPhilosophy: "Massive State Higher Education Investment: national CSC and presidential scholarships provide comprehensive full-ride coverage to recruit global STEM researchers.",
    commonFundingRoutes: [
      "Chinese Government Scholarship (CSC / Bilateral & University Program - 100% full ride + monthly stipend)",
      "ANSO Scholarship for International Students (Alliance of National and International Science Organizations / CAS)",
      "Provincial & Municipal Government Scholarships (e.g., Shanghai Government Scholarship, Beijing Government)",
      "University Presidential Excellence Scholarships (Tsinghua, Peking, Fudan, Zhejiang)",
      "Silk Road & Belt and Road Scholarships"
    ],
    governmentScholarships: [
      {
        name: "Chinese Government Scholarship (CSC - Type A & Type B)",
        url: "https://www.campuschina.org/",
        description: "Administered by the China Scholarship Council under the Ministry of Education for international postgraduates.",
        coverage: "100% tuition waiver, free university accommodation, comprehensive medical insurance, and monthly stipend (Master's: 3,000 RMB; PhD: 3,500 RMB/month).",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "ANSO Scholarship for Young Talents",
        url: "http://www.anso.org.cn/",
        description: "Joint scholarship by CAS and international science academies for Master's and PhD training at USTC and UCAS.",
        coverage: "Full tuition waiver, health insurance, international travel subsidy, and monthly living allowance up to 7,000 RMB/month for PhD.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Top universities award independent university scholarships (e.g., Tsinghua University Tuition Scholarship) that match or exceed national CSC stipend rates.",
    phdFundingModel: "PhDs in China are routinely fully funded through CSC Type B (University Program), CAS-TWAS / ANSO fellowships, or professor research project funds.",
    mastersFundingModel: "Extensive fully funded opportunities exist for Master's candidates through the CSC University Program and provincial government awards.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "San-Zhu positions (Teaching Assistant, Research Assistant, Admin Assistant) provide supplemental monthly earnings (500–1,500 RMB/month).",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "Obtaining an official 'Pre-admission Letter' or 'Provisional Acceptance Letter' signed by a professor from a Chinese university exponentially increases your CSC selection probability.",
    languageRequirements: "Over 2,000 graduate programs are taught 100% in English: IELTS 6.0–6.5 or TOEFL 80–90. HSK (Chinese test) is only required for Chinese-taught programs.",
    typicalApplicationDeadlines: "CSC Type A (Embassy): January–March. CSC Type B (University): December–March. ANSO Scholarship: November–February.",
    importantLimitations: [
      "Medical physical examination form (Foreigner Physical Examination Form) with blood tests and ECG is mandatory for application.",
      "Non-criminal record certificate (police clearance) legalized by the Chinese Embassy is required.",
      "Competition for top tier-1 institutions (Tsinghua, Peking) is intensely competitive."
    ],
    officialPortals: [
      { name: "Campus China (CSC)", url: "https://www.campuschina.org/", description: "The official website of the China Scholarship Council for international applications." },
      { name: "ANSO Official Portal", url: "http://www.anso.org.cn/", description: "Alliance of National and International Science Organizations for scientific talent." }
    ],
    applicationSequence: [
      "Explore Double First-Class universities and English-taught programs on CampusChina.org.",
      "Contact faculty members to obtain an official Provisional Acceptance of International Student letter.",
      "Register on the CSC Online Application System (select Agency Number for your target university or embassy).",
      "Submit parallel application on the target university's international student portal.",
      "Receive official JW201/JW202 visa form and university admission notice to apply for the X1 student visa."
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    region: "Asia",
    headline: "SINGA Awards + NUS & NTU Research Scholarships (SGD 2,700–3,200/month)",
    summary: "Singapore is home to two of the world's highest-ranking universities: National University of Singapore (NUS) and Nanyang Technological University (NTU). Doctoral research is heavily funded through the Singapore International Graduate Award (SINGA) and university research scholarships, providing 100% tuition coverage and monthly living stipends of SGD 2,700 to SGD 3,200.",
    fundingPhilosophy: "Elite Technocratic Research Hub: targeted high-stipend investments to recruit premier scientific researchers into world top-20 university laboratories.",
    commonFundingRoutes: [
      "SINGA (Singapore International Graduate Award - A*STAR, NUS, NTU, SUTD)",
      "NUS Research Scholarship (100% tuition waiver + SGD 2,700–3,200/month stipend)",
      "NTU Research Scholarship (100% tuition waiver + SGD 2,700–3,200/month stipend)",
      "A*STAR Graduate Scholarship (AGS)",
      "President's Graduate Fellowship (PGF - top tier award with SGD 3,500/month stipend + travel allowance)"
    ],
    governmentScholarships: [
      {
        name: "Singapore International Graduate Award (SINGA)",
        url: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa",
        description: "A collaboration between A*STAR, NUS, NTU, SUTD, and SMU for international students pursuing PhDs in science and engineering.",
        coverage: "Full tuition coverage, monthly stipend of SGD 2,700 (increasing to SGD 3,200 after qualifying exam), one-time airfare grant (up to SGD 1,500), and settling-in allowance (SGD 1,000).",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships: "NUS and NTU award internal Research Scholarships automatically to top-ranked PhD applicants based purely on academic merit.",
    phdFundingModel: "Virtually all admitted PhD students in science, computing, and engineering receive full funding packages covering 100% tuition and providing monthly stipends.",
    mastersFundingModel: "Master's by Research degrees offer limited Research Scholarships. Master's by Coursework degrees are predominantly self-funded (SGD 35,000–55,000/year) unless subsidized under service bonds.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Graduate Teaching Assistant (GAP) hours are required as part of doctoral training, contributing to pedagogy development.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes: "For SINGA applications, reviewing A*STAR and university researcher supervisor profiles and listing prospective supervisors in your application is vital.",
    languageRequirements: "English is the official language of instruction in Singapore. IELTS 6.5–7.0 or TOEFL 85–100 is standard. GRE is frequently recommended or required by NUS/NTU departments.",
    typicalApplicationDeadlines: "SINGA August Intake: Closes December 1 of the preceding year. SINGA January Intake: Closes June 1. Direct NUS/NTU PhD: November–January.",
    importantLimitations: [
      "Singapore has high rental accommodation costs; university graduate hall placement is priority for Year 1 scholars.",
      "Admission standards for NUS and NTU are exceptionally competitive (often requiring first-class honors or top 5% class ranking).",
      "Singapore Ministry of Education (MOE) tuition grants for certain Master's programs carry a mandatory 3-year service obligation in Singapore."
    ],
    officialPortals: [
      { name: "A*STAR SINGA Portal", url: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa", description: "Official application and information page for the Singapore International Graduate Award." },
      { name: "NUS Graduate School", url: "https://nusgs.nus.edu.sg/", description: "Official graduate admissions and research scholarship portal of the National University of Singapore." },
      { name: "NTU Graduate College", url: "https://www.ntu.edu.sg/graduate-college", description: "Official portal for Nanyang Technological University research scholarships." }
    ],
    applicationSequence: [
      "Browse research project areas across A*STAR research institutes, NUS, NTU, and SUTD.",
      "Submit application directly on the official A*STAR SINGA application portal before December 1 (for August intake).",
      "Ensure two academic recommendation letters are submitted through the automated referee portal.",
      "Shortlisted candidates attend a rigorous virtual interview with an A*STAR / university faculty panel.",
      "Receive official award letter, accept seat, and complete Student's Pass (STP) application with the Singapore ICA."
    ]
  },

  // ================= OCEANIA =================
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    region: "Oceania",
    headline: "Research Training Program (RTP Full-Ride) + Australia Awards (AUD $32,000–$40,000/year)",
    summary: "Australia's prestigious Group of Eight (Go8) universities (Melbourne, ANU, Sydney, UNSW, Queensland, Monash, Adelaide, Western Australia) offer premier research environments. International research students are funded via the Australian Government Research Training Program (RTP), which waives 100% of international tuition and provides tax-free annual living stipends of AUD $32,000 to $40,000+.",
    fundingPhilosophy: "Government Research Training Program (RTP) Framework: federal block grants support domestic and international postgraduate research candidates with tax-free stipends.",
    commonFundingRoutes: [
      "Australian Government Research Training Program (RTP International Stipend + Fee Offset)",
      "University International Postgraduate Research Scholarships (UIPRS / Melbourne Research Scholarship)",
      "Australia Awards Scholarships (DFAT government bilateral program for development)",
      "CSIRO (Commonwealth Scientific and Industrial Research Organisation) Postgraduate Scholarships",
      "Faculty Project-Specific Research Grants (ARC / NHMRC grants)"
    ],
    governmentScholarships: [
      {
        name: "Australian Government Research Training Program (RTP)",
        url: "https://www.education.gov.au/research-block-grants/research-training-program",
        description: "Administered directly by individual Australian universities on behalf of the Department of Education.",
        coverage: "100% International Tuition Fee Offset + tax-free fortnightly living stipend (AUD $32,000–$40,000/year) + Overseas Student Health Cover (OSHC).",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Australia Awards Scholarships",
        url: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships",
        description: "Department of Foreign Affairs and Trade (DFAT) bilateral awards for emerging leaders from partner developing nations.",
        coverage: "Full tuition, return air travel, establishment allowance, contribution to living expenses (CLE), and OSHC.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Go8 universities maintain massive internal scholarship pools (e.g., Melbourne Graduate Research Scholarships, Sydney International Research Scholarship) that mirror RTP terms.",
    phdFundingModel: "PhDs (Doctor of Philosophy by Research) are systematically funded through RTP or university research scholarships covering international fees and providing a tax-free stipend.",
    mastersFundingModel: "Master's by Research degrees are eligible for RTP fee offsets and living stipends. Master's by Coursework degrees are predominantly self-funded (AUD $38,000–$55,000/year) unless funded via Australia Awards.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "Casual academic sessional teaching (tutoring, lab demonstrating, exam marking) is widely available, paying high hourly rates (AUD $50–$65/hour).",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "Australian universities strictly mandate obtaining formal written expression of support from an accredited prospective supervisor before submitting an admission application.",
    languageRequirements: "Strict university and Department of Home Affairs visa rules: IELTS Academic 6.5–7.0 (no band below 6.0) or TOEFL iBT 85–96.",
    typicalApplicationDeadlines: "Major international scholarship rounds: Round 1 closes August 31 (for start early next year); Round 2 closes February/March. Australia Awards: Closes April 30.",
    importantLimitations: [
      "Australian student visa (Subclass 500) financial capacity requirements have increased; genuine student (GS) criteria are strictly enforced.",
      "High rental accommodation costs in Sydney and Melbourne; confirm your stipend covers living costs.",
      "Application without prior supervisor agreement will be rejected administratively."
    ],
    officialPortals: [
      { name: "Study Australia Official Portal", url: "https://www.studyaustralia.gov.au/", description: "Australian Government's official website for international students." },
      { name: "Department of Education RTP Guidelines", url: "https://www.education.gov.au/research-block-grants/research-training-program", description: "Official federal guidelines governing the Research Training Program." },
      { name: "Australia Awards (DFAT)", url: "https://www.dfat.gov.au/people-to-people/australia-awards", description: "Official portal for Australian government international development scholarships." }
    ],
    applicationSequence: [
      "Identify prospective academic supervisors at Go8 and leading Australian universities in May/June.",
      "Submit an Expression of Interest (EOI) with your CV and a 2–3 page research proposal.",
      "Once an approved supervisor provides formal written agreement to supervise, submit the formal university application.",
      "Tick the box applying for 'Australian Government RTP and University Research Scholarships' on the unified form.",
      "Receive Confirmation of Enrolment (CoE) and apply for the Australian Student Visa (Subclass 500)."
    ]
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    region: "Oceania",
    headline: "Domestic Tuition Fee Policy for All PhDs (NZD ~7,000/year) + Full Doctoral Scholarships",
    summary: "New Zealand has a unique policy: all international PhD students pay the exact same low domestic tuition fees as New Zealand citizens (approx. NZD $7,000–$9,000/year). Furthermore, all 8 universities offer generous University Doctoral Scholarships paying full domestic tuition plus living stipends of NZD $30,000–$35,000/year.",
    fundingPhilosophy: "Equal International Doctoral Treatment: international PhD candidates pay domestic tuition rates and have unlimited full-time work rights and spousal work visas.",
    commonFundingRoutes: [
      "University Doctoral Scholarships (e.g., Auckland, Otago, Victoria Wellington: full tuition + NZD $30,000–$35,000/year tax-free stipend)",
      "Domestic Tuition Fee Rate Guarantee for ALL International PhD Candidates",
      "Manaaki New Zealand Scholarships (Ministry of Foreign Affairs and Trade - MFAT)",
      "Crown Research Institute (CRI) Project Grants (AgResearch, ESR, GNS Science, Scion)",
      "Faculty Project Grants (Marsden Fund / MBIE Endeavour Fund)"
    ],
    governmentScholarships: [
      {
        name: "Manaaki New Zealand Scholarships",
        url: "https://www.manaakinzscholarships.govt.nz/",
        description: "Funded by the New Zealand Government for postgraduates from eligible developing partner countries.",
        coverage: "Full tuition fees, living allowance of NZD $531/week, establishment allowance, medical insurance, and return flights.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships: "Every New Zealand university (University of Auckland, University of Otago, Victoria University of Wellington, Canterbury) awards guaranteed doctoral scholarships to applicants achieving first-class GPA equivalents.",
    phdFundingModel: "If awarded a University Doctoral Scholarship: 100% tuition coverage + NZD $30,000–$35,000 annual tax-free stipend. Even if self-funding, tuition is only ~NZD $7,500/year (domestic rate).",
    mastersFundingModel: "Master's programs charge international tuition (NZD $32,000–$45,000/year) unless funded through Manaaki New Zealand Scholarships or internal university master's awards.",
    assistantshipsAvailable: true,
    assistantshipsDetail: "International PhD students in New Zealand hold unlimited work rights on their student visa, allowing flexible paid tutoring and research assistant work.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes: "You MUST contact a prospective academic supervisor and obtain formal preliminary approval of your research proposal before the university will consider your doctoral application.",
    languageRequirements: "Strict English standards: IELTS Academic 6.5 (no sub-band below 6.0) or TOEFL iBT 90.",
    typicalApplicationDeadlines: "University Doctoral Scholarship rounds typically close: March 1, July 15, and November 1. Manaaki NZ Scholarships close in February.",
    importantLimitations: [
      "Master's degrees do not benefit from the domestic fee policy and require substantial funding.",
      "New Zealand has high living costs in Auckland and Wellington.",
      "Preliminary supervisor review can take 4–8 weeks; reach out well in advance of scholarship rounds."
    ],
    officialPortals: [
      { name: "Study with New Zealand", url: "https://www.studywithnewzealand.govt.nz/", description: "The official government website for international students in New Zealand." },
      { name: "Manaaki New Zealand Scholarships", url: "https://www.manaakinzscholarships.govt.nz/", description: "Official MFAT portal for New Zealand Government international scholarships." },
      { name: "Immigration New Zealand (Student Visa)", url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/fee-paying-student-visa", description: "Official visa information for doctoral and master's students." }
    ],
    applicationSequence: [
      "Review faculty research directories at New Zealand universities (Auckland, Otago, VUW, Canterbury).",
      "Contact a prospective supervisor with your academic CV, transcripts, and 2-page research proposal.",
      "Upon securing supervisor support, submit your formal application through the university admissions portal.",
      "Select consideration for the University Doctoral Scholarship during application submission.",
      "Receive official Offer of Place and Scholarship Award; apply for New Zealand Student Visa."
    ]
  }
];

export const countryGuidesControlsData = {
  header: {
    badge: "20 Destination Dossiers",
    title: "Country Funding Guides",
    subtitle:
      "Explore tuition policies, statutory PhD salaries, government awards, and supervisor rules across 20 global destinations."
  },
  regions: ["All", "Europe", "North America", "Asia", "Oceania"],
  supervisorFilters: [
    { label: "All Supervisor Rules", value: "All" },
    { label: "Mandatory Before Applying", value: "Strictly Required Before Application" },
    { label: "Recommended", value: "Recommended" },
    { label: "Centralized / Not Required", value: "Centralized / Not Required" }
  ],
  searchPlaceholder: "Search by country, scholarship (e.g. DAAD, MEXT, Fulbright)...",
  actions: {
    expandAll: "Expand All",
    collapseAll: "Collapse All"
  },
  cardLabels: {
    routes: "Common Funding Routes",
    govScholarships: "Government Scholarships",
    phdModel: "PhD Funding Model",
    mastersModel: "Master's Funding Model",
    supervisor: "Supervisor Requirement",
    language: "Language Requirements",
    deadlines: "Typical Application Deadlines",
    limitations: "Important Warnings & Limitations",
    sequence: "Application Sequence",
    officialPortals: "Official Portals & Resources"
  }
};

export const getCountryById = (id: string): CountryGuide | undefined => {
  return countryGuidesData.find((country) => country.id.toLowerCase() === id.toLowerCase());
};

export const getCountriesByRegion = (region: "Europe" | "North America" | "Asia" | "Oceania"): CountryGuide[] => {
  return countryGuidesData.filter((country) => country.region === region);
};

