import { Download, FileText } from "lucide-react";
import { site } from "../data/site";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">11 — Resume</p>
        <div className="mt-6 grid gap-8 rounded-md border border-line bg-white p-8 dark:border-dark-line dark:bg-dark-card md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-sm border border-line bg-paper dark:border-dark-line dark:bg-dark">
                <FileText size={18} className="text-accent" />
              </span>
              <h2 className="display text-3xl">CV as a PDF</h2>
            </div>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted dark:text-dark-muted">
              Full employment history, skills and contact information in a format recruiters and ATS
              systems can use. Replace{" "}
              <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-xs dark:bg-dark">
                public/resume.pdf
              </code>{" "}
              with an updated file whenever your CV changes.
            </p>
            {/* Quick facts */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Full-Stack WordPress Developer", "6+ years", "Ahmedabad, India", "Available for freelance"].map(
                (fact) => (
                  <span
                    key={fact}
                    className="rounded-sm border border-line bg-paper px-2.5 py-1 text-xs dark:border-dark-line dark:bg-dark"
                  >
                    {fact}
                  </span>
                )
              )}
            </div>
          </div>
          <a
            href={site.resumePath}
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent dark:bg-paper dark:text-ink"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
