import { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeProvider'

/** Retrieves a Theme instance from the current context. Assumes a `ThemeProvider` is in the context.*/
export const useTheme = () => {
  return useContext(ThemeContext)
}
