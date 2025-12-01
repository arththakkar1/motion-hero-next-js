// src/components/hero/HeroCentered.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroCentered() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-black text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-white/15 bg-white/5">
          <Image
            src={IMAGE_URL}
            alt="Hero avatar"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          MONO HERO KIT
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Dark, cinematic hero sections
          <span className="block text-white/50">
            inspired by manga and modern product design.
          </span>
        </h1>

        <p className="max-w-xl text-sm text-white/60 sm:text-base">
          Use these layouts as a starting point for SaaS, portfolios, dashboards
          or landing pages. Just swap text, keep the vibe.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-transparent hover:text-white">
            Browse components
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/70 hover:border-white/40 hover:text-white">
            View code
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
          <span>Next.js 16</span>
          <span>•</span>
          <span>Tailwind</span>
          <span>•</span>
          <span>Dark UI ready</span>
        </div>
      </div>
    </section>
  );
}
