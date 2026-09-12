"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group flex gap-6"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-border/20 border border-border/50 flex items-center justify-center text-muted font-mono text-sm group-hover:bg-foreground group-hover:text-background transition-colors">
                {achievement.id}
              </div>
              
              <div>
                <h3 className="text-xl font-medium tracking-tight mb-2 text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
