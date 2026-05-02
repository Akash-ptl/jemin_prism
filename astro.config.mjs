import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://prismpackworld.com', // Replace with your actual domain later if different
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  }
});