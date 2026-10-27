import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://no101011.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
