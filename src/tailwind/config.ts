import { gameflowTheme, Theme } from '~/foundation/index.js'
import type { OptionalConfig as TailwindConfig } from 'tailwindcss/types/config.js'
import { getTypographyConfig } from './helpers.js'
import plugin from 'tailwindcss/plugin.js'

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
