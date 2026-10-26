export interface OutreachStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailedProtocol: string;
}

export interface OutreachEmailBlueprint {
  id: string;
  type: "phd-cold-inquiry" | "masters-research-inquiry" | "polite-follow-up";
  name: string;
  targetAudience: string;
  subjectLines: string[];
  body: string;
  wordCount: string;
  recommendedAttachments: string[];
  tips: string[];
}

export interface SupervisorNecessityRule {
  country: string;
  degreeLevel: string;
  necessity: "Strictly Required Before Application" | "Recommended" | "Centralized / Not Required";
  rationale: string;
}

export const professorOutreachWorkflow: OutreachStep[] = [
  {
    stepNumber: 1,
    title: "Determine if Supervisor Outreach is Necessary",
    shortDesc: "Check whether your target degree mandates prior supervisor agreement or uses centralized committee admissions.",
    detailedProtocol: "Carefully review the target department's admissions page. In Canada, Australia, New Zealand, and for individual European PhDs, securing a professor's written agreement is legally mandatory before applying. In contrast, most US PhD programs operate through centralized graduate committee admissions with first-year lab rotations, making cold emails optional or even discouraged by some departments."
  },
  {
    stepNumber: 2,
    title: "Identify Active Faculty via Recent Publications",
    shortDesc: "Find actively publishing professors using Google Scholar, PubMed, Scopus, or OpenReview.",
    detailedProtocol: "Do not rely on university static faculty directories, which are often years out of date. Search Google Scholar or Scopus for professors who have published peer-reviewed papers in your specific research niche within the last 18–24 months. Focus on tenure-track Assistant Professors (who actively recruit and have fresh startup funding) and productive Associate/Full Professors."
  },
  {
    stepNumber: 3,
    title: "Read Selected Publications & Lab Grant Pages",
    shortDesc: "Deeply analyze 2 recent papers from the target professor's laboratory.",
    detailedProtocol: "Read the abstract, methodology, and conclusion of their 2 latest papers. Inspect the 'Acknowledgments' section at the end of their papers to identify their funding sources (e.g., NSF, NIH, ERC, DFG, NSERC grants). Visit their lab website to verify current lab members and check if they have posted an explicit 'Open Positions' or 'Join Us' notice."
  },
  {
    stepNumber: 4,
    title: "Evaluate Research Alignment with Your Background",
    shortDesc: "Confirm that your existing technical, methodological, or theoretical skills directly contribute to their active research.",
    detailedProtocol: "Ask yourself honestly: 'Can I hit the ground running in this lab?' If the professor works on computational fluid dynamics and your background is in qualitative marketing, a cold email will be ignored. Identify the specific overlap: your thesis, a machine learning framework, laboratory assay technique, or dataset mastery."
  },
  {
    stepNumber: 5,
    title: "Draft a Concise, Highly Customized 4-Paragraph Email",
    shortDesc: "Write a 150–220 word email tailored specifically to that individual professor.",
    detailedProtocol: "Follow the 4-paragraph formula: Paragraph 1: Intent (seeking Fall 2026 PhD/MSc thesis mentorship under their supervision). Paragraph 2: Academic fit (referencing their specific recent paper and connecting it to your research). Paragraph 3: Your proven technical deliverables (GPA, thesis, publications, specific methodology). Paragraph 4: Professional call-to-action (requesting a 15-minute introductory video meeting) + attached clean 2-page CV."
  },
  {
    stepNumber: 6,
    title: "Attach Your Academic CV as a Clean PDF",
    shortDesc: "Attach only a clean 2-page Academic CV named 'CV_FirstName_LastName.pdf'.",
    detailedProtocol: "Never attach large zip files, high school diplomas, recommendation letters, or unrequested 50-page manuscripts. Busy professors read emails on their smartphones; an unrequested 15MB attachment triggers spam filters and annoys faculty. If you have publications or code, include clean, active hyperlinks inside your CV."
  },
  {
    stepNumber: 7,
    title: "Send During Local Working Hours & Maintain Records",
    shortDesc: "Send Tuesday–Thursday morning between 8:00 AM and 10:00 AM in the professor's local time zone.",
    detailedProtocol: "Never send emails on Friday evening, over weekends, or on national holidays when your email will be buried under Monday morning inbox backlogs. Track your outreach in a personal notes document: Professor Name, University, Date Sent, Paper Cited, and Status."
  },
  {
    stepNumber: 8,
    title: "Execute Polite 7–10 Day Follow-Up Protocol",
    shortDesc: "Send a single, courteous follow-up on the same thread if no reply is received after 7–10 business days.",
    detailedProtocol: "Professors receive 100+ emails daily. If you do not hear back within 7–10 working days, reply to your original email with a 2-sentence polite check-in. If there is still no reply after the follow-up, accept it gracefully and move on. Never send more than one follow-up."
  }
];

