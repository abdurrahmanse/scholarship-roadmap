export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Eligibility & Tests" | "Outreach & Supervisors" | "Funding & Finance" | "Strategy & Preparation";
  tags: string[];
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-without-ielts",
    question: "Can I obtain a fully funded Master's scholarship without IELTS?",
    answer: "Yes, in specific cases, but it depends strictly on the country and institution. (1) Official Medium of Instruction (MOI) Waivers: If your undergraduate degree was taught 100% in English, many universities in Germany, France, Sweden, and Asia accept an official institutional MOI certificate from your registrar in lieu of IELTS. (2) Alternative Tests: Many institutions accept TOEFL iBT, the Duolingo English Test (DET), or Cambridge C1 Advanced. (3) National Language Programs: Certain government bilateral awards (e.g., Chinese Government CSC, Korean GKS, Turkish Burslari) provide a mandatory 1-year fully funded preparatory language immersion year in the host nation before degree studies, allowing applications without English test scores. However, for UK Chevening, Australian RTP, and North American institutions, an official standardized English test is mandatory and rarely waived.",
    category: "Eligibility & Tests",
    tags: ["IELTS", "TOEFL", "MOI Certificate", "Language Waiver", "Duolingo"]
  },
  {
    id: "faq-high-gpa-necessary",
    question: "Is a high GPA always necessary to secure a fully funded scholarship?",
    answer: "No. While a high GPA (e.g., 3.7+/4.0 or First Class with Distinction) is an advantage for coursework scholarships, it is not an absolute barrier for research-based Master's and PhD funding. Admissions committees evaluate candidates holistically. You can effectively offset an average GPA (e.g., 3.0–3.3/4.0) by: (1) Demonstrating strong research deliverables (a published paper, citable conference preprint, or open-source software repository); (2) Demonstrating an upward grade trajectory in your final two years of upper-level major courses; (3) Achieving exceptional Quantitative scores on the GRE if accepted; (4) Securing enthusiastic recommendation letters from actively publishing researchers; and (5) Applying to European salaried doctoral vacancies where practical laboratory skills carry 70% of hiring committee weight.",
    category: "Eligibility & Tests",
    tags: ["GPA", "Holistic Admissions", "Profile Compensation", "Low GPA"]
  },
  {
    id: "faq-phd-contact-professor",
    question: "Do all PhD applications require contacting a professor beforehand?",
    answer: "No, this varies fundamentally by the host country's academic governance model. (1) Strictly Required: In Canada, Australia, New Zealand, and traditional individual German doctorates (Individualpromotion), you MUST contact prospective supervisors and obtain written agreement before submitting a formal application. (2) Centralized / Not Required: In the United States, most STEM PhD programs use centralized committee admissions where students undergo first-year lab rotations before choosing a permanent PI; cold outreach is informational only and rarely binding. (3) Direct Vacancy Application: In Sweden, Denmark, the Netherlands, and Norway, PhD positions are advertised as open salaried employment vacancies on university job portals, and you apply directly through the HR recruitment system.",
    category: "Outreach & Supervisors",
    tags: ["Supervisor Outreach", "PhD Admissions", "Canada vs US", "European Models"]
  },
  {
    id: "faq-apply-without-publications",
    question: "Can I apply for a fully funded graduate position without any publications?",
    answer: "Yes, absolutely. For Master's scholarships (such as DAAD, Eiffel, Chevening, and Swedish Institute), peer-reviewed publications are rarely expected or required; committees prioritize undergraduate grades, leadership, and professional motivation. For PhD programs, while publications are a strong positive signal in hyper-competitive fields, top universities routinely admit doctoral candidates without published papers if they demonstrate research potential through: a rigorous undergraduate or master's thesis, strong quantitative skills, well-documented code repositories, detailed writing samples, and glowing letters of recommendation from faculty confirming independent problem-solving ability.",
    category: "Eligibility & Tests",
    tags: ["Publications", "Undergraduate Research", "Thesis", "First-Time Applicant"]
  },
  {
    id: "faq-multiple-countries",
    question: "Can I apply to multiple countries simultaneously?",
    answer: "Yes, and strategically, you should. A balanced portfolio strategy protects you against unexpected visa delays, single-institution rejections, and quota fluctuations. A robust application plan typically targets 8–12 institutions across 2–3 different geographic systems (e.g., 4 North American universities with Graduate Assistantships, 3 European salaried doctoral vacancies or tuition-free universities, and 2 Asian flagship government scholarship programs like MEXT or SINGA). Ensure you track distinct deadline time zones, prerequisite credit models (ECTS vs credit hours), and recommendation letter formats for each country.",
    category: "Strategy & Preparation",
    tags: ["Strategy", "Portfolio Approach", "Deadlines", "Multiple Countries"]
  },
  {
    id: "faq-timeline-preparation",
    question: "When should I start preparing my scholarship applications?",
    answer: "The ideal timeline begins 12 to 18 months before your intended enrollment date. For a Fall (August/September) intake: (1) 12–15 Months Prior (June–August): Identify target countries, take language tests (IELTS/TOEFL) and GRE, audit transcripts; (2) 9–12 Months Prior (September–November): Contact prospective research supervisors, draft Statement of Purpose and Research Proposals, brief academic recommenders; (3) 8–9 Months Prior (December–January): Submit primary university and government scholarship portal applications; (4) 4–6 Months Prior (March–May): Interview with faculty panels, receive funding offers, evaluate packages before the April 15 deadline; (5) 2–4 Months Prior (June–August): Secure visa and arrange housing.",
    category: "Strategy & Preparation",
    tags: ["Timeline", "Application Calendar", "Preparation", "Deadlines"]
  },
  {
    id: "faq-fresh-graduate",
    question: "Can a fresh graduate apply directly without full-time work experience?",
    answer: "Yes. For the majority of research-based Master's (MSc) and PhD programs, fresh graduates are prime candidates because their theoretical and mathematical knowledge is recent. In North America, students routinely enter direct-entry PhD programs immediately following a 4-year Bachelor's degree. However, work experience is mandatory for specific professional awards: the UK Chevening Scholarship requires a minimum of 2,800 hours (~2 years) of work experience, the Swedish Institute (SISGP) mandates 3,000 hours of documented leadership experience, and German DAAD EPOS programs require at least 2 years of professional employment.",
    category: "Eligibility & Tests",
    tags: ["Fresh Graduate", "Work Experience", "Direct Entry", "Bilateral Rules"]
  },
  {
    id: "faq-tuition-waiver-vs-fully-funded",
    question: "What is the difference between a tuition waiver and a fully funded scholarship?",
    answer: "This distinction is critical to prevent severe financial distress abroad. (1) Tuition Waiver: Simply cancels or reduces the university's tuition bill (e.g., a 50% or 100% tuition waiver). It does NOT pay for your apartment rent, groceries, mandatory health insurance, textbooks, or flights. You remain personally responsible for $12,000–$25,000 per year in living costs. (2) Fully Funded Scholarship: Covers 100% of tuition and mandatory fees PLUS guarantees a livable monthly cash stipend indexed to local living costs (typically $1,200–$3,500/month depending on the city), along with health insurance, and often international airfare. Never accept an offer labeled 'scholarship' without verifying whether a monthly living stipend is included.",
    category: "Funding & Finance",
    tags: ["Tuition Waiver", "Fully Funded", "Living Stipend", "Financial Audit"]
  },
  {
    id: "faq-supervisor-necessity",
    question: "Is it necessary to have an agreed supervisor before applying?",
    answer: "It depends strictly on the program: (1) Required: Canada (MSc thesis/PhD), Australia/New Zealand (MPhil/PhD), individual German PhDs, and Hong Kong/Singapore SINGA require an approved supervisor agreement or formal preliminary endorsement prior to application submission. (2) Optional / Not Applicable: US PhD programs (which use centralized admissions committees and 1st-year lab rotations), European taught Master's degrees, and UK centralized Doctoral Training Partnerships (CDTs) do not require finding a supervisor before applying; admissions committees make the decisions collectively.",
    category: "Outreach & Supervisors",
    tags: ["Supervisor", "Admissions Rules", "Rotations", "Direct Application"]
  },
  {
    id: "faq-identify-fraud",
    question: "How can I identify and protect myself from fraudulent scholarship offers?",
    answer: "Follow these 4 inviolable rules: (1) Legitimate scholarships NEVER charge fees to award money. Any agency demanding a 'scholarship claim fee', 'file release payment', or 'processing commission' is a scam. (2) Check email domains: Official university or government communications always come from accredited institutional domains (@ox.ac.uk, @harvard.edu, @daad.de, @campusfrance.org), never from free webmail accounts like Gmail, Outlook, or Yahoo. (3) No agency can guarantee scholarship selection; admissions decisions are made strictly by academic faculty committees. (4) Always verify the scholarship program independently on the accredited university or embassy website.",
    category: "Funding & Finance",
    tags: ["Scam Prevention", "Safety", "Official Portals", "Fraud Detection"]
  },
  {
    id: "faq-professor-no-reply",
    question: "What should I do if a professor does not reply to my email?",
    answer: "Do not take it personally. Academic professors receive 50 to 150 emails daily alongside teaching, grant writing, and laboratory management. Follow this protocol: (1) Wait 7 to 10 business days; (2) If no response, send a single, courteous 2-sentence follow-up on the exact same email thread; (3) If there is still no reply after another 7 days, accept it gracefully and move on to other faculty. Never send multiple follow-ups, and never contact a professor through personal phone numbers, WhatsApp, or personal social media accounts.",
    category: "Outreach & Supervisors",
    tags: ["Cold Emailing", "Follow-up", "Professor Etiquette", "Email Protocol"]
  },
  {
    id: "faq-rejection-recovery",
    question: "How should I prepare and recover if all my applications are rejected?",
    answer: "Rejection in graduate admissions is common and often reflects lab funding cycles or cohort quotas rather than your personal intellectual worth. Execute a 4-step recovery plan: (1) Conduct a post-mortem: Did you miss prerequisite courses? Was your SOP too generic? Did recommenders submit weak letters? (2) Spend 6–12 months strengthening tangible deliverables: work as a university lab research assistant, write an extended literature review, co-author a conference workshop paper, or retake language exams to hit higher subscore bands; (3) Expand your geographic and tier scope: include European salaried doctoral positions, Canadian U15 schools, and Asian flagship programs; (4) Completely rewrite your SOP with your new research accomplishments and reapply early in the next cycle.",
    category: "Strategy & Preparation",
    tags: ["Rejection", "Reapplication", "Profile Improvement", "Bridge Year"]
  }
];

export const getFaqsByCategory = (category: FAQItem["category"]): FAQItem[] => {
  return faqsData.filter((faq) => faq.category === category);
};
