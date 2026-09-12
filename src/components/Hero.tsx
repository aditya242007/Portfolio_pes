"use client";

import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Hero() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={itemVars} className="mb-8 md:mb-12">
            <span className="text-xs font-mono tracking-widest text-muted uppercase">
              Data × Engineering × Intelligence
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVars}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] mb-8 text-foreground"
          >
            I build systems that turn data into decisions.
          </motion.h1>
          
          <motion.div variants={itemVars} className="max-w-2xl mb-16">
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              I'm a Computer Science student focused on building reliable data pipelines, analytical systems, machine learning solutions, and production-ready software.
            </p>
          </motion.div>
          
          <motion.div variants={itemVars} className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a 
              href="#work"
              className="text-sm font-medium hover:text-muted transition-colors border-b border-foreground pb-1 w-fit"
            >
              Explore Selected Work
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            
            <div className="flex items-center gap-6 text-muted">
              <a href="[PLACEHOLDER_GITHUB_URL]" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="[PLACEHOLDER_LINKEDIN_URL]" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:[PLACEHOLDER_EMAIL]" className="hover:text-foreground transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
