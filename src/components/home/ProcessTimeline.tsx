"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "Phase 01",
    title: "Discovery & Scoping",
    tag: "DEFINING THE PARAMETERS",
    desc: "Before writing a single line of logic, I map the exact problem space. This is where ambiguous requirements are converted into strict, actionable technical specifications.",
  },
  {
    phase: "Phase 02",
    title: "Interface Prototyping",
    tag: "LOGIC MEETS DESIGN",
    desc: "Architecting the user journey. I construct precise wireframes to ensure intuitive navigation and seamless data flow across the entire application interface.",
  },
  {
    phase: "Phase 03",
    title: "Systems Architecture",
    tag: "SECURE FOUNDATIONS",
    desc: "Designing the core infrastructure. I establish robust database schemas, secure API contracts, and scalable environments capable of supporting heavy data processing and machine learning integrations.",
  },
  {
    phase: "Phase 04",
    title: "Core Engineering",
    tag: "PRECISION EXECUTION",
    desc: "Translating architecture into reality. Writing clean, modular, and optimized code with a strict adherence to modern software engineering principles and efficient algorithmic logic.",
  },
  {
    phase: "Phase 05",
    title: "Validation & Audits",
    tag: "STRESS TESTED",
    desc: "Rigorous Black-Box and Basis Path testing methodologies applied. Every function and endpoint is profiled for performance bottlenecks and security vulnerabilities.",
  },
  {
    phase: "Phase 06",
    title: "Production Pipeline",
    tag: "AUTOMATED DEPLOYMENT",
    desc: "Pushing to production with zero downtime. Utilizing continuous integration and deployment pipelines to ensure the live environment remains stable, secure, and actively monitored.",
  },
  {
    phase: "Phase 07",
    title: "System Handoff",
    tag: "SYSTEM OPERATIONAL",
    desc: "The final architecture is shipped. Delivering comprehensive documentation, clean handoff protocols, and a robust product ready for real-world scaling.",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathOffset = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const peakYs = [7.14, 21.42, 35.71, 50, 64.28, 78.57, 92.85];

  const svgPath = "M 50,0 C -16,3 -16,11 50,14.28 C 116,17 116,25 50,28.57 C -16,31 -16,39 50,42.85 C 116,46 116,54 50,57.14 C -16,60 -16,68 50,71.42 C 116,74 116,82 50,85.71 C -16,88 -16,96 50,100";

  return (
    <section className="w-full py-32 md:py-48 px-8 flex flex-col items-center bg-background overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        <h2 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] uppercase tracking-tighter mb-32 flex flex-col text-center">
          <span className="text-white block">THE</span>
          <span className="text-outline block">PROCESS</span>
        </h2>
        
        {/* Mobile View: Stacked Cards */}
        <div className="flex md:hidden flex-col gap-12 w-full relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            {phases.map((phase, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.6 }}
                   transition={{ duration: 0.8 }}
                   className="relative pl-12 flex flex-col group"
                >
                   <div className="absolute left-[-5px] top-4 w-3 h-3 rounded-full bg-black border-2 border-white group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300" />
                   <div className="bg-card-dark border border-border p-8 rounded-3xl group-hover:border-white/20 transition-colors">
                      <span className="font-mono text-green-400 text-[10px] uppercase tracking-widest">{phase.phase}</span>
                      <h3 className="font-display text-2xl text-white uppercase mt-2 mb-4">{phase.title}</h3>
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] tracking-widest uppercase text-white mb-4">{phase.tag}</span>
                      <p className="text-text-secondary text-sm leading-relaxed">{phase.desc}</p>
                   </div>
                </motion.div>
            ))}
        </div>

        {/* Desktop View: Winding SVG Timeline */}
        <div ref={containerRef} className="hidden md:block relative w-full h-[2500px] mt-20">
            {/* SVG Track */}
            <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[400px]">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path 
                      d={svgPath}
                      fill="none" 
                      stroke="rgba(255,255,255,0.1)" 
                      strokeWidth="0.5" 
                      vectorEffect="non-scaling-stroke"
                    />
                    <motion.path 
                      d={svgPath}
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="4"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      style={{ 
                        pathLength: 0.15, 
                        pathOffset: useTransform(scrollYProgress, [0, 1], [0, 1]) 
                      }}
                      className="drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    />
                </svg>
            </div>

            {/* Nodes & Cards */}
            {phases.map((phase, i) => {
                const isLeft = i % 2 === 0;
                return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`absolute w-[40%] flex flex-col group ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
                      style={{
                          top: `${peakYs[i]}%`,
                          left: isLeft ? "0%" : "auto",
                          right: isLeft ? "auto" : "0%",
                          transform: "translateY(-50%)"
                      }}
                    >
                        <div className={`bg-card-dark border border-border p-10 lg:p-14 rounded-3xl hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-xl relative overflow-hidden w-full max-w-[500px]`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <span className="font-mono text-green-400 text-[10px] md:text-xs uppercase tracking-widest">{phase.phase}</span>
                                <h3 className="font-display text-3xl md:text-4xl text-white uppercase mt-4 mb-6 tracking-tight">{phase.title}</h3>
                                <span className={`inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[9px] md:text-xs tracking-widest uppercase text-white mb-6`}>{phase.tag}</span>
                                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light">{phase.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
