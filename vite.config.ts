// Tailwind doesn't provide a direct Vite plugin named '@tailwindcss/vite'.
// Remove the erroneous import to avoid "Cannot find module" errors.
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Tailwind is configured via PostCSS (postcss.config.js) or via the
    // framework-specific plugin. Do not attempt to load a non-existent
    // '@tailwindcss/vite' package here.
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
