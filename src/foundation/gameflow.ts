import { Colors } from './colors.js'
import { Motion } from './motion.js'
import { Shadows } from './shadows.js'
import { Shapes } from './shapes.js'
import { Spacing } from './spacing.js'
import { Typography } from './typography.js'
import { palette } from './palette.js'
import { Theme } from './theme.js'
import { Animations } from './animations.js'

export const motion: Motion = {
  short: '100ms',
  medium: '200ms',
  long: '300ms',
  curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
}

export const shadows: Shadows = {
  xsmall: '0 2px 4px rgba(0, 0, 0, 0.1)',
  small: '0 4px 8px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 16px rgba(0, 0, 0, 0.2)',
  large: '0 8px 20px rgba(0, 0, 0, 0.3)',
  focus: '0 0 4px 2px rgba(255, 255, 255, 1)',
}

export const colors: Colors = {
  primary: palette.amberOrange,
  onPrimary: palette.abbeyBlue,
  secondary: palette.abbeyBlue,
  tertiary: palette.emperorGray,
  quarternary: palette.white,
  header: palette.white,
  body: palette.white85,
  subtitle: palette.white75,
  icon: palette.white85,
  buttonFocus: palette.white,
  signal: palette.punchRed,
  onSignal: palette.white,
  success: palette.ufoGreen,
  onSuccess: palette.parsleyGreen,
  warning: palette.lightningYellow,
  onWarning: palette.mustardYellow,
  error: palette.cinnabarRed,
  onError: palette.faluRed,
  draw: palette.dustyGray,
  highlight10: palette.white10,
  highlight30: palette.white30,
  inactive: palette.white50,
  overlay30: palette.black30,
  overlay50: palette.black50,
  overlay70: palette.black70,
  shadow: palette.black,
}

export const shapes: Shapes = {
  xsmall: '2px',
  small: '4px',
  medium: '6px',
  large: '12px',
}

export const spacing: Spacing = {
  xxxsmall: '2px',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
}

export const typography: Typography = {
  header1: {
    fontSize: '2.25rem',
    fontWeight: '600',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  header2: {
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  header3: {
    fontSize: '1.125rem',
    fontWeight: '600',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  header4: {
    fontSize: '1rem',
    fontWeight: '600',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  header5: {
    fontSize: '0.875rem',
    fontWeight: '600',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.3px',
    fontFamily: 'Mulish',
  },
  body2: {
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.3px',
    fontFamily: 'Mulish',
  },
  body3: {
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '1.3px',
    fontFamily: 'Mulish',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.2px',
    fontFamily: 'Montserrat',
  },
  label1: {
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.0px',
    fontFamily: 'Montserrat',
  },
  label2: {
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '1.0px',
    fontFamily: 'Montserrat',
  },
}

export const animations: Animations = {
  short: `${motion.curve} ${motion.short}`,
  medium: `${motion.curve} ${motion.medium}`,
  long: `${motion.curve} ${motion.long}`,
}

export const theme: Theme = {
  colors,
  typography,
  shapes,
  motion,
  shadows,
  spacing,
  animations,
}
