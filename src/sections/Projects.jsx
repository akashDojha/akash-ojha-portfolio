import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">05 — Selected professional work</p>
        <h2 className="display mt-3 max-w-3xl text-4xl leading-tight">
          Client and company projects I contributed to as a WordPress developer.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted dark:text-dark-muted">
          These are live business websites — not personal projects. Where the exact scope is not
          publicly itemised, the role is described as professional WordPress development work rather
          than sole ownership of the product.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
