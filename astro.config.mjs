// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://nikolaus.stamm-phoenix.de",
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
