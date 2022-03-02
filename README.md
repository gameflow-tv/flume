# Flume

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

React implementation of the [Flume design system](https://figma.com/file/fYSxWUqGTaa6d6X9IGDsoy/Flume), which is used for consistent branding and design across all Gameflow services and interfaces.

## Usage

### Install

```bash
# yarn
yarn add @gameflow-tv/flume

# npm
npm i @gameflow-tv/flume
```

### Theming

#### CSS/SCSS

Flume comes bundled with a global style bundle that sets up some global styles and provides utility CSS classes for vanilla CSS usage;

```jsx
import styles from '@gameflow-tv/flume/bundle.css'
```

#### React/JSX

Flume comes with its built-in theme which is used by all components. In order to use the theme, wrap your app in `ThemeProvider`:

```jsx
import { ThemeProvider } from '@gameflow-tv/flume'

const App = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
```

`ThemeProvider` uses the Gameflow theme by default, but this can be swapped out for any theme that implements the `Theme` interface:

```jsx
const myTheme: Theme = {
  /* Your theme */
}

return (
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>
)
```

## Development

### Consumer APIs

This package is made by developers and is consumed by developers. When adding new components to the library, keep in mind that any APIs you create should be:

- Simple
- Extensible
- Semantic

### Requirements

Every component must be responsive and accessible, and should be repesented with as few DOM elements as possible. For testing, you can use e.g. `a11y` in Storybook or tools such as [Lighthouse](https://developers.google.com/web/tools/lighthouse). We also recommend using screen readers and keyboard navigation for further testing.

This is a UI library. As such, we don't intend on writing more internal logic than what's required for UI purposes, leaving state management up to the consumer. This effectively lets consumers choose their own state management apporach, gain control over component behaviour and results in a more transparent library. Any internal behaviour determined by internally kept state _must_ have a very good reasoning and such behaviour has to be explicitly documented.

### Semantic versioning

This repository uses [semantic-release](https://github.com/semantic-release/semantic-release) for versioning. In order for us to automate the release process, we need to adhere to the commit message format specified by semantic-release.
