import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { hasRealUrl, navLinks, site } from "../data/site";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled
          ? "border-line shadow-sm dark:border-dark-line dark:shadow-black/30"
          : "border-transparent"
      } bg-paper/90 backdrop-blur-md dark:bg-dark/90`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Logo / name */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-ink font-mono text-[11px] font-medium text-paper dark:bg-paper dark:text-ink">
            AO
          </span>
          <div className="leading-none">
            <span className="block text-sm font-semibold tracking-tight">
              Akash Ojha
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-muted dark:text-dark-muted sm:block">
              Full-Stack WordPress Dev
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors duration-150 hover:text-ink dark:text-dark-muted dark:hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-sm border border-line transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* GitHub */}
          {hasRealUrl(site.github) && (
            <a
              href={site.github}
              className="hidden rounded-sm border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40 sm:inline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-sm bg-ink px-3.5 py-1.5 text-[13px] font-medium text-paper transition hover:bg-accent dark:bg-paper dark:text-ink md:inline"
          >
            Start a project
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="grid h-8 w-8 place-items-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="border-t border-line bg-paper px-5 pb-5 pt-4 dark:border-dark-line dark:bg-dark"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm transition hover:bg-line dark:hover:bg-dark-card"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 border-t border-line pt-4 dark:border-dark-line">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-ink px-4 py-2.5 text-center text-sm font-medium text-paper dark:bg-paper dark:text-ink"
            >
              Start a project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
