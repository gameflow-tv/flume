import * as React from 'react'
import { getLuminance } from '../helpers'
import { useTheme } from '../hooks/useTheme'

export type AmbianceProps = {
  root: AmbianceProps
  bottom: AmbianceProps
  parent?: AmbianceProps
  child?: AmbianceProps
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
  const parent = React.useContext(AmbianceContext)
  const theme = useTheme()

  if (!parent && !elevation) {
    elevation = 0
  } else if (!elevation) {
    elevation = parent.elevation + 1
  }

  if (!parent && !color) {
    color = theme.colors.card
  } else if (!color) {
    color = parent.root.color
  }

  let tmp = {
    bottom: null,
    root: null,
    parent,
    elevation,
    color: getColorFromElevation(color, elevation)
  }

  let value: AmbianceProps = {
    ...tmp,
    root: getRootAmbiance(tmp),
    child: getChildAmbiance(tmp),
    bottom: getBottomAmbiance(tmp)
  }

  return <AmbianceContext.Provider value={value}>{children}</AmbianceContext.Provider>
}

const getChildAmbiance = (a: AmbianceProps): AmbianceProps => {
  if (!a.child && a.elevation <= 5) {
    let child: AmbianceProps = {
      bottom: a.bottom,
      root: a.root,
      elevation: a.elevation + 1,
      color: getColorFromElevation(a.color, a.elevation + 1),
      parent: a
    }

    child.child = getChildAmbiance(child)

    return child
  }

  return null
}

const getBottomAmbiance = (a: AmbianceProps): AmbianceProps => {
  if (!a.bottom && a.elevation <= 5) {
    let tmp = {
      bottom: null,
      root: a.root,
      elevation: 5,
      color: getColorFromElevation(a.color, 5),
      parent: a
    }

    tmp.bottom = tmp
    return tmp
  }

  return a
}

const getRootAmbiance = (a?: AmbianceProps): AmbianceProps => {
  if (!a?.parent) {
    return a
  }

  return getRootAmbiance(a.parent)
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
