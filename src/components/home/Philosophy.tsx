"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center px-8 py-32 bg-black text-white overflow-hidden">
      <motion.h3 
        initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-display text-4xl md:text-6xl lg:text-8xl text-center max-w-6xl tracking-tight uppercase leading-[1.1] text-text-secondary"
      >
        &quot;I BUILD PRODUCTS <br /> THAT SOLVE <span className="text-white">REAL PROBLEMS.&quot;</span>
      </motion.h3>
    </section>
  );
}
