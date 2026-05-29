import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { StudentNameGate } from "@/components/StudentNameGate";
import "./globals.css";

export const metadata: Metadata = {
  title: "MathVista",
  description: "Visual mathematics for curious minds.",
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14213d"
};

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/learning-path", label: "Learning Path" },
  { href: "/geometry", label: "Geometry" },
  { href: "/algebra", label: "Algebra" },
  { href: "/practice", label: "Practice" },
  { href: "/progress", label: "Progress" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/92 backdrop-blur">
          <nav className="mx-auto grid max-w-7xl gap-3 px-4 py-3 sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="focus-ring w-fit rounded-md">
              <Logo />
            </Link>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring flex-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <StudentNameGate />
        {children}
        <footer className="mt-12 border-t border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600">
            <p className="font-semibold">MathVista · Visual mathematics for curious minds.</p>
            <p>
              Created by{" "}
              <a
                href="https://pushkar-mishra.github.io/"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-md font-black text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-900"
              >
                Pushkar Mishra
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
