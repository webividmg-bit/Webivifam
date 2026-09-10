import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/components/ui/globe": path.resolve(__dirname, "./src/Components/ui/globe.jsx"),
      "@/Components/ui/globe": path.resolve(__dirname, "./src/Components/ui/globe.jsx"),
      "@/components/ui/carousel": path.resolve(__dirname, "./src/Components/ui/carousel.jsx"),
      "@/Components/ui/carousel": path.resolve(__dirname, "./src/Components/ui/carousel.jsx"),
      "@/components": path.resolve(__dirname, "./src/Components"),
      "@/Components": path.resolve(__dirname, "./src/Components"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

