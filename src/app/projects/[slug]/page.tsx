import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col pt-32 pb-20 px-8 min-h-screen">
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        
        {/* Breadcrumb */}
        <div className="flex gap-2 items-center text-[10px] tracking-widest uppercase text-text-secondary mb-16 relative z-20">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <span>/</span>
          <span className="text-white">{project.title}</span>
        </div>

        {/* Hero Image Section */}
        {project.imageUrl && (
          <div className="absolute top-0 left-0 w-full h-[60vh] -z-10 overflow-hidden">
             <Image 
               src={project.imageUrl}
               alt={project.title}
               fill
               className="object-cover opacity-30"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-background/80 to-background" />
          </div>
        )}

        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-20">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border border-border bg-card-dark text-[10px] tracking-widest uppercase flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {project.status}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white leading-[1.1]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full border border-border/50 text-[10px] tracking-widest uppercase text-text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16 border-t border-border pt-16">
          
          <section className="flex flex-col md:flex-row gap-4 md:gap-16">
            <h2 className="text-xs tracking-[0.2em] font-medium text-text-secondary uppercase w-48 shrink-0">The Problem</h2>
            <p className="text-lg text-white/80 leading-relaxed font-light">{project.problem}</p>
          </section>

          <section className="flex flex-col md:flex-row gap-4 md:gap-16">
            <h2 className="text-xs tracking-[0.2em] font-medium text-text-secondary uppercase w-48 shrink-0">What It Does</h2>
            <p className="text-lg text-white/80 leading-relaxed font-light">{project.solution}</p>
          </section>

          <section className="flex flex-col md:flex-row gap-4 md:gap-16">
            <h2 className="text-xs tracking-[0.2em] font-medium text-text-secondary uppercase w-48 shrink-0">My Role</h2>
            <p className="text-lg text-white/80 leading-relaxed font-light">{project.role}</p>
          </section>

          <section className="flex flex-col md:flex-row gap-4 md:gap-16">
            <h2 className="text-xs tracking-[0.2em] font-medium text-text-secondary uppercase w-48 shrink-0">Tech Stack & Skills Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tag => (
                <span key={tag} className="px-4 py-3 rounded-xl border border-border/50 bg-card-dark text-xs tracking-widest uppercase text-white hover:border-white/30 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-4 md:gap-16">
            <h2 className="text-xs tracking-[0.2em] font-medium text-text-secondary uppercase w-48 shrink-0">What I Learned</h2>
            <p className="text-lg text-white/80 leading-relaxed font-light">{project.learnings}</p>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row gap-6 mt-32 pt-16 border-t border-border/50 items-center justify-between">
          <Link 
            href="/work" 
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white hover:text-gray-300 transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-card-dark group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Work
          </Link>

          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-white hover:text-gray-300 transition-colors"
          >
            View on GitHub
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-card-dark group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}
