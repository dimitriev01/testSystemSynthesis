module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    quotes: ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    indent: ["warn", 2],
    "max-len": ["error", { code: 120 }],
    semi: ["warn", "always"],
  },
};