import { backendSkills, frontendSkills } from "../data/content";

export default function WordPressExpertise() {
  return (
    <section id="expertise" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">02 — Custom WordPress Development</p>
        <h2 className="display mt-3 max-w-3xl text-[clamp(1.85rem,5vw,3rem)] leading-tight">
          Backend and frontend WordPress development, in the same practice.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-dark-muted">
          PHP and WordPress architecture on one side — HTML, CSS and JavaScript on the other.
          Including WooCommerce, APIs, REST endpoints and custom functionality across both.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="overflow-hidden rounded-2xl border border-line bg-white dark:border-dark-line dark:bg-dark-card">
            <div className="border-b border-line bg-paper/80 px-5 py-4 sm:px-6 dark:border-dark-line dark:bg-dark">
              <span className="badge-be inline-block rounded-md px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]">
                Backend
              </span>
              <h3 className="display mt-2 text-2xl leading-tight sm:text-3xl">
                PHP, plugins, data &amp; APIs
              </h3>
              <p className="mt-2 text-sm text-muted dark:text-dark-muted">
                Server-side WordPress — architecture, custom functionality, integrations and data.
              </p>
            </div>
            <ul className="grid gap-0 p-4 sm:grid-cols-2 sm:p-6">
              {backendSkills.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 border-b border-line py-2.5 text-sm last:border-0 dark:border-dark-line"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#1a2a3d] bg-[#0b1524] text-[#e8ecf4]">
            <div className="border-b border-white/10 px-5 py-4 sm:px-6">
              <span className="badge-fe inline-block rounded-md px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]">
                Frontend
              </span>
              <h3 className="display mt-2 text-2xl leading-tight sm:text-3xl">
                Interfaces people actually use
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Responsive UI, design to WordPress, JavaScript interactions and cross-browser delivery.
              </p>
            </div>
            <ul className="grid gap-0 p-4 sm:grid-cols-2 sm:p-6">
              {frontendSkills.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 border-b border-white/10 py-2.5 text-sm text-white/80 last:border-0"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5ec4c7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-line bg-line dark:border-dark-line dark:bg-dark-line sm:grid-cols-3">
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
