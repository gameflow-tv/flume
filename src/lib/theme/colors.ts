import { palette } from './palette'

export type Colors = {
  primary: string
  onPrimary: string
  secondary: string
  onSecondary: string
  signal: string
  onSignal: string
  icon: string
  header: string
  body: string
  subtitle: string
  buttonFocus: string
  success: string
  onSuccess: string
  warning: string
  onWarning: string
  error: string
  onError: string
  shadow: string
  highlight: string
  inactive: string
  overlay: string
  win: string
  loss: string
  winner: string
  runnerup: string
  elimination: string
}

export const fallbackColors: Colors = {
  primary: palette.amberOrange,
  onPrimary: palette.abbeyBlue,
  secondary: palette.emperorGray,
  onSecondary: palette.offWhite,
  signal: palette.punchRed,
  onSignal: palette.white,
  icon: palette.offWhite,
  header: palette.white,
  body: palette.offWhite,
  subtitle: palette.lightGray,
  buttonFocus: palette.white,
  success: palette.emeraldGreen,
  onSuccess: palette.parsleyGreen,
  warning: palette.lightningYellow,
  onWarning: palette.mustardYellow,
  error: palette.cinnabarRed,
  onError: palette.faluRed,
  shadow: palette.black,
  highlight: palette.white10,
  inactive: palette.white50,
  overlay: palette.black70,
  win: palette.bracketGreen,
  loss: palette.bracketRed,
  winner: palette.wattleGold,
  runnerup: palette.mistyGray,
  elimination: palette.lightGray
}
