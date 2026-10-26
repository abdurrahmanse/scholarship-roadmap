export interface InterviewDefenseCase {
  id: string;
  category: "Systems & Memory" | "Model Training & Convergence" | "Inference & Optimization" | "Theory & Foundations";
  technicalChallenge: string;
  context: string;
  task: string;
  actionTaken: string;
  quantitativeResult: string;
  researchInsight: string;
}

export interface SlideData {
  number: number;
  title: string;
  subtitle: string;
  timing: string;
  visualLayout: string;
  keyPoints: string[];
  facultyInterruptionQuestion: string;
  defenseAnswer: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | "Eligibility & Tests"
    | "Outreach & Supervisors"
    | "Funding & Finance"
    | "Strategy & Preparation"
    | "Funding & Money"
    | "Admissions & Strategy"
    | "Research & Code"
    | "Testing & Requirements"
    | "Visa & Relocation";
  tags: string[];
}
