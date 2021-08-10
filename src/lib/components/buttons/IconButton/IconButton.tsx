import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from '../../../hooks'
import { Theme } from '../../../theme'
import { StyledIconButton, StyledIconButtonProps } from './IconButton.styles'

export type IconButtonSize = 'small' | 'large'

export type IconButtonProps = StyledIconButtonProps & {
  icon?: IconProp
  label?: string
  onClick?: () => void
  size?: IconButtonSize
}

const getIconButtonStyles = (props: IconButtonProps, theme: Theme): IconButtonProps => {
  return {
    ...props,
    borderRadius: theme.shapes.borders.small,
    backgroundColor: theme.colors.iconButton,
    foregroundColor: theme.colors.onIconButton,
    transition: theme.transitions.short,
    shadow: theme.shadows.xsmall,
    hoverShadow: theme.shadows.small,
    borderColor: theme.colors.buttonBorder,
    glow: theme.shadows.glow
  }
}

export const IconButton = (props: IconButtonProps) => {
  const theme = useTheme()
  props = getIconButtonStyles(props, theme)

  return (
    <StyledIconButton {...props} onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
    </StyledIconButton>
  )
}
