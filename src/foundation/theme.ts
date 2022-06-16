import { Colors } from './colors.js'
import { Motion } from './motion.js'
import { Shadows } from './shadows.js'
import { Shapes } from './shapes.js'
import { Spacing } from './spacing.js'
import { Typography } from './typography.js'

export interface Theme {
  colors: Colors
  typography: Typography
  shapes: Shapes
  motion: Motion
  shadows: Shadows
  spacing: Spacing
}
