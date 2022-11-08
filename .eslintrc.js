module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // enable additional rules
    indent: "off",
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "class-methods-use-this": "off",
  },
};