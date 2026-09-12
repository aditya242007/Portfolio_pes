"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const ProjectItem = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group py-16 md:py-24 border-t border-border/50 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
    >
      <div className="md:col-span-3 flex flex-col gap-4 text-sm font-mono text-muted">
        <span className="text-foreground">0{index + 1}</span>
        <span className="uppercase tracking-widest leading-relaxed">
          {project.category}
        </span>
      </div>

      <div className="md:col-span-9">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
          {project.title}
        </h3>

        <p className="text-lg md:text-xl text-muted leading-relaxed mb-12 max-w-3xl">
          {project.description}
        </p>

        <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-muted uppercase tracking-wider">
          {project.technologies.map((tech: string) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="flex items-center gap-8">
          {project.links.caseStudy && (
            <a 
              href={project.links.caseStudy}
              className="flex items-center gap-2 text-sm font-medium hover:text-muted transition-colors uppercase tracking-widest border-b border-foreground pb-1"
            >
              View Case Study
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
          {project.links.live && (
            <a 
              href={project.links.live}
              className="flex items-center gap-2 text-sm font-medium hover:text-muted transition-colors uppercase tracking-widest border-b border-foreground pb-1"
            >
              Live Demo
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors uppercase tracking-widest"
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
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Selected Work</h2>
        </div>

        <div className="flex flex-col border-b border-border/50">
          {projectsData.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
