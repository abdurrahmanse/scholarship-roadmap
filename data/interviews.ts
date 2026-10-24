import { InterviewDefenseCase } from "./types";

export const interviewCasesData: InterviewDefenseCase[] = [
  {
    id: "case-oom-memory",
    category: "Systems & Memory",
    technicalChallenge: "GPU Out-of-Memory (OOM) Bottleneck during Multi-Node Large Model Fine-Tuning",
    context: "Fine-tuning a 7B parameter foundation model across two 24GB VRAM NVIDIA GPUs triggered fatal CUDA Out-of-Memory exceptions during backward passes at sequence length 4,096.",
    task: "Fit the model and optimizer states within available VRAM budget without reducing context length or batch size to trivial levels.",
    actionTaken: "Audited peak activation memory using torch.cuda.memory_summary(). Implemented Activation Checkpointing to discard intermediate forward activations and recompute on the fly. Switched to 4-bit NormalFloat quantization (QLoRA) for frozen base weights, integrated custom FlashAttention-2 kernels to eliminate the quadratic N^2 attention matrix allocation, and configured DeepSpeed ZeRO-Stage 2 to shard optimizer states.",
    quantitativeResult: "Reduced peak memory footprint from 38.4GB to 15.8GB per GPU (a 58.8% reduction), allowing training to proceed with zero OOM crashes while maintaining 98.4% of full 16-bit fine-tuning benchmark accuracy.",
    researchInsight: "Learned that in large-scale modern deep models, GPU memory bandwidth and activation storage—not raw floating-point operations—form the primary operational ceiling. Architecture design must be memory-aware."
  },
  {
    id: "case-rep-collapse",
    category: "Model Training & Convergence",
    technicalChallenge: "Representation Collapse in Self-Supervised Visual Contrastive Learning",
    context: "While training a self-supervised visual representation model on uncurated microscopy imaging, the network collapsed into a trivial constant embedding, resulting in zero gradients across batches.",
    task: "Enforce dimensional decorrelation and prevent latent dimensional collapse without needing computationally prohibitive negative pair batch sizes (e.g., batch sizes > 4,096 in standard SimCLR).",
    actionTaken: "Reformulated the objective using cross-correlation matrix optimization inspired by Barlow Twins. Added an explicit cross-covariance redundancy reduction penalty term that forces the cross-correlation matrix between twin view embeddings toward the identity matrix. Stabilized early training by adding a stop-gradient operator to the predictor branch and applying cosine learning rate warmup over 1,000 steps.",
    quantitativeResult: "Completely eliminated dimensional collapse; boosted linear probe k-NN classification accuracy on downstream validation subsets from 14.2% to 76.5%, matching state-of-the-art supervised baselines.",
    researchInsight: "Discovered that explicit redundancy reduction and architectural asymmetries are mandatory in non-contrastive self-supervised regimes to prevent degenerate attractor states in the optimization landscape."
  },
  {
    id: "case-inference-latency",
    category: "Inference & Optimization",
    technicalChallenge: "Real-Time Latency Ceiling in Vision-Language-Action (VLA) Robotic Manipulation",
    context: "An autoregressive vision-language policy model exhibited an inference latency of 820ms per action step, exceeding the 100ms hardware response limit required for dynamic closed-loop robotic arm grasping.",
    task: "Reduce inference latency by at least 80% without degrading spatial manipulation accuracy or grasp success rates.",
    actionTaken: "Replaced sequential autoregressive token decoding with speculative decoding using a lightweight distilled 150M draft network paired with the original 3B verifier model. Compiled the visual encoder using TensorRT with FP16 kernel fusion, and replaced dynamic KV-cache allocations with a static ring-buffer memory pool using vLLM.",
    quantitativeResult: "Achieved a 4.4x wall-clock inference speedup (dropping latency from 820ms to 84ms per step), enabling real-time closed-loop robotic manipulation with a 92% grasp success rate on novel physical objects.",
    researchInsight: "Demonstrated that decoupling token hypothesis generation from rigorous verification is the most compute-efficient way to accelerate autoregressive models in real-time robotic systems."
  },
  {
    id: "case-distribution-shift",
    category: "Theory & Foundations",
    technicalChallenge: "Out-of-Distribution (OOD) Degradation and Overconfident Calibration Failure",
    context: "A deep neural network achieved 96% accuracy on in-distribution test sets but exhibited severe overconfidence (predicting 99% probability on completely novel corrupted inputs), leading to catastrophic failure under environmental distribution shifts.",
    task: "Calibrate model uncertainty and improve out-of-distribution detection without access to ground-truth anomaly samples during training.",
    actionTaken: "Introduced energy-based out-of-distribution scoring combined with temperature-scaled Platt scaling on logit outputs. Formulated a Dirichlet prior network objective that explicitly maps in-distribution data to high-evidence states while regularizing predictions on synthetic boundary perturbations toward high-entropy uniform distributions.",
    quantitativeResult: "Improved the Area Under the Precision-Recall Curve (AUPR) for OOD detection by 21.3% while reducing Expected Calibration Error (ECE) from 18.4% to 3.2% across benchmark corruption datasets (ImageNet-C).",
    researchInsight: "Understood that standard softmax outputs conflate class probability with epistemic uncertainty; proper Bayesian or energy-based parameterizations are required for safety-critical machine learning systems."
  }
];
