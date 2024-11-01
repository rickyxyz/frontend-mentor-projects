import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.dev/frontendmentor-projects/expenses-chart-component-main",
  build: {
    outDir: "../../expenses-chart-component-main",
  },
});
