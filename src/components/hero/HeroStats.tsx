import Image from "next/image";

const IMAGE_URL =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

const stats = [
  { label: "Layouts", value: "20+" },
  { label: "Lines of CSS", value: "< 400" },
  { label: "Color palette", value: "B/W" },
];

export default function HeroStats() {
  return (
    <section className="min-h-[70vh] bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr,0.7fr] md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ship dark hero sections
              <span className="block text-white/60">
                without inventing the layout again.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-white/70 sm:text-base">
              Copy any of these sections, change fonts and content, and you get
              a high-end landing feel with almost no effort.
            </p>
          </div>

          <div className="relative h-60 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src={IMAGE_URL}
              alt="Hero artwork"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <div className="text-xs text-white/50">{s.label}</div>
              <div className="text-lg font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
