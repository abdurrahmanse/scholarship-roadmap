import { SopMovement, CvBenchmark, XyzExample } from "./types";

export const toolkitHeroHighlightsData = [
  { label: "5-Movement Technical SOP Blueprint", iconName: "CheckCircle2", variant: "purple" },
  { label: "Academic LaTeX CV & Google XYZ Formula", iconName: "CheckCircle2", variant: "pink" },
  { label: "Interactive Live Cold Email Generator", iconName: "CheckCircle2", variant: "indigo" }
];

export const sopMovementsData: SopMovement[] = [
  {
    num: "Movement 1",
    pct: "10% • 100 Words",
    title: "The Empirical Hook & Specific Scientific Focus",
    desc: "State your target subfield immediately in sentence 1. Never begin with childhood stories. State your specific research questions (e.g., sample-efficient offline reinforcement learning or out-of-distribution generalization).",
    points: ["Open with your exact research question", "Zero childhood or sci-fi clichés", "Demonstrate intellectual maturity"]
  },
  {
    num: "Movement 2",
    pct: "25% • 250 Words",
    title: "Foundational Armor & Advanced Technical Stack",
    desc: "Demonstrate rigorous preparation across multivariable calculus, linear algebra, probability, and distributed systems. Mention mastery of PyTorch DDP, JAX, CUDA kernels, and Slurm cluster environments.",
    points: ["Proof-level mathematical comfort", "Distributed multi-GPU training experience", "Clean open-source software engineering"]
  },
  {
    num: "Movement 3",
    pct: "35% • 350 Words",
    title: "The Research Deep-Dive & Methodological Breakthrough",
    desc: "Dedicate 2 comprehensive paragraphs to your primary research contribution: the theoretical obstacle, the mathematical reform, your ablation experiments, and quantitative results on benchmark datasets.",
    points: ["Specific engineering bottleneck", "Mathematical or architectural fix", "Quantitative performance benchmark"]
  },
  {
    num: "Movement 4",
    pct: "20% • 200 Words",
    title: "Institutional Synergy & Named Faculty Bridge",
    desc: "Explicitly name 2–3 faculty members. Cite their papers published in the last 12 months (NeurIPS/ICLR/CVPR) and propose a concrete hypothesis that bridges your skillset to their current grant questions.",
    points: ["Name 2–3 target professors", "Cite papers from the last 12 months", "Show how your code solves their bottleneck"]
  },
  {
    num: "Movement 5",
    pct: "10% • 100 Words",
    title: "Long-Term Scientific Trajectory & Confident Close",
    desc: "State your 5-to-10-year research objective (e.g., tenure-track faculty position or industrial frontier research scientist). Reiterate how this department equips you to solve fundamental machine learning challenges.",
    points: ["Clear academic or R&D trajectory", "Departmental contribution", "Assertive, professional close"]
  }
];

export const cvBenchmarksData: CvBenchmark[] = [
  { label: "Optimal Length", value: "Strictly 2 Pages", sub: "Dense, clean, two pages max" },
  { label: "Typesetting", value: "LaTeX Only", sub: "Awesome-CV / ModernCV templates" },
  { label: "Mandatory Hyperlinks", value: "Scholar & GitHub", sub: "Direct code and citation links" },
  { label: "Photo & Age", value: "Never Include", sub: "US & Canada non-discrimination rule" }
];

export const xyzExamplesData: XyzExample[] = [
  {
    bad: "Trained a vision-language robot model in PyTorch and made it faster.",
    good: "Accelerated vision-language robotic inference by 4.4x (820ms to 84ms) by implementing speculative decoding with distilled 150M draft models, enabling 92% real-time grasp success on novel objects."
  },
  {
    bad: "Fixed memory errors when training large language models on GPUs.",
    good: "Eliminated CUDA OOM errors on 24GB GPUs by integrating FlashAttention-2 kernels and activation checkpointing, reducing peak memory by 58.8% while retaining 98.4% downstream benchmark accuracy."
  }
];

export const emailBuilderDefaults = {
  profName: "Prof. Chelsea Finn",
  institution: "Stanford University (SAIL)",
  paperTitle: "Generalist Robot Policies via Speculative Action Tokens",
  limitation: "high autoregressive decoding latency (800ms) under multi-camera visual inputs",
  myWeaponry: "distilled speculative draft networks with FlashAttention-2 kernels cutting latency to 84ms",
  githubUrl: "https://github.com/my-username/vla-fast-inference"
};

export const proposalStructureData = [
  {
    title: "1. Abstract & Scope (250 words)",
    desc: "Clear summary of the unresolved machine learning gap, your core theoretical hypothesis, and proposed empirical benchmark validation."
  },
  {
    title: "2. State-of-the-Art & Literature Gap (500 words)",
    desc: "Rigorous critique of existing published models (ICML/NeurIPS 2024–2026), proving where baseline architectures hit memory, sample efficiency, or reasoning ceilings."
  },
  {
    title: "3. Methodology & Theoretical Formulation (800 words)",
    desc: "Mathematical objective functions, architectural design diagrams, loss functions, and dataset curation strategies."
  },
  {
    title: "4. Realistic Compute Budget (300 words)",
    desc: "Calculated GPU training hours: e.g. 1,500 A100 GPU hours for pre-training + 400 hours for ablation seeds and linear probe validations."
  },
  {
    title: "5. 3-Year Milestone Gantt Schedule",
    desc: "Explicit mapping of quarterly objectives toward Tier-1 conference submission targets (NeurIPS in May, ICLR in Sept, ICML in Jan)."
  }
];
