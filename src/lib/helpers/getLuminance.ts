import chroma from 'chroma-js'

export const getLuminance = (baseColor: string) => {
  return {
    lum02: chroma(baseColor).luminance(0.02).hex(),
    lum04: chroma(baseColor).luminance(0.04).hex(),
    lum06: chroma(baseColor).luminance(0.06).hex(),
    lum09: chroma(baseColor).luminance(0.09).hex(),
    lum10: chroma(baseColor).luminance(0.1).hex(),
    lum40: chroma(baseColor).luminance(0.4).hex()
  }
}
