import next from "@yoshinani/style-guide/eslint/next"

const eslintConfig = [
  ...next,
  {
    ignores: ["**/*.config.mjs", "node_modules/", "dist/", ".next/"],
  },
  {
    rules: {
      "import/order": "off",
      "sort-imports": "off",
    },
  },
]

export default eslintConfig
