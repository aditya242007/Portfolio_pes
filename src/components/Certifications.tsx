"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
              className="p-6 border border-border rounded-xl bg-background hover:bg-border/10 transition-colors flex flex-col justify-between min-h-[180px] group"
            >
              <div>
                <h3 className="text-lg font-medium tracking-tight leading-snug mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                {cert.date && (
                  <div className="text-xs font-mono text-muted uppercase tracking-wider">
                    {cert.date}
                  </div>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors group-hover:underline underline-offset-4"
                    aria-label={`View certificate for ${cert.name}`}
                  >
                    <span>View certificate</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
