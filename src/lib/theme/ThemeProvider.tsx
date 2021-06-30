import fallback, { Theme } from './theme'
import React, { ReactNode } from 'react'

export type ThemeContextProps = {
  theme?: Theme
  children?: ReactNode
}

export const ThemeContext: React.Context<Theme> = React.createContext(fallback)

export const ThemeProvider = ({ theme = fallback, children }: ThemeContextProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)
