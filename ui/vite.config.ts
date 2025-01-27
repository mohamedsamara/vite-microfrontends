import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/components",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 4001,
  },
  preview: {
    port: 4001,
  },
});
