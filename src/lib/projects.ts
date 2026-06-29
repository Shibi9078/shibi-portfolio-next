export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  status: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  learnings: string;
  githubUrl: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "digital-twin-ac",
    title: "Digital Twin of Air-Conditioning System using AI/ML",
    shortDescription: "Predictive ML model forecasting performance dips and flagging faults in HVAC systems.",
    status: "Academic Project",
    problem: "AC/HVAC systems waste energy and fail without warning because there's no live, predictive model of how they're actually behaving — maintenance is reactive, not predictive.",
    solution: "A virtual \"digital twin\" that mirrors a real AC system's sensor data in real time and uses an ML model to forecast performance dips and flag faults before they happen, so maintenance and energy use can both be optimized.",
    role: "Built the predictive ML model and the data pipeline feeding simulated/real sensor readings into the twin.",
    techStack: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "IoT Simulation", "Data Visualization"],
    learnings: "Structuring a real-time data pipeline, the basics of time-series forecasting for physical systems, and how predictive models translate into actual maintenance decisions.",
    githubUrl: "https://github.com/Shibi9078",
    imageUrl: "/projects/digital-twin-ac.jpg"
  },
  {
    slug: "nptel-verification",
    title: "AI-Powered Automated NPTEL Certificate Verification",
    shortDescription: "Automated verification pipeline extracting and validating academic certificate data.",
    status: "Academic Project",
    problem: "Verifying NPTEL certificates and mapping them to academic credit-transfer rules is currently manual, slow, and error-prone for students and faculty.",
    solution: "Automates certificate verification (extracting and validating certificate data) and checks it against credit-transfer rules to instantly flag whether a certificate qualifies, cutting manual review time.",
    role: "Built the verification pipeline (certificate data extraction) and the rule-based validation engine mapping verified certificates to credit policies.",
    techStack: ["Python", "Tesseract OCR", "EasyOCR", "Rule-based Logic", "Classification", "Web Dashboard"],
    learnings: "Building a document-verification pipeline end-to-end, the real-world challenges of OCR on scanned documents, and translating institutional policy into clean validation logic.",
    githubUrl: "https://github.com/Shibi9078",
    imageUrl: "/projects/nptel-verification.jpg"
  },
  {
    slug: "cyber-threat-detection",
    title: "Trustworthy AI for Cyber Threat Detection",
    shortDescription: "Explainable AI threat detection system for smart-home healthcare networks.",
    status: "Academic Project",
    problem: "Smart-home healthcare IoT devices are increasingly targeted by cyberattacks, and most detection systems are \"black boxes\" that can't explain why they flagged something — which matters a lot in healthcare.",
    solution: "A threat/anomaly detection system for smart-home healthcare networks that explains why it flagged something using explainable-AI techniques, making the detection trustworthy enough to act on.",
    role: "Designed and trained the threat-detection model and added the explainability layer so flagged threats come with a human-readable reason.",
    techStack: ["Python", "Random Forest", "Neural Nets", "SHAP", "LIME", "Network Traffic Analysis"],
    learnings: "Practical intrusion-detection techniques, why explainability matters in security-critical/healthcare contexts, and balancing detection accuracy with interpretability.",
    githubUrl: "https://github.com/Shibi9078",
    imageUrl: "/projects/cyber-threat-detection.jpg"
  },
  {
    slug: "blockport-ai",
    title: "BlockPort AI: Green Maritime Intelligence",
    shortDescription: "Blockchain-enabled smart port operations for transparent sustainability tracking.",
    status: "Academic Project",
    problem: "Port and maritime cargo operations lack transparent, tamper-proof tracking of shipments and emissions data, making sustainability claims hard to verify and operations hard to coordinate.",
    solution: "Combines a blockchain ledger (for transparent, tamper-proof record-keeping of port/cargo operations and emissions data) with an AI module that analyzes that data to recommend more sustainable, efficient port operations.",
    role: "Implemented the blockchain ledger/smart-contract logic and the AI-based optimization module consuming the ledger data.",
    techStack: ["Solidity", "Smart Contracts", "Blockchain Architecture", "Python", "Sustainability Metrics"],
    learnings: "How blockchain provides verifiable record-keeping for real operational data, the basics of smart-contract design, and connecting an AI layer on top of an on-chain data source.",
    githubUrl: "https://github.com/Shibi9078",
    imageUrl: "/projects/blockport-ai.jpg"
  }
];
