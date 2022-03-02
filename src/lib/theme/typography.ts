// TODO: Get breakpoints from theme context
import { fallbackBreakpoints } from './breakpoints'

export type FontFamily = 'Montserrat' | 'Mulish'

/** Converts a `TypographyStyle` object to a css-compatible string */
export const typographyToCss = (style: TypographyStyle, overrides?: Partial<TypographyStyle>) => `
  font-family: ${overrides && overrides.fontFamily ? overrides.fontFamily : style.fontFamily};
  font-size: ${overrides && overrides.fontSize ? overrides.fontSize : style.fontSize};
  font-weight: ${overrides && overrides.fontWeight ? overrides.fontWeight : style.fontWeight};
  line-height: ${overrides && overrides.lineHeight ? overrides.lineHeight : style.lineHeight};
  margin-block: 0;

  @media (max-width: ${fallbackBreakpoints.sm}) {
    font-size: ${
      overrides && overrides.fontSize
        ? overrides.fontSize
        : style.mobileFontSize
        ? style.mobileFontSize
        : style.fontSize
    };
  }
`

export type TypographyStyle = {
  fontFamily: FontFamily
  fontSize: string
  lineHeight: number
  fontWeight: number
  mobileFontSize?: string
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

export const fallbackTypography: Typography = {
  header1: {
    fontSize: '2.25rem', // '36px'
    lineHeight: 1.2,
    fontWeight: 600,
    fontFamily: 'Montserrat',
    mobileFontSize: '1.5rem'
  },
  header2: {
    fontSize: '1.5rem', // '24px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat',
    mobileFontSize: '1.125rem'
  },
  header3: {
    fontSize: '1.125rem', // '18px'
    lineHeight: 1.2,
    fontWeight: 600,
    fontFamily: 'Montserrat',
    mobileFontSize: '1rem'
  },
  header4: {
    fontSize: '1rem', // '16px'
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: 'Montserrat',
    mobileFontSize: '0.875rem'
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
