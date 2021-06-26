import fallbackBreakpoints, { Breakpoints } from './breakpoints'
import fallbackColors, { Colors } from './colors'
import fallbackShadows, { Shadows } from './shadows'
import fallbackShapes, { Shapes } from './shapes'
import fallbackSpacing, { Spacing } from './spacing'
import fallbackTypography, { Typography } from './typography'

export type Theme = {
  breakpoints: Breakpoints
  colors: Colors
  shadows: Shadows
  shapes: Shapes
  spacing: Spacing
  typography: Typography
}

const fallback: Theme = {
  breakpoints: fallbackBreakpoints,
  colors: fallbackColors,
  shadows: fallbackShadows,
  shapes: fallbackShapes,
  spacing: fallbackSpacing,
  typography: fallbackTypography,
}

export default fallback
