"use client";

import { motion } from "framer-motion";
import { GitBranch, Star } from "lucide-react";
import { FaGithub as GithubIcon } from "react-icons/fa";

export default function Github() {
  return (
    <section className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Code is where the work lives.</h2>
          <p className="text-lg text-muted mb-8 leading-relaxed max-w-lg">
            I actively build and contribute to projects on GitHub. It's where I experiment with new tools, push my side projects, and maintain open source code.
          </p>
          <a 
            href="https://github.com/aditya242007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            <GithubIcon size={18} />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract GitHub representation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-border/40 to-transparent rounded-3xl blur-3xl -z-10"></div>
          
          <div className="bg-background/80 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-border/50 rounded-full flex items-center justify-center">
                  <GithubIcon className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">adityakalure</h3>
                  <p className="text-sm text-muted">GitHub Activity</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-border/20 transition-colors">
                <span className="flex items-center gap-3"><Star size={16} /> Recent Repositories</span>
                <span className="font-mono">8+</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-border/20 transition-colors">
                <span className="flex items-center gap-3"><GitBranch size={16} /> Total Commits</span>
                <span className="font-mono">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-border/20 transition-colors">
                <span className="flex items-center gap-3">Top Language</span>
                <span className="font-mono text-foreground px-2 py-0.5 bg-border/50 rounded">Python</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
