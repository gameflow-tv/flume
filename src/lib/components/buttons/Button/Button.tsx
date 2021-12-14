import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Theme } from '../../../theme'
import React, { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonContent, ButtonContentProps, StyledButton, StyledButtonProps } from './Button.styles'
import { useTheme } from '../../../hooks'
import { ButtonVariant } from '..'

export type IconPosition = 'left' | 'right'

export type ButtonSize = 'large' | 'medium' | 'small' | 'full'

export type ButtonMargins = {
  horizontalMargin: string
  verticalMargin: string
}

export type ButtonProps = StyledButtonProps &
  ButtonContentProps & {
    icon?: IconProp
    iconPosition?: IconPosition
    size?: ButtonSize
    variant?: ButtonVariant
    backgroundColor?: string
    foregroundColor?: string
    label?: string
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void
    children?: ReactNode
  }

export const getButtonMargins = (size: ButtonSize, theme: Theme): ButtonMargins => {
  switch (size) {
    case 'large':
    case 'medium':
    default:
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
    variant: props.variant ? props.variant : 'primary',
    borderRadius: theme.shapes.borders.small,
    glow: theme.shadows.glow,
    borderColor: theme.colors.buttonBorder,
    typography: theme.typography.button,
    horizontalMargin: horizontalMargin,
    verticalMargin: verticalMargin,
    size: props.size ? props.size : 'large',
    shadow: theme.shadows.xsmall,
    transition: theme.transitions.short,
    iconPosition: props.iconPosition ? props.iconPosition : 'right',
    gap: props.size === 'small' ? theme.spacing.xxsmall : theme.spacing.xsmall
  }
  switch (props.variant) {
    case 'primary':
      return {
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.colors.primary,
        foregroundColor: props.foregroundColor ? props.foregroundColor : theme.colors.onPrimary,
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
    default:
      return { ...common }
  }
}

export const Button = (props: ButtonProps): JSX.Element => {
  const theme = useTheme()
  props = getButtonStyles(props, theme)

  return (
    <StyledButton {...props} onClick={props.onClick}>
      <ButtonContent {...props}>
        {props.children ? (
          props.children
        ) : (
          <>
            <p>{props.label}</p>
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
          </>
        )}
      </ButtonContent>
    </StyledButton>
  )
}
