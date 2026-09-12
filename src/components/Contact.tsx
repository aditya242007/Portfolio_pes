"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Let's build something useful.</h2>
          
          <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
            Whether it's a data problem, an engineering challenge, or an idea worth building — I'm always interested in working on meaningful problems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="mailto:[PLACEHOLDER_EMAIL]"
              className="group flex items-center gap-2 bg-foreground text-background px-6 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              <Mail size={18} />
              <span>Email me</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="[PLACEHOLDER_LINKEDIN_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full font-medium border border-border hover:bg-border/50 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="[PLACEHOLDER_GITHUB_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-full font-medium border border-border hover:bg-border/50 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
