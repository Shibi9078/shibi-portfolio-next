"use client";

import { motion } from "framer-motion";

export function BioPreview() {
  return (
    <section className="w-full bg-white text-black min-h-screen px-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-medium text-black leading-snug tracking-tight"
        >
          I&apos;m Shibi, a full-stack developer from VIT Vellore who builds fast, scalable, and visually compelling web applications. I turn ideas into real products — from concept to deployment.
        </motion.div>
      </div>
    </section>
  );
}
