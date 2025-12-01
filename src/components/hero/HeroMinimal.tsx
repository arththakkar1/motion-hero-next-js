// src/components/hero/HeroMinimal.tsx
import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroMinimal() {
  return (
    <section className="min-h-[70vh] bg-black text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Minimal hero layout
            <span className="block text-white/50">
              no gradients, no noise, just type.
            </span>
          </h1>

          <p className="max-w-lg text-sm text-white/60 sm:text-base">
            A stripped-down hero for when you want the content to speak louder
            than the UI. Perfect for blogs, case studies or serious products.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-white/45">
            <span>Monochrome</span>
            <span>•</span>
            <span>Flexible grid</span>
            <span>•</span>
            <span>Typography-focused</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src={IMAGE_URL}
              alt="Hero artwork"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
