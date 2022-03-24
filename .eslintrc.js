module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
};
