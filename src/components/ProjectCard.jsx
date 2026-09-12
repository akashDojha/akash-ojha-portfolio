import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-shadow duration-300 hover:shadow-xl dark:border-dark-line dark:bg-dark-card dark:hover:shadow-2xl">
      {/* Screenshot */}
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden"
        aria-label={`Open ${project.name} live website`}
      >
        <div className="relative aspect-[16/9] bg-[#e4e0d8] dark:bg-[#0f1310]">
          <img
            src={project.image}
            alt={`${project.name} website screenshot`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fb = e.currentTarget.parentElement.querySelector("[data-fallback]");
              if (fb) fb.classList.remove("hidden");
            }}
          />
          {/* Fallback */}
          <div
            data-fallback
            aria-hidden="true"
            className="hidden absolute inset-0 flex flex-col items-center justify-center bg-[#111714] p-6 text-center"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6a9e7e]">
              Live site
            </p>
            <p className="display mt-2 text-3xl text-paper">{project.name}</p>
            <p className="mt-2 text-xs text-white/50">{project.url.replace("https://", "")}</p>
          </div>
          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {/* Live badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-sm bg-ink/80 px-2 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-paper/80">
              Live
            </span>
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Industry + name */}
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent-2">
            {project.industry}
          </p>
          <h3 className="display mt-1 text-2xl leading-tight">{project.name}</h3>
          <p className="mt-0.5 text-xs text-muted dark:text-dark-muted">{project.category}</p>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted dark:text-dark-muted">
          {project.shortDescription}
        </p>

        {/* Role */}
        <div className="rounded-sm border border-line bg-paper p-3 dark:border-dark-line dark:bg-dark">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
            My contribution
          </p>
          <p className="mt-1 text-[13px] font-medium">{project.role}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted dark:text-dark-muted">
            {project.contribution}
          </p>
        </div>

        {/* Development areas */}
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
            Development areas
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.development.slice(0, 5).map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tag) => (
            <span
              key={tag}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-accent"
        >
          View Live Website
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
