// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://seb0927.github.io",
  base: "/awesome-jobs-colombia",
  vite: {
    plugins: [tailwindcss()],
  },
});
