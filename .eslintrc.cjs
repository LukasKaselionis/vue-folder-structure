module.exports = {
  env: { node: true },
  extends: [
    "plugin:vue/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    requireConfigFile: false,
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "vue/script-setup-uses-vars": "off",
    "vue/multi-word-component-names": "off",
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-param-reassign": 0,
    indent: ["error", 4, { "SwitchCase": 1 }],
    "vue/html-indent": [
      "error",
      4,
    ],
    "vue/script-indent": [
      "error",
      4,
      { "baseIndent": 1, "switchCase": 1 }
    ],
    "vue/no-multiple-template-root": 0,
    "semi": [2, "always"],
    "no-trailing-spaces": ["error", { "skipBlankLines": false }],
    "vue/no-multi-spaces": ["error", {"ignoreProperties": false}],
    "object-curly-spacing": ["error", "always"],
    "switch-colon-spacing": ["error", {"after": true, "before": false}],
    "quotes": ["error", "double"],
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
};
