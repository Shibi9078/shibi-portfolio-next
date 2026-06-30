"use client";

import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section className="w-full bg-white text-black min-h-screen px-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col items-center text-center z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] font-medium mb-12 text-gray-500"
        >
          ABOUT
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[12vw] leading-[0.8] tracking-tighter uppercase"
        >
          MODERN<br />DEVELOPER
        </motion.h2>
        
      </div>
    </section>
  );
}
