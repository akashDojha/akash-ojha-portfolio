import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">08 — Experience</p>
        <h2 className="display mt-3 text-[clamp(1.85rem,5vw,2.75rem)]">Where the work happened</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          6+ years building WordPress products across two companies.
        </p>

        <ol className="mt-10 space-y-0 sm:mt-12">
          {experience.map((job) => (
            <li
              key={job.id}
              className="grid gap-4 border-t border-line py-8 dark:border-dark-line sm:py-10 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted dark:text-dark-muted">
                  {job.years}
                </p>
                <p className="mt-2 text-sm font-medium">{job.company}</p>
                <p className="mt-0.5 text-xs text-muted dark:text-dark-muted">{job.period}</p>
                {job.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/8 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-accent dark:border-accent/25 dark:text-[#5ec4c7]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <h3 className="display text-2xl sm:text-3xl">{job.role}</h3>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[14px] leading-relaxed text-muted dark:text-dark-muted"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
