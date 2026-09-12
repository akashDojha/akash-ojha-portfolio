import { reasons } from "../data/content";

export default function WhyWorkWithMe() {
  return (
    <section className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">10 — Why work with me</p>
        <h2 className="display mt-3 text-4xl">What you can expect</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          A WordPress developer who handles both sides of the stack, communicates clearly and
          solves problems rather than passes them on.
        </p>

        {/* Stats row — the big numbers */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line dark:border-dark-line dark:bg-dark-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.slice(0, 4).map((item) => (
            <div
              key={item.label}
              className="bg-paper p-6 text-center dark:bg-dark"
            >
              <p className="stat-number">{item.label}</p>
              <p className="mt-2 text-xs text-muted dark:text-dark-muted">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Detail cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.slice(4).map((item) => (
            <article
              key={item.label}
              className="card-hover rounded-md border border-line bg-white p-5 dark:border-dark-line dark:bg-dark-card"
            >
              <p className="display text-xl font-semibold">{item.label}</p>
              <p className="mt-2 text-sm text-muted dark:text-dark-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
