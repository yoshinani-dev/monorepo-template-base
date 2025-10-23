import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: ["apps/*", "packages/*"],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
})
