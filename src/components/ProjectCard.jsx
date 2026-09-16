export default function ProjectCard({ project, index = 0 }) {
  const title = project.category || project.industry || "WordPress Development";

  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-line bg-white p-4 sm:p-5 dark:border-dark-line dark:bg-dark-card">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-2">
          {project.industry}
        </p>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted dark:border-dark-line dark:text-dark-muted">
          0{index + 1}
        </span>
      </div>

      <h3 className="display mt-2 text-[1.35rem] leading-tight sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted dark:text-dark-muted">
        {project.shortDescription}
      </p>

      <div className="mt-4 rounded-xl border border-line bg-paper/80 p-3 dark:border-dark-line dark:bg-dark">
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
          My contribution
        </p>
        <p className="mt-1 text-[13px] font-medium">{project.role}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted dark:text-dark-muted">
          {project.contribution}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
          Key functionality
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-lg border border-line bg-white px-2.5 py-1 text-[11px] dark:border-dark-line dark:bg-dark-card"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
          Development areas
        </p>
        <ul className="mt-2 space-y-1.5">
          {project.development.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {project.technologies.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
