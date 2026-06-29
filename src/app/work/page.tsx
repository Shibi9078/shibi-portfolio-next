"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Image from "next/image";

export default function WorkPage() {
  return (
    <div className="w-full flex flex-col pt-40 pb-20 px-8 min-h-screen">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow & Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center mb-8 text-xs tracking-[0.3em] font-medium text-text-secondary uppercase"
        >
          <span>SELECTED WORK</span>
          <span>4 Projects</span>
        </motion.div>

        {/* Split Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-[8vw] md:text-7xl leading-[0.9] tracking-tighter uppercase mb-32 w-full text-center md:text-left whitespace-nowrap text-white"
        >
          THINGS I HAVE BUILT.<span className="w-3 h-3 bg-white rounded-full animate-pulse inline-block ml-2 mb-2 md:mb-4" />
        </motion.h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group flex flex-col cursor-pointer h-full"
              >
                <div className="relative w-full overflow-hidden rounded-[2rem] bg-card-dark border border-border group-hover:border-white/30 transition-colors duration-500 h-[40vh] md:h-[50vh]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                  
                  {/* Background Image Effect */}
                  <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] opacity-60 group-hover:opacity-40">
                    {project.imageUrl ? (
                      <Image 
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-8 text-center bg-card-light">
                        <span className="font-display text-3xl md:text-5xl text-text-secondary opacity-10 uppercase">{project.title}</span>
                      </div>
                    )}
                  </div>

                  {/* Status Pill */}
                  <div className="absolute top-8 left-8 z-20 flex gap-2">
                    <span className="px-4 py-2 rounded-full border border-border bg-black/50 backdrop-blur-md text-[10px] tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                     <div className="flex flex-col gap-4 max-w-xl">
                       <div className="flex gap-2 flex-wrap">
                         {project.techStack.slice(0, 3).map(tag => (
                           <span key={tag} className="px-3 py-1 rounded-full border border-border/50 bg-black/40 backdrop-blur-md text-[10px] tracking-widest uppercase text-text-secondary">
                             {tag}
                           </span>
                         ))}
                         {project.techStack.length > 3 && (
                           <span className="px-3 py-1 rounded-full border border-border/50 bg-black/40 backdrop-blur-md text-[10px] tracking-widest uppercase text-text-secondary">
                             +{project.techStack.length - 3}
                           </span>
                         )}
                       </div>
                       <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">{project.title}</h2>
                       <p className="text-text-secondary text-sm line-clamp-1 group-hover:text-white/80 transition-colors">{project.shortDescription}</p>
                     </div>
                     
                     <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shrink-0">
                       <ArrowUpRight className="w-5 h-5 text-white" />
                     </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
