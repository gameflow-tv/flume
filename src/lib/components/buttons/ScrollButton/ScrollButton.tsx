import React from 'react'
import { IconName } from '../../icons'
import { useAmbiance } from '../../../hooks'
import { IconButton } from '../../buttons/IconButton'

export type ScrollButtonProps = {
  onClick?: () => void
  left?: boolean
  right?: boolean
  visible?: boolean
}

export const ScrollButton = ({ onClick, left, right, visible }: ScrollButtonProps) => {
  const { color, bottom, root } = useAmbiance()

  const icon: IconName = left ? 'arrow_left' : 'arrow_right'

  return (
    <IconButton
      icon={icon}
      size="xlarge"
      backgroundColor={color}
      hoverBackgroundColor={bottom.color}
      hoverForegroundColor={root.color}
      onClick={onClick}
      hidden={!visible}
    />
  )
}
