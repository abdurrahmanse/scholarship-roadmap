import { RoadmapStep } from "./types";

export const stepsData: RoadmapStep[] = [
  // ==========================================
  // PHASE 0: Math, Code & Compute Foundations
  // ==========================================
  {
    id: "step-0-1",
    phaseId: "phase-0",
    stepNumber: "0.1",
    title: "Mathematical Foundations & Theoretical Diagnostic",
    shortTitle: "Math Foundations",
    subtitle: "Audit your core linear algebra, multivariable calculus, probability, and optimization skills",
    duration: "6–8 Weeks",
    priority: "Crucial",
    keyObjective: "Attain the theoretical depth needed to formulate custom loss functions, derive gradients, and understand convergence proofs in AI literature.",
    description: "Top AI/ML research groups will not accept candidates who treat deep learning as an empirical black box. You must demonstrate mathematical intuition in matrix factorization, vector calculus, Bayesian probability, and non-convex gradient descent dynamics.",
    checklist: [
      {
        id: "c-0-1-1",
        task: "Linear Algebra Mastery",
        detail: "Understand Spectral Decomposition, Singular Value Decomposition (SVD), Positive Semi-Definite (PSD) matrices, and matrix norms (Frobenius, Spectral)."
      },
      {
        id: "c-0-1-2",
        task: "Multivariate Calculus & Vector Derivatives",
        detail: "Derive Jacobians, Hessians, matrix differentials, and understand computational graph backpropagation by hand."
      },
      {
        id: "c-0-1-3",
        task: "Probability & Mathematical Statistics",
        detail: "Master Maximum Likelihood Estimation (MLE), Maximum A Posteriori (MAP), KL-Divergence, Jensen-Shannon Divergence, and Markov Chain Monte Carlo (MCMC)."
      },
      {
        id: "c-0-1-4",
        task: "Optimization Theory",
        detail: "Study Convex optimization, Karush-Kuhn-Tucker (KKT) conditions, Stochastic Gradient Descent (SGD) with momentum, and AdamW convergence dynamics."
      }
    ],
    proTips: [
      "Review Gilbert Strang's 'Linear Algebra and Learning from Data' and Boyd & Vandenberghe's 'Convex Optimization'.",
      "When writing papers or your Statement of Purpose, use standard mathematical notation (boldface vectors, calligraphic sets) rather than code variable names."
    ],
    commonPitfalls: [
      "Relying solely on high-level Python libraries without understanding the analytical derivations behind loss surfaces.",
      "Assuming a high GPA in generic engineering math compensates for an absence of advanced proof-based analysis or probability coursework."
    ],
    deliverable: "Completed self-audit solving 20 complex proof-based problems in matrix calculus, KL divergence minimization, and gradient derivations.",
    resources: [
      {
        title: "Mathematics for Machine Learning (Deisenroth et al.)",
        url: "https://mml-book.github.io/",
        type: "paper",
        description: "Free digital book covering the core linear algebra and calculus necessary for modern ML."
      },
      {
        title: "Matrix Calculus for Deep Learning (Parr & Howard)",
        url: "https://explained.ai/matrix-calculus/",
        type: "guide",
        description: "Comprehensive step-by-step tutorial on computing vector/matrix derivatives."
      }
    ]
  },
  {
    id: "step-0-2",
    phaseId: "phase-0",
    stepNumber: "0.2",
    title: "Deep Learning Systems & Production-Grade Engineering",
    shortTitle: "Systems & PyTorch Code",
    subtitle: "Transition from basic script-writing to scalable, modular, distributed PyTorch and JAX codebases",
    duration: "8 Weeks",
    priority: "Crucial",
    keyObjective: "Build the ability to implement seminal models from scratch, configure multi-GPU distributed training, and write clean, reproducible code that professors can immediately integrate into their labs.",
    description: "Professors do not want students who need hand-holding to set up training runs. You must write modular object-oriented PyTorch or JAX code, manage experiment tracking (WandB), build modular configs (Hydra), and understand CUDA memory management.",
    checklist: [
      {
        id: "c-0-2-1",
        task: "Idiomatic PyTorch & Custom Autograd",
        detail: "Write custom torch.autograd.Function classes with explicit forward and backward passes."
      },
      {
        id: "c-0-2-2",
        task: "GPU Memory Management & Efficiency",
        detail: "Master mixed-precision training (torch.cuda.amp / bfloat16), gradient checkpointing, and memory profiling via torch.cuda.memory_allocated()."
      },
      {
        id: "c-0-2-3",
        task: "Distributed Multi-GPU Training",
        detail: "Implement DistributedDataParallel (DDP), Fully Sharded Data Parallel (FSDP), and understand DeepSpeed ZeRO stages 1-3."
      },
      {
        id: "c-0-2-4",
        task: "Clean Project Configuration & Logging",
        detail: "Standardize codebases using Hydra for hierarchical YAML configs and Weights & Biases (WandB) for artifact and metric tracking."
      }
    ],
    proTips: [
      "Re-implement a fundamental paper from scratch (e.g., 'Attention Is All You Need' or 'DDPM: Denoising Diffusion Probabilistic Models') in pure PyTorch without relying on high-level wrapper libraries.",
      "Profile your CUDA kernels or PyTorch code using PyTorch Profiler or NVIDIA Nsight Systems to show faculty you care about throughput."
    ],
    commonPitfalls: [
      "Using messy single-file Jupyter notebooks for research projects instead of modular, CLI-driven repositories.",
      "Ignoring deterministic seeding (`torch.manual_seed`), making it impossible for reviewers or faculty to reproduce your baseline tables."
    ],
    deliverable: "A public, modular PyTorch repository implementing a modern vision or language architecture with DDP, mixed precision, and Hydra config management.",
    codeSnippet: {
      language: "python",
      caption: "Clean Distributed PyTorch DDP Initialization",
      code: `import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

def setup_distributed():
    dist.init_process_group(backend="nccl")
    local_rank = int(os.environ["LOCAL_RANK"])
    torch.cuda.set_device(local_rank)
    return local_rank

def wrap_model(model, local_rank):
    model = model.to(local_rank)
    return DDP(model, device_ids=[local_rank], output_device=local_rank)`
    },
    resources: [
      {
        title: "The Annotated Transformer (Harvard NLP)",
        url: "https://nlp.seas.harvard.edu/annotated-transformer/",
        type: "guide",
        description: "Line-by-line PyTorch implementation of the original Transformer architecture."
      },
      {
        title: "PyTorch Distributed Training Tutorials",
        url: "https://pytorch.org/tutorials/intermediate/ddp_tutorial.html",
        type: "official",
        description: "Official guide to scaling PyTorch models across multiple GPUs and nodes."
      }
    ]
  },
  {
    id: "step-0-3",
    phaseId: "phase-0",
    stepNumber: "0.3",
    title: "Direct PhD vs. Thesis Master's Decision Matrix",
    shortTitle: "Degree Route Selection",
    subtitle: "Choose between applying directly for a doctoral degree or pursuing a research Master's based on funding realities",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Avoid the expensive trap of unfunded taught Master's degrees by aligning your profile with the proper 100% funded research trajectory.",
    description: "In Computer Science, North American universities award the vast majority of their funding (tuition waivers and \$30k–\$50k stipends) to PhD students. Students graduating from a 4-year undergraduate degree can enter a PhD directly without needing a prior Master's degree.",
    checklist: [
      {
        id: "c-0-3-1",
        task: "Evaluate Direct-Entry PhD Viability",
        detail: "If your goal is cutting-edge AI research and you have prior thesis experience or preprints, apply directly to US/Canadian PhD programs to secure guaranteed 5-year funding."
      },
      {
        id: "c-0-3-2",
        task: "Filter for Thesis Master's Only",
        detail: "If you need more research runway before a PhD, apply exclusively to thesis-based MS programs in Canada (Mila, UofT, UBC, Alberta), Germany, or Switzerland where research assistantships exist."
      },
      {
        id: "c-0-3-3",
        task: "Eliminate Taught / Professional MS Traps",
        detail: "Strike out MEng, Professional MS, or Coursework MS programs unless backed by external flagships (e.g., Fulbright or DAAD), as they rarely provide tuition waivers or RA stipends."
      }
    ],
    proTips: [
      "In the US, direct-entry PhD students who decide they do not want to continue into academia after 2 years can typically 'master out', receiving a fully funded MS degree with zero student debt.",
      "In Europe (ELLIS, Max Planck, ETH Zurich), a completed Master's degree is legally mandatory before beginning a formal PhD."
    ],
    commonPitfalls: [
      "Spending \$80,000+ of family savings on an unfunded coursework MS in the hope that you can 'find an RA position after arriving'—top labs usually reserve RA positions for admitted PhDs.",
      "Assuming a PhD binds you to academia forever; 80%+ of top AI PhD graduates transition directly to lucrative industry research roles (Google DeepMind, Meta FAIR, Anthropic)."
    ],
    deliverable: "Clear strategic decision document locking in either 'Direct PhD' (US/Canada focus) or 'Funded Thesis MS' (Canada/Europe focus).",
    resources: [
      {
        title: "A Field Guide to the Machine Learning PhD (Tim Dettmers)",
        url: "https://timdettmers.com/2018/11/26/phd-application-guide/",
        type: "guide",
        description: "Essential roadmap on applying to AI PhD programs, direct entry, and advisor selection."
      }
    ]
  },
  {
    id: "step-0-4",
    phaseId: "phase-0",
    stepNumber: "0.4",
    title: "Defining Your AI/ML Research Problem & Technical Niche",
    shortTitle: "Research Problem Niche",
    subtitle: "Differentiate yourself from thousands of generic applicants by defining a concrete, unsolved technical bottleneck",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Formulate a sharp research vision that allows admissions committees to match you immediately with prospective grant-funded faculty.",
    description: "Generic statements like 'I love Artificial Intelligence' lead to immediate rejection. Faculty look for applicants who can pinpoint real theoretical or empirical bottlenecks in active research subfields.",
    checklist: [
      {
        id: "c-0-4-1",
        task: "Survey Top 2024–2026 Proceedings",
        detail: "Read the Oral and Spotlight papers from recent NeurIPS, ICML, ICLR, and CVPR proceedings in your subfield."
      },
      {
        id: "c-0-4-2",
        task: "Identify Open Gaps & Trade-Offs",
        detail: "Focus on unresolved trade-offs: inference-time efficiency, sample complexity, out-of-distribution robustness, context-length scaling, or sim-to-real transfer."
      },
      {
        id: "c-0-4-3",
        task: "Synthesize a 1-Sentence Problem Formulation",
        detail: "Draft your research hypothesis: Subfield + Target Architecture + Specific Bottleneck + Proposed Methodological Angle."
      }
    ],
    proTips: [
      "Look at the 'Limitations' and 'Future Work' sections of spotlight papers from last year's ICLR/NeurIPS—they explicitly outline open problems that top PIs are currently writing grant proposals for.",
      "Focus on intersections: e.g., Combining Mechanistic Interpretability with RLHF, or 3D Gaussian Splatting with Physics-Informed Neural Networks."
    ],
    commonPitfalls: [
      "Choosing a problem that requires 10,000 H100 GPUs (like pre-training a 70B parameter frontier model from scratch) if you have limited compute. Focus on algorithmic efficiency, reasoning, or novel architectures.",
      "Claiming you are equally passionate about 6 unrelated subfields (e.g., NLP, Computer Vision, Medical Imaging, Robotics, and Quantum ML)—admissions committees view this as a lack of focus."
    ],
    deliverable: "A 1-page written Research Problem Statement specifying the hypothesis, prior limitations, proposed technique, and evaluation benchmark.",
    resources: [
      {
        title: "Papers with Code - SOTA Benchmarks",
        url: "https://paperswithcode.com/",
        type: "database",
        description: "Track state-of-the-art benchmarks and open challenges across every machine learning subfield."
      }
    ]
  },
  {
    id: "step-0-5",
    phaseId: "phase-0",
    stepNumber: "0.5",
    title: "Compute & Hardware Strategy for Low-Resource Researchers",
    shortTitle: "Compute & Hardware Strategy",
    subtitle: "Overcome GPU access limitations and build a reliable pipeline for running reproducible benchmarks",
    duration: "2 Weeks",
    priority: "Recommended",
    keyObjective: "Set up a low-cost, cloud-backed development and experimental workflow that delivers verified benchmark tables without blowing a budget.",
    description: "You do not need a personal \$30,000 GPU workstation to publish competitive AI research. By leveraging free cloud tiers, student grants, and spot GPU instances, you can run rigorous experiments on a minimal budget.",
    checklist: [
      {
        id: "c-0-5-1",
        task: "Leverage Free Tier Compute",
        detail: "Maximize Kaggle Kernels (30 hours/week of free NVIDIA T4/P100 GPUs) and Google Colab free GPU instances."
      },
      {
        id: "c-0-5-2",
        task: "Set Up On-Demand Cloud Spot Instances",
        detail: "Open accounts on Lambda Labs, RunPod, or Vast.ai to rent on-demand NVIDIA A10G or A100 GPUs for final 24-to-48 hour training runs."
      },
      {
        id: "c-0-5-3",
        task: "Apply for Cloud Research Grants",
        detail: "Apply for Google Cloud Research Credits or AWS Cloud Credit for Research programs through your local university mentors."
      },
      {
        id: "c-0-5-4",
        task: "Implement Automated Spot Checkpointing",
        detail: "Write automated checkpoint saving to S3/Google Drive so pre-emptible spot instances can resume training without losing epochs."
      }
    ],
    proTips: [
      "Debug and verify your model on small synthetic datasets or single batches locally on your laptop CPU/Mac MPS before paying a cent for cloud GPUs.",
      "Small-scale models (e.g., 100M–500M parameters) evaluated rigorously over 5 distinct random seeds are vastly more respected by faculty than a single non-reproducible run of an 8B model."
    ],
    commonPitfalls: [
      "Leaving cloud GPU instances running idle overnight without setting automated shutdown scripts.",
      "Assuming that only massive compute generates acceptable research; top conferences routinely award Best Paper awards to clever theoretical or small-scale algorithmic contributions."
    ],
    deliverable: "Configured SSH keys and automated checkpointing scripts linked to a cloud GPU provider (RunPod/Lambda Labs) with active test training.",
    resources: [
      {
        title: "Google Cloud Research Credits Program",
        url: "https://cloud.google.com/edu/researchers",
        type: "official",
        description: "Apply for up to $5,000 in GCP compute credits for academic research projects."
      },
      {
        title: "RunPod GPU Cloud",
        url: "https://www.runpod.io/",
        type: "tool",
        description: "Affordable on-demand and spot NVIDIA GPU cloud rental."
      }
    ]
  },

  // ==============================================================
  // PHASE 1: Publication Strategy & Open-Source Artifacts
  // ==============================================================
  {
    id: "step-1-1",
    phaseId: "phase-1",
    stepNumber: "1.1",
    title: "Fast-Track AI Publication Strategy (Workshops, Tiny Papers & arXiv)",
    shortTitle: "Publication Fast-Track",
    subtitle: "Navigate peer review cycles and release verifiable preprints that validate your scientific ability",
    duration: "16 Weeks",
    priority: "Crucial",
    keyObjective: "Secure at least one citable, peer-reviewed workshop paper or verified arXiv preprint in an established AI subfield before application deadlines.",
    description: "In machine learning admissions, an applicant with a citable paper or well-received preprint is immediately placed in the top 5% review pile. Understand how conference workshop tracks offer the fastest, highest-yield validation.",
    checklist: [
      {
        id: "c-1-1-1",
        task: "Target Top Conference Workshop Deadlines",
        detail: "Submit 4-to-6 page extended abstracts to workshops at NeurIPS, ICML, ICLR, or CVPR (review cycles are typically 4–6 weeks)."
      },
      {
        id: "c-1-1-2",
        task: "Leverage the ICLR Tiny Papers Track",
        detail: "Consider the ICLR Tiny Papers track (2-page format) for clear, focused algorithmic or empirical discoveries."
      },
      {
        id: "c-1-1-3",
        task: "Execute the arXiv Preprint Release",
        detail: "Upload your finalized draft to arXiv.org under CS.LG, CS.AI, or CS.CV to establish timestamped priority and a permanent citable DOI."
      },
      {
        id: "c-1-1-4",
        task: "Solicit Constructive Feedback on OpenReview",
        detail: "Engage transparently with reviewer comments and upload revised PDF versions showing scientific maturity."
      }
    ],
    proTips: [
      "Writing a high-quality empirical study or a rigorous benchmark comparing 10 open-source models under consistent evaluation metrics is one of the highest-probability workshop paper strategies.",
      "Always link the arXiv preprint URL directly in the header of your CV and in your cold outreach emails to PIs."
    ],
    commonPitfalls: [
      "Waiting for 18-month journal review cycles to complete before applying to graduate school; computer science relies almost exclusively on conference deadlines.",
      "Uploading low-quality, half-baked drafts to arXiv—remember that preprints are permanent and faculty will read your text."
    ],
    deliverable: "An accepted workshop paper or an active, citable arXiv.org preprint with clean mathematical formulation and benchmark figures.",
    resources: [
      {
        title: "arXiv.org - Computer Science Repository",
        url: "https://arxiv.org/corr",
        type: "database",
        description: "The primary global preprint server for modern AI and Computer Science research."
      },
      {
        title: "OpenReview.net",
        url: "https://openreview.net/",
        type: "database",
        description: "Public peer review platform hosting submissions for NeurIPS, ICLR, and leading AI venues."
      }
    ]
  },
  {
    id: "step-1-2",
    phaseId: "phase-1",
    stepNumber: "1.2",
    title: "Open-Source Artifacts: GitHub, Hugging Face & Interactive Demos",
    shortTitle: "Open-Source Portfolio",
    subtitle: "Package your research into clean code repositories and live web demos that faculty can test in seconds",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Demonstrate exceptional software craftsmanship and open science reproducibility through GitHub and Hugging Face assets.",
    description: "Faculty routinely click GitHub and Hugging Face links while evaluating applications. A clean, starred repository with clear setup instructions and model checkpoints acts as irrefutable proof of your coding competence.",
    checklist: [
      {
        id: "c-1-2-1",
        task: "Build the Gold-Standard GitHub README",
        detail: "Include a clear architecture diagram, installation steps, pre-trained weight download links, and one-line evaluation bash scripts."
      },
      {
        id: "c-1-2-2",
        task: "Upload Checkpoints & Datasets to Hugging Face",
        detail: "Host fine-tuned model checkpoints and formatted datasets on the Hugging Face Hub with detailed model cards."
      },
      {
        id: "c-1-2-3",
        task: "Deploy an Interactive Gradio Web Demo",
        detail: "Build a zero-installation Gradio or Streamlit web demo on Hugging Face Spaces allowing anyone to test model inputs in real time."
      },
      {
        id: "c-1-2-4",
        task: "Disseminate on Technical Communities",
        detail: "Share your release on Reddit r/MachineLearning, Twitter/X, and technical Discord communities to gain organic engagement and stars."
      }
    ],
    proTips: [
      "Include a quick-start Google Colab button badge at the top of your GitHub README allowing professors to run your inference with a single click.",
      "Add a 'Citation' BibTeX block at the bottom of your README so other researchers can cite your repository."
    ],
    commonPitfalls: [
      "Leaving hardcoded local file paths (e.g., `C:/Users/name/Desktop/data`) in your public code, breaking reproducibility for everyone else.",
      "Not providing a clean `environment.yml` or `requirements.txt` with pinned library versions."
    ],
    deliverable: "A polished public GitHub repository (with documentation and reproducible evaluation script) + active Hugging Face Space demo.",
    resources: [
      {
        title: "Hugging Face Spaces - Build & Host ML Demos",
        url: "https://huggingface.co/spaces",
        type: "tool",
        description: "Host machine learning applications and interactive Gradio apps for free."
      },
      {
        title: "Papers with Code - Official Reproducibility Checklist",
        url: "https://github.com/paperswithcode/reproducing",
        type: "guide",
        description: "Standards and guidelines for building reproducible machine learning codebases."
      }
    ]
  },
  {
    id: "step-1-3",
    phaseId: "phase-1",
    stepNumber: "1.3",
    title: "Standardized Testing Strategy (GRE Realities & TA English Benchmarks)",
    shortTitle: "Standardized Testing",
    subtitle: "Satisfy mandatory spoken English requirements for Teaching Assistantships while navigating GRE waivers",
    duration: "6 Weeks",
    priority: "Crucial",
    keyObjective: "Achieve the strict spoken English test thresholds required by US/Canadian state laws for funded Teaching Assistantships (GTA) while skipping unnecessary exams.",
    description: "Most top Computer Science departments have abolished the GRE, but spoken English requirements remain legally enforced. Understanding this distinction prevents wasted prep time and protects your first-year funding.",
    checklist: [
      {
        id: "c-1-3-1",
        task: "Audit GRE Requirements by Program",
        detail: "Verify which target CS departments are test-blind. Strike out GRE preparation for MIT, Stanford, Berkeley, CMU, UW, UIUC, and Michigan unless a specific safe school requires it."
      },
      {
        id: "c-1-3-2",
        task: "Lock in the IELTS Speaking >= 8.0 Benchmark",
        detail: "If taking IELTS Academic, focus heavily on the Speaking section to hit Band 8.0 (Min 7.5 overall) for automatic graduate teaching eligibility."
      },
      {
        id: "c-1-3-3",
        task: "Lock in the TOEFL Speaking >= 26/30 Benchmark",
        detail: "If taking TOEFL iBT, target Speaking >= 26/30 (Min 100 overall) to avoid mandatory remedial ESL classes and secure GTA appointment."
      },
      {
        id: "c-1-3-4",
        task: "Request English Medium of Instruction (EMI) Waivers",
        detail: "If your undergraduate degree was fully taught in English, check if target universities grant automatic language exam exemptions."
      }
    ],
    proTips: [
      "If your TOEFL Speaking is 24 or 25, or IELTS Speaking is 7.5, you may be restricted solely to Graduate Research Assistantships (GRA), meaning if your professor loses grant funding, you cannot fall back on department teaching pay.",
      "Practice spontaneous technical explanation: describing a binary search tree or neural backprop in 60 seconds without filler words."
    ],
    commonPitfalls: [
      "Spending 4 months studying for the GRE at the expense of writing papers or code, only to apply to departments that do not even look at GRE scores.",
      "Assuming high Reading/Writing scores compensate for a sub-26 Speaking score on the TOEFL."
    ],
    deliverable: "Official test report form meeting or exceeding the minimum teaching assistantship spoken benchmarks (TOEFL Speaking >= 26 or IELTS Speaking >= 8.0).",
    resources: [
      {
        title: "ETS TOEFL iBT Official Test Prep",
        url: "https://www.ets.org/toefl.html",
        type: "official",
        description: "Official TOEFL exam specifications, practice materials, and score delivery."
      },
      {
        title: "IELTS Academic Official Resources",
        url: "https://www.ielts.org/",
        type: "official",
        description: "Official band score descriptors and speaking assessment rubrics."
      }
    ]
  },

  // ==============================================================
  // PHASE 2: Lab Targeting & Supervisor Cold Outreach
  // ==============================================================
  {
    id: "step-2-1",
    phaseId: "phase-2",
    stepNumber: "2.1",
    title: "Mapping Funded AI Laboratories via CSRankings.org & Grant Databases",
    shortTitle: "CSRankings Lab Mapping",
    subtitle: "Identify institutions and laboratories holding active, unspent funding in your specific AI subfield",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Build a comprehensive database of prospective PIs who are actively publishing at top-tier venues and have grant capital to hire students.",
    description: "Generic university brand names do not reflect AI research strength. A top-10 overall university might have a weak AI lab, while a top-40 university might host a world-renowned pioneer with millions in grant funding.",
    checklist: [
      {
        id: "c-2-1-1",
        task: "Filter CSRankings.org by Subfield",
        detail: "Select Artificial Intelligence, Machine Learning, Computer Vision, and NLP. Filter by regional zones (US, Canada, Europe, Asia)."
      },
      {
        id: "c-2-1-2",
        task: "Audit NIH RePORTER & NSF Award Search",
        detail: "Search US grant databases for active awards funded through 2026–2030 to confirm the lab has liquid capital."
      },
      {
        id: "c-2-1-3",
        task: "Examine European CORDIS & ERC Grants",
        detail: "Search for ERC Starting Grants and Horizon Europe AI consortia—these PIs receive up to €1.5M–€2.5M and are mandated to hire salaried PhD researchers."
      },
      {
        id: "c-2-1-4",
        task: "Track Faculty Hiring Announcements",
        detail: "Monitor Twitter/X (#AcademicTwitter, #PhDPosition) and OpenReview for announcements: 'My lab is looking for 2 funded PhD students for Fall 2026'."
      }
    ],
    proTips: [
      "Look at the acknowledgments section of recent papers from target labs to see who funds them (e.g., 'This research was supported by NSF Award #XXXXXX or a Google Research Scholar Award').",
      "Check the lab's current PhD student roster on their group website—if their senior students are graduating this year, the PI will have open funded desks."
    ],
    commonPitfalls: [
      "Applying to famous senior professors whose last paper was published 5 years ago and who have transitioned into administrative dean roles with no active lab.",
      "Relying on US News or QS general rankings which are skewed by medical and law schools rather than computer science output."
    ],
    deliverable: "A structured tracking spreadsheet containing 35+ individual professors categorized into 3 Dream / 5 Target / 2 Safe institutional tiers.",
    resources: [
      {
        title: "CSRankings: Computer Science Rankings",
        url: "https://csrankings.org/",
        type: "database",
        description: "Metrics-based ranking of top computer science institutions by publication volume in premier venues."
      },
      {
        title: "NSF Award Search",
        url: "https://www.nsf.gov/awardsearch/",
        type: "database",
        description: "Official National Science Foundation database of active academic research grants in the US."
      }
    ]
  },
  {
    id: "step-2-2",
    phaseId: "phase-2",
    stepNumber: "2.2",
    title: "Prioritizing Junior (Assistant) Professors with Startup Packages",
    shortTitle: "Junior Faculty Strategy",
    subtitle: "Maximize your admission probability by targeting tenure-track assistant professors with unspent startup millions",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Focus your outreach on faculty who have the highest urgency and budget to hire doctoral students immediately.",
    description: "Tenure-track Assistant Professors in Computer Science receive \$500,000 to \$1,500,000 in startup funding from their universities when hired. They must publish extensively and graduate doctoral students to achieve tenure, making them the most motivated recruiters in academia.",
    checklist: [
      {
        id: "c-2-2-1",
        task: "Identify Faculty in Years 1 to 4 of Appointment",
        detail: "Look for Assistant Professors who joined departments within the past 1–4 years from top doctoral or postdoc labs."
      },
      {
        id: "c-2-2-2",
        task: "Analyze Their Graduate Alma Mater & Pedigree",
        detail: "Junior faculty often maintain co-authorships and collaborative compute sharing with their former PhD advisors at MIT, Stanford, Berkeley, or CMU."
      },
      {
        id: "c-2-2-3",
        task: "Verify Active Lab Compute Resources",
        detail: "Confirm that the assistant professor has secured dedicated GPU nodes or industry cloud sponsorship (e.g., NVIDIA Academic Hardware Grants)."
      }
    ],
    proTips: [
      "Junior faculty read their own emails and frequently answer cold inquiries, unlike senior directors whose inboxes are managed by departmental staff.",
      "Assistant professors are often far more hands-on, meeting with their PhD students multiple times per week and actively coding and debugging alongside them."
    ],
    commonPitfalls: [
      "Assuming that working for a famous senior professor is automatically better—famous PIs often meet their PhD students once every 3 months and leave mentorship to postdocs.",
      "Targeting professors whose research direction has shifted away from your specific interests."
    ],
    deliverable: "Curated shortlist of 15–20 high-potential Assistant Professors who have joined target CS departments within the past 3 years.",
    resources: [
      {
        title: "The Assistant Professor Hiring Guide",
        url: "https://cra.org/",
        type: "guide",
        description: "Computing Research Association (CRA) insights into academic faculty hiring and startup packages."
      }
    ]
  },
  {
    id: "step-2-3",
    phaseId: "phase-2",
    stepNumber: "2.3",
    title: "The 5-Point AI Cold Email Outreach Campaign",
    shortTitle: "AI Cold Outreach Campaign",
    subtitle: "Execute personalized, technical email outreach that catches the attention of busy faculty in under 10 seconds",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Secure positive responses and informal Zoom screening calls from prospective supervisors prior to formal application submission.",
    description: "Faculty receive dozens of generic emails daily. Your email must immediately prove that you have read their work, understand their technical trade-offs, and possess the concrete skills to make progress on their active grants.",
    checklist: [
      {
        id: "c-2-3-1",
        task: "Read 1 Recent Paper in Depth",
        detail: "Select a paper published in the past 12 months. Study the methodology, loss curves, ablation tables, and noted limitations."
      },
      {
        id: "c-2-3-2",
        task: "Draft the Hyper-Specific Technical Critique",
        detail: "Highlight an empirical constraint, a failure mode in edge cases, or an unexplored architectural extension."
      },
      {
        id: "c-2-3-3",
        task: "Connect Your Demonstrated Weaponry",
        detail: "State your related project, link your arXiv preprint, and provide a direct GitHub URL."
      },
      {
        id: "c-2-3-4",
        task: "Execute Outreach on Optimal Schedule",
        detail: "Send emails Tuesday through Thursday between 8:30 AM and 9:15 AM in the professor's local time zone."
      },
      {
        id: "c-2-3-5",
        task: "Send One Polite 7-Day Follow-Up",
        detail: "If no response after 7 business days, reply to the same thread with a brief 2-sentence bump."
      }
    ],
    proTips: [
      "Never paste text with mismatched fonts or background formatting from rich-text editors. Send clean, plain-text emails with clear hyperlinks.",
      "Subject line formula: `Prospective PhD Student (Fall 2026) - [Subfield, e.g. Diffusion Guidance] - [Your Full Name]`."
    ],
    commonPitfalls: [
      "Sending mass mailings with 'Dear Respected Professor' and generic praise ('I am fascinated by your esteemed work'). This results in immediate blocking.",
      "Attaching 25MB zip files containing code or certificates. Only attach a clean 2-page PDF CV and link everything else."
    ],
    deliverable: "25–35 personalized cold outreach emails sent, logged in an outreach tracker with response statuses and scheduled calls.",
    resources: [
      {
        title: "How to Email a Professor (Philip Guo, UCSD)",
        url: "https://pgbovine.net/email-professors.htm",
        type: "guide",
        description: "Classic, widely respected advice on academic email etiquette from a computer science professor."
      }
    ]
  },
  {
    id: "step-2-4",
    phaseId: "phase-2",
    stepNumber: "2.4",
    title: "Acing the Professor 15-Minute Zoom Screening Call",
    shortTitle: "PI Zoom Screening",
    subtitle: "Present your research concisely and evaluate the laboratory culture and compute resources",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Convert an informal Zoom conversation into an explicit commitment from the professor to champion your application in the departmental committee.",
    description: "When an AI professor invites you to a 15-minute call, they are assessing intellectual autonomy, clarity of thought, and interpersonal communication. You must articulate your past work with crisp scientific precision.",
    checklist: [
      {
        id: "c-2-4-1",
        task: "Prepare the 5-Slide Backup Presentation",
        detail: "Have a clean slide deck ready: Problem -> Prior Limitations -> Your Method -> Quantitative Benchmarks -> Open Questions."
      },
      {
        id: "c-2-4-2",
        task: "Practice the 3-Minute Verbal Elevator Pitch",
        detail: "Deliver a concise summary of your research trajectory without relying on slides if the professor prefers an informal dialogue."
      },
      {
        id: "c-2-4-3",
        task: "Inquire About Compute & GPU-to-Student Ratios",
        detail: "Ask: 'What does the compute setup look like for incoming students (on-prem Slurm cluster vs. cloud allocations)?'"
      },
      {
        id: "c-2-4-4",
        task: "Confirm Formal Application Endorsement",
        detail: "Close by asking: 'If I formally submit my application to the department, should I list your name as prospective advisor on the portal?'"
      }
    ],
    proTips: [
      "Test your microphone, lighting, and screen-sharing setup beforehand. Inability to share your screen smoothly makes a poor first impression on a computer science faculty member.",
      "Send a thank-you email within 4 hours summarizing key discussion points and referencing any papers or repositories mentioned during the call."
    ],
    commonPitfalls: [
      "Monopolizing the entire call with a 20-minute monologue without letting the professor speak or ask questions.",
      "Saying 'I don't know' and freezing up when asked about an experimental failure. Instead, walk through your scientific troubleshooting hypothesis."
    ],
    deliverable: "Completed screening calls resulting in positive verbal commitments from faculty to review your file during committee admissions.",
    resources: [
      {
        title: "Grad School Interview Advice (Andrej Karpathy)",
        url: "https://karpathy.github.io/",
        type: "guide",
        description: "Insights into communicating scientific concepts effectively in machine learning."
      }
    ]
  },

  // ==============================================================
  // PHASE 3: AI Graduate Dossier Engineering
  // ==============================================================
  {
    id: "step-3-1",
    phaseId: "phase-3",
    stepNumber: "3.1",
    title: "Engineering the Technical AI Statement of Purpose (SOP)",
    shortTitle: "Technical SOP Architecture",
    subtitle: "Draft a research manifesto that proves intellectual depth and precise alignment with target faculty",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Produce an academic SOP that reads like a collaborative research proposal rather than a generic undergraduate personal essay.",
    description: "The AI Statement of Purpose is reviewed by faculty members who spend an average of 90 seconds reading your document. It must quickly establish your research vision, your technical battle scars, and your exact fit with target faculty.",
    checklist: [
      {
        id: "c-3-1-1",
        task: "Structure Movement 1: The Incisive Technical Hook",
        detail: "Skip childhood stories. Begin directly with the algorithmic bottleneck or theoretical paradox driving your research."
      },
      {
        id: "c-3-1-2",
        task: "Structure Movement 2: Mathematical Foundations",
        detail: "Demonstrate formal coursework and theoretical mastery in probability, optimization, or discrete math."
      },
      {
        id: "c-3-1-3",
        task: "Structure Movement 3: In-Depth Empirical Deep-Dive",
        detail: "Dedicate 2 paragraphs to in-depth research: hypothesis, architectural roadblock, mathematical resolution, and quantitative result."
      },
      {
        id: "c-3-1-4",
        task: "Structure Movement 4: Faculty Synergy by Name",
        detail: "Explicitly name 2–3 faculty members and describe how your skillset bridges their current grant questions."
      },
      {
        id: "c-3-1-5",
        task: "Structure Movement 5: Long-Term Scientific Contribution",
        detail: "Articulate your 5-to-10 year objective (e.g., tenure-track faculty, frontier AI research scientist)."
      }
    ],
    proTips: [
      "Use boldface typography sparingly for key metrics (e.g., 'achieving a 4.2% gain on HumanEval without fine-tuning') so skim-readers catch your accomplishments immediately.",
      "Customize Section 4 for every single university—never send an SOP mentioning 'Professor X' to a different department."
    ],
    commonPitfalls: [
      "Using flowery language or cliches like 'Since the dawn of computer science, algorithms have fascinated me'.",
      "Listing courses you took without explaining the independent projects or research questions you pursued in them."
    ],
    deliverable: "Finalized 2-page (1,000–1,200 words) technical Statement of Purpose, tailored for each target institution.",
    resources: [
      {
        title: "Writing a Statement of Purpose (MIT EECS Communication Lab)",
        url: "https://mitcommlab.mit.edu/eecs/use-the-commkit/statement-of-purpose/",
        type: "guide",
        description: "Official MIT EECS guide and rubrics for writing graduate research statements."
      }
    ]
  },
  {
    id: "step-3-2",
    phaseId: "phase-3",
    stepNumber: "3.2",
    title: "Formatting the Modern LaTeX AI Academic CV",
    shortTitle: "LaTeX Academic CV",
    subtitle: "Format a clean, minimalist 2-page CV prioritizing peer-reviewed publications, preprints, and open-source stars",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Create a modern, machine-readable academic curriculum vitae that highlights your publications, open-source repositories, and technical engineering stack.",
    description: "Never use graphical, multi-column Canva templates for graduate admissions. AI admissions committees expect minimalist LaTeX typography (e.g., Awesome-CV, ModernCV) with clickable hyperlinks to papers, repositories, and models.",
    checklist: [
      {
        id: "c-3-2-1",
        task: "Header with Direct Academic Links",
        detail: "Include your name, email, GitHub URL, Google Scholar profile, Hugging Face handle, and personal academic website."
      },
      {
        id: "c-3-2-2",
        task: "Structured Publications & Preprints Section",
        detail: "List full citations with DOIs. Highlight your name in boldface and indicate whether papers are conference articles, workshops, or preprints."
      },
      {
        id: "c-3-2-3",
        task: "Open-Source Projects with Metrics",
        detail: "List repositories with GitHub star counts, brief technical descriptions, and links to interactive demos."
      },
      {
        id: "c-3-2-4",
        task: "Comprehensive Technical Stack",
        detail: "Group by: Languages (Python, C++, CUDA), Frameworks (PyTorch, JAX, Hugging Face, DeepSpeed), Systems (Slurm, Docker, Linux, Triton)."
      }
    ],
    proTips: [
      "Use the Google XYZ action-bullet formula: 'Accomplished [X], as measured by [Y], by doing [Z]'.",
      "Ensure all hyperlinks (arXiv, GitHub, Hugging Face) are styled cleanly and work correctly in PDF format."
    ],
    commonPitfalls: [
      "Including headshot photos, marital status, or full home addresses (standard in industry resumes in some countries, but strictly avoided in US/Canadian academic CVs).",
      "Using subjective rating bars like 'Python: 90%' or 'PyTorch: 5 stars'—academic CVs list concrete tools, not arbitrary percentages."
    ],
    deliverable: "Compiled 2-page LaTeX PDF Academic CV hosted publicly on your personal website and GitHub.",
    resources: [
      {
        title: "Overleaf - Academic CV Templates",
        url: "https://www.overleaf.com/gallery/tagged/cv",
        type: "tool",
        description: "Collection of clean, battle-tested LaTeX templates for academic and research resumes."
      }
    ]
  },
  {
    id: "step-3-3",
    phaseId: "phase-3",
    stepNumber: "3.3",
    title: "Securing High-Impact Letters of Recommendation (LORs)",
    shortTitle: "LOR Strategy & Brag Sheet",
    subtitle: "Equip actively publishing AI mentors with structured brag sheets to secure enthusiastic, detailed endorsements",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Obtain 3 confidential letters of recommendation from researchers who can speak in granular detail about your independence, research resilience, and technical depth.",
    description: "In AI graduate admissions, letters of recommendation carry immense weight. A letter from an actively publishing AI researcher who writes 'This student is in the top 1% of researchers I have mentored and operates at the level of a 2nd-year PhD student' guarantees serious committee evaluation.",
    checklist: [
      {
        id: "c-3-3-1",
        task: "Select Active Publishing Mentors",
        detail: "Prioritize professors who have published in top venues (NeurIPS/ICLR/CVPR/ACL) and supervised your research directly."
      },
      {
        id: "c-3-3-2",
        task: "Prepare the Recommender Brag Sheet",
        detail: "Create a 1-page summary of your contributions under their mentorship, including specific hurdles you solved and papers co-authored."
      },
      {
        id: "c-3-3-3",
        task: "Provide Deadlines & Program Table",
        detail: "Give recommenders a clean spreadsheet listing universities, program titles, exact deadlines, and portal submission links."
      },
      {
        id: "c-3-3-4",
        task: "Always Waive Your Inspection Rights",
        detail: "Check the box: 'I waive my right to access this recommendation letter.' Unwaived letters are systematically discounted by committees."
      }
    ],
    proTips: [
      "Ask your professors at least 6–8 weeks before the earliest December deadline. Follow up politely 2 weeks prior with a gentle reminder.",
      "If a recommender asks you to draft the letter for them, write it objectively using specific technical anecdotes rather than vague adjectives."
    ],
    commonPitfalls: [
      "Asking a company manager from an unrelated non-tech internship or a humanities professor who cannot evaluate your machine learning aptitude.",
      "Failing to waive FERPA rights, which immediately raises red flags for admissions committees."
    ],
    deliverable: "Confirmed commitments from 3 research recommenders equipped with finalized Brag Sheets and institutional submission matrices.",
    resources: [
      {
        title: "FERPA and Letters of Recommendation Explained",
        url: "https://studentprivacy.ed.gov/",
        type: "guide",
        description: "Official guide on recommendation privacy rights and institutional confidentiality."
      }
    ]
  },
  {
    id: "step-3-4",
    phaseId: "phase-3",
    stepNumber: "3.4",
    title: "Crafting the Doctoral Research Proposal & Compute Budget",
    shortTitle: "Doctoral Research Proposal",
    subtitle: "Draft a formal project proposal with realistic compute requirements for European, UK, and Asian programs",
    duration: "4 Weeks",
    priority: "Recommended",
    keyObjective: "Develop a rigorous 3-to-4 page research proposal required for European (ELLIS, Max Planck, ETH), UK, and Asian (MEXT, CSC) doctoral applications.",
    description: "Unlike US programs that often assign projects after first-year rotations, European and Asian doctoral programs require applicants to propose a concrete 3-year research plan, complete with baseline methodologies, risk mitigation, and compute resource requirements.",
    checklist: [
      {
        id: "c-3-4-1",
        task: "Abstract & Problem Statement",
        detail: "Summarize the technical gap, proposed methodology, and anticipated breakthroughs in 250 words."
      },
      {
        id: "c-3-4-2",
        task: "Literature Gap & Theoretical Novelty",
        detail: "Demonstrate why existing SOTA models fail and explain your architectural or algorithmic hypothesis."
      },
      {
        id: "c-3-4-3",
        task: "Experimental Plan & Compute Allocation",
        detail: "Specify datasets, evaluation protocols, and realistic compute requirements (e.g., 'Estimated 1,200 A100 GPU hours for training and validation runs')."
      },
      {
        id: "c-3-4-4",
        task: "Quarterly Milestone Gantt Chart",
        detail: "Map out Years 1, 2, and 3 into clear quarterly milestones with target conference submission deadlines."
      }
    ],
    proTips: [
      "Align your proposed methodology with the host institute's compute infrastructure (e.g., referencing CSCS supercomputing for ETH Zurich or JUWELS for German institutes).",
      "Include a 'Risks and Alternative Approaches' section—this demonstrates mature scientific planning."
    ],
    commonPitfalls: [
      "Proposing an unrealistically vast project (like 'Solving General Intelligence across all modalities in 3 years') instead of a focused, publishable investigation.",
      "Failing to cite the target laboratory's recent papers in your literature review."
    ],
    deliverable: "Completed 3-to-4 page doctoral research proposal formatted in LaTeX with BibTeX citations and a milestone Gantt chart.",
    resources: [
      {
        title: "How to Write a PhD Research Proposal (Oxford CS)",
        url: "https://www.cs.ox.ac.uk/admissions/graduate/",
        type: "guide",
        description: "Guidelines and expectations for doctoral research proposals in computer science."
      }
    ]
  },

  // ==============================================================
  // PHASE 4: Submission Campaign & Priority Deadlines
  // ==============================================================
  {
    id: "step-4-1",
    phaseId: "phase-4",
    stepNumber: "4.1",
    title: "Securing Departmental & Conference Diversity Application Fee Waivers",
    shortTitle: "Application Fee Waivers",
    subtitle: "Acquire fee waiver codes to submit 8–12 applications for free without paying \$1,000+ in fees",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Eliminate application fees across your target institutions through conference partnerships, virtual open houses, and financial hardship appeals.",
    description: "Application fees for US graduate programs run \$75–\$150 each. For international applicants applying to 10 programs, this can total \$1,200+. You can eliminate these costs through early fee waiver programs.",
    checklist: [
      {
        id: "c-4-1-1",
        task: "Attend Virtual Graduate Open Houses",
        detail: "Register for and attend virtual admissions info sessions hosted by CS departments in September/October; attendees routinely receive fee waiver codes."
      },
      {
        id: "c-4-1-2",
        task: "Apply Through Conference Affinity Groups",
        detail: "Submit requests through affinity organizations (Black in AI, LatinX in AI, WiML, Indigenous in AI, Queer in AI) which partner with universities for free application codes."
      },
      {
        id: "c-4-1-3",
        task: "Direct Email to CS Graduate Admissions Chairs",
        detail: "Send formal waiver requests citing international currency devaluation, accompanied by your academic CV."
      }
    ],
    proTips: [
      "Many US departments have an automated fee waiver checkbox directly inside the application portal under 'Financial Hardship' or 'Diversity' that does not even require uploading tax documents.",
      "Request waiver codes early in October—departmental waiver budgets are finite and often run out by late November."
    ],
    commonPitfalls: [
      "Paying application fees out-of-pocket without checking for available waiver codes.",
      "Waiting until December 14 to request a waiver code when university administrative offices take 3–5 business days to process requests."
    ],
    deliverable: "Acquired fee waiver discount codes entered into application portals, reducing application costs to \$0.",
    resources: [
      {
        title: "Black in AI - Graduate Application Fee Support",
        url: "https://blackinai.github.io/",
        type: "official",
        description: "Provides application mentoring and fee waiver programs for AI applicants."
      },
      {
        title: "Women in Machine Learning (WiML) Programs",
        url: "https://wiml.org/",
        type: "official",
        description: "Travel grants, workshop mentorship, and graduate school application fee waivers."
      }
    ]
  },
  {
    id: "step-4-2",
    phaseId: "phase-4",
    stepNumber: "4.2",
    title: "Official Academic Transcripts, Attestations & Translations",
    shortTitle: "Transcript Verification",
    subtitle: "Prepare verified, sealed transcripts, notarizations, and credential evaluations",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Ensure all official academic documentation is certified, translated, and verified in compliance with international admissions requirements.",
    description: "Incomplete or unverified academic documentation can invalidate an otherwise competitive application. Ensure that degree certificates, grading scale keys, and certified translations are prepared early.",
    checklist: [
      {
        id: "c-4-2-1",
        task: "Request Sealed Official Transcripts",
        detail: "Obtain official stamped and signed transcript PDFs directly from your university registrar."
      },
      {
        id: "c-4-2-2",
        task: "Verify Institutional Grading Scale Keys",
        detail: "Ensure the back of your transcript includes an official formula explaining how percentages or letter grades map to GPA."
      },
      {
        id: "c-4-2-3",
        task: "Obtain Sworn Certified Translations",
        detail: "If your documents are in any language other than English, have them translated by a certified court translator and legally bound with original copies."
      },
      {
        id: "c-4-2-4",
        task: "Complete Credential Evaluations (if mandated)",
        detail: "For institutions requiring third-party evaluation (e.g., WES or ECE), submit documentation 8 weeks before deadlines."
      }
    ],
    proTips: [
      "Most top US CS departments allow you to upload unofficial PDF scans during the initial review phase, only requiring expensive official mailed copies after admission.",
      "Always scan transcripts in high-resolution color (300 DPI) so official watermarks and signatures are clearly legible to reviewers."
    ],
    commonPitfalls: [
      "Calculating your own converted GPA using arbitrary online formulas instead of reporting your university's native grading scale.",
      "Forgetting to include proof of degree completion if you have already graduated."
    ],
    deliverable: "High-resolution, verified PDF packages of all undergraduate/master's transcripts and certified translations ready for portal upload.",
    resources: [
      {
        title: "World Education Services (WES)",
        url: "https://www.wes.org/",
        type: "tool",
        description: "International academic credential evaluation services for North American institutions."
      }
    ]
  },
  {
    id: "step-4-3",
    phaseId: "phase-4",
    stepNumber: "4.3",
    title: "Executing the December 1–15 Priority Fellowship Deadlines",
    shortTitle: "December Priority Deadlines",
    subtitle: "Submit all applications before strict fellowship windows close to guarantee consideration for full funding",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Submit all application components, confirm recommendation uploads, and secure priority consideration for departmental assistantships and university fellowships.",
    description: "In top Computer Science departments, submitting before the Priority Fellowship Deadline (typically December 1 – December 15) is mandatory for financial support. Applications submitted for 'regular' deadlines in January or February are often considered only after fellowship funding has been allocated.",
    checklist: [
      {
        id: "c-4-3-1",
        task: "Target December 1 as Universal Submission Date",
        detail: "Aim to submit all applications 48 hours before the deadline to prevent portal crashes during peak server loads."
      },
      {
        id: "c-4-3-2",
        task: "Verify Recommender Status Dashboards",
        detail: "Log into each application portal to confirm all 3 letters of recommendation have been uploaded and registered as 'Received'."
      },
      {
        id: "c-4-3-3",
        task: "Confirm Program-Specific Questions",
        detail: "Ensure that you have selected 'Yes, I wish to be considered for departmental financial support / assistantships'."
      },
      {
        id: "c-4-3-4",
        task: "Archive Submission Confirmation Receipts",
        detail: "Save the confirmation PDF and Application ID number for each institution in your tracking spreadsheet."
      }
    ],
    proTips: [
      "If a recommender has not uploaded their letter 48 hours before the deadline, send a polite, urgent reminder through the portal's automated reminder button.",
      "Most departments allow letters of recommendation to arrive a few days after the formal student deadline, provided your portion is submitted on time."
    ],
    commonPitfalls: [
      "Accidentally selecting 'Self-Funded' or 'No Financial Aid Required' on application drop-down menus.",
      "Waiting until 11:59 PM on deadline day when payment gateways and application servers frequently experience heavy traffic."
    ],
    deliverable: "100% of target applications officially submitted with confirmation receipts and confirmed recommender uploads.",
    resources: [
      {
        title: "GradCafe Computer Science Results",
        url: "https://www.thegradcafe.com/survey/index.php",
        type: "database",
        description: "Crowdsourced historical admissions results, notification dates, and interview timelines."
      }
    ]
  },

  // ==============================================================
  // PHASE 5: Technical Defense, Decisions & Stipend Math
  // ==============================================================
  {
    id: "step-5-1",
    phaseId: "phase-5",
    stepNumber: "5.1",
    title: "The 5-Slide Technical Research Presentation Defense",
    shortTitle: "5-Slide Technical Defense",
    subtitle: "Present your core machine learning project with scientific clarity during formal faculty committee interviews",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Deliver a compelling, 8-minute technical defense of your research to an admissions committee or lab PI.",
    description: "Formal graduate interviews in machine learning are technical defenses. Faculty evaluate how well you explain complex concepts, defend your methodology, and explain experimental design choices.",
    checklist: [
      {
        id: "c-5-1-1",
        task: "Slide 1: Scientific Motivation & Existing Limits",
        detail: "Explain the problem setting and why existing state-of-the-art baselines break down."
      },
      {
        id: "c-5-1-2",
        task: "Slide 2: Your Core Algorithmic/Mathematical Insight",
        detail: "Present your key contribution using clean mathematical notation and an intuitive architectural flow diagram."
      },
      {
        id: "c-5-1-3",
        task: "Slide 3: Quantitative Experimental Benchmarks",
        detail: "Show your primary comparison table across standard benchmarks with error bars and statistical significance."
      },
      {
        id: "c-5-1-4",
        task: "Slide 4: Controlled Ablation Studies",
        detail: "Prove which specific component of your design was responsible for the performance gain."
      },
      {
        id: "c-5-1-5",
        task: "Slide 5: Open Questions & Future Horizons",
        detail: "Demonstrate scientific maturity by outlining what experiments you would conduct next."
      }
    ],
    proTips: [
      "Practice your timing: 8 minutes of presentation leaves 12 minutes for Q&A in a standard 20-minute faculty interview slot.",
      "Anticipate the most common question: 'What would happen to your method if [assumption X] was violated in the real world?'"
    ],
    commonPitfalls: [
      "Reading script text directly off slides instead of maintaining conversational eye contact with the camera.",
      "Focusing on trivial hyperparameter tuning details instead of the core scientific hypothesis and insights."
    ],
    deliverable: "Rehearsed 5-slide technical presentation deck ready for screen sharing during admissions interview calls.",
    resources: [
      {
        title: "How to Give a Great Research Talk (Simon Peyton Jones)",
        url: "https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk/",
        type: "guide",
        description: "Classic guide on structuring and delivering technical computer science presentations."
      }
    ]
  },
  {
    id: "step-5-2",
    phaseId: "phase-5",
    stepNumber: "5.2",
    title: "Handling Live Algorithmic & Deep Learning Stress-Testing",
    shortTitle: "Live Technical Stress-Testing",
    subtitle: "Confidently answer in-depth questions on optimization, memory ceilings, and failure modes",
    duration: "3 Weeks",
    priority: "Crucial",
    keyObjective: "Demonstrate deep technical comprehension when professors challenge your derivations, design choices, and systems knowledge.",
    description: "Professors will push you beyond your comfort zone to see how you reason under uncertainty. They want to see your analytical troubleshooting process when an experiment fails or theoretical assumptions break down.",
    checklist: [
      {
        id: "c-5-2-1",
        task: "Review Core Deep Learning Derivations",
        detail: "Be ready to explain backpropagation, self-attention complexity, diffusion reverse processes, and contrastive loss dynamics."
      },
      {
        id: "c-5-2-2",
        task: "Prepare for 'Why Not Method X?' Inquiries",
        detail: "Know why you chose your specific architecture over prominent alternatives in the literature."
      },
      {
        id: "c-5-2-3",
        task: "Master the STAR-L Interview Framework",
        detail: "Answer behavioural and technical challenges using: Situation, Task, Action, Result, and Learning."
      },
      {
        id: "c-5-2-4",
        task: "Formulate High-Caliber Faculty Questions",
        detail: "Ask about upcoming lab grant directions, student autonomy in choosing projects, and GPU availability."
      }
    ],
    proTips: [
      "If you do not know an answer, do not guess. Say: 'I haven't derived that specific case, but based on the properties of X, my hypothesis would be Y, which I would test by Z.'",
      "Faculty are evaluating you as a future colleague—they want researchers who are pleasant, curious, and open to feedback."
    ],
    commonPitfalls: [
      "Becoming defensive or argumentative when a professor points out a potential limitation in your past paper.",
      "Claiming an experiment had 'no limitations'—every piece of research has boundary conditions."
    ],
    deliverable: "Documented interview response sheet covering the top 10 most common deep learning technical defense scenarios.",
    resources: [
      {
        title: "Deep Learning Interviews (Shashank Kalanithi)",
        url: "https://github.com/shashankkalanithi",
        type: "guide",
        description: "Technical interview preparation questions and deep learning intuition."
      }
    ]
  },
  {
    id: "step-5-3",
    phaseId: "phase-5",
    stepNumber: "5.3",
    title: "Deciphering the Financial Offer & Net Take-Home Math",
    shortTitle: "Stipend Math & Living Costs",
    subtitle: "Calculate true purchasing power after taxes, mandatory campus fees, and metropolitan cost-of-living",
    duration: "2 Weeks",
    priority: "Crucial",
    keyObjective: "Accurately compare competing fully funded offers by calculating net disposable monthly income.",
    description: "A \$34,000 stipend in Atlanta (Georgia Tech) or Urbana-Champaign (UIUC) offers a comfortable quality of life. The same \$34,000 in New York City (Columbia) or the Bay Area (Stanford) can mean severe financial strain. Calculate the net reality before signing.",
    checklist: [
      {
        id: "c-5-3-1",
        task: "Deduct Estimated Tax Withholding",
        detail: "Account for federal, state, and local income tax deductions (typically 12%–15% for graduate stipends in the US)."
      },
      {
        id: "c-5-3-2",
        task: "Identify Mandatory Student Fees",
        detail: "Check the offer letter for non-waivable university fees (often \$1,200–\$2,500/year for campus facilities and technology)."
      },
      {
        id: "c-5-3-3",
        task: "Verify Health Insurance Premium Subsidies",
        detail: "Confirm whether the department covers 100% of student health insurance or requires co-pays from your stipend."
      },
      {
        id: "c-5-3-4",
        task: "Calculate Local Rent-to-Stipend Ratios",
        detail: "Ensure that standard 1-bedroom or shared apartment rent in the university area does not exceed 45% of your net monthly income."
      }
    ],
    proTips: [
      "In European salaried PhD programs (Germany TV-L E13, Switzerland, Netherlands), your salary includes social security, unemployment insurance, and pension contributions.",
      "Check whether your stipend is paid over 9 months (academic year) or 12 months (calendar year)—summer funding makes a huge difference."
    ],
    commonPitfalls: [
      "Comparing nominal gross stipends without adjusting for regional cost-of-living differences.",
      "Assuming all university health insurance plans cover dental and vision care (they often require an extra fee)."
    ],
    deliverable: "Completed net disposable income spreadsheet comparing all received funding packages side-by-side.",
    resources: [
      {
        title: "PhD Stipends Database",
        url: "http://phdstipends.com/",
        type: "database",
        description: "Crowdsourced database of verified graduate stipends across all US and international universities."
      },
      {
        title: "MIT Living Wage Calculator",
        url: "https://livingwage.mit.edu/",
        type: "tool",
        description: "Cost of living and basic expense breakdowns across all US counties and metropolitan areas."
      }
    ]
  },
  {
    id: "step-5-4",
    phaseId: "phase-5",
    stepNumber: "5.4",
    title: "Respectful Scholarship Negotiation & Summer Funding Leverage",
    shortTitle: "Funding Negotiation",
    subtitle: "Leverage competing fully funded offers to secure departmental top-up fellowships and summer research support",
    duration: "2 Weeks",
    priority: "Recommended",
    keyObjective: "Respectfully negotiate with your top-choice institution to match a higher financial package or secure guaranteed summer research funding.",
    description: "If you receive multiple fully funded offers, you have established your value as an in-demand researcher. Departments have discretionary Dean's fellowship top-ups (\$2,000–\$10,000/year) that they can unlock to recruit top students.",
    checklist: [
      {
        id: "c-5-4-1",
        task: "Identify Competing Leverage Points",
        detail: "Select your highest-paying or most prestigious offer to serve as a polite comparison point."
      },
      {
        id: "c-5-4-2",
        task: "Draft a Transparent, Respectful Inquiry",
        detail: "Reiterate that the target university is your first choice intellectually, and transparently ask if supplemental funding is possible."
      },
      {
        id: "c-5-4-3",
        task: "Negotiate Dedicated Compute Allocations",
        detail: "If monetary stipends are fixed by union contracts, negotiate additional dedicated GPU cloud credits or hardware for your desk."
      },
      {
        id: "c-5-4-4",
        task: "Formally Sign & Decline Other Offers Promptly",
        detail: "Once you sign your accepted contract, promptly decline other offers so their funding can be released to waitlisted peers."
      }
    ],
    proTips: [
      "In Computer Science, the April 15 Resolution (CGS agreement) gives you until April 15 to make your final decision for US universities—never feel pressured to accept early.",
      "Always remain exceptionally polite and professional; academia is a small world and the professors you decline today will be reviewing your papers at NeurIPS tomorrow."
    ],
    commonPitfalls: [
      "Issuing aggressive ultimatums ('Match this or I won't come')—this alienates faculty before you even arrive.",
      "Holding onto 5 funded offers until April 15 without letting other students on the waitlist have an opportunity."
    ],
    deliverable: "Final signed Graduate Research Assistantship (GRA) or Doctoral Fellow appointment letter with maximum negotiated benefits.",
    resources: [
      {
        title: "Council of Graduate Schools (CGS) April 15 Resolution",
        url: "https://cgsnet.org/resources/for-institutions/april-15-resolution/",
        type: "official",
        description: "Official agreement protecting graduate student decision timelines across North America."
      }
    ]
  },

  // ==============================================================
  // PHASE 6: Visa, TAL Clearance & Laboratory Onboarding
  // ==============================================================
  {
    id: "step-6-1",
    phaseId: "phase-6",
    stepNumber: "6.1",
    title: "Securing Official Immigration Sponsorship Documents",
    shortTitle: "Immigration Sponsorship",
    subtitle: "Obtain Form I-20, CAS, or European hosting agreements backed by your fully funded scholarship letter",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Receive official government immigration sponsorship paperwork from your university's International Student Office.",
    description: "Once your funding contract is signed, the university will initiate your immigration documents. Because your tuition is waived and your stipend covers living costs, you generally do not need to show personal bank deposits.",
    checklist: [
      {
        id: "c-6-1-1",
        task: "Submit Financial Certification Package",
        detail: "Upload your official fully funded scholarship/assistantship award letter to the university's international portal."
      },
      {
        id: "c-6-1-2",
        task: "Receive US Form I-20 (F-1) or DS-2019 (J-1)",
        detail: "Verify that personal details match your passport character-for-character and pay the SEVIS I-901 fee."
      },
      {
        id: "c-6-1-3",
        task: "Obtain UK CAS & ATAS Certificate",
        detail: "If heading to the UK, apply for Academic Technology Approval Scheme (ATAS) clearance required for advanced AI research."
      },
      {
        id: "c-6-1-4",
        task: "Secure European Hosting Agreement (Convention d'Accueil)",
        detail: "For salaried PhD positions in Europe, obtain your formal research hosting agreement to apply for a scientific employment residence permit."
      }
    ],
    proTips: [
      "Keep digital and physical copies of your signed scholarship award letter in your carry-on luggage when traveling through international ports of entry.",
      "Check passport validity—it must be valid for at least 6 months beyond your intended stay."
    ],
    commonPitfalls: [
      "Waiting too long to apply for UK ATAS clearance, which can take 6–8 weeks during summer peak periods.",
      "Having discrepancies between the spelling of your name on your passport versus your university admission certificate."
    ],
    deliverable: "Official issued Form I-20 / CAS / European Hosting Agreement + SEVIS I-901 payment receipt.",
    resources: [
      {
        title: "FMJfee.com - Official SEVIS I-901 Fee Payment",
        url: "https://www.fmjfee.com/",
        type: "official",
        description: "Official US government payment portal for international student SEVIS fees."
      },
      {
        title: "UK Academic Technology Approval Scheme (ATAS)",
        url: "https://www.gov.uk/guidance/academic-technology-approval-scheme",
        type: "official",
        description: "Mandatory security clearance application for postgraduate research in sensitive computing fields."
      }
    ]
  },
  {
    id: "step-6-2",
    phaseId: "phase-6",
    stepNumber: "6.2",
    title: "Clearing the Technology Alert List (TAL) via Open-Science Documentation",
    shortTitle: "TAL Visa Clearance",
    subtitle: "Navigate export control scrutiny and prevent administrative processing delays at consular visa interviews",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Prepare a bulletproof consular visa interview package that demonstrates your AI research is fundamental, open-source, and unclassified.",
    description: "Artificial intelligence, machine learning, and advanced microelectronics are scrutinized under US and global export control regimes (Technology Alert List). International graduate students in AI risk multi-month administrative delays (INA section 221g) if their research is perceived as dual-use or proprietary.",
    checklist: [
      {
        id: "c-6-2-1",
        task: "Obtain Advisor Open-Science Research Statement",
        detail: "Secure a signed letter from your future PI on university letterhead confirming that all work is fundamental, unclassified, and intended for public academic conference release."
      },
      {
        id: "c-6-2-2",
        task: "Formulate Layperson Research Explanation",
        detail: "Practice explaining your research in plain English without using buzzwords like 'autonomous weapon systems' or 'surveillance tracking'."
      },
      {
        id: "c-6-2-3",
        task: "Prepare Clean Document Binder",
        detail: "Include I-20/CAS, advisor's bio, funding letter, transcripts, CV, and copy of your published papers."
      },
      {
        id: "c-6-2-4",
        task: "Articulate Clear Non-Immigrant Intent",
        detail: "Be prepared to discuss your long-term scientific career aspirations and professional trajectory."
      }
    ],
    proTips: [
      "When asked 'What will you research?', say: 'I will be researching fundamental mathematical optimization algorithms for open-source machine learning systems.' This is technically accurate and avoids export control red flags.",
      "Bring the printout of your advisor's academic webpage highlighting their open-access publications."
    ],
    commonPitfalls: [
      "Using sensationalist media phrases like 'building superintelligent military drones' or 'hacking neural networks'.",
      "Arriving at the consular window without an official signed research statement from your future department."
    ],
    deliverable: "Successful consular visa interview resulting in an approved student or researcher visa stamp in your passport.",
    resources: [
      {
        title: "US Department of State - Student Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        type: "official",
        description: "Official guidelines, appointment booking, and documentation requirements for US visas."
      }
    ]
  },
  {
    id: "step-6-3",
    phaseId: "phase-6",
    stepNumber: "6.3",
    title: "Relocation, Multi-Currency Banking & Laboratory Onboarding",
    shortTitle: "Lab & Compute Onboarding",
    subtitle: "Set up international banking, secure graduate housing, and configure your laboratory workstation",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Execute a smooth arrival and transition directly into active research productivity within your new laboratory.",
    description: "The final step transforms you from an applicant into an active graduate researcher. Establish your local bank direct deposit for stipend payments, obtain university health clearance, and set up your compute credentials on the departmental Slurm cluster.",
    checklist: [
      {
        id: "c-6-3-1",
        task: "Set Up Multi-Currency Travel Banking",
        detail: "Load an international card (Wise, Revolut) with initial buffer funds (\$1,500–\$2,500) to cover upfront security deposits before your first monthly stipend arrives."
      },
      {
        id: "c-6-3-2",
        task: "Secure Graduate Housing",
        detail: "Reserve on-campus graduate housing or secure a vetted shared lease within biking distance or public transit of the computer science building."
      },
      {
        id: "c-6-3-3",
        task: "Complete Immunization & Health Clearances",
        detail: "Upload translated vaccination histories and complete mandatory university screenings (Tuberculosis blood test, MMR)."
      },
      {
        id: "c-6-3-4",
        task: "Configure Departmental Slurm & Workstation Access",
        detail: "Obtain institutional computing credentials, set up SSH keys for the lab's GPU cluster, and align with your PI on Year 1 conference deadlines."
      }
    ],
    proTips: [
      "Ask senior PhD students in your lab for advice on the best local banks that process international Social Security Numbers (SSN) and graduate payroll with minimal fees.",
      "Aim to arrive 10 days before orientation to recover from jet lag, furnish your apartment, and explore the lab before classes begin."
    ],
    commonPitfalls: [
      "Relying on cash instead of setting up a local bank account immediately—graduate stipends can only be paid via direct deposit.",
      "Failing to register for classes early, which can temporarily delay health insurance coverage activation."
    ],
    deliverable: "Active local bank account with direct deposit linked, housing lease executed, and SSH access verified on lab GPU clusters.",
    resources: [
      {
        title: "Wise International Banking",
        url: "https://wise.com/",
        type: "tool",
        description: "Low-fee multi-currency accounts and foreign exchange for international relocations."
      }
    ]
  }
];
