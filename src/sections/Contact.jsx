import {
  ArrowUpRight,
  CheckCircle2,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { site } from "../data/site";

// ─────────────────────────────────────────────────────────────────────────────
// Web3Forms — free, no backend, emails go straight to ojhaakash1996@gmail.com
// Access key is already set below. It is a PUBLIC key — safe to commit.
// Source: https://web3forms.com  (free tier: 250 emails/month)
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "da76f4f0-fd85-4f3a-99da-9074c1659390";

const SERVICES = [
  "Custom WordPress Development",
  "Custom Plugin Development",
  "Custom Theme Development",
  "WooCommerce Development",
  "API Integration",
  "Payment Gateway Integration",
  "WordPress Bug Fixing",
  "Website Migration",
  "Speed Optimization",
  "WordPress Maintenance",
  "Other",
];

const IDLE = "idle";
const SENDING = "sending";
const SENT = "sent";
const ERROR = "error";

const CONTACT_INFO = [
  {
    label: "Email",
    Icon: Mail,
    value: "ojhaakash1996@gmail.com",
    href: "mailto:ojhaakash1996@gmail.com",
  },
  {
    label: "Phone",
    Icon: Phone,
    value: "+91 8673877639",
    href: "tel:+918673877639",
  },
  {
    label: "LinkedIn",
    Icon: Linkedin,
    value: "linkedin.com/in/akash-ojha",
    href: site.linkedin,
    external: true,
  },
  {
    label: "Location",
    Icon: MapPin,
    value: "Ahmedabad, Gujarat, India",
    href: null,
  },
];

function ContactInfoCard({ label, Icon, value, href, external }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-md border border-line bg-white p-3.5 transition hover:border-ink dark:border-dark-line dark:bg-dark-card dark:hover:border-paper/30">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-paper dark:bg-dark">
        <Icon size={14} className="text-accent" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-wider text-muted dark:text-dark-muted">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium">{value}</p>
      </div>
    </div>
  );
  if (!href) return <div>{inner}</div>;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  );
}

export default function Contact() {
  const [status, setStatus] = useState(IDLE);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus(SENDING);
    setErrorMsg("");

    try {
      const clientName = form.name.split(" ")[0];

      const payload = {
        access_key: WEB3FORMS_KEY,

        // Your inbox notification
        subject: `[Portfolio Enquiry] ${form.subject || "New message from " + form.name}`,
        from_name: form.name,
        replyto: form.email,
        message: [
          "NEW PORTFOLIO ENQUIRY",
          "─────────────────────────────",
          `Name:    ${form.name}`,
          `Email:   ${form.email}`,
          `Service: ${form.service || "Not specified"}`,
          `Subject: ${form.subject || "—"}`,
          "",
          "Message:",
          form.message,
          "",
          "─────────────────────────────",
          "Reply directly to this email to respond to the client.",
        ].join("\n"),

        // Auto-reply thank you email to client
        autoresponse: "true",
        autoresponse_subject: `Thanks for reaching out, ${clientName}! — Akash Ojha`,
        autoresponse_message: [
          `Hi ${clientName},`,
          "",
          "Thank you for getting in touch! I've received your message and will get back to you within 24 hours.",
          "",
          "Here's a summary of your enquiry:",
          "─────────────────────────────",
          `Service:  ${form.service || "Not specified"}`,
          `Subject:  ${form.subject || "—"}`,
          "",
          "Your message:",
          form.message,
          "─────────────────────────────",
          "",
          "In the meantime, feel free to connect with me on LinkedIn:",
          "https://www.linkedin.com/in/akash-ojha-6a825b129/",
          "",
          "Best regards,",
          "Akash Ojha",
          "Full-Stack WordPress Developer",
          "✉  ojhaakash1996@gmail.com",
          "📞 +91 8673877639",
          "🌐 https://akashdojha.github.io/akash-ojha-portfolio/",
        ].join("\n"),

        // honeypot
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(SENT);
        setForm({ name: "", email: "", service: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus(ERROR);
      setErrorMsg(err.message || "Something went wrong");
    }
  };

  const inputClass =
    "w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-sm outline-none transition placeholder:text-muted/40 focus:border-ink focus:ring-0 dark:border-dark-line dark:bg-dark dark:text-paper dark:placeholder:text-dark-muted/50 dark:focus:border-paper/50";

  const labelClass =
    "mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted dark:text-dark-muted";

  return (
    <section id="contact" className="border-t border-line dark:border-dark-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-kicker">12 — Contact</p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          {/* ── Left column ── */}
          <div>
            <h2 className="display max-w-xl text-4xl leading-tight sm:text-5xl">
              Have a WordPress project or a technical problem?
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted dark:text-dark-muted">
              Whether you need a new WordPress website, custom plugin, WooCommerce development,
              API integration or help fixing an existing site — fill the form or reach out
              directly.
            </p>

            {/* Available badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent/10 px-3 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent dark:text-[#7db89a]">
                Open to freelance &amp; remote WordPress roles
              </span>
            </div>

            {/* Quick CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:ojhaakash1996@gmail.com?subject=WordPress%20Project%20Enquiry"
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
            <div className="mt-8 space-y-2.5">
              {CONTACT_INFO.map((item) => (
                <ContactInfoCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="overflow-hidden rounded-md border border-line bg-white dark:border-dark-line dark:bg-dark-card">
            {/* Form header */}
            <div className="border-b border-line bg-paper px-6 py-4 dark:border-dark-line dark:bg-dark">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted dark:text-dark-muted">
                Send a message
              </p>
              <p className="mt-0.5 text-base font-semibold">Start a project with Akash</p>
            </div>

            {/* ── Success state ── */}
            {status === SENT ? (
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-accent/10">
                  <CheckCircle2 size={36} className="text-accent" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Message sent!</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-dark-muted">
                    Thanks for reaching out. I'll get back to you at{" "}
                    <span className="font-medium">{form.email || "your email"}</span> within 24
                    hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus(IDLE)}
                  className="mt-2 rounded-sm border border-line px-5 py-2 text-sm transition hover:border-ink dark:border-dark-line dark:hover:border-paper/40"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate className="space-y-4 p-6">
                {/* Honeypot (hidden, catches bots) */}
                <input type="checkbox" name="botcheck" className="hidden" readOnly />

                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Your name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. WooCommerce customisation project"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
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
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error banner */}
                {status === ERROR && (
                  <div className="flex items-start gap-2.5 rounded-sm border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
                    <XCircle size={15} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">Could not send message.</p>
                      <p className="mt-0.5 text-xs opacity-80">
                        {errorMsg} — please email me directly at ojhaakash1996@gmail.com
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === SENDING}
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 dark:bg-paper dark:text-ink dark:hover:bg-paper/90"
                >
                  {status === SENDING ? (
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
                  I reply within 24 hours · ojhaakash1996@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO CONNECT YOUR GMAIL (5 minutes, free):
 *
 * 1. Go to https://web3forms.com
 * 2. Enter your email: ojhaakash1996@gmail.com  → click "Create Access Key"
 * 3. Check your Gmail inbox → copy the Access Key (looks like: xxxxxxxx-xxxx-...)
 * 4. Replace "YOUR_WEB3FORMS_KEY" at the top of this file with that key
 * 5. Save → commit → push → done. Every form submission arrives in your Gmail.
 * ─────────────────────────────────────────────────────────────────────────────
 */
