import React from 'react'
import { Ambiance } from '../src/lib/providers/AmbianceProvider'
import { ThemeProvider } from '../src'
import '../src/lib/theme/fonts.css'
import theme from './theme'

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Ambiance elevation={1}>
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
