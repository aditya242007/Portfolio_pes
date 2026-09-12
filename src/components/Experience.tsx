"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Experience</h2>
        </div>

        <div className="max-w-3xl">
          <div className="relative border-l border-border pl-8 md:pl-12 ml-4 md:ml-6 space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute w-3 h-3 bg-background border-2 border-foreground rounded-full -left-[38px] md:-left-[54px] top-1.5"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-muted uppercase tracking-widest shrink-0">
                    {exp.date}
                  </span>
                </div>
                
                <div className="text-lg text-foreground mb-4">
                  {exp.company}
                </div>
                
                <p className="text-muted leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
