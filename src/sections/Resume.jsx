import { ArrowUpRight, Download, FileText, Sparkles } from "lucide-react";
import { site } from "../data/site";

const highlights = [
  { label: "Experience", value: "6+ years" },
  { label: "Projects", value: "40+ sites" },
  { label: "Stack", value: "BE + FE" },
  { label: "Focus", value: "WordPress" },
];

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">11 — Resume</p>
        <h2 className="display mt-3 text-[clamp(1.85rem,5vw,2.75rem)]">Download my CV</h2>
        <p className="mt-3 max-w-xl text-[15px] text-muted dark:text-dark-muted">
          A modern one-page resume with experience, skills and selected professional projects —
          ready for recruiters and clients.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-sm dark:border-dark-line dark:bg-dark-card">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Preview panel */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0b1524] via-[#0f1c30] to-[#0d7377]/50 p-6 text-white sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-accent-2/25 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5ec4c7]">
                  <Sparkles size={12} />
                  Updated CV · PDF
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="display text-2xl">{site.name}</p>
                      <p className="mt-1 text-sm text-[#5ec4c7]">{site.title}</p>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                      <FileText size={18} />
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {highlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-2.5"
                      >
                        <p className="font-mono text-[9px] uppercase tracking-wider text-white/50">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-white/75">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5ec4c7]" />
                      Professional experience &amp; contribution bullets
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5ec4c7]" />
                      Backend, frontend and WordPress skill groups
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5ec4c7]" />
                      Selected live professional projects with links
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download panel */}
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <h3 className="display text-2xl">Get the PDF</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted dark:text-dark-muted">
                Clean modern layout with a dark sidebar, accent hierarchy and recruiter-friendly
                structure. Includes contact details, 6+ years experience, skills and project links.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={site.resumePath}
                  download="Akash-Ojha-WordPress-Developer-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-accent dark:bg-[#e8ecf4] dark:text-ink"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-sm font-medium transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
                >
                  Open PDF
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                File · Akash-Ojha-WordPress-Developer-Resume.pdf
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
