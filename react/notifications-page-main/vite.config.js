import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.dev/frontendmentor-projects/notifications-page-main",
  build: {
    outDir: "../../notifications-page-main",
  },
});
