import { Colors } from './colors.js'
import { Motion } from './motion.js'
import { Shadows } from './shadows.js'
import { Shapes } from './shapes.js'
import { Spacing } from './spacing.js'
import { Typography } from './typography.js'
import { palette } from './palette.js'
import { Theme } from './theme.js'

export const motion: Motion = {
  short: 100,
  medium: 200,
  long: 300,
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
  xsmall: 2,
  small: 4,
  medium: 6,
  large: 12,
}

export const spacing: Spacing = {
  xxxsmall: 2,
  xxsmall: 4,
  xsmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
}

export const typography: Typography = {
  header1: {
    fontSize: 2.25,
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  header2: {
    fontSize: 1.5,
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  header3: {
    fontSize: 1.125,
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  header4: {
    fontSize: 1,
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  header5: {
    fontSize: 0.875,
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  body1: {
    fontSize: 0.875,
    fontWeight: 500,
    lineHeight: 1.3,
    fontFamily: 'Mulish',
  },
  body2: {
    fontSize: 0.75,
    fontWeight: 500,
    lineHeight: 1.3,
    fontFamily: 'Mulish',
  },
  body3: {
    fontSize: 0.625,
    fontWeight: 500,
    lineHeight: 1.3,
    fontFamily: 'Mulish',
  },
  button: {
    fontSize: 0.875,
    fontWeight: 500,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  link: {
    fontSize: 0.875,
    fontWeight: 500,
    lineHeight: 1.2,
    fontFamily: 'Montserrat',
  },
  label1: {
    fontSize: 0.75,
    fontWeight: 500,
    lineHeight: 1.0,
    fontFamily: 'Montserrat',
  },
  label2: {
    fontSize: 0.625,
    fontWeight: 500,
    lineHeight: 1.0,
    fontFamily: 'Montserrat',
  },
}

export const theme: Theme = {
  colors,
  typography,
  shapes,
  motion,
  shadows,
  spacing,
}
