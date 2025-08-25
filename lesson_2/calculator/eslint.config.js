export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        require: "readonly",
        alert: "readonly"
      }
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "no-debugger": "error",
      "eqeqeq": "error",
      "curly": "error",
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "keyword-spacing": "error",
      "space-infix-ops": "error",
      "no-trailing-spaces": "error",
      "no-multi-spaces": "error",
      "max-len": ["error", { code: 80, ignoreUrls: true }]
    }
  }
];