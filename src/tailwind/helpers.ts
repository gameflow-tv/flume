import { Typography, TypographyData } from '~/foundation/index.js'

/**
 * @param typography The typography to be converted to a CSS string.
 * @param prop The property to be used in the CSS string.
 * @returns An array of all the given props' values.
 */
const getPropsFromTypography = (
  typography: Typography,
  prop: keyof Typography,
): { [key: string]: string } =>
  Object.keys(typography).reduce((acc, key) => ({ ...acc, [key]: typography[key][prop] }), {})

/**
 * @param typography The typography object to convert into CSS properties.
 * @returns All font sizes, font weights and the typography CSS classname keys.
 */
export const getTypographyConfig = (
  typography: Typography,
): {
  fontSize: { [key: string]: string }
  fontWeight: { [key: string]: string }
  typographyComponents: { [key: string]: TypographyData }[]
} => {
  const fontSize = getPropsFromTypography(typography, 'font-size')
  const fontWeight = getPropsFromTypography(typography, 'font-weight')

  // Convert the typography object into an object with `.className` CSS classname keys.
  const typographyComponents = Object.keys(typography).map((key) => ({
    [`.${key}`]: typography[key],
  }))

  return { fontSize, fontWeight, typographyComponents }
}

/**
 * @param obj The spacing object to convert into an object with shorthand keys.
 * @returns The spacing object with shorthand keys `(xxxs -> 3xs)`.
 */
export const shortenKeys = <T>(obj: Record<string, T>, key = 'x'): { [key: string]: T } => {
  const values = Object.keys(obj).map((k) => {
    let count = 0
    for (let i = 0; i < k.length; i++) {
      if (k.charAt(i) === key) {
        count++
      }
    }

    if (count <= 1) {
      return { [`${k}`]: obj[k] }
    }

    const stripped = k.replaceAll(key, '')
    return { [`${count}${key}${stripped}`]: obj[k] }
  })

  return values.reduce((acc, curr) => ({ ...acc, ...curr }), {})
}

const toKebabCase = (str: string) => {
  const k = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase()

  if (k.match(/\d+/g)?.length > 0) {
    return k.replace(/\d+/g, (match) => `-${match}`)
  }

  return k
}

const isObject = (args) =>
  args === Object(args) && !Array.isArray(args) && typeof args !== 'function'

export const keysToKebab = <T>(args: T): { [key: string]: any } => {
  const n = {}

  Object.keys(args).forEach((k) => {
    if (isObject(args[k])) {
      n[toKebabCase(k)] = keysToKebab(args[k])
    } else {
      n[toKebabCase(k)] = args[k]
    }
  })

  return n
}
