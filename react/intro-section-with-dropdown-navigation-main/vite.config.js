import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.dev/frontendmentor-projects/intro-section-with-dropdown-navigation-main",
  build: {
    outDir: "../../intro-section-with-dropdown-navigation-main",
  },
});
