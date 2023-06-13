import { fallback, Theme } from '~/foundation/index.js'
import type { OptionalConfig as TailwindConfig } from 'tailwindcss/types/config.js'
import {
  appendAmbianceColors,
  getTypographyConfig,
  keysToKebab,
  omit,
  shortenKeys,
} from './helpers.js'
import plugin from 'tailwindcss/plugin.js'

export const getConfig = (theme: Theme = fallback): Partial<TailwindConfig> => {
  const {
    colors: baseColors,
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
  const colors = appendAmbianceColors(baseColors)

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
      dropShadow: shadows,
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
      plugin(({ addComponents, addBase }) => {
        addComponents(typographyComponents)
        addBase({
          h1: typographyComponents['header-1'],
          h2: typographyComponents['header-2'],
          h3: typographyComponents['header-3'],
          h4: typographyComponents['header-4'],
          h5: typographyComponents['header-5'],
          p: typographyComponents['body-1'],
          span: typographyComponents['body-1'],
        })
      }),
    ],
  }
}
