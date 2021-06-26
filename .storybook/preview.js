
import React from 'react'
import { ThemeProvider } from '@theme'
import '@theme/fonts.css'

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    )
]