// src/components/hero/HeroNewsletter.tsx
import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroNewsletter() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-[1.2fr,0.8fr] md:py-20">
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get new hero layouts
            <span className="block text-white/60">
              and dark design patterns in your inbox.
            </span>
          </h1>

          <p className="max-w-md text-sm text-white/70 sm:text-base">
            A tiny newsletter about building sharp, minimal UIs with focus on
            typography and layout instead of bright gradients.
          </p>

          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-white/60"
            />
            <button
              type="submit"
              className="rounded-full border border-white bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-transparent hover:text-white"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-white/40">No spam. Just layout ideas.</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-60 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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
