export type Borders = {
  none: string
  xxsmall: string
  xsmall: string
  small: string
  medium: string
  pill: string
  full: string
  handle: string
}

export type Shapes = {
  borders: Borders
}

export const fallbackShapes: Shapes = {
  borders: {
    none: '0px',
    xxsmall: '1px',
    xsmall: '2px',
    small: '4px',
    medium: '6px',
    pill: '100px',
    full: '50%',
    handle: '0px 4px 0px 4px'
  }
}
