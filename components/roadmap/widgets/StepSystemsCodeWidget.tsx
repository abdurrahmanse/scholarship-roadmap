"use client";

import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Cpu,
  Zap,
  Layers,
  Sparkles,
  Server,
  FileCode,
  Gauge
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface CodeTab {
  id: string;
  label: string;
  fileName: string;
  language: string;
  description: string;
  code: string;
  highlights: string[];
}

const systemsTabsData: CodeTab[] = [
  {
    id: "ddp",
    label: "PyTorch DDP Init",
    fileName: "distributed_trainer.py",
    language: "python",
    description: "Production Distributed Data Parallel (DDP) initialization across multi-GPU nodes with NCCL backend.",
    highlights: ["Backend NCCL", "torch.cuda.set_device", "DistributedDataParallel"],
    code: `import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

def setup_distributed():
    """Initializes the distributed process group with NCCL backend."""
    dist.init_process_group(backend="nccl")
    local_rank = int(os.environ["LOCAL_RANK"])
    torch.cuda.set_device(local_rank)
    return local_rank

def wrap_model(model: torch.nn.Module, local_rank: int) -> DDP:
    """Wraps model in DDP with gradient bucket synchronization."""
    model = model.to(local_rank)
    return DDP(
        model, 
        device_ids=[local_rank], 
        output_device=local_rank,
        find_unused_parameters=False
    )`
  },
  {
    id: "amp",
    label: "AMP & Memory Profiling",
    fileName: "engine_amp.py",
    language: "python",
    description: "Automatic Mixed Precision (bfloat16) training loop with Gradient Scaling and CUDA memory telemetry.",
    highlights: ["torch.amp.autocast", "GradScaler", "memory_allocated"],
    code: `import torch
from torch.amp import autocast, GradScaler

scaler = GradScaler("cuda")

def training_step(model, optimizer, data, targets):
    optimizer.zero_grad(set_to_none=True) # Saves VRAM bandwidth
    
    with autocast("cuda", dtype=torch.bfloat16):
        predictions = model(data)
        loss = criterion(predictions, targets)
        
    scaler.scale(loss).backward()
    scaler.unscale_(optimizer)
    torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
    scaler.step(optimizer)
    scaler.update()
    
    # Track VRAM consumption
    peak_vram_gb = torch.cuda.max_memory_allocated() / 1e9
    return loss.item(), peak_vram_gb`
  },
  {
    id: "hydra",
    label: "Hydra Config Management",
    fileName: "train_hydra.py",
    language: "python",
    description: "Hierarchical YAML configuration with Hydra to eliminate hardcoded hyperparameters in research code.",
    highlights: ["@hydra.main", "DictConfig", "Reproducible CLI"],
    code: `import hydra
from omegaconf import DictConfig, OmegaConf
import wandb

@hydra.main(version_base=None, config_path="configs", config_name="train")
def main(cfg: DictConfig) -> None:
    print(OmegaConf.to_yaml(cfg))
    
    # Initialize experiment telemetry
    wandb.init(
        project=cfg.experiment.project_name,
        name=f"{cfg.model.architecture}_{cfg.optimizer.lr}",
        config=OmegaConf.to_container(cfg, resolve=True)
    )
    
    train_model(cfg)

if __name__ == "__main__":
    main()`
  },
  {
    id: "reproducibility",
    label: "Deterministic Seed Harness",
    fileName: "seed_control.py",
    language: "python",
    description: "Deterministic seeding across Python, NumPy, PyTorch, and cuDNN to guarantee exact review reproducibility.",
    highlights: ["torch.manual_seed", "cudnn.deterministic", "Zero Flakiness"],
    code: `import os
import random
import numpy as np
import torch

def set_seed(seed: int = 42) -> None:
    """Enforces 100% deterministic execution for peer review reproduction."""
    random.seed(seed)
    os.environ["PYTHONHASHSEED"] = str(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed_all(seed)
    
    torch.backends.cudnn.deterministic = True
    torch.backends.cudnn.benchmark = False
    print(f"Deterministic seed locked: {seed}")`
  }
];

export function StepSystemsCodeWidget() {
  const [activeTabId, setActiveTabId] = useState("ddp");
  const [copied, setCopied] = useState(false);

  const activeTab = systemsTabsData.find((t) => t.id === activeTabId) || systemsTabsData[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#090d18] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              Step 0.2 Interactive Systems Console
            </span>
            <h4 className="text-base sm:text-lg font-heading font-bold text-white">
              Production PyTorch Research Codebase Architecture
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="cyan" size="sm">
            Zero-Notebook Standard
          </Badge>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            PyTorch 2.x • CUDA 12
          </span>
        </div>
      </div>

      {/* Engineering Benchmarks Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5 relative z-10">
        <div className="p-3 rounded-xl bg-[#0f1422] border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Throughput</div>
            <div className="text-xs font-bold text-white truncate">Linear DDP Scaling</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f1422] border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
            <Gauge className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase">VRAM Efficiency</div>
            <div className="text-xs font-bold text-white truncate">-65% via bfloat16</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f1422] border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Configs</div>
            <div className="text-xs font-bold text-white truncate">Modular Hydra YAML</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f1422] border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <Server className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Cluster Ready</div>
            <div className="text-xs font-bold text-white truncate">Slurm / Multi-GPU</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3 scrollbar-none relative z-10">
        {systemsTabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTabId(tab.id);
              setCopied(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
              activeTabId === tab.id
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-950"
                : "bg-[#0f1422] text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200"
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Code Editor Container */}
      <div className="rounded-xl border border-white/10 bg-[#060910] overflow-hidden relative z-10 shadow-2xl">
        {/* Editor Title Bar */}
        <div className="px-4 py-2.5 bg-[#0f1422] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-slate-300 font-semibold">
              {activeTab.fileName}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#090d16] hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed bg-[#060910]/95">
          <pre className="selection:bg-cyan-900 selection:text-cyan-200">
            <code>{activeTab.code}</code>
          </pre>
        </div>

        {/* Code Sub-footer with Contextual Badges */}
        <div className="px-4 py-2.5 bg-[#0c101d] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <p className="text-slate-400 text-[11px] leading-tight">
            {activeTab.description}
          </p>
          <div className="flex items-center gap-1.5">
            {activeTab.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Systems Engineering Standard Callout */}
      <div className="mt-4 p-3.5 rounded-xl bg-[#0f1422] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300 relative z-10">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-white">Why Faculty Prioritize This: </strong>
          Advisors do not have time to teach incoming PhD students how to launch multi-GPU jobs or fix OOM errors. Demonstrating a modular PyTorch repository with Hydra and DDP proves you can produce research deliverables from Day 1.
        </p>
      </div>
    </div>
  );
}
