"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

const philosophies = [
  {
    title: "Learn by Building",
    description: "I pick projects that force me to learn something I didn't already know how to do."
  },
  {
    title: "Real Problems Over Tutorials",
    description: "Every project here started from an actual gap, not a course assignment."
  },
  {
    title: "Security & Trust Matter",
    description: "If a system can't explain its own decisions, I don't trust it — and I try not to ship that either."
  },
  {
    title: "Still Early, Still Shipping",
    description: "I'm only in my 2nd year — the goal is to keep compounding real, shipped work every semester."
  }
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full flex flex-col pt-40 pb-0 min-h-screen overflow-hidden">
      
      {/* Intro Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-8 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8 gap-4"
        >
          <span className="text-xs tracking-[0.3em] font-medium text-text-secondary uppercase">ABOUT ME</span>
          <span className="px-4 py-2 rounded-full border border-border bg-card-dark text-[10px] tracking-widest uppercase flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            Open to Work
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase mb-12 flex w-full justify-center text-white"
        >
          SHIBI S
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          {["B.Tech IT · VIT Vellore", "2nd Year", "Web Developer | AI/ML & Security Enthusiast"].map(tag => (
            <span key={tag} className="px-6 py-3 rounded-full border border-border text-[10px] md:text-xs tracking-widest uppercase font-medium text-white bg-card-light">
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-10"
          >
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              I&apos;m Shibi, a second-year B.Tech Information Technology student at VIT Vellore. I like picking problems that don&apos;t have a clean tutorial answer — predictive maintenance, document verification, explainable security AI, blockchain-backed sustainability — and actually building a working version of the solution.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              I&apos;m still early in my degree, but I learn by shipping, not just by studying for it.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a href="mailto:shibishibi9078@gmail.com" className="px-6 py-4 rounded-full bg-white text-black text-[10px] tracking-widest uppercase font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/shibi-s-052635276/" target="_blank" rel="noreferrer" className="px-6 py-4 rounded-full border border-border bg-card-dark text-white text-[10px] tracking-widest uppercase font-bold hover:border-white/50 transition-colors flex items-center gap-2">
                LinkedIn
              </a>
              <a href="https://github.com/Shibi9078" target="_blank" rel="noreferrer" className="px-6 py-4 rounded-full border border-border bg-card-dark text-white text-[10px] tracking-widest uppercase font-bold hover:border-white/50 transition-colors flex items-center gap-2">
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Photo & Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-card-dark border border-border flex flex-col justify-end p-8 group"
          >
            <Image 
              src="/images/profile.jpg" 
              alt="Shibi S" 
              fill 
              className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0" />
            
            <div className="relative z-10 flex flex-col gap-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-[10px] tracking-widest uppercase text-white/70">
                <div className="flex flex-col gap-1 border-b border-border/50 pb-2"><span>Year 2 of B.Tech IT</span></div>
                <div className="flex flex-col gap-1 border-b border-border/50 pb-2"><span>4+ Projects Built</span></div>
                <div className="flex flex-col gap-1 pt-2"><span>VIT Vellore</span></div>
                <div className="flex flex-col gap-1 pt-2"><span>6+ Domains Explored</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Academic Background */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center mb-40 px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs tracking-[0.3em] font-medium text-text-secondary uppercase mb-4">ACADEMIC BACKGROUND</h2>
          <h3 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight flex flex-col md:flex-row justify-center">
            <span>Where I st</span><span className="text-outline">udy.</span>
          </h3>
        </div>

        <div ref={containerRef} className="relative w-full flex flex-col pt-10">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/50 transform -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[2px] bg-white transform -translate-x-1/2 hidden md:block origin-top"
          />

          <div className="relative flex w-full justify-between items-center md:flex-row">
            <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-black border-2 border-white transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-10" />
            
            <div className="w-full md:w-[45%] flex flex-col md:text-right md:items-end">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="p-8 md:p-12 rounded-[2rem] bg-card-dark border border-border hover:border-white/30 transition-colors w-full flex flex-col"
              >
                <div className="text-text-secondary text-[10px] tracking-widest uppercase mb-4 text-left md:text-right">2024 – 2028 (Ongoing)</div>
                <h4 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight mb-2 text-left md:text-right">B.Tech — IT</h4>
                <div className="text-white/60 text-[10px] font-medium uppercase tracking-widest mb-6 text-left md:text-right">VIT Vellore</div>
                <p className="text-text-secondary text-sm leading-relaxed text-left md:text-right">Focus Areas: AI/ML, Cybersecurity, Distributed Systems.</p>
              </motion.div>
            </div>
            <div className="hidden md:block w-[45%]" />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center mb-40 px-8">
        <div className="text-center mb-24">
          <h2 className="text-xs tracking-[0.3em] font-medium text-text-secondary uppercase mb-4">PHILOSOPHY</h2>
          <h3 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight flex flex-col md:flex-row justify-center">
            <span>What dri</span><span className="text-outline">ves me.</span>
          </h3>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col p-10 md:p-12 rounded-[2rem] bg-card-light border border-border hover:bg-card-dark hover:border-white/20 transition-all duration-500 group"
            >
              <div className="font-display text-white/10 text-6xl mb-4 group-hover:text-white/20 transition-colors">0{i+1}</div>
              <h4 className="font-display text-3xl text-white uppercase tracking-tight mb-6">{item.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ghost CTA Section */}
      <div id="contact" className="w-full border-t border-border/50 bg-black/40 py-32 px-8 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center z-10 text-center">
          <span className="text-xs tracking-[0.3em] font-medium text-text-secondary uppercase mb-6">OPEN TO OPPORTUNITIES</span>
          <h2 className="font-display text-4xl md:text-7xl uppercase tracking-tight text-white mb-8">Let&apos;s build something worth shipping.</h2>
          
          <p className="text-lg text-white/60 mb-16 max-w-2xl font-light">
            I am currently looking for internships, collaborations, and hackathon teams. If you are building something challenging, I want in.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:shibishibi9078@gmail.com" className="flex items-center justify-between p-8 rounded-3xl border border-border bg-card-dark hover:border-white/50 transition-colors group">
              <div className="flex flex-col text-left gap-2">
                <span className="text-[10px] tracking-widest text-text-secondary uppercase">Send an Email</span>
                <span className="text-white text-sm font-medium">shibishibi9078@gmail.com</span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            </a>

            <a href="https://www.linkedin.com/in/shibi-s-052635276/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-8 rounded-3xl border border-border bg-card-dark hover:border-white/50 transition-colors group">
              <div className="flex flex-col text-left gap-2">
                <span className="text-[10px] tracking-widest text-text-secondary uppercase">LinkedIn</span>
                <span className="text-white text-sm font-medium">Profile Link</span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            </a>

            <a href="https://github.com/Shibi9078" target="_blank" rel="noreferrer" className="flex items-center justify-between p-8 rounded-3xl border border-border bg-card-dark hover:border-white/50 transition-colors group">
              <div className="flex flex-col text-left gap-2">
                <span className="text-[10px] tracking-widest text-text-secondary uppercase">GitHub</span>
                <span className="text-white text-sm font-medium">Profile Link</span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="mt-16 text-[10px] tracking-widest uppercase text-text-secondary flex items-center justify-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50" />
             Currently a 2nd-year student · Open to internships, collaborations, and hackathons.
          </div>
        </div>
      </div>

    </div>
  );
}
