// src/components/hero/HeroCTA.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroCTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to drop in
            <span className="block text-white/60">
              a modern hero into your app?
            </span>
          </h1>

          <p className="max-w-lg text-sm text-white/70 sm:text-base">
            Use this call-to-action focused hero on pricing pages, product
            launches, or key moments in your site.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-transparent hover:text-white">
            Copy the component
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1">
          <div className="relative h-60 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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
