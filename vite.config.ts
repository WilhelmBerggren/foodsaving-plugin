import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import externalize from "vite-plugin-externalize-dependencies";

// Libraries that will be provided by Karrot
const externals = [
  "vue",
  "vue-router",
  "quasar",
  "axios",
  "@tanstack/vue-query",
  "@karrot/plugin",
];

export default defineConfig({
  plugins: [
    // Karrot uses vue!
    vue(),
    externalize({ externals }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: ["./src/main.js"],
      external: externals,
      preserveEntrySignatures: "strict",
    },
  },
});
