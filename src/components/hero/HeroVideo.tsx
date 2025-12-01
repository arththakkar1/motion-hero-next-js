"use client";
import { motion } from "motion/react";

export function HeroVideo() {
  return (
    <section className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6"
      >
        <h1 className="text-7xl font-semibold">Motion Driven</h1>
      </motion.div>
    </section>
  );
}
