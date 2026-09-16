import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">05 — Selected professional work</p>
        <h2 className="display mt-3 max-w-3xl text-[clamp(1.85rem,5vw,2.75rem)] leading-tight">
          Live WordPress functionality I contributed to as a developer.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted dark:text-dark-muted">
          Focused on features and delivery — catalogues, commerce flows, event tooling, enquiry
          systems and responsive WordPress builds. Client brand names are intentionally not listed.
        </p>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
