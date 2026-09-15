// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const site = "https://seb0927.github.io";

export default defineConfig({
  site,
  base: "/awesome-jobs-colombia",
  integrations: [
    sitemap({
      filter: (page) => page !== `${site}/awesome-jobs-colombia`,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
