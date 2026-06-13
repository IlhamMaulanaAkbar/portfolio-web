"use client";

import Link from "next/link";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    const frame = requestAnimationFrame(() => setDarkMode(shouldUseDark));

    return () => cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold md:sr-only">
          Ilham
        </Link>

        <div className="-ml-4 hidden flex-1 items-center justify-start gap-5 text-sm font-semibold text-slate-700 md:flex dark:text-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-9 items-center rounded-full px-4 transition hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-500/15"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            aria-label="Github"
            className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-slate-800 transition hover:-translate-y-0.5 hover:text-blue-500 dark:bg-slate-800 dark:text-slate-100"
            href="https://github.com/"
          >
            <GithubIcon height={18} width={18} />
          </Link>
          <Link
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-slate-800 transition hover:-translate-y-0.5 hover:text-blue-500 dark:bg-slate-800 dark:text-slate-100"
            href="https://www.linkedin.com/"
          >
            <LinkedinIcon height={17} width={17} />
          </Link>
          <button
            aria-label="Toggle theme"
            className="grid h-9 w-12 place-items-center rounded-full bg-blue-50 text-slate-800 transition hover:-translate-y-0.5 hover:text-blue-500 dark:bg-slate-800 dark:text-slate-100"
            onClick={toggleTheme}
            type="button"
          >
            {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <button
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-slate-800 md:hidden dark:bg-slate-800 dark:text-slate-100"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <Link
                className="rounded-lg px-3 py-2 transition hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-500/15"
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
