import { Colors, Typography, TypographyData } from '~/foundation/index.js'

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

  // Workaround to get inherit sizes
  fontSize.inherit = 'inherit'

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

/**
 * @param str The string to convert into kebab case.
 * @returns The string in kebab case.
 */
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

/**
 * @param args The value to check whether is an object or not.
 */
const isObject = (args: unknown) =>
  args === Object(args) && !Array.isArray(args) && typeof args !== 'function'

/**
 * @param args The object which keys are to be converted to kebab case.
 * @returns The object with keys converted to kebab case.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

/**
 * @param obj The object to omit a key from.
 * @param omitKey The key to omit from the object.
 * @returns The object without the omitted key.
 */
export const omit = <T>(obj: T, omitKey: keyof T): Partial<T> =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key]
    }
    return result
  }, {})

/**
 *
 * @param colors The colors to append ambiance colors to.
 * @returns The colors with ambiance colors appended.
 */
export const appendAmbianceColors = (colors: Colors): { [key: string]: string } => ({
  ...colors,
  'ambiance-current': 'var(--ambiance-current-color)',
  'ambiance-root': 'var(--ambiance-root-color)',
  'ambiance-bottom': 'var(--ambiance-bottom-color)',
  'ambiance-parent': 'var(--ambiance-parent-color)',
  'ambiance-child': 'var(--ambiance-child-color)',
  'ambiance-dark': 'var(--ambiance-dark)',
  'ambiance-medium-dark': 'var(--ambiance-medium-dark)',
  'ambiance-medium': 'var(--ambiance-medium)',
  'ambiance-medium-light': 'var(--ambiance-medium-light)',
  'ambiance-light': 'var(--ambiance-light)',
})
