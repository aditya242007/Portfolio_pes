"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "DATA", value: "2K+", sub: "rows analyzed" },
  { label: "MODELS", value: "Multiple", sub: "ML models evaluated" },
  { label: "PIPELINES", value: "E2E", sub: "ETL workflows" },
  { label: "TOOLS", value: "20+", sub: "technologies explored" },
];

export default function DataSection() {
  return (
    <section className="py-24 border-y border-border bg-background overflow-hidden relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Where I work</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background p-6 md:p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-64 hover:bg-border/5 transition-colors"
            >
              <div className="text-xs font-mono text-muted tracking-widest uppercase">
                {metric.label}
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-medium tracking-tight mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted">
                  {metric.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
