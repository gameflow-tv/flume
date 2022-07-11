const getPropFromTypography = (typography: any, prop: string) => {
  return Object.keys(typography).reduce(
    (acc, key) => ({ ...acc, [key]: typography[key]?.[prop] }),
    {},
  )
}

export const getTypographyConfig = (typography: any) => {
  const fontSize = getPropFromTypography(typography, 'fontSize')
  const fontWeight = getPropFromTypography(typography, 'fontWeight')

  const typographyComponents = Object.keys(typography).map((key) => ({
    [`.${key}`]: typography!?.[key] as any,
  }))

  return { fontSize, fontWeight, typographyComponents }
}
