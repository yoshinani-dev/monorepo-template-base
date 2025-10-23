import next from "@yoshinani/style-guide/eslint/next"

const eslintConfig = [
  ...next,
  {
    ignores: [
      "**/*.config.mjs",
      "node_modules/",
      "dist/",
      ".next/",
      "next-env.d.ts",
    ],
  },
]

export default eslintConfig
