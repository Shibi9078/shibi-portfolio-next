"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { WireframeHead } from "./WireframeHead";
import { Magnetic } from "@/components/ui/Magnetic";
import { useRef, useEffect, useState } from "react";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const yWireframe = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleWireframe = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacityWireframe = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Wait for Preloader to finish (approx 4500ms)
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const shapingText = "SHAPING IDEAS".split("");
  const intoRealityText = "INTO REALITY".split("");

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-between pt-32 pb-20 px-8 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-start z-10 text-[10px] md:text-xs tracking-widest text-text-secondary uppercase mt-8 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-2 z-20 pointer-events-auto"
        >
          <span className="text-white">WELCOME</span>
          <br />
          <span>B.Tech IT Student</span>
          <span>VIT Vellore</span>

          <div className="flex flex-col gap-1 mt-6 items-start">
            <Magnetic>
              <a href="https://linkedin.com" className="hover:text-white transition-colors block py-1">LINKEDIN</a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com" className="hover:text-white transition-colors block py-1">GITHUB</a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-6 text-right"
        >
          <div className="flex flex-col">
            <span className="text-white text-lg">20+</span>
            <span>Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg">31+</span>
            <span>Skills</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white ml-auto mb-1" />
            <span className="text-white">Open To Work</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: yWireframe, scale: scaleWireframe, opacity: opacityWireframe }}
        className="absolute inset-0 flex items-center justify-center top-[-5%] mix-blend-screen pointer-events-none"
      >
         <div className="w-full h-full pointer-events-auto flex items-center justify-center relative">
            <WireframeHead />
         </div>
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="w-full flex flex-col items-center text-center z-10 pointer-events-none mt-auto"
      >
        <h1 className="font-display text-[11vw] md:text-[12vw] leading-[0.8] tracking-tighter flex flex-col uppercase whitespace-nowrap">
          <span className="text-white block overflow-hidden pb-2">
            {shapingText.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={textReveal}
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <span className="text-outline block overflow-hidden pt-2">
            {intoRealityText.map((char, index) => (
              <motion.span
                key={index}
                custom={index + shapingText.length}
                variants={textReveal}
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>
      </motion.div>
    </section>
  );
}
