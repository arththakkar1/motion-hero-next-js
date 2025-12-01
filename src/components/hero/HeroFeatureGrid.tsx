import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

const features = [
  "20+ hero layouts",
  "Monochrome first",
  "Responsive out of the box",
  "Next.js + Tailwind",
];

export default function HeroFeatureGrid() {
  return (
    <section className="min-h-[80vh] bg-black text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-[1.2fr,0.8fr] md:py-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A small library of
            <span className="block text-white/60">
              hero sections that match.
            </span>
          </h1>

          <p className="max-w-xl text-sm text-white/70 sm:text-base">
            Instead of collecting random UI pieces, start from a set of heroes
            that already feel like the same product. Swap the copy, keep the
            structure.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-72 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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
