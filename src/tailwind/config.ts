import { gameflowTheme, Theme } from '~/foundation/index.js'
import type { OptionalConfig as TailwindConfig } from 'tailwindcss/types/config.js'
import { getTypographyConfig, keysToKebab, shortenKeys } from './helpers.js'
import plugin from 'tailwindcss/plugin.js'

export const getConfig = (theme: Theme = gameflowTheme): Partial<TailwindConfig> => {
  const {
    colors,
    spacing,
    shadows,
    borderRadius,
    animations: animation,
    breakpoints,
    typography,
    motion,
  } = keysToKebab(theme)

  const { fontSize, fontWeight, typographyComponents } = getTypographyConfig(typography)
  const shortenedSpacing = shortenKeys<string>(spacing)

  return {
    presets: [],
    theme: {
      extend: {
        fontWeight,
        borderRadius,
      },
      screens: breakpoints,
      colors,
      spacing: shortenedSpacing,
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
