import React from 'react'
import { ThemeProvider } from '@theme'
import '@theme/fonts.css'
import { importIcons } from '@theme/icons'
import { addDecorator } from '@storybook/react'
import theme from './theme'

importIcons()
addDecorator(ThemeProvider)

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  layout: 'centered',
  docs: {
    theme
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
}
