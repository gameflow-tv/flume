import React, { createContext, ReactNode } from 'react'
import { fallback, Theme } from '~/foundation/index.js'

export interface ThemeContextProps {
  theme?: Theme
  children?: ReactNode
}

export const ThemeContext: React.Context<Theme> = createContext(fallback)

export const ThemeProvider = ({
  theme = fallback,
  children,
}: // eslint-disable-next-line no-undef
ThemeContextProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>
    <>{children}</>
  </ThemeContext.Provider>
)
