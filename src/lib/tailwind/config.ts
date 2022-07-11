import { Theme, gameflowTheme } from '../foundation'
import type { OptionalConfig as TailwindConfig } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import { getTypographyConfig } from './helpers'

export const getConfig = (theme: Theme = gameflowTheme): Partial<TailwindConfig> => {
  const {
    colors,
    spacing,
    shadows,
    borderRadius,
    animations: animation,
    screens,
    typography,
  } = theme

  const { fontSize, fontWeight, typographyComponents } = getTypographyConfig(typography)

  return {
    presets: [],
    theme: {
      screens,
      colors,
      spacing,
      animation,
      borderRadius,
      boxShadow: shadows,
      fontSize,
      fontWeight,
      fontFamily: {
        header: ['Montserrat', 'Helvetica'],
        body: ['Mulish', 'sans-serif'],
      },
    },
    plugins: [
      plugin(({ addComponents }) => {
        addComponents(typographyComponents)
      }),
    ],
  }
}
