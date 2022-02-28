import chroma from 'chroma-js'

export const saturate = (baseColor: string, amount: number) => {
  return chroma(baseColor).saturate(amount).brighten(1).hex()
}
