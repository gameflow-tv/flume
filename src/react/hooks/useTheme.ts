import { useContext } from 'react'
import { ThemeContext } from '~/react/providers/index.js'

/** Retrieves a Theme instance from the current context. Assumes a `ThemeProvider` is in the context.*/
export const useTheme = () => useContext(ThemeContext)
