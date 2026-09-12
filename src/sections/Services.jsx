import { services } from "../data/content";

// Simple icon mapping by service index for visual variety
const iconSymbols = ["⚙", "🎨", "🧩", "🛒", "🖥", "📐", "🔗", "💳", "🚚", "🔧", "⚡", "🛡"];

export default function Services() {
  return (
    <section id="services" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">07 — Services</p>
        <h2 className="display mt-3 text-4xl">How I can help</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          Freelance and contract WordPress work — new builds, custom development, integrations and
          recovery of existing sites.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="card-hover group rounded-md border border-line bg-white p-5 transition dark:border-dark-line dark:bg-dark-card"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-mono text-[11px] text-muted dark:text-dark-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span
                  className="text-base opacity-60 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  {iconSymbols[i]}
                </span>
              </div>
              <h3 className="mt-3 text-[14px] font-semibold leading-snug">{service.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted dark:text-dark-muted">
                {service.body}
              </p>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 rounded-md border border-line bg-white p-6 dark:border-dark-line dark:bg-dark-card">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold">Need a custom WordPress solution?</p>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                Let's discuss your project requirements — new build, plugin, migration or fix.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent dark:bg-paper dark:text-ink"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
