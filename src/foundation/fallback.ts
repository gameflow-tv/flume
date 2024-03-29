/* eslint-disable quote-props */
import {
  Animations,
  BorderRadius,
  Breakpoints,
  Colors,
  Motion,
  Shadows,
  Spacing,
  Theme,
  Typography,
} from './types/index.js'

import { palette } from './palette.js'

export const motion: Motion = {
  short: '100ms',
  medium: '200ms',
  long: '300ms',
  curve: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
}

export const shadows: Shadows = {
  xs: '0 2px 4px rgba(0, 0, 0, 0.1)',
  sm: '0 4px 8px rgba(0, 0, 0, 0.1)',
  md: '0 4px 16px rgba(0, 0, 0, 0.2)',
  lg: '0 8px 20px rgba(0, 0, 0, 0.3)',
  focus: '0 0 4px 2px rgba(255, 255, 255, 1)',
  text: '0 2px 4px rgba(0, 0, 0, 0.6)',
}

export const colors: Colors = {
  primary: palette.amberOrange,
  onPrimary: palette.abbeyBlue,
  secondary: palette.abbeyBlue,
  tertiary: palette.emperorGray,
  quaternary: palette.white,
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

export const borderRadius: BorderRadius = {
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '12px',
}

export const spacing: Spacing = {
  xxxs: '2px',
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
}

const breakpoints: Breakpoints = {
  default: '0rem',
  xs: '29rem',
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem',
  xxl: '90rem',
}

export const typography: Typography = {
  header1: {
    fontSize: '2.25rem',
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  header2: {
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  header3: {
    fontSize: '1.125rem',
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  header4: {
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  header5: {
    fontSize: '0.875rem',
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.3',
    fontFamily: 'Mulish, Verdana, sans-serif',
  },
  body2: {
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.3',
    fontFamily: 'Mulish, Verdana, sans-serif',
  },
  body3: {
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '1.3',
    fontFamily: 'Mulish, Verdana, sans-serif',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: '700',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  label1: {
    fontSize: '0.75rem',
    fontWeight: '600',
    lineHeight: '1.1',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  label2: {
    fontSize: '0.6875rem',
    fontWeight: '600',
    lineHeight: '1.1',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
  label3: {
    fontSize: '0.625rem',
    fontWeight: '600',
    lineHeight: '1.1',
    fontFamily: 'Montserrat, Verdana, sans-serif',
  },
}

export const animations: Animations = {
  short: `${motion.curve} ${motion.short}`,
  medium: `${motion.curve} ${motion.medium}`,
  long: `${motion.curve} ${motion.long}`,
}

export const fallback: Theme = {
  colors,
  breakpoints,
  borderRadius,
  motion,
  shadows,
  spacing,
  typography,
  animations,
}
