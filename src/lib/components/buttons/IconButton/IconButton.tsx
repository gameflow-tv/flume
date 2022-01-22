import React from 'react'
import { ButtonVariant } from '..'
import { IconName } from '../../icons'
import { useAmbiance, useTheme } from '../../../hooks'
import { Theme } from '../../../theme'
import { Icon } from '../../icons/Icon'
import { StyledIconButton, StyledIconButtonProps } from './IconButton.styles'
import { Ambiance } from '../../../providers'

export type IconButtonSize = 'small' | 'medium' | 'large' | 'xlarge'

export type IconButtonProps = StyledIconButtonProps & {
  icon?: IconName
  label?: string
  onClick?: () => void
  size?: IconButtonSize
  variant?: ButtonVariant
}

const getIconButtonStyles = (props: IconButtonProps, theme: Theme): IconButtonProps => {
  const common = {
    ...props,
    borderRadius: theme.shapes.borders.small,
    transition: theme.transitions.short,
    shadow: theme.shadows.xsmall,
    hoverShadow: theme.shadows.small,
    borderColor: theme.colors.buttonBorder,
    glow: theme.shadows.glow
  }

  switch (props.variant) {
    case 'signal':
      return {
        backgroundColor: theme.colors.signal,
        foregroundColor: theme.colors.onSignal,
        ...common
      }
    default:
      return {
        backgroundColor: theme.colors.iconButton,
        foregroundColor: theme.colors.onIconButton,
        hoverForegroundColor: theme.colors.primaryText,
        ...common
      }
  }
}

export const IconButton = (props: IconButtonProps) => {
  const { color, child } = useAmbiance()
  const theme = useTheme()

  const styles = getIconButtonStyles(props, theme)

  if (!props.backgroundColor) {
    styles.backgroundColor = color
    styles.hoverBackgroundColor = child.color
  }

  return (
    <StyledIconButton {...styles} onClick={props.onClick}>
      <Icon icon={styles.icon} size={styles.size} color={styles.foregroundColor} />
    </StyledIconButton>
  )
}
