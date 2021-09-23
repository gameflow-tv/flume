import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ButtonVariant } from '..'
import { useTheme } from '../../../hooks'
import { Theme } from '../../../theme'
import { StyledIconButton, StyledIconButtonProps } from './IconButton.styles'

export type IconButtonSize = 'small' | 'medium' | 'large'

export type IconButtonProps = StyledIconButtonProps & {
  icon?: IconProp
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
        ...common
      }
  }
}

export const IconButton = (props: IconButtonProps) => {
  const theme = useTheme()
  props = getIconButtonStyles(props, theme)

  console.log(props)
  return (
    <StyledIconButton {...props} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
    </StyledIconButton>
  )
}
