import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://prismpackworld.com', // Replace with your actual domain later if different
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});