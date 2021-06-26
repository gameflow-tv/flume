export const pxToRem = (s: string): string => {
  return `${Number(s.split('px')[0]) / 16}rem`
}

export const numberToRem = (n: number): string => `${n}rem`
export const numberToPx = (n: number): string => `${n}px`
