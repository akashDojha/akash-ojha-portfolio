import { techStack } from "../data/content";

function Group({ kicker, title, items, dark: darkCard = false }) {
  return (
    <div
      className={
        darkCard
          ? "rounded-md border border-dark-line bg-[#111714] p-6"
          : "rounded-md border border-line bg-white p-6 dark:border-dark-line dark:bg-dark-card"
      }
    >
      <p
        className={
          darkCard
            ? "font-mono text-[10px] uppercase tracking-[0.18em] text-[#6a9e7e]"
            : "font-mono text-[10px] uppercase tracking-[0.18em] text-accent"
        }
      >
        {kicker}
      </p>
      <h3
        className={
          darkCard
            ? "display mt-2 text-2xl text-paper"
            : "display mt-2 text-2xl"
        }
      >
        {title}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={
              darkCard
                ? "rounded-sm border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-paper/80"
                : "skill-pill"
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">04 — Tech stack</p>
        <h2 className="display mt-3 text-4xl">The tools I actually work in</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          A working stack for WordPress products — not a list of every library on the internet.
          No fake percentage bars.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Group
            kicker="Backend"
            title="Server-side"
            items={techStack.backend}
          />
          <Group
            kicker="Frontend"
            title="Client-side"
            items={techStack.frontend}
            dark
          />
          <Group
            kicker="WordPress"
            title="Platform"
            items={techStack.wordpress}
          />
        </div>
      </div>
    </section>
  );
}
