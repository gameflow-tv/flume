import { useContext } from 'react'
import { ThemeContext } from '../providers'

/** Retrieves a Theme instance from the current context. Assumes a `ThemeProvider` is in the context.*/
export const useTheme = () => {
  return useContext(ThemeContext)
}
