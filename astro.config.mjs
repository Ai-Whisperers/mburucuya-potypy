import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ai-whisperers.github.io',
  base: '/mburucuya-potypy',
  output: 'static',
  build: {
    assets: 'assets',
  },
  server: {
    port: 4321,
    host: '127.0.0.1',
  },
});
