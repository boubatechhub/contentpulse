// vite.config.ts
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),tailwindcss(),
    // React Compiler : auto-mémoïsation. Doit passer AVANT les autres transfos Babel.
    babel({ presets: [reactCompilerPreset()] }),
    // Ouvre un graphe du bundle après "npm run build".
    visualizer({ open: true, gzipSize: true }),
  ],
  build: { sourcemap: true },
});
