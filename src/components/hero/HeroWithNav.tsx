import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

export default function HeroWithNav() {
  return (
    <section className="min-h-[90vh] bg-black text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-sm text-white/70">
        <span className="font-medium tracking-wide">mono.hero</span>
        <nav className="hidden gap-6 sm:flex">
          <button className="hover:text-white">Components</button>
          <button className="hover:text-white">Docs</button>
          <button className="hover:text-white">Pricing</button>
        </nav>
        <button className="rounded-full border border-white/30 px-4 py-1.5 text-xs hover:border-white">
          Sign in
        </button>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 md:flex-row md:items-center md:pt-10">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A navigation-friendly
            <span className="block text-white/60">
              hero for your main layout.
            </span>
          </h1>

          <p className="max-w-lg text-sm text-white/70 sm:text-base">
            Use this pattern for root pages where you need a top nav + strong
            hero without feeling too heavy.
          </p>
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
