export type Breakpoints = {
  phones: string
  tablets: string
  desktops: string
  large: string
  xlarge: string
}

const fallback: Breakpoints = {
  phones: '576px',
  tablets: '768px',
  desktops: '992px',
  large: '1200px',
  xlarge: '1440px'
}

export default fallback
