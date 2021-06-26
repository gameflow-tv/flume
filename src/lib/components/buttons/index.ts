import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Theme } from '@theme'
import { ReactNode } from 'react'

export type IconPosition = 'left' | 'right'

export type ButtonSize = 'large' | 'medium' | 'small'

export type ButtonMargins = {
  horizontalMargin: string
  verticalMargin: string
}

export type ButtonProps = {
  children?: ReactNode
  icon?: IconProp
  icon_position?: IconPosition
  size: ButtonSize
}

export const getButtonMargins = (
  size: ButtonSize,
  theme: Theme
): ButtonMargins => {
  switch (size) {
    case 'large':
    case 'medium':
      return {
        horizontalMargin: theme.spacing.large,
        verticalMargin: theme.spacing.small,
      }
    case 'small':
      return {
        horizontalMargin: theme.spacing.xsmall,
        verticalMargin: theme.spacing.xxsmall,
      }
  }
}
