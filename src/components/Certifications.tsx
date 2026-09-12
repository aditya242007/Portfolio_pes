"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 border border-border rounded-xl bg-background hover:bg-border/10 transition-colors flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <h3 className="text-lg font-medium tracking-tight leading-snug mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted">
                  {cert.issuer}
                </p>
              </div>
              
              {cert.date && (
                <div className="text-xs font-mono text-muted uppercase tracking-wider mt-4">
                  {cert.date}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
