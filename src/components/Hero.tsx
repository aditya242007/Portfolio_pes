"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Hero() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={itemVars} className="mb-6 flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-muted border border-border px-3 py-1 rounded-full uppercase">
              Data × Engineering × Intelligence
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVars}
            className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-foreground"
          >
            I build systems that turn data into decisions.
          </motion.h1>
          
          <motion.p 
            variants={itemVars}
            className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed"
          >
            I'm a Computer Science student focused on building reliable data pipelines, analytical systems, machine learning solutions, and production-ready software.
          </motion.p>
          
          <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 mb-16">
            <a 
              href="#work"
              className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Explore my work
            </a>
            <a 
              href="[PLACEHOLDER_RESUME_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-medium border border-border hover:bg-border/50 transition-colors"
            >
              Download resume
            </a>
          </motion.div>

          <motion.div variants={itemVars} className="flex items-center gap-6 text-muted">
            <a href="[PLACEHOLDER_GITHUB_URL]" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="[PLACEHOLDER_LINKEDIN_URL]" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:[PLACEHOLDER_EMAIL]" className="hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
