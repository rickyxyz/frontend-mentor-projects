import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.github.io/frontendmentor-projects/huddle-landing-page-with-curved-sections-master",
  build: {
    outDir: "../../huddle-landing-page-with-curved-sections-master",
  },
});
