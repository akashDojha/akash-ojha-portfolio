import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/resume.pdf");

// A4 for a cleaner international / ATS-friendly format
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 36;
const SIDEBAR_W = 168;
const CONTENT_X = MARGIN_X + SIDEBAR_W + 22;
const CONTENT_W = PAGE_W - CONTENT_X - MARGIN_X;

const colors = {
  ink: rgb(0.05, 0.07, 0.13),
  muted: rgb(0.25, 0.29, 0.36),
  soft: rgb(0.42, 0.46, 0.54),
  line: rgb(0.86, 0.88, 0.92),
  paper: rgb(0.96, 0.965, 0.97),
  white: rgb(1, 1, 1),
  sidebar: rgb(0.043, 0.082, 0.14),
  accent: rgb(0.05, 0.45, 0.47),
  accentSoft: rgb(0.37, 0.77, 0.78),
  chip: rgb(0.09, 0.14, 0.22),
};

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

const pdf = await PDFDocument.create();
const page = pdf.addPage([PAGE_W, PAGE_H]);
const font = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

// ── Sidebar background ──
page.drawRectangle({
  x: 0,
  y: 0,
  width: MARGIN_X + SIDEBAR_W,
  height: PAGE_H,
  color: colors.sidebar,
});

// Accent strip on sidebar edge
page.drawRectangle({
  x: MARGIN_X + SIDEBAR_W - 3,
  y: 0,
  width: 3,
  height: PAGE_H,
  color: colors.accent,
});

// Top accent bar on content
page.drawRectangle({
  x: MARGIN_X + SIDEBAR_W,
  y: PAGE_H - 8,
  width: PAGE_W - (MARGIN_X + SIDEBAR_W),
  height: 8,
  color: colors.accent,
});

// ── Sidebar content ──
let sy = PAGE_H - 48;

page.drawText("AKASH OJHA", {
  x: MARGIN_X + 14,
  y: sy,
  size: 13,
  font: bold,
  color: colors.white,
});
sy -= 16;
page.drawText("Full-Stack WordPress", {
  x: MARGIN_X + 14,
  y: sy,
  size: 9,
  font,
  color: colors.accentSoft,
});
sy -= 12;
page.drawText("Developer", {
  x: MARGIN_X + 14,
  y: sy,
  size: 9,
  font,
  color: colors.accentSoft,
});

sy -= 28;
const sidebarSections = [
  {
    title: "CONTACT",
    items: [
      "ojhaakash1996@gmail.com",
      "+91 8673877639",
      "Ahmedabad, Gujarat, India",
      "linkedin.com/in/akash-ojha-6a825b129",
      "github.com/akashDojha",
    ],
  },
  {
    title: "CORE STRENGTHS",
    items: [
      "6+ years WordPress",
      "Backend + Frontend",
      "Custom Themes & Plugins",
      "WooCommerce & Payments",
      "REST API Integrations",
      "40+ Websites Delivered",
    ],
  },
  {
    title: "BACKEND",
    items: [
      "PHP / MySQL",
      "WordPress Hooks",
      "Custom Plugins",
      "Custom Post Types",
      "WooCommerce",
      "REST API",
      "Payment Gateways",
      "Migrations",
    ],
  },
  {
    title: "FRONTEND",
    items: [
      "HTML5 / CSS3",
      "JavaScript / jQuery",
      "Bootstrap / AJAX",
      "Responsive UI",
      "Figma/PSD to WP",
      "Cross-browser UI",
    ],
  },
];

for (const section of sidebarSections) {
  page.drawText(section.title, {
    x: MARGIN_X + 14,
    y: sy,
    size: 8,
    font: bold,
    color: colors.accentSoft,
  });
  sy -= 6;
  page.drawRectangle({
    x: MARGIN_X + 14,
    y: sy,
    width: SIDEBAR_W - 28,
    height: 1.2,
    color: colors.accent,
  });
  sy -= 14;

  for (const item of section.items) {
    const lines = wrapText(item, font, 7.5, SIDEBAR_W - 30);
    for (const line of lines) {
      page.drawText(line, {
        x: MARGIN_X + 14,
        y: sy,
        size: 7.5,
        font,
        color: colors.white,
      });
      sy -= 11;
    }
    sy -= 2;
  }
  sy -= 12;
}

// ── Main content ──
let y = PAGE_H - 42;

function sectionTitle(title) {
  page.drawText(title, {
    x: CONTENT_X,
    y,
    size: 11,
    font: bold,
    color: colors.ink,
  });
  y -= 6;
  page.drawRectangle({
    x: CONTENT_X,
    y,
    width: CONTENT_W,
    height: 1.5,
    color: colors.accent,
  });
  y -= 16;
}

function bodyLines(text, size = 8.5, color = colors.muted, leading = 11.5) {
  const lines = wrapText(text, font, size, CONTENT_W);
  for (const line of lines) {
    page.drawText(line, { x: CONTENT_X, y, size, font, color });
    y -= leading;
  }
}

function bullet(text) {
  const lines = wrapText(text, font, 8.2, CONTENT_W - 12);
  page.drawCircle({
    x: CONTENT_X + 3,
    y: y + 2.2,
    size: 1.6,
    color: colors.accent,
  });
  for (let i = 0; i < lines.length; i++) {
    page.drawText(lines[i], {
      x: CONTENT_X + 12,
      y,
      size: 8.2,
      font,
      color: colors.muted,
    });
    y -= 11;
  }
  y -= 1;
}

