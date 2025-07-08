import next from "@yoshinani/style-guide/eslint/next"

const eslintConfig = [
  ...next,
  {
    ignores: ["**/*.config.mjs", "node_modules/", "dist/", ".next/"],
  },
]

export default eslintConfig
