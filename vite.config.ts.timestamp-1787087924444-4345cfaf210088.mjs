// vite.config.ts
import { defineConfig } from "file:///C:/Users/Umer%20Ishfaq/Desktop/hamza%20si/brisbane-digital-partners/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Umer%20Ishfaq/Desktop/hamza%20si/brisbane-digital-partners/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Umer Ishfaq\\Desktop\\hamza si\\brisbane-digital-partners";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"]
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
            "tailwind-merge"
          ],
          // Data / query layer
          "vendor-query": ["@tanstack/react-query"]
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVbWVyIElzaGZhcVxcXFxEZXNrdG9wXFxcXGhhbXphIHNpXFxcXGJyaXNiYW5lLWRpZ2l0YWwtcGFydG5lcnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVtZXIgSXNoZmFxXFxcXERlc2t0b3BcXFxcaGFtemEgc2lcXFxcYnJpc2JhbmUtZGlnaXRhbC1wYXJ0bmVyc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVW1lciUyMElzaGZhcS9EZXNrdG9wL2hhbXphJTIwc2kvYnJpc2JhbmUtZGlnaXRhbC1wYXJ0bmVycy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICAgIGRlZHVwZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiLCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBTcGxpdCB2ZW5kb3IgY2h1bmtzIHRvIGltcHJvdmUgY2FjaGluZyBhbmQgcmVkdWNlIGluaXRpYWwgYnVuZGxlIHNpemVcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgLy8gQ29yZSBSZWFjdCBydW50aW1lIFx1MjAxNCBjaGFuZ2VzIHJhcmVseSwgbG9uZy1saXZlZCBjYWNoZVxuICAgICAgICAgIFwidmVuZG9yLXJlYWN0XCI6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiXSxcbiAgICAgICAgICAvLyBBbmltYXRpb24gbGlicmFyeSBcdTIwMTQgaGVhdmllc3Qgc2luZ2xlIGRlcGVuZGVuY3lcbiAgICAgICAgICBcInZlbmRvci1mcmFtZXJcIjogW1wiZnJhbWVyLW1vdGlvblwiXSxcbiAgICAgICAgICAvLyBVSSBjb21wb25lbnQgbGF5ZXJcbiAgICAgICAgICBcInZlbmRvci11aVwiOiBbXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1hY2NvcmRpb25cIixcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudVwiLFxuICAgICAgICAgICAgXCJAcmFkaXgtdWkvcmVhY3QtbmF2aWdhdGlvbi1tZW51XCIsXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1wb3BvdmVyXCIsXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC10b29sdGlwXCIsXG4gICAgICAgICAgICBcIkByYWRpeC11aS9yZWFjdC1zZWxlY3RcIixcbiAgICAgICAgICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIixcbiAgICAgICAgICAgIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCIsXG4gICAgICAgICAgICBcImNsc3hcIixcbiAgICAgICAgICAgIFwidGFpbHdpbmQtbWVyZ2VcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vIERhdGEgLyBxdWVyeSBsYXllclxuICAgICAgICAgIFwidmVuZG9yLXF1ZXJ5XCI6IFtcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1gsU0FBUyxvQkFBb0I7QUFDNVosT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLElBQ0EsUUFBUSxDQUFDLFNBQVMsYUFBYSxxQkFBcUIsdUJBQXVCO0FBQUEsRUFDN0U7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixnQkFBZ0IsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUE7QUFBQSxVQUV6RCxpQkFBaUIsQ0FBQyxlQUFlO0FBQUE7QUFBQSxVQUVqQyxhQUFhO0FBQUEsWUFDWDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUE7QUFBQSxVQUVBLGdCQUFnQixDQUFDLHVCQUF1QjtBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
