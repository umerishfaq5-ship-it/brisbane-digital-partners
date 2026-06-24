import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";



// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    // Split vendor chunks to improve caching and reduce initial bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — changes rarely, long-lived cache
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Animation library — heaviest single dependency
          "vendor-framer": ["framer-motion"],
          // UI component layer
          "vendor-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
          ],
          // Data / query layer
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
  },
}));
