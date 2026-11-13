import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

/** SSR/prerender bundle config — no Tailwind/CSS pipeline, no manualChunks. */
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2022",
    outDir: ".ssr-out",
    emptyOutDir: true,
    lib: undefined,
    rollupOptions: {
      output: { format: "es" },
    },
  },
  ssr: {
    target: "node",
    format: "esm",
  },
});
