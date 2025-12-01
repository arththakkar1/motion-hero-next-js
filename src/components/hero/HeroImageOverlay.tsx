// src/components/hero/HeroOverlay.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroOverlay() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
      <Image
        src={IMAGE_URL}
        alt="Background"
        fill
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-4 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          CINEMATIC HERO
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Turn any image into
          <span className="block text-white/60">
            a dramatic landing section.
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-sm text-white/70 sm:text-base">
          Use a single strong illustration or artwork and layer simple text on
          top. Works great for storytelling products, games, or creative tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-transparent hover:text-white">
            Use this pattern
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/30 px-6 py-2.5 text-sm text-white/70 hover:border-white">
            View variations
          </button>
        </div>
      </div>
    </section>
  );
}
