import React from 'react'
import { importIcons } from '../src/lib/theme/icons'
import { ThemeProvider } from '../src'
import '../src/lib/theme/fonts.css'
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
    manual: true
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: true
    }
  }
}
