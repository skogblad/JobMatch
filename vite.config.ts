import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["@digi/arbetsformedlingen"],
  },
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/JobMatch/" : "/"
});
