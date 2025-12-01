"use client";

import { motion } from "motion/react";

export function HeroVideoSplit() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen bg-black text-white">
      {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col justify-center px-10 py-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Powered by Motion
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-md">
          A split layout with video on the right. Perfect for product demos or
          modern SaaS landing pages.
        </p>

        <button className="mt-8 px-8 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition font-medium">
          Explore
        </button>
      </motion.div>

      {/* RIGHT SIDE VIDEO */}
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
}
