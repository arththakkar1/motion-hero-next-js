"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSplit() {
  return (
    <section className="min-h-[80vh] bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            Modern Hero Sections
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Design clean, bold
            <span className="block text-white/60">hero experiences.</span>
          </h1>

          <p className="max-w-xl text-sm text-white/60 sm:text-base">
            Build landing pages that feel premium with minimal color, strong
            typography, and subtle motion. Perfect for SaaS, portfolios, and
            dashboards.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-transparent hover:text-white">
              Get started
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/70 hover:border-white/40 hover:text-white">
              View components
            </button>
          </div>
        </div>

        {/* Image UI */}
        <div className="flex-1">
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-4 shadow-[0_0_80px_rgba(255,255,255,0.06)] backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between text-xs text-white/40">
              <span>Berserk Preview</span>
              <span>v1.0</span>
            </div>

            <div className="relative mb-4 h-44 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg"
                alt="hero"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="space-y-3 text-xs text-white/70">
              <div className="flex justify-between">
                <span>Power</span>
                <span className="font-medium text-white">Overwhelming</span>
              </div>
              <div className="flex justify-between">
                <span>Enemies defeated</span>
                <span className="font-medium text-white">Countless</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
