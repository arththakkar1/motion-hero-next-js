// src/components/hero/HeroShowcase.tsx
import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroShowcase() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              HERO GALLERY
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Showcase multiple hero
              <span className="block text-white/60">
                variations in one place.
              </span>
            </h1>
            <p className="max-w-lg text-sm text-white/70 sm:text-base">
              Use overlapping cards to preview different sections, states, or
              themes. Works great for design systems or UI kits.
            </p>
          </div>

          <div className="relative h-72">
            <div className="absolute inset-0">
              <div className="absolute left-6 top-0 h-40 w-2/3 overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                <Image
                  src={IMAGE_URL}
                  alt="Hero artwork"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 top-10 h-40 w-2/3 overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                <Image
                  src={IMAGE_URL}
                  alt="Hero artwork"
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              <div className="absolute left-12 bottom-0 h-32 w-1/2 rounded-3xl border border-white/15 bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
