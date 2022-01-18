import { useTheme, useWindowDimensions } from '.'
import { Breakpoints } from '../theme'

type NumberedBreakpoints = {
  [key in keyof Breakpoints]: number
}

const parseBreakpoints = (breakpoints: Breakpoints): NumberedBreakpoints => {
  let parsed = {}

  for (const key in breakpoints) {
    const value = breakpoints[key]
    parsed[key] = parseInt(value)
  }

  return parsed as NumberedBreakpoints
}

export type BreakpointsProps = {
  breakpoints: NumberedBreakpoints
  current: keyof Breakpoints
}

/** Retrieves a numbered version of the current Theme's breakpoints as well as the currently exceeded breakpoint */
export const useBreakpoints = () => {
  const theme = useTheme()
  const breakpoints = parseBreakpoints(theme.breakpoints)
  const current = useCurrentBreakpoint()

  return {
    breakpoints,
    current
  }
}

/** Retrieves the current Theme's breakpoints and returns them as numbers.*/
export const useNumberedBreakpoints = (): NumberedBreakpoints => {
  const { breakpoints } = useTheme()
  return parseBreakpoints(breakpoints)
}

/** Retrieves the currently exceeded breakpoint */
export const useCurrentBreakpoint = (): keyof Breakpoints => {
  const { width } = useWindowDimensions()
  const { breakpoints } = useTheme()
  const parsed = parseBreakpoints(breakpoints)

  if (width > parsed.default) {
    return 'default'
  } else if (width > parsed.xs) {
    return 'xs'
  } else if (width > parsed.xs) {
    return 'sm'
  } else if (width > parsed.md) {
    return 'md'
  } else if (width > parsed.lg) {
    return 'lg'
  } else if (width > parsed.xl) {
    return 'xl'
  }
}
