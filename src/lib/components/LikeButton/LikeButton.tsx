import { faHeart } from '@fortawesome/pro-light-svg-icons'
import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../theme'
import { LikeIcon } from './LikeButton.styles'

export type LikeButtonProps = {
  liked: boolean
  smallShadow: string
  xSmallShadow: string
  borderRadius: string
  fontSize: string
  neutralColor: string
}

export const LikeButton = (props: Partial<LikeButtonProps>) => {
  const [liked, setLiked] = useState(false)
  const theme = useContext(ThemeContext)

  return (
    <LikeIcon
      liked={liked}
      onClick={() => setLiked(!liked)}
      smallShadow={theme.shadows.small}
      xSmallShadow={theme.shadows.xsmall}
      borderRadius={theme.spacing.xxsmall}
      fontSize={theme.typography.header3.fontSize}
      color={theme.colors.primary}
      neutralColor={theme.colors.primaryText}>
      <FontAwesomeIcon icon={[liked ? 'fas' : 'fal', 'heart' as IconName]} />
    </LikeIcon>
  )
}
//
