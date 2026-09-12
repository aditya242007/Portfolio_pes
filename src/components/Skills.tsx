"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

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
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Core Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20">
          {categories.map((category, index) => {
            // @ts-ignore
            const skills = skillsData[category.id] || [];
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6 pb-4 border-b border-border">
                  {category.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill: string) => (
                    <li 
                      key={skill}
                      className="px-4 py-2 bg-border/20 border border-border/50 rounded-lg text-sm hover:bg-border/40 transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
