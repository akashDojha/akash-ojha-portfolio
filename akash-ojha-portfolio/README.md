# Akash Ojha — Full-Stack WordPress Developer Portfolio

Personal portfolio for **Akash Ojha**, Full-Stack WordPress Developer (backend and frontend) with 5.5+ years of experience building custom WordPress websites, WooCommerce platforms, plugins, themes and API integrations.

> This is a **React + Vite + Tailwind CSS** portfolio site. It is **not** a WordPress theme.

**Live URL:** `[ADD SITE URL after deploying to Vercel]`

---

## Tech stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 19                            |
| Build tool  | Vite 6                              |
| Styling     | Tailwind CSS 4                      |
| Language    | JavaScript (JSX)                    |
| Icons       | Lucide React                        |
| Deployment  | Vercel                              |

---

## Features

- Clear full-stack WordPress positioning (backend **and** frontend — not frontend-only)
- Dark / light mode with system preference detection and localStorage persistence
- Selected professional projects: MaxCoil, All In The Loop, AGD Global, TecLED
- Custom WordPress Development section with backend and frontend breakdown
- Custom Themes & Plugins section with code panel visuals
- Tech stack display (no fake percentage bars)
- 12 service cards
- Experience timeline (Elsner Technologies + Insignia Technolabs)
- 8-step development process
- Resume download (`public/resume.pdf`)
- Responsive design — mobile, tablet, desktop
- Semantic HTML, meta tags, Open Graph, JSON-LD structured data
- `robots.txt`, `sitemap.xml`, favicon
- All project content isolated in `src/data/projects.js` for easy updates

---

## Project structure

```
akash-ojha-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── resume.pdf          ← replace with your actual CV
│   ├── robots.txt
│   ├── sitemap.xml
│   └── projects/
│       ├── maxcoil.png
│       ├── allintheloop.png
│       ├── agdglobal.png
│       └── tecled.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── data/
│   │   ├── content.js      ← experience, skills, services, process data
│   │   ├── projects.js     ← project cards data
│   │   └── site.js         ← name, email, links, nav
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── WordPressExpertise.jsx
│   │   ├── ThemesPlugins.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Process.jsx
│   │   ├── WhyWorkWithMe.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## Installation

Requires **Node.js 20+**.

```bash
git clone https://github.com/akashDojha/akash-ojha-portfolio.git
cd akash-ojha-portfolio
npm install
```

---

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173` (or the port Vite picks).

---

## Build

```bash
npm run build
```

Output written to `dist/`. Preview locally:

```bash
npm run preview
```

---

## How to add a new project

1. Add a screenshot to `public/projects/` — e.g. `public/projects/new-site.png`.  
   Recommended size: **1280 × 800 px** (16:10 ratio).

2. Open `src/data/projects.js` and add a new object to the `projects` array:

```js
{
  id: "new-site",
  name: "Project Name",
  title: "Project Name — Short Label",
  industry: "Industry / Category",
  category: "Category / Web Platform",
  url: "https://example.com/",
  image: "/projects/new-site.png",
  shortDescription:
    "One or two sentences describing what the site does publicly.",
  description:
    "Factual longer description. Do not invent metrics or claim sole ownership.",
  role: "WordPress Developer — Backend & Frontend Development",
  contribution:
    "Professional WordPress development and implementation work.",
  development: [
    "WordPress development",
    "Responsive frontend",
    "Custom functionality",
  ],
  features: [
    "Visible feature one",
    "Visible feature two",
  ],
  technologies: ["WordPress"],
  // Only list technologies you can confirm.
}
```

3. Save — the card appears automatically in both the Projects and Case Studies sections.

**Rules:**
- Do not invent metrics, revenue figures, conversion rates or user numbers.
- Do not claim sole authorship of client/company products.
- Only add technology tags you can confirm.

---

## How to update the resume

Replace `public/resume.pdf` with your latest PDF:

```
public/resume.pdf  ← drop your updated file here
```

Both the Hero section and Resume section link to `/resume.pdf` via the `resumePath` field in `src/data/site.js`.

---

## Update personal information

All personal data lives in `src/data/site.js`:

```js
export const site = {
  name: "Akash Ojha",
  email: "ojhaakash1996@gmail.com",
  phone: "+91 8673877639",
  linkedin: "https://www.linkedin.com/in/akash-ojha-6a825b129/",
  github: "[ADD GITHUB URL]",        // ← update once repo is live
  siteUrl: "https://[ADD-SITE-URL]", // ← update after Vercel deployment
  ...
};
```

---

## Deployment

### Option A — GitHub Pages (auto-deploy via GitHub Actions)

The repo includes a workflow at `.github/workflows/deploy.yml` that automatically builds and deploys to GitHub Pages on every push to `main`.

#### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: full-stack WordPress developer portfolio"
git branch -M main
git remote add origin https://github.com/akashDojha/akash-ojha-portfolio.git
git push -u origin main
```

#### Step 2 — Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/akashDojha/akash-ojha-portfolio`
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Save

The Actions workflow will trigger automatically on the next push. Once it completes (usually 1–2 minutes), your site will be live at:

```
https://akashDojha.github.io/akash-ojha-portfolio/
```

#### Step 3 — Update live URLs

Replace all `[ADD-SITE-URL]` placeholders with `akashDojha.github.io/akash-ojha-portfolio` in:

- `index.html` — canonical, og:url, og:image
- `public/robots.txt`
- `public/sitemap.xml`
- `src/data/site.js` → `siteUrl`

Commit and push — the Actions workflow redeploys automatically.

---

### Option B — Vercel (alternative)

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New Project** → import `akash-ojha-portfolio`.
3. Settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Environment variable:** `GITHUB_PAGES = false` (so base stays `/`)
4. Deploy. Your live URL will be something like `akash-ojha-portfolio.vercel.app`.
5. Update `[ADD-SITE-URL]` placeholders and redeploy.

---

## What NOT to commit

- `node_modules/`
- `.env` files
- API keys or credentials
- Client source code or private project files

The `.gitignore` already covers `node_modules` and common build artifacts.

---

## Personal information

| Field    | Value                                     |
|----------|-------------------------------------------|
| Name     | Akash Ojha                                |
| Title    | Full-Stack WordPress Developer            |
| Email    | ojhaakash1996@gmail.com                   |
| Phone    | +91 8673877639                            |
| Location | Ahmedabad, Gujarat, India                 |
| LinkedIn | linkedin.com/in/akash-ojha-6a825b129      |

---

## License

Private portfolio site. All rights reserved.
