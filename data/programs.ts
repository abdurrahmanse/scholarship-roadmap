import { FundedProgram } from "./types";

export const fundedProgramsData: FundedProgram[] = [
  // ==========================================
  // NORTH AMERICA (United States & Canada)
  // ==========================================
  {
    id: "cmu-scs",
    name: "Doctoral Program in Machine Learning (MLD)",
    institution: "Carnegie Mellon University",
    department: "School of Computer Science (SCS)",
    country: "United States",
    city: "Pittsburgh, PA",
    region: "North America",
    degreeType: "PhD",
    fundingModel: "Graduate Research Assistantship (GRA)",
    fundingDetails: {
      tuitionCoverage: "100% Full Tuition Remission",
      stipendAnnualUSD: "$43,000 / year",
      stipendMonthlyLocal: "$3,583 / month",
      healthInsurance: true,
      computeAccess: "Massive on-premise GPU clusters + AWS/GCP/NVIDIA research credits",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Tom Mitchell",
      "Ruslan Salakhutdinov",
      "Zico Kolter",
      "Katerina Fragkiadaki",
      "Graham Neubig"
    ],
    deadlinePriority: "December 10 (Priority Fellowship Deadline)",
    portalUrl: "https://www.cs.cmu.edu/academics/phd-admissions",
    requirements: {
      minGpaSuggested: "3.7 / 4.0",
      grePolicy: "Optional",
      englishMin: "TOEFL iBT 100 (Speaking >= 26) or IELTS 7.5 (Speaking >= 8.0)",
      publicationsExpected: "1+ NeurIPS/ICML/ICLR workshop or main conference paper / verified arXiv preprint"
    },
    tags: ["Machine Learning", "Deep Learning", "LLMs", "Robotics", "Computer Vision"]
  },
  {
    id: "stanford-sail",
    name: "PhD in Computer Science (AI Track)",
    institution: "Stanford University",
    department: "Department of Computer Science (SAIL)",
    country: "United States",
    city: "Stanford, CA",
    region: "North America",
    degreeType: "PhD",
    fundingModel: "Graduate Research Assistantship (GRA)",
    fundingDetails: {
      tuitionCoverage: "100% Full Tuition Remission",
      stipendAnnualUSD: "$52,000 / year",
      stipendMonthlyLocal: "$4,333 / month",
      healthInsurance: true,
      computeAccess: "Stanford AI Lab (SAIL) clusters + Stanford HAI compute grants",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Percy Liang (CRFM)",
      "Christopher Manning",
      "Fei-Fei Li",
      "Chelsea Finn",
      "Stefano Ermon"
    ],
    deadlinePriority: "December 3 (Hard Deadline)",
    portalUrl: "https://cs.stanford.edu/admissions/phd",
    requirements: {
      minGpaSuggested: "3.8 / 4.0",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 100 (Speaking >= 26)",
      publicationsExpected: "Demonstrated prior research output in top-tier venues"
    },
    tags: ["Foundation Models", "Computer Vision", "Robotics", "NLP", "Theory"]
  },
  {
    id: "berkeley-bair",
    name: "PhD in Computer Science (EECS)",
    institution: "University of California, Berkeley",
    department: "EECS & Berkeley AI Research (BAIR)",
    country: "United States",
    city: "Berkeley, CA",
    region: "North America",
    degreeType: "PhD",
    fundingModel: "Graduate Research Assistantship (GRA)",
    fundingDetails: {
      tuitionCoverage: "100% In-State & Non-Resident Tuition Remission",
      stipendAnnualUSD: "$46,000 / year",
      stipendMonthlyLocal: "$3,833 / month",
      healthInsurance: true,
      computeAccess: "BAIR GPU cluster + Sky Computing Lab infrastructure",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Sergey Levine (Robotics / RL)",
      "Pieter Abbeel",
      "Trevor Darrell",
      "Dan Klein",
      "Ion Stoica"
    ],
    deadlinePriority: "December 5",
    portalUrl: "https://eecs.berkeley.edu/academics/graduate/research-programs/admissions",
    requirements: {
      minGpaSuggested: "3.75 / 4.0",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 90 or IELTS 7.0",
      publicationsExpected: "First-author or significant co-author conference paper preferred"
    },
    tags: ["Reinforcement Learning", "Robotics", "Systems for ML", "NLP", "Vision"]
  },
  {
    id: "mit-csail",
    name: "Doctoral Program in EECS (AI/ML Group)",
    institution: "Massachusetts Institute of Technology (MIT)",
    department: "EECS & CSAIL",
    country: "United States",
    city: "Cambridge, MA",
    region: "North America",
    degreeType: "PhD",
    fundingModel: "Graduate Research Assistantship (GRA)",
    fundingDetails: {
      tuitionCoverage: "100% Full Tuition Remission",
      stipendAnnualUSD: "$49,000 / year",
      stipendMonthlyLocal: "$4,083 / month",
      healthInsurance: true,
      computeAccess: "CSAIL Supercomputing Clusters + MIT-IBM Watson AI Lab allocations",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Regina Barzilay",
      "Antonio Torralba",
      "Leslie Kaelbling",
      "Pulkit Agrawal",
      "Tommi Jaakkola"
    ],
    deadlinePriority: "December 1",
    portalUrl: "https://www.eecs.mit.edu/academics/graduate-programs/admission-process/",
    requirements: {
      minGpaSuggested: "3.85 / 4.0",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 100 or IELTS 7.5",
      publicationsExpected: "Strong research track record with novel algorithmic contributions"
    },
    tags: ["AI for Science", "Computer Vision", "Robotics", "NLP", "Machine Learning"]
  },
  {
    id: "mila-quebec",
    name: "Fully Funded MSc & PhD in Machine Learning",
    institution: "Mila - Quebec AI Institute",
    department: "Université de Montréal & McGill University",
    country: "Canada",
    city: "Montreal, QC",
    region: "North America",
    degreeType: "Both",
    fundingModel: "Graduate Research Assistantship (GRA)",
    fundingDetails: {
      tuitionCoverage: "100% Tuition Waiver / Differential Exemption",
      stipendAnnualUSD: "$28,000 – $36,000 / year (CAD $35k–$48k)",
      stipendMonthlyLocal: "CAD $3,200 / month",
      healthInsurance: true,
      computeAccess: "Compute Canada / Digital Research Alliance supercomputing clusters",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Yoshua Bengio (Founder)",
      "Aaron Courville",
      "Siva Reddy",
      "Liam Paull",
      "Irina Rish"
    ],
    deadlinePriority: "December 1 (Direct Mila Application Deadline)",
    portalUrl: "https://mila.quebec/en/education-training/graduate-studies",
    requirements: {
      minGpaSuggested: "3.5 / 4.0",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 90 or IELTS 6.5",
      publicationsExpected: "Prior deep learning projects or workshop preprints"
    },
    tags: ["Deep Learning", "Generative Models", "AI Alignment", "NLP", "Health AI"]
  },
  {
    id: "vector-utoronto",
    name: "Funded MSc & PhD in Computer Science (Machine Learning)",
    institution: "University of Toronto & Vector Institute",
    department: "Department of Computer Science",
    country: "Canada",
    city: "Toronto, ON",
    region: "North America",
    degreeType: "Both",
    fundingModel: "Institutional Fellowship",
    fundingDetails: {
      tuitionCoverage: "100% Full Tuition Remission + International Fee Exemption",
      stipendAnnualUSD: "$32,000 / year (CAD $42,000/year)",
      stipendMonthlyLocal: "CAD $3,500 / month",
      healthInsurance: true,
      computeAccess: "Vector Institute dedicated GPU cluster access",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Geoffrey Hinton (Emeritus)",
      "Sanja Fidler",
      "David Duvenaud",
      "Jimmy Ba",
      "Roger Grosse"
    ],
    deadlinePriority: "December 1",
    portalUrl: "https://web.cs.toronto.edu/graduate/admissions",
    requirements: {
      minGpaSuggested: "3.7 / 4.0",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 93 (Speaking >= 22) or IELTS 7.0",
      publicationsExpected: "Strong mathematics background and published work"
    },
    tags: ["Deep Learning", "Probabilistic ML", "Computer Vision", "Alignment", "LLMs"]
  },

  // ==========================================
  // EUROPE (ELLIS, Max Planck, ETH Zurich)
  // ==========================================
  {
    id: "ellis-phd",
    name: "ELLIS PhD Program (Pan-European AI Network)",
    institution: "European Laboratory for Learning and Intelligent Systems (ELLIS)",
    department: "Decentralized European Centers (ETH, Cambridge, Oxford, MPI, UvA)",
    country: "Pan-European",
    city: "Multi-City (Co-Supervised)",
    region: "Europe",
    degreeType: "PhD",
    fundingModel: "Salaried Researcher Contract",
    fundingDetails: {
      tuitionCoverage: "100% Free Tuition Across All Partner Institutions",
      stipendAnnualUSD: "$45,000 – $85,000 / year (depending on host country)",
      stipendMonthlyLocal: "€3,200 – €5,500 / month",
      healthInsurance: true,
      computeAccess: "EuroHPC Supercomputing Network + local university clusters",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Bernhard Schölkopf",
      "Max Welling",
      "Michael Black",
      "Yarin Gal",
      "Cordelia Schmid"
    ],
    deadlinePriority: "November 15 (Annual Centralized Call)",
    portalUrl: "https://ellis.eu/phd-postdoc",
    requirements: {
      minGpaSuggested: "Top 5% of graduating class",
      grePolicy: "Not Considered / Waived",
      englishMin: "Fluent spoken and written technical English (C1/IELTS 7.5)",
      publicationsExpected: "Competitive conference or workshop paper in top AI venues"
    },
    tags: ["Pan-European", "Computer Vision", "Causality", "Deep Learning", "Robotics"]
  },
  {
    id: "eth-zurich-ai",
    name: "Doctoral Studies in Computer Science (Machine Learning)",
    institution: "ETH Zurich",
    department: "Department of Computer Science & ETH AI Center",
    country: "Switzerland",
    city: "Zurich",
    region: "Europe",
    degreeType: "PhD",
    fundingModel: "Salaried Researcher Contract",
    fundingDetails: {
      tuitionCoverage: "100% (Nominal tuition CHF 730/semester fully covered)",
      stipendAnnualUSD: "$75,000 – $92,000 / year (CHF 70,000 – CHF 85,000)",
      stipendMonthlyLocal: "CHF 5,800 – CHF 7,000 / month (Highest globally)",
      healthInsurance: true,
      computeAccess: "Swiss National Supercomputing Centre (CSCS) Alps Supercomputer",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Andreas Krause (Learning & Adaptive Systems)",
      "Srdjan Capkun",
      "Luc Van Gool",
      "Thomas Hofmann",
      "Gunnar Rätsch"
    ],
    deadlinePriority: "Year-Round (Direct Professor Agreement) & Dec 15 (AI Center Fellowship)",
    portalUrl: "https://inf.ethz.ch/doctorate.html",
    requirements: {
      minGpaSuggested: "First Class Honours / Master's degree mandatory",
      grePolicy: "Not Required",
      englishMin: "C1 / IELTS 7.5 / TOEFL 100",
      publicationsExpected: "High-caliber theoretical or empirical publication records"
    },
    tags: ["Highest Salary", "Active Learning", "Reinforcement Learning", "Theory", "Vision"]
  },
  {
    id: "max-planck-is",
    name: "IMPRS for Intelligent Systems (Salaried PhD)",
    institution: "Max Planck Institute for Intelligent Systems",
    department: "MPI-IS in partnership with Univ. of Tübingen & Univ. of Stuttgart",
    country: "Germany",
    city: "Tübingen / Stuttgart",
    region: "Europe",
    degreeType: "PhD",
    fundingModel: "Salaried Researcher Contract",
    fundingDetails: {
      tuitionCoverage: "100% Free (Zero Tuition in Germany)",
      stipendAnnualUSD: "$55,000 / year (TV-L E13 100% public service scale)",
      stipendMonthlyLocal: "€4,200 gross / month (Full social security & pension)",
      healthInsurance: true,
      computeAccess: "Max Planck Computing and Data Facility (MPCDF) clusters",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Bernhard Schölkopf (Empirical Inference)",
      "Michael Black (Perceiving Systems)",
      "Moritz Hardt (Social Foundations)",
      "Katherine J. Kuchenbecker"
    ],
    deadlinePriority: "November 15",
    portalUrl: "https://imprs.is.mpg.de/application",
    requirements: {
      minGpaSuggested: "Top 10% in Master's degree",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 90 or IELTS 7.0",
      publicationsExpected: "Strong empirical research background in AI/ML"
    },
    tags: ["Salaried Employee", "Causality", "Autonomous Motion", "Robotics", "Haptics"]
  },

  // ==========================================
  // ASIA & OCEANIA
  // ==========================================
  {
    id: "singa-astar",
    name: "Singapore International Graduate Award (SINGA AI)",
    institution: "A*STAR (CFAR) & NUS / NTU",
    department: "Centre for Frontier AI Research (CFAR) & School of Computing",
    country: "Singapore",
    city: "Singapore",
    region: "Asia & Oceania",
    degreeType: "PhD",
    fundingModel: "Government Fellowship",
    fundingDetails: {
      tuitionCoverage: "100% Full Tuition Waiver for 4 Years",
      stipendAnnualUSD: "$25,000 – $30,000 / year",
      stipendMonthlyLocal: "SGD $2,700/mo (rises to $3,200/mo post-qualifying exam)",
      healthInsurance: true,
      computeAccess: "National Supercomputing Centre (NSCC) Singapore",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Ivor Tsang (CFAR)",
      "Wee Sun Lee (NUS)",
      "Bryan Low (NUS)",
      "Bo An (NTU)",
      "Sinno Jialin Pan"
    ],
    deadlinePriority: "December 1 (August Intake) & June 1 (January Intake)",
    portalUrl: "https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa",
    requirements: {
      minGpaSuggested: "First Class Honours / 3.6+ / 4.0",
      grePolicy: "Optional (Waived with strong publication record)",
      englishMin: "TOEFL 85 or IELTS 6.5",
      publicationsExpected: "Prior research involvement with solid coding foundation"
    },
    tags: ["Singapore", "Frontier AI", "Multi-Agent Systems", "Robust ML", "A*STAR"]
  },
  {
    id: "riken-mext",
    name: "RIKEN AIP - MEXT University Recommendation PhD",
    institution: "RIKEN Center for Advanced Intelligence Project & UTokyo",
    department: "RIKEN AIP & Department of Computer Science",
    country: "Japan",
    city: "Tokyo",
    region: "Asia & Oceania",
    degreeType: "Both",
    fundingModel: "Government Fellowship",
    fundingDetails: {
      tuitionCoverage: "100% Full Tuition Remission + No Examination Fees",
      stipendAnnualUSD: "$12,000 – $14,000 / year (Tax-Free)",
      stipendMonthlyLocal: "¥145,000 / month + round-trip international airfare",
      healthInsurance: true,
      computeAccess: "RIKEN AIP supercomputing clusters (RAIDEN system)",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Masashi Sugiyama (Director, AIP)",
      "Taiji Suzuki",
      "Issei Sato",
      "Lin Gu"
    ],
    deadlinePriority: "November 30 (via host professor recommendation)",
    portalUrl: "https://aip.riken.jp/",
    requirements: {
      minGpaSuggested: "3.5 / 4.0",
      grePolicy: "Not Considered / Waived",
      englishMin: "TOEFL iBT 80 or IELTS 6.5 (No Japanese language required)",
      publicationsExpected: "Mathematical statistics and machine learning theory interest"
    },
    tags: ["Japan", "MEXT Full Ride", "Statistical Learning", "Theory", "Airfare Included"]
  },
  {
    id: "csiro-data61-rtp",
    name: "CSIRO Data61 PhD Scholarship & University RTP",
    institution: "CSIRO Data61 & Partner Universities (ANU / Melbourne / UNSW)",
    department: "Machine Learning Research Group",
    country: "Australia",
    city: "Sydney / Melbourne / Canberra",
    region: "Asia & Oceania",
    degreeType: "PhD",
    fundingModel: "Institutional Fellowship",
    fundingDetails: {
      tuitionCoverage: "100% RTP International Tuition Fee Offset (Zero Fees)",
      stipendAnnualUSD: "$25,000 – $32,000 / year (Tax-Free)",
      stipendMonthlyLocal: "AUD $36,000 – $46,000 / year (RTP + Data61 Top-Up)",
      healthInsurance: true,
      computeAccess: "National Computational Infrastructure (NCI) supercomputers",
      travelGrant: true
    },
    keyFacultyOrLabs: [
      "Stephen Gould (ANU)",
      "Richard Hartley",
      "Flora Salim (UNSW)",
      "Anton van den Hengel"
    ],
    deadlinePriority: "August 31 (International Round 1) & October 31 (Round 2)",
    portalUrl: "https://www.csiro.au/en/careers/programs/data61-scholarships",
    requirements: {
      minGpaSuggested: "First Class Honours (H1 / 85%+)",
      grePolicy: "Not Required",
      englishMin: "IELTS 6.5 (Min 6.0 subscores) or TOEFL 80",
      publicationsExpected: "Demonstrated honors thesis research with publication potential"
    },
    tags: ["Australia", "Tax-Free Stipend", "Computer Vision", "Cyber-Physical AI", "Data61"]
  }
];
