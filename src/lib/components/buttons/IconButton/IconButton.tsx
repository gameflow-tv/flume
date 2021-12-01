import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import { ButtonVariant } from '..'
import { useTheme } from '../../../hooks'
import { Theme } from '../../../theme'
import { Icon } from '../../icons/Icon'
import { StyledIconButton, StyledIconButtonProps } from './IconButton.styles'

export type IconButtonSize = 'small' | 'medium' | 'large'

export type IconButtonProps = StyledIconButtonProps & {
  icon?: IconProp | string
  label?: string
  onClick?: () => void
  size?: IconButtonSize
  variant?: ButtonVariant
  fontAwesome?: boolean
}

const getIconButtonStyles = (props: IconButtonProps, theme: Theme): IconButtonProps => {
  const common = {
    ...props,
    borderRadius: theme.shapes.borders.small,
    transition: theme.transitions.short,
    shadow: theme.shadows.xsmall,
    hoverShadow: theme.shadows.small,
    borderColor: theme.colors.buttonBorder,
    glow: theme.shadows.glow,
    fontAwesome: props.fontAwesome ?? true
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

  return (
    <StyledIconButton {...props} onClick={props.onClick}>
      {props.fontAwesome ? (
        <FontAwesomeIcon icon={props.icon as IconProp} />
      ) : (
        <Icon icon={props.icon as string} size={props.size} color={props.foregroundColor} />
      )}
    </StyledIconButton>
  )
}
