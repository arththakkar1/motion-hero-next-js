"use client";

import { motion } from "framer-motion";

export function HeroVideoCinematic() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Vision In Motion
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl text-lg">
          A cinematic hero section with dramatic video and bold typography.
        </p>

        <button className="mt-8 px-8 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition font-medium">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
