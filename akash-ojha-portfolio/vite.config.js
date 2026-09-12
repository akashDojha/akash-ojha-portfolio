import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// When deployed to GitHub Pages the site lives at:
//   https://akashDojha.github.io/akash-ojha-portfolio/
// The base must match the repository name so assets resolve correctly.
// For a custom domain or Vercel deployment, set base to "/" and remove this.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? "/akash-ojha-portfolio/" : "/",
});
