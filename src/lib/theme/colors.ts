import palette from './palette'

export type Colors = {
  primary: string
  onPrimary: string
  primaryText: string
  secondaryText: string
  tertiaryText: string
  background: string
  onBackground: string
  error: string
  onError: string
  warning: string
  onWarning: string
  success: string
  onSuccess: string
  signal: string
  onSignal: string
  secondaryButton: string
  onSecondaryButton: string
  buttonBorder: string
  iconButton: string
  onIconButton: string
  iconToggle: string
  onIconToggle: string
  textField: string
  onTextField: string
  shimmerHighlight: string
  shimmerBackground: string
  toggle: string
  onToggle: string
}

const fallback: Colors = {
  primary: palette.amberOrange,
  onPrimary: palette.abbeyBlue,
  primaryText: palette.white,
  secondaryText: palette.offWhite,
  tertiaryText: palette.lightGray,
  background: palette.abbeyBlue,
  onBackground: palette.emperorGray,
  error: palette.cinnabarRed,
  onError: palette.faluRed,
  warning: palette.lightningYellow,
  onWarning: palette.mustardYellow,
  success: palette.emeraldGreen,
  onSuccess: palette.parsleyGreen,
  signal: palette.punchRed,
  onSignal: palette.white,
  secondaryButton: palette.emperorGray,
  onSecondaryButton: palette.offWhite,
  buttonBorder: palette.white,
  iconButton: palette.emperorGray,
  onIconButton: palette.offWhite,
  iconToggle: palette.emperorGray,
  onIconToggle: palette.offWhite,
  textField: palette.emperorGray,
  onTextField: palette.white,
  shimmerHighlight: palette.white10,
  shimmerBackground: palette.black10,
  toggle: palette.codGray,
  onToggle: palette.white
}

export default fallback
