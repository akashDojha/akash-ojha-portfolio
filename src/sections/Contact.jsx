import emailjs from "@emailjs/browser";
import { ArrowUpRight, CheckCircle2, Loader2, Linkedin, Mail, MapPin, Phone, Send, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { site } from "../data/site";

// ─────────────────────────────────────────────────────────────
// EmailJS config
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail) → copy Service ID below
// 3. Create an email template → copy Template ID below
// 4. Copy your Public Key (Account → API Keys) below
// Template variables used: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "AbCdEfGhIjKlMnOp"

const services = [
  "Custom WordPress Development",
  "Custom Plugin Development",
  "Custom Theme Development",
  "WooCommerce Development",
  "API Integration",
  "WordPress Bug Fixing",
  "Website Migration",
  "Speed Optimization",
  "Other",
];

const STATUS = { idle: "idle", sending: "sending", sent: "sent", error: "error" };

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(STATUS.idle);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    // If EmailJS not configured yet, fall back to mailto
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      const body = encodeURIComponent(
        `Name: ${form.from_name}\nEmail: ${form.from_email}\nService: ${form.service}\n\n${form.message}`
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject || "WordPress Project Enquiry")}&body=${body}`;
      return;
    }

    setStatus(STATUS.sending);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.sent);
      setForm({ from_name: "", from_email: "", subject: "", service: "", message: "" });
    } catch {
      setStatus(STATUS.error);
    }
  };

  return (
    <section id="contact" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">12 — Contact</p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          {/* ── Left: headline + info cards ── */}
          <div>
            <h2 className="display max-w-xl text-4xl leading-tight sm:text-5xl">
              Have a WordPress project or a technical problem?
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted dark:text-dark-muted">
              Whether you need a new WordPress website, custom plugin, WooCommerce development,
              API integration or help fixing an existing website — let's talk.
            </p>

            {/* Available badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent/8 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent dark:text-[#7db89a]">
                Open to freelance &amp; remote WordPress roles
              </span>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}?subject=WordPress%20Project%20Enquiry`}
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-accent dark:bg-paper dark:text-ink"
              >
                <Mail size={14} />
                Email directly
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-2.5 text-sm transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Contact info cards */}
            <div className="mt-8 space-y-3">
              {[
                { icon: Mail,    label: "Email",    value: site.email,  href: `mailto:${site.email}` },
                { icon: Phone,   label: "Phone",    value: site.phone,  href: `tel:${site.phone.replace(/\s/g,"")}` },
                { icon: Linkedin,label: "LinkedIn", value: "linkedin.com/in/akash-ojha-6a825b129", href: site.linkedin },
                { icon: MapPin,  label: "Location", value: site.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-3 rounded-md border border-line bg-white p-3.5 transition hover:border-ink dark:border-dark-line dark:bg-dark-card dark:hover:border-paper/30">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-paper dark:bg-dark">
                      <Icon size={14} className="text-accent" />
                    </span>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted dark:text-dark-muted">{label}</p>
                      <p className="mt-0.5 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <div className="rounded-md border border-line bg-white dark:border-dark-line dark:bg-dark-card">
            {/* Form header */}
            <div className="border-b border-line px-6 py-4 dark:border-dark-line">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted dark:text-dark-muted">
                Send a message
              </p>
              <p className="mt-1 text-base font-semibold">Start a project with Akash</p>
            </div>

            {/* Success state */}
            {status === STATUS.sent ? (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                <CheckCircle2 size={44} className="text-accent" />
                <div>
                  <p className="text-lg font-semibold">Message sent!</p>
                  <p className="mt-2 text-sm text-muted dark:text-dark-muted">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus(STATUS.idle)}
                  className="mt-2 rounded-sm border border-line px-4 py-2 text-sm transition hover:border-ink dark:border-dark-line"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 p-6">
                {/* Name + Email row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="from_name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                      Your name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink dark:border-dark-line dark:bg-dark dark:focus:border-paper/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="from_email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                      Email address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      required
                      value={form.from_email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink dark:border-dark-line dark:bg-dark dark:focus:border-paper/50"
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label htmlFor="service" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-sm outline-none transition focus:border-ink dark:border-dark-line dark:bg-dark dark:focus:border-paper/50"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. WooCommerce customisation project"
                    className="w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink dark:border-dark-line dark:bg-dark dark:focus:border-paper/50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, requirements or issue..."
                    className="w-full resize-none rounded-sm border border-line bg-paper px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted/50 focus:border-ink dark:border-dark-line dark:bg-dark dark:focus:border-paper/50"
                  />
                </div>

                {/* Error state */}
                {status === STATUS.error && (
                  <div className="flex items-center gap-2 rounded-sm border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
                    <XCircle size={15} />
                    Something went wrong. Please email me directly at {site.email}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === STATUS.sending}
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-accent disabled:opacity-60 dark:bg-paper dark:text-ink dark:hover:bg-paper/90"
                >
                  {status === STATUS.sending ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center font-mono text-[10px] text-muted dark:text-dark-muted">
                  I reply within 24 hours · {site.email}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
