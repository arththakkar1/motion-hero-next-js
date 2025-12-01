// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hero Library",
  description: "A collection of modern black and white hero sections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* GLOBAL HOME BUTTON */}
        <div className="fixed bottom-6 left-6 z-50">
          <Link
            href="/"
            className="flex items-center gap-2 p-3 border border-white/20 rounded-full
                       bg-white/5 hover:bg-white/10 transition text-white text-sm 
                       backdrop-blur-md"
          >
            <Home />
          </Link>
        </div>
      </body>
    </html>
  );
}
