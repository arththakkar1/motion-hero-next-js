"use client";
import { motion } from "framer-motion";

export function HeroNeon() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-px bg-white/20 top-1/3"></div>
      <div className="absolute w-full h-px bg-white/20 bottom-1/3"></div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-bold tracking-tight"
      >
        Neon Minimalism
      </motion.h1>
    </section>
  );
}
