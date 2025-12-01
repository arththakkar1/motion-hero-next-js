# Motion Hero

> A collection of 20 modern, cinematic hero sections for Next.js applications

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Motion Hero is a curated library of 20 production-ready hero sections designed with a minimal, monochrome aesthetic. Built with Next.js 16 App Router and styled with TailwindCSS, each hero component is crafted for maximum visual impact with clean, modern layouts.

---

## ✨ Features

- 🎨 **12 Unique Hero Designs** — From minimal to feature-rich layouts
- 🖤 **Monochrome Theme** — Elegant black & white design system
- 🎬 **Cinematic Appeal** — High-impact visual storytelling
- ⚡ **Next.js 16 App Router** — Modern routing architecture
- 🎯 **TailwindCSS** — Utility-first styling for easy customization
- 📱 **Fully Responsive** — Looks great on all devices
- 🧩 **Copy & Paste Ready** — Drop into any project instantly

---

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS framework
- [React](https://react.dev/) — UI component library

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/motion-hero.git

# Navigate to project directory
cd motion-hero

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the hero gallery.

---

## 📁 Project Structure

```
motion-hero/
├── app/
│   ├── heroes/
│   │   ├── split/
│   │   │   └── page.tsx
│   │   ├── centered/
│   │   │   └── page.tsx
│   │   ├── minimal/
│   │   │   └── page.tsx
│   │   ├── overlay/
│   │   │   └── page.tsx
│   │   ├── glass/
│   │   │   └── page.tsx
│   │   ├── feature-grid/
│   │   │   └── page.tsx
│   │   ├── stats/
│   │   │   └── page.tsx
│   │   ├── cta/
│   │   │   └── page.tsx
│   │   ├── newsletter/
│   │   │   └── page.tsx
│   │   ├── showcase/
│   │   │   └── page.tsx
│   │   ├── stacked/
│   │   │   └── page.tsx
│   │   └── with-nav/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── hero/
│       ├── HeroSplit.tsx
│       ├── HeroCentered.tsx
│       ├── HeroMinimal.tsx
│       ├── HeroOverlay.tsx
│       ├── HeroGlass.tsx
│       ├── HeroFeatureGrid.tsx
│       ├── HeroStats.tsx
│       ├── HeroCTA.tsx
│       ├── HeroNewsletter.tsx
│       ├── HeroShowcase.tsx
│       ├── HeroStacked.tsx
│       └── HeroWithNav.tsx
└── public/
```

---

## 🎭 Hero Components

Each hero section is accessible via its own route:

| Route                  | Component       | Description                                    |
| ---------------------- | --------------- | ---------------------------------------------- |
| `/heroes/split`        | HeroSplit       | Two-column split layout with image and content |
| `/heroes/centered`     | HeroCentered    | Center-aligned content with background image   |
| `/heroes/minimal`      | HeroMinimal     | Clean, text-focused minimal design             |
| `/heroes/overlay`      | HeroOverlay     | Full-screen image with text overlay            |
| `/heroes/glass`        | HeroGlass       | Glassmorphism effect with backdrop blur        |
| `/heroes/feature-grid` | HeroFeatureGrid | Hero with integrated feature highlights        |
| `/heroes/stats`        | HeroStats       | Includes key metrics and statistics            |
| `/heroes/cta`          | HeroCTA         | Strong call-to-action focused layout           |
| `/heroes/newsletter`   | HeroNewsletter  | Built-in newsletter subscription form          |
| `/heroes/showcase`     | HeroShowcase    | Product/portfolio showcase layout              |
| `/heroes/stacked`      | HeroStacked     | Layered content sections                       |
| `/heroes/with-nav`     | HeroWithNav     | Integrated navigation bar                      |

---

## 📸 Preview

```
[Screenshot placeholder - Add your hero gallery screenshot here]
```

---

## 🎨 Customization

All hero components share a consistent design system and use the same hero image for visual cohesion. To customize:

### Change the Hero Image

Replace the image URL in each component:

```tsx
// Current image
const HERO_IMAGE =
  "https://images.saymedia-content.com/.image/t_share/MTczOTM5NzMzODQyMzcxNjQ4/guts-a-berserk-character-analysis.jpg";

// Replace with your own
const HERO_IMAGE = "/your-custom-image.jpg";
```

### Modify Colors

The monochrome theme uses TailwindCSS utilities. Adjust colors in the component files:

```tsx
// Black & white theme
className = "bg-black text-white";

// Custom theme
className = "bg-slate-900 text-slate-50";
```

### Adjust Layout

Each component is built with TailwindCSS, making responsive adjustments simple:

```tsx
className = "grid md:grid-cols-2 gap-8";
```

---

## 🧑‍💻 Usage

Import and use any hero component in your Next.js pages:

```tsx
import { HeroSplit } from "@/components/hero/HeroSplit";

export default function Home() {
  return (
    <main>
      <HeroSplit />
    </main>
  );
}
```

---

## 📝 License

MIT License - feel free to use this project for personal or commercial applications.

---

## 🙏 Acknowledgments

Hero image sourced from Saymedia Content. All hero designs are inspired by modern web design trends and best practices.

---

## 🔗 Links

- [Live Demo](#) _(coming soon)_

---

<div align="center">

**Built with ♥ using Next.js, TailwindCSS and Motion**

</div>
