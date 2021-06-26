const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    stories: [
        '../src/lib/**/*.stories.mdx',
        '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true
            }
        },
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-controls'
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false
            }
        }
    },

    webpackFinal: async (config, { configType }) => {
        config.resolve.plugins = [new TsconfigPathsPlugin()]
        return config
    }
}