import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">08 — Experience</p>
        <h2 className="display mt-3 text-4xl">Where the work happened</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          5.5+ years building WordPress products across two companies.
        </p>

        <ol className="mt-12 space-y-0">
          {experience.map((job, idx) => (
            <li
              key={job.id}
              className="grid gap-4 border-t border-line py-10 dark:border-dark-line md:grid-cols-[200px_1fr]"
            >
              {/* Left: date + company */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted dark:text-dark-muted">
                  {job.years}
                </p>
                <p className="mt-2 text-sm font-medium">{job.company}</p>
                <p className="mt-0.5 text-xs text-muted dark:text-dark-muted">{job.period}</p>
                {job.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-sm border border-accent/30 bg-accent/8 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-accent dark:border-accent/25 dark:text-[#7db89a]">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Right: role + points */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="display text-2xl sm:text-3xl">{job.role}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px] leading-relaxed text-muted dark:text-dark-muted">
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
