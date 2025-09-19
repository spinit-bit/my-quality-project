// eslint.config.js
const globals = require("globals");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = [
  // Apply recommended rules for JavaScript
  js.configs.recommended,

  // Apply recommended rules for JSDoc
  jsdoc.configs['flat/recommended'],

  {
    // Apply this configuration to all files
    files: ["**/*.js"],

    // JSDoc plugin settings
    plugins: {
      jsdoc: jsdoc,
    },

    // Language options
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },

    // Custom rules
    rules: {
      "jsdoc/require-param-description": "warn",
      "jsdoc/require-returns-description": "warn",
    },
  },
];