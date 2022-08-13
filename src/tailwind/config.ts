import { gameflowTheme, Theme } from '~/foundation/index.js'
import type { OptionalConfig as TailwindConfig } from 'tailwindcss/types/config.js'
import { getTypographyConfig, keysToKebab, omit, shortenKeys } from './helpers.js'
import plugin from 'tailwindcss/plugin.js'

export const getConfig = (theme: Theme = gameflowTheme): Partial<TailwindConfig> => {
  const {
    colors,
    spacing,
    shadows,
    'border-radius': borderRadius,
    animations: animation,
    breakpoints,
    typography,
    motion,
  } = keysToKebab(theme)

  const { fontSize, fontWeight, typographyComponents } = getTypographyConfig(typography)
  const shortenedSpacing = shortenKeys<string>(spacing)
  const screens = shortenKeys<string>(breakpoints)

  return {
    presets: [],
    theme: {
      extend: {
        fontWeight,
        borderRadius,
      },
      colors,
      textColor: colors,
      backgroundColor: colors,
      screens,
      spacing: shortenedSpacing,
      gap: shortenedSpacing,
      animation,
      boxShadow: shadows,
      fontSize,
      transitionDuration: omit(motion, 'curve'),
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
