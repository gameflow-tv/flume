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
    motion,
  } = theme

  const { fontSize, fontWeight, typographyComponents } = getTypographyConfig(typography)

  return {
    presets: [],
    theme: {
      extend: {
        fontWeight,
        borderRadius,
      },
      screens,
      colors,
      spacing,
      animation,
      boxShadow: shadows,
      fontSize,
      fontFamily: {
        header: ['Montserrat', 'Helvetica'],
        body: ['Mulish', 'sans-serif'],
      },
      transitionTimingFunction: {
        default: motion.curve,
      },
    },
    plugins: [
      plugin(({ addComponents }) => {
        addComponents(typographyComponents)
      }),
    ],
  }
}
