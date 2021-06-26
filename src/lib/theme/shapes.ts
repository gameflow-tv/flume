export type Borders = {
  none: string
  small: string
  medium: string
  pill: string
  full: string
}

export type Shapes = {
  borders: Borders
}

const fallback: Shapes = {
  borders: {
    none: '0px',
    small: '4px',
    medium: '6px',
    pill: '100px',
    full: '50%',
  },
}

export default fallback
