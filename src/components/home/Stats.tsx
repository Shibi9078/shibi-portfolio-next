"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function StatCard({ 
  endValue, 
  suffix, 
  label, 
  delay 
}: { 
  endValue: number, 
  suffix: string, 
  label: string, 
  delay: number 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, endValue, { 
        duration: 2, 
        delay: delay, 
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, endValue, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center p-16 md:p-24 rounded-[2rem] border border-border bg-card-light hover:bg-card-dark transition-colors duration-500"
    >
      <div className="font-display text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tighter flex items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-text-secondary tracking-widest text-xs md:text-sm uppercase font-medium text-center">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    { endValue: 4, suffix: "+", label: "Projects Shipped" },
    { endValue: 11, suffix: "+", label: "Skills Mastered" },
    { endValue: 100, suffix: "%", label: "Passion" },
  ];

  return (
    <section className="w-full py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <StatCard 
            key={i}
            endValue={stat.endValue}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
