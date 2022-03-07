import { useState } from 'react'
import { Icon } from '../../icons'
import { useTheme } from '../../../hooks'
import { Transition } from '../../../theme'
import { LikeIcon, LikeIconProps } from './LikeButton.styles'

export type LikeButtonProps = {
  liked?: boolean
  shadow?: string
  borderRadius?: string
  fontSize?: string
  neutralColor?: string
  disabled?: boolean
  color?: string
  background?: string
  transition?: Transition
  onClick?: () => void
}

export const LikeButton = (props: LikeButtonProps) => {
  const [liked, setLiked] = useState(false)
  const theme = useTheme()

  const styles: LikeIconProps = {
    background: theme.colors.secondary,
    transition: theme.transitions.long,
    shadow: theme.shadows.medium,
    shadowXs: theme.shadows.xsmall,
    shadowS: theme.shadows.small,
    glow: theme.shadows.glow,
    border: theme.colors.buttonFocus,
    ...props
  }

  return (
    <LikeIcon
      disabled={props.disabled}
      liked={liked}
      onClick={() => setLiked(!liked)}
      shadow={props.shadow || theme.shadows.xsmall}
      borderRadius={props.borderRadius || theme.spacing.xxsmall}
      fontSize={props.fontSize || theme.typography.header3.fontSize}
      color={props.color || theme.colors.primary}
      neutralColor={theme.colors.header}
      background={props.background || theme.colors.onSecondary}
      transition={props.transition || theme.transitions.long}
      {...styles}
    >
      <Icon icon={liked ? 'heart_filled' : 'heart'} />
    </LikeIcon>
  )
}
