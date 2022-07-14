import { Screens } from './types/screens'
import { Colors } from './types/colors'
import { Motion } from './types/motion'
import { Shadows } from './types/shadows'
import { BorderRadius } from './types/borderRadius'
import { Spacing } from './types/spacing'
import { Typography } from './types/typography'
import { palette } from './palette'
import { Theme } from './types/theme'
import { Animations } from './animations'

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
}

export const colors: Colors = {
  primary: palette.amberOrange,
  'on-primary': palette.abbeyBlue,
  secondary: palette.abbeyBlue,
  tertiary: palette.emperorGray,
  quaternary: palette.white,
  header: palette.white,
  body: palette.white85,
  subtitle: palette.white75,
  icon: palette.white85,
  'button-focus': palette.white,
  signal: palette.punchRed,
  'on-signal': palette.white,
  success: palette.ufoGreen,
  'on-success': palette.parsleyGreen,
  warning: palette.lightningYellow,
  'on-warning': palette.mustardYellow,
  error: palette.cinnabarRed,
  'on-error': palette.faluRed,
  draw: palette.dustyGray,
  'highlight-10': palette.white10,
  'highlight-30': palette.white30,
  inactive: palette.white50,
  'overlay-30': palette.black30,
  'overlay-50': palette.black50,
  'overlay-70': palette.black70,
  shadow: palette.black,
}

export const borderRadius: BorderRadius = {
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '12px',
}

export const spacing: Spacing = {
  '3xs': '2px',
  '2xs': '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
}

const screens: Screens = {
  default: '0rem',
  xs: '29rem',
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem',
  '2xl': '90rem',
}

export const typography: Typography = {
  'header-xl': {
    fontSize: '2.25rem',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  'header-lg': {
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  'header-md': {
    fontSize: '1.125rem',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  'header-sm': {
    fontSize: '1rem',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  'header-xs': {
    fontSize: '0.875rem',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  'body-lg': {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.3',
    fontFamily: 'Mulish, sans-serif, Helvetica',
  },
  'body-md': {
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.3',
    fontFamily: 'Mulish, sans-serif, Helvetica',
  },
  'body-sm': {
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '1.3',
    fontFamily: 'Mulish, sans-serif, Helvetica',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.2',
    fontFamily: 'Montserrat',
  },
  'label-md': {
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.0',
    fontFamily: 'Montserrat',
  },
  'label-sm': {
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '1.0',
    fontFamily: 'Montserrat',
  },
}

export const animations: Animations = {
  short: `${motion.curve} ${motion.short}`,
  medium: `${motion.curve} ${motion.medium}`,
  long: `${motion.curve} ${motion.long}`,
}

export const gameflowTheme: Theme = {
  colors,
  screens,
  borderRadius,
  motion,
  shadows,
  spacing,
  typography,
  animations,
}
