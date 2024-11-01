import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.dev/frontendmentor-projects/newsletter-sign-up-with-success-message-main",
  build: {
    outDir: "../../newsletter-sign-up-with-success-message-main",
  },
});
