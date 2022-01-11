import * as React from 'react'
import { getLuminance } from '../helpers'
import { useTheme } from '../hooks'
import { useAmbiance } from '../hooks/useAmbiance'

type AmbianceProps = {
  baseColor: string
  color: string
  elevation: number
}

type AmbianceProviderProps = {
  elevation?: number
  color?: string
  children?: React.ReactNode
}

const AmbianceContext = React.createContext<AmbianceProps>(undefined)

const Ambiance: React.FC<AmbianceProviderProps> = ({
  color,
  children,
  elevation
}: AmbianceProviderProps) => {
  const parent = useAmbiance()
  const theme = useTheme()

  if (!parent && !elevation) {
    elevation = 0
  } else if (!elevation) {
    elevation = parent.elevation + 1
  }

  if (!parent && !color) {
    color = theme.colors.card
  } else if (!color) {
    color = parent.baseColor
  }

  const value = {
    baseColor: color,
    elevation: elevation,
    color: getColorFromElevation(color, elevation)
  }

  return <AmbianceContext.Provider value={value}>{children}</AmbianceContext.Provider>
}

const getColorFromElevation = (color: string, elevation: number) => {
  const lum = getLuminance(color)
  switch (elevation) {
    case 0:
      return lum.lum02
    case 1:
      return lum.lum04
    case 2:
      return lum.lum06
    case 3:
      return lum.lum09
    case 4:
      return lum.lum10
    case 5:
      return lum.lum40
    default:
      return color
  }
}

export { Ambiance, AmbianceContext }
