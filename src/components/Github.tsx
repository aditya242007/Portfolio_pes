"use client";

import { motion } from "framer-motion";
import { GitBranch, Star } from "lucide-react";
import { FaGithub as GithubIcon } from "react-icons/fa";

export default function Github() {
  return (
    <section className="py-24 bg-background border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Code is where the work lives.</h2>
            <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
              I actively build and contribute to projects on GitHub. It's where I experiment with new tools, push my side projects, and maintain open source code.
            </p>
            <a 
              href="[PLACEHOLDER_GITHUB_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-sm font-medium hover:text-muted transition-colors uppercase tracking-widest border-b border-foreground pb-1"
            >
              <GithubIcon size={16} />
              <span>View Profile</span>
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t border-border/50 pt-8"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-6">
                <GithubIcon size={24} className="text-foreground" />
                <div>
                  <h3 className="text-sm font-mono tracking-widest uppercase text-foreground">adityakalure</h3>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-end justify-between border-b border-border/20 pb-4">
                <span className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-muted">
                  <Star size={16} /> Recent Repositories
                </span>
                <span className="font-mono text-lg text-foreground">8+</span>
              </div>
              
              <div className="flex items-end justify-between border-b border-border/20 pb-4">
                <span className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase text-muted">
                  <GitBranch size={16} /> Total Commits
                </span>
                <span className="font-mono text-lg text-foreground">Active</span>
              </div>
              
              <div className="flex items-end justify-between border-b border-border/20 pb-4">
                <span className="text-sm font-mono tracking-widest uppercase text-muted">
                  Top Language
                </span>
                <span className="font-mono text-lg text-foreground">Python</span>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
