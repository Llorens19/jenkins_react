import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        jest: true // Esto añade las variables globales de Jest
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect" // Detecta automáticamente la versión de React
      }
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
];
