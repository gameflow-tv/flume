import { useTheme, useWindowDimensions } from './index.js'
import { Breakpoints } from '~/foundation/index.js'

type NumberedBreakpoints = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof Breakpoints]: number
}

const parseBreakpoints = (breakpoints: Breakpoints): NumberedBreakpoints => {
  const parsed: any = {}

  for (const key in breakpoints) {
    const value = breakpoints[key] as string
    parsed[key] = parseInt(value)
  }

  return parsed as NumberedBreakpoints
}

export interface BreakpointsProps {
  breakpoints: NumberedBreakpoints
  current: keyof Breakpoints
  isMobile: boolean
  isDesktop: boolean
}

/** Retrieves a numbered version of the current Theme's breakpoints as well as the currently exceeded breakpoint */
export const useBreakpoints = () => {
  const theme = useTheme()
  const breakpoints = parseBreakpoints(theme.breakpoints)
  const current = useCurrentBreakpoint()
  const dimensions = useWindowDimensions()

  const isMobile = dimensions.width.rem < breakpoints.lg
  const isDesktop = !isMobile

  return {
    breakpoints,
    current,
    dimensions,
    isMobile,
    isDesktop,
  }
}

/** Retrieves the current Theme's breakpoints and returns them as numbers.*/
export const useNumberedBreakpoints = (): NumberedBreakpoints => {
  const { breakpoints } = useTheme()
  return parseBreakpoints(breakpoints)
}

/** Retrieves the currently exceeded breakpoint */
export const useCurrentBreakpoint = (): keyof Breakpoints => {
  const dimensions = useWindowDimensions()
  const width = dimensions?.width

  const { breakpoints } = useTheme()
  const parsed = parseBreakpoints(breakpoints)

  if (!width) {
    return 'default'
  }

  if (width.rem > parsed.xxl) {
    return 'xxl'
  } else if (width.rem > parsed.xl) {
    return 'xl'
  } else if (width.rem > parsed.lg) {
    return 'lg'
  } else if (width.rem > parsed.md) {
    return 'md'
  } else if (width.rem > parsed.sm) {
    return 'sm'
  } else if (width.rem > parsed.xs) {
    return 'xs'
  }
  return 'default'
}
