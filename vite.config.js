// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  base: '/', // 🔥 wichtig für Render & absolute Pfade

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

  // 🚀 SEO & Performance Optimierung
  build: {
    // Code Splitting für bessere Ladezeiten
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
    // Kompakte Produktionsversion
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Entfernt console.logs in Production
        drop_debugger: true,
      },
    },
    // Assets generieren
    assetsInlineLimit: 4096, // Kleinere Assets inline
    // Sourcemaps für Debugging
    sourcemap: false, // Nur in Development
  },

  // Performance-Optimierungen
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },

  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
    // Headers für SEO & Security (in Production über Server)
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
});
