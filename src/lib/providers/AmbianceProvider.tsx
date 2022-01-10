import * as React from 'react'
import { getLuminance } from '../helpers'
import { useTheme } from '../hooks'

export type Ambiance = {
  baseColor: string
  color: string
  elevation: number
  setElevation: (elevation: number) => void
}

export type AmbianceProviderProps = {
  elevation?: number
  color?: string
  children?: React.ReactNode
}

const AmbientColorContext = React.createContext<Ambiance>(undefined)

const AmbianceProvider: React.FC = ({
  color,
  children,
  elevation: baseElevation = 0
}: AmbianceProviderProps) => {
  const [elevation, setElevation] = React.useState(baseElevation)
  const theme = useTheme()

  if (!color) {
    color = theme.colors.primary
  }

  const value = {
    baseColor: color,
    elevation: 0,
    setElevation,
    color: getColorFromElevation(color, elevation)
  }

  return <AmbientColorContext.Provider value={value}>{children}</AmbientColorContext.Provider>
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

export { AmbientColorContext, AmbianceProvider }