export const coldEmailTemplates: OutreachEmailBlueprint[] = [
  {
    id: "phd-cold-inquiry",
    type: "phd-cold-inquiry",
    name: "Doctoral (PhD) Research Mentorship & Funding Inquiry",
    targetAudience: "Prospective PhD applicants reaching out to Principal Investigators (PIs) in research-driven fields.",
    subjectLines: [
      "Prospective Fall 2026 PhD Inquirer: [Your Research Field / Specific Topic] (Fit with [Professor's Lab Name / Recent Paper])",
      "Inquiry regarding Fall 2026 Doctoral Openings: [Your Sub-Field] – [Your Name], [Your Current University]",
      "PhD Applicant: [Specific Topic] (Undergrad Thesis Fit with Dr. [Professor LastName]'s [Year] [Journal Name] Paper)"
    ],
    wordCount: "~180–220 words",
    recommendedAttachments: ["Clean 2-page Academic CV (PDF)", "1-page Research Summary / Abstract (Optional)"],
    tips: [
      "Never open with generic flattery ('I hope this email finds you well; your work is world-famous').",
      "Cite a specific methodological detail or finding from their 2024–2026 paper in paragraph 2.",
      "Keep total word count under 220 words so it fits completely on a smartphone screen without scrolling."
    ],
    body: `Dear Professor [Professor LastName],

I am writing to inquire whether you are considering accepting new doctoral students into your research group for the [Fall 2026] academic cycle. I am particularly interested in your lab's ongoing research on [Specific Research Topic / Lab Direction].

I recently read your [Year] paper titled "[Title of Professor's Recent Paper]" published in [Journal / Conference Name]. I was particularly intrigued by your methodological approach regarding [Specific Methodological Detail or Theoretical Finding]. In my [Bachelor's / Master's] thesis at [Your University], I investigated [1-sentence summary of your past research], where I developed [mention specific algorithm, experimental assay, statistical model, or tool you used] and observed [mention key result or metric].

My academic background in [Your Field] ([Cumulative GPA / Ranking if high, e.g., Top 5%]) and research experience in [2-3 key technical/methodological skills] have prepared me to contribute directly to your lab's investigation of [Proposed Area of Contribution]. [If you have a publication/preprint, add: A preprint of my recent paper on this topic is available at arXiv:[DOI/link]].

I have attached my academic CV for your review. If you have active doctoral openings in your lab, I would welcome the opportunity to speak with you briefly for 15 minutes to discuss potential alignment.

Thank you very much for your time and consideration.

Sincerely,

[Your Full Legal Name]
[Your Degree & Major]
[Your Current University / Institution]
[LinkedIn / Google Scholar / GitHub profile link]`
  },
  {
    id: "masters-research-inquiry",
    type: "masters-research-inquiry",
    name: "Research-Thesis Master's (MSc / MASc) Advisor Inquiry",
    targetAudience: "Applicants targeting research-thesis Master's programs (especially in Canada, Europe, and Australia).",
    subjectLines: [
      "Prospective [Fall 2026] Thesis MSc Applicant: [Research Area] (Dr. [Professor LastName]'s Lab)",
      "Inquiry: Thesis Master's Advising for [Fall 2026] – [Your Name], [Your University]"
    ],
    wordCount: "~160–190 words",
    recommendedAttachments: ["Academic CV (PDF)", "Official / Unofficial Academic Transcript (PDF)"],
    tips: [
      "Highlight your prerequisite coursework grades and practical laboratory/programming skills.",
      "Make clear that you are applying specifically to the thesis/research track, not a coursework-only track."
    ],
    body: `Dear Professor [Professor LastName],

I am writing to express my strong interest in pursuing a thesis-based Master of Science in [Program Name] under your supervision at [University Name] starting in [Fall 2026].

Having reviewed your lab's work on [Specific Research Area], especially your recent work on [Topic of Recent Paper / Project], I am inspired by your approach to [specific technical aspect]. During my undergraduate studies in [Your Major] at [Your University] (GPA: [Your GPA]), I completed a capstone project focusing on [1-sentence project description], where I developed hands-on proficiency with [2-3 core tools or experimental techniques].

I am eager to contribute to your ongoing research initiatives while building strong foundational research competencies. My attached CV provides an overview of my coursework, practical projects, and academic references.

Could you let me know if you are open to advising new research Master's students for the upcoming cycle? I would appreciate the chance to discuss how my background aligns with your current projects.

Thank you for your time and guidance.

Sincerely,

[Your Full Legal Name]
[Your Current University & Degree]
[Contact Information / Portfolio Link]`
  },
  {
    id: "polite-follow-up",
    type: "polite-follow-up",
    name: "7–10 Day Courteous Follow-Up Template",
    targetAudience: "Sent as a direct reply on the original email thread if no response has been received after 7–10 business days.",
    subjectLines: [
      "Re: Prospective Fall 2026 PhD Inquirer: [Your Research Field] (Follow-up)"
    ],
    wordCount: "~60–80 words",
    recommendedAttachments: ["None (already attached in the original thread)"],
    tips: [
      "Always reply to the exact same email chain so the professor can immediately see your original message and attached CV.",
      "Keep it under 4 sentences; never sound accusatory or demanding.",
      "If no reply is received after this follow-up, do not send any further emails to this professor."
    ],
    body: `Dear Professor [Professor LastName],

I am following up briefly on my email below regarding prospective [PhD / Master's] research opportunities in your group for [Fall 2026].

I understand that your schedule is exceptionally demanding with teaching and research deadlines. I remain very enthusiastic about your lab's work on [Specific Research Topic] and would be grateful for any brief guidance on whether you might be accepting students for the upcoming cycle.

Thank you again for your time and consideration.

Sincerely,

[Your Full Name]
[Your Current Affiliation]
[Your Phone Number / Email]`
  }
];

