import { SlideData, RedFlagRule, OfferFinancialMetric } from "./types";

export const interviewsHeroHighlightsData = [
  { label: "Interactive 5-Slide Presentation Simulator", iconName: "Presentation", variant: "purple" },
  { label: "STAR-L Deep Learning Technical Defense", iconName: "CheckCircle2", variant: "cyan" },
  { label: "TAL Export Control Clearance Protocol", iconName: "ShieldCheck", variant: "emerald" }
];

export const fiveSlideDeckData: SlideData[] = [
  {
    number: 1,
    title: "Scientific Motivation & Existing Limits",
    subtitle: "Define the problem setting and why existing SOTA models fail in real-world conditions.",
    timing: "90 Seconds",
    visualLayout: "Left: Problem diagram showing distribution shift or memory explosion. Right: Failure table of SOTA baselines.",
    keyPoints: [
      "State the real-world operational ceiling of prior methods in 20 seconds.",
      "Show a concrete visual or numerical breakdown where prior work breaks down.",
      "Explicitly frame your hypothesis: 'Can we achieve [X] without sacrificing [Y]?'"
    ],
    facultyInterruptionQuestion: "Why didn't you just scale up the batch size or use a larger foundation model to solve this?",
    defenseAnswer: "Scaling parameters or batch size increases quadratic memory and compute overhead exponentially without resolving the fundamental gradient variance issue in this setting."
  },
  {
    number: 2,
    title: "Core Algorithmic & Mathematical Insight",
    subtitle: "Present your key contribution using clean notation and an intuitive architecture diagram.",
    timing: "2 Minutes",
    visualLayout: "Center: High-resolution tensor pipeline diagram with clean mathematical operators. Bottom: Formal loss function formula.",
    keyPoints: [
      "Walk the professor through the tensor data flow from left to right.",
      "Highlight the single mathematical modification or architectural module you introduced.",
      "Explain the physical/intuitive reasoning: why does this mathematical change stabilize training?"
    ],
    facultyInterruptionQuestion: "Isn't this loss formulation mathematically equivalent to standard contrastive InfoNCE?",
    defenseAnswer: "No, because by penalizing cross-correlation off-diagonal elements directly toward zero (inspired by Barlow Twins), we eliminate the requirement for large negative pair sample batches."
  },
  {
    number: 3,
    title: "Quantitative Experimental Benchmarks",
    subtitle: "Show primary comparison across standard benchmarks with error bars and statistical significance.",
    timing: "90 Seconds",
    visualLayout: "Comparison table across 3 standard datasets with bolded best results, 5-seed standard deviations (+/-), and compute FLOPs.",
    keyPoints: [
      "Compare strictly against contemporary, identical-compute baselines.",
      "Emphasize variance across 5 random seeds to prove stability.",
      "Highlight Pareto efficiency: better or equal accuracy with significantly lower compute."
    ],
    facultyInterruptionQuestion: "Did you tune hyperparameters for the baseline methods as thoroughly as your own model?",
    defenseAnswer: "Yes, we conducted grid search over learning rates and weight decay for all baselines across the exact same parameter budget and random seeds."
  },
  {
    number: 4,
    title: "Controlled Ablation Studies",
    subtitle: "Prove which specific component of your design was responsible for the performance gain.",
    timing: "2 Minutes",
    visualLayout: "Bar chart or ablation table isolating each component: Base vs Base+ModuleA vs Base+ModuleA+ModuleB.",
    keyPoints: [
      "Show what happens when your custom loss term or attention kernel is removed.",
      "Prove that the gain is not an artifact of random initialization.",
      "Analyze failure cases: where does your model still struggle?"
    ],
    facultyInterruptionQuestion: "What happens if you remove your regularization term entirely?",
    defenseAnswer: "As shown in row 3 of the ablation table, removing the redundancy penalty causes representation collapse within 400 iterations, dropping validation accuracy from 76.5% to 14.2%."
  },
  {
    number: 5,
    title: "Open Questions & Future Research Horizons",
    subtitle: "Demonstrate scientific maturity by outlining what experiments and scaling tests you would conduct next.",
    timing: "60 Seconds",
    visualLayout: "Bullet points connecting remaining theoretical bottlenecks to the target laboratory's current grant focus.",
    keyPoints: [
      "Acknowledge current empirical boundaries openly (e.g. tested on 7B, needs multi-node validation).",
      "Propose 2 logical follow-up hypotheses.",
      "Bridge directly into target faculty: 'Your lab's work on embodied robotics is the ideal testbed for this policy architecture.'"
    ],
    facultyInterruptionQuestion: "If you joined our lab tomorrow, which project from our recent papers would you want to work on first?",
    defenseAnswer: "I would extend your recent ICLR paper on multi-task policy distillation by testing whether speculative decoding can bypass your current 20Hz hardware control latency ceiling."
  }
];

export const visaTalRulesData: RedFlagRule[] = [
  { term: "drone", danger: "Triggers munitions / dual-use export control", safeReplacement: "Autonomous non-rigid robotic mobile manipulation on public benchmarks" },
  { term: "surveillance", danger: "Triggers human rights / privacy export review", safeReplacement: "Fundamental multi-view 3D scene reconstruction and geometry optimization" },
  { term: "military", danger: "Guaranteed 221(g) administrative processing", safeReplacement: "Basic fundamental open-source academic computational algorithms" },
  { term: "missile", danger: "Severe munitions list violation", safeReplacement: "Spatiotemporal differential equation optimization in climate physics" },
  { term: "biometric", danger: "Triggers automated facial surveillance alert", safeReplacement: "Foundational latent representation learning on synthetic visual datasets" },
  { term: "cyber attack", danger: "Triggers offensive cyber capabilities review", safeReplacement: "Theoretical formal verification and static syntax parsing in compiler design" },
  { term: "reconnaissance", danger: "Immediate consular administrative review", safeReplacement: "Satellite imagery processing for ecological reforestation monitoring" }
];

export const offerFinancialMetricsData: OfferFinancialMetric[] = [
  { label: "CGS Resolution Deadline", value: "April 15", sub: "11:59 PM EST binding decision cutoff" },
  { label: "Stipend Term Check", value: "12 vs 9 Months", sub: "Confirm summer GRA is guaranteed" },
  { label: "Discretionary Top-Ups", value: "$3k – $10k/yr", sub: "Dean's Excellence Fellowship awards" },
  { label: "Industry Summer Pay", value: "$10k – $15k/mo", sub: "FAIR, DeepMind, OpenAI research intern" }
];

export const cgsResolutionRightsData = [
  "You have the absolute right to hold all funded offers until April 15 without penalty.",
  "No department may pressure you or threaten to withdraw your assistantship before April 15.",
  "You may attend Open Houses, visit lab clusters, and interview multiple prospective advisors before deciding."
];

export const negotiationChecklistData = [
  "State your strong enthusiasm and first-choice commitment",
  "Inquire transparently about matching Dean's or Chair's Fellowship supplements",
  "Confirm guaranteed summer research salary support (Months 10–12)"
];
