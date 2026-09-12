"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Building beyond the classroom.</h2>
            <div className="w-20 h-1 bg-foreground"></div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg text-muted"
          >
            <p className="mb-6 leading-relaxed">
              I'm pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University.
            </p>
            <p className="mb-6 leading-relaxed">
              My interests sit at the intersection of data, engineering, and intelligent systems. 
              I enjoy taking a problem from raw data, conducting analysis, training a model, building the pipeline, and delivering a usable product.
            </p>
            <p className="leading-relaxed">
              I am continuously strengthening my foundations in algorithms, statistics, machine learning, databases, distributed systems, and software engineering to build reliable, production-ready solutions.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
