module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)', '../docs/**/*.stories.@(js|ts|jsx|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource',
    '@storybook/preset-scss'
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  },
  core: {
    builder: 'webpack5'
  }
}
