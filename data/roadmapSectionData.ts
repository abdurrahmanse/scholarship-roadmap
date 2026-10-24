import { GpuTactic, DeliverableAuditItem, NavAnchorItem } from "./types";

export const roadmapNavAnchors: NavAnchorItem[] = [
  { id: "steps-pipeline", label: "7-Phase Pipeline", count: "14 Steps" },
  { id: "gpu-blueprint", label: "Zero-Budget GPU Blueprint", count: "3 Tactics" },
  { id: "deliverables-audit", label: "Deliverables Audit", count: "6 Items" }
];

export const roadmapMetricsData = [
  { label: "Structured Phases", value: "7 Phases" },
  { label: "Actionable Steps", value: "14 Deep Steps" },
  { label: "Target Scope", value: "PhD & MS Thesis" }
];

export const gpuTacticsData: GpuTactic[] = [
  {
    title: "1. Parameter-Efficient Fine-Tuning (PEFT / QLoRA)",
    desc: "Train billion-parameter foundation models on consumer or single GPU setups using 4-bit NormalFloat quantization, frozen base weights, and low-rank LoRA adapter matrices.",
    code: "from peft import LoraConfig, get_peft_model\nmodel = get_peft_model(base_model, LoraConfig(r=16, lora_alpha=32))",
    benefit: "Saves 70%+ VRAM"
  },
  {
    title: "2. Free GPU Quota Orchestration",
    desc: "Chain Google Colab Free (T4 16GB), Kaggle GPU (30 hrs/wk of dual T4), and Lightning AI free credits to execute baseline verification runs without paying out-of-pocket.",
    code: "kaggle kernels push -p ./src\nwandb sync ./wandb/latest-run",
    benefit: "Zero compute cost"
  },
  {
    title: "3. Small-Scale Benchmark Ablations",
    desc: "Top conference workshops (NeurIPS, ICLR) value rigorous hypotheses over raw parameter scale. Conduct ablation studies on TinyImageNet, CIFAR-100, or distilled 1B language models.",
    code: "python train.py --dataset tiny-imagenet --seeds 1 2 3 --ablate_norm",
    benefit: "Accepted at top venues"
  }
];

export const deliverableAuditData: DeliverableAuditItem[] = [
  {
    title: "Public Citable arXiv Preprint",
    phase: "Phase 1",
    desc: "Peer-reviewed workshop paper or arXiv submission with open Hugging Face / GitHub links."
  },
  {
    title: "Clean PyTorch Codebase with Weights",
    phase: "Phase 1",
    desc: "Modular OOP repository, seed reproducibility, environment.yml, and demo weights."
  },
  {
    title: "De-Biased CSRankings Faculty Spreadsheet",
    phase: "Phase 2",
    desc: "List of 25–35 targeted professors categorized into Reach, Target, and Safe tiers."
  },
  {
    title: "Academic 2-Page LaTeX CV",
    phase: "Phase 3",
    desc: "Awesome-CV format with clickable links, no photos, and Google XYZ achievement bullets."
  },
  {
    title: "Customized 1,000-Word Statement of Purpose",
    phase: "Phase 3",
    desc: "5-movement narrative naming specific prospective faculty members and current grants."
  },
  {
    title: "3 Signed Professor Recommendation Letters",
    phase: "Phase 4",
    desc: "Equipped with personalized brag sheets and submitted before December 1 priority deadlines."
  }
];
