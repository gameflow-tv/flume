module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    '@gameflow-tv/eslint-config',
  ],
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
}
