import { getLuminance } from '../utils'
import { useTheme } from '../hooks'
import { createContext, CSSProperties, FC, ReactNode, useContext } from 'react'

interface AmbianceStyles extends CSSProperties {
  '--ambiance-color': string
  '--ambiance-root-color': string
  '--ambiance-bottom-color': string
  '--ambiance-parent-color': string
  '--ambiance-child-color': string
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
  source: string
}

interface InternalAmbianceProps extends Omit<AmbianceProps, 'root' | 'bottom'> {
  root?: InternalAmbianceProps
  bottom?: InternalAmbianceProps
}

export interface AmbianceProviderProps {
  id?: string
  elevation?: number
  color?: string
  children?: ReactNode
}

const AmbianceContext = createContext<AmbianceProps | undefined>(undefined)

const AmbianceConsumer = AmbianceContext.Consumer

const Ambiance: FC<AmbianceProviderProps> = ({
  id,
  color,
  children,
  elevation
}: AmbianceProviderProps) => {
  const parent = useContext(AmbianceContext)
  const theme = useTheme()
  let source: string = ''

  if (parent && typeof elevation === 'undefined') {
    elevation = parent.elevation + 1
  } else {
    elevation ??= 0
  }

  if (!parent && !color) {
    source = theme.colors.secondary
  } else if (parent && !color) {
    source = parent.source
  } else if (color) {
    source = color
  } else {
    source ??= theme.colors.secondary
  }

  let tmp: InternalAmbianceProps = {
    bottom: undefined,
    root: undefined,
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
    '--ambiance-parent-color': value.parent?.color || value.color,
    '--ambiance-child-color': value.child?.color || value.color,
    '--ambiance-elevation-0': getColorFromElevation(source, 0),
    '--ambiance-elevation-1': getColorFromElevation(source, 1),
    '--ambiance-elevation-2': getColorFromElevation(source, 2),
    '--ambiance-elevation-3': getColorFromElevation(source, 3),
    '--ambiance-elevation-4': getColorFromElevation(source, 4),
    '--ambiance-elevation-5': getColorFromElevation(source, 5)
  }

  return (
    <AmbianceContext.Provider value={value}>
      <div id={id} style={styles} className="ambiance">
        {children}
      </div>
    </AmbianceContext.Provider>
  )
}

const getChildAmbiance = (a: InternalAmbianceProps): AmbianceProps | undefined => {
  if (!a.child && a.elevation <= 5) {
    let child: InternalAmbianceProps = {
      bottom: a.bottom,
      root: a.root,
      elevation: a.elevation + 1,
      color: getColorFromElevation(a.source, a.elevation + 1),
      parent: a as AmbianceProps,
      source: a.source
    }

    child.child = getChildAmbiance(child)

    return child as AmbianceProps
  }

  return
}

const getBottomAmbiance = (a: InternalAmbianceProps): AmbianceProps => {
  if (!a.bottom && a.elevation <= 5) {
    let tmp: InternalAmbianceProps = {
      bottom: a,
      root: a.root,
      elevation: 5,
      color: getColorFromElevation(a.source, 5),
      parent: a as AmbianceProps,
      source: a.source
    }

    tmp.bottom = tmp
    return tmp as AmbianceProps
  }

  return a as AmbianceProps
}

const getRootAmbiance = (a: InternalAmbianceProps): AmbianceProps => {
  if (!a.parent) {
    return a as AmbianceProps
  }

  return getRootAmbiance(a.parent)
}

const getColorFromElevation = (color: string, elevation: number) => {
  if (!color) {
    throw new Error(`Ambiance color is invalid: ${color}`)
  }

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

export { Ambiance, AmbianceContext, AmbianceConsumer }
