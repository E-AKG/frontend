// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  // 👇 ganz wichtig für Render, Netlify, GitHub Pages etc.
  base: './',

  plugins: [
    react(),
    {
      // 🔁 Plugin: kopiert _redirects automatisch in dist/
      name: 'copy-redirects',
      closeBundle() {
        const src = resolve(__dirname, '_redirects');
        const dest = resolve(__dirname, 'dist/_redirects');
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
          console.log('✅ _redirects wurde erfolgreich nach dist/ kopiert');
        } else {
          console.warn('⚠️  Keine _redirects-Datei im Projekt-Root gefunden');
        }
      },
    },
  ],

  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
