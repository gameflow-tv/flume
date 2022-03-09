import { createContext, CSSProperties, FC, ReactNode, useContext } from 'react'
import { useTheme } from '../hooks/useTheme'
import { getLuminance } from '../utils/getLuminance'
import { saturate } from '../utils/saturate'

interface AmbianceStyles extends CSSProperties {
  '--ambiance-color': string
  '--ambiance-root-color': string
  '--ambiance-bottom-color': string
  '--ambiance-elevation-0': string
  '--ambiance-elevation-1': string
  '--ambiance-elevation-2': string
  '--ambiance-elevation-3': string
  '--ambiance-elevation-4': string
  '--ambiance-elevation-5': string
}
export interface AmbianceProps {
  root: AmbianceProps
  bottom: AmbianceProps
  parent?: AmbianceProps
  child?: AmbianceProps
  color: string
  elevation: number
  source?: string
}

interface AmbianceProviderProps {
  id?: string
  elevation?: number
  color?: string
  children?: ReactNode
}

const AmbianceContext = createContext<AmbianceProps>(undefined)

const AmbianceConsumer = AmbianceContext.Consumer

const Ambiance: FC<AmbianceProviderProps> = ({
  id,
  color,
  children,
  elevation
}: AmbianceProviderProps) => {
  const parent = useContext(AmbianceContext)
  const theme = useTheme()
  let source: string

  if (!parent && typeof elevation === 'undefined') {
    elevation = 0
  } else if (typeof elevation === 'undefined') {
    elevation = parent.elevation + 1
  }

  if (!parent && !color) {
    color = theme.colors.secondary
  } else if (!color) {
    color = parent.source
  }

  if (!color && parent) {
    source = parent.source
  } else {
    source = color
  }

  let tmp = {
    bottom: null,
    root: null,
    parent,
    elevation,
    color: getColorFromElevation(source, elevation),
    source
  }

  let value: AmbianceProps = {
    ...tmp,
    root: getRootAmbiance(tmp),
    child: getChildAmbiance(tmp),
    bottom: getBottomAmbiance(tmp)
  }

  const styles: AmbianceStyles = {
    '--ambiance-color': value.color,
    '--ambiance-root-color': value.root.color,
    '--ambiance-bottom-color': value.bottom.color,
    '--ambiance-elevation-0': getColorFromElevation(source, 0),
    '--ambiance-elevation-1': getColorFromElevation(source, 1),
    '--ambiance-elevation-2': getColorFromElevation(source, 2),
    '--ambiance-elevation-3': getColorFromElevation(source, 3),
    '--ambiance-elevation-4': getColorFromElevation(source, 4),
    '--ambiance-elevation-5': getColorFromElevation(source, 5)
  }

  return (
    <AmbianceContext.Provider value={value}>
      <div id={id} style={styles}>
        {children}
      </div>
    </AmbianceContext.Provider>
  )
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
      return saturate(lum.lum40, 1)
    default:
      return color
  }
}

export { Ambiance, AmbianceContext, AmbianceConsumer }
