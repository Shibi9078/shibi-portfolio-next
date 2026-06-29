"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full Stack Web App Development",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    features: ["Production-ready web application", "REST or GraphQL API", "CI/CD pipeline & deployment", "Database schema & migrations"],
    price: "$25/hr"
  },
  {
    title: "Frontend React / Next.js Development",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Pixel-perfect, unified React & Next.js interfaces", "Responsive components", "Component library with Storybook", "Performance optimization"],
    price: "$35/hr"
  },
  {
    title: "3D & Interactive Web Experiences",
    tags: ["Three.js", "React Three Fiber", "WebGL"],
    features: ["Immersive 3D experiences", "Optimized GLTF/GLB models", "Custom shader programs"],
    price: "$55/hr"
  },
  {
    title: "Backend API Development",
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    features: ["Scalable APIs with Node.js", "Authentication & authorization", "API documentation"],
    price: "$40/hr"
  },
  {
    title: "Mobile App (React Native)",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    features: ["Cross-platform mobile apps", "iOS & Android builds", "App Store submission"],
    price: "$40/hr"
  },
  {
    title: "UI/UX Consulting & Design Systems",
    tags: ["Figma", "Design Tokens", "Tailwind CSS"],
    features: ["Design audits & systems", "UI audit report", "Figma component library"],
    price: "$30/hr"
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col pt-40 pb-20 px-8 min-h-screen">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase mb-32 flex w-full justify-center"
        >
          <span className="text-white">SERV</span>
          <span className="text-outline">ICES</span>
        </motion.h1>

        <div className="w-full flex flex-col gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-10 md:p-16 rounded-[2rem] bg-card-dark border border-border hover:border-white/30 transition-colors duration-500 gap-8"
            >
              <div className="flex flex-col gap-6 md:w-1/2">
                <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">{service.title}</h2>
                <div className="flex gap-2 flex-wrap">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-border/50 text-[10px] tracking-widest uppercase text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 md:w-1/3 w-full">
                <ul className="flex flex-col gap-3">
                  {service.features.map(feature => (
                    <li key={feature} className="text-text-secondary text-sm flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-6 md:mt-0 pt-6 md:pt-0 border-t border-border/50 md:border-none shrink-0">
                <div className="text-xl md:text-2xl text-white font-medium mb-0 md:mb-6">{service.price}</div>
                <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-medium hover:text-white text-text-secondary transition-colors group-hover:text-white">
                  REQUEST SERVICE
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
