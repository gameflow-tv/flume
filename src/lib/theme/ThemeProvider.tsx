import { fallbackTheme, Theme } from './theme'
import React, { ReactNode } from 'react'

export type ThemeContextProps = {
  theme?: Theme
  children?: ReactNode
}

export const ThemeContext: React.Context<Theme> = React.createContext(fallbackTheme)

export const ThemeProvider = ({
  theme = fallbackTheme,
  children
}: ThemeContextProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>
    <React.Fragment>{children}</React.Fragment>
  </ThemeContext.Provider>
)
