export type Shadows = {
  xsmall: string
  small: string
  medium: string
  large: string
  glow: string
}

const fallback: Shadows = {
  xsmall: '0 2px 0.4rem rgba(0,0,0,0.1)',
  small: '0 4px 0.5rem rgba(0,0,0,0.2)',
  medium: '0 4px 1rem rgba(0,0,0,0.3)',
  large: '0 4px 1.5rem rgba(0,0,0,0.4)',
  glow: '0px 0px 2px 2px rgba(255,255,255,1)',
}

export default fallback
