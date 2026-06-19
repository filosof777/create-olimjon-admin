import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      "@ckeditor/ckeditor5-build-classic",
      "@ckeditor/ckeditor5-react"
      // Add 'ckeditor5-build-oks' if you're using it
    ],
    // Optional: Increase timeout for large dependencies
    esbuildOptions: {
      target: "esnext"
    }
  }
});
