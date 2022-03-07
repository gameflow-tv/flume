import { fallbackTheme, Theme } from './theme'
import { Context, createContext, ReactNode } from 'react'

export type ThemeContextProps = {
  theme?: Theme
  children?: ReactNode
}

export const ThemeContext: Context<Theme> = createContext(fallbackTheme)

export const ThemeProvider = ({
  theme = fallbackTheme,
  children
}: ThemeContextProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>
    <>{children}</>
  </ThemeContext.Provider>
)
