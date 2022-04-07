module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:mdx/recommended'
  ],
  settings: {
    'mdx/code-blocks': true
  },
  rules: {
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': 'error',
    'no-console': 'error',
    'no-empty': 'error',
    'no-nested-ternary': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    complexity: ['error', 6],
    eqeqeq: 'error',
    quotes: ['error', 'single']
  }
}
