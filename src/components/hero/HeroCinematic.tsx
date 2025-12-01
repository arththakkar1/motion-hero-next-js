"use client";
import { motion } from "framer-motion";

export function HeroCinematic() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0px" }}
        animate={{ opacity: 1, letterSpacing: "4px" }}
        transition={{ duration: 1.4 }}
        className="text-8xl font-extrabold uppercase tracking-widest"
      >
        Cinematic
      </motion.h1>
    </section>
  );
}
