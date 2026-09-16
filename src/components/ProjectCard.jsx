import { ArrowUpRight } from "lucide-react";
import { asset } from "../data/site";

export default function ProjectCard({ project, index = 0 }) {
  const imageSrc = asset(project.image);
  const title = project.category || project.industry || "WordPress Project";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-xl dark:border-dark-line dark:bg-dark-card dark:hover:shadow-2xl">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden"
        aria-label={`Open live ${title} website`}
      >
        <div className="relative aspect-[16/10] bg-[#e8ecf2] dark:bg-[#0b1524]">
          <img
            src={imageSrc}
            alt={`${title} website screenshot`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fb = e.currentTarget.parentElement.querySelector("[data-fallback]");
              if (fb) fb.classList.remove("hidden");
            }}
          />
          <div
            data-fallback
            aria-hidden="true"
            className="absolute inset-0 hidden flex-col items-center justify-center bg-[#0b1524] p-6 text-center"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5ec4c7]">
              Live functionality
            </p>
            <p className="display mt-2 text-xl text-white sm:text-2xl">{title}</p>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute top-3 left-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-paper/85 backdrop-blur-sm">
            0{index + 1}
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-paper/85">Live</span>
          </div>
        </div>
      </a>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-2">
            {project.industry}
          </p>
          <h3 className="display mt-1 text-[1.35rem] leading-tight sm:text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted dark:text-dark-muted">
            {project.shortDescription}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-paper/80 p-3 dark:border-dark-line dark:bg-dark">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
            My contribution
          </p>
          <p className="mt-1 text-[13px] font-medium">{project.role}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted dark:text-dark-muted">
            {project.contribution}
          </p>
        </div>

        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
            Key functionality
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.features.slice(0, 8).map((feature) => (
              <span
                key={feature}
                className="rounded-lg border border-line bg-white px-2.5 py-1 text-[11px] dark:border-dark-line dark:bg-dark-card"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
            Development areas
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.development.slice(0, 5).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition hover:text-accent"
        >
          View Live Website
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
