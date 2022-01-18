export type Breakpoints = {
  default: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const fallback: Breakpoints = {
  default: '0rem',
  xs: '29rem',
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem',
  xxl: '90rem'
}

export default fallback
