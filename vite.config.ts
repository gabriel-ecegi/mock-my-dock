import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    open: true,
    port: 3001,
  },
  build: {
    sourcemap: true,
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        myDockPlus:
          "https://gabriel-ecegi.github.io/my-dock-web/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
