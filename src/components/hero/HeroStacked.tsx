import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroStacked() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Stacked hero layout
                <span className="block text-white/60">
                  with image breaking the card.
                </span>
              </h1>
              <p className="text-sm text-white/70 sm:text-base">
                This pattern feels more dynamic because the image escapes the
                container. It&apos;s subtle but adds a lot of energy.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-52 overflow-hidden rounded-3xl border border-white/20 bg-black">
                <Image
                  src={IMAGE_URL}
                  alt="Hero artwork"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />
        </div>
      </div>
    </section>
  );
}
