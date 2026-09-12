import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const indexColors = ["text-accent", "text-accent-2", "text-[#5a7fbf]", "text-[#8a5abf]"];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">06 — Project notes</p>
        <h2 className="display mt-3 text-4xl">What the live sites actually do</h2>
        <p className="mt-4 max-w-2xl text-[15px] text-muted dark:text-dark-muted">
          Visible product functionality only. No invented metrics, fabricated stack claims or
          unsupported ownership language.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-hover grid gap-6 overflow-hidden rounded-md border border-line bg-white dark:border-dark-line dark:bg-dark-card lg:grid-cols-[0.32fr_1fr]"
            >
              {/* Left sidebar */}
              <div className="border-b border-line bg-paper p-6 dark:border-dark-line dark:bg-dark lg:border-b-0 lg:border-r">
                <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${indexColors[index]}`}>
                  0{index + 1} / {project.name}
                </p>
                <h3 className="display mt-2 text-2xl leading-tight">{project.title}</h3>
                <p className="mt-2 text-xs font-medium text-accent-2">{project.category}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-sm border border-line bg-white px-3 py-2 text-xs font-medium transition hover:border-ink dark:border-dark-line dark:bg-dark-card dark:hover:border-paper/40"
                >
                  View Live Website
                  <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Right content */}
              <div className="p-6">
                <p className="text-[14px] leading-relaxed text-muted dark:text-dark-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-sm">
                  <span className="font-medium">Contribution: </span>
                  <span className="text-muted dark:text-dark-muted">{project.contribution}</span>
                </p>

                {/* Feature tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-sm border border-line bg-paper px-2 py-0.5 text-[11px] dark:border-dark-line dark:bg-dark"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Catalogue (if present) */}
                {project.catalogue && (
                  <p className="mt-4 text-xs text-muted dark:text-dark-muted">
                    <span className="font-medium">Public catalogue: </span>
                    {project.catalogue.join(", ")}.
                  </p>
                )}

                {/* Tech tags */}
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
