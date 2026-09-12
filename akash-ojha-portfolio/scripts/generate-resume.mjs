import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const out = resolve(dirname(fileURLToPath(import.meta.url)), "../public/resume.pdf");

const lines = [
  ["Akash Ojha", 18, true],
  ["Full-Stack WordPress Developer", 12, false],
  ["Backend & Frontend | Custom Themes & Plugins | WooCommerce | PHP | API Integration", 9, false],
  ["Ahmedabad, Gujarat, India  |  ojhaakash1996@gmail.com  |  +91 8673877639", 9, false],
  ["LinkedIn: https://www.linkedin.com/in/akash-ojha-6a825b129/", 9, false],
  ["GitHub: [ADD GITHUB URL]", 9, false],
  ["", 8, false],
  ["PROFILE", 11, true],
  ["Full-Stack WordPress Developer with 5.5+ years of experience building custom WordPress websites,", 9, false],
  ["WooCommerce platforms, themes, plugins, APIs and complex business solutions. Work covers both", 9, false],
  ["backend (PHP, plugins, WooCommerce, REST APIs, MySQL) and frontend (HTML, CSS, JavaScript).", 9, false],
  ["", 8, false],
  ["EXPERIENCE", 11, true],
  ["WordPress Developer  —  Elsner Technologies Pvt. Ltd.  —  June 2024 – Present", 10, true],
  ["Developing and maintaining custom WordPress websites. Backend and frontend work across PHP,", 9, false],
  ["themes, plugins, WooCommerce and JavaScript. Troubleshooting and technical requirements.", 9, false],
  ["", 6, false],
  ["Senior WordPress Developer  —  Insignia Technolabs  —  2019 – 2024", 10, true],
  ["Developed and maintained 40+ custom WordPress websites. Custom themes and plugins.", 9, false],
  ["WooCommerce solutions, payment gateways, third-party APIs, CRM and marketing integrations.", 9, false],
  ["Migrated legacy websites to WordPress. Converted designs into responsive websites.", 9, false],
  ["PHP, JavaScript, HTML, CSS, AJAX and JSON. Performance, SEO, client communication.", 9, false],
  ["", 8, false],
  ["SELECTED PROFESSIONAL PROJECTS", 11, true],
  ["MaxCoil — E-commerce / WordPress development  —  https://www.maxcoil.com.sg/", 9, false],
  ["All In The Loop — Event technology platform  —  https://allintheloop.com/", 9, false],
  ["AGD Global — Gold & precious metals platform  —  https://agdglobal.com.au/", 9, false],
  ["TecLED — Architectural lighting e-commerce  —  https://tecled.com.au/", 9, false],
  ["Contribution described as professional WordPress development work; not claimed as sole ownership.", 9, false],
  ["", 8, false],
  ["SKILLS", 11, true],
  ["Backend: PHP, MySQL, WordPress architecture, custom plugins/themes, WooCommerce, REST API,", 9, false],
  ["third-party APIs, payment gateways, migrations, performance, troubleshooting.", 9, false],
  ["Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap, AJAX, responsive UI, design to WordPress.", 9, false],
];

const pdf = await PDFDocument.create();
const page = pdf.addPage([612, 792]);
const font = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
let y = 750;
const ink = rgb(0.07, 0.08, 0.1);

for (const [text, size, isBold] of lines) {
  if (text) {
    page.drawText(text, {
      x: 48,
      y,
      size,
      font: isBold ? bold : font,
      color: ink,
    });
  }
  y -= size + 6;
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, await pdf.save());
console.log("Wrote", out);
