"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    name: "Programming & DSA",
    description: "Python, Java, C++, Data Structures & Algorithms",
    rating: 4.3,
    color: "bg-blue-500",
    shadow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]"
  },
  {
    name: "AI / Machine Learning",
    description: "TensorFlow, Scikit-learn, Pandas, NumPy, time-series & classification models",
    rating: 4.5,
    color: "bg-violet-500",
    shadow: "shadow-[0_0_15px_rgba(139,92,246,0.5)]"
  },
  {
    name: "Cybersecurity & Threat Detection",
    description: "Intrusion detection, network traffic analysis, explainable AI (SHAP/LIME)",
    rating: 4.2,
    color: "bg-green-500",
    shadow: "shadow-[0_0_15px_rgba(34,197,94,0.5)]"
  },
  {
    name: "Blockchain & Distributed Systems",
    description: "Solidity basics, smart contracts, blockchain architecture",
    rating: 4.0,
    color: "bg-amber-500",
    shadow: "shadow-[0_0_15px_rgba(245,158,11,0.5)]"
  },
  {
    name: "Web Development",
    description: "HTML5, CSS3, JavaScript (vanilla), responsive UI",
    rating: 4.4,
    color: "bg-pink-500",
    shadow: "shadow-[0_0_15px_rgba(236,72,153,0.5)]"
  },
  {
    name: "Tools & Platforms",
    description: "Git/GitHub, Linux basics, OCR tooling, data visualization",
    rating: 4.1,
    color: "bg-cyan-500",
    shadow: "shadow-[0_0_15px_rgba(6,182,212,0.5)]"
  }
];

export default function SkillsPage() {
  return (
    <div className="w-full flex flex-col pt-40 pb-20 px-8 min-h-screen overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow & Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center mb-12 text-xs tracking-[0.3em] font-medium text-text-secondary uppercase"
        >
          <span>TECH ARSENAL</span>
          <span className="hidden md:block">Every skill below was used on a real project — not a tutorial.</span>
        </motion.div>

        {/* Split Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display leading-[0.9] tracking-tighter uppercase mb-16 flex flex-col w-full items-center md:items-start text-center md:text-left"
        >
          <span className="text-white/50 text-[5vw] md:text-4xl mb-2">BUILT WITH</span>
          <span className="text-white text-[11vw] md:text-[9vw]">THE RIGHT TOOLS.</span>
        </motion.h1>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-32"
        >
          {["4+ Projects Shipped", "6+ Domains", "2nd Year B.Tech IT"].map(stat => (
            <span key={stat} className="px-6 py-3 rounded-full border border-border text-[10px] md:text-xs tracking-widest uppercase font-medium text-white bg-card-dark">
              {stat}
            </span>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillsData.map((skill, i) => {
            const fillPercentage = (skill.rating / 5.0) * 100;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
                className="flex flex-col p-8 md:p-12 rounded-[2rem] bg-card-dark border border-border hover:-translate-y-1 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex justify-between items-end mb-4">
                  <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight">{skill.name}</h2>
                  <span className="text-white font-mono text-xs tracking-widest">{skill.rating.toFixed(1)} / 5.0</span>
                </div>
                
                <p className="text-text-secondary text-[10px] tracking-widest uppercase mb-8 h-8">{skill.description}</p>
                
                {/* Rating Bar */}
                <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-border/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fillPercentage}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (i % 2) * 0.1 }}
                    className={`h-full ${skill.color} ${skill.shadow} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
