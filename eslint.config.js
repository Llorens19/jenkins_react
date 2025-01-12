import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Permite funciones del navegador
        ...globals.jest     // Añade soporte para Jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2021,
        sourceType: "module"
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: {
      react: pluginReact
    },
    rules: {
      "react/react-in-jsx-scope": "error",
      "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }]
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended
];
