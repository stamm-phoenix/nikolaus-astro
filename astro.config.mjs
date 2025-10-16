// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://stamm-phoenix.github.io",
  base: "/nikolaus-astro",
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