export const supervisorNecessityByCountry: SupervisorNecessityRule[] = [
  {
    country: "Canada",
    degreeLevel: "PhD & MSc Thesis",
    necessity: "Strictly Required Before Application",
    rationale: "At U15 Canadian research universities (Toronto, UBC, McGill, Alberta), departmental admissions committees will not approve a research application unless a tenure-track faculty member has formally agreed in writing to supervise and financially support the student."
  },
  {
    country: "Australia & New Zealand",
    degreeLevel: "PhD & MPhil",
    necessity: "Strictly Required Before Application",
    rationale: "Australian and New Zealand universities require an approved Expression of Interest (EOI) and a formal signed agreement from an accredited supervisor before the central university portal will permit submission."
  },
  {
    country: "United Kingdom",
    degreeLevel: "PhD / DPhil",
    necessity: "Strictly Required Before Application",
    rationale: "Unless applying to a structured cohort Doctoral Training Centre (CDT/DTP), traditional UK PhD applications mandate submitting an agreed research proposal developed in consultation with a prospective lead supervisor."
  },
  {
    country: "Germany (Individualpromotion)",
    degreeLevel: "Individual PhD",
    necessity: "Strictly Required Before Application",
    rationale: "For the traditional German individual doctorate, securing a faculty member to serve as your 'Doktorvater' or 'Doktormutter' is the legal prerequisite for university matriculation."
  },
  {
    country: "United States",
    degreeLevel: "PhD (STEM / Rotations)",
    necessity: "Centralized / Not Required",
    rationale: "Most US PhD programs evaluate applicants through a centralized departmental admissions committee. Admitted students often undergo first-year laboratory rotations before joining a permanent lab. Cold outreach is optional and informational only."
  },
  {
    country: "Sweden, Netherlands, Norway, Denmark",
    degreeLevel: "Salaried PhD Vacancies",
    necessity: "Centralized / Not Required",
    rationale: "PhD positions are legally advertised open employment vacancies. You apply directly through the university HR/job portal; contacting professors is only necessary if asking specific technical questions about the advertised project."
  },
  {
    country: "Japan & South Korea",
    degreeLevel: "Master's & PhD",
    necessity: "Strictly Required Before Application",
    rationale: "Securing an informal acceptance letter (Naidaku in Japan) or lab professor financial backing (Korea) is an indispensable requirement for university admission and national scholarships (MEXT/GKS)."
  }
];

export const researchFitChecklist = [
  { id: "fit-1", label: "Confirmed the professor has published in your target niche within the last 18–24 months", tip: "Check their Google Scholar profile for 2024–2026 papers." },
  { id: "fit-2", label: "Identified their active research funding source (e.g., NSF, ERC, NIH, industry grant)", tip: "Look in the Acknowledgments section of their latest publications." },
  { id: "fit-3", label: "Read at least 2 full papers to understand their core methodological frameworks", tip: "Be ready to cite specific algorithms, equations, or experimental setups." },
  { id: "fit-4", label: "Verified whether their department rules mandate prior supervisor outreach", tip: "Avoid emailing faculty when the website says 'Admissions are centralized'." },
  { id: "fit-5", label: "Drafted a personalized email under 220 words with zero generic flattery", tip: "Customize paragraph 2 completely for each individual academic." }
];
