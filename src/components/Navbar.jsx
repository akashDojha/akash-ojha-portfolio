import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { hasRealUrl, navLinks, site } from "../data/site";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line/80 shadow-sm shadow-ink/5 dark:border-dark-line dark:shadow-black/40"
          : "border-transparent"
      } bg-paper/85 backdrop-blur-xl dark:bg-dark/85`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink font-mono text-[11px] font-semibold text-paper dark:bg-[#e8ecf4] dark:text-ink">
            AO
          </span>
          <div className="min-w-0 leading-none">
            <span className="block truncate text-sm font-semibold tracking-tight">Akash Ojha</span>
            <span className="mt-1 hidden font-mono text-[9px] uppercase tracking-[0.12em] text-muted dark:text-dark-muted sm:block">
              Full-Stack WordPress
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-1.5 text-[13px] text-muted transition-colors hover:bg-line/60 hover:text-ink dark:text-dark-muted dark:hover:bg-dark-card dark:hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {hasRealUrl(site.github) && (
            <a
              href={site.github}
              className="hidden rounded-lg border border-line px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40 sm:inline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          <a
            href="#contact"
            className="hidden rounded-lg bg-ink px-3.5 py-2 text-[13px] font-semibold text-paper transition hover:bg-accent md:inline dark:bg-[#e8ecf4] dark:text-ink"
          >
            Start a project
          </a>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line xl:hidden dark:border-dark-line"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[57px] z-40 xl:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            className="absolute inset-x-0 top-0 max-h-[calc(100dvh-57px)] overflow-y-auto border-b border-line bg-paper px-4 pb-6 pt-3 shadow-xl dark:border-dark-line dark:bg-dark"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium transition hover:bg-line/70 dark:hover:bg-dark-card"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-paper dark:bg-[#e8ecf4] dark:text-ink"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
