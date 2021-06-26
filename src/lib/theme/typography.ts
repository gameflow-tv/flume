export type FontFamily = 'Montserrat' | 'Mulish'

export const typographyToCss = (style: TypographyStyle) => `
  font-family: ${style.fontFamily};
  font-size: ${style.fontSize};
  font-weight: ${style.fontWeight};
  line-height: ${style.lineHeight};
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
    fontSize: '36px',
    lineHeight: 1.2,
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
  header2: {
    fontSize: '24px',
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat',
  },
  header3: {
    fontSize: '18px',
    lineHeight: 1.2,
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
  header4: {
    fontSize: '16px',
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat',
  },
  header5: {
    fontSize: '14px',
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat',
  },
  body1: {
    fontSize: '14px',
    lineHeight: 1.3,
    fontWeight: 400,
    fontFamily: 'Mulish',
  },
  body2: {
    fontSize: '12px',
    lineHeight: 1.2,
    fontWeight: 400,
    fontFamily: 'Mulish',
  },
  body3: {
    fontSize: '10px',
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Mulish',
  },
  button: {
    fontSize: '14px',
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat',
  },
}

export default fallback
