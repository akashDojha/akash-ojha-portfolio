import { techStack } from "../data/content";

function Group({ kicker, title, items, dark: darkCard = false }) {
  return (
    <div
      className={
        darkCard
          ? "rounded-2xl border border-[#1a2a3d] bg-[#0b1524] p-5 sm:p-6"
          : "rounded-2xl border border-line bg-white p-5 sm:p-6 dark:border-dark-line dark:bg-dark-card"
      }
    >
      <p
        className={
          darkCard
            ? "font-mono text-[10px] uppercase tracking-[0.16em] text-[#5ec4c7]"
            : "font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
        }
      >
        {kicker}
      </p>
      <h3 className={darkCard ? "display mt-2 text-2xl text-[#e8ecf4]" : "display mt-2 text-2xl"}>
        {title}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={
              darkCard
                ? "rounded-lg border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-[#e8ecf4]/85"
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
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">04 — Tech stack</p>
        <h2 className="display mt-3 text-[clamp(1.85rem,5vw,2.75rem)]">The tools I actually work in</h2>
        <p className="mt-4 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          A working stack for WordPress products — not a list of every library on the internet.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Group kicker="Backend" title="Server-side" items={techStack.backend} />
          <Group kicker="Frontend" title="Client-side" items={techStack.frontend} dark />
          <Group kicker="WordPress" title="Platform" items={techStack.wordpress} />
        </div>
      </div>
    </section>
  );
}
