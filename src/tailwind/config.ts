import { Theme } from '~/foundation/theme'
import type { OptionalConfig as TailwindConfig } from 'tailwindcss/types/config'

const screens = {
  default: '0rem',
  xs: '29rem',
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem',
  xxl: '90rem',
}

export const config = (theme: Theme): Partial<TailwindConfig> => {
  const { colors, spacing, typography, shadows, shapes, animations: animation } = theme
  return {
    theme: {
      screens,
      colors,
      spacing,
      animation,
      shadows,
      fontFamily: {
        header: ['Montserrat', 'Helvetica'],
        body: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        header1: typography.header1.fontSize,
        header2: typography.header2.fontSize,
        header3: typography.header3.fontSize,
        header4: typography.header4.fontSize,
        header5: typography.header5.fontSize,
        body1: typography.body1.fontSize,
        body2: typography.body2.fontSize,
        body3: typography.body3.fontSize,
        button: typography.button.fontSize,
        link: typography.link.fontSize,
        label1: typography.label1.fontSize,
        label2: typography.label2.fontSize,
      },
      fontWeight: {
        header1: typography.header1.fontWeight,
        header2: typography.header2.fontWeight,
        header3: typography.header3.fontWeight,
        header4: typography.header4.fontWeight,
        header5: typography.header5.fontWeight,
        body1: typography.body1.fontWeight,
        body2: typography.body2.fontWeight,
        body3: typography.body3.fontWeight,
        button: typography.button.fontWeight,
        link: typography.link.fontWeight,
        label1: typography.label1.fontWeight,
        label2: typography.label2.fontWeight,
      },
    },
    plugins: [
      ({ addUtilities }) => addUtilities({ ...typography }),
      ({ addUtilities }) => addUtilities({ ...shapes }),
    ],
  }
}
