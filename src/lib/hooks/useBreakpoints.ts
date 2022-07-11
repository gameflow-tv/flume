import { useTheme, useWindowDimensions } from './'
import { Screens } from '../foundation'

type NumberedBreakpoints = {
  [key in keyof Screens]: number
}

const parseBreakpoints = (breakpoints: Screens): NumberedBreakpoints => {
  let parsed: any = {}

  for (const key in breakpoints) {
    const value = breakpoints[key] as string
    parsed[key] = parseInt(value)
  }

  return parsed as NumberedBreakpoints
}

export type BreakpointsProps = {
  breakpoints: NumberedBreakpoints
  current: keyof Screens
  isMobile: boolean
  isDesktop: boolean
}

/** Retrieves a numbered version of the current Theme's breakpoints as well as the currently exceeded breakpoint */
export const useBreakpoints = () => {
  const theme = useTheme()
  const breakpoints = parseBreakpoints(theme.screens)
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
  const { screens } = useTheme()
  return parseBreakpoints(screens)
}

/** Retrieves the currently exceeded breakpoint */
export const useCurrentBreakpoint = (): keyof Screens => {
  const dimensions = useWindowDimensions()
  const width = dimensions?.width

  const { screens } = useTheme()
  const parsed = parseBreakpoints(screens)

  if (!width) {
    return 'default'
  }

  if (width.rem > parsed['2xl']) {
    return '2xl'
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
