// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  base: './', // 🔥 wichtig für Render & relative Pfade

  plugins: [
    react(),

    // 🔁 Plugin 1: Kopiert _redirects automatisch
    {
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

    // 🔁 Plugin 2: Kopiert public/ assets (z. B. /sectors, /loops, /pdfs)
    {
      name: 'copy-public-assets',
      closeBundle() {
        const srcDir = resolve(__dirname, 'public');
        const destDir = resolve(__dirname, 'dist');
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true });
          console.log('✅ public/ wurde erfolgreich nach dist/ kopiert');
        } else {
          console.warn('⚠️  Kein public/-Ordner gefunden');
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
