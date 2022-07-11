import React, { ReactNode, createContext } from 'react'
import { Theme, gameflowTheme } from '../foundation'

export interface ThemeContextProps {
  theme?: Theme
  children?: ReactNode
}

export const ThemeContext: React.Context<Theme> = createContext(gameflowTheme)

export const ThemeProvider = ({
  theme = gameflowTheme,
  children,
}: ThemeContextProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>
    <>{children}</>
  </ThemeContext.Provider>
)
