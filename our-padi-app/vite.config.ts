import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` must match the GitHub repo name so assets load on GitHub Pages
// (https://mercy-nubi.github.io/Our-Padi/). Change it if you rename the repo.
export default defineConfig({
  plugins: [react()],
  base: "/Our-Padi/",
});
