"use client";
import { motion } from "motion/react";

export function HeroBlurGlow() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-6 relative"
      >
        <h1 className="text-7xl font-bold">Modern Aesthetic</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Sleek gradients and soft glow make this hero feel premium.
        </p>
      </motion.div>
    </section>
  );
}
