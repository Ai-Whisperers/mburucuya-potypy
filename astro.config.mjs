import { defineConfig } from 'astro/config';

// base '/mburucuya-potypy' for GitHub Pages, '/' for root-domain deploys
const base = process.env.MBURU_BASE !== undefined ? process.env.MBURU_BASE : '/mburucuya-potypy';

export default defineConfig({
  site: process.env.MBURU_SITE || 'https://ai-whisperers.github.io',
  base,
  output: 'static',
  build: { assets: 'assets' },
  server: { port: 4321, host: '127.0.0.1' },
  vite: { publicDir: 'public' },
});
