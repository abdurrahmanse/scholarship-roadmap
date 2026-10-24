import { EmailTemplate } from "./types";

export const emailTemplatesData: EmailTemplate[] = [
  {
    id: "ai-pi-cold-email",
    title: "High-Yield AI/ML Supervisor Cold Email",
    category: "Cold Outreach",
    targetAudience: "Tenure-Track Assistant Professors and Principal Investigators in AI/ML",
    subject: "Prospective PhD Student (Fall 2026) - {{Subfield, e.g. LLM Reasoning / Diffusion Models}} - {{Your Full Name}}",
    description: "Battle-tested 5-point technical inquiry referencing a specific recent conference paper, highlighting an empirical bottleneck, and linking to your reproducible GitHub repository and arXiv preprint.",
    body: `Dear Professor {{Professor's Last Name}},

I hope this email finds you well.

My name is {{Your Full Name}}, and I recently completed my {{Bachelor’s/Master’s}} in Computer Science at {{Your University}} with a GPA of {{Your GPA/Scale or Class Rank}}. I am writing to express my strong interest in joining your research group as a fully funded PhD student for the Fall 2026 admissions cycle.

I have been following your lab’s work closely, particularly your recent {{Conference Year, e.g. ICLR 2025}} paper, "{{Title of Professor's Paper}}." I found your approach to {{specific mathematical formulation, loss function, or architecture modification}} very compelling, particularly the result showing {{mention specific empirical finding or metric in paper}}. However, I noticed that the method’s scaling behavior appears bounded by {{mention a nuanced limitation, bottleneck, or potential failure mode you observed in their discussion}}.

In my recent research under Professor {{Advisor's Name}}, I explored a related problem in {{1-sentence summary of your work}}. To mitigate {{specific bottleneck}}, I implemented {{describe your algorithm, architectural modification, or training protocol}}, which improved {{metric}} by {{X}}% over baseline on {{Benchmark Dataset}}. We documented our methodology in an arXiv preprint [{{Hyperlink: https://arxiv.org/abs/XXXX.XXXXX}}], and my reproducible PyTorch codebase with weights is available on GitHub [{{Hyperlink: https://github.com/yourusername/reponame}}].

I am eager to build on this foundation by investigating {{1-sentence description of proposed research idea}}, which directly aligns with your group's current research agenda in {{Professor's Subfield}}. I plan to apply through the departmental Graduate Research Assistantship (GRA) pathway for Fall 2026.

I have attached my Academic CV and a 1-page Research Summary. Would you have 15 minutes for a brief Zoom conversation next week to discuss potential doctoral opportunities in your laboratory?

Thank you sincerely for your time and consideration.

Respectfully,

{{Your Full Name}}
GitHub: {{GitHub Profile URL}} | Scholar: {{Google Scholar URL}} | Website: {{Personal Website or Hugging Face URL}}
Phone: {{Phone Number with Country Code}}`,
    placeholders: [
      "Professor's Last Name",
      "Subfield, e.g. LLM Reasoning / Diffusion Models",
      "Your Full Name",
      "Bachelor’s/Master’s",
      "Your University",
      "Your GPA/Scale or Class Rank",
      "Conference Year, e.g. ICLR 2025",
      "Title of Professor's Paper",
      "Advisor's Name",
      "Benchmark Dataset"
    ],
    instructions: [
      "Send Tuesday–Thursday between 8:30 AM and 9:15 AM in the professor's local time zone.",
      "Never copy-paste with mismatched formatting. Send plain text with clean hyperlinks.",
      "Keep attachments strictly in PDF format under 2MB."
    ]
  },
  {
    id: "ai-pi-7day-followup",
    title: "Polite 7-Day Follow-Up to Busy AI Faculty",
    category: "Follow-Up",
    targetAudience: "Professors who have not replied to your initial email after 7–10 business days",
    subject: "Re: Prospective PhD Student (Fall 2026) - {{Subfield}} - {{Your Full Name}}",
    description: "Short, courteous bump on the existing email thread acknowledging heavy conference review deadlines without pressuring the faculty member.",
    body: `Dear Professor {{Professor's Last Name}},

I hope you are having a productive week.

I am briefly following up on my email from last week regarding potential doctoral openings in your research group for Fall 2026. 

I understand you are managing heavy conference review deadlines (NeurIPS/ICLR/CVPR) and lab commitments. If you have a few minutes in the coming weeks, I would welcome the opportunity to introduce myself and learn more about your group's upcoming projects.

Thank you once again for your time and guidance.

Warm regards,

{{Your Full Name}}
{{GitHub URL}} | {{Personal Website / Hugging Face URL}}`,
    placeholders: [
      "Professor's Last Name",
      "Subfield",
      "Your Full Name",
      "GitHub URL",
      "Personal Website / Hugging Face URL"
    ],
    instructions: [
      "Reply directly on the SAME thread as your original email so your previous message and attachments remain visible.",
      "Send exactly once after 7–10 business days. If no reply after 1 follow-up, move on respectfully."
    ]
  },
  {
    id: "recommender-brag-sheet",
    title: "Letter of Recommendation Request & Graduate Brag Sheet Packet",
    category: "Recommendation",
    targetAudience: "Undergraduate / Master's thesis supervisors and research mentors",
    subject: "Letter of Recommendation Request for Graduate Applications - {{Your Full Name}}",
    description: "Equips your mentors with an organized summary dossier of your past projects, course grades, paper contributions, and target application deadlines.",
    body: `Dear Professor {{Professor's Last Name}},

I hope you are having a pleasant semester.

As I prepare to take the next step in my academic career, I am applying for fully funded Computer Science PhD and Master’s programs for the Fall 2026 cycle (including {{e.g. CMU, Stanford, Berkeley, and the ELLIS PhD Program}}).

Given our research collaboration on {{Project / Thesis Title}} and my coursework in your {{Course Name}} course (Grade: {{Your Grade}}), I wanted to ask if you would feel comfortable writing a strong, supportive letter of recommendation highlighting my research aptitude, mathematical independence, and deep learning engineering capabilities.

To make the process as seamless and convenient as possible for you, I have attached a comprehensive summary packet:
1. My updated Academic CV and current draft of my Statement of Purpose.
2. A spreadsheet listing my target institutions, degree programs, deadlines, and submission systems.
3. A 1-page "Brag Sheet" highlighting the core mathematical algorithms, PyTorch modules, and conference manuscripts I delivered under your guidance.

My earliest application deadline is {{Date, e.g. December 1, 2025}}. Please let me know if you are able to support my application, and I will submit your details to the respective admissions portals accordingly.

Thank you very much for your ongoing mentorship and support.

Sincerely,

{{Your Full Name}}
{{Institutional Email / Phone Number}}`,
    placeholders: [
      "Professor's Last Name",
      "Your Full Name",
      "e.g. CMU, Stanford, Berkeley, and the ELLIS PhD Program",
      "Project / Thesis Title",
      "Course Name",
      "Your Grade",
      "Date, e.g. December 1, 2025"
    ],
    instructions: [
      "Reach out 6–8 weeks before your earliest December deadline.",
      "Always check the box 'I waive my right to access this recommendation' on application portals."
    ]
  },
  {
    id: "funding-negotiation",
    title: "Respectful Scholarship & Funding Negotiation Email",
    category: "Negotiation",
    targetAudience: "Admissions chairs or prospective PIs when you hold a higher competing fully funded offer",
    subject: "Admission Update & Funding Inquiry - {{Your Full Name}} - Application #{{ID}}",
    description: "Polite, transparent communication leveraging a higher competing fellowship or living stipend to request a departmental top-up or summer support.",
    body: `Dear Professor {{Professor's Last Name}} / Graduate Admissions Committee,

Thank you very much for the offer of admission to the {{Degree Program}} at {{University Name}}. Your department remains one of my absolute top choices due to the pioneering research conducted in {{Lab Name / Research Center}}.

I am writing to transparently share that I have received a fully funded graduate fellowship offer from {{Competing University Name}}, which provides a living stipend of \${{Stipend Amount/Year}} along with complete health insurance coverage and full tuition remission.

Because {{University Name}} is the ideal intellectual and collaborative fit for my research in {{Your Subfield}}, I wanted to respectfully inquire if there are any departmental top-up fellowships, Graduate Research Assistantships, or summer funding packages available that might help bridge this financial difference.

Regardless of whether additional funding is possible, I deeply appreciate your time, consideration, and advocacy for my admission.

Sincerely,

{{Your Full Name}}
Application ID: {{Your ID}}`,
    placeholders: [
      "Professor's Last Name",
      "Degree Program",
      "University Name",
      "Lab Name / Research Center",
      "Competing University Name",
      "Stipend Amount/Year",
      "Your Subfield",
      "Your Full Name",
      "Your ID"
    ],
    instructions: [
      "Only send this if you hold a genuine, written offer letter from another reputable institution.",
      "Never issue an ultimatum. Frame the inquiry around financial viability and cost of living."
    ]
  },
  {
    id: "visa-tal-statement",
    title: "Advisor Open-Science Statement for Technology Alert List (TAL) Clearance",
    category: "Visa Defense",
    targetAudience: "Your prospective PhD advisor to sign on university letterhead for your consular visa interview",
    subject: "Request for Brief Open-Science Research Statement Letter for Visa Application",
    description: "Template letter for your future professor certifying that your AI/ML research is unclassified, foundational, and intended for public academic conference release.",
    body: `[UNIVERSITY LETTERHEAD]

Date: {{Current Date}}
To: Consular Officer, U.S. Embassy / Consulate
Re: Non-Sensitive, Open-Science Academic Research Statement for {{Student's Full Name}} (SEVIS ID: {{N00XXXXXX}})

Dear Consular Officer,

I write to confirm that {{Student's Full Name}} has been admitted as a fully funded doctoral student in the Department of Computer Science at {{University Name}} under my supervision, commencing {{Semester/Year, e.g. Fall 2026}}.

{{Student's Name}}'s doctoral research will focus exclusively on fundamental, foundational mathematical algorithms in machine learning and computational optimization. All research conducted in my laboratory is unclassified, basic scientific inquiry that is published openly in public peer-reviewed academic proceedings such as NeurIPS, ICML, and ICLR.

{{Student's Name}}'s studies will NOT involve:
1. Classified, proprietary, or dual-use military technology.
2. Export-controlled defense articles, munitions, or restricted surveillance hardware.
3. Access to restricted or sensitive government datasets.

All code, algorithmic models, and findings generated during this academic tenure will be released publicly under open-source licenses as part of standard scientific dissemination.

Should you require any additional information regarding the academic curriculum or research scope, please do not hesitate to contact me directly.

Sincerely,

Professor {{Advisor's Full Name}}
Title: {{Professor of Computer Science}}
Department of Computer Science
{{University Name}}
Email: {{Advisor's Institutional Email}} | Phone: {{Advisor's Phone}}`,
    placeholders: [
      "Current Date",
      "Student's Full Name",
      "N00XXXXXX",
      "University Name",
      "Semester/Year, e.g. Fall 2026",
      "Advisor's Full Name",
      "Professor of Computer Science",
      "Advisor's Institutional Email",
      "Advisor's Phone"
    ],
    instructions: [
      "Ask your advisor to print and sign this on official university letterhead.",
      "Bring this printed document to your embassy visa interview to prevent 221(g) administrative processing delays."
    ]
  }
];
