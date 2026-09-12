"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Image from "next/image";

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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left: Text content */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-2xl"
          >
            <motion.div variants={itemVars} className="mb-6 flex items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-muted border border-border px-3 py-1 rounded-full uppercase">
                Data × Engineering × Intelligence
              </span>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-foreground"
            >
              I build systems that turn data into decisions.
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed"
            >
              I&apos;m a Computer Science student focused on building reliable data pipelines,
              analytical systems, machine learning solutions, and production-ready software.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#work"
                className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Explore my work
              </a>
              <a
                href="/resume.pdf"
                download="Aditya_Kalure_Resume.pdf"
                className="px-6 py-3 rounded-full font-medium border border-border hover:bg-[#d1d5db] hover:text-[#111111] hover:border-[#d1d5db] transition-all duration-200"
              >
                Download resume
              </a>
            </motion.div>

            <motion.div variants={itemVars} className="flex items-center gap-6 text-muted">
              <a
                href="https://github.com/aditya242007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-kalure/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adityakalure237@gmail.com"
                className="hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Subtle border ring */}
              <div className="absolute inset-0 rounded-2xl border border-border/60 z-10 pointer-events-none"></div>
              {/* Faint corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r border-b border-border/40 rounded-br-2xl z-0"></div>
              <div className="absolute -top-3 -left-3 w-24 h-24 border-l border-t border-border/40 rounded-tl-2xl z-0"></div>
              <Image
                src="/aditya.jpg"
                alt="Aditya Kalure"
                fill
                className="object-cover object-top rounded-2xl"
                priority
              />
            </div>
          </motion.div>

        </div>
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
