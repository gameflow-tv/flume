export const pxToRem = (s: string): string => {
  let n = Number(s.split('px')[0])
  if (isNaN(n)) {
    return ''
  } else {
    return `${n / 16}rem`
  }
}
export const remToPx = (s: string): string => {
  let n = Number(s.split('rem')[0])
  if (isNaN(n)) {
    return ''
  } else {
    return `${n * 16}px`
  }
}
export const numberToRem = (n: number): string => `${n}rem`
export const numberToPx = (n: number): string => `${n}px`
