"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projectsData } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  // Alternating layout logic
  const isEven = index % 2 === 0;
  
  // Custom layout for project 3 (full width) and project 4 (large card)
  const isFullWidth = index === 2;
  const isLargeCard = index === 3;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative grid gap-8 rounded-2xl border border-border bg-background/50 p-6 md:p-10 transition-colors hover:bg-border/10",
        isFullWidth ? "grid-cols-1" : 
        isLargeCard ? "grid-cols-1 md:grid-cols-2 md:items-center" : 
        "grid-cols-1 lg:grid-cols-12"
      )}
    >
      {/* Visual Section - Abstract placeholder for data viz/project image */}
      <div 
        className={cn(
          "relative overflow-hidden rounded-xl bg-border/30 border border-border/50",
          isFullWidth ? "aspect-[21/9]" : 
          isLargeCard ? "aspect-[4/3]" :
          isEven ? "lg:col-span-7 lg:order-1 aspect-[4/3] lg:aspect-auto" : "lg:col-span-7 lg:order-2 aspect-[4/3] lg:aspect-auto"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted/50 font-mono text-sm tracking-widest uppercase">
            Data Visualization Placeholder
          </span>
        </div>
        {/* Subtle hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Info Section */}
      <div 
        className={cn(
          "flex flex-col justify-center",
          isFullWidth ? "max-w-3xl" : 
          isLargeCard ? "" :
          isEven ? "lg:col-span-5 lg:order-2" : "lg:col-span-5 lg:order-1"
        )}
      >
        <div className="mb-4 flex items-center gap-4">
          <span className="text-sm font-mono text-muted">0{index + 1}</span>
          <div className="h-px w-8 bg-border transition-all duration-300 group-hover:w-16" />
          <span className="text-xs font-mono tracking-widest text-muted uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="mb-4 text-2xl md:text-3xl font-medium tracking-tight">
          {project.title}
        </h3>

        <p className="mb-8 text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground bg-background/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4">
          {project.links.caseStudy && (
            <a 
              href={project.links.caseStudy}
              className="flex items-center gap-2 text-sm font-medium hover:text-muted transition-colors"
            >
              View Case Study
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.links.live && (
            <a 
              href={project.links.live}
              className="flex items-center gap-2 text-sm font-medium hover:text-muted transition-colors"
            >
              Live Demo
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Selected Work</h2>
          <p className="text-lg text-muted max-w-2xl">
            Projects built to solve real problems, not just demonstrate syntax.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
