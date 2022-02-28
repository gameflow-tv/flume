// .storybook/YourTheme.js

import { create } from '@storybook/theming'
import FlumeLogo from './assets/flume.svg'

export const theme = create({
  base: 'dark',
  brandTitle: 'Flume',
  brandUrl: 'https://github.com/gameflow-tv/flume',
  brandImage: FlumeLogo
})
