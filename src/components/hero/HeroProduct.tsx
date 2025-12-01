"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroProduct() {
  return (
    <section className="min-h-screen bg-black text-white grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold"
        >
          Premium Quality
        </motion.h1>

        <p className="text-gray-400 mt-3">
          A stylish hero tailored for modern e-commerce brands.
        </p>
      </div>

      <div className="flex items-center justify-center p-10">
        <Image
          src="https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg"
          alt="product"
          width={480}
          height={480}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
