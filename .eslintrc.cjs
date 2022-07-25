/* eslint-disable no-undef */
module.exports = {
  extends: [
    '@gameflow-tv/eslint-config',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
}
