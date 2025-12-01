import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroGlass() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.06)] backdrop-blur-xl md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                GLASS HERO
              </p>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Glassmorphism
                <span className="block text-white/60">
                  without losing readability.
                </span>
              </h1>

              <p className="max-w-md text-sm text-white/70 sm:text-base">
                A frosted glass card layered over a dark background. Works
                really well when paired with high-contrast imagery like manga or
                illustrations.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-white/50">
                <span>Blurred background</span>
                <span>•</span>
                <span>Subtle border</span>
                <span>•</span>
                <span>Works on any image</span>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl border border-white/15">
              <Image
                src={IMAGE_URL}
                alt="Hero artwork"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
