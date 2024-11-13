import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://thomasmcdonald.github.io",
  base: import.meta.env.PROD ? "/personal-blog" : "/",
  integrations: [mdx(), sitemap(), tailwind()],
});
