import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.dev/frontendmentor-projects/interactive-card-details-form-main",
  build: {
    outDir: "../../interactive-card-details-form-main",
  },
});
