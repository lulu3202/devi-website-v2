import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Deploying to: https://devislabai.com
export default defineConfig({
  site: 'https://devislabai.com',
  base: '/',
  output: 'static',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
