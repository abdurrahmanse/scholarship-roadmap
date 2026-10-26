export interface DocumentGuideline {
  id: string;
  name: string;
  badge: string;
  degreeLevel: "Universal" | "Master's Heavy" | "PhD / Research Master's";
  what: string;
  why: string;
  structure: { section: string; guidance: string }[];
  commonMistakes: string[];
  officialChecks: string[];
  checklistItems: { id: string; label: string; tip?: string }[];
}

export const documentsData: DocumentGuideline[] = [
  {
    id: "academic-cv",
    name: "Academic Curriculum Vitae (CV)",
    badge: "Universal Requirement",
    degreeLevel: "Universal",
    what: "A comprehensive, 2-page document chronicling your complete scholarly and academic trajectory: educational qualifications, research interests, publications, laboratory experience, technical methodologies, teaching/mentoring, academic awards, and referee contacts.",
    why: "Unlike a 1-page corporate resume designed for HR resume-parsers, an Academic CV is reviewed by professors and researchers who want to see the technical depth of your research projects, methodologies, software/lab tools, and scholarly outputs.",
    structure: [
      {
        section: "1. Header & Contact Information",
        guidance: "Full legal name, professional email (preferably institutional), telephone with country code, LinkedIn, Google Scholar profile, and GitHub/ORCID link. No photos, date of birth, marital status, or nationality unless explicitly requested."
      },
      {
        section: "2. Education & Academic Credentials",
        guidance: "Degrees listed in reverse chronological order: Degree title, Major/Discipline, Institution name, City/Country, Graduation year (or expected), Cumulative GPA with grading scale, and Thesis title with primary supervisor name."
      },
      {
        section: "3. Research Interests & Publications",
        guidance: "3–5 precise sub-disciplinary research keywords. Complete bibliographic citations for peer-reviewed journal papers, conference proceedings, preprints (with arXiv DOI), or technical reports using standard APA or IEEE format."
      },
      {
        section: "4. Research & Laboratory Experience",
        guidance: "Positions as Research Assistant, Undergraduate Researcher, or Capstone Scholar. Detail your specific theoretical and methodological contributions, data collection techniques, tools, and quantifiable outcomes."
      },
      {
        section: "5. Technical, Laboratory & Language Proficiencies",
        guidance: "Programming languages, scientific software (MATLAB, R, PyTorch, LaTeX), laboratory instrumentation, statistical methods, and spoken language proficiencies with official CEFR/IELTS levels."
      },
      {
        section: "6. Honors, Awards & Academic Referees",
        guidance: "Merit scholarships, dean's list honors, competitive hackathon/case-study awards. Conclude with names, titles, institutional affiliations, and official email addresses of 3 academic referees."
      }
    ],
    commonMistakes: [
      "Using a 1-page business resume highlighting sales, customer service, or high school extracurriculars instead of academic research.",
      "Including personal photos, age, religion, or home address (which violates anti-discrimination standards in the US, UK, and Canada).",
      "Listing generic buzzwords ('detail-oriented', 'fast learner') without evidence of concrete research methodologies.",
      "Using complex multi-column graphic design templates that break when processed through university application portals."
    ],
    officialChecks: [
      "Keep within 2 pages for Master's and early-career PhD applicants (3 pages max if you have multiple first-author publications).",
      "Export as a clean, text-searchable PDF titled 'CV_FirstName_LastName.pdf'.",
      "Verify that all hyperlinks (Google Scholar, GitHub, paper DOIs) are active and clickable."
    ],
    checklistItems: [
      { id: "doc-cv-1", label: "Structured in reverse chronological order with clear institutional details", tip: "Check that graduation dates match official transcripts." },
      { id: "doc-cv-2", label: "Detailed research experience highlights specific methodology and tools", tip: "Avoid vague descriptions; mention exact algorithms or equipment used." },
      { id: "doc-cv-3", label: "Listed full citations and active links/DOIs for all publications or preprints", tip: "Even in-preparation papers should be clearly designated." },
      { id: "doc-cv-4", label: "Removed all personal photos, age, marital status, and non-academic jobs", tip: "Keep focus strictly on scholarly and technical merit." }
    ]
  },
  {
    id: "statement-of-purpose",
    name: "Statement of Purpose (SOP)",
    badge: "Core Deciding Factor",
    degreeLevel: "Universal",
    what: "A focused, 800–1,200 word academic essay articulating your research trajectory, theoretical foundation, methodological capabilities, specific reasons for selecting this university and department, and realistic post-graduation academic/professional goals.",
    why: "The Statement of Purpose is the most heavily scrutinized qualitative document in your application. It proves to the committee that you understand the academic discipline, can articulate a scholarly gap, and possess the maturity to succeed in rigorous graduate training.",
    structure: [
      {
        section: "Movement 1: Intellectual Foundation & Research Focus (Paragraph 1)",
        guidance: "Open immediately with your core research domain, the scientific problem you investigate, and your academic trajectory. Do NOT open with childhood anecdotes ('Ever since I was a child...'). State your proposed graduate concentration clearly."
      },
      {
        section: "Movement 2: Past Research & Methodological Mastery (Paragraphs 2–3)",
        guidance: "Detail 1–2 substantial academic projects or thesis research. Explain the research hypothesis, the methodology you engineered (experimental design, data models, instruments), key findings, and what this taught you about independent inquiry."
      },
      {
        section: "Movement 3: The Intellectual Gap & Future Inquiries (Paragraph 4)",
        guidance: "Identify the current bottleneck or unresolved question in the scientific literature that motivates your graduate study. Explain what theoretical frameworks you wish to master."
      },
      {
        section: "Movement 4: Program & Faculty Customization (Paragraph 5)",
        guidance: "Demonstrate intimate familiarity with the target university: name 2–3 specific faculty members whose recent research connects with your goals, specific research centers, lab equipment, or unique specialized curriculum offerings."
      },
      {
        section: "Movement 5: Career Trajectory & Long-Term Vision (Paragraph 6)",
        guidance: "Conclude with your realistic post-graduation trajectory (e.g., academic tenure-track research, national laboratory scientist, industrial R&D leader). Reiterate your readiness to contribute actively to the department's academic community."
      }
    ],
    commonMistakes: [
      "Writing a chronological personal autobiography rather than an academic research statement.",
      "Using hyperbolic or flattery-heavy language ('Your world-famous, prestigious university...') without naming specific faculty or labs.",
      "Copy-pasting an SOP across different universities and accidentally leaving another institution's name in the text.",
      "Relying on generic AI-generated prose devoid of concrete metrics, specific project names, and technical depth."
    ],
    officialChecks: [
      "Strictly respect the program's posted word or page limit (usually 2 pages, single-spaced, 11-12pt font).",
      "Check whether the program requires a separate 'Personal History Statement' addressing adversity or diversity."
    ],
    checklistItems: [
      { id: "doc-sop-1", label: "Eliminated childhood stories and clichés from the opening paragraph", tip: "Start directly with your technical or scholarly research focus." },
      { id: "doc-sop-2", label: "Dedicated at least 40% of the essay to concrete past research methodology", tip: "Quantify metrics, datasets, or theoretical frameworks." },
      { id: "doc-sop-3", label: "Named 2–3 specific faculty members and explained exact research alignment", tip: "Cite their recent 2024–2026 papers." },
      { id: "doc-sop-4", label: "Proofread thoroughly by at least two academic mentors or peers", tip: "Ensure zero spelling, grammatical, or institutional name errors." }
    ]
  },
  {
    id: "motivation-letter",
    name: "Motivation Letter",
    badge: "European Master's Standard",
    degreeLevel: "Master's Heavy",
    what: "A 1–2 page formal letter—frequently required by European universities, DAAD, and Erasmus Mundus programs—explaining your personal motivation for pursuing the specific degree, how your educational background qualifies you, and how the program aligns with your career plans.",
    why: "While a North American SOP is intensely focused on scientific research methodology, a European Motivation Letter balances academic qualifications with personal drive, adaptability, cultural exchange potential, and professional career goals.",
    structure: [
      {
        section: "1. Formal Letter Header",
        guidance: "Your contact details, date, formal address of the admissions committee / selection panel, and clear subject line (e.g., 'Application for Master of Science in Renewable Energy Systems - Intake 2026')."
      },
      {
        section: "2. Academic Suitability & Prerequisite Match",
        guidance: "Detail how your bachelor's degree coursework directly satisfies the specific program modules and prerequisites."
      },
      {
        section: "3. Program-Specific Attraction",
        guidance: "Explain why this exact university and curriculum (e.g., interdisciplinary structure, international cohort, mandatory internship semester) fit your learning objectives better than alternatives."
      },
      {
        section: "4. Professional & Societal Impact",
        guidance: "For scholarship bodies (like DAAD EPOS or Swedish Institute), demonstrate how completing this program will enable you to solve tangible challenges in your home country or industry upon graduation."
      }
    ],
    commonMistakes: [
      "Confusing a Motivation Letter with a cover letter for a retail job.",
      "Failing to address the specific selection criteria published in the official scholarship call.",
      "Writing exclusively about how wonderful the host country is for tourism rather than academic excellence."
    ],
    officialChecks: [
      "Keep to 1–2 pages maximum (500–800 words unless specified).",
      "Include formal sign-off ('Yours sincerely, [Your Name]')."
    ],
    checklistItems: [
      { id: "doc-mot-1", label: "Followed formal business/academic letter formatting with full headers", tip: "Address the specific selection committee by official title." },
      { id: "doc-mot-2", label: "Linked specific curriculum modules directly to your past coursework", tip: "Demonstrate prerequisite mastery." },
      { id: "doc-mot-3", label: "Articulated tangible post-graduation professional impact in your home country/field", tip: "Crucial for government bilateral scholarships." }
    ]
  },
  {
    id: "research-proposal",
    name: "Research Proposal",
    badge: "Mandatory for PhD & MPhil",
    degreeLevel: "PhD / Research Master's",
    what: "A structured, 3–6 page academic document defining an original research project you propose to investigate during your doctoral studies: problem statement, literature review, theoretical framework, research questions/hypotheses, methodology, expected contributions, timeline, and academic bibliography.",
    why: "The research proposal demonstrates to prospective supervisors and scholarship panels that you can independently conceptualize a viable research project, formulate testable questions, and select appropriate scientific methodologies within a 3–4 year timeframe.",
    structure: [
      {
        section: "1. Title & Abstract",
        guidance: "Concise, descriptive title indicating the variables, context, and focus. 150–250 word abstract summarizing background, problem, methodology, and significance."
      },
      {
        section: "2. Background & Literature Review",
        guidance: "Synthesize key academic debates, establish the theoretical foundation, and identify the clear scholarly gap in current published literature."
      },
      {
        section: "3. Research Questions & Hypotheses",
        guidance: "Formulate 1 primary research question and 2–3 sub-questions or testable scientific hypotheses."
      },
      {
        section: "4. Research Methodology & Design",
        guidance: "Specify data collection methods, sampling criteria, instruments, experimental protocols, data analysis frameworks (e.g., qualitative thematic analysis, statistical regression, machine learning benchmarks), and ethical considerations."
      },
      {
        section: "5. Significance & Expected Contributions",
        guidance: "Articulate how your findings will advance theoretical knowledge, inform public policy, or create technological innovations."
      },
      {
        section: "6. Indicative 3–4 Year Timeline & Key References",
        guidance: "Yearly or quarterly milestone breakdown (Gantt chart). Comprehensive bibliography of 15–30 authoritative peer-reviewed academic papers formatted in APA or IEEE."
      }
    ],
    commonMistakes: [
      "Proposing an overly ambitious project that would take 15 years and $5 million to complete.",
      "Proposing a topic that has already been extensively resolved in published literature.",
      "Neglecting methodology; writing 4 pages of background and only 2 vague sentences on how you will collect and analyze data.",
      "Failing to align the proposal with the prospective supervisor's actual lab capabilities."
    ],
    officialChecks: [
      "Check whether target university has specific proposal formatting rules or word limits (e.g., 2,000 words maximum).",
      "Confirm whether your proposed project requires specialized ethical board approvals (IRB)."
    ],
    checklistItems: [
      { id: "doc-prop-1", label: "Formulated clear, focused, and testable research questions", tip: "Ensure questions are answerable within a 3–4 year doctoral timeline." },
      { id: "doc-prop-2", label: "Detailed specific research methodology, data sources, and analytical tools", tip: "The methodology section should comprise at least 30–40% of the proposal." },
      { id: "doc-prop-3", label: "Included realistic multi-year milestone schedule (Gantt chart)", tip: "Demonstrates practical feasibility to the committee." },
      { id: "doc-prop-4", label: "Formatted 15–30 academic references in consistent citation style", tip: "Cite papers from top-tier journals in the specific field." }
    ]
  },
  {
    id: "academic-transcripts",
    name: "Academic Transcripts & Grading Scales",
    badge: "Official Legal Record",
    degreeLevel: "Universal",
    what: "Complete, official academic records issued by your university registrar detailing every course taken, semester-by-semester grades, credit hours, cumulative GPA, and the official institutional grading scale legend.",
    why: "Admissions committees use transcripts to verify your degree completion, examine your grade progression over time (looking for upward trends), and verify that you meet foundational subject prerequisites.",
    structure: [
      {
        section: "Official Registrar Seal & Legend",
        guidance: "Ensure every transcript page carries the registrar's official stamp/seal and signature. Include the reverse side explaining the university's grading scale (e.g., A = 80–100%, First Class Division, ECTS equivalent)."
      },
      {
        section: "Certified English Translations",
        guidance: "If transcripts are in a language other than English, provide both the original language document and an official sworn/certified word-for-word translation."
      },
      {
        section: "Credential Evaluation (WES / ECE / Anabin)",
        guidance: "For US, Canadian, and European universities requiring third-party evaluation, order official WES Course-by-Course evaluation reports early."
      }
    ],
    commonMistakes: [
      "Uploading self-printed unofficial student portal screenshots instead of scanned official stamped transcripts.",
      "Cropping off the grading scale legend printed on the back of the transcript.",
      "Submitting an incomplete transcript missing the final semester grades or graduation confirmation."
    ],
    officialChecks: [
      "Scan in full-color, high-resolution (300 DPI) PDF.",
      "Keep original physical sealed paper envelopes intact for universities requiring post-admission postal verification."
    ],
    checklistItems: [
      { id: "doc-trans-1", label: "Scanned all semester transcripts in high-resolution full color", tip: "Ensure all stamps, signatures, and grade legends are 100% legible." },
      { id: "doc-trans-2", label: "Included official university grading scale conversion documentation", tip: "Necessary for committees to convert your marks to 4.0 or ECTS." },
      { id: "doc-trans-3", label: "Secured certified sworn English translations if originals are in another language", tip: "Must be performed by an accredited translator." }
    ]
  },
  {
    id: "degree-certificates",
    name: "Degree Certificates & Graduation Letters",
    badge: "Official Legal Record",
    degreeLevel: "Universal",
    what: "The formal diploma or degree conferral parchment verifying that your Bachelor's or Master's degree has been formally awarded, or an official 'Bonafide Certificate / Letter of Expected Graduation' if you are currently enrolled in your final year.",
    why: "Graduate schools cannot legally matriculate a student into a Master's or PhD program without documented proof of completion of the prior qualifying degree.",
    structure: [
      {
        section: "Conferral Parchment",
        guidance: "Displays full legal name, degree awarded (e.g., Bachelor of Science in Electrical Engineering), conferral date, and university governing seal."
      },
      {
        section: "Provisional Certificate / Expected Graduation Letter",
        guidance: "If your formal degree convocation has not yet occurred, submit an official provisional certificate issued by the registrar confirming you have fulfilled all degree requirements and specifying your expected graduation date."
      }
    ],
    commonMistakes: [
      "Waiting until after graduation to apply; final-year students can and should apply using an Expected Graduation Letter.",
      "Submitting degree certificates where your name spelling differs from your international passport."
    ],
    officialChecks: [
      "Verify that your name matches your passport letter-for-letter.",
      "Check whether your target country requires Hague Apostille or consular legalization."
    ],
    checklistItems: [
      { id: "doc-deg-1", label: "Obtained official degree certificate or university Expected Graduation Letter", tip: "Ensure university seal and registrar signature are clearly visible." },
      { id: "doc-deg-2", label: "Verified that legal name matches passport exactly", tip: "Resolve any name discrepancy affidavits in advance." }
    ]
  },
  {
    id: "recommendation-letters",
    name: "Letters of Recommendation (LORs)",
    badge: "Critical Qualitative Weight",
    degreeLevel: "Universal",
    what: "Three confidential letters written by academic professors or research supervisors who have directly taught, mentored, or supervised your scientific research work.",
    why: "Admissions committees rely heavily on LORs to assess your intellectual curiosity, research integrity, technical independence, and capability to overcome research setbacks from an external, senior academic perspective.",
    structure: [
      {
        section: "1. Institutional Letterhead & Context of Relationship",
        guidance: "Must be printed on official university letterhead with the professor's official email and telephone. Opening paragraph establishes how long and in what capacity the referee has known you (top X% of students taught)."
      },
      {
        section: "2. Concrete Evidence of Intellectual & Research Capability",
        guidance: "Details 2–3 specific instances of exceptional performance: your thesis defense, original experimental designs, mastery of complex technical tools, or co-authored research manuscripts."
      },
      {
        section: "3. Comparative Ranking & Unconditional Endorsement",
        guidance: "Explicit comparative assessment (e.g., 'In the top 2% of undergraduate researchers I have mentored over the past 15 years') and unconditional recommendation for graduate funding."
      }
    ],
    commonMistakes: [
      "Selecting high-profile referees (politicians, university presidents) who do not know your academic work and write generic letters.",
      "Providing personal email addresses (@gmail, @yahoo) for recommenders; universities mandate institutional domains (@university.edu).",
      "Approaching recommenders 3 days before the deadline, forcing rushed, low-quality submissions.",
      "Drafting letters yourself that sound identical in style across all 3 recommenders."
    ],
    officialChecks: [
      "Always waive your right to inspect the recommendation letter (FERPA in the US); waived confidential letters carry 10x more credibility.",
      "Provide recommenders with an LOR dossier packet: CV, SOP draft, program list, and deadline calendar."
    ],
    checklistItems: [
      { id: "doc-lor-1", label: "Secured commitments from 3 academic faculty who know your research work", tip: "At least two should be tenure-track faculty who taught you in upper-level courses." },
      { id: "doc-lor-2", label: "Provided recommenders with an LOR briefing packet at least 6 weeks in advance", tip: "Include your draft SOP, CV, and program deadline table." },
      { id: "doc-lor-3", label: "Waived right of inspection inside every university application portal", tip: "Signals to the committee that the appraisal is 100% candid and genuine." },
      { id: "doc-lor-4", label: "Confirmed all recommenders use official institutional email addresses", tip: "Prevents automatic portal fraud flags." }
    ]
  },
  {
    id: "language-proficiency",
    name: "Language Proficiency (IELTS / TOEFL / Duolingo / MOI)",
    badge: "Mandatory Eligibility Filter",
    degreeLevel: "Universal",
    what: "Standardized test score reports (IELTS Academic, TOEFL iBT, Duolingo English Test) or official Medium of Instruction (MOI) verification certificates documenting English language fluency.",
    why: "Universities and immigration embassies require proof that you can comprehend advanced graduate lectures, write academic papers, and communicate effectively in research environments. For Graduate Teaching Assistantships (GTA), speaking scores are strictly regulated by law.",
    structure: [
      {
        section: "IELTS Academic Test",
        guidance: "Widely accepted in UK, Europe, Australia, Canada, and USA. Benchmark: 6.5–7.5 overall with minimum 6.0–6.5 subscores."
      },
      {
        section: "TOEFL iBT Test",
        guidance: "Standard across US, Canada, and global universities. Benchmark: 90–105 overall. Crucially, aim for Speaking subscore of 26+ for US GTA funding."
      },
      {
        section: "Medium of Instruction (MOI) Certificate",
        guidance: "An official letter stamped by your undergraduate registrar stating your entire degree was delivered 100% in English. Accepted by select universities in Germany, Sweden, and Asia, but rarely accepted in the USA, UK, or Canada."
      }
    ],
    commonMistakes: [
      "Assuming an overall high IELTS score (e.g., 7.5) saves you when you received a 5.5 in Writing and the department has a strict 6.0 subscore minimum.",
      "Letting test scores expire (IELTS and TOEFL scores are valid for exactly 2 years from test date).",
      "Relying on an MOI certificate without checking if the target department explicitly mandates an official IELTS/TOEFL exam."
    ],
    officialChecks: [
      "Order official institutional score reports sent through ETS (using university DI codes) or IELTS TRF upload.",
      "Check expiration dates against the program's official start date."
    ],
    checklistItems: [
      { id: "doc-lang-1", label: "Achieved target overall and minimum sub-band scores across all 4 sections", tip: "Pay special attention to Speaking and Writing subscores." },
      { id: "doc-lang-2", label: "Verified test score validity extends through your intended matriculation date", tip: "Scores must be valid when enrollment begins." },
      { id: "doc-lang-3", label: "Dispatched official electronic score reports via ETS/IELTS institutional codes", tip: "Keep official test taker PDF report for portal uploads." }
    ]
  },
  {
    id: "standardized-tests-gre",
    name: "Standardized Tests (GRE General / Subject)",
    badge: "Selective Requirement",
    degreeLevel: "Universal",
    what: "Graduate Record Examination (GRE General) measuring Verbal Reasoning, Quantitative Reasoning, and Analytical Writing, or GRE Subject Tests in specific disciplines.",
    why: "While many graduate programs adopted 'GRE Optional' or 'GRE Waived' policies, a high Quantitative score (165–170 Q) can substantially strengthen an application for STEM/Economics programs, particularly when compensating for an undergraduate GPA from an unfamiliar international university.",
    structure: [
      {
        section: "Quantitative Reasoning (130–170)",
        guidance: "Target: 164–170 for STEM, Computer Science, Engineering, Economics, and Statistics."
      },
      {
        section: "Verbal Reasoning (130–170)",
        guidance: "Target: 155–162 for humanities and social sciences; 150+ for engineering."
      },
      {
        section: "Analytical Writing Assessment (0.0–6.0)",
        guidance: "Target: 4.0–5.0 demonstrating coherent analytical critique and academic structure."
      }
    ],
    commonMistakes: [
      "Spending 4 months studying for the GRE for European universities that do not require or accept it.",
      "Submitting an average GRE score to a 'test-optional' program where submitting it actually weakens your application."
    ],
    officialChecks: [
      "Carefully check department websites for: 'GRE Required' vs. 'GRE Optional' vs. 'GRE Blind / Not Accepted'.",
      "Do not take the GRE unless your target universities specifically value or mandate it."
    ],
    checklistItems: [
      { id: "doc-gre-1", label: "Verified whether any target programs mandate or strongly recommend the GRE", tip: "Do not sit for the exam if all your target programs are GRE-optional or European." },
      { id: "doc-gre-2", label: "Dispatched official ETS score reports using departmental institution codes", tip: "Ensure test name matches passport exactly." }
    ]
  },
  {
    id: "writing-samples-portfolio",
    name: "Writing Samples, Publications & Portfolio",
    badge: "Technical Demonstrator",
    degreeLevel: "PhD / Research Master's",
    what: "A sample of your best scholarly writing (undergraduate/master's thesis chapter, published paper, peer-reviewed preprint, or course seminar paper), or a technical research portfolio (GitHub repository, design dossier).",
    why: "Writing samples provide direct, unmediated evidence of your critical thinking, scientific writing style, argumentation rigor, and technical documentation abilities.",
    structure: [
      {
        section: "Scholarly Article or Thesis Chapter (10–25 pages)",
        guidance: "Clean PDF including title, abstract, introduction, methodology, results, discussion, and full bibliography. Single-authored or lead-author papers are preferred."
      },
      {
        section: "Co-Authored Publication Explanatory Note",
        guidance: "If submitting a co-authored published paper, attach a 1-page preface explicitly outlining your specific percentage contribution (e.g., 'Conducted 100% of data preprocessing, implemented baseline algorithms, and co-wrote sections 3 and 4')."
      }
    ],
    commonMistakes: [
      "Uploading an 80-page full undergraduate thesis when the department specified a 15-page maximum excerpt.",
      "Submitting co-authored work without clarifying your individual technical contributions."
    ],
    officialChecks: [
      "Ensure writing sample is clean, anonymized if requested, and within specified page limits.",
      "Check that GitHub repositories are public, documented with clean README files, and reproducible."
    ],
    checklistItems: [
      { id: "doc-ws-1", label: "Selected your strongest piece of scholarly or technical writing", tip: "Choose work where you were the primary or sole author." },
      { id: "doc-ws-2", label: "Formatted to respect department page and word length boundaries", tip: "Create an excerpt with a brief summary preface if necessary." },
      { id: "doc-ws-3", label: "Verified public access and clear README documentation on code repositories", tip: "Ensure code runs cleanly with installation instructions." }
    ]
  }
];

export const getDocumentById = (id: string): DocumentGuideline | undefined => {
  return documentsData.find((doc) => doc.id.toLowerCase() === id.toLowerCase());
};
