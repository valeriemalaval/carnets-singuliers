// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://valerie-carnets.netlify.app',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
