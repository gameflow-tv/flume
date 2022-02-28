import React from 'react'
import { Ambiance } from '../src/lib/providers/Ambiance'
import { ThemeProvider } from '../src'
import '../src/lib/theme/fonts.css'

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
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true
  },
  viewMode: 'canvas'
}
