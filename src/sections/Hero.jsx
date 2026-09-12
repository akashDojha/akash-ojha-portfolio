import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { hasRealUrl, site } from "../data/site";

const snippet = `<?php
// Custom plugin bootstrap — illustrative only

add_action( 'init', 'ao_register_cpt' );

function ao_register_cpt() {
  register_post_type( 'solution', [
    'public'       => true,
    'show_in_rest' => true,
    'supports'     => [ 'title', 'editor', 'thumbnail' ],
  ] );
}

add_filter( 'woocommerce_checkout_fields',
  function( $fields ) {
    // custom field logic
    return $fields;
  }
);

add_action( 'rest_api_init', function () {
  register_rest_route( 'ao/v1', '/data',
    [ 'methods' => 'GET',
      'callback' => 'ao_api_handler' ]
  );
} );`;

const stats = [
  { value: "6+", label: "Years WordPress" },
  { value: "40+", label: "Websites Built" },
  { value: "BE + FE", label: "Full-Stack" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grid-bg">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* ── Left column ── */}
          <div className="animate-fade-in-up">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 rounded-sm border border-line bg-white/70 px-3 py-1 dark:border-dark-line dark:bg-dark-card/60">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent dark:text-[#7db89a]">
                Full-Stack · Backend + Frontend
              </span>
            </div>

            {/* Name */}
            <h1 className="display mt-5 text-[clamp(2.8rem,7vw,5.2rem)] leading-[1.0] tracking-tight">
              {site.name}
            </h1>

            {/* Title */}
            <p className="mt-4 text-xl font-semibold sm:text-2xl">{site.title}</p>

            {/* Subtitle line */}
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted dark:text-dark-muted">
              Backend &amp; Frontend · Custom Themes &amp; Plugins · WooCommerce · PHP · APIs
            </p>

            {/* Positioning statement */}
            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-muted dark:text-dark-muted">
              {site.positioning}
            </p>

            {/* BE / FE badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["PHP", "WordPress", "WooCommerce", "Custom Plugins", "Custom Themes", "REST API"].map((t) => (
                <span key={t} className="badge-be rounded-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
                  {t}
                </span>
              ))}
              {["JavaScript", "HTML5", "CSS3", "jQuery", "AJAX", "Responsive UI"].map((t) => (
                <span key={t} className="badge-fe rounded-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-paper/90"
              >
                View selected work
                <ArrowDownRight size={15} />
              </a>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 text-sm transition hover:border-ink dark:border-dark-line dark:hover:border-paper/50"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 text-sm transition hover:border-ink dark:border-dark-line dark:hover:border-paper/50"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => { document.getElementById("from_name")?.focus(); }, 600);
                }}
              >
                Start a Project
              </a>
            </div>

            {/* Contact row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
              >
                <Mail size={13} /> {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              {hasRealUrl(site.github) && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition hover:text-ink dark:text-dark-muted dark:hover:text-paper"
                >
                  <Github size={13} /> GitHub
                </a>
              )}
              <span className="inline-flex items-center gap-1.5 text-muted dark:text-dark-muted">
                <MapPin size={13} /> {site.location}
              </span>
            </div>

            {/* Stats strip */}
            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-line bg-line dark:border-dark-line dark:bg-dark-line">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-paper px-4 py-3 text-center dark:bg-dark"
                >
                  <p className="font-display text-2xl font-semibold">{s.value}</p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: code panel ── */}
          <aside className="animate-fade-in-up delay-200 self-center">
            <div className="overflow-hidden rounded-md border border-line shadow-2xl dark:border-dark-line">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1f18] px-3.5 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c46b2d]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c4b35a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2f6b4f]" />
                <span className="ml-3 font-mono text-[10px] text-white/40">custom-plugin.php</span>
              </div>
              {/* Code */}
              <pre className="code-panel overflow-x-auto bg-[#111714] p-4 text-[#b8cfb9]">
                <code>{snippet}</code>
              </pre>
              {/* Bottom pills */}
              <div className="grid grid-cols-3 gap-px bg-white/10 bg-[#1a1f18]">
                {["PHP · Hooks", "WooCommerce", "REST API"].map((label) => (
                  <div
                    key={label}
                    className="bg-[#0f1310] px-2 py-2.5 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-[#6a9e7e]"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
              Illustrative pattern — not client source code
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
