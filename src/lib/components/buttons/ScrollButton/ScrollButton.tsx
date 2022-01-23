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
      backgroundColor={ambiance?.color ?? theme.colors.secondaryButton}
      hoverBackgroundColor={
        ambiance?.bottom.color ?? chroma(theme.colors.secondaryButton).luminance(0.04).hex()
      }
      hoverForegroundColor={
        ambiance?.root.color ?? chroma(theme.colors.secondaryButton).luminance(0.4).hex()
      }
      onClick={onClick}
      hidden={!visible}
    />
  )
}
