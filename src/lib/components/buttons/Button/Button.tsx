import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Theme, ThemeContext } from '../../../theme'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonContent, ButtonContentProps, StyledButton, StyledButtonProps } from './Button.styles'

export type IconPosition = 'left' | 'right'

export type ButtonSize = 'large' | 'medium' | 'small'

export type ButtonVariant = 'primary' | 'secondary' | 'signal'

export type ButtonMargins = {
  horizontalMargin: string
  verticalMargin: string
}

export type ButtonProps = StyledButtonProps &
  ButtonContentProps & {
    icon?: IconProp
    icon_position?: IconPosition
    size: ButtonSize
    variant?: ButtonVariant
    backgroundColor?: string
    foregroundColor?: string
    label?: string
  }

export const getButtonMargins = (size: ButtonSize, theme: Theme): ButtonMargins => {
  switch (size) {
    case 'large':
    case 'medium':
      return {
        horizontalMargin: theme.spacing.large,
        verticalMargin: theme.spacing.small
      }
    case 'small':
      return {
        horizontalMargin: theme.spacing.xsmall,
        verticalMargin: theme.spacing.xxsmall
      }
  }
}

export const getButtonStyles = (props: ButtonProps, theme: Theme): ButtonProps => {
  const { horizontalMargin, verticalMargin } = getButtonMargins(props.size, theme)
  const common = {
    ...props,
    variant: props.variant ?? 'primary',
    borderRadius: theme.shapes.borders.small,
    glow: theme.shadows.glow,
    borderColor: theme.colors.buttonBorder,
    typography: theme.typography.button,
    horizontalMargin: horizontalMargin,
    verticalMargin: verticalMargin,
    size: props.size,
    shadow: theme.shadows.xsmall,
    transition: theme.transitions.short,
    icon_position: props.icon_position ?? 'right',
    gap: props.size === 'small' ? theme.spacing.xxsmall : theme.spacing.xsmall
  }
  switch (props.variant) {
    case 'primary':
      return {
        backgroundColor: props.backgroundColor ?? theme.colors.primary,
        foregroundColor: props.foregroundColor ?? theme.colors.onPrimary,
        ...common
      }
    case 'secondary':
      return {
        backgroundColor: theme.colors.secondaryButton,
        foregroundColor: theme.colors.onSecondaryButton,
        ...common
      }
    case 'signal':
      return {
        backgroundColor: theme.colors.signal,
        foregroundColor: theme.colors.onSignal,
        ...common
      }
  }
}

export const Button = (props: ButtonProps): JSX.Element => {
  const theme = useContext(ThemeContext)
  props = getButtonStyles(props, theme)

  console.log(props.icon && props.icon_position === 'left' && props.gap)

  return (
    <StyledButton {...props}>
      <ButtonContent {...props}>
        <p>{props.label}</p>
        {props.icon && <FontAwesomeIcon icon={props.icon} />}
      </ButtonContent>
    </StyledButton>
  )
}
