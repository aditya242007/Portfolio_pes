"use client";

import { motion } from "framer-motion";

const metrics = [
  { id: "001", label: "DATA", value: "2K+", sub: "Rows Analyzed" },
  { id: "002", label: "MODELS", value: "Multiple", sub: "ML Models Evaluated" },
  { id: "003", label: "PIPELINES", value: "E2E", sub: "ETL Workflows" },
  { id: "004", label: "TOOLS", value: "20+", sub: "Technologies Explored" },
];

export default function DataSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-b border-border/50 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-3">
              <h2 className="text-sm font-mono tracking-widest text-muted uppercase">
                System Metrics
              </h2>
            </div>
            
            <div className="md:col-span-9 flex flex-col gap-6">
              {metrics.map((metric, index) => (
                <div 
                  key={metric.id}
                  className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border/20 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex gap-8 items-baseline">
                    <span className="text-xs font-mono text-muted/50">{metric.id}</span>
                    <span className="text-sm font-mono tracking-widest uppercase">{metric.label}</span>
                  </div>
                  <div className="flex items-baseline gap-4 mt-2 sm:mt-0 text-right">
                    <span className="text-sm font-mono text-muted lowercase tracking-wider">{metric.sub}</span>
                    <span className="text-lg font-mono text-foreground">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
