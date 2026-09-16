import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="section-kicker">12 — Contact</p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <h2 className="display max-w-xl text-[clamp(1.85rem,5vw,3rem)] leading-tight">
              Have a WordPress project or a technical problem?
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted dark:text-dark-muted">
              Whether you need a new WordPress website, custom plugin, WooCommerce development, API
              integration or help fixing an existing website — let&apos;s discuss your requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${site.email}?subject=WordPress%20Project%20Enquiry`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-accent dark:bg-[#e8ecf4] dark:text-ink"
              >
                <Mail size={15} />
                Start a Project
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-6 py-3 text-sm transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent dark:text-[#5ec4c7]">
                Open to freelance &amp; remote WordPress roles
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 sm:p-6 dark:border-dark-line dark:bg-dark-card">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted dark:text-dark-muted">
              Get in touch
            </p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-xl border border-line p-3.5 transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper dark:bg-dark">
                  <Mail size={14} className="text-accent" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted dark:text-dark-muted">Email</p>
                  <p className="mt-0.5 truncate text-sm font-medium">{site.email}</p>
                </div>
              </a>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-line p-3.5 transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper dark:bg-dark">
                  <Phone size={14} className="text-accent" />
                </span>
                <div>
                  <p className="text-[10px] text-muted dark:text-dark-muted">Phone</p>
                  <p className="mt-0.5 text-sm font-medium">{site.phone}</p>
                </div>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line p-3.5 transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper dark:bg-dark">
                  <Linkedin size={14} className="text-accent" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted dark:text-dark-muted">LinkedIn</p>
                  <p className="mt-0.5 truncate text-sm font-medium">akash-ojha-6a825b129</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-line p-3.5 dark:border-dark-line">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper dark:bg-dark">
                  <MapPin size={14} className="text-accent" />
                </span>
                <div>
                  <p className="text-[10px] text-muted dark:text-dark-muted">Location</p>
                  <p className="mt-0.5 text-sm font-medium">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
