import React from 'react'
import { useAmbiance } from '../../../hooks'
import { IconButton } from '../../buttons/IconButton'

export type ScrollButtonProps = {
  onClick?: () => void
}

export const ScrollButton = ({ onClick }: ScrollButtonProps) => {
  const { color, bottom, root } = useAmbiance()

  return (
    <IconButton
      icon="arrow_right"
      size="xlarge"
      backgroundColor={color}
      hoverBackgroundColor={bottom.color}
      hoverForegroundColor={root.color}
      onClick={onClick}
    />
  )
}
