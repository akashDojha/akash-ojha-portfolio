import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { hasRealUrl, site } from "../data/site";

const layers = [
  { label: "Frontend UI", sub: "HTML · CSS · JS · Responsive", tone: "fe" },
  { label: "WordPress Layer", sub: "Themes · Plugins · WooCommerce", tone: "mid" },
  { label: "Backend Core", sub: "PHP · Hooks · MySQL · REST API", tone: "be" },
];

const orbit = ["Custom Plugins", "WooCommerce", "REST APIs", "Themes"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden mesh-bg">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Copy */}
          <div className="animate-fade-in-up min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/70 px-3 py-1.5 backdrop-blur dark:border-dark-line dark:bg-dark-card/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent dark:text-[#5ec4c7]">
                Full-Stack WordPress · Backend + Frontend
              </span>
            </div>

            <h1 className="display mt-5 text-[clamp(2.6rem,11vw,5rem)] leading-[0.95] tracking-tight text-[#0c1222] dark:text-[#e8ecf4]">
              {site.name}
            </h1>

            <p className="mt-4 text-lg font-semibold text-[#0c1222] sm:text-xl dark:text-[#e8ecf4]">
              {site.title}
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#3f4a5c] dark:text-dark-muted">
              {site.positioning}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-accent dark:bg-[#e8ecf4] dark:text-ink dark:hover:bg-white"
              >
                View selected work
                <ArrowDownRight size={16} />
              </a>
              <a
                href={site.resumePath}
                download="Akash-Ojha-WordPress-Developer-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white/60 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-ink dark:border-dark-line dark:bg-dark-card/60 dark:hover:border-paper/40"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
              >
                Start a Project
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted dark:text-dark-muted">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 transition hover:text-ink dark:hover:text-paper"
              >
                <Mail size={14} />
                <span className="truncate max-w-[220px] sm:max-w-none">{site.email}</span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-ink dark:hover:text-paper"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              {hasRealUrl(site.github) && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-ink dark:hover:text-paper"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> {site.location}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { value: site.experienceYears, label: "Years" },
                { value: "40+", label: "Websites" },
                { value: "BE+FE", label: "Full-Stack" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-line/80 bg-white/70 px-2 py-3 text-center backdrop-blur sm:px-4 dark:border-dark-line dark:bg-dark-card/70"
                >
                  <p className="display text-xl sm:text-2xl">{s.value}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture visual — replaces code panels */}
          <aside className="animate-fade-in-up delay-200 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="arch-board rounded-2xl border border-white/10 bg-[#0b1524] p-4 shadow-2xl shadow-accent/10 sm:p-6">
              <div className="arch-glow" aria-hidden="true" />

              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5ec4c7]">
                    Delivery model
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">WordPress architecture</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/70">
                  Live stack
                </span>
              </div>

              <div className="space-y-3">
                {layers.map((layer, i) => (
                  <div
                    key={layer.label}
                    className={`arch-node animate-float${i === 1 ? "-delayed" : ""} rounded-xl px-4 py-3.5`}
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{layer.label}</p>
                        <p className="mt-0.5 truncate font-mono text-[10px] text-white/50">{layer.sub}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-2 py-1 font-mono text-[9px] uppercase tracking-wider ${
                          layer.tone === "fe"
                            ? "bg-[#1a6bb5]/25 text-[#8cbcf0]"
                            : layer.tone === "be"
                              ? "bg-[#0d7377]/30 text-[#5ec4c7]"
                              : "bg-white/10 text-white/70"
                        }`}
                      >
                        {layer.tone === "fe" ? "UI" : layer.tone === "be" ? "PHP" : "WP"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {orbit.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0d7377]/30 to-transparent p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#5ec4c7]">Backend</p>
                  <p className="mt-1 text-xs leading-snug text-white/85">Plugins, APIs, data &amp; commerce logic</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#1a6bb5]/30 to-transparent p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#8cbcf0]">Frontend</p>
                  <p className="mt-1 text-xs leading-snug text-white/85">Responsive UI, JS interactions, polish</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
