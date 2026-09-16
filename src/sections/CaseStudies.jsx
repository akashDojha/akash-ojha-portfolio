import { projects } from "../data/projects";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">06 — Project notes</p>
        <h2 className="display mt-3 text-[clamp(1.85rem,5vw,2.75rem)]">
          Functionality delivered on these builds
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] text-muted dark:text-dark-muted">
          Feature and development notes only — no client brand names, screenshots or live site links.
        </p>

        <div className="mt-10 space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-hover grid overflow-hidden rounded-2xl border border-line bg-white dark:border-dark-line dark:bg-dark-card lg:grid-cols-[0.34fr_1fr]"
            >
              <div className="border-b border-line bg-paper p-5 sm:p-6 dark:border-dark-line dark:bg-dark lg:border-b-0 lg:border-r">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  0{index + 1} / {project.industry}
                </p>
                <h3 className="display mt-2 text-xl leading-tight sm:text-2xl">
                  {project.category}
                </h3>
                <p className="mt-3 text-xs font-medium text-muted dark:text-dark-muted">
                  {project.role}
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[14px] leading-relaxed text-muted dark:text-dark-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-sm">
                  <span className="font-medium">Contribution: </span>
                  <span className="text-muted dark:text-dark-muted">{project.contribution}</span>
                </p>

                <p className="mt-5 font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
                  Functionality delivered
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg border border-line bg-paper px-2.5 py-1 text-[11px] dark:border-dark-line dark:bg-dark"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {project.catalogue && (
                  <p className="mt-4 text-xs text-muted dark:text-dark-muted">
                    <span className="font-medium">Catalogue areas: </span>
                    {project.catalogue.join(", ")}.
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="tag text-muted dark:text-dark-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
