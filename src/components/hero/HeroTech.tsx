"use client";
import { motion } from "motion/react";

export function HeroTech() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-6xl font-bold">Future of Web</h1>
        <p className="text-gray-400 mt-3">
          Dark grid, terminal vibe — perfect for dev tools.
        </p>
      </motion.div>
    </section>
  );
}
