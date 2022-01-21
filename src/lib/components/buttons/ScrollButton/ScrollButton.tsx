import React from 'react'
import { useAmbiance } from '../../../hooks'
import { AmbianceContext } from '../../../providers'
import { IconButton } from '../../buttons/IconButton'

export type ScrollButtonProps = {
  boxShadowSmall: string
  boxShadowXSmall: string
  borderRadius: string
  color: string
}

export const ScrollButton = () => {
  const { color, bottom, root } = useAmbiance()

  return (
    <IconButton
      icon="arrow_right"
      size="xlarge"
      backgroundColor={color}
      hoverBackgroundColor={bottom.color}
      hoverForegroundColor={root.color}
    />
  )
}
