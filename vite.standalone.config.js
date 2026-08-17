import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Produces a single, fully self-contained dist-standalone/index.html
// (CSS, JS, and images all inlined) that works when double-clicked
// directly from the file system — no local server required.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: "./",
  build: {
    outDir: "dist-standalone",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
