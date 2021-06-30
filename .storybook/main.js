module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true
      }
    },
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource'
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  }
}
