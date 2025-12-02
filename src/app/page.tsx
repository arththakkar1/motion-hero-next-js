"use client";

import Link from "next/link";

const heroes = [
  { slug: "minimal", label: "Minimal" },
  { slug: "blur-glow", label: "Blur Glow" },
  { slug: "split", label: "Split Layout" },
  { slug: "image-overlay", label: "Image Overlay" },
  { slug: "video", label: "Video Background" },
  { slug: "glass", label: "Glassmorphism" },
  { slug: "product", label: "Product / E-commerce" },
  { slug: "tech", label: "Tech / Terminal" },
  { slug: "neon", label: "Neon Minimal" },
  { slug: "cinematic", label: "Cinematic" },
  { slug: "video-cinematic", label: "Video Cinematic" },
  { slug: "video-split", label: "Video Split" },
  { slug: "cta", label: "Call To Action" },
  { slug: "centered", label: "Centered Layout" },
  { slug: "feature-grid", label: "Feature Grid" },
  { slug: "newsletter", label: "Newsletter" },
  { slug: "showcase", label: "Showcase" },
  { slug: "stacked", label: "Stacked" },
  { slug: "stats", label: "Stats" },
  { slug: "with-nav", label: "Hero with Nav" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hero Library
          </h1>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Explore 20 beautiful, modern, animated hero sections — crafted in
            pure black & white using Next.js 16, Tailwind CSS, Inter, and Framer
            Motion.
          </p>

          <div className="w-24 h-px bg-white/20 mx-auto mt-6" />
        </header>

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {heroes.map((hero, index) => (
            <div key={hero.slug}>
              <Link
                key={index}
                href={`/heroes/${hero.slug}`}
                className="group border border-white/10 rounded-xl p-5 
                hover:border-white/40 transition-all 
                bg-white/0.5 hover:bg-white/6
                backdrop-blur-sm
                flex flex-col justify-between 
                h-full shadow-[0_0_0_0_rgba(255,255,255,0.05)]
                hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.06)]"
              >
                <div>
                  <h2 className="text-lg font-semibold transition-transform group-hover:translate-x-1">
                    {hero.label}
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    /heroes/{hero.slug}
                  </p>
                </div>

                <span className="text-xs text-gray-400 mt-5 group-hover:text-white transition">
                  View demo →
                </span>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
