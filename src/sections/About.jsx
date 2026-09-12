import { Briefcase, Code2, Globe, MapPin } from "lucide-react";
import { site } from "../data/site";

const quickFacts = [
  { icon: Briefcase, label: "Experience", value: "6+ years" },
  { icon: Code2,     label: "Websites",   value: "40+ built & maintained" },
  { icon: Globe,     label: "Stack",       value: "Backend & Frontend" },
  { icon: MapPin,    label: "Location",    value: site.location },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-16">
          {/* Left label column */}
          <div>
            <p className="section-kicker">01 — About</p>
            <h2 className="display mt-3 text-4xl leading-tight">About me</h2>
            <div className="mt-6 space-y-3">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-sm border border-line bg-white dark:border-dark-line dark:bg-dark-card">
                    <Icon size={13} className="text-accent" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content column */}
          <div className="max-w-2xl">
            <div className="space-y-5 text-[15.5px] leading-[1.85] text-muted dark:text-dark-muted">
              <p>
                I'm Akash Ojha, a Full-Stack WordPress Developer with{" "}
                <span className="font-medium text-ink dark:text-paper">6+ years</span> of
                experience building custom WordPress websites and digital solutions.
              </p>
              <p>
                My work covers both{" "}
                <span className="font-medium text-ink dark:text-paper">backend and frontend development</span>{" "}
                — from PHP, custom plugins, themes, WooCommerce and APIs to responsive interfaces,
                JavaScript and performance optimisation.
              </p>
              <p>
                I have worked on{" "}
                <span className="font-medium text-ink dark:text-paper">40+ WordPress websites</span> and enjoy
                solving complex technical problems and turning business requirements into reliable web
                solutions. That spans e-commerce platforms, event technology, financial services and
                product catalogues.
              </p>
              <p>
                Based in {site.location}. Open to freelance work, remote WordPress roles and international
                clients.
              </p>
            </div>

            {/* Current role callout */}
            <div className="mt-8 rounded-md border border-line bg-white p-5 dark:border-dark-line dark:bg-dark-card">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent dark:text-[#7db89a]">
                  Currently employed
                </span>
              </div>
              <p className="mt-2 text-sm font-medium">WordPress Developer — Elsner Technologies Pvt. Ltd.</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted dark:text-dark-muted">
                June 2024 – Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
