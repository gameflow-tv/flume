import React from 'react'
import { IconName } from '../../icons'
import { useAmbiance, useTheme } from '../../../hooks'
import { IconButton } from '../../buttons/IconButton'
import chroma from 'chroma-js'

export type ScrollButtonProps = {
  onClick?: () => void
  left?: boolean
  right?: boolean
  visible?: boolean
}

export const ScrollButton = ({ onClick, left, right, visible }: ScrollButtonProps) => {
  const ambiance = useAmbiance()
  const theme = useTheme()

  const icon: IconName = left ? 'arrow_left' : 'arrow_right'

  return (
    <IconButton
      icon={icon}
      size="xlarge"
      background={ambiance?.color ?? theme.colors.secondary}
      foreground={theme.colors.icon}
      hoverBackground={
        ambiance?.bottom.color ?? chroma(theme.colors.secondary).luminance(0.4).hex()
      }
      hoverForeground={ambiance?.root.color ?? chroma(theme.colors.secondary).luminance(0.2).hex()}
      onClick={onClick}
      hidden={!visible}
    />
  )
}
