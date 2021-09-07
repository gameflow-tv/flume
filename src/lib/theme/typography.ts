export type FontFamily = 'Montserrat' | 'Mulish'

export const typographyToCss = (style: TypographyStyle, overrides?: Partial<TypographyStyle>) => `
  font-family: ${overrides && overrides.fontFamily ? overrides.fontFamily : style.fontFamily};
  font-size: ${overrides && overrides.fontSize ? overrides.fontSize : style.fontSize};
  font-weight: ${overrides && overrides.fontWeight ? overrides.fontWeight : style.fontWeight};
  line-height: ${overrides && overrides.lineHeight ? overrides.lineHeight : style.lineHeight};
  margin-block: 0;
`

export type TypographyStyle = {
  fontFamily: FontFamily
  fontSize: string
  lineHeight: number
  fontWeight: number
}

export type Typography = {
  header1: TypographyStyle
  header2: TypographyStyle
  header3: TypographyStyle
  header4: TypographyStyle
  header5: TypographyStyle
  body1: TypographyStyle
  body2: TypographyStyle
  body3: TypographyStyle
  button: TypographyStyle
}

const fallback: Typography = {
  header1: {
    fontSize: '2.25rem', // '36px'
    lineHeight: 1.2,
    fontWeight: 600,
    fontFamily: 'Montserrat'
  },
  header2: {
    fontSize: '1.5rem', // '24px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat'
  },
  header3: {
    fontSize: '1.125rem', // '18px'
    lineHeight: 1.2,
    fontWeight: 600,
    fontFamily: 'Montserrat'
  },
  header4: {
    fontSize: '1rem', // '16px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat'
  },
  header5: {
    fontSize: '0.875rem', // '14px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat'
  },
  body1: {
    fontSize: '0.875rem', // '14px'
    lineHeight: 1.3,
    fontWeight: 400,
    fontFamily: 'Mulish'
  },
  body2: {
    fontSize: '0.75rem', // '12px'
    lineHeight: 1.2,
    fontWeight: 400,
    fontFamily: 'Mulish'
  },
  body3: {
    fontSize: '0.625rem', // '10px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Mulish'
  },
  button: {
    fontSize: '0.875rem', // '14px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat'
  }
}

export default fallback
