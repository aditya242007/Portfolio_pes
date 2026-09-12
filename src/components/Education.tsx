"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 border border-border rounded-2xl bg-border/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-2">Lovely Professional University</h3>
            <p className="text-lg text-muted mb-4 md:mb-0">B.Tech — Computer Science & Engineering</p>
          </div>
          
          <div className="text-sm font-mono text-muted uppercase tracking-widest px-4 py-2 border border-border rounded-full inline-flex w-fit">
            Present
          </div>
        </motion.div>
      </div>
    </section>
  );
}
