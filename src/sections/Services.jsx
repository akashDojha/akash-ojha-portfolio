import {
  Blocks,
  Brush,
  Puzzle,
  ShoppingCart,
  Server,
  Layout,
  Cable,
  CreditCard,
  Truck,
  Wrench,
  Zap,
  Shield,
} from "lucide-react";
import { services } from "../data/content";

const icons = [
  Blocks,
  Brush,
  Puzzle,
  ShoppingCart,
  Server,
  Layout,
  Cable,
  CreditCard,
  Truck,
  Wrench,
  Zap,
  Shield,
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">07 — Services</p>
        <h2 className="display mt-3 text-[clamp(1.85rem,5vw,2.75rem)]">How I can help</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          Freelance and contract WordPress work — new builds, custom development, integrations and
          recovery of existing sites.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={service.title}
                className="card-hover group rounded-xl border border-line bg-white p-5 dark:border-dark-line dark:bg-dark-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-paper text-accent transition group-hover:border-accent/40 dark:border-dark-line dark:bg-dark">
                    <Icon size={16} />
                  </span>
                  <p className="font-mono text-[11px] text-muted dark:text-dark-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-3 text-[14px] font-semibold leading-snug">{service.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted dark:text-dark-muted">
                  {service.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-gradient-to-r from-white to-paper p-5 sm:p-6 dark:border-dark-line dark:from-dark-card dark:to-dark">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold">Need a custom WordPress solution?</p>
              <p className="mt-1 text-sm text-muted dark:text-dark-muted">
                New build, plugin, migration or fix — tell me what you need.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-accent sm:w-auto dark:bg-[#e8ecf4] dark:text-ink"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
