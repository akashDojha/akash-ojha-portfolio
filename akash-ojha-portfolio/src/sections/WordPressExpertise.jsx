import { backendSkills, frontendSkills } from "../data/content";

export default function WordPressExpertise() {
  return (
    <section id="expertise" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        {/* Header */}
        <p className="section-kicker">02 — Custom WordPress Development</p>
        <h2 className="display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
          Backend and frontend WordPress development, in the same practice.
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-dark-muted">
          PHP and WordPress architecture on one side — HTML, CSS and JavaScript on the other.
          Including WooCommerce, APIs, REST endpoints and custom functionality across both.
        </p>

        {/* Two-column expertise cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Backend card */}
          <div className="card-hover overflow-hidden rounded-md border border-line bg-white dark:border-dark-line dark:bg-dark-card">
            <div className="border-b border-line bg-paper px-6 py-4 dark:border-dark-line dark:bg-dark">
              <span className="badge-be inline-block rounded-sm px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em]">
                Backend
              </span>
              <h3 className="display mt-2 text-3xl leading-tight">
                PHP, plugins, data &amp; APIs
              </h3>
              <p className="mt-2 text-sm text-muted dark:text-dark-muted">
                Server-side WordPress — architecture, custom functionality, integrations and data.
              </p>
            </div>
            <ul className="grid p-6 gap-0 sm:grid-cols-2">
              {backendSkills.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 border-b border-line py-2.5 text-sm last:border-0 dark:border-dark-line sm:last:border-0"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend card */}
          <div className="card-hover overflow-hidden rounded-md border border-dark-line bg-[#111714] text-paper">
            <div className="border-b border-white/10 px-6 py-4">
              <span className="badge-fe inline-block rounded-sm px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em]">
                Frontend
              </span>
              <h3 className="display mt-2 text-3xl leading-tight">
                Interfaces people actually use
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Responsive UI, design to WordPress, JavaScript interactions and cross-browser delivery.
              </p>
            </div>
            <ul className="grid p-6 gap-0 sm:grid-cols-2">
              {frontendSkills.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 border-b border-white/10 py-2.5 text-sm text-white/80 last:border-0"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#6a9e7e]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom callout strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-line bg-line dark:border-dark-line dark:bg-dark-line sm:grid-cols-3">
          {[
            { label: "Custom Plugin Dev", desc: "Business logic in maintainable PHP plugins" },
            { label: "WooCommerce", desc: "Catalogue, checkout, payments and store customisation" },
            { label: "REST API Integration", desc: "Third-party services connected to WordPress" },
          ].map((item) => (
            <div key={item.label} className="bg-paper p-4 dark:bg-dark">
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-xs text-muted dark:text-dark-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
