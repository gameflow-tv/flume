/* eslint-disable no-undef */
module.exports = {
  extends: ['@gameflow-tv/eslint-config'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'sort-keys': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
}
