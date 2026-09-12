import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { hasRealUrl, site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto]">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-sm bg-ink font-mono text-[11px] text-paper dark:bg-paper dark:text-ink">
                AO
              </span>
              <div>
                <p className="text-sm font-semibold">{site.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                  Full-Stack WordPress Developer
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted dark:text-dark-muted">
              5.5+ years building custom WordPress websites, plugins, themes, WooCommerce
              platforms and API integrations. Based in {site.location}.
            </p>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
            >
              <Mail size={13} /> {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
            >
              <Phone size={13} /> {site.phone}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
            >
              <Linkedin size={13} /> LinkedIn
            </a>
            {hasRealUrl(site.github) && (
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
              >
                <Github size={13} /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-6 dark:border-dark-line">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
            © {year} {site.name}
          </p>
          <div className="flex gap-4 font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
            <a href="#about" className="transition hover:text-ink dark:hover:text-paper">About</a>
            <a href="#projects" className="transition hover:text-ink dark:hover:text-paper">Work</a>
            <a href="#services" className="transition hover:text-ink dark:hover:text-paper">Services</a>
            <a href="#contact" className="transition hover:text-ink dark:hover:text-paper">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
