module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["vue"],
  rules: {},
};
