module.exports = {
  env: { node: true },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest"
  }
}
