import React, { createContext, ReactNode } from 'react'
import { gameflowTheme, Theme } from '~/foundation/index.js'

export interface ThemeContextProps {
  theme?: Theme
  children?: ReactNode
}

export const ThemeContext: React.Context<Theme> = createContext(gameflowTheme)

export const ThemeProvider = ({
  theme = gameflowTheme,
  children,
}: // eslint-disable-next-line no-undef
ThemeContextProps): JSX.Element => (
  <ThemeContext.Provider value={theme}>
    <>{children}</>
  </ThemeContext.Provider>
)
