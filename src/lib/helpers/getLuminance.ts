import chroma from 'chroma-js'

export const getLuminance = (color: string) => {
  return {
    lum02: chroma(color).luminance(0.02).hex(),
    lum04: chroma(color).luminance(0.04).hex(),
    lum06: chroma(color).luminance(0.06).hex(),
    lum09: chroma(color).luminance(0.09).hex(),
    lum10: chroma(color).luminance(0.1).hex(),
    lum40: chroma(color).luminance(0.4).hex()
  }
}
