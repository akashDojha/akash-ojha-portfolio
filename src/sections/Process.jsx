import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">09 — Process</p>
        <h2 className="display mt-3 max-w-2xl text-[clamp(1.85rem,5vw,2.75rem)] leading-tight">
          A path that covers UI and PHP, not one or the other.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          From requirement gathering through to deployment — both sides of the stack at each stage.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line dark:border-dark-line dark:bg-dark-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.n}
              className="group relative bg-paper p-5 transition hover:bg-white dark:bg-dark dark:hover:bg-dark-card"
            >
              <p className="font-mono text-[10px] font-medium text-accent">{step.n}</p>
              <h3 className="mt-3 text-[13px] font-semibold leading-snug">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted dark:text-dark-muted">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 dark:border-dark-line dark:bg-dark-card sm:flex-row sm:flex-wrap sm:items-center">
          <span className="badge-be rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            Backend: PHP · Hooks · MySQL · WooCommerce
          </span>
          <span className="hidden font-mono text-xs text-muted dark:text-dark-muted sm:inline">+</span>
          <span className="badge-fe rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
            Frontend: HTML · CSS · JS · Responsive
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted sm:ml-auto">
            Both sides. One developer.
          </span>
        </div>
      </div>
    </section>
  );
}
