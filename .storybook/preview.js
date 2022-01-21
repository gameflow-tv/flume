import React from 'react'
import { Ambiance, ThemeProvider } from '../src'
import '../src/lib/theme/fonts.css'
import theme from './theme'

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Ambiance>
        <Story />
      </Ambiance>
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
  viewMode: 'canvas'
}
