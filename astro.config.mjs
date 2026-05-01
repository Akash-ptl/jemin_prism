import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Akash-ptl.github.io',
  base: '/jemin_prism',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  }
});