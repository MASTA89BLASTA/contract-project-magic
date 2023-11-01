module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["error", "double"],
    "react/prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-console": "off",
  },
};
