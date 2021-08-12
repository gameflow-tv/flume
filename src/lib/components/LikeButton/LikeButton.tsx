import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../theme'
import { LikeIcon } from './LikeButton.styles'

export type LikeButtonProps = {
  liked?: boolean
  shadow?: string
  borderRadius?: string
  fontSize?: string
  neutralColor?: string
  disabled?: boolean
  color?: string
  background?: string
  transition?: string
  onClick?: () => void
}

export const LikeButton = (props: Partial<LikeButtonProps>) => {
  const [liked, setLiked] = useState(false)
  const theme = useContext(ThemeContext)

  return (
    <LikeIcon
      disabled={props.disabled}
      liked={liked}
      onClick={() => setLiked(!liked)}
      shadow={props.shadow || theme.shadows.xsmall}
      borderRadius={props.borderRadius || theme.spacing.xxsmall}
      fontSize={props.fontSize || theme.typography.header3.fontSize}
      color={props.color || theme.colors.primary}
      neutralColor={theme.colors.primaryText}
      background={props.background || theme.colors.onBackground}
      transition={props.transition || theme.transitions.long}>
      <FontAwesomeIcon icon={[liked ? 'fas' : 'fal', 'heart' as IconName]} />
    </LikeIcon>
  )
}