// Header block
page.drawText("AKASH OJHA", {
  x: CONTENT_X,
  y,
  size: 22,
  font: bold,
  color: colors.ink,
});
y -= 18;
page.drawText("Full-Stack WordPress Developer", {
  x: CONTENT_X,
  y,
  size: 11,
  font: bold,
  color: colors.accent,
});
y -= 14;
bodyLines(
  "Backend & Frontend  ·  Custom Themes & Plugins  ·  WooCommerce  ·  PHP  ·  REST APIs",
  8,
  colors.soft,
  11
);
y -= 8;

// Profile
sectionTitle("PROFESSIONAL SUMMARY");
bodyLines(
  "Full-Stack WordPress Developer with 6+ years of experience building custom WordPress websites, WooCommerce platforms, themes, plugins, APIs and complex business solutions. Delivers both backend architecture (PHP, plugins, MySQL, REST APIs) and frontend interfaces (HTML, CSS, JavaScript, responsive UI) for production business products.",
  8.5,
  colors.muted,
  11.5
);
y -= 10;

// Experience
sectionTitle("PROFESSIONAL EXPERIENCE");

const jobs = [
  {
    role: "WordPress Developer",
    company: "Elsner Technologies Pvt. Ltd.",
    period: "June 2024 – Present",
    bullets: [
      "Developing and maintaining custom WordPress websites aligned to business requirements.",
      "Working across backend and frontend — PHP, themes, plugins, WooCommerce and JavaScript.",
      "Building and customising WordPress functionality, integrations and responsive interfaces.",
      "Troubleshooting WordPress issues and supporting performance and technical requirements.",
    ],
  },
  {
    role: "Senior WordPress Developer",
    company: "Insignia Technolabs",
    period: "2019 – 2024",
    bullets: [
      "Developed and maintained 40+ custom WordPress websites for client and product teams.",
      "Built custom WordPress themes and plugins; customised existing platforms for new features.",
      "Delivered WooCommerce solutions, payment gateway and third-party API integrations.",
      "Handled CRM/marketing integrations and migrated legacy websites to WordPress.",
      "Converted designs and mockups into responsive sites using PHP, JavaScript, HTML, CSS, AJAX and JSON.",
      "Troubleshot complex WordPress issues; improved performance and SEO; communicated with clients on technical requirements.",
    ],
  },
];

for (const job of jobs) {
  page.drawText(job.role, {
    x: CONTENT_X,
    y,
    size: 10,
    font: bold,
    color: colors.ink,
  });
  const periodWidth = bold.widthOfTextAtSize(job.period, 8);
  page.drawText(job.period, {
    x: CONTENT_X + CONTENT_W - periodWidth,
    y,
    size: 8,
    font: bold,
    color: colors.accent,
  });
  y -= 12;
  page.drawText(job.company, {
    x: CONTENT_X,
    y,
    size: 8.5,
    font,
    color: colors.soft,
  });
  y -= 13;
  for (const b of job.bullets) bullet(b);
  y -= 8;
}

// Projects — functionality only (no client brand names)
sectionTitle("SELECTED WORK — FUNCTIONALITY");
const projects = [
  [
    "E-commerce / Retail Platform",
    "Product catalogue, filtering, cart, checkout, accounts, payments, promotions and search.",
  ],
  [
    "Event Technology Platform",
    "Event apps, exhibitor tools, lead retrieval, event management and responsive website delivery.",
  ],
  [
    "Gold & Precious Metals Platform",
    "Business website, investment content, customer services and enquiry pathways.",
  ],
  [
    "Architectural Lighting Catalogue",
    "Large product catalogue, categories, project galleries, enquiries and quote/request flows.",
  ],
];

for (const [label, functionality] of projects) {
  page.drawText(label, {
    x: CONTENT_X,
    y,
    size: 9,
    font: bold,
    color: colors.ink,
  });
  y -= 11;
  bodyLines(functionality, 7.5, colors.soft, 10.5);
  y -= 4;
}

bodyLines(
  "Role on each engagement: professional WordPress development (backend & frontend). Client brand names intentionally omitted. Scope described factually — not claimed as sole product ownership.",
  7.5,
  colors.soft,
  10.5
);
y -= 10;

// Skills row
sectionTitle("TECHNICAL SKILLS");
const skillGroups = [
  ["WordPress Platform", "Custom Themes, Custom Plugins, WooCommerce, Hooks & Filters, CPTs, Custom Fields, Admin Tools"],
  ["Backend", "PHP, MySQL, REST API, Third-party APIs, Payment Gateways, Migrations, Performance, Security"],
  ["Frontend", "HTML5, CSS3, JavaScript, jQuery, Bootstrap, AJAX, Responsive Design, Design-to-WordPress"],
];

for (const [label, skills] of skillGroups) {
  page.drawText(label, {
    x: CONTENT_X,
    y,
    size: 8.5,
    font: bold,
    color: colors.ink,
  });
  y -= 11;
  bodyLines(skills, 8, colors.muted, 11);
  y -= 6;
}

// Footer note
y = 28;
page.drawRectangle({
  x: CONTENT_X,
  y: y + 10,
  width: CONTENT_W,
  height: 0.8,
  color: colors.line,
});
page.drawText("Available for freelance, remote WordPress roles and international clients  ·  Ahmedabad, India", {
  x: CONTENT_X,
  y,
  size: 7,
  font,
  color: colors.soft,
});

mkdirSync(dirname(out), { recursive: true });
const bytes = await pdf.save();
writeFileSync(out, bytes);
console.log(`Wrote ${out} (${bytes.length} bytes)`);
