import { ButtonVariant } from '..'
import { IconName } from '../../icons'
import { useAmbiance, useTheme } from '../../../hooks'
import { Theme } from '../../../theme'
import { Icon } from '../../icons/Icon'
import { StyledIconButton, StyledIconButtonProps } from './IconButton.styles'

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
    borderColor: theme.colors.buttonFocus,
    glow: theme.shadows.glow
  }

  switch (props.variant) {
    case 'signal':
      return {
        background: theme.colors.signal,
        foreground: theme.colors.onSignal,
        ...common
      }

    case 'primary':
      return {
        background: theme.colors.primary,
        foreground: theme.colors.onPrimary,
        ...common
      }
    default:
      return {
        background: theme.colors.secondary,
        foreground: theme.colors.onSecondary,
        hoverForeground: theme.colors.header,
        ...common
      }
  }
}

export const IconButton = (props: IconButtonProps) => {
  const ambiance = useAmbiance()
  const theme = useTheme()

  const styles = getIconButtonStyles(props, theme)

  return (
    <StyledIconButton
      hoverBackground={ambiance.child.color}
      background={ambiance.color}
      onClick={props.onClick}
      {...styles}
    >
      <Icon icon={styles.icon} size={styles.size} color={styles.foreground} />
    </StyledIconButton>
  )
}
