module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn", // Warnings for unused variables
    "react/no-unused-state": "warn", // Warnings for unused state in React components
    "react/no-unused-prop-types": "warn", // Warnings for unused prop types
    "react/prop-types": "off", // Disable if using TypeScript
    "react/require-default-props": "off", // Disable if not using defaultProps
    "react/no-array-index-key": "warn", // Warn for array indices as keys
  },
};
