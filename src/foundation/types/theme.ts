import { Animations } from './animations.js'
import { BorderRadius } from './borderRadius.js'
import { Colors } from './colors.js'
import { Motion } from './motion.js'
import { Shadows } from './shadows.js'
import { Spacing } from './spacing.js'
import { Typography } from './typography.js'
import { Screens } from './screens.js'

export interface Theme {
  colors: Colors
  motion: Motion
  shadows: Shadows
  spacing: Spacing
  animations: Animations
  borderRadius: BorderRadius
  typography: Typography
  screens: Screens
}
