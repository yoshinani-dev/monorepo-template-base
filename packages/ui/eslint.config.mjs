import react from "@yoshinani/style-guide/eslint/react-internal"

const eslintConfig = [
  ...react,
  {
    ignores: ["**/*.config.mjs"],
  },
  {
    rules: {
      "import/order": "off",
      "sort-imports": "off",
    },
  },
]

export default eslintConfig
