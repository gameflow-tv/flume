/** Converts a `px` value to a `rem` value */
export const pxToRem = (s: string): string => {
  let n = Number(s.split('px')[0])
  if (isNaN(n)) {
    return ''
  } else {
    return `${n / 16}rem`
  }
}

/** Converts a `rem` value to a `px` value */
export const remToPx = (s: string): string => {
  let n = Number(s.split('rem')[0])
  if (isNaN(n)) {
    return ''
  } else {
    return `${n * 16}px`
  }
}

/** Suffixes the given value with `rem` */
export const numberToRem = (n: number): string => `${n}rem`

/** Suffixes the given value with `px` */
export const numberToPx = (n: number): string => `${n}px`
