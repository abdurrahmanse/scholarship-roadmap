import { FAQItem } from "./types";

export const faqsData: FAQItem[] = [
  {
    id: "faq-direct-phd",
    question: "Can I apply directly for a fully funded PhD right after my 4-year Bachelor's degree without a Master's?",
    answer: "Yes, absolutely! In the United States and Canada, the majority of Computer Science PhD students are admitted directly after a Bachelor's degree. Direct-entry PhD programs provide 100% full tuition remission, a guaranteed monthly living stipend ($30,000–$50,000/year), and health insurance from Day 1. In Europe (e.g., Germany, Switzerland, Netherlands), a Master's degree is typically legally required prior to doctoral enrollment.",
    category: "Admissions & Strategy",
    tags: ["Direct PhD", "Bachelor to PhD", "US Admissions", "Europe vs US"]
  },
  {
    id: "faq-first-author-paper",
    question: "Do I need a first-author NeurIPS or ICML paper to get into a top AI/ML PhD program?",
    answer: "No, a first-author main conference paper is not mandatory, though it is a strong positive signal. Admissions committees look for research maturity: conference workshop papers (NeurIPS/ICLR workshops), verified arXiv preprints, co-authored conference submissions, reproducible GitHub codebases with community adoption, and strong letters from active AI researchers confirming your problem-solving independence.",
    category: "Research & Code",
    tags: ["Publications", "NeurIPS", "arXiv", "Workshops"]
  },
  {
    id: "faq-gre-required",
    question: "Is the GRE really dead for Computer Science and AI graduate admissions?",
    answer: "For the vast majority of top-tier CS programs, yes. Institutions like MIT, Stanford, UC Berkeley, Carnegie Mellon, University of Washington, University of Michigan, and UIUC have permanently made the GRE test-blind or abolished it. Only take the GRE if a specific safe-tier institution on your list strictly requires it, and aim for Quant >= 167.",
    category: "Testing & Requirements",
    tags: ["GRE", "Waivers", "Test-Blind", "Quant"]
  },
  {
    id: "faq-low-gpa",
    question: "My undergraduate GPA is below 3.5 / 4.0. Can I still win a fully funded AI research assistantship?",
    answer: "Yes. In AI/ML, research output and technical contributions vastly outweigh GPA. You can mitigate a lower cumulative GPA by: (1) Highlighting an upward trend in your final 2 years of advanced math/CS courses; (2) Releasing a citable arXiv preprint and clean open-source PyTorch repository; (3) Securing an enthusiastic recommendation letter from an active AI researcher; and (4) Directly connecting with an Assistant Professor whose active grant aligns with your skills.",
    category: "Admissions & Strategy",
    tags: ["Low GPA", "Research Offset", "Mitigation", "Admissions"]
  },
  {
    id: "faq-gpu-compute-allocation",
    question: "How does GPU compute allocation actually work for graduate research students?",
    answer: "Funded PhD and research Master's students do not pay for their own GPUs. Reputable AI laboratories provide direct access to: (1) Local department Slurm clusters with high-density GPU nodes (e.g. 8x NVIDIA H100/A100 nodes); (2) National supercomputing resources (like CSCS in Switzerland, NCI in Australia, or NERSC in the US); and (3) Cloud research credits through faculty partnerships with Google Cloud, AWS, or Microsoft Azure.",
    category: "Funding & Money",
    tags: ["Compute", "GPU Clusters", "H100", "Slurm", "Cloud Credits"]
  },
  {
    id: "faq-visa-tal-clearance",
    question: "How do I prevent Technology Alert List (TAL) 221(g) administrative delays during my visa interview as an AI student?",
    answer: "Because AI is classified as a sensitive critical technology, consular officers screen for export control and military dual-use risks. Avoid buzzwords like 'surveillance', 'autonomous weapons', or 'military tracking'. Always emphasize that your research is 'fundamental, basic mathematical optimization for open-source machine learning'. Bring a signed letter from your future advisor confirming that all work is unclassified and intended for public academic conference publication.",
    category: "Visa & Relocation",
    tags: ["Visa Interview", "TAL", "221g", "Export Controls", "Open Science"]
  },
  {
    id: "faq-summer-funding-internships",
    question: "How do AI PhD students earn money during the summer months?",
    answer: "Most top AI PhD programs offer 12-month funding through year-round Graduate Research Assistantships (GRA). However, the vast majority of 2nd-year+ AI PhD students take 3-month summer research internships at top industrial labs (Google DeepMind, Meta FAIR, Microsoft Research, OpenAI, Apple, Anthropic, NVIDIA). These internships pay $10,000–$15,000 per month plus housing allowances, providing substantial financial savings while generating high-impact conference papers.",
    category: "Funding & Money",
    tags: ["Summer Internships", "Industry Labs", "DeepMind", "Meta FAIR", "Stipends"]
  },
  {
    id: "faq-cold-email-timing",
    question: "When is the optimal time of the year to start cold-emailing AI professors?",
    answer: "The golden window is September 1 to October 31 before the December application deadlines. Faculty have settled into the fall semester, grant budgets for the upcoming fiscal year are confirmed, and graduate admissions committees are forming. Avoid emailing during major conference deadlines (e.g., NeurIPS in May, ICLR in late September, or CVPR in mid-November).",
    category: "Admissions & Strategy",
    tags: ["Cold Outreach", "Timing", "Fall Intake", "Deadlines"]
  }
];
