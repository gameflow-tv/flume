import { Animations } from '../animations'
import { BorderRadius } from './borderRadius'
import { Colors } from './colors'
import { Motion } from './motion'
import { Shadows } from './shadows'
import { Spacing } from './spacing'
import { Typography } from './typography'
import { Screens } from './screens'

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
