import { Theme } from '../../../theme'
import React, { ReactNode } from 'react'
import { ButtonContent, ButtonContentProps, StyledButton, StyledButtonProps } from './Button.styles'
import { useAmbiance, useTheme } from '../../../hooks'
import { ButtonVariant } from '..'
import { Icon, IconName } from '../../icons'

export type IconPosition = 'left' | 'right'

export type ButtonSize = 'large' | 'medium' | 'small' | 'full'

export type ButtonMargins = {
  horizontalMargin: string
  verticalMargin: string
}

export type ButtonProps = StyledButtonProps &
  ButtonContentProps & {
    icon?: IconName
    iconPosition?: IconPosition
    size?: ButtonSize
    variant?: ButtonVariant
    backgroundColor?: string
    foregroundColor?: string
    label?: string
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void
    children?: ReactNode
    disabled?: boolean
  }

export const getButtonMargins = (size: ButtonSize, theme: Theme): ButtonMargins => {
  switch (size) {
    case 'small':
      return {
        horizontalMargin: theme.spacing.xsmall,
        verticalMargin: theme.spacing.xxsmall
      }
    default:
      return {
        horizontalMargin: theme.spacing.large,
        verticalMargin: theme.spacing.small
      }
  }
}

export const getButtonStyles = (props: ButtonProps, theme: Theme): ButtonProps => {
  const ambiance = useAmbiance()
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
        backgroundColor: theme.colors.primary,
        foregroundColor: theme.colors.onPrimary,
        ...common
      }
    case 'secondary':
      return {
        backgroundColor: ambiance?.color ? ambiance.color : theme.colors.secondaryButton,
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
            {props.icon && <Icon icon={props.icon} color={props.foregroundColor} />}
          </>
        )}
      </ButtonContent>
    </StyledButton>
  )
}
