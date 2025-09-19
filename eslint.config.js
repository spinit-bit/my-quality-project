// eslint.config.js
const globals = require("globals");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  // Make sure Prettier is last so it can override other configs
  prettierConfig,
  {
    files: ["**/*.js"],
    plugins: {
      jsdoc: jsdoc,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Your custom rules here
    },
  },
];
