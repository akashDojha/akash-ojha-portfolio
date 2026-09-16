import {
  Blocks,
  Puzzle,
  ShoppingCart,
  Cable,
  Settings2,
  Workflow,
} from "lucide-react";
import { themePluginItems } from "../data/content";

const icons = [Blocks, Puzzle, ShoppingCart, Cable, Settings2, Workflow];

const capabilities = [
  {
    title: "Theme architecture",
    body: "Template hierarchy, custom fields, and UI systems shaped around the product — not page-builder sprawl.",
  },
  {
    title: "Plugin systems",
    body: "Isolated business logic: CPTs, admin tools, hooks, and features that belong outside the theme.",
  },
  {
    title: "Commerce extensions",
    body: "WooCommerce behaviour beyond a default catalogue — checkout, accounts, and store rules.",
  },
];

export default function ThemesPlugins() {
  return (
    <section className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">03 — Custom WordPress Themes &amp; Plugins</p>
        <h2 className="display mt-3 max-w-3xl text-[clamp(1.85rem,5vw,3rem)] leading-tight">
          Not just installing WordPress — I build custom WordPress solutions.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted dark:text-dark-muted">
          Custom themes and plugins based on business requirements — functionality, integrations,
          WooCommerce features and API-driven solutions that off-the-shelf plugins cannot deliver.
        </p>

        {/* Advanced capability visual */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#0b1524] via-[#0f1c30] to-[#0d7377]/40 p-5 text-white shadow-xl sm:p-8 dark:border-dark-line">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-lg">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5ec4c7]">
                Build approach
              </p>
              <h3 className="display mt-2 text-2xl sm:text-3xl">
                Themes, plugins &amp; commerce as a system
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Clear separation between presentation, business logic and integrations — so products
                stay maintainable after launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Custom Themes", "Custom Plugins", "WooCommerce", "REST APIs"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {capabilities.map((item, i) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#5ec4c7]/40 hover:bg-white/10"
              >
                <p className="font-mono text-[10px] text-[#5ec4c7]">0{i + 1}</p>
                <h4 className="mt-2 text-sm font-semibold">{item.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Capability grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {themePluginItems.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={item.title}
                className="card-hover rounded-xl border border-line bg-white p-5 dark:border-dark-line dark:bg-dark-card"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-paper text-accent dark:border-dark-line dark:bg-dark">
                  <Icon size={16} />
                </span>
                <h3 className="mt-3 text-[14px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted dark:text-dark-muted">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
