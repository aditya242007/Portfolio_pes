"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Fragment } from "react";

const categories = [
  { id: "dataScience", label: "Data Science" },
  { id: "dataEngineering", label: "Data Engineering" },
  { id: "analytics", label: "Analytics" },
  { id: "software", label: "Software Engineering" },
  { id: "cloud", label: "Cloud" },
  { id: "ai", label: "AI & ML" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Core Capabilities</h2>
        </div>

        <div className="flex flex-col border-t border-border/50">
          {categories.map((category, index) => {
            // @ts-ignore
            const skills = skillsData[category.id] || [];
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start py-8 md:py-12 border-b border-border/50"
              >
                <div className="md:col-span-3">
                  <h3 className="text-sm font-mono text-muted uppercase tracking-widest leading-relaxed">
                    {category.label}
                  </h3>
                </div>
                
                <div className="md:col-span-9">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {skills.map((skill: string, i: number) => (
                      <Fragment key={skill}>
                        {skill}
                        {i < skills.length - 1 && <span className="text-muted/40 mx-2">/</span>}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
